export type Language = "de" | "fr" | "en";

export const translations = {
  de: {
    nav: {
      services: "Speisen",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "SCHNELLRESTAURANT",
    },
    hero: {
      badge: "Authentische Kebabs seit 1992",
      title1: "Köstliches",
      title2: "Kebab und Snacks",
      description: "Genießen Sie traditionelle türkische Spezialitäten in Langenthal. Frisch zubereitet, köstlich und preiswert.",
      sendEmail: "E-Mail senden",
      location: "Langenthal, Schweiz",
    },
    about: {
      label: "Über uns",
      title1: "Yildirim's SnackHouse",
      title2: "Ihre Lieblingsschnellimbiss",
      p1: "Seit 1992 servieren wir authentische türkische Kebabs und Snacks mit Leidenschaft und Qualität. Unser Team arbeitet täglich daran, Ihnen die besten Speisen zu bereiten.",
      p2: "Mit frischen Zutaten und bewährten Rezepten schaffen wir ein Geschmackserlebnis, das Sie immer wieder zurückkommen lässt.",
      stat1: "Jahre Erfahrung",
      stat2: "Zufriedene Kunden",
      stat3: "Täglich frisch",
      features: [
        { title: "Authentisch", description: "Traditionelle türkische Rezepte" },
        { title: "Frisch", description: "Täglich frisch zubereitet" },
        { title: "Schnell", description: "Schnelle und freundliche Bedienung" },
        { title: "Qualität", description: "Hochwertige Zutaten" },
      ],
    },
    services: {
      label: "Unsere Speisen",
      title: "Menü",
      description: "Wählen Sie aus unserer Auswahl an leckeren Kebabs, Döner und anderen türkischen Spezialitäten.",
      items: [
        { title: "Döner Kebab", description: "Saftiger Döner mit frischem Salat und würziger Sauce" },
        { title: "Hähnchen Kebab", description: "Gegrilltes Hähnchen mit Gemüse und Sauce" },
        { title: "Lamm Kebab", description: "Zartes Lammfleisch gegrillt mit Gewürzen" },
        { title: "Falafel", description: "Gebratene Kichererbsenpuffer, vegetarisch" },
        { title: "Pommes Frites", description: "Knusprige Pommes Frites" },
        { title: "Getränke", description: "Erfrischende Getränke zur Auswahl" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Unsere Speisen",
      description: "Sehen Sie sich unsere köstlichen Kreationen an",
    },
    hours: {
      label: "Öffnungszeiten",
      title: "Wann sind wir offen?",
      header: "Öffnungszeiten",
      today: "Heute",
      closed: "Geschlossen",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Kontaktieren Sie",
      title2: "uns heute",
      description: "Haben Sie Fragen? Wir freuen uns, von Ihnen zu hören!",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      cta: "Jetzt anrufen",
      callNow: "Jetzt anrufen",
    },
    footer: {
      tagline: "Schnellrestaurant",
      description: "Authentische türkische Küche seit 1992",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist eine Vorschau",
        "Sie ist nicht in Google indexiert",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Verstanden",
    },
  },
  fr: {
    nav: {
      services: "Plats",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "SNACK-BAR",
    },
    hero: {
      badge: "Kebabs authentiques depuis 1992",
      title1: "Délicieux",
      title2: "Kebabs et Snacks",
      description: "Savourez les spécialités turques traditionnelles à Langenthal. Frais, délicieux et abordables.",
      sendEmail: "Envoyer un email",
      location: "Langenthal, Suisse",
    },
    about: {
      label: "À propos",
      title1: "Yildirim's SnackHouse",
      title2: "Votre snack-bar préféré",
      p1: "Depuis 1992, nous servons des kebabs turcs authentiques et des snacks avec passion et qualité. Notre équipe travaille quotidiennement pour vous préparer les meilleurs plats.",
      p2: "Avec des ingrédients frais et des recettes éprouvées, nous créons une expérience culinaire qui vous ramènera toujours.",
      stat1: "Années d'expérience",
      stat2: "Clients satisfaits",
      stat3: "Frais quotidiennement",
      features: [
        { title: "Authentique", description: "Recettes turques traditionnelles" },
        { title: "Frais", description: "Préparé frais quotidiennement" },
        { title: "Rapide", description: "Service rapide et amical" },
        { title: "Qualité", description: "Ingrédients de haute qualité" },
      ],
    },
    services: {
      label: "Nos plats",
      title: "Menu",
      description: "Choisissez parmi notre sélection de délicieux kebabs, doners et autres spécialités turques.",
      items: [
        { title: "Döner Kebab", description: "Délicieux döner avec salade fraîche et sauce épicée" },
        { title: "Kebab Poulet", description: "Poulet grillé avec légumes et sauce" },
        { title: "Kebab Agneau", description: "Tendre agneau grillé avec épices" },
        { title: "Falafels", description: "Galettes de pois chiches frites, végétarien" },
        { title: "Frites", description: "Délicieuses frites croustillantes" },
        { title: "Boissons", description: "Boissons rafraîchissantes au choix" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Nos créations",
      description: "Découvrez nos délicieuses créations",
    },
    hours: {
      label: "Horaires",
      title: "Quand sommes-nous ouverts?",
      header: "Horaires d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Contactez",
      title2: "nous aujourd'hui",
      description: "Des questions? Nous serions heureux de vous entendre!",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Appelez maintenant",
      callNow: "Appelez maintenant",
    },
    footer: {
      tagline: "Snack-bar",
      description: "Cuisine turque authentique depuis 1992",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      services: "Menu",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "SNACK BAR",
    },
    hero: {
      badge: "Authentic kebabs since 1992",
      title1: "Delicious",
      title2: "Kebabs and Snacks",
      description: "Enjoy traditional Turkish specialties in Langenthal. Fresh, delicious and affordable.",
      sendEmail: "Send Email",
      location: "Langenthal, Switzerland",
    },
    about: {
      label: "About",
      title1: "Yildirim's SnackHouse",
      title2: "Your favorite snack bar",
      p1: "Since 1992, we have been serving authentic Turkish kebabs and snacks with passion and quality. Our team works daily to prepare the best dishes for you.",
      p2: "With fresh ingredients and proven recipes, we create a culinary experience that will keep you coming back.",
      stat1: "Years of Experience",
      stat2: "Happy Customers",
      stat3: "Fresh Daily",
      features: [
        { title: "Authentic", description: "Traditional Turkish recipes" },
        { title: "Fresh", description: "Prepared fresh daily" },
        { title: "Quick", description: "Fast and friendly service" },
        { title: "Quality", description: "High-quality ingredients" },
      ],
    },
    services: {
      label: "Our Dishes",
      title: "Menu",
      description: "Choose from our selection of delicious kebabs, doners and other Turkish specialties.",
      items: [
        { title: "Döner Kebab", description: "Juicy döner with fresh salad and spicy sauce" },
        { title: "Chicken Kebab", description: "Grilled chicken with vegetables and sauce" },
        { title: "Lamb Kebab", description: "Tender lamb grilled with spices" },
        { title: "Falafel", description: "Fried chickpea fritters, vegetarian" },
        { title: "French Fries", description: "Crispy French fries" },
        { title: "Drinks", description: "Refreshing drinks to choose from" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our Dishes",
      description: "See our delicious creations",
    },
    hours: {
      label: "Hours",
      title: "When are we open?",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Contact",
      title2: "us today",
      description: "Questions? We'd love to hear from you!",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Call Now",
      callNow: "Call Now",
    },
    footer: {
      tagline: "Snack Bar",
      description: "Authentic Turkish cuisine since 1992",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "Got it",
    },
  },
};

export interface Translations {
  nav: {
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
