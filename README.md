# Lumyra — refonte éditoriale ivoire, rose et or

## 1. Intention de la refonte

Cette version réinterprète la maquette LUNÉVA Beauty fournie par l’utilisateur pour un studio photographique, sans transformer Lumyra en boutique de cosmétiques et sans reprendre le logo, les textes ou les photographies de la marque de référence.

Les codes visuels retenus sont : bandeau supérieur noir, en-tête ivoire, marque typographique espacée, grande accroche en caractères à empattements, couleurs rosées, catégories circulaires, cartes de collection, mosaïque de quatre univers, bandeau éditorial noir et doré et pied de page à plusieurs colonnes.

Le projet reste une démonstration pédagogique. Aucune vraie photographie de Lumyra n’a été fournie : toutes les compositions sont des illustrations SVG originales intégrées au HTML, explicitement identifiées. Les 14 cartes du portfolio ne sont pas présentées comme des réalisations réelles. Des miniatures décoratives reprennent ces dessins dans les catégories et la mosaïque.

## 2. Livraison et ouverture

Trois fichiers techniques et une documentation :

- `index.html` : structure sémantique, contenus, 14 cartes, illustrations et formulaire.
- `style.css` : tous les styles, variables, composants, thèmes et adaptations responsive.
- `script.js` : configuration, traductions et interactions en JavaScript natif.
- `README.md` : personnalisation, fonctionnement et bilan des contrôles.

Le dossier `assets/images/` est prévu pour vos futures photographies locales. Il est vide volontairement : les illustrations actuelles sont intégrées au HTML.

Extraire l’archive et ouvrir `index.html` directement dans un navigateur récent. Les trois fichiers doivent rester ensemble. Aucune installation, bibliothèque, npm, compilation, base de données, serveur ou police distante n’est nécessaire.

Sans connexion, l’interface et les visuels restent disponibles. L’ouverture et l’envoi via WhatsApp ou e-mail dépendent ensuite de l’appareil, des applications configurées et de leur accès réseau. Le site ne confirme aucune réservation.

## 3. Organisation pédagogique

### HTML — un contenu utilisable avant JavaScript

Le document possède un seul h1 et sept sections : Accueil, Portfolio, Studio, Tarifs, Avis, Contact et Mentions légales. La galerie vient immédiatement après l’accueil afin de reprendre la composition du modèle visuel. La navigation donne accès à toutes les sections par ancres.

Le HTML contient déjà les textes, les cartes, les cinq prix et les coordonnées. JavaScript ne reconstruit pas toute la page. Sans JavaScript, les 14 illustrations restent visibles ; les demandes, les filtres, la visionneuse et les sélecteurs de préférences sont désactivés ou masqués et un message noscript explique les limites. La navigation reste développée. Sans JavaScript, l’en-tête n’est pas collant afin de ne pas masquer les titres avec un menu développé.

Attributs utiles :

- `data-i18n` : clé de traduction d’un texte.
- `data-label-key` : traduction du nom accessible d’un bouton d’image.
- `data-alt-key` : traduction d’une description d’image locale, si ajoutée.
- `data-category` : catégorie d’une carte.
- `data-filter` : catégorie activée par un filtre.
- `data-title-key` : titre et description du visuel dans les traductions.
- `data-pack` : pack à présélectionner dans le formulaire.
- `data-price` : prix de carte mis à jour depuis la configuration.

### CSS — variables et composants

Le fichier est séparé en groupes commentés : couleurs et thèmes, composants, en-tête, accueil, catégories et galerie, expérience, tarifs et avis, contact, mentions et pied de page, visionneuse, responsive et mouvement réduit.

Les couleurs sont centralisées dans `:root`. La sélection automatique utilise `prefers-color-scheme`. Les sélecteurs clair/sombre restent possibles sans stockage de préférence. Les fonds, textes, bordures, champs, boutons, cartes et dialogue ont des variables adaptées. Le bandeau et le pied de page gardent volontairement leur identité sombre dans les deux thèmes.

Les polices sont uniquement des polices locales : système sans empattements et Georgia/Times pour les titres éditoriaux. Aucun chargement de police externe.

