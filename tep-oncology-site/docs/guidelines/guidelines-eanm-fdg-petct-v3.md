---
sidebar_position: 1
title: "Guidelines EANM 2025 : TEP au [¹⁸F]FDG en oncologie (v3.0)"
description: "Synthèse des nouvelles recommandations EANM pour l'imagerie tumorale en TEP/TDM au [¹⁸F]FDG : préparation patient, activité injectée, reconstruction EARL 2, quantification SUV/SUL/MTV/TLG, ratio tumeur/foie, intervalles post-traitement"
authors:
  - name: Dr T. Henry
    role: Médecin nucléaire
  - name: Claude
    role: Assistant IA
---

# Guidelines EANM 2025 : TEP au [¹⁸F]FDG en oncologie (v3.0)

---

:::tip Outil interactif disponible
Un assistant interactif accompagne ce cours : [Assistant TEP FDG](/outils/assistant-tep-fdg) — arbre décisionnel diabète, vérification glycémie, checklist pré-injection, PDC iodé et plus.
:::

## 1. Introduction

La TEP/TDM au [¹⁸F]FDG est l'examen d'imagerie fonctionnelle le plus utilisé en oncologie. Elle intervient à toutes les étapes de la prise en charge : diagnostic, staging, évaluation de la réponse thérapeutique, détection de récidive et planification de la radiothérapie.

En septembre 2025, l'EANM a publié la **version 3.0** de ses recommandations de procédure pour l'imagerie tumorale au [¹⁸F]FDG (Boellaard et al., *The EANM Journal*). Cette mise à jour, la première en 10 ans, intègre les évolutions technologiques majeures de la dernière décennie : systèmes digitaux, scanners à grand champ axial, nouvelles méthodes de reconstruction, intelligence artificielle pour la segmentation tumorale.

Ce cours est structuré autour de trois axes :

- La **préparation du patient** : quoi de neuf en 2025 ?
- La **technique d'acquisition et de reconstruction** : standards EARL 2 et adaptation aux nouveaux systèmes
- La **quantification** : SUV, SUL, MTV, TLG, ratio tumeur/foie

---

## 2. Objectifs des guidelines : répétabilité et reproductibilité

La TEP est une technique d'imagerie **quantitative**. La valeur clinique des mesures semi-quantitatives (SUV) repose sur deux propriétés fondamentales :

| Propriété | Définition | Enjeu |
|-----------|-----------|-------|
| **Répétabilité** | Même résultat chez le même patient, examiné deux fois sur le même système | Suivi longitudinal dans un centre |
| **Reproductibilité** | Même résultat chez le même patient, examiné sur des systèmes différents | Essais multicentriques, transfert de patients |

Sans standardisation, les valeurs de SUV ne sont **pas comparables** d'un centre à l'autre ni d'un système à l'autre. C'est pourquoi ces guidelines visent spécifiquement l'**harmonisation des SUV en contexte multicentrique**.

:::info Pourquoi c'est important en pratique
Un patient suivi pour un lymphome dans un centre équipé d'un ancien système analogique, puis transféré dans un centre avec un scanner digital à grand champ axial, pourrait présenter des valeurs de SUV très différentes pour une même activité tumorale si les deux systèmes ne sont pas harmonisés. Cela peut fausser l'évaluation de la réponse (score de Deauville, PERCIST).
:::

---

## 3. Préparation du patient : ce qui change en 2025

### 3.1 Préparation standard

Les principes fondamentaux sont maintenus :

- **Jeûne** ≥ 4h (idéalement 6h) avant l'injection
- **Hydratation** : 1 L d'eau dans les 2h précédant l'injection
- **Repos musculaire** : patient assis ou allongé, silencieux pendant la phase de captation (particulièrement important en ORL)
- **Maintien au chaud** : commencer 30–60 min avant l'injection, poursuivre pendant toute la phase de captation et le scan (réduction de la captation de la graisse brune)
- **Pas d'exercice physique** intense dans les 6h (idéalement 24h) précédant l'examen
- **Miction** immédiatement avant l'acquisition

