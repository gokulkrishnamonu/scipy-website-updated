import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Get Started',
      
      // Hero
      heroTitle: 'Transform Your Business with',
      heroTitleHighlight: 'Next-Gen IT Solutions',
      heroSubtitle: 'Empowering enterprises with cutting-edge software development, AI solutions, and digital transformation services',
      requestDemo: 'Request Demo',
      viewServices: 'View Services',
      
      // Clients
      ourClients: 'Our Clients',
      trustedByLeaders: 'Trusted by Industry Leaders',
      partneringWorldwide: 'Partnering with organizations worldwide to deliver excellence',
      whatClientsSay: 'What Our Clients Say',
      realFeedback: 'Real feedback from real clients who have transformed their businesses with us',
      clientRetentionRate: 'Client Retention Rate',
      averageRating: 'Average Rating',
      activeClients: 'Active Clients',
      countriesServed: 'Countries Served',
      
      // Why Choose Us
      whyChooseUs: 'Why Choose Us',
      whyTitle: 'Why Leading Companies Choose Scipy Technologies',
      whySubtitle: 'We deliver exceptional value through innovation, expertise, and commitment',
      
      // CTA
      ctaTitle: 'Ready to Transform Your Business?',
      ctaSubtitle: "Let's discuss how our solutions can help you achieve your goals",
      scheduleConsultation: 'Schedule Consultation',
      
      // Footer
      aboutCompany: 'About Company',
      footerDescription: 'Leading IT solutions provider specializing in software development, AI, and digital transformation.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      getInTouch: 'Get In Touch',
      allRightsReserved: 'All rights reserved.',
      
      // Contact
      getInTouchTitle: 'Get In Touch',
      letDiscuss: "Let's discuss how we can help transform your business",
      startConversation: "Let's Start a Conversation",
      haveProject: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      emailUs: 'Email Us',
      callUs: 'Call Us',
      visitUs: 'Visit Us',
      respondWithin24: "We'll respond within 24 hours",
      monFri: 'Mon-Fri from 8am to 6pm PST',
      sendMessage: 'Send Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phoneNumber: 'Phone Number',
      message: 'Message',
      globalPresence: 'Global Presence, Local Expertise',
      serveWorldwide: 'We serve clients worldwide with offices in major tech hubs',
    },
  },
  ar: {
    translation: {
      // Navbar
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      products: 'المنتجات',
      portfolio: 'الأعمال',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ الآن',
      
      // Hero
      heroTitle: 'حوّل عملك مع',
      heroTitleHighlight: 'حلول تقنية من الجيل التالي',
      heroSubtitle: 'تمكين المؤسسات بتطوير البرمجيات المتطورة وحلول الذكاء الاصطناعي وخدمات التحول الرقمي',
      requestDemo: 'طلب عرض توضيحي',
      viewServices: 'عرض الخدمات',
      
      // Clients
      ourClients: 'عملاؤنا',
      trustedByLeaders: 'موثوق به من قبل قادة الصناعة',
      partneringWorldwide: 'الشراكة مع المؤسسات في جميع أنحاء العالم لتقديم التميز',
      whatClientsSay: 'ماذا يقول عملاؤنا',
      realFeedback: 'تعليقات حقيقية من عملاء حقيقيين قاموا بتحويل أعمالهم معنا',
      clientRetentionRate: 'معدل الاحتفاظ بالعملاء',
      averageRating: 'متوسط التقييم',
      activeClients: 'العملاء النشطون',
      countriesServed: 'الدول المخدومة',
      
      // Why Choose Us
      whyChooseUs: 'لماذا تختارنا',
      whyTitle: 'لماذا تختار الشركات الرائدة Scipy Technologies',
      whySubtitle: 'نقدم قيمة استثنائية من خلال الابتكار والخبرة والالتزام',
      
      // CTA
      ctaTitle: 'هل أنت مستعد لتحويل عملك؟',
      ctaSubtitle: 'دعنا نناقش كيف يمكن لحلولنا مساعدتك في تحقيق أهدافك',
      scheduleConsultation: 'حجز استشارة',
      
      // Footer
      aboutCompany: 'عن الشركة',
      footerDescription: 'مزود رائد لحلول تكنولوجيا المعلومات متخصص في تطوير البرمجيات والذكاء الاصطناعي والتحول الرقمي.',
      quickLinks: 'روابط سريعة',
      ourServices: 'خدماتنا',
      getInTouch: 'تواصل معنا',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      
      // Contact
      getInTouchTitle: 'تواصل معنا',
      letDiscuss: 'دعنا نناقش كيف يمكننا مساعدتك في تحويل عملك',
      startConversation: 'لنبدأ محادثة',
      haveProject: 'هل لديك مشروع في ذهنك؟ نود أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.',
      emailUs: 'راسلنا عبر البريد الإلكتروني',
      callUs: 'اتصل بنا',
      visitUs: 'زرنا',
      respondWithin24: 'سنرد خلال 24 ساعة',
      monFri: 'من الاثنين إلى الجمعة من 8 صباحًا إلى 6 مساءً بتوقيت المحيط الهادئ',
      sendMessage: 'إرسال رسالة',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      message: 'الرسالة',
      globalPresence: 'حضور عالمي، خبرة محلية',
      serveWorldwide: 'نخدم العملاء في جميع أنحاء العالم مع مكاتب في المراكز التقنية الرئيسية',
    },
  },
  es: {
    translation: {
      // Navbar
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      products: 'Productos',
      portfolio: 'Portafolio',
      contact: 'Contacto',
      getStarted: 'Comenzar',
      
      // Hero
      heroTitle: 'Transforme su negocio con',
      heroTitleHighlight: 'Soluciones IT de Nueva Generación',
      heroSubtitle: 'Empoderando empresas con desarrollo de software de vanguardia, soluciones de IA y servicios de transformación digital',
      requestDemo: 'Solicitar Demo',
      viewServices: 'Ver Servicios',
      
      // Clients
      ourClients: 'Nuestros Clientes',
      trustedByLeaders: 'Confiado por Líderes de la Industria',
      partneringWorldwide: 'Asociándonos con organizaciones en todo el mundo para brindar excelencia',
      whatClientsSay: 'Lo que dicen nuestros clientes',
      realFeedback: 'Comentarios reales de clientes reales que han transformado sus negocios con nosotros',
      clientRetentionRate: 'Tasa de Retención de Clientes',
      averageRating: 'Calificación Promedio',
      activeClients: 'Clientes Activos',
      countriesServed: 'Países Servidos',
      
      // Why Choose Us
      whyChooseUs: 'Por Qué Elegirnos',
      whyTitle: 'Por Qué las Empresas Líderes Eligen Scipy Technologies',
      whySubtitle: 'Entregamos valor excepcional a través de innovación, experiencia y compromiso',
      
      // CTA
      ctaTitle: '¿Listo para Transformar su Negocio?',
      ctaSubtitle: 'Hablemos sobre cómo nuestras soluciones pueden ayudarle a alcanzar sus objetivos',
      scheduleConsultation: 'Programar Consulta',
      
      // Footer
      aboutCompany: 'Acerca de la Empresa',
      footerDescription: 'Proveedor líder de soluciones IT especializado en desarrollo de software, IA y transformación digital.',
      quickLinks: 'Enlaces Rápidos',
      ourServices: 'Nuestros Servicios',
      getInTouch: 'Contáctenos',
      allRightsReserved: 'Todos los derechos reservados.',
      
      // Contact
      getInTouchTitle: 'Póngase en Contacto',
      letDiscuss: 'Hablemos sobre cómo podemos ayudar a transformar su negocio',
      startConversation: 'Comencemos una Conversación',
      haveProject: '¿Tiene un proyecto en mente? Nos encantaría saber de usted. Envíenos un mensaje y responderemos lo antes posible.',
      emailUs: 'Envíenos un Correo',
      callUs: 'Llámenos',
      visitUs: 'Visítenos',
      respondWithin24: 'Responderemos en 24 horas',
      monFri: 'Lun-Vie de 8am a 6pm PST',
      sendMessage: 'Enviar Mensaje',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phoneNumber: 'Número de Teléfono',
      message: 'Mensaje',
      globalPresence: 'Presencia Global, Experiencia Local',
      serveWorldwide: 'Servimos a clientes en todo el mundo con oficinas en los principales centros tecnológicos',
    },
  },
  fr: {
    translation: {
      // Navbar
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      products: 'Produits',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Commencer',
      
      // Hero
      heroTitle: 'Transformez votre entreprise avec',
      heroTitleHighlight: 'Solutions IT de Nouvelle Génération',
      heroSubtitle: "Autonomiser les entreprises avec le développement de logiciels de pointe, les solutions d'IA et les services de transformation numérique",
      requestDemo: 'Demander une Démo',
      viewServices: 'Voir les Services',
      
      // Clients
      ourClients: 'Nos Clients',
      trustedByLeaders: "Fait confiance par les leaders de l'industrie",
      partneringWorldwide: "Partenariat avec des organisations du monde entier pour offrir l'excellence",
      whatClientsSay: 'Ce que disent nos clients',
      realFeedback: 'Commentaires réels de vrais clients qui ont transformé leurs entreprises avec nous',
      clientRetentionRate: 'Taux de Rétention Client',
      averageRating: 'Note Moyenne',
      activeClients: 'Clients Actifs',
      countriesServed: 'Pays Servis',
      
      // Why Choose Us
      whyChooseUs: 'Pourquoi Nous Choisir',
      whyTitle: 'Pourquoi les Grandes Entreprises Choisissent Scipy Technologies',
      whySubtitle: "Nous offrons une valeur exceptionnelle grâce à l'innovation, l'expertise et l'engagement",
      
      // CTA
      ctaTitle: 'Prêt à Transformer Votre Entreprise?',
      ctaSubtitle: 'Discutons de la façon dont nos solutions peuvent vous aider à atteindre vos objectifs',
      scheduleConsultation: 'Planifier une Consultation',
      
      // Footer
      aboutCompany: "À propos de l'entreprise",
      footerDescription: "Fournisseur de solutions IT de premier plan spécialisé dans le développement de logiciels, l'IA et la transformation numérique.",
      quickLinks: 'Liens Rapides',
      ourServices: 'Nos Services',
      getInTouch: 'Contactez-nous',
      allRightsReserved: 'Tous droits réservés.',
      
      // Contact
      getInTouchTitle: 'Contactez-nous',
      letDiscuss: 'Discutons de la façon dont nous pouvons aider à transformer votre entreprise',
      startConversation: 'Commençons une Conversation',
      haveProject: 'Avez-vous un projet en tête? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible.',
      emailUs: 'Envoyez-nous un Email',
      callUs: 'Appelez-nous',
      visitUs: 'Visitez-nous',
      respondWithin24: 'Nous répondrons dans les 24 heures',
      monFri: 'Lun-Ven de 8h à 18h PST',
      sendMessage: 'Envoyer le Message',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phoneNumber: 'Numéro de Téléphone',
      message: 'Message',
      globalPresence: 'Présence Mondiale, Expertise Locale',
      serveWorldwide: 'Nous servons des clients dans le monde entier avec des bureaux dans les principaux centres technologiques',
    },
  },
  de: {
    translation: {
      // Navbar
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      products: 'Produkte',
      portfolio: 'Portfolio',
      contact: 'Kontakt',
      getStarted: 'Loslegen',
      
      // Hero
      heroTitle: 'Verwandeln Sie Ihr Geschäft mit',
      heroTitleHighlight: 'IT-Lösungen der nächsten Generation',
      heroSubtitle: 'Unternehmen mit modernster Softwareentwicklung, KI-Lösungen und digitalen Transformationsdiensten stärken',
      requestDemo: 'Demo Anfordern',
      viewServices: 'Dienstleistungen Ansehen',
      
      // Clients
      ourClients: 'Unsere Kunden',
      trustedByLeaders: 'Vertraut von Branchenführern',
      partneringWorldwide: 'Partnerschaft mit Organisationen weltweit, um Exzellenz zu liefern',
      whatClientsSay: 'Was unsere Kunden sagen',
      realFeedback: 'Echtes Feedback von echten Kunden, die ihr Geschäft mit uns transformiert haben',
      clientRetentionRate: 'Kundenbindungsrate',
      averageRating: 'Durchschnittsbewertung',
      activeClients: 'Aktive Kunden',
      countriesServed: 'Bediente Länder',
      
      // Why Choose Us
      whyChooseUs: 'Warum Uns Wählen',
      whyTitle: 'Warum führende Unternehmen Scipy Technologies wählen',
      whySubtitle: 'Wir liefern außergewöhnlichen Wert durch Innovation, Fachwissen und Engagement',
      
      // CTA
      ctaTitle: 'Bereit, Ihr Geschäft zu transformieren?',
      ctaSubtitle: 'Lassen Sie uns besprechen, wie unsere Lösungen Ihnen helfen können, Ihre Ziele zu erreichen',
      scheduleConsultation: 'Beratung Vereinbaren',
      
      // Footer
      aboutCompany: 'Über das Unternehmen',
      footerDescription: 'Führender IT-Lösungsanbieter, spezialisiert auf Softwareentwicklung, KI und digitale Transformation.',
      quickLinks: 'Schnelllinks',
      ourServices: 'Unsere Dienstleistungen',
      getInTouch: 'Kontaktieren Sie uns',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      
      // Contact
      getInTouchTitle: 'Kontaktieren Sie uns',
      letDiscuss: 'Lassen Sie uns besprechen, wie wir Ihr Geschäft transformieren können',
      startConversation: 'Beginnen wir ein Gespräch',
      haveProject: 'Haben Sie ein Projekt im Kopf? Wir würden gerne von Ihnen hören. Senden Sie uns eine Nachricht und wir werden so schnell wie möglich antworten.',
      emailUs: 'E-Mail an uns',
      callUs: 'Rufen Sie uns an',
      visitUs: 'Besuchen Sie uns',
      respondWithin24: 'Wir antworten innerhalb von 24 Stunden',
      monFri: 'Mo-Fr von 8 bis 18 Uhr PST',
      sendMessage: 'Nachricht Senden',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phoneNumber: 'Telefonnummer',
      message: 'Nachricht',
      globalPresence: 'Globale Präsenz, lokale Expertise',
      serveWorldwide: 'Wir bedienen Kunden weltweit mit Büros in wichtigen Technologiezentren',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