Les filtres s’affichent sur deux lignes de quatre sur petit écran. La grille des packs passe de cinq à trois, deux puis une colonne. La galerie passe de cinq à quatre, trois puis deux colonnes. Les commandes de la visionneuse restent séparées du contenu agrandi. Le mouvement réduit supprime les animations et le défilement fluide.

### JavaScript — fonctions centrales

- `setLanguage` applique les traductions, l’attribut `lang`, les noms accessibles, les coordonnées et le récapitulatif.
- `filterPortfolio` masque les cartes hors catégorie et met à jour les états et le compteur.
- `openLightbox`, `renderLightbox` et `changeVisual` gèrent la visionneuse parmi les résultats du filtre.
- `validateField` complète les contraintes HTML ; `validateForm` vérifie tous les champs et focalise la première erreur.
- `requestData` lit et nettoie les valeurs sans les insérer en HTML.
- `buildMessage` produit un corps unique, utilisé par les deux canaux et la copie.
- `buildChannelLink` encode les paramètres de WhatsApp ou mailto.
- `prepareChannel` ne déclenche une action externe qu’après clic explicite et validation.

Les cartes du portfolio restent des boutons HTML natifs, utilisables au clavier. Le dialogue natif assure le confinement du focus ; le code restitue le focus à la carte d’origine. Les identifiants de dégradés SVG sont uniques, y compris dans les clones de la visionneuse.

## 4. Modifier le nom et les coordonnées

L’objet `CONFIG` se trouve en tête de `script.js`. Les textes traduisibles sont regroupés juste après, dans `TRANSLATIONS`.

| Paramètre | Utilisation |
|---|---|
| `studioName` | Nom dans les marques et les textes traduits contenant Lumyra, ainsi que les messages préparés. |
| `whatsappLocal` | Numéro affiché lisiblement, sans déduction d’indicatif. |
| `whatsappInternational` | Numéro explicitement fourni pour le lien wa.me. |
| `email` | Adresse de destination et contact affiché. |
| `address` | Adresse dans les deux langues. |
| `hours` | Horaires dans les deux langues. |
| `travel` | Zone de déplacement et conditions dans les deux langues. |
| `defaultLanguage` | Français par défaut dans la version améliorée. |
| `messageMaxLength` | Limite des précisions, initialement 1 500 caractères. |
| `packages` | Identifiants, noms traduits et prix des cinq packs. |
| `services` | Identifiants et noms traduits des sept catégories. |

Pour que la version sans JavaScript reste cohérente, reporter les modifications dans `index.html`, y compris le titre, la description, les logos, coordonnées, prix, intitulés et contenus éditoriaux. Modifier aussi les clés de traduction correspondantes. Si la limite de message change, synchroniser le libellé et le `maxlength` statiques.

### Numéro WhatsApp international

La valeur fournie est `"237687170728"`, sous forme de chaîne. Elle n’est pas déduite du numéro local ni de la monnaie.

La vérification syntaxique accepte de 8 à 15 chiffres et un premier chiffre non nul. Aucun espace, + ou séparateur n’est autorisé dans cette variable. Ce contrôle ne prouve pas qu’un compte WhatsApp existe.

Si la variable est vide ou mal formatée, le numéro local reste affiché, l’action WhatsApp est désactivée et une explication apparaît. Le code n’essaie pas de corriger ou deviner un indicatif.

### Adresse e-mail

La valeur fournie est `"proByLumyra@Lumyra.cm"`. Une valeur vide ou invalide désactive l’action e-mail et retire le lien de contact correspondant. Aucun destinataire fictif de remplacement n’est utilisé.

L’existence de cette boîte, son appartenance à Lumyra et sa délivrabilité ne sont pas vérifiées par ce site statique. Les confirmer avant publication.

## 5. Tarifs et contenus des packs

Les prix initiaux sont exactement :

| Identifiant | Offre | Prix |
|---|---|---:|
| express | Photo express | 3 000 FCFA |
| shooting | Shooting | 15 000 FCFA |
| essential | Essentiel | 30 000 FCFA |
| prestige | Prestige | 60 000 FCFA |
| signature | Signature | 120 000 FCFA |

Changer `CONFIG.packages` pour les prix et noms appliqués avec JavaScript. Mettre à jour les cinq cartes et les options dans le HTML pour la version statique. Garder les identifiants existants afin de préserver les liaisons avec les liens de réservation et le formulaire.

