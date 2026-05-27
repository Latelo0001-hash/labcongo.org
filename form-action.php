<?php
declare(strict_types=1);

const LABCONGO_RECIPIENT = 'info@labcongo.org';

function mail_config(): array
{
    $config = [
        'host' => 'mail.latelo.cd',
        'port' => 465,
        'username' => 'info@labcongo.org',
        'password' => getenv('c}6x!DUf90%n') ?: '',
        'secure' => 'ssl',
        'from_email' => 'info@labcongo.org',
        'from_name' => 'LabCongo Website',
        'recipient' => LABCONGO_RECIPIENT,
        'timeout' => 20,
    ];

    $localConfig = __DIR__ . '/mail-config.php';
    if (is_file($localConfig)) {
        $overrides = require $localConfig;
        if (is_array($overrides)) {
            $config = array_merge($config, $overrides);
        }
    }

    return $config;
}

function clean_field($value): string
{
    if (is_array($value)) {
        $value = implode(', ', array_map('clean_field', $value));
    }

    return trim(strip_tags((string) $value));
}

function clean_header_value($value): string
{
    return preg_replace('/[\r\n]+/', ' ', clean_field($value));
}

function redirect_with_status(string $target, string $status): void
{
    if (!preg_match('/^[a-z0-9_-]+\.html$/i', $target)) {
        $target = 'index.html';
    }

    $separator = strpos($target, '?') === false ? '?' : '&';
    header('Location: ' . $target . $separator . 'form=' . rawurlencode($status));
    exit;
}

function is_local_request(): bool
{
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $serverAddress = $_SERVER['SERVER_ADDR'] ?? '';

    return strpos($host, '127.0.0.1') !== false
        || strpos($host, 'localhost') !== false
        || $serverAddress === '127.0.0.1'
        || $serverAddress === '::1';
}

function save_local_submission(string $subject, string $body): bool
{
    $entry = "==============================\n"
        . $subject . "\n"
        . $body . "\n\n";

    return file_put_contents(__DIR__ . '/.form-submissions.log', $entry, FILE_APPEND | LOCK_EX) !== false;
}

function mime_header(string $value): string
{
    $value = clean_header_value($value);

    if (preg_match('/[^\x20-\x7E]/', $value)) {
        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    return $value;
}

function smtp_read($socket): array
{
    $response = '';
    $code = 0;

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        $code = (int) substr($line, 0, 3);

        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    return [$code, $response];
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    [$code, $response] = smtp_read($socket);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed: ' . $command . ' Response: ' . trim($response));
    }

    return $response;
}

function smtp_data(string $headers, string $body): string
{
    $message = str_replace(["\r\n", "\r"], "\n", $headers . "\n\n" . $body);
    $lines = explode("\n", $message);

    foreach ($lines as &$line) {
        if (isset($line[0]) && $line[0] === '.') {
            $line = '.' . $line;
        }
    }
    unset($line);

    return implode("\r\n", $lines) . "\r\n.";
}

function smtp_send_mail(array $config, string $subject, string $body, string $replyTo): bool
{
    foreach (['host', 'port', 'username', 'password', 'from_email', 'recipient'] as $requiredKey) {
        if (empty($config[$requiredKey])) {
            throw new RuntimeException('Missing SMTP setting: ' . $requiredKey);
        }
    }

    $host = (string) $config['host'];
    $port = (int) $config['port'];
    $remote = ((string) $config['secure'] === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $socket = stream_socket_client($remote, $errno, $errstr, (int) $config['timeout'], STREAM_CLIENT_CONNECT);

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr . ' (' . $errno . ')');
    }

    stream_set_timeout($socket, (int) $config['timeout']);

    [$code, $response] = smtp_read($socket);
    if ($code !== 220) {
        fclose($socket);
        throw new RuntimeException('SMTP greeting failed: ' . trim($response));
    }

    $fromEmail = clean_header_value($config['from_email']);
    $fromName = clean_header_value($config['from_name'] ?? 'LabCongo Website');
    $recipient = clean_header_value($config['recipient']);
    $replyTo = filter_var($replyTo, FILTER_VALIDATE_EMAIL) ? $replyTo : $fromEmail;

    smtp_command($socket, 'EHLO labcongo.org', [250]);
    smtp_command($socket, 'AUTH LOGIN', [334]);
    smtp_command($socket, base64_encode((string) $config['username']), [334]);
    smtp_command($socket, base64_encode((string) $config['password']), [235]);
    smtp_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
    smtp_command($socket, 'RCPT TO:<' . $recipient . '>', [250, 251]);
    smtp_command($socket, 'DATA', [354]);

    $headers = [
        'From: ' . mime_header($fromName) . ' <' . $fromEmail . '>',
        'To: ' . $recipient,
        'Reply-To: ' . $replyTo,
        'Subject: ' . mime_header($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion(),
    ];

    smtp_command($socket, smtp_data(implode("\r\n", $headers), $body), [250]);
    smtp_command($socket, 'QUIT', [221, 250]);
    fclose($socket);

    return true;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with_status('index.html', 'invalid');
}

$redirectTarget = clean_header_value($_POST['_redirect'] ?? 'index.html');
$formType = clean_header_value($_POST['form_type'] ?? 'website_form');

$formLabels = [
    'analysis_request' => 'Contact / Analysis Request',
    'appointment' => 'Online Appointment',
    'contact' => 'Contact Form',
    'newsletter' => 'Newsletter Signup',
];

$formName = $formLabels[$formType] ?? ucwords(str_replace('_', ' ', $formType));
$senderEmail = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$subject = clean_header_value($_POST['subject'] ?? $formName);
$mailSubject = 'LabCongo Website - ' . $formName;

if ($subject !== '' && $subject !== $formName) {
    $mailSubject .= ' - ' . $subject;
}

$bodyLines = [
    'New message from the LabCongo website.',
    '',
    'Form: ' . $formName,
    'Date: ' . date('Y-m-d H:i:s O'),
    '',
    'Details:',
];

foreach ($_POST as $key => $value) {
    if (in_array($key, ['form_type', '_redirect'], true)) {
        continue;
    }

    $label = ucwords(str_replace('_', ' ', clean_header_value($key)));
    $bodyLines[] = $label . ': ' . clean_field($value);
}

$body = implode("\n", $bodyLines);
$config = mail_config();

if (empty($config['password'])) {
    if (is_local_request()) {
        save_local_submission($mailSubject, $body . "\n\nSMTP not sent: missing password.");
    }

    redirect_with_status($redirectTarget, 'config');
}

try {
    smtp_send_mail($config, $mailSubject, $body, $senderEmail ?: LABCONGO_RECIPIENT);
    if (is_local_request()) {
        save_local_submission($mailSubject, $body . "\n\nSMTP sent: true.");
    }

    redirect_with_status($redirectTarget, 'success');
} catch (Throwable $exception) {
    if (is_local_request()) {
        save_local_submission($mailSubject, $body . "\n\nSMTP error: " . $exception->getMessage());
    }

    redirect_with_status($redirectTarget, 'error');
}
