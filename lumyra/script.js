"use strict";

/* 01. CONFIGURATION MODIFIABLE
   Le numéro international est une chaîne de chiffres explicitement fournie.
   Ne pas déduire son indicatif de la monnaie ou du numéro local.
   Synchroniser index.html pour conserver une version statique cohérente. */
const CONFIG = {
  "studioName": "Lumyra",
  "whatsappLocal": "687 170 728",
  "whatsappInternational": "237687170728",
  "email": "proByLumyra@Lumyra.cm",
  "address": {
    "fr": "Douala, Cameroun",
    "en": "Douala, Cameroon"
  },
  "hours": {
    "fr": "09h00-19h00",
    "en": "09:00–19:00"
  },
  "travel": {
    "fr": "Douala, Yaoundé (aux frais du client)",
    "en": "Douala, Yaoundé (at the client’s expense)"
  },
  "defaultLanguage": "fr",
  "messageMaxLength": 1500,
  "packages": [
    {
      "id": "express",
      "price": 3000,
      "names": {
        "fr": "Photo express",
        "en": "Express photo"
      }
    },
    {
      "id": "shooting",
      "price": 15000,
      "names": {
        "fr": "Shooting",
        "en": "Photo session"
      }
    },
    {
      "id": "essential",
      "price": 30000,
      "names": {
        "fr": "Essentiel",
        "en": "Essential"
      }
    },
    {
      "id": "prestige",
      "price": 60000,
      "names": {
        "fr": "Prestige",
        "en": "Prestige"
      }
    },
    {
      "id": "signature",
      "price": 120000,
      "names": {
        "fr": "Signature",
        "en": "Signature"
      }
    }
  ],
  "services": [
    {
      "id": "wedding",
      "names": {
        "fr": "Mariage",
        "en": "Wedding"
      }
    },
    {
      "id": "portrait",
      "names": {
        "fr": "Portrait",
        "en": "Portrait"
      }
    },
    {
      "id": "fashion",
      "names": {
        "fr": "Mode",
        "en": "Fashion"
      }
    },
    {
      "id": "event",
      "names": {
        "fr": "Événementiel",
        "en": "Events"
      }
    },
    {
      "id": "product",
      "names": {
        "fr": "Produit",
        "en": "Product"
      }
    },
    {
      "id": "shooting",
      "names": {
        "fr": "Shooting",
        "en": "Photo session"
      }
    },
    {
      "id": "simple",
      "names": {
        "fr": "Photos simples",
        "en": "Simple photos"
      }
    }
  ]
};