Les descriptions éditoriales sont dans `pack.desc.*`. Chaque zone d’inclusions indique « Contenu du pack à préciser avec Lumyra ». Il n’y a aucune quantité, durée, retouche, impression ou livraison contractuelle inventée.

Remplacer ce texte uniquement avec des informations confirmées par le studio et traduire ces informations. La mention « tarifs de démonstration » reste nécessaire tant que les tarifs ne sont pas commercialement validés.

« Réserver ce pack » rejoint Contact, sélectionne le pack, met à jour le récapitulatif et focalise le nom sans lancer WhatsApp ou l’e-mail. L’option « Autre demande » produit « Tarif à définir ».

## 6. Remplacer les 14 illustrations par des photographies locales

1. Obtenir les photographies et les droits de diffusion auprès de Lumyra. Ne pas récupérer des images en ligne sans demande ni autorisation.
2. Déposer les fichiers optimisés dans `assets/images/`, avec des noms simples, par exemple `mariage-01.jpg`.
3. Dans `index.html`, rechercher une carte `.portfolio-card`, par exemple celle avec `data-title-key="visual.wedding.0"`.
4. Remplacer uniquement son SVG à l’intérieur de `.visual-button` par une image locale. Conserver l’article, le bouton et leurs attributs.

```html
<img class="art" src="assets/images/mariage-01.jpg"
     alt="Description précise de la photographie autorisée"
     data-alt-key="visual.wedding.0.alt"
     width="800" height="1000" loading="lazy" decoding="async">
```

5. Mettre à jour les clés `visual.wedding.0` et `visual.wedding.0.alt` dans les deux dictionnaires de traduction. Modifier aussi le titre statique, l’alternative et l’aria-label du bouton dans le HTML.
6. Répéter pour les 14 cartes : deux pour Mariage, Portrait, Mode, Événementiel, Produit, Shooting et Photos simples. Ne pas changer les identifiants techniques des catégories.
7. La visionneuse détecte et clone aussi bien un SVG qu’une image locale. Les filtres et le clavier ne nécessitent aucune bibliothèque supplémentaire.

L’accueil peut recevoir une image locale à la place du SVG de `.hero-visual` ; choisir une alternative pertinente et mettre à jour la légende. Les quatre cartes `.experience-card` et l’illustration du bandeau peuvent être remplacées de la même façon. Les petites illustrations dans les catégories sont décoratives et peuvent rester comme pictogrammes, sans être décrites comme des photographies du studio.

Tant que des illustrations figurent dans le portfolio, conserver un avertissement honnête. Lorsque toutes les photos sont authentiques et autorisées, adapter les avertissements du portfolio et de la visionneuse, les badges « Illustration », les mentions légales et les traductions. Ne pas retirer les avertissements avant d’avoir remplacé les visuels concernés.

## 7. Témoignages et mentions légales

Les trois avis sont fictifs et explicitement identifiés. Avant publication commerciale, les remplacer par de vrais témoignages publiés avec autorisation, ou supprimer les trois cartes. On peut conserver la section Avis avec un message neutre indiquant qu’aucun témoignage n’est publié. Ne pas attribuer ces exemples à de vraies personnes et ne pas inventer de note globale ou Google.

Compléter les mentions légales avec les données vérifiées : identité ou raison sociale, forme juridique applicable, adresse complète, contact, responsable de publication, registre du commerce et numéro de contribuable si applicables, identité et coordonnées de l’hébergeur, droits photographiques et conditions d’utilisation des contenus.

Définir aussi le traitement des demandes après réception, leur conservation et les modalités d’exercice des droits. Aucun numéro administratif, hébergeur ou responsable juridique n’est inventé. Ce modèle doit être adapté au pays d’exploitation et validé avant publication ; il ne garantit pas la conformité à une législation.

## 8. Validation et protection des saisies

Les champs obligatoires sont le nom, le téléphone, le pack et la prestation. Les valeurs composées uniquement d’espaces sont refusées. L’adresse e-mail est facultative et sa syntaxe est vérifiée si elle est renseignée. Les packs et prestations doivent appartenir aux listes autorisées, même si le DOM est modifié.

