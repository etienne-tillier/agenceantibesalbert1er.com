## Description
## Agence Antibes Albert 1er - Site Immobilier Spécialisé

Ce site se positionne comme une référence locale pour l'immobilier à Antibes, offrant une expertise complète sur l'achat, la location, la vente et l'aménagement de biens immobiliers dans cette ville prisée de la Côte d'Azur. Le site vise à générer du trafic qualifié en proposant des guides pratiques, des conseils d'experts et des comparatifs détaillés pour accompagner les particuliers dans leurs projets immobiliers.

Le contenu se structure autour de guides complets (comment choisir un appartement, évaluer une maison, négocier un prix), de conseils techniques (inspection des fenêtres, détection de défauts, valorisation d'un bien) et d'informations locales spécifiques à Antibes. L'objectif est de devenir la ressource incontournable pour quiconque souhaite investir, acheter ou vendre dans l'immobilier antibois, tout en générant des leads qualifiés pour les services d'accompagnement immobilier.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu spécialisé dans l'immobilier à Antibes.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Agence Antibes Albert 1er
- Domaine : agenceantibesalbert1er.com
- Type de site : Money site - génération de trafic et leads immobilier
- Thématiques : Immobilier, Maison, Antibes, Côte d'Azur
- Objectif business : Générer du trafic SEO qualifié et des leads pour services immobiliers
- Audience cible : Particuliers cherchant à acheter, vendre ou louer à Antibes

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : Élégant, Confiant, Méditerranéen, Professionnel, Chaleureux
- **Références visuelles mentales** : Architecture provençale, mer Méditerranée, pierre blonde d'Antibes, volets bleus, terrasses ensoleillées, palmiers, port de plaisance
- **Émotions à évoquer** chez le visiteur : Confiance dans l'expertise, sérénité de l'investissement, prestige de la Riviera, sécurité de l'accompagnement

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été générées et sont disponibles sur le bucket R2 :

**Page d'accueil :**
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-hero-antibes-luxury.jpeg
- Section expertise : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-expertise-consultation.jpeg
- Section quartiers : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-quartiers-vieille-ville.jpeg
- Section services : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-services-evaluation.jpeg
- Galerie appartements : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-gallery-appartement-moderne.jpeg
- Galerie villas : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-home-gallery-villa-luxe.jpeg

**Pages secondaires :**
- Page À propos : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-about-hero-equipe.jpeg
- Page Contact : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/agenceantibesalbert1er-com-contact-hero-bureau.jpeg

**IMPORTANT** : Ces images DOIVENT être téléchargées depuis les URLs ci-dessus et intégrées dans le projet selon leurs chemins locaux respectifs.

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à la Côte d'Azur et l'immobilier de prestige
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : Inspirée du bleu méditerranéen profond
   - Couleur secondaire (secondary) : Inspirée de la pierre blonde d'Antibes
   - Couleur d'accent (accent) : Inspirée des tuiles provençales
   - Couleur de fond (background) : Blanc cassé méditerranéen
   - Variante hover : Versions plus sombres des couleurs principales
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Google Font recommandée : **Libre Baskerville** pour les titres (élégance classique)
- Google Font secondaire : **Inter** pour le corps de texte (lisibilité moderne)
- Style : Mélange entre tradition provençale et modernité professionnelle

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Agence Immobilière Antibes | Achat, Vente, Location Albert 1er"
- **Méta-description principale** pour la home : "Expert immobilier à Antibes depuis Albert 1er. Guides complets pour acheter, vendre ou louer. Conseils pro, évaluation gratuite, accompagnement personnalisé."
- **Open Graph title** : "Agence Antibes Albert 1er - Votre Expert Immobilier Local"
- **Open Graph description** : "Découvrez nos guides immobiliers, conseils d'experts et services d'accompagnement pour vos projets à Antibes."

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation)
  - `app/globals.css` (créer la palette UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/guides/*`, `/conseils/*`)

## 4. Contenu & structure à mettre en place
- Types de contenus à garder : blog/guides, comparatifs, pages de services, pages quartiers
- **Sections obligatoires sur la page d'accueil** (/) :
  - Hero ("Votre Expert Immobilier à Antibes", sous-titre valorisant l'expertise locale, CTA "Estimation gratuite")
  - Section "Notre Expertise" (présentation des services : achat, vente, location, conseil)
  - Section "Quartiers d'Antibes" (cap d'Antibes, vieille ville, Sophia Antipolis, Juan-les-Pins)
  - Section "Nos Services" (évaluation, visite conseil, négociation, accompagnement juridique)
  - Galerie de biens (appartements et villas récentes)
  - Section témoignages clients
  - Bloc de confiance (années d'expérience, transactions réalisées)
- Pages importantes : `/guides/*` (guides d'achat/vente), `/quartiers/*`, `/services/*`
- Clusters thématiques : Guides d'achat, Guides de vente, Conseils rénovation, Quartiers Antibes, Investissement locatif

## 5. Consignes éditoriales
- Ton à respecter : Professionnel mais accessible, expert sans être jargonneux, rassurant
- Types d'articles attendus :
  - Guides pratiques ("Comment choisir un appartement à Antibes")
  - Conseils techniques ("Repérer les défauts lors d'une visite")
  - Analyses de quartiers ("Vivre au Cap d'Antibes : avantages et prix")
  - Comparatifs ("Appartement vs Villa : que choisir à Antibes ?")
  - Conseils valorisation ("10 astuces pour vendre plus cher")
- Contraintes à éviter : Promesses irréalistes sur les prix, jargon technique non expliqué, généralités sans valeur ajoutée

## 6. Navigation et structure
- Menu principal : Accueil, Acheter, Vendre, Louer, Guides, Quartiers, Contact
- Sous-menus :
  - Acheter : Appartements, Villas, Guides d'achat, Financement
  - Vendre : Estimation, Conseils vente, Valorisation, Guides vendeur
  - Guides : Inspection visite, Négociation, Rénovation, Investissement
- Footer : Liens rapides, quartiers, mentions légales, contact

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN="agenceantibesalbert1er.com", BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec les bonnes informations
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- **Téléchargement et intégration des images** depuis les URLs R2 fournies
- Logos personnalisés (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Configuration formulaires de contact
- Vérifier `npm run lint` et `npm run build`

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser les mêmes polices que d'autres sites
❌ Créer un design "générique"
❌ Laisser des placeholders de couleurs dans le code final
❌ Négliger l'aspect local et méditerranéen du design
❌ Oublier de télécharger et intégrer les images pré-générées