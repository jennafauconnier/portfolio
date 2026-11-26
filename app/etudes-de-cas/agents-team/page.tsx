"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

import {
  BackLink,
  Body,
  BulletedList,
  Callout,
  CostCard,
  CostGrid,
  CtaRow,
  Divider,
  Fence,
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

const COSTS = [
  { value: "0,50 $", label: "budget plafonné par run, pour toute l'équipe" },
  { value: "jusqu'à ×5", label: "corrections : seul le côté fautif est refait, avec un modèle plus fort" },
  { value: "0 $", label: "l'exécution des tests, en local, sans aucun appel API" },
];

export default function AgentsTeamCaseStudy() {
  return (
    <Shell>
      <BackLink href="/projects/agents-team" />

      <Kicker>Étude de cas · pipelining LLM</Kicker>
      <Title>Une équipe produit d&apos;agents qui livre du code testé</Title>
      <Lede>
        Sept rôles — PM, PO, Tech Lead, deux devs, QA — qui transforment une phrase en cadrage, user stories,
        plan technique, code et tests exécutés. Chaque rôle a son modèle, choisi par le prix de son erreur.
        Environ 200 lignes de Python, zéro dépendance.
      </Lede>

      <Meta
        items={[
          ["Rôle", "Conception, orchestration, coût"],
          ["Stack", "Python (stdlib) · OpenRouter"],
          ["Livré", "équipe 7 rôles, pipeline testé"],
          ["Coût API", "plafonné à 0,50 $ / run"],
        ]}
      />

      <Divider />

      <SectionTitle>Le constat</SectionTitle>
      <Body>
        Une équipe produit entière est hors de portée d&apos;une personne ; un seul modèle n&apos;a pas toutes les
        compétences. Et l&apos;erreur ne se paie pas au même prix selon l&apos;étape où elle arrive.
      </Body>

      <Box sx={{ display: "grid", gap: 2, mb: 4 }}>
        <TwoCol
          a="Une équipe produit coûte cher, et un seul modèle n'est ni assez fort au bon endroit ni assez précis au début"
          b="Découper les rôles, et choisir un modèle par étape plutôt qu'un seul partout."
        />
        <TwoCol
          a="Un modèle fort partout coûte cher ; un modèle faible partout se trompe en silence"
          b="Le prix de l'erreur décide : un modèle bon marché cadre et code, un modèle fort conçoit et vérifie."
        />
        <TwoCol
          a="Une erreur en amont se propage jusqu'à la fin, et le QA qui relit se laisse convaincre"
          b="Un test exécuté vaut mieux qu'un avis : le QA juge sur la sortie réelle des tests, pas sur le code relu."
        />
      </Box>

      <Callout>
        Le QA se laisse convaincre par un code qui a l&apos;air juste. Les tests, non. Un test rouge vaut plus que l&apos;opinion du QA.
      </Callout>

      <SectionTitle>Le pipeline, et pourquoi il ne discute pas</SectionTitle>
      <Body>
        Les agents ne se parlent pas : chacun reçoit les livrables des étapes précédentes. Le Tech Lead découpe
        le plan en « front » et « back », les deux devs travaillent en parallèle, puis les tests du back sont
        exécutés et leur sortie est donnée au QA, qui rend un verdict par côté.
      </Body>

      <Shot src="/images/agents-team/pipeline.png" alt="Schéma du pipeline Agents Team" aspect={640 / 1100} />
      <Box sx={{ height: 16 }} />
      <Fence>{`Demande → PM → PO → Tech Lead ─┬→ Dev front ─┐
                                  └→ Dev back ─┴→ tests → QA ── OK ──→ livré
                                                    └ KO ──→ retour aux devs`}</Fence>

      <Divider />

      <SectionTitle>Le coût, maîtrisé en premier</SectionTitle>
      <Body>
        Le prix est un ingrédient du design, pas une conséquence : un budget tranche, et un modèle plus fort
        n&apos;est appelé que lorsqu&apos;un test ou le QA a échoué.
      </Body>

      <CostGrid>
        {COSTS.map((c) => (
          <CostCard key={c.value} value={c.value} label={c.label} />
        ))}
      </CostGrid>

      <SectionTitle>Ce que le projet apprend</SectionTitle>
      <BulletedList
        items={[
          "<b style='color:var(--c-wash)'>Le QA qui relit se laisse convaincre</b> : il faut exécuter les tests, pas relire le code.",
          "<b style='color:var(--c-wash)'>Un test faux, pas forcément un code faux</b> : quand un test échoue de façon subtile, le QA doit recalculer à la main.",
          "<b style='color:var(--c-wash)'>Les modèles à raisonnement renvoient du vide</b> quand ils épuisent leurs tokens : un repli bascule sur un autre modèle.",
          "<b style='color:var(--c-wash)'>Le budget plafonné</b> empêche d&apos;escalader un modèle fort pour tout, et force à mesurer.",
        ]}
      />

      <Divider />

      <SectionTitle>Ce qui est livré, ce qui ne l&apos;est pas</SectionTitle>
      <Box sx={{ display: "grid", gap: 2, mb: 6 }}>
        <Limite tag="Livré et vérifié">
          Une équipe de 7 rôles orchestrée, un pipeline testé de bout en bout (29 tests verts sur « panier », 796 lignes livrées), et le journal de chaque run — tours, verdicts, modèles, coût — dans un `run.json`.
        </Limite>
        <Limite tag="Absent, volontairement">
          Une interface web, le travail dans un vrai dépôt existant, le découpage automatique des demandes complexes. Tout cela est borné pour la V2.
        </Limite>
      </Box>

      <CtaRow>
        <GhostButton href="https://github.com/jennafauconnier/agents-team">
          <GitHubIcon sx={{ mr: 1, fontSize: 18 }} />
          Code et journal d&apos;itérations
        </GhostButton>
        <TextButton href="/projects/agents-team">Retour à la fiche projet</TextButton>
      </CtaRow>
    </Shell>
  );
}