Le téléphone accepte les chiffres et les séparateurs usuels : espaces, +, points, tirets, / et parenthèses. Le contrôle attend de 6 à 18 chiffres, sans imposer d’indicatif pays. Il ne vérifie pas l’existence d’un numéro réel.

Une date renseignée ne peut pas précéder le jour local de l’appareil. Le minimum est recalculé avant validation : on ne se base pas sur une date UTC qui pourrait décaler le jour. Les limites de longueur sont aussi contrôlées côté JavaScript.

Les messages d’erreur sont proches des champs et reliés par `aria-describedby`. Le champ reçoit `aria-invalid` et le focus est placé sur la première erreur. Les saisies sont conservées après une erreur. Le récapitulatif utilise `textContent`, jamais une insertion de saisie avec `innerHTML`.

Les champs facultatifs vides apparaissent uniformément comme « Non précisé ». Aucun `undefined` ou `null` ne doit apparaître dans les messages.

## 9. WhatsApp, e-mail et copie

### Message commun

Le message comprend : salutation au studio, intention de réservation, nom, téléphone, e-mail, pack, tarif affiché, prestation, date, lieu, précisions et demande de confirmation des disponibilités et conditions.

`buildMessage` sert aux deux canaux et à la copie. `buildChannelLink` encode le texte avec `encodeURIComponent`.

### WhatsApp

Après clic explicite et validation, le site ouvre `https://wa.me/NUMERO?text=...` dans une nouvelle fenêtre protégée par `noopener,noreferrer`. Le visiteur doit encore envoyer le message dans WhatsApp. Si la fenêtre est bloquée, il peut l’autoriser ou utiliser la copie. Le site n’affiche jamais « Message envoyé ».

### E-mail

Après la même validation, un lien mailto vise l’adresse configurée. Son objet est « Demande de réservation — [pack] — [nom] » en français. L’objet et le corps sont encodés ; le corps est identique au message WhatsApp.

Le bouton demande l’ouverture de l’application de messagerie configurée. Le visiteur doit vérifier les informations et confirmer l’envoi dans cette application. Sans application configurée, l’ouverture peut échouer. Aucun serveur SMTP ni service externe de traitement de formulaire n’est inclus.

Les liens mailto ont des limites de longueur variables selon les applications. La copie fournit un repli si le client e-mail ne traite pas la demande complète.

### Copie et validation implicite

Le bouton de copie valide les mêmes champs. Il utilise l’API de presse-papiers lorsque le navigateur l’autorise. Lors d’une ouverture locale notamment, l’API ou sa permission peut être absente. Le site affiche alors une zone de texte, y place le focus et sélectionne le contenu pour une copie manuelle.

La copie ne transmet rien au studio. Elle utilise le presse-papiers de l’appareil à la demande du visiteur.

Appuyer sur Entrée dans un champ ne lance pas automatiquement un canal : le visiteur doit choisir explicitement WhatsApp ou e-mail.

### Confidentialité et absence de backend

Aucune base de données, réservation confirmée, agenda synchronisé, authentification, paiement, envoi automatique, analyse d’audience ou traceur publicitaire n’est installé.

Les données et préférences restent en mémoire de page, sans localStorage, sessionStorage ou cookie d’application. Le code n’ajoute pas de coordonnées client à l’URL du site. Le navigateur peut néanmoins proposer son remplissage automatique ou conserver un état de navigation selon son fonctionnement propre.

Après clic volontaire, les liens externes contiennent nécessairement le récapitulatif encodé. Le navigateur, l’appareil, WhatsApp ou le client e-mail peuvent alors traiter ces données selon leurs règles et conditions. Éviter toute information sensible inutile. Le traitement par le studio après réception doit être défini avant publication commerciale.

## 10. Modifier ou ajouter une langue

Les textes sont regroupés dans `TRANSLATIONS.fr` et `TRANSLATIONS.en`. Modifier les valeurs sans changer les clés. Conserver les marqueurs variables comme `{studio}`, `{pack}`, `{price}`, `{name}` et `{count}`.

Pour ajouter une langue :

