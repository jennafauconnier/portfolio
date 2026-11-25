"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

type Row = { problem: string; decision: string };
type Screen = { n: string; title: string; img: string; alt: string; rows: Row[] };

const SCREENS: Screen[] = [
  {
    n: "01",
    title: "Mes livres — la bibliothèque avant le flux",
    img: "/images/spine/case-1-mes-livres-2.png",
    alt: "Écran Mes livres de Spine",
    rows: [
      {
        problem:
          "Chez Goodreads, l'accueil est un flux d'actualités de ses amis ; ce qu'on lit soi-même est relégué.",
        decision:
          "L'écran s'ouvre sur une carte « En cours », seul aplat de couleur de l'app, avec la progression et un bouton « Reprendre ».",
      },
      {
        problem: "Envies et lectures sont dans le même sac d'« étagères ».",
        decision: "Deux blocs distincts : Je veux lire, puis Lus récemment avec la note et la date.",
      },
      {
        problem: "Découvrir demande un onglet séparé, qui prend le pas sur la bibliothèque.",
        decision: "Les suggestions vivent en bas, avec leur motif écrit en clair.",
      },
    ],
  },
  {
    n: "02",
    title: "Chercher — reconnaître, pas lire",
    img: "/images/spine/case-2-chercher-2.png",
    alt: "Écran Chercher de Spine",
    rows: [
      {
        problem: "Liste dense où titre, auteur, année et note se confondent.",
        decision: "Une ligne : couverture, titre, auteur · année, et un seul bouton « Ajouter ».",
      },
      {
        problem: "Aucun filtre rapide, il faut ouvrir un panneau.",
        decision: "Trois pastilles : Tous / Déjà lus / À lire.",
      },
      {
        problem: "La couverture est une vignette de 40 px, alors que c'est ce qu'on reconnaît d'un livre.",
        decision: "Elle ouvre la ligne, à hauteur de lecture, suivie du statut « Déjà lu » ou « Ajouter ».",
      },
    ],
  },
  {
    n: "03",
    title: "La fiche — décider en une hauteur d'écran",
    img: "/images/spine/case-3-fiche-2.png",
    alt: "Écran fiche livre de Spine",
    rows: [
      {
        problem: "Fiche encombrée : séries, éditions, formats, bibliothèques, amis…",
        decision: "Quatre lignes d'information, une note communautaire, un extrait d'avis, un résumé.",
      },
      {
        problem: "L'action principale est un lien texte perdu au milieu de la page.",
        decision: "Un bouton capsule pleine largeur, en bas, dans la zone du pouce.",
      },
      {
        problem: "Ajouter à sa bibliothèque est une autre page.",
        decision: "Un bouton rond « + » à côté du bouton principal.",
      },
    ],
  },
  {
    n: "04",
    title: "La notation — deux gestes, une demi-étoile",
    img: "/images/spine/case-4-notation-b.png",
    alt: "Écran de notation de Spine",
    rows: [
      {
        problem:
          "Les étoiles sont sur la fiche, mais les toucher ouvre une feuille qu'il faut encore valider, et l'échelle reste entière.",
        decision:
          "Une feuille modale par-dessus la fiche : cinq étoiles de 32 pt, le chiffre en 38 pt, deux gestes.",
      },
      {
        problem: "Impossible de mettre 4,5.",
        decision: "La moitié gauche d'une étoile donne la demi-note, et le chiffre géant lève l'ambiguïté.",
      },
      {
        problem: "Avis obligatoire, cases à cocher, formulaire.",
        decision: "Avis facultatif ; spoiler, privé, statut et date sont repliés sous « Plus d'options ».",
      },
    ],
  },
  {
    n: "05",
    title: "Le journal — la trace datée",
    img: "/images/spine/case-5-journal-2.png",
    alt: "Écran Journal de Spine",
    rows: [
      {
        problem: "La note remplace la précédente : aucune trace de ce qu'on a lu avant.",
        decision: "Chaque note crée une entrée, et relire en crée une deuxième au lieu d'écraser la première.",
      },
      {
        problem:
          "Des dates réduites à un jour et un mois (« 08 NOV ») : ni l'année, ni le jour de la semaine, et ça ne raconte rien.",
        decision:
          "Un en-tête de mois (« novembre 2026 »), le jour en gros et le jour de la semaine en clair ; la date complète reste dans le libellé vocal.",
      },
      {
        problem: "Aucun état hors ligne : la note est perdue sans réseau.",
        decision: "Bandeau « Une note attend le réseau » et un statut par entrée.",
      },
      {
        problem: "Thème imposé.",
        decision: "Bascule clair/sombre en icône, sur l'accueil et dans le journal.",
      },
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

const sectionTitle = {
  fontSize: { xs: "1.5rem", md: "1.9rem" },
  fontWeight: 300,
  color: "#ffffff",
  letterSpacing: "-0.02em",
  mb: 1.5,
} as const;

export default function SpineCaseStudy() {
  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Link href="/projects/spine" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} sx={{ mb: 5, color: "#71717a", "&:hover": { color: "#ffffff" } }}>
            Retour au projet
          </Button>
        </Link>

        {/* Hero */}
        <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#2563eb", mb: 2 }}>
          Étude de cas · produit mobile
        </Typography>
        <Typography
          component="h1"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 200, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.03em", mb: 3 }}>
          Refaire les deux gestes que Goodreads rate
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.75, color: "#a1a1aa", maxWidth: 640, mb: 5 }}>
          Noter un livre et le retrouver. Deux gestes quotidiens, trois écrans et un formulaire chez Goodreads.
          Spine les ramène à un pouce, deux taps et une trace datée.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 4 }, mb: 6 }}>
          {[
            ["Rôle", "Produit, UX, dev mobile"],
            ["Stack", "React Native · Expo · TypeScript"],
            ["Livré", "5 écrans, 2 thèmes, iOS"],
            ["Coût API", "0,1135 $ · 8 appels"],
          ].map(([k, v]) => (
            <Box key={k}>
              <Typography sx={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#52525b", mb: 0.5 }}>
                {k}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#e4e4e7" }}>{v}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#27272a", mb: 6 }} />

        {/* Constat */}
        <Typography component="h2" sx={sectionTitle}>
          Le constat
        </Typography>
        <Typography sx={{ color: "#a1a1aa", lineHeight: 1.8, mb: 4, maxWidth: 640 }}>
          Goodreads remplit sa fonction — catalogue, étagères, avis — mais deux parcours y coûtent plus cher
          que le geste qu'ils servent.
        </Typography>

        <Box sx={{ display: "grid", gap: 2, mb: 4 }}>
          {[
            [
              "Noter demande de trouver le livre, d'ouvrir sa fiche, de viser les étoiles — puis une feuille s'ouvre et il faut encore confirmer",
              "Quatre étapes pour un geste. On ne note pas en passant, donc on ne note pas.",
            ],
            [
              "La recherche rend une liste de texte, livre et éditions mélangés",
              "On cherche un livre vu en librairie et on tombe sur une édition de 1994.",
            ],
            [
              "Aucune date : une note écrase la précédente",
              "Impossible de dire « lu en novembre », ni de relire sans perdre l'ancienne note.",
            ],
          ].map(([p, c]) => (
            <Box key={p} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, p: 2, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid #27272a" }}>
              <Typography sx={{ fontSize: "0.95rem", color: "#e4e4e7", lineHeight: 1.6 }}>{p}</Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#a1a1aa", lineHeight: 1.6 }}>{c}</Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={{ color: "#71717a", fontSize: "0.9rem", fontStyle: "italic", borderLeft: "2px solid #2563eb", pl: 2, mb: 8 }}>
          Trois directions artistiques ont été produites puis rejetées avant celle-ci. C'est là qu'on apprend le plus.
        </Typography>

        {/* Écrans */}
        <Typography component="h2" sx={sectionTitle}>
          Cinq écrans, cinq décisions
        </Typography>
        <Typography sx={{ color: "#a1a1aa", lineHeight: 1.8, mb: 5, maxWidth: 640 }}>
          Chaque écran répond à un problème précis. Rien n'est décoratif.
        </Typography>

        <Box sx={{ display: "grid", gap: 7 }}>
          {SCREENS.map((s) => (
            <Box key={s.n} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "280px 1fr" }, gap: { xs: 3, md: 5 }, alignItems: "start" }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", border: "1px solid #27272a", justifySelf: { xs: "center", md: "start" }, width: { xs: "100%", md: 280 }, maxWidth: 300 }}>
                <Image src={s.img} alt={s.alt} width={720} height={1565} style={{ width: "100%", height: "auto", display: "block" }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: "#2563eb", mb: 0.5 }}>{s.n}</Typography>
                <Typography sx={{ fontSize: "1.15rem", fontWeight: 500, color: "#ffffff", mb: 2, letterSpacing: "-0.01em" }}>
                  {s.title}
                </Typography>
                <Box sx={{ display: "grid", gap: 1.5 }}>
                  {s.rows.map((r) => (
                    <Box key={r.problem} sx={{ display: "grid", gap: 0.5, borderLeft: "1px solid #27272a", pl: 2 }}>
                      <Typography sx={{ fontSize: "0.85rem", color: "#71717a", lineHeight: 1.55 }}>{r.problem}</Typography>
                      <Typography sx={{ fontSize: "0.92rem", color: "#d4d4d8", lineHeight: 1.6 }}>{r.decision}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#27272a", my: 8 }} />

        {/* Design system */}
        <Typography component="h2" sx={sectionTitle}>
          Le design system
        </Typography>
        <Typography sx={{ color: "#a1a1aa", lineHeight: 1.8, mb: 3, maxWidth: 640 }}>
          Un seul accent, deux familles typographiques, aucune ombre. La hiérarchie se fait par la couleur
          et l'espace, jamais par des effets.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
          {TOKENS.map((t) => (
            <Box key={t.hex} sx={{ width: 84 }}>
              <Box sx={{ height: 52, borderRadius: 2, backgroundColor: t.hex, border: "1px solid rgba(255,255,255,0.1)" }} />
              <Typography sx={{ fontSize: "0.62rem", color: "#52525b", mt: 0.75, fontFamily: "monospace" }}>{t.hex}</Typography>
              <Typography sx={{ fontSize: "0.62rem", color: "#71717a" }}>{t.label}</Typography>
            </Box>
          ))}
        </Box>

        <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2, color: "#a1a1aa", lineHeight: 1.9, fontSize: "0.95rem", listStyle: "disc" }}>
          <li>Accent cobalt 5,91:1 sur blanc — une seule couleur actionnable</li>
          <li>Space Grotesk 700 pour les titres (22 pt), Inter 400–600 pour l&apos;interface</li>
          <li>Boutons capsule de 52 pt, rayons de 12 pt, zéro ombre</li>
          <li>Thème sombre : encre 16,8:1, accent 7,0:1, texte sur accent 7,3:1</li>
          <li>Accessibilité : cibles ≥ 44 pt, libellés VoiceOver, étoiles en <code>adjustable</code></li>
        </Box>

        <Typography sx={{ color: "#71717a", fontSize: "0.9rem", fontStyle: "italic", borderLeft: "2px solid #2563eb", pl: 2, my: 4 }}>
          Tous les contrastes sont calculés par script. Les modèles de langage se trompent systématiquement
          sur ce calcul : ils annonçaient 4,8:1 pour un couple qui mesure 3,45:1.
        </Typography>

        <Divider sx={{ borderColor: "#27272a", my: 8 }} />

        {/* Process */}
        <Typography component="h2" sx={sectionTitle}>
          Le process, et son coût réel
        </Typography>
        <Typography sx={{ color: "#a1a1aa", lineHeight: 1.8, mb: 4, maxWidth: 640 }}>
          Une équipe d&apos;agents — PM → PO → Tech Lead ‖ 3 designers → critique — chacun avec un modèle
          choisi selon le coût de son erreur.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2, mb: 4 }}>
          {COSTS.map((c) => (
            <Box key={c.value} sx={{ p: 2.5, borderRadius: 2, border: "1px solid #27272a", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", mb: 1 }}>
                {c.value}
              </Typography>
              <Typography sx={{ fontSize: "0.82rem", color: "#71717a", lineHeight: 1.6 }}>{c.label}</Typography>
            </Box>
          ))}
        </Box>

        <Box component="ul" sx={{ pl: 2.5, m: 0, color: "#a1a1aa", lineHeight: 1.9, fontSize: "0.95rem", listStyle: "disc" }}>
          <li>
            <b style={{ color: "#e4e4e7" }}>Le coût est dans les décisions</b> : onze centimes de conception,
            zéro de code — mais trois allers-retours de design, parce que le brief ne disait pas ce qu&apos;il interdisait.
          </li>
          <li>
            <b style={{ color: "#e4e4e7" }}>Un modèle ne mesure pas</b> : le calcul de contraste est passé dans
            un script, et le goût est redevenu une décision humaine.
          </li>
          <li>
            <b style={{ color: "#e4e4e7" }}>La critique vaut mieux que la génération</b> : le même pipeline qui
            produit trois directions moyennes produit une critique utile.
          </li>
        </Box>

        <Divider sx={{ borderColor: "#27272a", my: 8 }} />

        {/* Limites */}
        <Typography component="h2" sx={sectionTitle}>
          Ce qui est livré, ce qui ne l&apos;est pas
        </Typography>
        <Box sx={{ display: "grid", gap: 2, mb: 6 }}>
          <Box sx={{ p: 2.5, borderRadius: 2, border: "1px solid #27272a" }}>
            <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#52525b", mb: 1 }}>
              Livré et vérifié
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#d4d4d8", lineHeight: 1.7 }}>
              5 écrans, thèmes clair et sombre, notation fonctionnelle de bout en bout, build iOS réussi,
              TypeScript et ESLint à 0 erreur.
            </Typography>
          </Box>
          <Box sx={{ p: 2.5, borderRadius: 2, border: "1px solid #27272a" }}>
            <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#52525b", mb: 1 }}>
              Absent, volontairement
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#a1a1aa", lineHeight: 1.7 }}>
              API Open Library / Google Books, persistance des notes, scan ISBN, tests automatisés.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/jennafauconnier/spine"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderColor: "#27272a", color: "#a1a1aa", textTransform: "none", "&:hover": { borderColor: "#3f3f46", color: "#ffffff" } }}>
            Code et journal d&apos;itérations
          </Button>
          <Link href="/projects/spine" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#a1a1aa", textTransform: "none" }}>Retour à la fiche projet</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