/* 02. TRADUCTIONS — conserver les mêmes clés dans chaque langue. */
const TRANSLATIONS = {
  "fr": {
    "cat.wedding": "Mariage",
    "cat.portrait": "Portrait",
    "cat.fashion": "Mode",
    "cat.event": "Événementiel",
    "cat.product": "Produit",
    "cat.shooting": "Shooting",
    "cat.simple": "Photos simples",
    "pack.express": "Photo express",
    "pack.shooting": "Shooting",
    "pack.essential": "Essentiel",
    "pack.prestige": "Prestige",
    "pack.signature": "Signature",
    "pack.other": "Autre demande",
    "cat.other": "Autre",
    "skip": "Aller au contenu",
    "top.left": "DOUALA · YAOUNDÉ",
    "top.center": "LA LUMIÈRE DE VOS PLUS BEAUX MOMENTS",
    "top.right": "SUR RENDEZ-VOUS",
    "logo.sub": "STUDIO PHOTOGRAPHIQUE",
    "menu": "Menu",
    "nav.accueil": "Accueil",
    "nav.studio": "Studio",
    "nav.portfolio": "Portfolio",
    "nav.tarifs": "Tarifs",
    "nav.avis": "Avis",
    "nav.contact": "Contact",
    "nav.mentions": "Mentions légales",
    "lang": "Langue",
    "theme": "Thème",
    "theme.auto": "Auto",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "hero.kicker": "LUMYRA · STUDIO PHOTO À DOUALA",
    "hero.title1": "Révélez la beauté",
    "hero.title2": "de vos instants.",
    "hero.slogan": "Lumyra, la lumière de vos plus beaux moments.",
    "hero.body": "Un regard, une émotion, une lumière. Imaginons ensemble les images que vous aimerez retrouver.",
    "hero.cta1": "Découvrir le portfolio",
    "hero.cta2": "Réserver une séance",
    "hero.note1": "Échange & préparation",
    "hero.note2": "Sept univers photo",
    "hero.note3": "Douala & Yaoundé",
    "hero.demo": "Étude de lumière · Illustration de démonstration",
    "portfolio.kicker": "NOS UNIVERS PHOTOGRAPHIQUES",
    "all": "Tout",
    "portfolio.title": "Les instants en lumière",
    "portfolio.demo": "Visuels de démonstration — à remplacer par les photographies de Lumyra",
    "visual.wedding.0": "Deux anneaux, une histoire",
    "visual.wedding.0.alt": "Illustration de démonstration : Deux anneaux, une histoire, catégorie Mariage.",
    "visual.demo": "ILLUSTRATION",
    "visual.wedding.1": "Sous la même arche",
    "visual.wedding.1.alt": "Illustration de démonstration : Sous la même arche, catégorie Mariage.",
    "visual.portrait.0": "Présence de lumière",
    "visual.portrait.0.alt": "Illustration de démonstration : Présence de lumière, catégorie Portrait.",
    "visual.portrait.1": "L’élégance d’un regard",
    "visual.portrait.1.alt": "Illustration de démonstration : L’élégance d’un regard, catégorie Portrait.",
    "visual.fashion.0": "Ligne & mouvement",
    "visual.fashion.0.alt": "Illustration de démonstration : Ligne & mouvement, catégorie Mode.",
    "visual.fashion.1": "La silhouette libre",
    "visual.fashion.1.alt": "Illustration de démonstration : La silhouette libre, catégorie Mode.",
    "visual.event.0": "La table des instants",
    "visual.event.0.alt": "Illustration de démonstration : La table des instants, catégorie Événementiel.",
    "visual.event.1": "Lumières de fête",
    "visual.event.1.alt": "Illustration de démonstration : Lumières de fête, catégorie Événementiel.",
    "visual.product.0": "L’objet essentiel",
    "visual.product.0.alt": "Illustration de démonstration : L’objet essentiel, catégorie Produit.",
    "visual.product.1": "Matière dorée",
    "visual.product.1.alt": "Illustration de démonstration : Matière dorée, catégorie Produit.",
    "visual.shooting.0": "Une pause, une présence",
    "visual.shooting.0.alt": "Illustration de démonstration : Une pause, une présence, catégorie Shooting.",
    "visual.shooting.1": "Dans le cadre",
    "visual.shooting.1.alt": "Illustration de démonstration : Dans le cadre, catégorie Shooting.",
    "visual.simple.0": "Horizon calme",
    "visual.simple.0.alt": "Illustration de démonstration : Horizon calme, catégorie Photos simples.",
    "visual.simple.1": "Simplement, un instant",
    "visual.simple.1.alt": "Illustration de démonstration : Simplement, un instant, catégorie Photos simples.",
    "studio.kicker": "L’EXPÉRIENCE LUMYRA",
    "studio.title": "L’art de raconter ce qui compte.",
    "studio.body": "Lumyra est un studio de photographie à Douala. Notre approche : écouter votre idée, préparer la prise de vue et construire ensemble une intention autour de la lumière, de la composition et de votre personnalité.",
    "experience.0.title": "RESSENTIR",
    "experience.0.body": "Lumières & atmosphères",
    "experience.1.title": "RÉVÉLER",
    "experience.1.body": "Portraits & personnalités",
    "experience.2.title": "VALORISER",
    "experience.2.body": "Objets & détails",
    "experience.3.title": "EXPRIMER",
    "experience.3.body": "Lignes & mouvement",
    "banner.kicker": "UN PROJET, UNE RENCONTRE",
    "banner.title": "Vos souvenirs méritent leur lumière.",
    "banner.body": "Mariage, portrait, mode, événementiel, produit, shooting et photos simples : parlons de votre envie.",
    "banner.cta": "Parlons de votre projet",
    "steps.title": "Votre séance, étape par étape",
    "step.1": "Prise de contact",
    "step.2": "Choix de la prestation",
    "step.3": "Préparation",
    "step.4": "Séance photo",
    "step.5": "Remise selon les conditions convenues",
    "studio.custom": "À préciser avec Lumyra : équipe, contenu des prestations, lieu, préparation et modalités de livraison. Les déplacements à Yaoundé sont aux frais du client.",
    "pricing.kicker": "CHOISISSEZ VOTRE POINT DE DÉPART",
    "pricing.title": "À chaque projet, sa formule.",
    "pricing.notice": "Tarifs de démonstration, à confirmer pour un usage commercial.",
    "pack.desc.express": "Pour commencer par une demande simple.",
    "pack.includes": "Prestations incluses",
    "pack.tbd": "Contenu du pack à préciser avec Lumyra",
    "pack.book": "Réserver ce pack",
    "pack.desc.shooting": "Une séance autour de votre idée.",
    "pack.desc.essential": "Un cadre pour votre projet photo.",
    "pack.desc.prestige": "Une proposition pour voir plus grand.",
    "pack.desc.signature": "Le point de départ d’une création sur mesure.",
    "reviews.kicker": "QUELQUES MOTS, POUR ILLUSTRER",
    "reviews.title": "Ce que pourrait raconter une séance.",
    "reviews.notice": "Témoignages fictifs de démonstration",
    "review.1": "Un échange attentif pour imaginer un portrait qui me ressemble.",
    "review.label.1": "Exemple fictif 1 · Aucune identité réelle",
    "review.2": "Une préparation claire pour réfléchir aux images de notre événement.",
    "review.label.2": "Exemple fictif 2 · Aucune identité réelle",
    "review.3": "Une approche créative pour mettre en lumière les détails de mes produits.",
    "review.label.3": "Exemple fictif 3 · Aucune identité réelle",
    "contact.kicker": "ET SI TOUT COMMENÇAIT ICI ?",
    "contact.title": "Offrez une lumière à votre idée.",
    "contact.intro": "Préparez votre demande, puis choisissez WhatsApp ou e-mail. Vous gardez la main sur l’envoi.",
    "contact.details": "Rencontrons-nous",
    "contact.address": "Adresse",
    "contact.hours": "Horaires",
    "contact.travel": "Déplacements",
    "contact.noauto": "Aucun message n’est envoyé automatiquement par ce site.",
    "form.title": "Votre demande de séance",
    "form.required": "* Champs obligatoires",
    "field.full-name": "Nom complet *",
    "field.phone": "Téléphone ou WhatsApp *",
    "field.email": "E-mail (facultatif)",
    "form.choose": "Choisir…",
    "field.pack": "Pack souhaité *",
    "field.service": "Type de prestation *",
    "field.date": "Date souhaitée (facultative)",
    "field.location": "Lieu de la séance (facultatif)",
    "field.message": "Précisions (facultatives, 1 500 caractères maximum)",
    "summary.title": "Récapitulatif de la demande",
    "form.disclaimer": "Votre demande ne constitue pas une réservation confirmée. Lumyra vous contactera pour confirmer la disponibilité, le tarif et les modalités.",
    "form.whatsapp": "Préparer ma demande sur WhatsApp",
    "form.email": "Préparer ma demande par e-mail",
    "form.explain": "WhatsApp : envoyez ensuite le message dans WhatsApp. E-mail : votre application de messagerie configurée s’ouvre et vous devez confirmer l’envoi. Le site statique n’envoie aucun e-mail automatiquement.",
    "form.copy": "Copier ma demande",
    "form.copyfallback": "Si la copie automatique échoue, sélectionnez et copiez ce texte.",
    "legal.kicker": "INFORMATIONS & TRANSPARENCE",
    "legal.title": "Mentions légales — site de démonstration",
    "legal.editor.title": "Éditeur et publication",
    "legal.editor.body": "Identité ou raison sociale : à compléter. Forme juridique, si applicable : à compléter. Responsable de publication : à compléter. Registre du commerce et numéro de contribuable, si applicables : à compléter.",
    "legal.hosting.title": "Hébergement",
    "legal.hosting.body": "Identité et coordonnées de l’hébergeur : à compléter avant publication. Le fonctionnement local de ce projet ne désigne aucun hébergeur commercial.",
    "legal.rights.title": "Droits sur les photographies et contenus",
    "legal.rights.body": "Les illustrations SVG sont des visuels de démonstration, pas de véritables réalisations du studio. Titulaires des droits, autorisations de diffusion et conditions de réutilisation des photographies et contenus : à compléter et vérifier avant publication.",
    "legal.data.title": "Données saisies et transmission",
    "legal.data.body": "Les données saisies restent dans la mémoire de la page pendant son utilisation. Ce code ne les enregistre ni dans localStorage, ni dans des cookies et ne les ajoute pas à l’URL de cette page. Une action explicite sur WhatsApp ou e-mail prépare leur transfert par un lien externe contenant le récapitulatif encodé. Le navigateur, l’appareil et le service externe peuvent alors les traiter selon leurs propres règles. La copie utilise le presse-papiers uniquement à votre demande.",
    "legal.privacy.title": "Confidentialité et services externes",
    "legal.privacy.body": "Ce code n’installe ni traceur publicitaire ni outil d’analyse. Aucun service externe ne traite le formulaire dans le site. Les plateformes externes ouvertes volontairement appliquent leurs propres conditions. Traitement après réception, durée de conservation, droits et contact dédié : à définir avec Lumyra avant publication.",
    "legal.demo.title": "Projet pédagogique et informations commerciales",
    "legal.demo.body": "Démonstration pédagogique pour un TP de programmation web et d’e-commerce. Les témoignages sont fictifs, les illustrations ne sont pas des photographies du studio et les informations commerciales restent à compléter ou confirmer. Ce modèle doit être adapté au pays d’exploitation et validé avant toute mise en ligne commerciale. Il ne garantit aucune conformité juridique.",
    "legal.contact": "Adresse et contact fournis",
    "legal.address": "Adresse postale complète : à compléter. Coordonnées à confirmer pour un usage commercial.",
    "footer.slogan": "La lumière de vos plus beaux moments.",
    "footer.explore": "Explorer",
    "footer.project": "Votre projet",
    "footer.noteTitle": "En toute transparence",
    "footer.note": "Site de démonstration pédagogique. Aucun paiement ni réservation confirmée en ligne.",
    "footer.demo": "Lumyra · Douala, Cameroun · Démonstration",
    "footer.top": "Retour en haut",
    "lightbox.close": "Fermer",
    "lightbox.prev": "Précédent",
    "lightbox.next": "Suivant",
    "lightbox.demo": "Illustration de démonstration — pas une réalisation du studio",
    "page.title": "Lumyra — La lumière de vos plus beaux moments",
    "aria.home": "Lumyra — Accueil",
    "aria.nav": "Navigation principale",
    "aria.filters": "Filtrer le portfolio",
    "results": "{count} visuel(s)",
    "config.phone": "Téléphone à renseigner",
    "config.email": "E-mail non renseigné",
    "config.address": "Adresse à compléter",
    "config.hours": "Horaires à compléter",
    "config.travel": "Déplacements à préciser",
    "config.waerror": "WhatsApp indisponible : le numéro international n’est pas configuré correctement. Le numéro local reste disponible : {phone}.",
    "config.mailerror": "Action e-mail indisponible : aucune adresse valide n’est configurée. Utilisez WhatsApp si disponible ou le numéro affiché.",
    "msg.hello": "Bonjour {studio},",
    "msg.intro": "Je souhaite faire une demande de réservation.",
    "msg.name": "Nom",
    "msg.phone": "Téléphone",
    "msg.email": "E-mail",
    "msg.pack": "Pack souhaité",
    "msg.price": "Tarif affiché",
    "msg.service": "Type de prestation",
    "msg.date": "Date souhaitée",
    "msg.location": "Lieu",
    "msg.details": "Précisions",
    "msg.empty": "Non précisé",
    "msg.choose": "À choisir",
    "msg.priceunknown": "Tarif à définir",
    "msg.thanks": "Merci de me confirmer vos disponibilités et les conditions de réservation.",
    "mail.subject": "Demande de réservation — {pack} — {name}",
    "error.required": "Veuillez renseigner ce champ. Les espaces seuls ne suffisent pas.",
    "error.email": "Veuillez indiquer une adresse e-mail valide.",
    "error.phone": "Utilisez 6 à 18 chiffres, avec espaces, +, points, tirets, / ou parenthèses si nécessaire.",
    "error.choice": "Veuillez choisir une option proposée.",
    "error.date": "Choisissez une date valide, à partir du jour local actuel.",
    "error.length": "Longueur maximale : {max} caractères.",
    "error.invalid": "Veuillez vérifier ce champ.",
    "status.invalid": "Corrigez les champs indiqués avant de préparer la demande.",
    "status.selection": "Pack sélectionné : {pack} — {price}. Complétez les champs puis choisissez un canal.",
    "status.whatsapp": "Ouverture de WhatsApp demandée. Vous devez encore envoyer le message dans WhatsApp. Si rien ne s’ouvre, vérifiez les fenêtres bloquées ou copiez la demande.",
    "status.email": "Ouverture de votre application e-mail demandée. Vérifiez le destinataire et confirmez l’envoi dans l’application. Si elle ne s’ouvre pas, copiez la demande.",
    "status.copy": "Demande copiée. Aucun message n’a été envoyé.",
    "status.fallback": "Copie automatique indisponible : le texte est sélectionné ci-dessous. Utilisez la commande Copier de votre appareil.",
    "status.channel": "Choisissez explicitement le bouton WhatsApp ou e-mail pour préparer la demande."
  },
  "en": {
    "cat.wedding": "Wedding",
    "cat.portrait": "Portrait",
    "cat.fashion": "Fashion",
    "cat.event": "Events",
    "cat.product": "Product",
    "cat.shooting": "Photo session",
    "cat.simple": "Simple photos",
    "pack.express": "Express photo",
    "pack.shooting": "Photo session",
    "pack.essential": "Essential",
    "pack.prestige": "Prestige",
    "pack.signature": "Signature",
    "pack.other": "Other request",
    "cat.other": "Other",
    "skip": "Skip to content",
    "top.left": "DOUALA · YAOUNDÉ",
    "top.center": "THE LIGHT OF YOUR MOST BEAUTIFUL MOMENTS",
    "top.right": "BY APPOINTMENT",
    "logo.sub": "PHOTOGRAPHY STUDIO",
    "menu": "Menu",
    "nav.accueil": "Home",
    "nav.studio": "Studio",
    "nav.portfolio": "Portfolio",
    "nav.tarifs": "Pricing",
    "nav.avis": "Reviews",
    "nav.contact": "Contact",
    "nav.mentions": "Legal notice",
    "lang": "Language",
    "theme": "Theme",
    "theme.auto": "Auto",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "hero.kicker": "LUMYRA · PHOTO STUDIO IN DOUALA",
    "hero.title1": "Reveal the beauty",
    "hero.title2": "of your moments.",
    "hero.slogan": "Lumyra, the light of your most beautiful moments.",
    "hero.body": "A glance, an emotion, a light. Let’s imagine the images you will love returning to.",
    "hero.cta1": "Explore the portfolio",
    "hero.cta2": "Request a session",
    "hero.note1": "Discussion & preparation",
    "hero.note2": "Seven photography worlds",
    "hero.note3": "Douala & Yaoundé",
    "hero.demo": "Study of light · Demonstration illustration",
    "portfolio.kicker": "OUR PHOTOGRAPHY WORLDS",
    "all": "All",
    "portfolio.title": "Moments in the light",
    "portfolio.demo": "Demonstration visuals — to be replaced with Lumyra photographs",
    "visual.wedding.0": "Two rings, one story",
    "visual.wedding.0.alt": "Demonstration illustration: Two rings, one story, Wedding category.",
    "visual.demo": "ILLUSTRATION",
    "visual.wedding.1": "Under the same arch",
    "visual.wedding.1.alt": "Demonstration illustration: Under the same arch, Wedding category.",
    "visual.portrait.0": "Presence of light",
    "visual.portrait.0.alt": "Demonstration illustration: Presence of light, Portrait category.",
    "visual.portrait.1": "The elegance of a glance",
    "visual.portrait.1.alt": "Demonstration illustration: The elegance of a glance, Portrait category.",
    "visual.fashion.0": "Line & movement",
    "visual.fashion.0.alt": "Demonstration illustration: Line & movement, Fashion category.",
    "visual.fashion.1": "The free silhouette",
    "visual.fashion.1.alt": "Demonstration illustration: The free silhouette, Fashion category.",
    "visual.event.0": "A table of moments",
    "visual.event.0.alt": "Demonstration illustration: A table of moments, Events category.",
    "visual.event.1": "Celebration lights",
    "visual.event.1.alt": "Demonstration illustration: Celebration lights, Events category.",
    "visual.product.0": "The essential object",
    "visual.product.0.alt": "Demonstration illustration: The essential object, Product category.",
    "visual.product.1": "Golden material",
    "visual.product.1.alt": "Demonstration illustration: Golden material, Product category.",
    "visual.shooting.0": "A pause, a presence",
    "visual.shooting.0.alt": "Demonstration illustration: A pause, a presence, Photo session category.",
    "visual.shooting.1": "Inside the frame",
    "visual.shooting.1.alt": "Demonstration illustration: Inside the frame, Photo session category.",
    "visual.simple.0": "Quiet horizon",
    "visual.simple.0.alt": "Demonstration illustration: Quiet horizon, Simple photos category.",
    "visual.simple.1": "Simply, a moment",
    "visual.simple.1.alt": "Demonstration illustration: Simply, a moment, Simple photos category.",
    "studio.kicker": "THE LUMYRA EXPERIENCE",
    "studio.title": "The art of telling what matters.",
    "studio.body": "Lumyra is a photography studio in Douala. Our approach: listen to your idea, prepare the session and shape a vision together through light, composition and your personality.",
    "experience.0.title": "FEEL",
    "experience.0.body": "Light & atmosphere",
    "experience.1.title": "REVEAL",
    "experience.1.body": "Portraits & personalities",
    "experience.2.title": "HIGHLIGHT",
    "experience.2.body": "Objects & details",
    "experience.3.title": "EXPRESS",
    "experience.3.body": "Lines & movement",
    "banner.kicker": "A PROJECT, A CONVERSATION",
    "banner.title": "Your memories deserve their light.",
    "banner.body": "Wedding, portrait, fashion, events, product, photo sessions and simple photos: let’s talk about your idea.",
    "banner.cta": "Let’s discuss your project",
    "steps.title": "Your session, step by step",
    "step.1": "Get in touch",
    "step.2": "Choose a service",
    "step.3": "Prepare together",
    "step.4": "Photo session",
    "step.5": "Delivery under the agreed terms",
    "studio.custom": "To agree with Lumyra: team, service details, location, preparation and delivery arrangements. Travel to Yaoundé is at the client’s expense.",
    "pricing.kicker": "CHOOSE YOUR STARTING POINT",
    "pricing.title": "An option for every project.",
    "pricing.notice": "Demonstration prices, to be confirmed for commercial use.",
    "pack.desc.express": "A starting point for a simple request.",
    "pack.includes": "Included services",
    "pack.tbd": "Package details to be agreed with Lumyra",
    "pack.book": "Request this package",
    "pack.desc.shooting": "A session built around your idea.",
    "pack.desc.essential": "A framework for your photo project.",
    "pack.desc.prestige": "An option for a more ambitious project.",
    "pack.desc.signature": "The starting point for a bespoke creation.",
    "reviews.kicker": "A FEW WORDS, TO ILLUSTRATE",
    "reviews.title": "What a session might feel like.",
    "reviews.notice": "Fictional demonstration testimonials",
    "review.1": "An attentive conversation to imagine a portrait that feels like me.",
    "review.label.1": "Fictional example 1 · No real identity",
    "review.2": "Clear preparation to plan the images of our event.",
    "review.label.2": "Fictional example 2 · No real identity",
    "review.3": "A creative approach to highlight the details of my products.",
    "review.label.3": "Fictional example 3 · No real identity",
    "contact.kicker": "WHAT IF IT ALL STARTED HERE?",
    "contact.title": "Bring your idea into the light.",
    "contact.intro": "Prepare your request, then choose WhatsApp or email. You remain in control of sending.",
    "contact.details": "Let’s connect",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.travel": "Travel",
    "contact.noauto": "This website never sends a message automatically.",
    "form.title": "Your session request",
    "form.required": "* Required fields",
    "field.full-name": "Full name *",
    "field.phone": "Phone or WhatsApp *",
    "field.email": "Email (optional)",
    "form.choose": "Choose…",
    "field.pack": "Preferred package *",
    "field.service": "Service type *",
    "field.date": "Preferred date (optional)",
    "field.location": "Session location (optional)",
    "field.message": "Details (optional, up to 1,500 characters)",
    "summary.title": "Request summary",
    "form.disclaimer": "Your request is not a confirmed booking. Lumyra will contact you to confirm availability, pricing and arrangements.",
    "form.whatsapp": "Prepare my request on WhatsApp",
    "form.email": "Prepare my request by email",
    "form.explain": "WhatsApp: you still need to send the message there. Email: your configured email app opens and you must confirm sending. This static website never sends emails automatically.",
    "form.copy": "Copy my request",
    "form.copyfallback": "If automatic copying fails, select and copy this text.",
    "legal.kicker": "INFORMATION & TRANSPARENCY",
    "legal.title": "Legal notice — demonstration website",
    "legal.editor.title": "Publisher and publication",
    "legal.editor.body": "Identity or company name: to be completed. Legal form, if applicable: to be completed. Publication director: to be completed. Trade register and taxpayer number, if applicable: to be completed.",
    "legal.hosting.title": "Hosting",
    "legal.hosting.body": "Host identity and contact details: to be completed before publication. Local operation of this project does not designate a commercial hosting provider.",
    "legal.rights.title": "Rights to photographs and content",
    "legal.rights.body": "The SVG illustrations are demonstration visuals, not actual studio work. Rights holders, publication permissions and conditions for reuse of photographs and content: to be completed and checked before publication.",
    "legal.data.title": "Entered data and transmission",
    "legal.data.body": "Entered data remains in page memory during use. This code does not store it in localStorage or cookies or add it to this page’s URL. An explicit WhatsApp or email action prepares its transfer through an external link containing the encoded summary. The browser, device and external service may then process it according to their own rules. Copying uses the clipboard only at your request.",
    "legal.privacy.title": "Privacy and external services",
    "legal.privacy.body": "This code installs no advertising trackers or analytics tools. No external service processes the form within the site. External platforms opened voluntarily apply their own terms. Handling after receipt, retention period, rights and dedicated contact: to be defined with Lumyra before publication.",
    "legal.demo.title": "Educational project and commercial information",
    "legal.demo.body": "Educational demonstration for a web programming and e-commerce assignment. Testimonials are fictional, illustrations are not studio photographs and commercial information remains to be completed or confirmed. This template must be adapted to the country of operation and reviewed before commercial publication. It does not guarantee legal compliance.",
    "legal.contact": "Provided address and contact",
    "legal.address": "Full postal address: to be completed. Contact details to be confirmed for commercial use.",
    "footer.slogan": "The light of your most beautiful moments.",
    "footer.explore": "Explore",
    "footer.project": "Your project",
    "footer.noteTitle": "In full transparency",
    "footer.note": "Educational demonstration website. No online payments or confirmed bookings.",
    "footer.demo": "Lumyra · Douala, Cameroon · Demonstration",
    "footer.top": "Back to top",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous",
    "lightbox.next": "Next",
    "lightbox.demo": "Demonstration illustration — not studio work",
    "page.title": "Lumyra — The light of your most beautiful moments",
    "aria.home": "Lumyra — Home",
    "aria.nav": "Main navigation",
    "aria.filters": "Filter portfolio",
    "results": "{count} visual(s)",
    "config.phone": "Phone to be provided",
    "config.email": "Email not provided",
    "config.address": "Address to be completed",
    "config.hours": "Hours to be completed",
    "config.travel": "Travel to be agreed",
    "config.waerror": "WhatsApp unavailable: the international number is not configured correctly. The local phone number remains available: {phone}.",
    "config.mailerror": "Email action unavailable: no valid address is configured. Use WhatsApp if available or the displayed phone number.",
    "msg.hello": "Hello {studio},",
    "msg.intro": "I would like to make a booking request.",
    "msg.name": "Name",
    "msg.phone": "Phone",
    "msg.email": "Email",
    "msg.pack": "Preferred package",
    "msg.price": "Displayed price",
    "msg.service": "Service type",
    "msg.date": "Preferred date",
    "msg.location": "Location",
    "msg.details": "Details",
    "msg.empty": "Not specified",
    "msg.choose": "To be selected",
    "msg.priceunknown": "Price to be agreed",
    "msg.thanks": "Please confirm your availability and booking conditions.",
    "mail.subject": "Booking request — {pack} — {name}",
    "error.required": "Please fill in this field. Spaces alone are not enough.",
    "error.email": "Please enter a valid email address.",
    "error.phone": "Use 6 to 18 digits, with spaces, +, dots, dashes, / or parentheses if needed.",
    "error.choice": "Please choose an available option.",
    "error.date": "Choose a valid date on or after today in your local time.",
    "error.length": "Maximum length: {max} characters.",
    "error.invalid": "Please check this field.",
    "status.invalid": "Correct the indicated fields before preparing your request.",
    "status.selection": "Selected package: {pack} — {price}. Complete the fields, then choose a channel.",
    "status.whatsapp": "WhatsApp opening requested. You still need to send the message there. If nothing opens, check blocked pop-ups or copy the request.",
    "status.email": "Your email app has been requested. Check the recipient and confirm sending in the app. If it does not open, copy the request.",
    "status.copy": "Request copied. No message has been sent.",
    "status.fallback": "Automatic copying unavailable: the text is selected below. Use your device’s Copy command.",
    "status.channel": "Explicitly choose the WhatsApp or email button to prepare your request."
  }
};

