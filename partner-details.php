<?php
// -------------------------------------------------------------------
// Partner categories data
// -------------------------------------------------------------------
$partner_categories = [
    'mining-operators' => [
        'slug'  => 'mining-operators',
        'label' => 'Mining Operators and Project Owners',
        'icon'  => 'fa-mountain',
        'intro' => 'Partners in this category are mining operators, exploration teams, and project owners who need reliable analytical information for technical decisions.',
        'focus' => [
            'Exploration and sample analysis programs',
            'Production support and quality control',
            'Project evaluation and technical reporting',
        ],
        'cards' => [
            ['icon' => 'fa-industry',        'label' => 'Mining operations'],
            ['icon' => 'fa-map-marked-alt',  'label' => 'Exploration projects'],
            ['icon' => 'fa-clipboard-check', 'label' => 'Quality-control programs'],
        ],
        'partners' => [
            [
                'name' => 'Kivu Mineral Resources',
                'type' => 'Mining operations',
                'photo' => 'img/fully-equipped-male-astronaut-holding-two-rocks.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-01.png',
                'summary' => 'Kivu Mineral Resources works with LabCongo for exploration support, routine ore characterization, and production quality control across active mining sites.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                ],
            ],
            [
                'name' => 'Katanga Exploration Group',
                'type' => 'Exploration projects',
                'photo' => 'img/male-scientist-doing-research-work-burnt-field.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-02.png',
                'summary' => 'Katanga Exploration Group relies on LabCongo for sample preparation planning, geochemical screening, and technical reporting that supports resource evaluation.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'X', 'icon' => 'fab fa-twitter', 'url' => 'https://x.com/'],
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                ],
            ],
            [
                'name' => 'Copperbelt QA Alliance',
                'type' => 'Quality-control programs',
                'photo' => 'img/feature-mining-abstract.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-03.png',
                'summary' => 'Copperbelt QA Alliance partners with LabCongo to verify assay consistency, monitor turnaround discipline, and document traceable laboratory controls.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'YouTube', 'icon' => 'fab fa-youtube', 'url' => 'https://www.youtube.com/'],
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                ],
            ],
        ],
    ],
    'academic-training' => [
        'slug'  => 'academic-training',
        'label' => 'Academic and Training Institutions',
        'icon'  => 'fa-university',
        'intro' => 'Partners in this category include schools, universities, and training organizations that support local technical skills and laboratory learning.',
        'focus' => [
            'Student exposure to laboratory practice',
            'Technical training for technicians and engineers',
            'Research, exchange, and capacity building',
        ],
        'cards' => [
            ['icon' => 'fa-school',               'label' => 'Universities and schools'],
            ['icon' => 'fa-user-graduate',         'label' => 'Training centers'],
            ['icon' => 'fa-chalkboard-teacher',    'label' => 'Technical exchange programs'],
        ],
        'partners' => [
            [
                'name' => 'Institut Minier de Kinshasa',
                'type' => 'Universities and schools',
                'photo' => 'img/science-day-celebration-with-kids-learning-laboratory.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-04.png',
                'summary' => 'Institut Minier de Kinshasa collaborates with LabCongo to expose students to laboratory methods, mineral analysis workflows, and applied mining science.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                ],
            ],
            [
                'name' => 'Congo Technical Training Hub',
                'type' => 'Training centers',
                'photo' => 'img/research-innovation-items-world-science-day-celebration.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-05.png',
                'summary' => 'Congo Technical Training Hub develops technician upskilling programs with LabCongo around sampling discipline, safety, and analytical best practices.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'Instagram', 'icon' => 'fab fa-instagram', 'url' => 'https://www.instagram.com/'],
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                ],
            ],
            [
                'name' => 'Great Lakes Research Exchange',
                'type' => 'Technical exchange programs',
                'photo' => 'img/woman-lab-working-with-microscope.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-06.png',
                'summary' => 'Great Lakes Research Exchange supports joint projects, technical seminars, and practical laboratory immersion tied to local mining-sector needs.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'X', 'icon' => 'fab fa-twitter', 'url' => 'https://x.com/'],
                    ['label' => 'YouTube', 'icon' => 'fab fa-youtube', 'url' => 'https://www.youtube.com/'],
                ],
            ],
        ],
    ],
    'public-regulatory' => [
        'slug'  => 'public-regulatory',
        'label' => 'Public and Regulatory Stakeholders',
        'icon'  => 'fa-balance-scale',
        'intro' => 'Partners in this category are institutions and stakeholders connected to traceability, compliance, mineral evaluation, and responsible sector development.',
        'focus' => [
            'Traceability and standards-based information',
            'Compliance support and technical documentation',
            'Responsible mining-sector development',
        ],
        'cards' => [
            ['icon' => 'fa-landmark', 'label' => 'Public institutions'],
            ['icon' => 'fa-gavel',    'label' => 'Regulatory bodies'],
            ['icon' => 'fa-route',    'label' => 'Traceability programs'],
        ],
        'partners' => [
            [
                'name' => 'DRC Mineral Governance Office',
                'type' => 'Public institutions',
                'photo' => 'img/page-header-mining-lab.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-01.png',
                'summary' => 'The DRC Mineral Governance Office engages LabCongo for traceable technical information, mineral verification support, and sector documentation.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                ],
            ],
            [
                'name' => 'Responsible Mining Standards Forum',
                'type' => 'Regulatory bodies',
                'photo' => 'img/feature.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-02.png',
                'summary' => 'Responsible Mining Standards Forum works with LabCongo on compliance-linked technical evidence, reference documentation, and quality-driven reporting.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'X', 'icon' => 'fab fa-twitter', 'url' => 'https://x.com/'],
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                ],
            ],
            [
                'name' => 'Chain of Custody Initiative',
                'type' => 'Traceability programs',
                'photo' => 'img/testimonial-mining-abstract.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-03.png',
                'summary' => 'Chain of Custody Initiative partners with LabCongo to reinforce traceability workflows, analytical recordkeeping, and responsible supply-chain controls.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'YouTube', 'icon' => 'fab fa-youtube', 'url' => 'https://www.youtube.com/'],
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                ],
            ],
        ],
    ],
    'technology-equipment' => [
        'slug'  => 'technology-equipment',
        'label' => 'Technology and Equipment Providers',
        'icon'  => 'fa-microscope',
        'intro' => 'Partners in this category help strengthen analytical workflows, equipment reliability, laboratory capacity, maintenance, and calibration discipline.',
        'focus' => [
            'Laboratory equipment and analytical technologies',
            'Maintenance, calibration, and technical support',
            'Workflow improvement and capacity development',
        ],
        'cards' => [
            ['icon' => 'fa-tools', 'label' => 'Equipment suppliers'],
            ['icon' => 'fa-vial',  'label' => 'Analytical technology'],
            ['icon' => 'fa-cogs',  'label' => 'Maintenance and calibration'],
        ],
        'partners' => [
            [
                'name' => 'Precision Lab Systems',
                'type' => 'Equipment suppliers',
                'photo' => 'img/laboratory-laboratories-conduct-experiments-chemical-laboratory-transparent-flasks-output-formulas.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-04.png',
                'summary' => 'Precision Lab Systems supports LabCongo with laboratory equipment deployment, replacement planning, and operational continuity for core analytical tools.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                    ['label' => 'Instagram', 'icon' => 'fab fa-instagram', 'url' => 'https://www.instagram.com/'],
                ],
            ],
            [
                'name' => 'GeoAnalytics Instruments',
                'type' => 'Analytical technology',
                'photo' => 'img/biologist-woman-looking-test-sample-microscope-working-gmo-experiment.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-05.png',
                'summary' => 'GeoAnalytics Instruments collaborates with LabCongo on analytical upgrades, method reliability, and technology adoption for mining laboratory workflows.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'X', 'icon' => 'fab fa-twitter', 'url' => 'https://x.com/'],
                    ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in', 'url' => 'https://www.linkedin.com/'],
                ],
            ],
            [
                'name' => 'Calibration Support Africa',
                'type' => 'Maintenance and calibration',
                'photo' => 'img/african-woman-biochemist-researcher-checking-manifestations-vaccine-working-modern-equipped-laboratory-multiethnic-doctors-examining-virus-evolution-using-high-tech-researching-diagnosis.jpg',
                'logo' => 'img/Logo/PNG/LabCongo%20-%20logo-06.png',
                'summary' => 'Calibration Support Africa helps LabCongo maintain equipment performance through preventive maintenance, calibration discipline, and technical interventions.',
                'website' => 'https://www.labcongo.org',
                'socials' => [
                    ['label' => 'Facebook', 'icon' => 'fab fa-facebook-f', 'url' => 'https://www.facebook.com/'],
                    ['label' => 'YouTube', 'icon' => 'fab fa-youtube', 'url' => 'https://www.youtube.com/'],
                ],
            ],
        ],
    ],
];

