"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";

import {
  BackLink,
  Body,
  BulletedList,
  Callout,
  CostCard,
  CostGrid,
  C,
  CtaRow,
  Divider,
  GhostButton,
  Kicker,
  Lede,
  Limite,
  Meta,
  SectionTitle,
  Shell,
  Shot,
  TextButton,
  Title,
  TwoCol,
} from "@/components/casestudy/Study";

type Row = { problem: string; decision: string };
type Screen = { n: string; title: string; img: string; alt: string; rows: Row[] };

const SCREENS: Screen[] = [
  {
    n: "01",
    title: "Mes livres — la bibliothèque avant le flux",
    img: "/images/spine/case-1-mes-livres-2.png",
    alt: "Écran Mes livres de Spine",
    rows: [
      { problem: "Chez Goodreads, l'accueil est un flux d'actualités de ses amis ; ce qu'on lit soi-même est relégué.", decision: "L'écran s'ouvre sur une carte « En cours », seul aplat de couleur de l'app, avec la progression et un bouton « Reprendre »." },
      { problem: "Envies et lectures sont dans le même sac d'« étagères ».", decision: "Deux blocs distincts : Je veux lire, puis Lus récemment avec la note et la date." },
      { problem: "Découvrir demande un onglet séparé, qui prend le pas sur la bibliothèque.", decision: "Les suggestions vivent en bas, avec leur motif écrit en clair." },
    ],
  },
  {
    n: "02",
    title: "Chercher — reconnaître, pas lire",
    img: "/images/spine/case-2-chercher-2.png",
    alt: "Écran Chercher de Spine",
    rows: [
      { problem: "Liste dense où titre, auteur, année et note se confondent.", decision: "Une ligne : couverture, titre, auteur · année, et un seul bouton « Ajouter »." },
      { problem: "Aucun filtre rapide, il faut ouvrir un panneau.", decision: "Trois pastilles : Tous / Déjà lus / À lire." },
      { problem: "La couverture est une vignette de 40 px, alors que c'est ce qu'on reconnaît d'un livre.", decision: "Elle ouvre la ligne, à hauteur de lecture, suivie du statut « Déjà lu » ou « Ajouter »." },
    ],
  },
  {
    n: "03",
    title: "La fiche — décider en une hauteur d'écran",
    img: "/images/spine/case-3-fiche-2.png",
    alt: "Écran fiche livre de Spine",
    rows: [
      { problem: "Fiche encombrée : séries, éditions, formats, bibliothèques, amis…", decision: "Quatre lignes d'information, une note communautaire, un extrait d'avis, un résumé." },
      { problem: "L'action principale est un lien texte perdu au milieu de la page.", decision: "Un bouton capsule pleine largeur, en bas, dans la zone du pouce." },
      { problem: "Ajouter à sa bibliothèque est une autre page.", decision: "Un bouton rond « + » à côté du bouton principal." },
    ],
  },
  {
    n: "04",
    title: "La notation — deux gestes, une demi-étoile",
    img: "/images/spine/case-4-notation-b.png",
    alt: "Écran de notation de Spine",
    rows: [
      { problem: "Les étoiles sont sur la fiche, mais les toucher ouvre une feuille qu'il faut encore valider, et l'échelle reste entière.", decision: "Une feuille modale par-dessus la fiche : cinq étoiles de 32 pt, le chiffre en 38 pt, deux gestes." },
      { problem: "Impossible de mettre 4,5.", decision: "La moitié gauche d'une étoile donne la demi-note, et le chiffre géant lève l'ambiguïté." },
      { problem: "Avis obligatoire, cases à cocher, formulaire.", decision: "Avis facultatif ; spoiler, privé, statut et date sont repliés sous « Plus d'options »." },
    ],
  },
  {
    n: "05",
    title: "Le journal — la trace datée",
    img: "/images/spine/case-5-journal-2.png",
    alt: "Écran Journal de Spine",
    rows: [
      { problem: "La note remplace la précédente : aucune trace de ce qu'on a lu avant.", decision: "Chaque note crée une entrée, et relire en crée une deuxième au lieu d'écraser la première." },
      { problem: "Des dates réduites à un jour et un mois (« 08 NOV »), sans année ni jour de semaine.", decision: "Un en-tête de mois (« novembre 2026 »), le jour en gros et le jour de la semaine en clair ; la date complète reste dans le libellé vocal." },
      { problem: "Aucun état hors ligne : la note est perdue sans réseau.", decision: "Bandeau « Une note attend le réseau » et un statut par entrée." },
      { problem: "Thème imposé.", decision: "Bascule clair/sombre en icône, sur l'accueil et dans le journal." },
    ],
  },
];