/* 03. DOM et état temporaire — aucune persistance des saisies. */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
const form = $("#booking-form");
const fields = $$(".field input, .field select, .field textarea", form);
const cards = $$(".portfolio-card");
const dialog = $("#lightbox");
const navigation = $("#navigation");
const menuButton = $("#menu-toggle");
const mobileMedia = matchMedia("(max-width: 950px)");
const packages = new Map(CONFIG.packages.map(item => [item.id, item]));
const services = new Map(CONFIG.services.map(item => [item.id, item]));
let language = Object.hasOwn(TRANSLATIONS, CONFIG.defaultLanguage) ? CONFIG.defaultLanguage : "fr";
let currentFilter = "all";
let currentVisual = 0;
let originButton = null;
let pointerStartedOutside = false;
let statusKey = "";
let selectedFromCard = false;

function translate(key, variables = {}) {
  let text = TRANSLATIONS[language]?.[key] ?? TRANSLATIONS.fr[key] ?? key;
  text = text.replaceAll("Lumyra", CONFIG.studioName);
  for (const [name, value] of Object.entries(variables)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}
function localized(value, fallbackKey) {
  if (typeof value === "string") return value.trim() || translate(fallbackKey);
  return value?.[language]?.trim() || value?.fr?.trim() || translate(fallbackKey);
}
function packageName(id) {
  return id === "other" ? translate("pack.other") : localized(packages.get(id)?.names, "msg.choose");
}
function serviceName(id) {
  return id === "other" ? translate("cat.other") : localized(services.get(id)?.names, "msg.choose");
}
function numberFormat(value) {
  return new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-GB").format(value);
}
function priceLabel(id) {
  return packages.has(id) ? `${numberFormat(packages.get(id).price)} FCFA` : translate("msg.priceunknown");
}
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function whatsappConfigured() {
  return typeof CONFIG.whatsappInternational === "string" && /^[1-9]\d{7,14}$/.test(CONFIG.whatsappInternational);
}
function emailConfigured() {
  return typeof CONFIG.email === "string" && validEmail(CONFIG.email.trim()) && !/[\r\n]/.test(CONFIG.email);
}
function emailDestination() {
  return encodeURIComponent(CONFIG.email.trim()).replace("%40", "@");
}
function todayLocal() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
function setStatus(key) {
  statusKey = key;
  $("#action-status").textContent = key ? translate(key) : "";
}

/* 04. Coordonnées, langue et valeurs configurées. */
function renderContact() {
  const phone = String(CONFIG.whatsappLocal || "").trim() || translate("config.phone");
  $("#studio-phone").textContent = phone;
  $("#studio-email").replaceChildren();
  if (emailConfigured()) {
    const link = document.createElement("a");
    link.href = `mailto:${emailDestination()}`;
    link.textContent = CONFIG.email.trim();
    $("#studio-email").append(link);
  } else {
    $("#studio-email").textContent = translate("config.email");
  }
  $("#studio-address").textContent = localized(CONFIG.address, "config.address");
  $("#studio-hours").textContent = localized(CONFIG.hours, "config.hours");
  $("#studio-travel").textContent = localized(CONFIG.travel, "config.travel");
  $("#whatsapp-action").disabled = !whatsappConfigured();
  $("#email-action").disabled = !emailConfigured();
  $("#whatsapp-config").hidden = whatsappConfigured();
  $("#whatsapp-config").textContent = translate("config.waerror", {phone});
  $("#email-config").hidden = emailConfigured();
  $("#email-config").textContent = translate("config.mailerror");
  $("#legal-contact").textContent = [localized(CONFIG.address, "config.address"), phone, emailConfigured() ? CONFIG.email.trim() : translate("config.email")].join(" · ");
}
function renderConfiguredValues() {
  CONFIG.packages.forEach(pack => {
    $$(`[data-i18n="pack.${pack.id}"]`).forEach(node => { node.textContent = packageName(pack.id); });
    const priceNode = $(`[data-price="${pack.id}"]`);
    if (priceNode) {
      const currency = document.createElement("span");
      currency.textContent = "FCFA";
      priceNode.replaceChildren(document.createTextNode(numberFormat(pack.price) + " "), currency);
    }
  });
  CONFIG.services.forEach(service => {
    $$(`[data-i18n="cat.${service.id}"]`).forEach(node => { node.textContent = serviceName(service.id); });
  });
}
function setLanguage(code) {
  language = Object.hasOwn(TRANSLATIONS, code) ? code : "fr";
  document.documentElement.lang = language;
  document.title = translate("page.title");
  $("#language").value = language;
  $$("[data-i18n]").forEach(node => { node.textContent = translate(node.dataset.i18n); });
  $$("[data-label-key]").forEach(node => { node.setAttribute("aria-label", translate(node.dataset.labelKey)); });
  $$("[data-alt-key]").forEach(node => { node.alt = translate(node.dataset.altKey); });
  $$("[data-studio-name]").forEach(node => { node.textContent = CONFIG.studioName; });
  $(".header .logo").setAttribute("aria-label", translate("aria.home"));
  navigation.setAttribute("aria-label", translate("aria.nav"));
  $("#filters").setAttribute("aria-label", translate("aria.filters"));
  renderConfiguredValues();
  renderContact();
  updateResults();
  updateSummary();
  fields.forEach(field => { if (field.getAttribute("aria-invalid") === "true") validateField(field); });
  if (statusKey) setStatus(statusKey);
  if (dialog.open) renderLightbox();
}

/* 05. Menu mobile et dégagement des titres sous l’en-tête. */
function setMenu(open) {
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}
function measureHeader() {
  const isExpanded = mobileMedia.matches && navigation.classList.contains("is-open");
  const extra = isExpanded ? navigation.getBoundingClientRect().height + 12 : 0;
  const height = $(".header").getBoundingClientRect().height - extra;
  document.documentElement.style.setProperty("--header-height", `${Math.max(75, height)}px`);
}
menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
$$("a", navigation).forEach(link => link.addEventListener("click", () => setMenu(false)));
mobileMedia.addEventListener("change", () => { setMenu(false); measureHeader(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !dialog.open && navigation.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});
if ("ResizeObserver" in window) new ResizeObserver(measureHeader).observe($(".header"));
else window.addEventListener("resize", measureHeader);

/* 06. Filtrage progressif : le HTML contient toujours les 14 cartes. */
function visibleCards() { return cards.filter(card => !card.hidden); }
function updateResults() {
  $("#result-count").textContent = translate("results", {count: visibleCards().length});
}
function filterPortfolio(category) {
  currentFilter = category;
  cards.forEach(card => { card.hidden = currentFilter !== "all" && card.dataset.category !== currentFilter; });
  $$("[data-filter]").forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateResults();
}
$$("[data-filter]").forEach(button => button.addEventListener("click", () => filterPortfolio(button.dataset.filter)));

/* 07. Visionneuse native : piège de focus fourni par dialog.showModal(). */
function cloneVisual(card) {
  const clone = $(".visual-button > svg, .visual-button > img", card).cloneNode(true);
  if (clone.tagName.toLowerCase() === "img") {
    clone.alt = translate(card.dataset.titleKey + ".alt");
    clone.loading = "eager";
  } else {
    // Avoid duplicate gradient IDs between the card and its enlarged clone.
    const idMap = new Map($$("[id]", clone).map(node => [node.id, "modal-" + node.id]));
    $$("*", clone).forEach(node => {
      if (idMap.has(node.id)) node.id = idMap.get(node.id);
      for (const attribute of Array.from(node.attributes)) {
        let value = attribute.value;
        for (const [oldId, newId] of idMap) value = value.replaceAll(`url(#${oldId})`, `url(#${newId})`);
        if (value !== attribute.value) node.setAttribute(attribute.name, value);
      }
    });
  }
  return clone;
}
function renderLightbox() {
  const visible = visibleCards();
  if (!visible.length) return;
  const card = visible[currentVisual];
  $("#lightbox-title").textContent = translate(card.dataset.titleKey);
  $("#lightbox-category").textContent = serviceName(card.dataset.category);
  $("#lightbox-visual").replaceChildren(cloneVisual(card));
  $("#lightbox-visual").setAttribute("role", "img");
  $("#lightbox-visual").setAttribute("aria-label", translate(card.dataset.titleKey + ".alt"));
  $("#lightbox-position").textContent = `${currentVisual + 1} / ${visible.length}`;
  $("#lightbox-prev").disabled = visible.length < 2;
  $("#lightbox-next").disabled = visible.length < 2;
}
function openLightbox(card, button) {
  originButton = button;
  currentVisual = visibleCards().indexOf(card);
  renderLightbox();
  dialog.showModal();
  document.body.classList.add("modal-open");
  $("#lightbox-close").focus();
}
function changeVisual(direction) {
  const count = visibleCards().length;
  if (!count) return;
  currentVisual = (currentVisual + direction + count) % count;
  renderLightbox();
}
function closeLightbox() { if (dialog.open) dialog.close(); }
if (typeof dialog.showModal === "function") {
  cards.forEach(card => {
    const button = $(".visual-button", card);
    button.disabled = false;
    button.addEventListener("click", () => openLightbox(card, button));
  });
}
$("#lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox-prev").addEventListener("click", () => changeVisual(-1));
$("#lightbox-next").addEventListener("click", () => changeVisual(1));
dialog.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    changeVisual(event.key === "ArrowLeft" ? -1 : 1);
  }
});
function outsideDialog(event) {
  const r = dialog.getBoundingClientRect();
  return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
}
dialog.addEventListener("pointerdown", event => {
  pointerStartedOutside = event.target === dialog && outsideDialog(event);
});
dialog.addEventListener("click", event => {
  if (pointerStartedOutside && event.target === dialog && outsideDialog(event)) closeLightbox();
  pointerStartedOutside = false;
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  if (originButton?.isConnected && !originButton.closest("[hidden]")) originButton.focus({preventScroll: true});
});