:::warning Boissons « sans sucre »
Le café et les boissons caféinées sont déconseillés, même « sans sucre », car ils peuvent contenir des traces de glucides simples et avoir des effets stimulants. Seule l'eau plate non aromatisée est autorisée pendant le jeûne.
:::

### 3.2 Glycémie : seuils actualisés

La glycémie doit être mesurée **avant chaque injection** de [¹⁸F]FDG. Les seuils diffèrent selon le contexte :

| Contexte | Seuil maximal | Conduite à tenir si dépassé |
|----------|--------------|---------------------------|
| **Pratique clinique** | < 11 mmol/L (≈ 200 mg/dL) | Reprogrammer (sauf urgence clinique) |
| **Études quantitatives** | 7–8,3 mmol/L (126–150 mg/dL) | Exclure ou reprogrammer selon protocole |
| **Seuil bas** | ≥ 4 mmol/L (≈ 70 mg/dL) | Ne pas injecter si glycémie trop basse |

:::danger Ne jamais injecter d'insuline pour corriger la glycémie
L'insuline modifie la pharmacocinétique et la biodistribution du [¹⁸F]FDG (captation musculaire massive). Pour les patients légèrement au-dessus du seuil, proposer une **hydratation avec déambulation** puis recontrôler la glycémie périodiquement.
:::

#### Correction de la glycémie dans le SUV

La correction du SUV par la glycémie n'est **pas la pratique standard** dans la plupart des centres. Il n'existe pas de preuve claire que cette correction améliore le suivi de réponse par rapport au SUV non corrigé. De plus, le concept de normalisation glycémique suppose une régulation étroite du métabolisme glucidique tumoral, ce qui n'est pas toujours le cas dans les tumeurs malignes.

Néanmoins, la glycémie doit toujours être **enregistrée et rapportée** pour permettre un calcul rétrospectif si nécessaire.

### 3.3 Patients diabétiques

C'est l'un des **changements majeurs** de la version 3.0. Les recommandations pour la gestion du diabète ont été substantiellement révisées, avec des protocoles détaillés selon le type de diabète et le schéma insulinique.

Point important : une hyperglycémie à jeun chez un patient diabétique instable ne constitue **pas une contre-indication absolue**, car elle n'altère pas nécessairement la valeur clinique de l'examen.

#### Diabète de type 2 sous antidiabétiques oraux

L'examen doit être programmé de préférence en **fin de matinée**. Le patient respecte les règles de jeûne standard et continue ses médicaments habituels, avec les exceptions suivantes :

| Classe thérapeutique | Exemples | Conduite à tenir |
|---------------------|----------|-----------------|
| **Metformine** | Metformine, Glucophage | Continuer normalement (sauf si PDC iodé ET eGFR < 30) |
| **Sulfamides hypoglycémiants** | Gliclazide, glipizide | **Omettre** pendant le jeûne, reprendre après le scan avec un repas |
| **Glinides** | Répaglinide | **Omettre** pendant le jeûne |
| **Glitazones** | Pioglitazone | **Omettre** pendant le jeûne |
| **Inhibiteurs DPP-4** (gliptines) | Sitagliptine | **Omettre** pendant le jeûne |
| **Acarbose** | Acarbose | **Omettre** pendant le jeûne |
| **Inhibiteurs SGLT2** | Dapagliflozine, empagliflozine | Continuer si patient **bien hydraté** |

#### Diabète de type 2 sous agonistes GLP-1

Les agonistes du récepteur GLP-1 (sémaglutide, dulaglutide, liraglutide…) peuvent être **pris normalement** à condition que le patient soit bien hydraté.

#### Diabète de type 1 et diabète de type 2 insulinotraité

:::warning HbA1c et faisabilité
Les patients avec une **HbA1c > 58 mmol/mol (7,5 %)** auront probablement des difficultés à atteindre les glycémies cibles pour l'examen. Pour les patients porteurs d'un **capteur de glucose en continu (CGM)**, les données du capteur peuvent être consultées et discutées avec l'équipe diabétologique pour déterminer le timing optimal et les ajustements pré-scan.
:::

