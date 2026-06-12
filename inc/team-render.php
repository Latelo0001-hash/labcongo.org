<?php
declare(strict_types=1);

function lc_team_data(): array
{
    static $data = null;

    if ($data === null) {
        $data = require __DIR__ . '/team-data.php';
    }

    return $data;
}

function lc_team_featured_member(): array
{
    return lc_team_data()['featured'];
}

function lc_team_members(): array
{
    return lc_team_data()['members'];
}

function lc_team_profiles(): array
{
    $data = lc_team_data();
    return array_merge([$data['featured']], $data['members']);
}

function lc_e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function lc_team_normalize_slug($slug): string
{
    return strtolower(preg_replace('/[^a-z0-9_-]/i', '', (string) $slug));
}

function lc_team_find_profile(string $slug): ?array
{
    $slug = lc_team_normalize_slug($slug);

    foreach (lc_team_profiles() as $member) {
        if ($member['slug'] === $slug) {
            return $member;
        }
    }

    return null;
}

function lc_team_biography_url(array $member): string
{
    return 'team-biography.php?member=' . rawurlencode($member['slug']);
}

function lc_team_render_social_links(array $member, string $buttonClass = 'btn btn-square btn-light mx-1'): void
{
    $icons = [
        'facebook' => 'fab fa-facebook-f',
        'twitter' => 'fab fa-twitter',
        'linkedin' => 'fab fa-linkedin-in',
        'youtube' => 'fab fa-youtube',
    ];

    foreach ($icons as $network => $iconClass) {
        $href = trim((string) ($member['socials'][$network] ?? '#'));
        if ($href === '') {
            $href = '#';
        }
        $label = ucfirst($network) . ' profile for ' . $member['name'];
        echo '<a class="' . lc_e($buttonClass) . '" href="' . lc_e($href) . '" aria-label="' . lc_e($label) . '"><i class="' . lc_e($iconClass) . '"></i></a>' . PHP_EOL;
    }
}

function lc_team_render_card_media(array $member, bool $linked = true): void
{
    $content = '';

    if (!empty($member['image'])) {
        $content = '<div class="team-photo-wrap"><img class="team-photo" src="' . lc_e($member['image']) . '" alt="' . lc_e($member['name']) . '"></div>';
    } else {
        $content = '<div class="team-avatar-wrap"><div class="team-avatar ' . lc_e($member['avatar_class']) . '">' . lc_e($member['initials']) . '</div></div>';
    }

    if (!$linked) {
        echo $content . PHP_EOL;
        return;
    }

    echo '<a class="team-profile-link" href="' . lc_e(lc_team_biography_url($member)) . '" aria-label="Read biography of ' . lc_e($member['name']) . '">' . PHP_EOL;
    echo '    ' . $content . PHP_EOL;
    echo '</a>' . PHP_EOL;
}

function lc_team_render_carousel(array $members): void
{
    foreach ($members as $member) {
        echo '<div class="team-item team-member-card h-100">' . PHP_EOL;
        lc_team_render_card_media($member);
        echo '    <div class="team-social">' . PHP_EOL;
        lc_team_render_social_links($member);
        echo '    </div>' . PHP_EOL;
        echo '    <div class="text-center p-4">' . PHP_EOL;
        echo '        <h5 class="mb-1">' . lc_e($member['display_name']) . '</h5>' . PHP_EOL;
        echo '        <a class="team-more-link" href="' . lc_e(lc_team_biography_url($member)) . '" aria-label="Read biography of ' . lc_e($member['name']) . '">voir plus</a>' . PHP_EOL;
        echo '    </div>' . PHP_EOL;
        echo '</div>' . PHP_EOL;
    }
}

