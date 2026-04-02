import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Agence Antibes Albert 1er",
  description:
    "Politique de confidentialité de l'Agence Antibes Albert 1er — données collectées, droits des utilisateurs et contact DPO.",
  alternates: { canonical: `${siteConfig.url}/politique-confidentialite` },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Protection des données</p>
          <h1 className="page-hero-title">Politique de confidentialité</h1>
          <p className="page-hero-subtitle">
            Conformément au Règlement Général sur la Protection des Données (RGPD) — UE 2016/679.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">

            <h2 className="legal-section-title">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur le site <strong>agenceantibesalbert1er.com</strong> est :
            </p>
            <ul>
              <li><strong>Société :</strong> Agence Antibes Albert 1er SARL</li>
              <li><strong>Adresse :</strong> 30 Boulevard Albert 1er, 06600 Antibes, France</li>
              <li><strong>Email :</strong> {siteConfig.email}</li>
            </ul>

            <h2 className="legal-section-title">2. Données collectées</h2>
            <p>Dans le cadre de l&apos;utilisation de notre site, nous pouvons collecter les données suivantes :</p>
            <ul>
              <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite (via cookies techniques et analytiques).</li>
              <li><strong>Données de contact :</strong> Lorsque vous nous écrivez par email, nous collectons votre nom, adresse email et le contenu de votre message.</li>
              <li><strong>Données de localisation :</strong> Pays ou région (non précis), pour adapter le contenu à votre langue et juridiction.</li>
            </ul>

            <h2 className="legal-section-title">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes d&apos;information ou d&apos;estimation immobilière ;</li>
              <li>Améliorer l&apos;expérience utilisateur et les performances du site ;</li>
              <li>Respecter nos obligations légales et réglementaires ;</li>
              <li>Analyser l&apos;audience du site via des outils d&apos;analyse anonymisés.</li>
            </ul>

            <h2 className="legal-section-title">4. Base légale du traitement</h2>
            <p>Nos traitements sont fondés sur :</p>
            <ul>
              <li><strong>L&apos;intérêt légitime</strong> de l&apos;agence pour améliorer ses services ;</li>
              <li><strong>L&apos;exécution d&apos;un contrat</strong> ou de mesures précontractuelles ;</li>
              <li><strong>Votre consentement</strong> pour les cookies non essentiels.</li>
            </ul>

            <h2 className="legal-section-title">5. Cookies</h2>
            <p>
              Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site et, avec votre consentement, des cookies analytiques pour mesurer l&apos;audience.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies. Cela peut affecter certaines fonctionnalités du site.
            </p>

            <h2 className="legal-section-title">6. Durée de conservation</h2>
            <ul>
              <li><strong>Données de contact :</strong> 3 ans à compter du dernier échange.</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum (conformément aux recommandations CNIL).</li>
            </ul>

            <h2 className="legal-section-title">7. Partage des données</h2>
            <p>
              Nous ne vendons pas vos données personnelles. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergeur, outil d&apos;analyse) qui s&apos;engagent à les traiter conformément au RGPD.
            </p>

            <h2 className="legal-section-title">8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données.</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données.</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré.</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous opposer à un traitement basé sur l&apos;intérêt légitime.</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données.</li>
            </ul>

            <h2 className="legal-section-title">9. Contact DPO</h2>
            <p>
              Pour exercer vos droits ou pour toute question relative à la protection de vos données, contactez notre délégué à la protection des données :
            </p>
            <ul>
              <li><strong>Email :</strong> {siteConfig.email}</li>
              <li><strong>Adresse :</strong> 30 Boulevard Albert 1er, 06600 Antibes — À l&apos;attention du DPO</li>
            </ul>
            <p>
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) — cnil.fr.
            </p>

            <h2 className="legal-section-title">10. Mise à jour</h2>
            <p>
              Cette politique de confidentialité a été mise à jour le <strong>1er janvier 2025</strong>. Nous nous réservons le droit de la modifier à tout moment pour nous conformer aux évolutions légales ou à nos pratiques.
            </p>

            <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/mentions-legales" className="btn btn-outline">
                ← Mentions légales
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