/* 08. Validation commune : contraintes natives et règles complémentaires. */
function validateField(field) {
  const value = field.value.trim();
  let error = "";
  field.setCustomValidity("");
  if (field.required && !value) error = translate("error.required");
  else if (field.maxLength > 0 && field.value.length > field.maxLength) error = translate("error.length", {max: field.maxLength});
  else if (field.id === "email" && value && !validEmail(value)) error = translate("error.email");
  else if (field.id === "phone" && value) {
    const digits = value.replace(/\D/g, "").length;
    if (!/^[+\d\s().\/-]+$/.test(value) || digits < 6 || digits > 18) error = translate("error.phone");
  } else if (field.id === "pack" && !packages.has(value) && value !== "other") error = translate("error.choice");
  else if (field.id === "service" && !services.has(value) && value !== "other") error = translate("error.choice");
  else if (field.id === "date") {
    field.min = todayLocal();
    if (field.validity.badInput || (value && (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < field.min || Number.isNaN(Date.parse(value)) || field.validity.rangeUnderflow))) error = translate("error.date");
  }
  if (!error && !field.validity.valid) error = translate(field.id === "email" ? "error.email" : "error.invalid");
  field.setCustomValidity(error);
  field.setAttribute("aria-invalid", String(Boolean(error)));
  const target = document.getElementById(`${field.id}-error`);
  if (target) target.textContent = error;
  return !error;
}
function validateForm() {
  $("#date").min = todayLocal();
  const results = fields.map(field => ({field, valid: validateField(field)}));
  const invalid = results.find(result => !result.valid);
  if (invalid) {
    setStatus("status.invalid");
    invalid.field.focus();
    return false;
  }
  return true;
}
function requestData() {
  const value = id => document.getElementById(id).value.trim();
  return {name: value("full-name"), phone: value("phone"), email: value("email"), pack: value("pack"), service: value("service"), date: value("date"), location: value("location"), details: value("message")};
}
function displayDate(value) {
  if (!value) return translate("msg.empty");
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? translate("msg.empty") : new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB").format(date);
}
function buildMessage(data = requestData()) {
  const line = (key, value) => `${translate("msg." + key)} : ${value || translate("msg.empty")}`;
  return [translate("msg.hello", {studio: CONFIG.studioName}), translate("msg.intro"), "",
    line("name", data.name), line("phone", data.phone), line("email", data.email), "",
    line("pack", packageName(data.pack)), line("price", priceLabel(data.pack)), line("service", serviceName(data.service)),
    line("date", displayDate(data.date)), line("location", data.location), "", line("details", data.details), "", translate("msg.thanks")].join("\n");
}
function updateSummary() {
  const message = buildMessage();
  $("#request-summary").textContent = message;
  $("#copy-text").value = message;
  $("#selection-status").textContent = selectedFromCard ? translate("status.selection", {pack: packageName($("#pack").value), price: priceLabel($("#pack").value)}) : "";
}
fields.forEach(field => {
  const update = () => {
    if (field.id === "pack") selectedFromCard = false;
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
    if (statusKey) setStatus("");
    updateSummary();
  };
  field.addEventListener("input", update);
  field.addEventListener("change", update);
});
$$("[data-pack]").forEach(link => link.addEventListener("click", () => {
  if (!packages.has(link.dataset.pack)) return;
  $("#pack").value = link.dataset.pack;
  selectedFromCard = true;
  if ($("#pack").getAttribute("aria-invalid") === "true") validateField($("#pack"));
  setStatus("");
  updateSummary();
  requestAnimationFrame(() => $("#full-name").focus({preventScroll: true}));
}));