function lc_team_render_featured_member(array $member): void
{
    echo '<div class="row g-5 align-items-center mb-5">' . PHP_EOL;
    echo '    <div class="col-md-6 wow fadeIn" data-wow-delay="0.3s">' . PHP_EOL;
    if (!empty($member['image'])) {
        echo '        <img class="img-fluid w-100" src="' . lc_e($member['image']) . '" alt="' . lc_e($member['name']) . '">' . PHP_EOL;
    } else {
        echo '        <div class="team-lead-placeholder"><div class="team-lead-avatar">' . lc_e($member['initials']) . '</div></div>' . PHP_EOL;
    }
    echo '    </div>' . PHP_EOL;
    echo '    <div class="col-md-6 wow fadeIn" data-wow-delay="0.5s">' . PHP_EOL;
    echo '        <h1 class="display-6 mb-3">' . lc_e($member['display_name']) . '</h1>' . PHP_EOL;
    echo '        <p class="mb-1">' . lc_e($member['role']) . '</p>' . PHP_EOL;
    echo '        <p class="mb-5">' . lc_e($member['location']) . '</p>' . PHP_EOL;
    echo '        <h3 class="mb-3">Biography</h3>' . PHP_EOL;
    foreach (array_slice($member['bio'], 0, 3) as $paragraph) {
        echo '        <p class="mb-4 text-justify">' . lc_e($paragraph) . '</p>' . PHP_EOL;
    }
    echo '        <a class="btn btn-primary py-3 px-4 mb-4" href="' . lc_e(lc_team_biography_url($member)) . '">Read Full Biography</a>' . PHP_EOL;
    echo '        <div class="d-flex">' . PHP_EOL;
    lc_team_render_social_links($member, 'btn btn-lg-square btn-primary me-2');
    echo '        </div>' . PHP_EOL;
    echo '    </div>' . PHP_EOL;
    echo '</div>' . PHP_EOL;
}

function lc_team_render_biography_media(array $member): void
{
    if (!empty($member['image'])) {
        echo '<div class="team-bio-photo"><img src="' . lc_e($member['image']) . '" alt="' . lc_e($member['name']) . '"></div>' . PHP_EOL;
        return;
    }

    echo '<div class="team-bio-photo team-bio-photo-placeholder"><span>' . lc_e($member['initials']) . '</span></div>' . PHP_EOL;
}

function lc_team_render_biography_card(array $member, int $index, bool $linked = false): void
{
    $delay = $index % 2 === 0 ? '0.1s' : '0.3s';
    $tag = $linked ? 'a' : 'div';
    $classes = 'team-bio-card' . ($linked ? ' team-bio-card-link' : '') . ' wow fadeInUp';
    $attributes = 'class="' . $classes . '" data-wow-delay="' . lc_e($delay) . '" id="' . lc_e($member['slug']) . '"';

    if ($linked) {
        $attributes .= ' href="' . lc_e(lc_team_biography_url($member)) . '" aria-label="Open biography for ' . lc_e($member['name']) . '"';
    }

    echo '<' . $tag . ' ' . $attributes . '>' . PHP_EOL;
    echo '    <div class="row g-0 align-items-stretch">' . PHP_EOL;
    echo '        <div class="col-lg-4">' . PHP_EOL;
    lc_team_render_biography_media($member);
    echo '        </div>' . PHP_EOL;
    echo '        <div class="col-lg-8">' . PHP_EOL;
    echo '            <div class="team-bio-content">' . PHP_EOL;
    echo '                <p class="text-primary fw-medium mb-1">' . lc_e($member['role']) . '</p>' . PHP_EOL;
    echo '                <h3 class="mb-2">' . lc_e($member['name']) . '</h3>' . PHP_EOL;
    echo '                <p class="mb-4"><i class="fa fa-map-marker-alt me-2 text-primary"></i>' . lc_e($member['location']) . '</p>' . PHP_EOL;
    foreach ($member['bio'] as $paragraph) {
        echo '                <p class="mb-3 text-justify">' . lc_e($paragraph) . '</p>' . PHP_EOL;
    }
    echo '            </div>' . PHP_EOL;
    echo '        </div>' . PHP_EOL;
    echo '    </div>' . PHP_EOL;
    echo '</' . $tag . '>' . PHP_EOL;
}

function lc_team_render_biographies(array $profiles): void
{
    foreach ($profiles as $index => $member) {
        lc_team_render_biography_card($member, $index, true);
    }
}

function lc_team_render_single_biography(array $member): void
{
    lc_team_render_biography_card($member, 0);
}
