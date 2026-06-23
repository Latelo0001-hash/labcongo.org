(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Language selector
    var supportedLanguages = ['en', 'fr'];
    var languageParams = new URLSearchParams(window.location.search);
    var currentLanguage = languageParams.get('lang') || localStorage.getItem('labcongo_language') || 'en';

    if (supportedLanguages.indexOf(currentLanguage) === -1) {
        currentLanguage = 'en';
    }

    // Theme selector
    var supportedThemes = ['light', 'dark'];
    var currentTheme = localStorage.getItem('labcongo_theme') || 'light';

    if (supportedThemes.indexOf(currentTheme) === -1) {
        currentTheme = 'light';
    }

    function getThemeToggleLabel(theme) {
        if (currentLanguage === 'fr') {
            return theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
        }

        return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }

    function applyTheme(theme) {
        var isDark = theme === 'dark';
        document.documentElement.classList.toggle('dark-mode', isDark);
        document.body.classList.toggle('dark-mode', isDark);
        document.documentElement.setAttribute('data-theme', theme);

        $('[data-theme-toggle]').each(function () {
            var label = getThemeToggleLabel(theme);
            $(this).attr('aria-label', label).attr('title', label);
            $(this).find('i').removeClass('fa-moon fa-sun').addClass(isDark ? 'fa-sun' : 'fa-moon');
        });
    }

    var translations = {
        fr: {
            'LabCongo': 'LabCongo',
            'No. 338 Avenue Mongololoa, Bandal, Kinshasa, DRC': 'N° 338 Avenue Mongololoa, Bandal, Kinshasa, RDC',
            'Monday-Friday 8am-4pm, Saturday-Sunday Closed': 'Lundi-vendredi 8h-16h, samedi-dimanche fermé',
            'Monday-Friday 8:00am-4:00pm, Saturday-Sunday Closed': 'Lundi-vendredi 8h00-16h00, samedi-dimanche fermé',
            'Call Now': 'Appelez-nous',
            'Mail Now': 'Écrivez-nous',
            'Home': 'Accueil',
            'About': 'À propos',
            'Services': 'Services',
            'Our Team': 'Notre équipe',
            'Appointment': 'Rendez-vous',
            'Contact': 'Contact',
            'Language': 'Langue',
            'Previous': 'Précédent',
            'Next': 'Suivant',
            'Explore More': 'En savoir plus',
            'Read More': 'Lire la suite',
            'Submit Request': 'Envoyer la demande',
            'Submit Now': 'Envoyer maintenant',
            'Send a Message': 'Envoyer un message',
            'Sign Up': "S'inscrire",
            'Quick Links': 'Liens rapides',
            'Popular Links': 'Liens populaires',
            'Newsletter': 'Newsletter',
            'About Us': 'À propos de nous',
            'Contact Us': 'Nous contacter',
            'Our Services': 'Nos services',
            'Terms & Condition': 'Conditions générales',
            'Support': 'Assistance',
            '. All Rights Reserved.': '. Tous droits réservés.',
            'Designed by': 'Conçu par',

            'Reference Mining Laboratory - LabCongo': 'Laboratoire minier de référence - LabCongo',
            'LabCongo is a laboratory specialized in mining analyses, providing reliable services that comply with international standards.': 'LabCongo est un laboratoire spécialisé dans les analyses minières, offrant des services fiables conformes aux normes internationales.',
            'Experts In Mining Analysis & Qualified Technicians': 'Experts en analyses minières et techniciens qualifiés',
            'Our team consists of highly qualified geologists, engineers, and technicians, ensuring rigorous analyses and reliable results for every processed sample.': 'Notre équipe est composée de géologues, d’ingénieurs et de techniciens hautement qualifiés, garantissant des analyses rigoureuses et des résultats fiables pour chaque échantillon traité.',
            'Years Experience': "Années d'expérience",
            'Reliable Experts & Advanced Analytical Technologies': 'Experts fiables et technologies analytiques avancées',
            'Thanks to our expertise and the use of modern equipment, LabCongo delivers accurate results that meet the requirements of the mining industry and international standards.': 'Grâce à notre expertise et à l’utilisation d’équipements modernes, LabCongo fournit des résultats précis répondant aux exigences de l’industrie minière et aux normes internationales.',
            'Certified Local Expertise': 'Expertise locale certifiée',
            "The Democratic Republic of the Congo (DRC) is one of the world's richest countries in strategic mineral resources, including copper, cobalt, gold, and coltan.": "La République démocratique du Congo (RDC) est l'un des pays les plus riches au monde en ressources minières stratégiques, notamment le cuivre, le cobalt, l'or et le coltan.",
            'of global cobalt production': 'de la production mondiale de cobalt',
            'of cobalt produced in the DRC in 2023': 'de cobalt produit en RDC en 2023',
            'Source: U.S. Geological Survey, Mineral Commodity Summary - Cobalt (2024)': 'Source : U.S. Geological Survey, Mineral Commodity Summary - Cobalt (2024)',
            'Source: U.S. Geological Survey (USGS 2024)': 'Source : U.S. Geological Survey (USGS 2024)',
            'However': 'Cependant',
            'Major challenges remain: many analyses are still performed abroad, resulting in long lead times, high costs, technical dependency, and limited local scientific value creation.': "Les défis restent importants : de nombreuses analyses sont encore réalisées à l'étranger, ce qui entraîne des délais élevés, des coûts importants, une dépendance technique et une faible valorisation scientifique locale.",
            'Compliance': 'Conformité',
            'Precision': 'Précision',
            'Completed Projects': 'Projets réalisés',
            'Analyzed Samples': 'Échantillons analysés',
            'Satisfied Clients': 'Clients satisfaits',
            'Certified Laboratory': 'Laboratoire certifié',
            'Strict compliance with international standards and laboratory best practices.': 'Respect strict des normes internationales et des meilleures pratiques de laboratoire.',
            'Technical Experts': 'Experts techniques',
            'An experienced team in geology, metallurgy, and chemical analysis.': 'Une équipe expérimentée en géologie, métallurgie et analyse chimique.',
            'Competitive Pricing': 'Tarifs compétitifs',
            'High-quality services at optimized costs.': 'Des services de haute qualité à des coûts optimisés.',
            '24/7 Technical Support': 'Assistance technique 24/7',
            'Continuous assistance to support your mining operations.': 'Une assistance continue pour soutenir vos opérations minières.',
            'Complete Mining Analysis Solutions': 'Solutions complètes d’analyse minière',
            'We provide a wide range of analytical services for mineral exploration, mining operations, and quality control of mineral resources.': 'Nous proposons une large gamme de services analytiques pour l’exploration minière, les opérations minières et le contrôle qualité des ressources minérales.',
            'Experts in Geology & Metallurgy': 'Experts en géologie et métallurgie',
            'In-depth ore analysis and reliable interpretation of results.': 'Analyse approfondie des minerais et interprétation fiable des résultats.',
            'High-Tech Equipment': 'Équipements de haute technologie',
            'Use of modern instruments to ensure precision and reproducibility.': 'Utilisation d’instruments modernes pour garantir précision et reproductibilité.',
            'Sample Preparation': 'Préparation des échantillons',
            'Analysis Accuracy': 'Précision des analyses',
            'Equipment Capacity': 'Capacité des équipements',
            'Reliable and Certified Mining Laboratory Services': 'Services de laboratoire minier fiables et certifiés',
            'We guarantee accurate analyses through strict protocols and technologies adapted to the mining sector requirements.': 'Nous garantissons des analyses précises grâce à des protocoles stricts et des technologies adaptées aux exigences du secteur minier.',
            'Geochemical Analysis': 'Analyse géochimique',
            'Determination of the chemical composition of ores.': 'Détermination de la composition chimique des minerais.',
            'Mineralogical Analysis': 'Analyse minéralogique',
            'Identification of minerals present in samples.': 'Identification des minéraux présents dans les échantillons.',
            'Metallurgical Testing': 'Essais métallurgiques',
            'Evaluation of ore processing methods.': 'Évaluation des méthodes de traitement des minerais.',
            'Spectrometric Analysis': 'Analyse spectrométrique',
            'Precise measurement of trace and major elements.': 'Mesure précise des éléments traces et majeurs.',
            'Grinding, crushing, and homogenization according to standards.': 'Broyage, concassage et homogénéisation selon les normes.',
            'Precious Metals Analysis': 'Analyse des métaux précieux',
            'Assay of gold, silver, and other valuable metals.': 'Dosage de l’or, de l’argent et d’autres métaux de valeur.',
            'Quality Control (QA/QC)': 'Contrôle qualité (QA/QC)',
            'Validation and reliability of analytical results.': 'Validation et fiabilité des résultats analytiques.',
            'Environmental Analysis': 'Analyse environnementale',
            'Monitoring environmental impacts related to mining activities.': 'Suivi des impacts environnementaux liés aux activités minières.',
            'We Guarantee Reliable and Compliant Results': 'Nous garantissons des résultats fiables et conformes',
            'LabCongo is committed to providing accurate, fast, and regulation-compliant results. Our team is dedicated to offering you high-quality service tailored to your specific needs and expectations.': 'LabCongo s’engage à fournir des résultats précis, rapides et conformes à la réglementation. Notre équipe vous offre un service de qualité adapté à vos besoins et attentes spécifiques.',
            'Office Address': 'Adresse du bureau',
            'Office Time': 'Horaires du bureau',
            'Contact / Analysis Request': 'Contact / Demande d’analyse',
            'Name': 'Nom',
            'Your Email': 'Votre e-mail',
            'Phone': 'Téléphone',
            'Choose a Service': 'Choisir un service',
            'Message': 'Message',
            'Team Members': 'Membres de l’équipe',
            "Our team brings together committed professionals supporting LabCongo's mining analysis and laboratory services.": 'Notre équipe réunit des professionnels engagés qui soutiennent les services d’analyse minière et de laboratoire de LabCongo.',
            'What Our Partners Say About Our Services': 'Ce que nos partenaires disent de nos services',
            'What Our Clients Say About Our Laboratory Services': 'Ce que nos clients disent de nos services de laboratoire',
            'What people think about geological laboratories in the DRC': 'Ce que les gens pensent des laboratoires géologiques en RDC',
            'People see DRC geological laboratories as essential tools for growth. They do not just analyze rocks. They secure investments, speed up mine development, and help unlock the true wealth of the country.': 'Les gens considèrent les laboratoires géologiques en RDC comme des outils essentiels de croissance. Ils ne se limitent pas à analyser des roches. Ils sécurisent les investissements, accélèrent le développement minier et contribuent à révéler la véritable richesse du pays.',
            'We work with mining companies that trust us for the quality and accuracy of our analyses.': 'Nous travaillons avec des sociétés minières qui nous font confiance pour la qualité et la précision de nos analyses.',
            "I was truly impressed by the quality of LabCongo's analyses. Their team is highly professional and skilled. The results arrived on time and were accurate, and I appreciated their support throughout the process.": 'J’ai été réellement impressionné par la qualité des analyses de LabCongo. Leur équipe est très professionnelle et compétente. Les résultats ont été livrés à temps, avec précision, et j’ai apprécié leur accompagnement tout au long du processus.',
            'The evaluation and determination of the real value of our minerals pose a challenge. Congolese environmentalists and engineers demand the creation of a comprehensive national mineralogical laboratory in the DRC to define the physical properties and exact composition of minerals on site.': 'L’évaluation et la détermination de la valeur réelle de nos minerais constituent un défi. Des environnementalistes et ingénieurs congolais demandent la création d’un laboratoire minéralogique national complet en RDC afin de définir sur place les propriétés physiques et la composition exacte des minerais.',
            'Environmental and Mining Engineering Expert (Official statement to the ACP).': 'Expert en environnement et ingénierie minière (déclaration officielle à l’ACP).',
            'Mining Partner': 'Partenaire minier',
            'Mining Company': 'Société minière',
            'LabCongo provided precise and reliable analyses for my mining project. Their team is competent and attentive, and I highly recommend their services.': 'LabCongo a fourni des analyses précises et fiables pour mon projet minier. Leur équipe est compétente et attentive, et je recommande vivement leurs services.',
            'Historically dominated by foreign experts, the field of geological exploration in the DRC must open up massively to national geoscientists. Equipping Congolese engineers with modern tools is key for the country to finally understand, explore, and master the true extent of its mineral reserves.': 'Historiquement dominé par des experts étrangers, le domaine de l’exploration géologique en RDC doit s’ouvrir massivement aux géoscientifiques nationaux. Équiper les ingénieurs congolais d’outils modernes est essentiel pour que le pays puisse enfin comprendre, explorer et maîtriser l’étendue réelle de ses réserves minérales.',
            'Based on mineral sovereignty guidelines from the Ministry of Mines of the DRC.': 'Sur la base des orientations de souveraineté minérale du Ministère des Mines de la RDC.',
            'Institutional Reference': 'Référence institutionnelle',
            'Project Partner': 'Partenaire de projet',
            'Mining Project': 'Projet minier',
            'LabCongo provides reliable mining analysis services aligned with international standards, supporting exploration, mining operations, and mineral quality control.': 'LabCongo fournit des services fiables d’analyse minière conformes aux normes internationales, en appui à l’exploration, aux opérations minières et au contrôle qualité des minerais.',

            'Mining Analysis Experts and Modern Technologies': 'Experts en analyses minières et technologies modernes',
            'LabCongo is a mining laboratory specializing in the analysis and quality control of ores. We support schools and universities in training local talent, as well as mining companies and mining sector stakeholders in identifying and promoting mineral resources.': 'LabCongo est un laboratoire minier spécialisé dans l’analyse et le contrôle qualité des minerais. Nous accompagnons les écoles et universités dans la formation des talents locaux, ainsi que les sociétés minières et acteurs du secteur dans l’identification et la valorisation des ressources minérales.',
            "Vision and Objectives": "Vision et objectifs",
            "LabCongo\x27s vision is to become a trusted reference laboratory for mining analysis in the DRC and the region.": "La vision de LabCongo est de devenir un laboratoire de référence reconnu pour l’analyse minière en RDC et dans la région.",
            "We aim to support responsible mineral development by providing reliable, traceable, and timely analytical data that helps mining operators, institutions, universities, and communities make better technical decisions.": "Nous voulons soutenir un développement minier responsable en fournissant des données analytiques fiables, traçables et disponibles dans les délais, afin d’aider les opérateurs miniers, les institutions, les universités et les communautés à prendre de meilleures décisions techniques.",
            "Through modern methods, disciplined quality control, and local expertise, LabCongo wants to contribute to a stronger mining ecosystem where knowledge, transparency, and professional standards guide every stage of mineral evaluation.": "Grâce à des méthodes modernes, à un contrôle qualité rigoureux et à une expertise locale, LabCongo veut contribuer à un écosystème minier plus solide, où la connaissance, la transparence et les standards professionnels guident chaque étape de l’évaluation minérale.",
            "Our Objectives": "Nos objectifs",
            "Reliable Data": "Données fiables",
            "Deliver accurate and traceable laboratory results that strengthen mining-sector decisions.": "Fournir des résultats de laboratoire précis et traçables qui renforcent les décisions du secteur minier.",
            "Local Capacity": "Capacité locale",
            "Strengthen Congolese technical capacity through training, collaboration, and applied laboratory practice.": "Renforcer les capacités techniques congolaises par la formation, la collaboration et la pratique appliquée en laboratoire.",
            "Responsible Mining": "Exploitation minière responsable",
            "Support transparent, sustainable, and standards-based mineral development.": "Soutenir un développement minéral transparent, durable et conforme aux standards.",
            "Continuous Improvement": "Amélioration continue",
            "Keep improving methods, equipment, and QA/QC processes to meet international expectations.": "Améliorer continuellement les méthodes, les équipements et les processus QA/QC afin de répondre aux exigences internationales.",
            'Awards': 'Distinctions',
            'The Best Mining Analysis and Control Solution': 'La meilleure solution d’analyse et de contrôle minier',
            'Thanks to our qualified team and modern equipment, we provide reliable, accurate, and fast results in accordance with international standards. Through our expertise, we actively contribute to the development of the extractive sector in the DRC.': 'Grâce à notre équipe qualifiée et à nos équipements modernes, nous fournissons des résultats fiables, précis et rapides conformément aux normes internationales. Par notre expertise, nous contribuons activement au développement du secteur extractif en RDC.',
            'Qualified Experts': 'Experts qualifiés',
            'We have an experienced team in mining analyses.': 'Nous disposons d’une équipe expérimentée en analyses minières.',
            'Advanced Technologies': 'Technologies avancées',
            'We use state-of-the-art equipment to ensure accuracy.': 'Nous utilisons des équipements de pointe pour garantir la précision.',
            'Result Accuracy': 'Précision des résultats',
            'Laboratory Equipment': 'Équipements de laboratoire',

            'View All Biographies': 'Voir toutes les biographies',
            'Team Biography': 'Biographie du membre',
            'Team Biographies': 'Biographies de l’équipe',
            'Biographies and Profiles': 'Biographies et profils',
            "Meet the people supporting LabCongo's mission: reliable mining analysis, disciplined laboratory work, and trusted service for mining-sector partners.": 'Découvrez les personnes qui soutiennent la mission de LabCongo : des analyses minières fiables, un travail de laboratoire rigoureux et un service de confiance pour les partenaires du secteur minier.',
            'Selected LabCongo team profile and biography.': 'Profil et biographie du membre sélectionné de LabCongo.',
            'Other Members': 'Autres membres',
            'Need more information?': 'Besoin de plus d’informations ?',
            'Browse other LabCongo profiles or contact the team for official follow-up.': 'Consultez les autres profils de LabCongo ou contactez l’équipe pour un suivi officiel.',
            'Back to Team': 'Retour à l’équipe',
            'Biography Not Found': 'Biographie introuvable',
            'The requested team member could not be found.': 'Le membre demandé est introuvable.',
            'Read Full Biography': 'Lire la biographie complète',
            'Biography': 'Biographie',
            'Team Member': 'Membre de l’équipe',
            'Co-Founder and COO': 'Co-fondateur et COO',

            'Do You Have a Question? Feel Free to Contact Us': 'Vous avez une question ? Contactez-nous librement',
            'The LabCongo mining laboratory is at your disposal for any request for information, collaboration, or services related to mining and geological analyses.': 'Le laboratoire minier LabCongo est à votre disposition pour toute demande d’information, de collaboration ou de services liés aux analyses minières et géologiques.',
            'Call Us': 'Appelez-nous',
            'Email Us': 'Écrivez-nous',
            'Send us your request using the form below. Our team will review your message and get back to you as soon as possible.': 'Envoyez-nous votre demande via le formulaire ci-dessous. Notre équipe l’examinera et vous répondra dans les meilleurs délais.',
            'Subject': 'Sujet',

            'We Make Sure You Always Get the Best Results': 'Nous veillons à ce que vous obteniez toujours les meilleurs résultats',
            'The LabCongo mining laboratory schedules appointments to evaluate ore samples from new Congolese mining discoveries with a team of international experts.': 'Le laboratoire minier LabCongo organise des rendez-vous pour évaluer les échantillons de minerais issus de nouvelles découvertes congolaises avec une équipe d’experts internationaux.',
            'The analysis results will guide strategic decisions for sustainable mining development in Congo.': 'Les résultats d’analyse guideront les décisions stratégiques pour un développement minier durable au Congo.',
            'Kinshasa Office Address': 'Adresse du bureau de Kinshasa',
            'USA Address': 'Adresse aux États-Unis',
            'Opening Hours': 'Heures d’ouverture',
            'Online Appointment': 'Rendez-vous en ligne',
            'Your Name': 'Votre nom',
            'Your Mobile': 'Votre téléphone',

            'Related Services': 'Services associés',
            'Request an Appointment': 'Demander un rendez-vous',
            'Contact LabCongo': 'Contacter LabCongo',
            'More Testimonials': 'Plus de témoignages',
            'We guarantee reliable and compliant results. LabCongo is committed to providing accurate, fast, and regulation-compliant results.': 'Nous garantissons des résultats fiables et conformes. LabCongo s’engage à fournir des résultats précis, rapides et conformes à la réglementation.',
            'Geochemical Analysis - LabCongo': 'Analyse Géochimique - LabCongo',
            'Mineralogical Analysis - LabCongo': 'Analyse Minéralogique - LabCongo',
            'Metallurgical Testing - LabCongo': 'Essais Métallurgiques - LabCongo',
            'Spectrometric Analysis - LabCongo': 'Analyse Spectrométrique - LabCongo',
            'Sample Preparation - LabCongo': 'Préparation des Echantillons - LabCongo',
            'Precious Metals Analysis - LabCongo': 'Analyse des Métaux précieux - LabCongo',
            'Quality Control (QA/QC) - LabCongo': 'Contrôle Qualité (QA/QC) - LabCongo',
            'Environmental Analysis - LabCongo': 'Analyse Environnementale - LabCongo',
            'What This Service Covers': 'Ce que couvre ce service',
            'Reports and Deliverables': 'Rapports et livrables',
            'Accurate chemical characterization of rocks, soils, ores, and concentrates for exploration and mining decisions.': 'Caractérisation chimique précise des roches, sols, minerais et concentrés pour les décisions d’exploration et d’exploitation minière.',
            'Identification and characterization of minerals to support exploration, processing, and metallurgical planning.': 'Identification et caractérisation des minéraux pour soutenir l’exploration, le traitement et la planification métallurgique.',
            'Testing programs that evaluate ore behavior and support efficient mineral processing decisions.': 'Programmes d’essais évaluant le comportement des minerais et soutenant des décisions efficaces de traitement minéral.',
            'Instrumental measurement of major and trace elements for reliable mining and geochemical data.': 'Mesure instrumentale des éléments majeurs et traces pour des données minières et géochimiques fiables.',
            'Controlled crushing, pulverizing, splitting, and homogenization for representative analytical samples.': 'Concassage, pulvérisation, division et homogénéisation contrôlés pour obtenir des échantillons analytiques représentatifs.',
            'Assay services for gold, silver, and other valuable metals in ores, concentrates, and process materials.': 'Services de dosage de l’or, de l’argent et d’autres métaux de valeur dans les minerais, concentrés et matériaux de procédé.',
            'Quality-control programs that improve confidence, traceability, and reliability of laboratory results.': 'Programmes de contrôle qualité renforçant la confiance, la traçabilité et la fiabilité des résultats de laboratoire.',
            'Environmental testing that supports responsible mining, monitoring, and regulatory compliance.': 'Essais environnementaux soutenant l’exploitation minière responsable, le suivi et la conformité réglementaire.',
            'Major, minor, and trace element determination in rocks, soils, sediments, ores, and concentrates.': 'Détermination des éléments majeurs, mineurs et traces dans les roches, sols, sédiments, minerais et concentrés.',
            'Support for exploration campaigns, resource evaluation, ore control, and mineral quality checks.': 'Appui aux campagnes d’exploration, à l’évaluation des ressources, au contrôle du minerai et aux vérifications de qualité minérale.',
            'Analytical workflows adapted to the matrix, expected grade range, and reporting objective.': 'Flux analytiques adaptés à la matrice, à la gamme de teneurs attendue et à l’objectif de rapport.',
            'Review of blanks, duplicates, and reference materials to strengthen confidence in the results.': 'Examen des blancs, doublons et matériaux de référence afin de renforcer la confiance dans les résultats.',
            'Element concentration tables in a structured format.': 'Tableaux de concentrations élémentaires dans un format structuré.',
            'Analytical report with sample references and applied methods.': 'Rapport analytique avec références des échantillons et méthodes appliquées.',
            'QA/QC summary for data validation where required.': 'Synthèse QA/QC pour la validation des données lorsque nécessaire.',
            'Technical guidance for interpretation and follow-up testing.': 'Orientation technique pour l’interprétation et les analyses complémentaires.',
            'Identification of principal and accessory minerals in ore, rock, concentrate, and tailings samples.': 'Identification des minéraux principaux et accessoires dans les échantillons de minerai, roche, concentré et rejets.',
            'Assessment of mineral associations, texture, alteration, and liberation indicators.': 'Évaluation des associations minérales, textures, altérations et indicateurs de libération.',
            'Support for geometallurgical studies and ore variability programs.': 'Appui aux études géométallurgiques et aux programmes de variabilité des minerais.',
            'Mineralogical description and interpreted findings.': 'Description minéralogique et résultats interprétés.',
            'Summary of dominant mineral phases and relevant associations.': 'Résumé des phases minérales dominantes et des associations pertinentes.',
            'Recommendations for complementary geochemical or metallurgical testing.': 'Recommandations pour des essais géochimiques ou métallurgiques complémentaires.',
            'Preliminary ore response testing for processing route selection.': 'Essais préliminaires de réponse du minerai pour choisir la voie de traitement.',
            'Assessment of concentrates, tailings, and intermediate process materials.': 'Évaluation des concentrés, rejets et matériaux intermédiaires de procédé.',
            'Test conditions, observations, and measured results.': 'Conditions d’essai, observations et résultats mesurés.',
            'Mass balance or recovery summaries where applicable.': 'Bilans de masse ou synthèses de récupération lorsque applicable.',
            'Interpretation of processing behavior and limiting factors.': 'Interprétation du comportement au traitement et des facteurs limitants.',
            'Measurement of major, minor, and trace elements depending on the sample matrix and project objective.': 'Mesure des éléments majeurs, mineurs et traces selon la matrice de l’échantillon et l’objectif du projet.',
            'Instrumental analysis following suitable preparation and calibration procedures.': 'Analyse instrumentale suivant des procédures appropriées de préparation et d’étalonnage.',
            'Quality checks using standards, blanks, duplicates, or internal controls as required.': 'Contrôles qualité avec standards, blancs, doublons ou contrôles internes selon les besoins.',
            'Elemental result tables with sample IDs and units.': 'Tableaux de résultats élémentaires avec identifiants d’échantillons et unités.',
            'Data files suitable for technical review and project databases.': 'Fichiers de données adaptés à la revue technique et aux bases de données de projet.',
            'Sample reception and coding': 'Réception et codification des échantillons',
            'Sample selection and preparation': 'Sélection et préparation des échantillons',
            'Instrument calibration': 'Étalonnage des instruments',
            'Spectrometric measurement': 'Mesure spectrométrique',
            'Data validation and reporting': 'Validation des données et reporting',
            'Receive and register samples': 'Recevoir et enregistrer les échantillons',
            'Dry, crush, split, and pulverize': 'Sécher, concasser, diviser et pulvériser',
            'Homogenize and package laboratory portions': 'Homogénéiser et conditionner les portions de laboratoire',
            'Release samples for analysis or storage': 'Libérer les échantillons pour analyse ou stockage',
            'Prepare representative sample portions': 'Préparer des portions d’échantillons représentatives',
            'Select the appropriate assay route': 'Choisir la méthode de dosage appropriée',
            'Analyze and verify results': 'Analyser et vérifier les résultats',
            'Deliver certificate or technical report': 'Livrer un certificat ou un rapport technique',
            'Define control strategy': 'Définir la stratégie de contrôle',
            'Review laboratory and control data': 'Examiner les données de laboratoire et de contrôle',
            'Identify risks and anomalies': 'Identifier les risques et anomalies',
            'Report conclusions and recommendations': 'Présenter les conclusions et recommandations',
            'Define monitoring objective': 'Définir l’objectif de suivi',
            'Analyze relevant environmental parameters': 'Analyser les paramètres environnementaux pertinents',
            'Report and support interpretation': 'Rapporter et accompagner l’interprétation',
            'Send us your request and our team will help you define the right analytical workflow for your samples.': 'Envoyez-nous votre demande et notre équipe vous aidera à définir le flux analytique adapté à vos échantillons.',
            'Team Biographies - LabCongo': 'Biographies de l’équipe - LabCongo'
        }
    };

    var additionalFrenchTranslations = {
        "LabCongo, Kinshasa, DRC": "LabCongo, Kinshasa, RDC",
        "How We Work": "Notre méthode",
        "Other Links": "Autres liens",
        "Partners": "Partenaires",
        "Projects": "Projets",
        "Activities": "Activités",
        "Our Activities": "Nos activités",
        "Partners - LabCongo": "Partenaires - LabCongo",
        "Partner Details - LabCongo": "Détails des partenaires - LabCongo",
        "Partner Details": "Détails des partenaires",
        "Projects - LabCongo": "Projets - LabCongo",
        "Activities - LabCongo": "Activités - LabCongo",
        "Partners Supporting Reliable Mining Analysis": "Des partenaires au service d’analyses minières fiables",
        "LabCongo works with organizations that share the same commitment to reliable data, responsible mineral development, local capacity, and transparent laboratory practices.": "LabCongo travaille avec des organisations qui partagent le même engagement envers des données fiables, un développement minéral responsable, les capacités locales et des pratiques de laboratoire transparentes.",
        "Our partner network brings together technical, academic, institutional, and operational contributors who help strengthen mining analysis services in the DRC and the region.": "Notre réseau de partenaires réunit des contributeurs techniques, académiques, institutionnels et opérationnels qui aident à renforcer les services d’analyse minière en RDC et dans la région.",
        "Our partnerships are designed to strengthen the mining analysis ecosystem in the DRC through technical collaboration, practical training, quality control, equipment reliability, and project support.": "Nos partenariats sont conçus pour renforcer l’écosystème de l’analyse minière en RDC grâce à la collaboration technique, à la formation pratique, au contrôle qualité, à la fiabilité des équipements et à l’appui aux projets.",
        "Trust": "Confiance",
        "Traceable laboratory data and disciplined communication.": "Données de laboratoire traçables et communication rigoureuse.",
        "Capacity": "Capacité",
        "Local talent, practical learning, and technical transfer.": "Talents locaux, apprentissage pratique et transfert technique.",
        "Impact": "Impact",
        "Better mining decisions supported by reliable results.": "De meilleures décisions minières soutenues par des résultats fiables.",
        "Become a Partner": "Devenir partenaire",
        "Our Partner Ecosystem": "Notre écosystème de partenaires",
        "We build partnerships around practical needs: sample analysis, quality control, technical training, equipment support, and responsible mining development.": "Nous construisons des partenariats autour de besoins concrets : analyse des échantillons, contrôle qualité, formation technique, appui aux équipements et développement minier responsable.",
        "Partner Categories": "Catégories de partenaires",
        "We organize partnerships around the groups that contribute directly to reliable mining data, local expertise, and responsible mineral development.": "Nous organisons les partenariats autour des groupes qui contribuent directement à des données minières fiables, à l’expertise locale et au développement minéral responsable.",
        "Mining Operators and Project Owners": "Opérateurs miniers et porteurs de projets",
        "Collaboration with teams that need dependable laboratory results for exploration, production, quality control, and project decisions.": "Collaboration avec les équipes qui ont besoin de résultats de laboratoire fiables pour l’exploration, la production, le contrôle qualité et les décisions de projet.",
        "Academic and Training Institutions": "Institutions académiques et de formation",
        "Support for skills development, practical laboratory exposure, and collaboration with schools and universities preparing local talent.": "Appui au développement des compétences, à l’exposition pratique au laboratoire et à la collaboration avec les écoles et universités qui préparent les talents locaux.",
        "Public and Regulatory Stakeholders": "Acteurs publics et réglementaires",
        "Cooperation around traceability, compliance, mineral evaluation, and standards-based information for responsible sector development.": "Coopération autour de la traçabilité, de la conformité, de l’évaluation minérale et d’informations fondées sur les standards pour un développement responsable du secteur.",
        "Technology and Equipment Providers": "Fournisseurs de technologies et d’équipements",
        "Technical relationships that help improve analytical workflows, laboratory capacity, maintenance discipline, and equipment reliability.": "Relations techniques qui contribuent à améliorer les flux analytiques, la capacité du laboratoire, la discipline de maintenance et la fiabilité des équipements.",
        "See More": "Voir plus",
        "Partner Category Directory": "Répertoire des catégories de partenaires",
        "Use this page to review LabCongo's partner categories and the partners connected to each group.": "Utilisez cette page pour consulter les catégories de partenaires de LabCongo et les partenaires associés à chaque groupe.",
        "Each section is structured for partner names, logos, collaboration roles, and notes that can be published after validation.": "Chaque section est structurée pour accueillir les noms, logos, rôles de collaboration et notes pouvant être publiés après validation.",
        "Back to Partners": "Retour aux partenaires",
        "Discuss a Partnership": "Discuter d’un partenariat",
        "View by category": "Voir par catégorie",
        "Partners in this category": "Partenaires dans cette catégorie",
        "Mining companies and operators": "Entreprises et opérateurs miniers",
        "Exploration project owners": "Porteurs de projets d’exploration",
        "Production and quality-control teams": "Équipes de production et de contrôle qualité",
        "Official partner names and logos can be added here after validation.": "Les noms et logos officiels des partenaires pourront être ajoutés ici après validation.",
        "Partners in this category are mining operators, exploration teams, and project owners who need reliable analytical information for technical decisions.": "Les partenaires de cette catégorie sont des opérateurs miniers, équipes d’exploration et porteurs de projets qui ont besoin d’informations analytiques fiables pour leurs décisions techniques.",
        "Collaboration focus": "Axes de collaboration",
        "Exploration and sample analysis programs": "Programmes d’exploration et d’analyse d’échantillons",
        "Production support and quality control": "Appui à la production et contrôle qualité",
        "Project evaluation and technical reporting": "Évaluation de projets et reporting technique",
        "Validated partner": "Partenaire validé",
        "Partner name, logo, and collaboration details will be added here after validation.": "Le nom, le logo et les détails de collaboration du partenaire seront ajoutés ici après validation.",
        "Mining operations": "Opérations minières",
        "Exploration projects": "Projets d’exploration",
        "Quality-control programs": "Programmes de contrôle qualité",
        "Schools and universities": "Écoles et universités",
        "Training centers": "Centres de formation",
        "Student and technician programs": "Programmes pour étudiants et techniciens",
        "Partners in this category include schools, universities, and training organizations that support local technical skills and laboratory learning.": "Les partenaires de cette catégorie comprennent des écoles, universités et organismes de formation qui soutiennent les compétences techniques locales et l’apprentissage en laboratoire.",
        "Student exposure to laboratory practice": "Exposition des étudiants à la pratique en laboratoire",
        "Technical training for technicians and engineers": "Formation technique pour techniciens et ingénieurs",
        "Research, exchange, and capacity building": "Recherche, échange et renforcement des capacités",
        "Universities and schools": "Universités et écoles",
        "Technical exchange programs": "Programmes d’échange technique",
        "Public institutions": "Institutions publiques",
        "Regulatory bodies": "Organismes de régulation",
        "Traceability and compliance stakeholders": "Acteurs de la traçabilité et de la conformité",
        "Partners in this category are institutions and stakeholders connected to traceability, compliance, mineral evaluation, and responsible sector development.": "Les partenaires de cette catégorie sont des institutions et acteurs liés à la traçabilité, à la conformité, à l’évaluation minérale et au développement responsable du secteur.",
        "Traceability and standards-based information": "Traçabilité et information fondée sur les standards",
        "Compliance support and technical documentation": "Appui à la conformité et documentation technique",
        "Responsible mining-sector development": "Développement responsable du secteur minier",
        "Traceability programs": "Programmes de traçabilité",
        "Laboratory equipment suppliers": "Fournisseurs d’équipements de laboratoire",
        "Analytical technology providers": "Fournisseurs de technologies analytiques",
        "Maintenance and calibration partners": "Partenaires de maintenance et d’étalonnage",
        "Partners in this category help strengthen analytical workflows, equipment reliability, laboratory capacity, maintenance, and calibration discipline.": "Les partenaires de cette catégorie aident à renforcer les flux analytiques, la fiabilité des équipements, la capacité du laboratoire, la maintenance et la discipline d’étalonnage.",
        "Laboratory equipment and analytical technologies": "Équipements de laboratoire et technologies analytiques",
        "Maintenance, calibration, and technical support": "Maintenance, étalonnage et appui technique",
        "Workflow improvement and capacity development": "Amélioration des flux de travail et développement des capacités",
        "Equipment suppliers": "Fournisseurs d’équipements",
        "Analytical technology": "Technologie analytique",
        "Maintenance and calibration": "Maintenance et étalonnage",
        "Collaboration Framework": "Cadre de collaboration",
        "Every partnership should be practical, measurable, and connected to the quality of laboratory work or the development of local technical capacity.": "Chaque partenariat doit être pratique, mesurable et lié à la qualité du travail de laboratoire ou au développement des capacités techniques locales.",
        "Define the Need": "Définir le besoin",
        "We clarify the technical objective, partner expectations, available samples, reporting needs, and practical constraints.": "Nous clarifions l’objectif technique, les attentes du partenaire, les échantillons disponibles, les besoins de reporting et les contraintes pratiques.",
        "Agree on Scope": "Valider le périmètre",
        "We define responsibilities, timelines, quality expectations, communication points, and deliverables.": "Nous définissons les responsabilités, les délais, les attentes qualité, les points de communication et les livrables.",
        "Execute the Work": "Exécuter le travail",
        "The partnership moves through sample handling, laboratory activities, training sessions, or technical support work.": "Le partenariat avance à travers la gestion des échantillons, les activités de laboratoire, les sessions de formation ou les travaux d’appui technique.",
        "Review the Impact": "Évaluer l’impact",
        "We review results, lessons learned, follow-up needs, and opportunities for stronger collaboration.": "Nous examinons les résultats, les leçons apprises, les besoins de suivi et les possibilités de renforcer la collaboration.",
        "What We Build With Partners": "Ce que nous construisons avec nos partenaires",
        "The best partnerships create practical value: better data, stronger skills, clearer workflows, and more confidence in mineral-sector decisions.": "Les meilleurs partenariats créent une valeur pratique : de meilleures données, des compétences renforcées, des flux de travail plus clairs et davantage de confiance dans les décisions du secteur minéral.",
        "Analytical Programs": "Programmes analytiques",
        "Sample campaigns, mineral characterization, QA/QC review, and reporting support.": "Campagnes d’échantillons, caractérisation minérale, revue QA/QC et appui au reporting.",
        "Training Pathways": "Parcours de formation",
        "Practical exposure for students, technicians, engineers, and laboratory teams.": "Exposition pratique pour les étudiants, techniciens, ingénieurs et équipes de laboratoire.",
        "Technical Standards": "Standards techniques",
        "Shared discipline around traceability, method selection, data quality, and documentation.": "Discipline partagée autour de la traçabilité, du choix des méthodes, de la qualité des données et de la documentation.",
        "Responsible Mining Support": "Appui à l’exploitation minière responsable",
        "Reliable information for transparency, compliance, environmental awareness, and better decisions.": "Informations fiables pour la transparence, la conformité, la conscience environnementale et de meilleures décisions.",
        "Want to collaborate with LabCongo?": "Vous souhaitez collaborer avec LabCongo ?",
        "Contact our team to discuss a technical, institutional, training, or project-based partnership.": "Contactez notre équipe pour discuter d’un partenariat technique, institutionnel, de formation ou lié à un projet.",
        "Projects Supporting Responsible Mineral Development": "Des projets au service d’un développement minéral responsable",
        "LabCongo develops and supports projects that turn mineral samples into reliable technical information for exploration, mining operations, quality control, and responsible decision-making.": "LabCongo développe et accompagne des projets qui transforment les échantillons miniers en informations techniques fiables pour l’exploration, les opérations minières, le contrôle qualité et la prise de décision responsable.",
        "Each project is organized around clear objectives, disciplined sample handling, traceable analysis, and reporting that can support operational, institutional, or training needs.": "Chaque projet est organisé autour d’objectifs clairs, d’une gestion rigoureuse des échantillons, d’analyses traçables et de rapports pouvant soutenir des besoins opérationnels, institutionnels ou de formation.",
        "Start a Project": "Lancer un projet",
        "LabCongo Projects": "Projets LabCongo",
        "Our projects are presented in three simple groups: upcoming work, ongoing activities, and completed initiatives that support reliable mining analysis and local technical capacity.": "Nos projets sont présentés en trois groupes simples : travaux à venir, activités en cours et initiatives réalisées qui soutiennent une analyse minière fiable et les capacités techniques locales.",
        "Flagship Project": "Projet phare",
        "Reference Laboratory for Mining Analysis in the DRC": "Laboratoire de référence pour l’analyse minière en RDC",
        "LabCongo's flagship project focuses on strengthening a reliable local laboratory platform for mineral testing, practical training, quality control, and responsible mining decisions.": "Le projet phare de LabCongo vise à renforcer une plateforme locale fiable de laboratoire pour les essais miniers, la formation pratique, le contrôle qualité et les décisions minières responsables.",
        "This project is important because it connects laboratory services, local expertise, and technical confidence for partners working in the mining sector.": "Ce projet est important parce qu’il relie les services de laboratoire, l’expertise locale et la confiance technique pour les partenaires qui travaillent dans le secteur minier.",
        "Strategic priority": "Priorité stratégique",
        "Local capacity": "Capacité locale",
        "Reliable data": "Données fiables",
        "Upcoming Projects": "Projets à venir",
        "Preparing the next analytical programs": "Préparer les prochains programmes analytiques",
        "Upcoming projects will focus on new sample analysis campaigns, practical training, technical collaboration, and stronger laboratory capacity for mining-sector needs.": "Les projets à venir porteront sur de nouvelles campagnes d’analyse d’échantillons, la formation pratique, la collaboration technique et le renforcement de la capacité du laboratoire pour les besoins du secteur minier.",
        "Ongoing Projects": "Projets en cours",
        "Active laboratory and support work": "Travaux de laboratoire et d’appui en cours",
        "Ongoing projects include sample preparation, laboratory analysis, QA/QC review, reporting, training support, and collaboration with partners while work is in progress.": "Les projets en cours comprennent la préparation des échantillons, l’analyse en laboratoire, la revue QA/QC, le reporting, l’appui à la formation et la collaboration avec les partenaires pendant l’exécution des travaux.",
        "Completed Projects": "Projets réalisés",
        "Delivered results and technical value": "Résultats livrés et valeur technique",
        "Completed projects represent finished analytical work, validated reports, training actions, and technical support that helped clients and partners make clearer decisions.": "Les projets réalisés représentent des travaux analytiques terminés, des rapports validés, des actions de formation et un appui technique ayant aidé les clients et partenaires à prendre des décisions plus claires.",
        "Mineral Characterization Programs": "Programmes de caractérisation minérale",
        "Projects focused on understanding ore composition, mineral associations, grade behavior, and analytical requirements.": "Projets axés sur la compréhension de la composition des minerais, des associations minérales, du comportement des teneurs et des exigences analytiques.",
        "QA/QC and Sample Traceability": "QA/QC et traçabilité des échantillons",
        "Programs that strengthen confidence in laboratory data through documented controls, duplicates, standards, and review.": "Programmes qui renforcent la confiance dans les données de laboratoire grâce aux contrôles documentés, doublons, standards et revues.",
        "Training and Local Capacity Building": "Formation et renforcement des capacités locales",
        "Project support for practical laboratory exposure, student development, and stronger Congolese technical capacity.": "Appui aux projets favorisant l’exposition pratique au laboratoire, le développement des étudiants et le renforcement des capacités techniques congolaises.",
        "Environmental Monitoring Support": "Appui au suivi environnemental",
        "Analytical support for water, soil, sediment, tailings, and mining-related environmental monitoring programs.": "Appui analytique pour les programmes de suivi de l’eau, des sols, des sédiments, des rejets et des environnements liés à l’activité minière.",
        "How We Structure Projects": "Comment nous structurons les projets",
        "A clear project workflow helps clients move from sample questions to useful technical decisions.": "Un flux de projet clair aide les clients à passer des questions sur les échantillons à des décisions techniques utiles.",
        "Define Objectives": "Définir les objectifs",
        "We clarify the project need, sample type, expected deliverables, and technical constraints before analysis begins.": "Nous clarifions le besoin du projet, le type d’échantillon, les livrables attendus et les contraintes techniques avant le début des analyses.",
        "Analyze and Validate": "Analyser et valider",
        "Samples are handled through controlled preparation, appropriate methods, and QA/QC checks for reliable data.": "Les échantillons sont traités par une préparation contrôlée, des méthodes appropriées et des contrôles QA/QC pour obtenir des données fiables.",
        "Report and Support Decisions": "Rapporter et soutenir les décisions",
        "Reports are prepared to support technical review, planning, compliance, or follow-up testing needs.": "Les rapports sont préparés pour soutenir la revue technique, la planification, la conformité ou les besoins d’analyses complémentaires.",
        "Activities Across the Mining Analysis Value Chain": "Activités sur toute la chaîne de valeur de l’analyse minière",
        "LabCongo's activities cover the practical work needed to transform mining samples into reliable information: reception, preparation, analysis, validation, reporting, and client support.": "Les activités de LabCongo couvrent le travail pratique nécessaire pour transformer les échantillons miniers en informations fiables : réception, préparation, analyse, validation, reporting et accompagnement client.",
        "Our daily work is organized around discipline, traceability, technical collaboration, and continuous improvement so that every analytical result can support better decisions.": "Notre travail quotidien est organisé autour de la discipline, de la traçabilité, de la collaboration technique et de l’amélioration continue afin que chaque résultat analytique puisse soutenir de meilleures décisions.",
        "View Our Services": "Voir nos services",
        "Completed Activities Gallery": "Galerie des activités réalisées",
        "A visual overview of activities already carried out by LabCongo across laboratory work, training, quality control, and field support.": "Un aperçu visuel des activités déjà réalisées par LabCongo dans le travail de laboratoire, la formation, le contrôle qualité et l’appui terrain.",
        "Completed Activity": "Activité réalisée",
        "Sample Preparation Activity": "Activité de préparation des échantillons",
        "Preparation of laboratory portions through controlled handling, splitting, and organization of samples before analysis.": "Préparation de portions de laboratoire grâce à une manipulation contrôlée, une division et une organisation des échantillons avant analyse.",
        "View Details": "Voir les détails",
        "Laboratory Analysis Activity": "Activité d’analyse en laboratoire",
        "Analytical work carried out to produce reliable information for mineral characterization and technical decision-making.": "Travail analytique réalisé pour produire des informations fiables destinées à la caractérisation minérale et à la prise de décision technique.",
        "Training and Technical Exchange": "Formation et échange technique",
        "Practical learning sessions that support students, technicians, and partners through direct laboratory exposure.": "Sessions d’apprentissage pratique qui soutiennent les étudiants, techniciens et partenaires par une exposition directe au laboratoire.",
        "Quality Control Review": "Revue du contrôle qualité",
        "Review of laboratory records, control checks, traceability information, and reporting elements before delivery.": "Revue des dossiers de laboratoire, contrôles, informations de traçabilité et éléments de reporting avant livraison.",
        "Field and Client Support": "Appui terrain et client",
        "Support for sample questions, workflow selection, result interpretation, and follow-up actions with clients and partners.": "Appui aux questions liées aux échantillons, au choix des flux de travail, à l’interprétation des résultats et aux actions de suivi avec les clients et partenaires.",
        "Environmental Monitoring Support": "Appui au suivi environnemental",
        "Laboratory support for environmental samples and mining-related monitoring needs requiring disciplined analysis.": "Appui de laboratoire pour les échantillons environnementaux et les besoins de suivi liés à l’activité minière nécessitant une analyse rigoureuse.",
        "This activity covers the practical preparation steps that help samples move into analysis with better traceability and consistency.": "Cette activité couvre les étapes pratiques de préparation qui permettent aux échantillons d’entrer en analyse avec une meilleure traçabilité et plus de cohérence.",
        "Key details": "Détails clés",
        "Reception and organization of samples.": "Réception et organisation des échantillons.",
        "Preparation of representative laboratory portions.": "Préparation de portions de laboratoire représentatives.",
        "Traceability checks before analytical work.": "Contrôles de traçabilité avant le travail analytique.",
        "This activity focuses on laboratory measurements and observations used to support mineral evaluation and technical reporting.": "Cette activité se concentre sur les mesures et observations de laboratoire utilisées pour soutenir l’évaluation minérale et le reporting technique.",
        "Analytical work adapted to the sample type.": "Travail analytique adapté au type d’échantillon.",
        "Verification of results through laboratory controls.": "Vérification des résultats au moyen de contrôles de laboratoire.",
        "Preparation of information for technical interpretation.": "Préparation des informations pour l’interprétation technique.",
        "This activity supports practical learning by connecting participants with laboratory methods, equipment use, and professional workflows.": "Cette activité soutient l’apprentissage pratique en reliant les participants aux méthodes de laboratoire, à l’utilisation des équipements et aux flux de travail professionnels.",
        "Practical exposure to laboratory procedures.": "Exposition pratique aux procédures de laboratoire.",
        "Technical exchange with students, technicians, or partners.": "Échange technique avec les étudiants, techniciens ou partenaires.",
        "Support for local capacity development.": "Appui au développement des capacités locales.",
        "This activity helps confirm that laboratory results are supported by clear records, quality checks, and traceable documentation.": "Cette activité aide à confirmer que les résultats de laboratoire reposent sur des dossiers clairs, des contrôles qualité et une documentation traçable.",
        "Review of checks, records, and control information.": "Revue des contrôles, dossiers et informations de contrôle.",
        "Verification of traceability before reporting.": "Vérification de la traçabilité avant le reporting.",
        "Support for consistent and reliable data delivery.": "Appui à la livraison de données cohérentes et fiables.",
        "This activity supports clients and partners as they define sample needs, choose analytical workflows, and interpret laboratory information.": "Cette activité accompagne les clients et partenaires lorsqu’ils définissent les besoins liés aux échantillons, choisissent les flux analytiques et interprètent les informations de laboratoire.",
        "Guidance before sample submission.": "Orientation avant la soumission des échantillons.",
        "Support for analytical workflow selection.": "Appui au choix du flux analytique.",
        "Follow-up after results and reporting.": "Suivi après les résultats et le reporting.",
        "This activity supports mining-related environmental monitoring through disciplined laboratory handling and analytical support.": "Cette activité soutient le suivi environnemental lié à l’activité minière grâce à une gestion rigoureuse en laboratoire et à un appui analytique.",
        "Support for environmental samples linked to mining activity.": "Appui aux échantillons environnementaux liés à l’activité minière.",
        "Laboratory analysis for monitoring and follow-up needs.": "Analyse de laboratoire pour les besoins de suivi et de contrôle.",
        "Clear information for responsible decision-making.": "Informations claires pour une prise de décision responsable.",
        "Close": "Fermer",
        "What We Do": "Ce que nous faisons",
        "Our activities connect field needs, laboratory work, technical reporting, and capacity building.": "Nos activités relient les besoins du terrain, le travail de laboratoire, les rapports techniques et le renforcement des capacités.",
        "Sample Reception and Preparation": "Réception et préparation des échantillons",
        "Registration, coding, drying, crushing, pulverizing, splitting, and preparation of representative laboratory portions.": "Enregistrement, codification, séchage, concassage, pulvérisation, division et préparation de portions de laboratoire représentatives.",
        "Laboratory Analysis": "Analyse en laboratoire",
        "Geochemical, mineralogical, spectrometric, metallurgical, precious metals, environmental, and QA/QC-related work.": "Travaux géochimiques, minéralogiques, spectrométriques, métallurgiques, métaux précieux, environnementaux et liés au QA/QC.",
        "Quality Control and Reporting": "Contrôle qualité et reporting",
        "Review of controls, duplicates, standards, traceability records, and reporting information for technical decisions.": "Revue des contrôles, doublons, standards, dossiers de traçabilité et informations de reporting pour les décisions techniques.",
        "Training and Technical Exchange": "Formation et échange technique",
        "Activities that support students, technicians, engineers, and partners through practical laboratory learning and exchange.": "Activités qui soutiennent les étudiants, techniciens, ingénieurs et partenaires par l’apprentissage pratique en laboratoire et l’échange.",
        "Field and Client Support": "Appui terrain et client",
        "Guidance for sample submission, analytical workflow selection, result interpretation, and follow-up testing needs.": "Orientation pour la soumission des échantillons, le choix du flux analytique, l’interprétation des résultats et les besoins d’analyses complémentaires.",
        "Ongoing improvement of methods, procedures, documentation, equipment use, and service quality.": "Amélioration continue des méthodes, procédures, documents, usages des équipements et de la qualité de service.",
        "Need support for a mining analysis activity?": "Besoin d’appui pour une activité d’analyse minière ?",
        "Send us your request and our team will help you identify the right laboratory workflow.": "Envoyez-nous votre demande et notre équipe vous aidera à identifier le flux de laboratoire adapté.",
        "Send a Request": "Envoyer une demande",
        "Need this service?": "Besoin de ce service ?",
        "Step 1": "Étape 1",
        "Step 2": "Étape 2",
        "Step 3": "Étape 3",
        "Step 4": "Étape 4",
        "A rigorous and committed professional with a strong team spirit, he has contributed to major initiatives related to transparency, mineral traceability, and the fight against mining fraud at both national and international levels.": "Professionnel rigoureux, engagé et doté d’un fort esprit d’équipe, il a contribué à de grandes initiatives liées à la transparence, à la traçabilité des minerais et à la lutte contre la fraude minière aux niveaux national et international.",
        "An experienced lawyer and senior executive, Jean-Baptiste Otshudi Disashi Kalonda has more than 20 years of experience in law, public governance, and the mining sector in the Democratic Republic of Congo. Currently Legal Director and Director for the Fight Against Mining Fraud at CEEC, he is recognized for his deep command of mining law, litigation, and mechanisms for regulating and certifying natural resources.": "Juriste expérimenté et haut cadre dirigeant, Jean-Baptiste Otshudi Disashi Kalonda compte plus de 20 ans d’expérience en droit, gouvernance publique et secteur minier en République démocratique du Congo. Actuellement Directeur juridique et Directeur de la lutte contre la fraude minière au CEEC, il est reconnu pour sa maîtrise approfondie du droit minier, du contentieux et des mécanismes de régulation et de certification des ressources naturelles.",
        "With a strong background in economic and social law from the University of Kinshasa, he has held several strategic positions within public institutions, including the National Assembly and various ministries. His career reflects recognized expertise in legal advisory work, regulatory drafting, and public affairs management.": "Fort d’une solide formation en droit économique et social à l’Université de Kinshasa, il a occupé plusieurs postes stratégiques au sein d’institutions publiques, notamment à l’Assemblée nationale et dans différents ministères. Son parcours reflète une expertise reconnue en conseil juridique, rédaction réglementaire et gestion des affaires publiques.",
        "He is part of the team dedicated to dependable service, responsible mining support, and professional collaboration.": "Il fait partie de l’équipe engagée pour un service fiable, un accompagnement minier responsable et une collaboration professionnelle.",
        "His contribution helps maintain traceability, communication, and practical organization across the activities that support analytical work.": "Sa contribution aide à maintenir la traçabilité, la communication et l’organisation pratique des activités qui soutiennent le travail analytique.",
        "Manu is part of the collective effort behind LabCongo's reliable and professional mining laboratory services.": "Manu participe à l’effort collectif qui soutient les services fiables et professionnels de laboratoire minier de LabCongo.",
        "Manu supports LabCongo's daily team activities and contributes to the practical organization of laboratory-service workflows.": "Manu soutient les activités quotidiennes de l’équipe de LabCongo et contribue à l’organisation pratique des flux de services de laboratoire.",
        "This contribution helps the team maintain responsiveness, coordination, and consistency in the way client requests are followed.": "Cette contribution aide l’équipe à maintenir la réactivité, la coordination et la cohérence dans le suivi des demandes clients.",
        "24/7 Support": "Assistance 24/7",
        "An experienced lawyer and senior executive, Jean-Baptiste Otshudi Disashi Kalonda has more than 20 years of experience in law, public governance, and the mining sector in the Democratic Republic of the Congo. Currently Legal Director and Head of Mining Fraud Prevention at CEEC, he is recognized for his deep command of mining law, litigation, and mechanisms for regulating and certifying natural resources.": "Juriste expérimenté et haut cadre dirigeant, Jean-Baptiste Otshudi Disashi Kalonda compte plus de 20 ans d’expérience en droit, gouvernance publique et secteur minier en République démocratique du Congo. Actuellement Directeur juridique et Responsable de la prévention de la fraude minière au CEEC, il est reconnu pour sa maîtrise approfondie du droit minier, du contentieux et des mécanismes de régulation et de certification des ressources naturelles.",
        "Benjamin Itamba Y'Onkos contributes to LabCongo's technical and operational support activities in the mining laboratory context.": "Benjamin Itamba Y’Onkos contribue aux activités de soutien technique et opérationnel de LabCongo dans le contexte du laboratoire minier.",
        "He helps maintain practical follow-up around samples, project needs, and internal coordination so that the team can respond efficiently to client requests.": "Il aide à assurer le suivi pratique des échantillons, des besoins des projets et de la coordination interne afin que l’équipe réponde efficacement aux demandes des clients.",
        "He is part of the team committed to reliable results, clear communication, and responsible service delivery for mining-sector clients.": "Il fait partie de l’équipe engagée pour des résultats fiables, une communication claire et un service responsable aux clients du secteur minier.",
        "He is part of the team working to provide accurate, traceable, and client-oriented mining analysis services.": "Il fait partie de l’équipe qui travaille à fournir des services d’analyse minière précis, traçables et orientés client.",
        "He supports the team in keeping project information clear, sample-related processes traceable, and operational priorities aligned with client needs.": "Il aide l’équipe à garder les informations de projet claires, les processus liés aux échantillons traçables et les priorités opérationnelles alignées sur les besoins des clients.",
        "Her contribution helps the laboratory maintain organized communication, reliable documentation, and a professional service experience.": "Sa contribution aide le laboratoire à maintenir une communication organisée, une documentation fiable et une expérience de service professionnelle.",
        "Her role helps reinforce the quality of the service experience and the internal discipline needed for reliable laboratory operations.": "Son rôle contribue à renforcer la qualité de l’expérience de service et la discipline interne nécessaire à des opérations de laboratoire fiables.",
        "His contribution is connected to coordination, documentation, and the practical organization required for reliable laboratory work.": "Sa contribution est liée à la coordination, à la documentation et à l’organisation pratique nécessaires à un travail de laboratoire fiable.",
        "His role reinforces LabCongo's focus on discipline, reliability, and teamwork in the mining laboratory environment.": "Son rôle renforce l’attention de LabCongo à la discipline, à la fiabilité et au travail d’équipe dans l’environnement du laboratoire minier.",
        "His work helps strengthen sample follow-up, operational discipline, and collaboration between the technical team and project stakeholders.": "Son travail contribue à renforcer le suivi des échantillons, la discipline opérationnelle et la collaboration entre l’équipe technique et les parties prenantes du projet.",
        "His work supports LabCongo's broader commitment to reliable analysis, disciplined processes, and continuous improvement.": "Son travail soutient l’engagement global de LabCongo envers des analyses fiables, des processus rigoureux et l’amélioration continue.",
        "LabCongo is a mining laboratory specializing in the analysis and quality control of ores. We support schools and universities in training local talent, as well as mining companies and mining sector stakeholders in identifying, evaluating, and optimizing mineral resources.": "LabCongo est un laboratoire minier spécialisé dans l’analyse et le contrôle qualité des minerais. Nous accompagnons les écoles et universités dans la formation des talents locaux, ainsi que les sociétés minières et les acteurs du secteur dans l’identification, l’évaluation et l’optimisation des ressources minérales.",
        "Rigorous, committed, and strongly team-oriented, he has contributed to major initiatives related to mineral transparency, traceability, and the fight against mining fraud at both national and international levels.": "Rigoureux, engagé et fortement orienté vers le travail d’équipe, il a contribué à de grandes initiatives liées à la transparence minérale, à la traçabilité et à la lutte contre la fraude minière aux niveaux national et international.",
        "She is involved in the collective effort to make LabCongo a trusted partner for mining laboratory services.": "Elle participe à l’effort collectif visant à faire de LabCongo un partenaire de confiance pour les services de laboratoire minier.",
        "She is part of LabCongo's commitment to professionalism, trust, and clear support for mining-sector partners.": "Elle s’inscrit dans l’engagement de LabCongo en faveur du professionnalisme, de la confiance et d’un accompagnement clair des partenaires du secteur minier.",
        "Thanks to our qualified team and modern equipment, we provide reliable, accurate, and fast results in accordance with international standards. Through our expertise, we actively contribute to the development of the extractive sector.": "Grâce à notre équipe qualifiée et à nos équipements modernes, nous fournissons des résultats fiables, précis et rapides conformément aux normes internationales. Par notre expertise, nous contribuons activement au développement du secteur extractif.",
        "Through professionalism, transparency, and innovation, we strive to build long-term partnerships based on trust and excellence. We are also committed to promoting sustainable and responsible mining practices that contribute to environmental protection and economic development.": "Par le professionnalisme, la transparence et l’innovation, nous œuvrons à bâtir des partenariats durables fondés sur la confiance et l’excellence. Nous nous engageons également à promouvoir des pratiques minières durables et responsables qui contribuent à la protection de l’environnement et au développement économique.",
        "With solid training in economic and social law from the University of Kinshasa, he has held several strategic roles in public institutions, including the National Assembly and various ministries. His career reflects recognized expertise in legal advisory, drafting regulatory texts, and public affairs management.": "Avec une solide formation en droit économique et social à l’Université de Kinshasa, il a occupé plusieurs fonctions stratégiques dans des institutions publiques, notamment à l’Assemblée nationale et dans divers ministères. Son parcours reflète une expertise reconnue en conseil juridique, rédaction de textes réglementaires et gestion des affaires publiques.",
        "404 Error": "Erreur 404",
        "Advanced Equipment": "Équipements avancés",
        "Analytical report with method notes and QA/QC information.": "Rapport analytique avec notes de méthode et informations QA/QC.",
        "Analytical verification of feed, product, and residue streams.": "Vérification analytique des flux d’alimentation, de produits et de résidus.",
        "Analyze products and report performance": "Analyser les produits et rapporter les performances",
        "Assay support for gold, silver, and selected valuable metals depending on sample type and grade range.": "Appui au dosage de l’or, de l’argent et de certains métaux de valeur selon le type d’échantillon et la gamme de teneurs.",
        "At the LabCongo mining laboratory, we use advanced equipment to provide accurate and reliable analyses. With years of experience in the field, our engineers are equipped to address the most complex challenges.": "Au laboratoire minier LabCongo, nous utilisons des équipements avancés pour fournir des analyses précises et fiables. Forts de plusieurs années d’expérience dans le domaine, nos ingénieurs sont prêts à relever les défis les plus complexes.",
        "Born on 25/11/1968.": "Né le 25/11/1968.",
        "By combining careful sample preparation with mineral observation and analytical interpretation, we help clients understand the mineral composition that influences recovery, processing behavior, and product quality.": "En combinant une préparation soigneuse des échantillons, l’observation minérale et l’interprétation analytique, nous aidons les clients à comprendre la composition minérale qui influence la récupération, le comportement au traitement et la qualité du produit.",
        "Clear reporting for technical, regulatory, and project documentation.": "Rapports clairs pour la documentation technique, réglementaire et de projet.",
        "Clear technical report for project and laboratory records.": "Rapport technique clair pour les dossiers de projet et de laboratoire.",
        "Client": "Client",
        "Comparison of mineral composition across zones, pits, campaigns, or process streams.": "Comparaison de la composition minérale entre zones, fosses, campagnes ou flux de procédé.",
        "Contamination-control practices and equipment cleaning between sample batches.": "Pratiques de contrôle de la contamination et nettoyage des équipements entre les lots d’échantillons.",
        "Continuous assistance, always available to support your mining operations.": "Assistance continue, toujours disponible pour soutenir vos opérations minières.",
        "Controlled preparation to improve representativity for precious metal analysis.": "Préparation contrôlée pour améliorer la représentativité dans l’analyse des métaux précieux.",
        "Data-quality comments for technical teams and project files.": "Commentaires sur la qualité des données pour les équipes techniques et les dossiers de projet.",
        "Define test objective and sample requirements": "Définir l’objectif de l’essai et les exigences d’échantillonnage",
        "Environmental analysis helps mining operators understand and manage the impact of their activities on surrounding ecosystems. LabCongo provides testing support for monitoring programs related to water, soil, sediment, and mine-affected materials.": "L’analyse environnementale aide les opérateurs miniers à comprendre et gérer l’impact de leurs activités sur les écosystèmes environnants. LabCongo fournit un appui analytique aux programmes de suivi liés à l’eau, aux sols, aux sédiments et aux matériaux affectés par l’exploitation minière.",
        "Environmental analytical results with sample location or ID references.": "Résultats analytiques environnementaux avec références de localisation ou d’identification des échantillons.",
        "Experienced Engineers": "Ingénieurs expérimentés",
        "Experienced geochemists, metallurgical engineers, mineralogists, chemical laboratory technicians, and biologists.": "Géochimistes, ingénieurs métallurgistes, minéralogistes, techniciens de laboratoire chimique et biologistes expérimentés.",
        "Expert Engineers": "Ingénieurs experts",
        "Expert Geologists": "Géologues experts",
        "Features": "Atouts",
        "Final report and data delivery": "Rapport final et livraison des données",
        "From routine sample batches to targeted investigation programs, our laboratory applies controlled preparation, calibrated methods, and documented QA/QC practices to deliver results that are clear, traceable, and useful for technical reporting.": "Des lots d’échantillons courants aux programmes d’investigation ciblés, notre laboratoire applique une préparation contrôlée, des méthodes étalonnées et des pratiques QA/QC documentées afin de fournir des résultats clairs, traçables et utiles aux rapports techniques.",
        "Go Back To Home": "Retour à l’accueil",
        "Handling of exploration, production, and process-control sample streams.": "Gestion des flux d’échantillons d’exploration, de production et de contrôle de procédé.",
        "I was truly impressed by the quality of LabCongo's analyses. Their team is very professional and competent. The results were delivered on time and were accurate, and I appreciated their support throughout the process. Thank you, LabCongo.": "J’ai été réellement impressionné par la qualité des analyses de LabCongo. Leur équipe est très professionnelle et compétente. Les résultats ont été livrés à temps et avec précision, et j’ai apprécié leur accompagnement tout au long du processus. Merci, LabCongo.",
        "Identification of parameters requiring follow-up or monitoring attention.": "Identification des paramètres nécessitant un suivi ou une attention particulière.",
        "Identification of possible contamination, bias, outliers, or preparation issues.": "Identification des contaminations possibles, biais, valeurs aberrantes ou problèmes de préparation.",
        "Instrumental analysis and QA/QC review": "Analyse instrumentale et revue QA/QC",
        "Interpretation of mineral associations": "Interprétation des associations minérales",
        "LabCongo is a mining laboratory specialized in mineral analysis, ensuring accuracy, reliability, and compliance with national standards.": "LabCongo est un laboratoire minier spécialisé dans l’analyse minérale, garantissant précision, fiabilité et conformité aux normes nationales.",
        "LabCongo provided me with accurate and reliable analyses for my mining project. Their team is skilled and attentive, and I highly recommend their services.": "LabCongo m’a fourni des analyses précises et fiables pour mon projet minier. Leur équipe est compétente et attentive, et je recommande vivement leurs services.",
        "LabCongo provides geochemical analysis designed for mineral exploration, grade control, ore characterization, and quality verification. Our work helps mining teams understand the elemental composition of samples and make decisions based on reliable data.": "LabCongo fournit des analyses géochimiques conçues pour l’exploration minière, le contrôle des teneurs, la caractérisation des minerais et la vérification de la qualité. Notre travail aide les équipes minières à comprendre la composition élémentaire des échantillons et à prendre des décisions fondées sur des données fiables.",
        "OTSHUDI DISASHI-KALONDA Jean-Baptiste": "OTSHUDI DISASHI-KALONDA Jean-Baptiste",
        "LONGENDJA ISAMBOYO Henri Christin": "LONGENDJA ISAMBOYO Henri Christin",
        "MUSOGA BAKAATO Kethia": "MUSOGA BAKAATO Kethia",
        "ITAMBA Y’ONKOS Benjamin": "ITAMBA Y’ONKOS Benjamin",
        "LOMBI Evy": "LOMBI Evy",
        "Metallurgical testing provides practical information on how an ore responds to processing. LabCongo supports clients who need to evaluate recovery potential, compare processing routes, and optimize operational parameters before or during production.": "Les essais métallurgiques fournissent des informations pratiques sur la manière dont un minerai réagit au traitement. LabCongo accompagne les clients qui doivent évaluer le potentiel de récupération, comparer des voies de traitement et optimiser les paramètres opérationnels avant ou pendant la production.",
        "Method and instrument information in the analytical report.": "Informations sur la méthode et l’instrument dans le rapport analytique.",
        "Mineral observation and classification": "Observation et classification minérales",
        "Mineralogical analysis helps explain how valuable minerals are hosted, associated, and liberated in a sample. LabCongo uses this service to support ore characterization, beneficiation studies, and technical decisions across the mining value chain.": "L’analyse minéralogique aide à comprendre comment les minéraux de valeur sont contenus, associés et libérés dans un échantillon. LabCongo utilise ce service pour soutenir la caractérisation des minerais, les études de valorisation et les décisions techniques tout au long de la chaîne de valeur minière.",
        "Monitoring of metals and relevant parameters associated with mining activity.": "Suivi des métaux et des paramètres pertinents associés à l’activité minière.",
        "Our approach links sample preparation, controlled test conditions, and analytical verification so that metallurgical results can guide decisions on treatment methods, reagent use, recovery performance, and process improvement.": "Notre approche relie la préparation des échantillons, les conditions d’essai contrôlées et la vérification analytique afin que les résultats métallurgiques guident les décisions sur les méthodes de traitement, l’utilisation des réactifs, les performances de récupération et l’amélioration des procédés.",
        "Our experienced mining engineers bring their expertise to your project for accurate and reliable results.": "Nos ingénieurs miniers expérimentés apportent leur expertise à votre projet pour des résultats précis et fiables.",
        "Our partners testify to the quality of our analyses, our speed, and our professionalism.": "Nos partenaires témoignent de la qualité de nos analyses, de notre rapidité et de notre professionnalisme.",
        "Our preparation workflow is adapted to rocks, ores, soils, concentrates, tailings, and other mining materials. Each step is organized to support consistent particle size, representative splitting, and clean handling.": "Notre flux de préparation est adapté aux roches, minerais, sols, concentrés, rejets et autres matériaux miniers. Chaque étape est organisée pour assurer une granulométrie constante, une division représentative et une manipulation propre.",
        "Our qualified engineers ensure results that meet international mining industry standards.": "Nos ingénieurs qualifiés garantissent des résultats conformes aux normes internationales de l’industrie minière.",
        "Our state-of-the-art tools detect fine elements and deliver fast, accurate results.": "Nos outils de pointe détectent les éléments fins et fournissent des résultats rapides et précis.",
        "Our team remains continuously available to support your projects and respond to your needs.": "Notre équipe reste disponible en permanence pour soutenir vos projets et répondre à vos besoins.",
        "Our work supports responsible mining practices by producing clear analytical information that can be used for compliance, baseline studies, operational monitoring, and remediation planning.": "Notre travail soutient les pratiques minières responsables en produisant des informations analytiques claires utilisables pour la conformité, les études de référence, le suivi opérationnel et la planification de la remédiation.",
        "Page Not Found": "Page introuvable",
        "Precious metal assay results with sample identification and units.": "Résultats de dosage des métaux précieux avec identification des échantillons et unités.",
        "Precious metals require careful handling, representative preparation, and analytical discipline. LabCongo supports clients who need dependable assay information for gold, silver, and other valuable metals in mining samples.": "Les métaux précieux exigent une manipulation soigneuse, une préparation représentative et une discipline analytique. LabCongo accompagne les clients qui ont besoin d’informations de dosage fiables pour l’or, l’argent et d’autres métaux de valeur dans les échantillons miniers.",
        "Preparation and digestion/fusion route selection": "Préparation et choix de la voie de digestion/fusion",
        "Preparation of pulps, coarse rejects, and laboratory portions for downstream testing.": "Préparation de pulpes, rejets grossiers et portions de laboratoire pour les essais ultérieurs.",
        "Preparation summary included with analytical work where applicable.": "Résumé de préparation inclus avec le travail analytique lorsque applicable.",
        "Prepare representative feed material": "Préparer un matériau d’alimentation représentatif",
        "Prepared analytical portions ready for requested laboratory methods.": "Portions analytiques préparées et prêtes pour les méthodes de laboratoire demandées.",
        "Project Owner": "Porteur de projet",
        "QA/QC is essential for credible mining data. LabCongo helps clients design, apply, and review quality-control practices that support reliable analytical results and transparent decision-making.": "Le QA/QC est essentiel pour produire des données minières crédibles. LabCongo aide les clients à concevoir, appliquer et examiner des pratiques de contrôle qualité qui soutiennent des résultats analytiques fiables et une prise de décision transparente.",
        "QA/QC summary report with observations and conclusions.": "Rapport de synthèse QA/QC avec observations et conclusions.",
        "Quality-control notes for validation and traceability.": "Notes de contrôle qualité pour la validation et la traçabilité.",
        "Reasonable Prices": "Prix raisonnables",
        "Recommendations for complementary analysis where appropriate.": "Recommandations d’analyses complémentaires lorsque approprié.",
        "Recommendations for confirmatory or repeat analysis where needed.": "Recommandations d’analyses de confirmation ou de répétition lorsque nécessaire.",
        "Recommendations for corrective action and improved laboratory workflows.": "Recommandations d’actions correctives et d’amélioration des flux de laboratoire.",
        "Recommendations for further optimization or confirmatory testing.": "Recommandations pour une optimisation supplémentaire ou des essais de confirmation.",
        "Recommendations for future sampling and analytical programs.": "Recommandations pour les futurs programmes d’échantillonnage et d’analyse.",
        "Reference Laboratory": "Laboratoire de référence",
        "Reliable laboratory results begin with proper sample preparation. LabCongo prepares mining samples through controlled procedures that reduce contamination, preserve traceability, and produce representative material for analysis.": "Des résultats de laboratoire fiables commencent par une bonne préparation des échantillons. LabCongo prépare les échantillons miniers au moyen de procédures contrôlées qui réduisent la contamination, préservent la traçabilité et produisent un matériau représentatif pour l’analyse.",
        "Report summaries suitable for project and compliance files.": "Synthèses de rapport adaptées aux dossiers de projet et de conformité.",
        "Reporting with recommendations": "Rapport avec recommandations",
        "Retention of rejects or pulps according to client instructions.": "Conservation des rejets ou pulpes selon les instructions du client.",
        "Review of standards, blanks, duplicates, repeats, and internal control performance.": "Examen des performances des standards, blancs, doublons, répétitions et contrôles internes.",
        "Run controlled laboratory tests": "Réaliser des essais de laboratoire contrôlés",
        "Sample preparation": "Préparation des échantillons",
        "Sample preparation records and traceability information.": "Dossiers de préparation des échantillons et informations de traçabilité.",
        "Sample reception, coding, drying, crushing, pulverizing, splitting, and homogenization.": "Réception, codification, séchage, concassage, pulvérisation, division et homogénéisation des échantillons.",
        "Spectrometric analysis supports fast and precise measurement of elemental composition in mining samples. LabCongo uses this service for ores, concentrates, soils, rocks, and process materials where reliable elemental data is essential.": "L’analyse spectrométrique permet une mesure rapide et précise de la composition élémentaire des échantillons miniers. LabCongo utilise ce service pour les minerais, concentrés, sols, roches et matériaux de procédé lorsque des données élémentaires fiables sont essentielles.",
        "Strategic pricing based on the local DRC market and project demand.": "Tarification stratégique basée sur le marché local de la RDC et les besoins du projet.",
        "Strict compliance with international standards and good laboratory practices.": "Respect strict des normes internationales et des bonnes pratiques de laboratoire.",
        "Support for baseline studies, operational monitoring, and environmental due diligence.": "Appui aux études de référence, au suivi opérationnel et à la diligence environnementale.",
        "Support for comminution, concentration, leaching, and recovery studies according to project needs.": "Appui aux études de comminution, concentration, lixiviation et récupération selon les besoins du projet.",
        "Support for comparison between feed, concentrate, and residue streams.": "Appui à la comparaison entre les flux d’alimentation, de concentré et de résidus.",
        "Support for exploration screening, grade control, concentrate evaluation, and process monitoring.": "Appui au criblage d’exploration, au contrôle des teneurs, à l’évaluation des concentrés et au suivi des procédés.",
        "Support for exploration, grade control, metallurgical, and environmental datasets.": "Appui aux jeux de données d’exploration, de contrôle des teneurs, métallurgiques et environnementaux.",
        "Tables or charts showing control performance where applicable.": "Tableaux ou graphiques présentant les performances des contrôles lorsque applicable.",
        "Testimonial": "Témoignage",
        "Testing of ores, concentrates, tailings, process streams, and selected exploration samples.": "Essais sur minerais, concentrés, rejets, flux de procédé et échantillons d’exploration sélectionnés.",
        "Testing support for water, soil, sediment, tailings, and mine-affected environmental samples.": "Appui analytique pour les échantillons d’eau, de sol, de sédiments, de rejets et d’environnements affectés par la mine.",
        "The Best Laboratory Solution for Mineral Analysis": "La meilleure solution de laboratoire pour l’analyse minérale",
        "The service is designed to provide consistent analytical data, with appropriate calibration, instrument control, and verification steps to reduce uncertainty and improve confidence in reported values.": "Le service est conçu pour fournir des données analytiques cohérentes, avec un étalonnage approprié, un contrôle des instruments et des étapes de vérification destinées à réduire l’incertitude et renforcer la confiance dans les valeurs rapportées.",
        "The service is suited to exploration, production monitoring, concentrate evaluation, and verification programs where accuracy, traceability, and clear reporting are essential.": "Le service convient à l’exploration, au suivi de production, à l’évaluation des concentrés et aux programmes de vérification où précision, traçabilité et clarté des rapports sont essentielles.",
        "This service can be integrated into analytical programs or delivered as a focused review of sample batches, controls, duplicate performance, contamination indicators, and data consistency.": "Ce service peut être intégré aux programmes analytiques ou livré comme une revue ciblée des lots d’échantillons, des contrôles, des performances des doublons, des indicateurs de contamination et de la cohérence des données.",
        "Transparent Pricing": "Tarification transparente",
        "Use of quality-control checks to support reliable grade reporting.": "Utilisation de contrôles qualité pour soutenir un rapport fiable des teneurs.",
        "We guarantee accurate analyses through strict protocols and technologies adapted to the mining sector requirements. With LabCongo, benefit from precise analyses, quality testing, and expert guidance to optimize your mining operations efficiently and sustainably.": "Nous garantissons des analyses précises grâce à des protocoles stricts et à des technologies adaptées aux exigences du secteur minier. Avec LabCongo, bénéficiez d’analyses précises, d’essais de qualité et de conseils d’experts pour optimiser vos opérations minières de manière efficace et durable.",
        "We provide accessible services with excellent value for all our clients.": "Nous fournissons des services accessibles avec un excellent rapport qualité-prix pour tous nos clients.",
        "We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?": "Nous sommes désolés, la page que vous recherchez n’existe pas sur notre site ! Vous pouvez retourner à la page d’accueil ou essayer une recherche.",
        "Youtube Video": "Vidéo YouTube",
        "Jean-Baptiste Otshudi Disashi-Kalonda is an experienced lawyer and senior executive with more than 20 years of experience in law, public governance, and the mining sector in the Democratic Republic of Congo.": "Jean-Baptiste Otshudi Disashi-Kalonda est un avocat et cadre expérimenté, avec plus de 20 ans d’expérience en droit, gouvernance publique et secteur minier en République démocratique du Congo.",
        "He contributes to LabCongo through strategic leadership, legal insight, and a strong commitment to responsible mining-sector services.": "Il contribue à LabCongo par son leadership stratégique, son expertise juridique et son engagement envers des services responsables pour le secteur minier.",
        "His profile reflects a focus on discipline, transparency, traceability, and professional collaboration in support of reliable laboratory operations.": "Son profil reflète un souci de discipline, de transparence, de traçabilité et de collaboration professionnelle au service d’opérations de laboratoire fiables.",
        "Labcongo.org": "Labcongo.org",
        "Team Biography - LabCongo": "Biographie du membre - LabCongo",
        "LONGENDJA ISAMBOYO Henri Christin contributes to LabCongo's team and supports the company's mining laboratory services.": "LONGENDJA ISAMBOYO Henri Christin contribue à l’équipe de LabCongo et soutient les services de laboratoire minier de l’entreprise.",
        "MUSOGA BAKAATO Kethia contributes to LabCongo's team and supports the company's mining laboratory services.": "MUSOGA BAKAATO Kethia contribue à l’équipe de LabCongo et soutient les services de laboratoire minier de l’entreprise.",
        "ITAMBA Y’ONKOS Benjamin contributes to LabCongo's team and supports the company's mining laboratory services.": "ITAMBA Y’ONKOS Benjamin contribue à l’équipe de LabCongo et soutient les services de laboratoire minier de l’entreprise.",
        "LOMBI Evy contributes to LabCongo's team and supports the company's mining laboratory services.": "LOMBI Evy contribue à l’équipe de LabCongo et soutient les services de laboratoire minier de l’entreprise.",
        "This profile is part of the official team list prepared for the LabCongo website.": "Ce profil fait partie de la liste officielle de l’équipe préparée pour le site web de LabCongo.",
        "Additional responsibilities and detailed biography information can be added as the profile is completed.": "Les responsabilités et informations biographiques détaillées pourront être ajoutées lorsque le profil sera complété."
};

    Object.keys(additionalFrenchTranslations).forEach(function (key) {
        translations.fr[key] = additionalFrenchTranslations[key];
    });


    var attributeTranslations = {
        fr: {
            'Name': 'Nom',
            'Your Name': 'Votre nom',
            'Your Email': 'Votre e-mail',
            'Your Email Address': 'Votre adresse e-mail',
            'Your Mobile': 'Votre téléphone',
            'Phone': 'Téléphone',
            'Subject': 'Sujet',
            'Message': 'Message',
            'Choose a Service': 'Choisir un service',
            'Language selector': 'Sélecteur de langue',
            'Close': 'Fermer',
            'Leave a message here': 'Laissez votre message ici',
            'breadcrumb animated slideInDown': 'Fil d\'Ariane',
            'Youtube Video': 'Vidéo YouTube',
            'Image': 'Image',
            'LabCongo partners and laboratory collaboration': 'Partenaires de LabCongo et collaboration en laboratoire',
            'LabCongo partner category review': 'Revue des catégories de partenaires de LabCongo',
            'LabCongo flagship mining analysis project': 'Projet phare d’analyse minière de LabCongo',
            'Upcoming LabCongo projects': 'Projets LabCongo à venir',
            'Ongoing LabCongo projects': 'Projets LabCongo en cours',
            'Completed LabCongo projects': 'Projets LabCongo réalisés',
            'Sample preparation activity': 'Activité de préparation des échantillons',
            'Laboratory analysis activity': 'Activité d’analyse en laboratoire',
            'Training and technical exchange activity': 'Activité de formation et d’échange technique',
            'Quality control review activity': 'Activité de revue du contrôle qualité',
            'Field and client support activity': 'Activité d’appui terrain et client',
            'Environmental monitoring activity': 'Activité de suivi environnemental',
            'Switch to dark mode': 'Passer en mode sombre',
            'Switch to light mode': 'Passer en mode clair'
        }
    };

    function preserveWhitespace(original, translated) {
        var leading = original.match(/^\s*/)[0];
        var trailing = original.match(/\s*$/)[0];
        return leading + translated + trailing;
    }

    function translateTextNodes(root, dictionary) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }

                var parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].indexOf(parent.tagName) !== -1) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var nodes = [];

        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(function (node) {
            var normalized = node.nodeValue.replace(/\s+/g, ' ').trim();
            if (dictionary[normalized]) {
                node.nodeValue = preserveWhitespace(node.nodeValue, dictionary[normalized]);
            }
        });
    }

    function translateDynamicAttribute(value) {
        if (currentLanguage !== 'fr') {
            return value;
        }

        var dynamicTranslations = [
            { pattern: /^Read biography of (.+)$/, replacement: 'Lire la biographie de $1' },
            { pattern: /^Facebook profile for (.+)$/, replacement: 'Profil Facebook de $1' },
            { pattern: /^Twitter profile for (.+)$/, replacement: 'Profil Twitter de $1' },
            { pattern: /^Linkedin profile for (.+)$/, replacement: 'Profil LinkedIn de $1' },
            { pattern: /^Youtube profile for (.+)$/, replacement: 'Profil YouTube de $1' }
        ];

        for (var index = 0; index < dynamicTranslations.length; index++) {
            if (dynamicTranslations[index].pattern.test(value)) {
                return value.replace(dynamicTranslations[index].pattern, dynamicTranslations[index].replacement);
            }
        }

        return value;
    }

    function translateAttributes(root, dictionary) {
        var attributes = ['placeholder', 'aria-label', 'title', 'value', 'alt'];

        attributes.forEach(function (attribute) {
            root.querySelectorAll('[' + attribute + ']').forEach(function (element) {
                var value = element.getAttribute(attribute);
                if (dictionary[value]) {
                    element.setAttribute(attribute, dictionary[value]);
                    return;
                }

                var translatedValue = translateDynamicAttribute(value);
                if (translatedValue !== value) {
                    element.setAttribute(attribute, translatedValue);
                }
            });
        });
    }

    function localizeUrlValue(value, language) {
        if (!value || value === '#' || value.indexOf('mailto:') === 0 || value.indexOf('tel:') === 0 || value.indexOf('javascript:') === 0) {
            return value;
        }

        try {
            var url = new URL(value, window.location.href);
            if (url.origin !== window.location.origin || !/\.(html|php)$/i.test(url.pathname)) {
                return value;
            }

            if (language === 'fr') {
                url.searchParams.set('lang', 'fr');
            } else {
                url.searchParams.delete('lang');
            }

            return url.pathname.replace(/^\//, '') + url.search + url.hash;
        } catch (error) {
            return value;
        }
    }

    function localizeInternalTargets(language) {
        document.querySelectorAll('a[href]').forEach(function (link) {
            link.setAttribute('href', localizeUrlValue(link.getAttribute('href'), language));
        });

        document.querySelectorAll('input[name="_redirect"]').forEach(function (input) {
            input.value = localizeUrlValue(input.value, language);
        });
    }

    function applyLanguage(language) {
        document.documentElement.setAttribute('lang', language);
        localizeInternalTargets(language);

        if (language === 'fr') {
            var dictionary = translations.fr;
            var attrDictionary = attributeTranslations.fr;

            if (dictionary[document.title]) {
                document.title = dictionary[document.title];
            }

            translateTextNodes(document.body, dictionary);
            translateAttributes(document, attrDictionary);
        }
    }

    localStorage.setItem('labcongo_language', currentLanguage);
    localStorage.setItem('labcongo_theme', currentTheme);
    $('#languageSelect').val(currentLanguage);
    applyTheme(currentTheme);
    applyLanguage(currentLanguage);

    $('[data-theme-toggle]').on('click', function () {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('labcongo_theme', currentTheme);
        applyTheme(currentTheme);
    });

    $('#languageSelect').on('change', function () {
        var selectedLanguage = $(this).val();

        if (supportedLanguages.indexOf(selectedLanguage) === -1) {
            selectedLanguage = 'en';
        }

        localStorage.setItem('labcongo_language', selectedLanguage);

        var url = new URL(window.location.href);
        if (selectedLanguage === 'fr') {
            url.searchParams.set('lang', 'fr');
        } else {
            url.searchParams.delete('lang');
        }

        window.location.href = url.toString();
    });


    // Form feedback
    var formStatus = new URLSearchParams(window.location.search).get('form');
    var formMessages = {
        en: {
            success: {
                type: 'success',
                text: 'Thank you. Your message has been sent successfully.'
            },
            logged: {
                type: 'warning',
                text: 'Thank you. Your message was received locally for testing. Local PHP may not deliver email; use the hosted server for the final email test.'
            },
            config: {
                type: 'warning',
                text: 'The form is connected, but SMTP is not configured yet. Add the email password in mail-config.php to send real messages.'
            },
            error: {
                type: 'danger',
                text: 'Sorry, your message could not be sent by SMTP. Please verify the email password and server settings.'
            },
            invalid: {
                type: 'danger',
                text: 'Invalid form request. Please submit the form again.'
            }
        },
        fr: {
            success: {
                type: 'success',
                text: 'Merci. Votre message a été envoyé avec succès.'
            },
            logged: {
                type: 'warning',
                text: 'Merci. Votre message a été reçu localement pour le test. Le PHP local peut ne pas envoyer l’e-mail; utilisez le serveur hébergé pour le test final.'
            },
            config: {
                type: 'warning',
                text: 'Le formulaire est connecté, mais le SMTP n’est pas encore configuré. Ajoutez le mot de passe e-mail dans mail-config.php pour envoyer de vrais messages.'
            },
            error: {
                type: 'danger',
                text: 'Désolé, votre message n’a pas pu être envoyé par SMTP. Veuillez vérifier le mot de passe e-mail et les paramètres du serveur.'
            },
            invalid: {
                type: 'danger',
                text: 'Requête de formulaire invalide. Veuillez soumettre le formulaire à nouveau.'
            }
        }
    };

    var localizedFormMessages = formMessages[currentLanguage] || formMessages.en;

    if (formStatus && localizedFormMessages[formStatus]) {
        var feedback = localizedFormMessages[formStatus];
        var alert = $(
            '<div class="form-feedback" role="status" aria-live="polite">' +
                '<div class="alert alert-' + feedback.type + ' shadow mb-0" role="alert">' +
                    '<span>' + feedback.text + '</span>' +
                    '<button type="button" class="btn-close form-feedback-close" aria-label="' + (currentLanguage === 'fr' ? 'Fermer' : 'Close') + '"></button>' +
                '</div>' +
            '</div>'
        );

        var dismissFeedback = function () {
            alert.removeClass('is-visible');
            setTimeout(function () {
                alert.remove();
            }, 400);
        };

        $('body').append(alert);

        setTimeout(function () {
            alert.addClass('is-visible');
        }, 300);

        setTimeout(dismissFeedback, 6500);
        alert.find('.form-feedback-close').on('click', dismissFeedback);

        if (window.history.replaceState) {
            var cleanUrl = new URL(window.location.href);
            cleanUrl.searchParams.delete('form');
            window.history.replaceState({}, document.title, cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
        }
    }
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 900,
        loop: true,
        margin: 24,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });
    
})(jQuery);