const TOKENS = [
  { hex: "#1B4DFF", label: "cobalt · accent" },
  { hex: "#0B0B0C", label: "encre" },
  { hex: "#5A5A60", label: "secondaire" },
  { hex: "#F4F4F2", label: "surface" },
  { hex: "#101013", label: "fond sombre" },
  { hex: "#7E97FF", label: "accent sombre" },
];

const COSTS = [
  { value: "0,0892 $", label: "7 appels : cadrage, 6 stories, plan technique, 3 directions, critique" },
  { value: "0,0243 $", label: "1 appel de consolidation : fusion des emprunts et des corrections" },
  { value: "0 $", label: "le code : 15 fichiers, 1 386 lignes, 5 écrans, 2 thèmes" },
];

export default function SpineCaseStudy() {
  return (
    <Shell>
      <BackLink href="/projects/spine" />

      <Kicker>Étude de cas · produit mobile</Kicker>
      <Title>Refaire les deux gestes que Goodreads rate</Title>
      <Lede>
        Noter un livre et le retrouver. Deux gestes quotidiens que Goodreads fait payer quatre étapes et une feuille à valider — Spine les ramène à un pouce, deux taps et une trace datée.
      </Lede>

      <Meta
        items={[
          ["Rôle", "Produit, UX, dev mobile"],
          ["Stack", "React Native · Expo · TypeScript"],
          ["Livré", "5 écrans, 2 thèmes, iOS"],
          ["Coût API", "0,1135 $ · 8 appels"],
        ]}
      />

      <Divider />

      <SectionTitle>Le constat</SectionTitle>
      <Body>Goodreads remplit sa fonction — catalogue, étagères, avis — mais deux parcours y coûtent plus cher que le geste qu&apos;ils servent.</Body>

      <Box sx={{ display: "grid", gap: 2, mb: 4 }}>
        <TwoCol
          a="Noter demande de trouver le livre, d'ouvrir sa fiche, de viser les étoiles — puis une feuille s'ouvre et il faut encore confirmer"
          b="Quatre étapes pour un geste. On ne note pas en passant, donc on ne note pas."
        />
        <TwoCol
          a="La recherche rend une liste de texte, livre et éditions mélangés"
          b="On cherche un livre vu en librairie et on tombe sur une édition de 1994."
        />
        <TwoCol
          a="Aucune date : une note écrase la précédente, et le seul repère est un « 08 NOV » sans année"
          b="Impossible de dire « lu en novembre », ni de relire sans perdre l'ancienne note."
        />
      </Box>

      <Callout>Trois directions artistiques ont été produites puis rejetées avant celle-ci. C&apos;est là qu&apos;on apprend le plus.</Callout>

      <SectionTitle>Cinq écrans, cinq décisions</SectionTitle>
      <Body>Chaque écran répond à un problème précis. Rien n&apos;est décoratif.</Body>

      <Box sx={{ display: "grid", gap: 7 }}>
        {SCREENS.map((s) => (
          <Box key={s.n} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "280px 1fr" }, gap: { xs: 3, md: 5 }, alignItems: "start" }}>
            <Box sx={{ width: { xs: "100%", md: 280 }, maxWidth: 300, justifySelf: { xs: "center", md: "start" } }}>
              <Shot src={s.img} alt={s.alt} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: C.accent, mb: 0.5 }}>{s.n}</Typography>
              <Typography sx={{ fontSize: "1.15rem", fontWeight: 500, color: C.white, mb: 2, letterSpacing: "-0.01em" }}>{s.title}</Typography>
              <Box sx={{ display: "grid", gap: 1.5 }}>
                {s.rows.map((r) => (
                  <Box key={r.problem} sx={{ display: "grid", gap: 0.5, borderLeft: `1px solid ${C.line}`, pl: 2 }}>
                    <Typography sx={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.55 }}>{r.problem}</Typography>
                    <Typography sx={{ fontSize: "0.92rem", color: C.soft, lineHeight: 1.6 }}>{r.decision}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider />

      <SectionTitle>Le design system</SectionTitle>
      <Body>Un seul accent, deux familles typographiques, aucune ombre. La hiérarchie se fait par la couleur et l&apos;espace, jamais par des effets.</Body>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
        {TOKENS.map((t) => (
          <Box key={t.hex} sx={{ width: 84 }}>
            <Box sx={{ height: 52, borderRadius: 2, backgroundColor: t.hex, border: "1px solid rgba(255,255,255,0.1)" }} />
            <Typography sx={{ fontSize: "0.62rem", color: C.faint, mt: 0.75, fontFamily: "monospace" }}>{t.hex}</Typography>
            <Typography sx={{ fontSize: "0.62rem", color: C.muted }}>{t.label}</Typography>
          </Box>
        ))}
      </Box>

      <BulletedList
        items={[
          "Accent cobalt 5,91:1 sur blanc — une seule couleur actionnable",
          "Space Grotesk 700 pour les titres (22 pt), Inter 400–600 pour l&apos;interface",
          "Boutons capsule de 52 pt, rayons de 12 pt, zéro ombre",
          "Thème sombre : encre 16,8:1, accent 7,0:1, texte sur accent 7,3:1",
          "Accessibilité : cibles ≥ 44 pt, libellés VoiceOver, étoiles en <code>adjustable</code>",
        ]}
      />

      <Callout>
        Tous les contrastes sont calculés par script. Les modèles de langage se trompent systématiquement sur ce calcul : ils annonçaient 4,8:1 pour un couple qui mesure 3,45:1.
      </Callout>

      <Divider />

      <SectionTitle>Le process, et son coût réel</SectionTitle>
      <Body>
        Une équipe d&apos;agents — PM → PO → Tech Lead ‖ 3 designers → critique — chacun avec un modèle choisi selon le coût de son erreur. Le même pipeline que le projet Agents Team.
      </Body>

      <CostGrid>
        {COSTS.map((c) => (
          <CostCard key={c.value} value={c.value} label={c.label} />
        ))}
      </CostGrid>

      <BulletedList
        items={[
          "<b style='color:#e4e4e7'>Le coût est dans les décisions</b> : onze centimes de conception, zéro de code — mais trois allers-retours de design, parce que le brief ne disait pas ce qu'il interdisait.",
          "<b style='color:#e4e4e7'>Un modèle ne mesure pas</b> : le calcul de contraste est passé dans un script, et le goût est redevenu une décision humaine.",
          "<b style='color:#e4e4e7'>La critique vaut mieux que la génération</b> : le même pipeline qui produit trois directions moyennes produit une critique utile.",
        ]}
      />

      <Divider />

      <SectionTitle>Ce qui est livré, ce qui ne l&apos;est pas</SectionTitle>
      <Box sx={{ display: "grid", gap: 2, mb: 6 }}>
        <Limite tag="Livré et vérifié">5 écrans, thèmes clair et sombre, notation fonctionnelle de bout en bout, build iOS réussi, TypeScript et ESLint à 0 erreur.</Limite>
        <Limite tag="Absent, volontairement">API Open Library / Google Books, persistance des notes, scan ISBN, tests automatisés.</Limite>
      </Box>

      <CtaRow>
        <GhostButton href="https://github.com/jennafauconnier/spine">
          <GitHubIcon sx={{ mr: 1, fontSize: 18 }} />
          Code et journal d&apos;itérations
        </GhostButton>
        <TextButton href="/projects/spine">Retour à la fiche projet</TextButton>
      </CtaRow>
    </Shell>
  );
}