1. Copier un dictionnaire complet sous un nouveau code et traduire toutes ses valeurs.
2. Ajouter l’option correspondante dans le sélecteur de langue HTML.
3. Ajouter les noms des packs et catégories dans leurs objets `names` de CONFIG, ainsi que l’adresse, les horaires et les déplacements.
4. Adapter `numberFormat` et `displayDate` si une convention autre que fr-FR/en-GB est nécessaire.
5. Vérifier les erreurs, les noms accessibles, les mentions légales et les messages préparés.

`setLanguage` met à jour l’attribut `lang`, le titre, les textes et le récapitulatif sans effacer les saisies. La base statique sans JavaScript reste française ; changer sa langue demande aussi une modification du HTML.

## 11. Vérifications réalisées sur cette refonte

Le site a été ouvert directement en `file://` dans Chromium automatisé headless avec Playwright. Les contextes de test étaient hors connexion. Aucun chargement HTTP n’a été observé pendant les parcours contrôlés.

Les tests mêlent assertions de structure, analyse statique et interactions dans le navigateur. Ils ne constituent pas une certification d’accessibilité ou une garantie de compatibilité exhaustive.

- 79 assertions validées, détaillées ci-dessous.
- Toutes les catégories, Tout et une activation clavier d’un filtre.
- Visionneuse : ouverture, boutons, flèches, boucle dans le filtre, clic sur le visuel, clic sur l’arrière-plan, Échap, confinement et restitution du focus.
- Présélection de chacun des cinq packs sans ouverture externe.
- Validation de champs manquants, espaces seuls, e-mail, téléphone, dates, longueur et options falsifiées.
- Encodage des accents et retours à la ligne, destinataires, objet e-mail et égalité des corps WhatsApp/e-mail.
- L’ouverture WhatsApp a été interceptée pour inspecter le lien : aucun message réel n’a été transmis. Le lien mailto a été inspecté sans ouvrir une vraie application e-mail.
- La réussite de la copie a été testée avec une API simulée, sans modifier un presse-papiers personnel. Le repli a été testé en simulant une API absente.
- Thèmes manuels, préférence système sombre/claire, mouvement réduit et traduction française/anglaise.
- Fenêtres simulées : 320×700, 375×812, 768×1024, 1024×768 et 1440×1000. Aucun débordement horizontal détecté ; commandes de la modale dans la fenêtre. Grilles de packs observées : 1, 1, 2, 3 et 5 colonnes.
- Menu mobile et navigation vers Tarifs sans titre masqué.
- Zoom CSS synthétique à 200 % sans débordement détecté ; ce n’est pas un test du vrai zoom de l’interface du navigateur.
- Version sans JavaScript : navigation, message noscript et 14 visuels accessibles en consultation.
- Contrôle de syntaxe avec `node --check` et absence d’erreur JavaScript dans les parcours décrits.

### Détail des assertions