// -------------------------------------------------------------------
// Resolve the requested category (same pattern as team-biography.php)
// -------------------------------------------------------------------
$slug = isset($_GET['category']) ? preg_replace('/[^a-z0-9-]/', '', strtolower(trim($_GET['category']))) : '';
// Fallback : si aucun slug valide, afficher la première catégorie
if (!$slug || !isset($partner_categories[$slug])) {
    reset($partner_categories);
    $slug = key($partner_categories);
}
$category  = $partner_categories[$slug];
$pageTitle = $category['label'] . ' - Partners - LabCongo';

// Helper: HTML-safe output
function lc_e($str) { return htmlspecialchars($str, ENT_QUOTES, 'UTF-8'); }
function lc_safe_url($url) {
    return filter_var($url, FILTER_VALIDATE_URL) ? $url : '#';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title><?php echo lc_e($pageTitle); ?></title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="LabCongo partner details, mining partners, academic partners, regulatory partners, laboratory equipment partners" name="keywords">
    <meta content="Review LabCongo partner categories for mining operators, academic institutions, public stakeholders, and technology providers." name="description">

    <link href="img/favicon.png" rel="icon" type="image/png">
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Red+Rose:wght@600;700&display=swap" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css?v=20260625-partners-theme" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
    <div class="container-fluid py-2 d-none d-lg-flex">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>
                    <small class="me-3"><i class="fa fa-map-marker-alt me-2"></i>No. 338 Avenue Mongololoa, Bandal, Kinshasa, DRC</small>
                    <small class="me-3"><i class="fa fa-clock me-2"></i>Monday-Friday 8am-4pm, Saturday-Sunday Closed</small>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Brand Start -->
    <div class="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
        <div class="container pb-2">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex">
                    <i class="fa fa-phone-alt fs-2"></i>
                    <div class="ms-3">
                        <h5 class="text-white mb-0">Call Now</h5>
                        <span>+243 81 599 86 92</span><br>
                        <span>+1 207 800 6298</span>
                    </div>
                </div>
                <a href="index.php" class="logo-link logo-link--desktop" aria-label="LabCongo">
                    <img src="img/Logo/PNG/LabCongo%20-%20logo-05.png" alt="LabCongo" class="brand-logo brand-logo-desktop">
                </a>
                <div class="d-flex">
                    <i class="fa fa-envelope fs-2"></i>
                    <div class="ms-3">
                        <h5 class="text-white mb-0">Mail Now</h5>
                        <span>info@labcongo.org</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Brand End -->

    <!-- Navbar Start -->
    <div class="container-fluid sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
                <a href="index.php" class="navbar-brand d-lg-none logo-link" aria-label="LabCongo">
                    <img src="img/Logo/PNG/LabCongo%20-%20logo-02.png" alt="LabCongo" class="brand-logo brand-logo-mobile">
                </a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="index.php" class="nav-item nav-link">Home</a>
                        <a href="about.php" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <a href="team.php" class="nav-item nav-link">Our Team</a>
                        <a href="appoinment.html" class="nav-item nav-link">Appointment</a>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="language-switcher ms-lg-auto my-3 my-lg-0 me-lg-3">
                        <label class="visually-hidden" for="languageSelect">Language</label>
                        <select class="form-select form-select-sm" id="languageSelect" aria-label="Language selector">
                            <option value="en" selected>EN</option>
                            <option value="fr">FR</option>
                        </select>
                    </div>
                    <div class="theme-switcher my-3 my-lg-0 me-lg-3">
                        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to dark mode" title="Switch to dark mode">
                            <i class="fa fa-moon"></i>
                        </button>
                    </div>
                    <div class="d-none d-lg-flex">
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->

    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn bg-transparent" data-wow-delay="0.1s">
        <div class="container text-center py-5 mt-4 bg-transparent">
            <h1 class="display-2 text-white mb-3 animated slideInDown">Partner Details</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item"><a href="partners.php">Partners</a></li>
                    <li class="breadcrumb-item" aria-current="page">
                        <?php echo $category ? lc_e($category['label']) : 'Partner Details'; ?>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Partner Details Start -->
    <div class="container-fluid py-5">
        <div class="container pb-5">
            <div class="row g-5">

                <!-- Main Content col-lg-8 -->
                <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="partner-detail-hero mb-5">
                        <div class="row g-4 align-items-stretch">
                            <div class="col-lg-12">
                                <div class="vision-panel h-100">
                                    <div class="icon-box-primary vision-icon mb-4">
                                        <i class="fa <?php echo lc_e($category['icon']); ?> text-dark"></i>
                                    </div>
                                    <h1 class="display-6 mb-4"><?php echo lc_e($category['label']); ?></h1>
                                    <p class="fs-5 text-primary mb-4">LabCongo partner category, collaboration scope, and validated organization profile.</p>
                                    <div class="vision-divider"></div>
                                    <p class="mb-0 text-justify"><?php echo lc_e($category['intro']); ?></p>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                    <div class="mb-5">
                        <span class="partner-eyebrow">Category partners</span>
                        <h2 class="display-6 mb-3">Partners in this category</h2>
                        <p class="mb-0 text-justify">Each category shows its partner organizations with a presentation text, a partner photo, a logo, and direct links to the official website and social networks.</p>
                    </div>

                    <div class="row g-4 mb-5">
                        <?php foreach ($category['partners'] as $partner): ?>
                        <div class="col-xl-6">
                            <div class="partner-profile-card h-100">
                                <div class="partner-profile-photo">
                                    <img src="<?php echo lc_e($partner['photo']); ?>" alt="<?php echo lc_e($partner['name']); ?>">
                                </div>
                                <div class="partner-profile-body">
                                    <div class="partner-profile-head">
                                        <div class="partner-profile-logo">
                                            <img src="<?php echo lc_e($partner['logo']); ?>" alt="<?php echo lc_e($partner['name']); ?> logo">
                                        </div>
                                        <div>
                                            <span class="partner-detail-label mb-2"><?php echo lc_e($partner['type']); ?></span>
                                            <h4 class="mb-2"><?php echo lc_e($partner['name']); ?></h4>
                                        </div>
                                    </div>
                                    <p class="mb-4"><?php echo lc_e($partner['summary']); ?></p>
                                    <div class="partner-profile-links">
                                        <a class="partner-website-link" href="<?php echo lc_e(lc_safe_url($partner['website'])); ?>" target="_blank" rel="noopener noreferrer">
                                            <i class="fa fa-globe me-2"></i>Website
                                        </a>
                                        <div class="partner-social-links">
                                            <?php foreach ($partner['socials'] as $social): ?>
                                            <a href="<?php echo lc_e(lc_safe_url($social['url'])); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo lc_e($social['label'] . ' - ' . $partner['name']); ?>" title="<?php echo lc_e($social['label']); ?>">
                                                <i class="<?php echo lc_e($social['icon']); ?>"></i>
                                            </a>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>

                   

                    <div class="mt-5 d-flex flex-wrap gap-2">
                        <a class="btn btn-primary py-3 px-4" href="partners.php">Back to Partners</a>
                        <a class="btn btn-outline-primary py-3 px-4" href="contact.html">Discuss a Partnership</a>
                    </div>


                </div>
                <!-- Main Content End -->

                <!-- Sidebar col-lg-4 (same pattern as team-biography.php) -->
                <div class="col-lg-4">

                    <!-- Categories quick nav (same as "Other Members" sidebar) -->
                    <div class="partner-category-nav p-4 mb-4 wow fadeInUp" data-wow-delay="0.2s">
                        <h4 class="mb-4">Partner Categories</h4>
                        <?php foreach ($partner_categories as $cat): ?>
                        <a class="partner-category-link<?php echo ($cat['slug'] === $slug) ? ' active' : ''; ?>"
                           href="partner-details.php?category=<?php echo lc_e($cat['slug']); ?>">
                            <span class="partner-category-link-icon"><i class="fa <?php echo lc_e($cat['icon']); ?>"></i></span>
                            <span><?php echo lc_e($cat['label']); ?></span>
                        </a>
                        <?php endforeach; ?>
                    </div>

                    <!-- CTA block (same as "Need more information?" sidebar) -->
                    <div class="partner-sidebar-cta wow fadeInUp" data-wow-delay="0.3s">
                        <h4 class="text-white mb-3">Want to become a partner?</h4>
                        <p class="text-white mb-4">Contact LabCongo to discuss a technical, institutional, training, or project-based partnership.</p>
                        <a class="btn btn-light py-3 px-4 mb-2 w-100" href="partners.php">Back to Partners</a>
                        <a class="btn btn-outline-light py-3 px-4 w-100" href="contact.html">Contact LabCongo</a>
                    </div>

                </div>
                <!-- Sidebar End -->

            </div>
        </div>
    </div>
    <!-- Partner Details End -->

    <!-- Footer Start -->
    <div class="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5 py-5">
                <div class="col-lg-6 pe-lg-5">
                    <a href="index.php" class="navbar-brand logo-link logo-link--footer" aria-label="LabCongo">
                        <img src="img/Logo/PNG/LabCongo%20-%20logo-05.png" alt="LabCongo" class="brand-logo brand-logo-footer">
                    </a>
                    <p class="fs-5 mb-4 text-justify">LabCongo provides reliable mining analysis services aligned with international standards, supporting exploration, mining operations, and mineral quality control.</p>
                    <p><i class="fa fa-map-marker-alt me-2"></i>No. 338 Avenue Mongololoa, Bandal, Kinshasa, DRC</p>
                    <p><i class="fa fa-phone-alt me-2"></i>+243 81 599 86 92 / +1 207 800 6298</p>
                    <p><i class="fa fa-envelope me-2"></i>info@labcongo.org</p>
                    <div class="d-flex mt-4">
                        <a class="btn btn-lg-square btn-primary me-2" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-lg-square btn-primary me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-lg-square btn-primary me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-lg-square btn-primary me-2" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5">
                    <div class="row g-5">
                        <div class="col-sm-6">
                            <h4 class="text-light mb-4">Quick Links</h4>
                            <a class="btn btn-link" href="about.php">About Us</a>
                            <a class="btn btn-link" href="contact.html">Contact Us</a>
                            <a class="btn btn-link" href="service.html">Our Services</a>
                        </div>
                        <div class="col-sm-12">
                            <h4 class="text-light mb-4">Newsletter</h4>
                            <div class="w-100">
                                <form action="form-action.php" method="post" class="input-group">
                                    <input type="hidden" name="form_type" value="newsletter">
                                    <input type="hidden" name="_redirect" value="partner-details.php">
                                    <input type="email" name="email" class="form-control border-0 py-3 px-4" style="background: rgba(255, 255, 255, .1);" placeholder="Your Email Address" required>
                                    <button class="btn btn-primary px-4" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="container-fluid copyright bg-dark text-white-50 py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start">
                    <p class="mb-0">&copy; 2026 <a href="index.php">LabCongo</a>. All Rights Reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0">Designed by <a href="index.php">LabCongo</a></p>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