/* 09. Actions externes volontaires : un seul message pour les deux canaux. */
function buildChannelLink(channel, data = requestData()) {
  const message = buildMessage(data);
  if (channel === "whatsapp") return `https://wa.me/${CONFIG.whatsappInternational}?text=${encodeURIComponent(message)}`;
  const subject = translate("mail.subject", {pack: packageName(data.pack), name: data.name.replace(/[\r\n]/g, " ")});
  return `mailto:${emailDestination()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}
function prepareChannel(channel) {
  if (!validateForm()) return;
  if (channel === "whatsapp" && !whatsappConfigured()) return;
  if (channel === "email" && !emailConfigured()) return;
  updateSummary();
  const link = buildChannelLink(channel);
  if (channel === "whatsapp") {
    window.open(link, "_blank", "noopener,noreferrer");
    setStatus("status.whatsapp");
  } else {
    setStatus("status.email");
    window.location.href = link;
  }
}
// An implicit Enter-submit does not launch an external channel.
form.addEventListener("submit", event => { event.preventDefault(); setStatus("status.channel"); });
$("#whatsapp-action").addEventListener("click", () => prepareChannel("whatsapp"));
$("#email-action").addEventListener("click", () => prepareChannel("email"));
$("#copy-request").addEventListener("click", async () => {
  if (!validateForm()) return;
  updateSummary();
  const message = buildMessage();
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(message);
    $("#copy-fallback").hidden = true;
    setStatus("status.copy");
  } catch {
    $("#copy-fallback").hidden = false;
    $("#copy-text").value = message;
    $("#copy-text").focus();
    $("#copy-text").select();
    setStatus("status.fallback");
  }
});

/* 10. Démarrage de l’amélioration progressive. */
document.documentElement.classList.add("js");
menuButton.hidden = false;
$("#filters").hidden = false;
$("#language").disabled = false;
$("#theme").disabled = false;
$("#copy-request").disabled = false;
$("#date").min = todayLocal();
$("#message").maxLength = Math.max(1, Number(CONFIG.messageMaxLength) || 1500);
$("#language").addEventListener("change", event => setLanguage(event.target.value));
$("#theme").addEventListener("change", event => {
  if (event.target.value === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = event.target.value;
});
setLanguage(language);
measureHeader();