| Contrôle | Résultat |
|---|---|
| Initialisation sans erreur JavaScript | PASS |
| Sept sections | PASS |
| Quatorze cartes de portfolio | PASS |
| Huit filtres | PASS |
| Cinq prix exacts | PASS |
| Filtre wedding | PASS |
| Filtre portrait | PASS |
| Filtre fashion | PASS |
| Filtre event | PASS |
| Filtre product | PASS |
| Filtre shooting | PASS |
| Filtre simple | PASS |
| Tout restaure 14 cartes | PASS |
| Filtre au clavier | PASS |
| Modale ouverte et défilement bloqué | PASS |
| Flèche suivante | PASS |
| Flèche précédente | PASS |
| Navigation limitée au filtre et boucle | PASS |
| Clic sur le visuel conserve la modale | PASS |
| Focus contenu dans la modale | PASS |
| Identifiants uniques même dans la modale | PASS |
| Échap et restitution du focus | PASS |
| Fermeture au clic sur l’arrière-plan | PASS |
| Présélection express | PASS |
| Présélection shooting | PASS |
| Présélection essential | PASS |
| Présélection prestige | PASS |
| Présélection signature | PASS |
| Obligatoires et focus sur première erreur | PASS |
| Espaces seuls refusés | PASS |
| E-mail invalide refusé | PASS |
| Date passée refusée | PASS |
| Saisie valide acceptée | PASS |
| WhatsApp : numéro international explicite | PASS |
| Accents et retours correctement encodés | PASS |
| E-mail : destinataire et objet | PASS |
| Même corps pour WhatsApp et e-mail | PASS |
| Pas de undefined ou null dans le message | PASS |
| Saisies affichées en texte, sans injection HTML | PASS |
| Valeurs conservées après les erreurs | PASS |
| Autre demande : tarif à définir | PASS |
| Langue anglaise et lang mis à jour | PASS |
| Coordonnées absentes : actions désactivées | PASS |
| Coordonnées absentes : explications et numéro local | PASS |
| Numéro international mal formaté désactivé | PASS |
| Copie réussie, API simulée | PASS |
| Repli copie sélectionnable | PASS |
| Fenêtre 320×700 | PASS |
| Fenêtre 375×812 | PASS |
| Fenêtre 768×1024 | PASS |
| Fenêtre 1024×768 | PASS |
| Fenêtre 1440×1000 | PASS |
| Menu mobile : visible et aria-expanded | PASS |
| Navigation : titre dégagé sous l’en-tête | PASS |
| Menu fermé après navigation | PASS |
| Menu fermé par Échap et focus restitué | PASS |
| Thèmes manuels distincts | PASS |
| Thème automatique sombre | PASS |
| Animations réduites | PASS |
| Thème automatique clair | PASS |
| Zoom CSS 200 % : pas de débordement | PASS |
| Date locale du jour acceptée | PASS |
| Choix de pack falsifié refusé | PASS |
| Choix de prestation falsifié refusé | PASS |
| Limite 1 500 caractères | PASS |
| Téléphone invalide refusé | PASS |
| Sans JS : 14 visuels visibles | PASS |
| Sans JS : navigation et noscript visibles | PASS |
| Sans JS : actions de demande désactivées | PASS |
| Identifiants HTML uniques | PASS |
| Un seul h1 | PASS |
| Ancres internes résolues | PASS |
| Parité des traductions FR/EN | PASS |
| Tous les textes repérés ont une traduction | PASS |
| Aucun script ou style en ligne | PASS |
| Aucun chargement HTTP dans les parcours | PASS |
| Pas de stockage ou injection HTML dans le JS | PASS |
| Syntaxe JavaScript vérifiée par Node | PASS |
| Aucune erreur JS dans les parcours | PASS |

## 12. Tests manuels restant à faire

### Avant la soutenance

- Extraire l’archive, ouvrir le HTML directement et couper Internet : vérifier les contenus et illustrations.
- Examiner réellement les compositions, espacements, contrastes, textes longs et coordonnées dans les deux thèmes.
- Tester tout au clavier : lien d’évitement, menu, ancres, filtres, visionneuse, formulaire et copie.
- Vérifier le zoom réel du navigateur à 200 %, le grossissement des polices et les orientations portrait/paysage.
- Tester avec un lecteur d’écran : labels, erreurs, états de filtres et annonce du dialogue.
- Mesurer les contrastes avec un outil dédié avant de revendiquer une conformité.
- Refaire les parcours dans Firefox, Safari et Edge selon les appareils disponibles.
- Tester sur de vrais téléphones Android et iOS : aucun téléphone physique n’a été utilisé pour cette livraison.
- Essayer les permissions réelles du presse-papiers et la copie manuelle de repli.
- Avec l’accord du studio et des données non sensibles, vérifier l’ouverture réelle de WhatsApp et d’un client e-mail. Relire le destinataire et le texte avant un éventuel envoi volontaire.

### Avant une mise en ligne commerciale

- Confirmer la disponibilité et la propriété des coordonnées fournies.
- Valider les cinq prix, les inclusions, les conditions et les délais auprès de Lumyra.
- Remplacer les visuels de démonstration par des photos locales autorisées et optimiser leur poids.
- Vérifier les droits d’auteur et les autorisations des personnes photographiées.
- Remplacer ou supprimer les témoignages fictifs.
- Compléter les mentions légales, l’hébergement et la politique de traitement des demandes après réception.
- Vérifier le déploiement HTTPS, les liens locaux, la console, le réseau et l’absence de dépendances externes ajoutées par erreur.
- Refaire les tests fonctionnels, responsive, multilingues, de thèmes et d’accessibilité après personnalisation.

Ce projet prépare une demande : il ne promet ni réception effective d’un message, ni disponibilité, ni réservation confirmée.