La programmation de l'examen dépend du schéma insulinique :

**Insuline basale intermédiaire** (ex. Insulatard, Humulin I) **ou insuline prémixée** (ex. NovoMix 30, Humulin M3, Humalog Mix) :

| Type de patient | Conduite à tenir |
|----------------|-----------------|
| DT2 | Omettre l'injection d'insuline du matin. Scanner à jeun. Après le scan : injecter **60 % de la dose habituelle** puis manger |
| DT1 | Scanner impérativement **avant 10h** (absence d'insuline = montée rapide de la glycémie). Modification de dose à anticiper **en liaison avec le diabétologue** |

**Insuline basale longue durée** (ex. Lantus, Toujeo, Tresiba) :

| Horaire habituel d'injection | Conduite à tenir |
|-----------------------------|-----------------|
| **Le matin** | Omettre la dose le matin du scan. Injecter la dose habituelle après le scan |
| **Le soir** | Injecter normalement la veille. Scanner selon le protocole standard. Si DT2 avec risque d'hypoglycémie à jeun : réduire la dose du soir à **80 % de la dose habituelle** |

**Insuline basale hebdomadaire** (ex. insuline icodec, insuline efsitora) :

> Programmer l'examen au **jour 6, 7 ou 8 après la dernière injection** d'insuline basale hebdomadaire.

:::danger Insulines rapides
Les **insulines rapides** (analogues rapides : lispro, asparte, glulisine) ne doivent **jamais être injectées le matin du scan** avant la réalisation de l'examen. Elles peuvent être reprises après le scan avec le repas.
:::

#### Patients sous pompe à insuline ou boucle fermée hybride

Les pompes à insuline (CSII) et les systèmes de boucle fermée hybride (hybrid closed loop) nécessitent une prise en charge spécifique :

- Programmer l'examen **tôt le matin** si possible
- **Maintenir la pompe au débit basal** pour assurer l'euglycémie
- **Ne pas administrer de bolus** avant le scan
- Après le scan : reprendre le schéma normal (bolus + repas)

:::info Pompe à insuline : points pratiques
La pompe à insuline délivre en continu de l'insuline rapide à faible débit (débit basal). Ce débit basal maintient la glycémie stable à jeun sans provoquer l'hypercaptation musculaire massive qu'entraînerait un bolus d'insuline rapide. Le principe est de **ne modifier que le minimum nécessaire** : pas de bolus, pas de correction, pas de suspension de la pompe (qui exposerait à une hyperglycémie rapide chez le DT1). La boucle fermée hybride peut être maintenue en mode automatique si elle maintient l'euglycémie.
:::

#### Synthèse : arbre décisionnel diabète

```
Patient diabétique
├── DT2 sous ADO seuls → Continuer ADO (sauf sulfamides/glinides : omettre à jeun)
├── DT2 sous GLP-1 RA → Continuer normalement
├── DT1 ou DT2 insulinotraité
│   ├── Insuline basale intermédiaire/prémixée
│   │   ├── DT2 : omettre le matin, 60% dose après scan
│   │   └── DT1 : scanner < 10h, ajustement avec diabétologue
│   ├── Insuline basale longue
│   │   ├── Injection matinale : omettre, reprendre après scan
│   │   └── Injection vespérale : injecter normalement (DT2 : réduire à 80% si risque hypo)
│   ├── Insuline basale hebdomadaire : scanner J6-J8 post-injection
│   └── Pompe à insuline / boucle fermée
│       └── Scanner tôt le matin, maintenir débit basal, pas de bolus
└── Dans TOUS les cas : PAS d'insuline rapide le matin avant le scan
```

### 3.4 Inhibiteurs SGLT2 : précisions 2025

Les **inhibiteurs SGLT2** (dapagliflozine, empagliflozine, canagliflozine) font l'objet de recommandations nuancées dans cette version :

- **Chez les patients diabétiques** : ils peuvent être **pris normalement** à condition que le patient soit **bien hydraté** (fichier supplémentaire 1)
- **Impact sur l'imagerie** : ils modifient la captation rénale et vésicale du [¹⁸F]FDG. Si cette captation pose un problème d'interprétation (évaluation pelvienne notamment) : interrompre **48h avant et 48h après** l'examen (texte principal)
- **Risque d'acidocétose euglycémique** péri-procédurale chez les patients insuffisamment hydratés

:::tip En résumé pour les SGLT2
La conduite à tenir dépend de la **question clinique** : si l'évaluation pelvienne est cruciale et que l'activité urinaire risque de gêner l'interprétation, l'interruption temporaire est justifiée. Dans les autres cas, la poursuite du traitement avec une bonne hydratation est acceptable.
:::

### 3.5 Produit de contraste iodé et metformine

Pour les examens combinant TEP et TDM diagnostique avec injection de produit de contraste, les guidelines reprennent les recommandations ESUR actualisées :

| Situation | Conduite à tenir pour la metformine |
|-----------|-------------------------------------|
| eGFR > 30 mL/min/1.73 m² | Continuer la metformine normalement |
| eGFR < 30 mL/min/1.73 m² ou insuffisance rénale aiguë | Arrêter la metformine au moment de l'injection. Contrôler l'eGFR à 48h. Reprendre si fonction rénale stable |

### 3.6 Grossesse et allaitement

| Situation | Recommandation |
|-----------|---------------|
| **Grossesse** (TEP indispensable) | Activité ultra-faible + durée d'acquisition prolongée + TDM ultra-basse dose, de préférence sur scanner à grand champ axial |
| **Allaitement** | Pas d'interruption nécessaire (ICRP). Limiter le contact mère-enfant pendant **4h**. Possibilité de tirer le lait pour les 12h suivantes |

### 3.7 Suppression de la captation myocardique

Pour l'évaluation de lésions cardiaques ou péricardiques, les guidelines recommandent un **régime pauvre en glucides pendant 24h** (ou au minimum un repas pauvre en glucides avant le début de la période de jeûne de 6h) pour orienter le métabolisme myocardique vers les acides gras.

### 3.8 Réduction de la captation de la graisse brune

Plusieurs agents ont été évalués :

- Diazépam 5 mg IV, 10 min avant l'injection
- Propranolol 80 mg per os, 2h avant l'injection

Les résultats restent **contradictoires**. La mesure la plus efficace reste le maintien du patient **au chaud** avant et pendant toute la procédure.

---

## 4. Administration du [¹⁸F]FDG et temps de captation

### 4.1 Temps de captation

L'intervalle recommandé entre l'injection du [¹⁸F]FDG et le début de l'acquisition est de **60 minutes**, avec une fourchette acceptable de **55 à 75 minutes**.

:::danger Reproductibilité du temps de captation
Lors d'examens de suivi (évaluation de la réponse), le temps de captation doit être reproduit à **± 10 minutes** par rapport à l'examen de référence. Il est également recommandé d'utiliser le **même système TEP/TDM** avec des **paramètres d'acquisition et de reconstruction identiques**.
:::

### 4.2 Administration et contrôle qualité de l'injection

Quelques points pratiques importants issus du fichier supplémentaire :

- Rincer la ligne d'injection avec **au moins 10 mL de NaCl 0,9 %** (pas de soluté glucosé)
- **Mesurer l'activité résiduelle** dans les lignes et la seringue pour calculer l'activité nette injectée
- En cas de système d'injection automatisé : l'activité nette administrée doit être précise à **± 3 %**
- En cas de **suspicion d'extravasation** : signaler le problème et imager le site d'injection
- Vérifier soigneusement la saisie des données patient dans la console (poids, taille, activité injectée, heure d'injection vs heure de calibration de l'activité)
- La **correction de décroissance** doit être activée

### 4.3 Conditions d'attente

Pendant la phase de captation (60 min post-injection) :

- Patient au repos, allongé ou assis, **silencieux**
- Environnement calme et **chaud** (couvertures supplémentaires si nécessaire)
- Possibilité d'aller aux toilettes > 30 min après l'injection
- Miction **5 min avant** le début de l'acquisition
- Hydratation complémentaire possible : 500 mL d'eau supplémentaires si l'activité vésicale/urétérale est une préoccupation (ou NaCl IV si hydratation orale impossible, sous réserve de la fonction rénale et cardiaque)

---

## 5. Activité injectée et acquisition

### 5.1 Systèmes anciens vs nouveaux systèmes

Les recommandations d'activité des versions précédentes (schéma linéaire ou quadratique en fonction du poids) restent valables pour les systèmes à **champ axial court** (< 35 cm) et les systèmes **analogiques**.

**Schéma linéaire** (recouvrement de lit ≤ 30 %) :

> [¹⁸F]FDG (MBq) = 14 × poids (kg) / durée par position de lit (min)

*Exemple : patient de 85 kg, 3 min/lit → 14 × 85 / 3 = 396 MBq*

**Schéma quadratique** (compense mieux l'atténuation chez les patients > 75 kg) :

> [¹⁸F]FDG (MBq) = 1 050 × (poids/75)² / durée par position de lit (min)

*Exemple : patient de 85 kg, 3 min/lit → 1 050 × (85/75)² / 3 = 450 MBq*

Pour les systèmes avec recouvrement de lit > 30 %, diviser les coefficients par 2 (7 au lieu de 14, 525 au lieu de 1 050).

:::danger Attention aux systèmes récents
Pour les **systèmes digitaux** et/ou à **grand champ axial**, ces activités sont **trop élevées**. Les guidelines recommandent fortement de suivre la procédure EARL pour déterminer l'activité optimale pour chaque système.
:::

**Notes pratiques** issues du fichier supplémentaire :

- **Patients > 90 kg** : augmenter la durée d'acquisition plutôt que l'activité. Ne pas dépasser 530 MBq sur les systèmes L(Y)SO
- **Hors thorax/abdomen** (tête, cou, jambes) : la durée par position de lit peut être réduite de 50 % (atténuation moindre). Pour les systèmes à mouvement continu : vitesse doublée hors thorax/abdomen
- L'activité injectée ne doit jamais dépasser la **capacité de comptage en crête** du système
- Des **limites maximales nationales** d'activité peuvent s'appliquer

### 5.2 Pédiatrie

L'activité injectée chez l'enfant doit respecter les recommandations EANM/SNMMI pédiatriques. Avec les systèmes à grand champ axial et haute sensibilité, des réductions supplémentaires d'activité (et donc de dose) sont envisageables, mais les données restent insuffisantes pour des recommandations claires.

---

## 6. Reconstruction d'image : EARL 2 comme standard

### 6.1 Standards de reconstruction

La version 3.0 consacre les **standards EARL 2** comme référence pour l'harmonisation quantitative :

| Aspect | Recommandation |
|--------|---------------|
| **Standard de référence** | EARL 2 (y compris pour les systèmes à grand champ axial) |
| **Time-of-flight** | Utiliser quand disponible |
| **Modélisation de la résolution (PSF)** | Autorisée, mais nécessite un filtrage supplémentaire pour respecter EARL 2 |
| **Filtre spatial maximal** | FWHM ≤ 7 mm (même pour atténuer les artefacts de Gibbs) |
| **Double reconstruction** | Recommandée : une reconstruction EARL 2 (quantification) + une reconstruction optimisée (lecture visuelle) |

:::info Cas particulier des lymphomes
Pour l'évaluation de la réponse dans les lymphomes (score de Deauville), les reconstructions conformes à **EARL 1** peuvent encore être utilisées afin d'éviter un **biais positif** dans les scores qui pourrait conduire à une escalade thérapeutique non justifiée, sur la base d'essais cliniques ayant établi leurs données avec des technologies de reconstruction plus anciennes.
:::

### 6.2 Corrections obligatoires

Toutes les corrections suivantes doivent être appliquées pendant la reconstruction :

- Normalisation (réponse géométrique et efficacité des détecteurs)
- Temps mort du système
- Coïncidences fortuites
- Diffusé
- Atténuation (par les données TDM)

### 6.3 Images non corrigées de l'atténuation

Les images **sans correction d'atténuation** (NAC-PET) doivent être disponibles pour l'interprétation. Elles permettent d'identifier les artefacts liés aux :

- Mouvements du patient entre TEP et TDM
- Implants métalliques
- Produit de contraste iodé concentré

---

## 7. Quantification : SUV, SUL et nouvelles métriques

### 7.1 SUV et SUL

Le **SUL** (SUV normalisé à la masse maigre) est recommandé comme mesure quantitative de référence, en complément du SUV classique (normalisé au poids).

**Formule du SUL :**

> SUL = Activité VOI (kBq/mL) / [Activité injectée (MBq) / Masse maigre (kg)]

La masse maigre est calculée selon la formule de **Janmahasatian**, préférée aux anciennes formules de James (qui échouent au-delà de 120 kg) :

| Sexe | Formule |
|------|---------|
| Homme | LBM = 9 270 × poids / (6 680 + 216 × IMC) |
| Femme | LBM = 9 270 × poids / (8 780 + 244 × IMC) |

:::tip Pourquoi préférer le SUL ?
Le SUL est particulièrement recommandé pour les **études de suivi de réponse** où le poids corporel peut varier significativement au cours du traitement (perte de poids liée à la maladie ou au traitement, prise de poids sous corticoïdes…). Le SUV classique, normalisé au poids total, sera artificiellement modifié par ces variations pondérales.
:::

### 7.2 SUVpeak vs SUVmax

| Métrique | Définition | Avantages | Inconvénients |
|----------|-----------|-----------|---------------|
| **SUVmax** | Valeur du voxel unique le plus intense | Simple, largement disponible | Sensible au bruit, varie avec la qualité d'image |
| **SUVpeak** | Moyenne dans un VOI sphérique de 1 mL (⌀ 1,2 cm), positionné pour maximiser la valeur | **Moins sensible au bruit**, plus reproductible | Nécessite un logiciel adapté |

**Les guidelines recommandent le SUVpeak** pour les mesures quantitatives, car il est moins affecté par les variations de bruit et de qualité d'image entre patients et entre systèmes. Le SUVmax reste accepté et largement utilisé.

### 7.3 Volume métabolique tumoral (MTV) et TLG

Les guidelines soulignent l'importance croissante du **MTV** et du **TLG** (total lesion glycolysis) pour le pronostic et la prédiction de réponse :

| Métrique | Définition | Intérêt |
|----------|-----------|---------|
| **MTV** | Volume du VOI tumoral (ou somme des VOIs) | Pronostic, charge tumorale |
| **TLG** | SUVmean × MTV | Combine intensité métabolique et volume |

**Pour les lymphomes agressifs au bilan initial** : seuil absolu de **SUV ≥ 4,0** avec volume lésionnel minimal de **3 mL** comme méthode de référence pour la mesure du MTV.

:::warning Vérification des segmentations automatiques
Tout VOI généré automatiquement (seuillage, IA) **doit être vérifié visuellement et corrigé manuellement** si nécessaire. Les sources d'erreur incluent : fixation physiologique adjacente (cœur, vessie), faible contraste tumeur/fond, bruit.
:::

### 7.4 Ratio tumeur/foie (TLR)

**Nouveauté importante** de la version 3.0 : les guidelines introduisent le **ratio tumeur/foie** (TLR) comme outil de normalisation.

**Formule recommandée :**

> TLR = SUVpeak (lésion) / SUVmean (foie, VOI sphérique de ⌀ 3 cm dans le lobe droit)

**Intérêt** : le TLR permet d'atténuer certaines incertitudes techniques, car les facteurs suivants s'annulent dans le ratio :

- Erreur d'activité injectée
- Erreur de poids du patient
- Désynchronisation des horloges
- Erreur de calibration du système TEP/TDM

:::warning Limites du TLR
Le TLR n'est **pas nécessairement plus reproductible** que le SUV. De nombreux facteurs techniques et biologiques affectent la captation hépatique (stéatose, chimiothérapie hépatotoxique, état métabolique). La fiabilité du SUV hépatique doit être vérifiée pour chaque étude.
:::

**Exception** : pour le score de Deauville, le TLR utilise actuellement le **SUVmax** de la lésion et du foie (et non le SUVpeak), bien que cela puisse évoluer.

---

## 8. Contrôle qualité : valeurs de référence hépatiques et médiastinales

Les guidelines fournissent des valeurs de référence pour vérifier la qualité technique de l'examen :

| Mesure | Localisation du VOI | SUL attendu | SUV attendu |
|--------|---------------------|-------------|-------------|
| **Foie** | Sphère ⌀ 3 cm, lobe droit supérieur | 1,0 – 2,2 | 1,3 – 3,0 |
| **Médiastin** (pool sanguin) | Aorte thoracique (éviter les parois) | ≈ 1,2 | ≈ 1,6 |

:::danger Valeurs hors normes
Des SUV ou SUL hépatiques en dehors de ces fourchettes doivent alerter sur un **problème technique** (erreur d'activité injectée, extravasation, erreur de calibration, désynchronisation des horloges) et conduire à **reconsidérer la fiabilité de l'analyse quantitative** de l'examen.
:::

---

## 9. Intervalles post-traitement

Le timing de la TEP/TDM au [¹⁸F]FDG par rapport aux traitements est un facteur critique pour éviter les faux positifs liés à l'inflammation post-thérapeutique :

| Traitement | Délai minimal recommandé | Justification |
|------------|-------------------------|---------------|
| **Chimiothérapie** | ≥ 10 jours (idéalement juste avant le cycle suivant) | Pic d'infiltration macrophagique quelques jours après la cure |
| **Radiothérapie** | 2–3 mois | Inflammation radio-induite visible en TEP jusqu'à 2–3 mois (ORL) |
| **Chirurgie** | ≥ 6 semaines | Inflammation post-opératoire du champ et des relais ganglionnaires adjacents |
| **G-CSF / GM-CSF** | > 2 semaines | Hyperfixation médullaire diffuse, durée variable selon la formulation |

:::info Effet des facteurs de croissance
L'activation médullaire par les facteurs de croissance (G-CSF, GM-CSF) entraîne une captation diffuse du [¹⁸F]FDG dans la moelle osseuse qui peut persister plus de 2 semaines. Elle ne doit pas être confondue avec un envahissement médullaire.
:::

---

## 10. Distribution physiologique du [¹⁸F]FDG

La connaissance de la biodistribution normale est indispensable pour éviter les faux positifs :

| Organe/tissu | Captation physiologique | Pièges |
|-------------|------------------------|--------|
| **Cerveau** | Très intense (≈ 7 % de l'activité injectée) | Limite la détection des métastases cérébrales |
| **Myocarde** | Variable (jeûne = faible, post-prandial = intense) | Préparation pauvre en glucides si évaluation péricardique |
| **Reins / voies urinaires** | Excrétion du [¹⁸F]FDG | Artefacts pelviens, nécessité d'une bonne hydratation |
| **Muscles** | Faible à modéré | Augmentée par exercice, insuline, alimentation |
| **Graisse brune** | Variable (sujets jeunes, minces, temps froid) | Maintien au chaud ++ |
| **Anneau de Waldeyer** | Captation lymphoïde physiologique | Ne pas confondre avec une atteinte tumorale |
| **Iléon terminal / cæcum** | Tissu lymphoïde | Variabilité interindividuelle |
| **Thymus** | Fréquent chez enfants et jeunes adultes | Rebond thymique post-chimiothérapie |
| **Moelle osseuse** | Variable | Augmentée par G-CSF, infection, anémie |
| **Côlon** | Variable, augmentée sous metformine | Piège fréquent |

:::danger Métastases cérébrales
En raison de la captation physiologique intense du cerveau, la TEP au [¹⁸F]FDG **ne doit pas être utilisée** pour la détection ou l'exclusion primaire des métastases cérébrales.
:::

---

## 11. Artefacts et pièges techniques

### 11.1 Implants métalliques

Les implants métalliques provoquent des artefacts sévères sur le TDM qui se propagent aux images TEP corrigées de l'atténuation. Même avec les techniques de réduction d'artefacts métalliques (MAR), la quantification au voisinage de l'implant reste **non fiable**. Toujours vérifier les images NAC-PET.

### 11.2 Troncature du champ de vue TDM

Le champ de vue radial du TDM est souvent plus petit que celui de la TEP. La troncature des données TDM entraîne des artefacts de reconstruction et une quantification **erronée**, pouvant aussi affecter la correction du diffusé. L'utilisation de champs de vue étendus est recommandée.

### 11.3 Synchronisation des horloges

Tous les horloges (système TEP/TDM, activimètre de l'hôpital, activimètre du laboratoire externe de radiopharmacie) doivent être **synchronisées à ± 1 minute** de l'heure officielle locale. Une désynchronisation introduit une erreur systématique dans la correction de décroissance et donc dans le SUV.

---

## 12. Dosimétrie

| Composante | Dose typique |
|-----------|-------------|
| [¹⁸F]FDG (185 MBq) | ≈ 3 mSv (coefficient : 1,7 × 10⁻² mSv/MBq) |
| TDM basse dose (atténuation seule) | 1–3 mSv |
| TDM diagnostique avec contraste | jusqu'à 20 mSv (voire plus) |
| **Total examen** | **4–23 mSv** selon le protocole TDM |

Les avancées technologiques récentes (systèmes digitaux, grand champ axial, TDM ultra-basse dose) permettent des **réductions significatives** de la dose totale.

---

## 13. Points clés

:::tip Points clés
- **EARL 2** est le standard de référence pour l'harmonisation quantitative, y compris pour les systèmes à grand champ axial
- Les **activités injectées** doivent être adaptées aux systèmes récents (digitaux, grand champ axial) — les anciennes recommandations surestiment souvent la dose
- Le **SUVpeak** est préféré au SUVmax pour une quantification plus robuste et moins sensible au bruit
- Le **SUL** (normalisé à la masse maigre, formule de Janmahasatian) est recommandé, en particulier pour le suivi de réponse
- Le **MTV** et le **TLG** gagnent en importance clinique, en particulier dans les lymphomes (seuil SUV ≥ 4 et volume ≥ 3 mL pour le MTV au bilan initial des lymphomes agressifs)
- Le **ratio tumeur/foie** (TLR) est introduit comme outil complémentaire, mais n'est pas nécessairement plus reproductible que le SUV
- **Patients diabétiques** — gestion individualisée selon le schéma thérapeutique :
  - DT2 sous ADO : omettre sulfamides/glinides/gliptines/acarbose à jeun, continuer metformine et SGLT2 (si bien hydraté)
  - DT1/DT2 insulinotraité : **jamais d'insuline rapide le matin avant le scan**
  - Insuline basale hebdomadaire (icodec, efsitora) : scanner J6-J8 post-injection
  - **Pompe à insuline** : maintenir le débit basal, pas de bolus, scanner tôt le matin
  - CGM : exploiter les données du capteur pour optimiser le timing
- Les **inhibiteurs SGLT2** peuvent être continués si bonne hydratation ; arrêt 48h avant/après seulement si l'activité urinaire gêne l'interprétation
- **Temps de captation** : 60 min (55–75 acceptable), reproductibilité à ± 10 min en suivi longitudinal
- Les **variations de SUV hépatique** hors normes (SUL < 1,0 ou > 2,2) doivent alerter sur un problème technique
- Les **scores de Deauville** (lymphomes) peuvent encore utiliser les reconstructions EARL 1 pour éviter un biais positif
- **Ne jamais utiliser** la TEP [¹⁸F]FDG pour la détection primaire des métastases cérébrales
- Les segmentations automatiques (seuillage ou IA) doivent **toujours être vérifiées visuellement**
:::

---

## Référence

Boellaard R, Herrmann K, Barrington SF, et al. [¹⁸F]FDG PET/CT: EANM procedure guidelines for tumour imaging: version 3.0. *The EANM Journal*. 2025;1:100006. [DOI](https://doi.org/10.1016/j.eanmj.2025.100006)
