---
sidebar_position: 2
title: "PSMA-VOL : méthodes de segmentation et questions ouvertes"
description: "Détails techniques sur les méthodes de mesure du volume tumoral PSMA-positif (PSMA-VOL) et incertitudes persistantes autour de sa standardisation."
authors:
  - name: Dr T. Henry
    role: Médecin nucléaire
  - name: Claude
    role: Assistant IA
---

# PSMA-VOL : méthodes de segmentation et questions ouvertes

:::info Prérequis
Cette page est un **complément technique** du cours principal sur les [critères d'interprétation de la TEP PSMA](./criteres-interpretation-tep-psma). Le lecteur est supposé familier avec les notions de PSMA-VOL, RECIP 1.0, PPP, et le consensus SPARC qui y sont développés.
:::

---

## 1. Introduction

Le PSMA-VOL — somme des volumes de toutes les lésions PSMA-positives sur l'ensemble du corps — est le biomarqueur quantitatif central de l'évaluation en TEP PSMA. Reconnu par SPARC comme paramètre **obligatoire** dans le mCRPC et **exploratoire** dans les autres contextes [[1]](#ref-1), il est le pivot des critères RECIP 1.0 [[2]](#ref-2).

Pourtant, **aucun consensus international ne définit la méthode de mesure exacte** du PSMA-VOL. Cette page détaille les approches de segmentation décrites dans la littérature, leurs limites, et les questions ouvertes autour de leur standardisation.

---

## 2. Méthodes de segmentation

### 2.1 qPSMA : la méthode de référence historique

Le logiciel **qPSMA**, développé par Gafita et al. [[3]](#ref-3), est l'outil semi-automatique le plus cité dans la littérature et celui utilisé dans les études fondatrices de RECIP 1.0 [[2]](#ref-2). Son workflow en 6 étapes repose sur une segmentation différenciée os/tissus mous.

#### Étape 1 — Masques automatiques

Deux masques sont calculés automatiquement à partir des données CT et PET :

- **Masque osseux** : segmentation du squelette à partir du scanner CT, basée sur les densités de pixels et des opérations morphologiques [[3]](#ref-3)
- **Masque de fixation physiologique** : exclusion des organes à captation physiologique du PSMA (glandes salivaires, reins, foie, rate, intestins, vessie)

#### Étape 2 — Seuil de segmentation des tissus mous (SUV~thr\_st~)

Le seuil pour les lésions des tissus mous (ganglionnaires, viscérales) est **individualisé pour chaque patient**, calculé à partir de l'activité hépatique de fond :

- Un **VOI sphérique de 3 cm** est placé de manière semi-automatique dans le lobe droit du foie, conformément aux recommandations PERCIST [[3]](#ref-3) [[4]](#ref-4)
- Le SUVmean hépatique ainsi mesuré sert de référence : tous les voxels situés en dehors des masques osseux et de fixation physiologique dont le SUV est supérieur à ce seuil sont segmentés comme lésions tumorales
- Une **correction pour l'effet « tumor sink »** est recommandée (cf. [section 3.1](#31-leffet-tumor-sink)) [[3]](#ref-3) [[5]](#ref-5)

Le choix du foie comme référence s'appuie sur les recommandations PROMISE, le foie constituant le seuil de fixation physiologique de référence en TEP PSMA [[6]](#ref-6).

#### Étape 3 — Seuil de segmentation osseuse (SUV~thr\_bone~)

Les métastases osseuses présentent une expression PSMA plus faible que les métastases ganglionnaires [[3]](#ref-3). Pour ne pas les manquer, un **seuil fixe SUV ≥ 3** est appliqué aux voxels situés dans le masque osseux.

:::caution Deux seuils, pas un seul
La distinction entre un seuil adaptatif hépatique (tissus mous) et un seuil fixe (os) est une particularité de qPSMA. Cette double approche n'est **pas universellement adoptée** — certaines équipes utilisent un seuil fixe unique pour toutes les localisations (cf. [section 2.2](#22-alternatives-à-qpsma)).
:::

#### Étape 4 — Corrections manuelles

Des ajustements manuels sont systématiquement nécessaires pour :

- Exclure les **fixations physiologiques** résiduelles (uretères, intestin, glandes lacrymales)
- Corriger les lésions osseuses situées **en dehors du masque osseux** (décalage PET/CT dû à la respiration, effet de spillover)
- Inclure des lésions de faible fixation non capturées par les seuils automatiques

#### Étape 5 — Paramètres de sortie

| Paramètre | Définition | Équivalent FDG |
| --- | --- | --- |
| **PSMA-TV** | Volume de tous les voxels tumoraux PSMA-positifs | MTV |
| **PSMA-TL** | Activité PSMA totale de tous les voxels tumoraux (∑ SUV × volume) | TLG |
| **PSMA SUVmean** | SUV moyen de l'ensemble des voxels tumoraux | — |
| **PSMA SUVmax** | Voxel de fixation maximale | — |

Chaque paramètre peut être calculé **séparément** pour les lésions osseuses (bone-PSMA-TV) et les tissus mous (st-PSMA-TV) [[3]](#ref-3).

#### Performances de qPSMA

| Critère | Résultat |
| --- | --- |
| Variabilité intra-observateur | ICC > 0,990 [[3]](#ref-3) |
| Variabilité inter-observateur | ICC > 0,990 [[3]](#ref-3) |
| Concordance avec logiciel commercial (Syngo.via) | ICC = 1,000 pour PSMA-TV [[3]](#ref-3) |
| Corrélation PSMA-TV / PSA sérique | r = 0,72 (p < 0,001) [[3]](#ref-3) |
| Temps de traitement | ~10 minutes (après apprentissage) [[3]](#ref-3) |

### 2.2 Alternatives à qPSMA

Plusieurs autres approches sont décrites dans la littérature, avec des différences méthodologiques significatives :

#### Seuil fixe SUV ≥ 3 (toutes localisations)

Certaines équipes appliquent un **seuil fixe unique SUV ≥ 3** pour l'ensemble des lésions, indépendamment de leur localisation (os ou tissus mous). Cette méthode simplifiée a été utilisée notamment avec le logiciel **MIM** [[7]](#ref-7).

- **Avantage** : simplicité, reproductibilité, indépendance vis-à-vis de la fixation hépatique
- **Inconvénient** : risque de faux positifs dans les tissus mous (captation physiologique) ou de faux négatifs dans les lésions osseuses de très faible fixation

#### Seuil hépatique + isocontour 50 %

L'approche utilisée par Küper et al. [[8]](#ref-8) combine :

- **Seuil basé sur le SUV peak hépatique** pour identifier les lésions candidates
- **Exclusion des lésions < 0,5 mL** pour limiter les faux positifs
- **Inclusion manuelle** de foyers additionnels de fixation plus faible via un **isocontour à 50 %** du SUVmax lésionnel
- **Ajustement au poids corporel** du volume tumoral total

:::info PSMA-VOL ajusté au poids
L'ajustement du PSMA-VOL au poids corporel, utilisé dans certaines études [[8]](#ref-8), vise à normaliser la charge tumorale entre patients. Cette approche n'est pas encore standardisée et n'est pas requise par RECIP 1.0 ni par SPARC.
:::

#### Plateformes d'intelligence artificielle

Des solutions de segmentation automatique basées sur le deep learning ont émergé :

- **aPROMISE** (EXINI Diagnostics / Lantheus) : segmentation automatique corps entier, identification des lésions et classification selon miTNM. Détecte automatiquement 92 % des lésions identifiées par consensus de lecteurs experts [[9]](#ref-9)
- **Swin UNETR** et autres architectures de type transformeurs : approches de segmentation entièrement automatiques entraînées par apprentissage auto-supervisé sur des données non annotées, avec fine-tuning sur des données annotées [[10]](#ref-10)

Ces outils automatiques présentent un potentiel considérable pour la standardisation, mais leur validation prospective dans le contexte des critères de réponse reste limitée.

### 2.3 Synthèse des méthodes de segmentation

| Méthode | Seuil os | Seuil tissus mous | Logiciel | Références |
| --- | --- | --- | --- | --- |
| **qPSMA** | SUV fixe ≥ 3 | Adaptatif (foie) | qPSMA | [[2]](#ref-2) [[3]](#ref-3) |
| **Seuil fixe unique** | SUV ≥ 3 | SUV ≥ 3 | MIM, autres | [[7]](#ref-7) |
| **Hépatique + isocontour** | SUV peak hépatique | SUV peak hépatique + isocontour 50 % | Propriétaire | [[8]](#ref-8) |
| **IA (aPROMISE)** | Automatique | Automatique | aPROMISE | [[9]](#ref-9) |

:::tip Point clé RECIP Roadmap
Les seuils de RECIP 1.0 (réponse ≥ 30 % de diminution, progression ≥ 20 % d'augmentation du PSMA-VOL) ont été définis comme **« software agnostic »** : ils sont applicables quel que soit l'outil de quantification utilisé [[11]](#ref-11). C'est la variation *relative* du volume qui compte, pas sa valeur absolue.
:::

---

## 3. Facteurs de confusion et limites de la quantification

### 3.1 L'effet « tumor sink »

L'effet tumor sink désigne la **séquestration du radiotraceur par la masse tumorale**, réduisant sa distribution dans les organes normaux [[5]](#ref-5). Concrètement :

- Chez les patients à charge tumorale très élevée (PSMA-VOL ≥ 1 355 mL), le SUVmean des organes de référence (foie, parotides, reins) est abaissé de **34 à 43 %** par rapport aux patients sans lésion PSMA-positive [[5]](#ref-5)
- Cela **modifie le seuil hépatique** utilisé pour la segmentation des tissus mous : le foie apparaît artificiellement « froid », abaissant le seuil et risquant de surestimer le volume tumoral

Une formule de correction intégrée dans qPSMA utilise un SUVmean hépatique de référence de 4,30 (moyenne calculée sur 80 patients consécutifs) pour ajuster le seuil en fonction de la charge tumorale individuelle [[3]](#ref-3).

:::caution Impact clinique
L'effet tumor sink est un problème de **reproductibilité longitudinale**. Si un patient répond au traitement (diminution du PSMA-VOL), la fixation hépatique augmente secondairement, ce qui modifie le seuil de segmentation entre les deux examens. Les méthodes à seuil fixe (SUV ≥ 3) ne sont pas affectées par ce phénomène.
:::

### 3.2 Variabilité liée au traceur

Les trois principaux radiotraceurs PSMA ([⁶⁸Ga]Ga-PSMA-11, [¹⁸F]DCFPyL, [¹⁸F]PSMA-1007) présentent des biodistributions différentes [[1]](#ref-1) :

- **[¹⁸F]PSMA-1007** : excrétion hépatobiliaire dominante, avec fixation hépatique élevée rendant le foie **inutilisable comme référence** et faux positifs osseux fréquents
- **[⁶⁸Ga]Ga-PSMA-11** et **[¹⁸F]DCFPyL** : excrétion rénale prédominante, foie utilisable comme référence

Les seuils de segmentation développés avec un traceur ne sont pas nécessairement transposables à un autre. SPARC recommande d'utiliser le **même traceur** pour la TEP de référence et la TEP de suivi [[1]](#ref-1).

### 3.3 Lésions infracentimétriques et effet de volume partiel

Les petites lésions (< 0,5–1 mL) posent un problème de quantification :

- L'**effet de volume partiel** sous-estime leur SUV réel, risquant de les exclure de la segmentation
- Certaines méthodes excluent explicitement les lésions < 0,5 mL [[8]](#ref-8)
- Le score miPSMA s'applique formellement aux lésions de corrélat TDM > 10 mm [[1]](#ref-1)

En pratique, les foyers millimétrique contribuent peu au PSMA-VOL total chez les patients à charge élevée, mais peuvent constituer l'essentiel de la maladie en récidive biochimique avec faible volume tumoral.

### 3.4 Segmentation corps entier vs lésions cibles

Un frein majeur à l'implémentation clinique de RECIP 1.0 est la nécessité d'une **segmentation corps entier**, processus chronophage même avec les outils semi-automatiques [[11]](#ref-11) [[12]](#ref-12). La question de savoir si une approche par **lésions cibles** (analogue à RECIST) pourrait fournir des résultats comparables reste ouverte [[12]](#ref-12).

---

## 4. Volume tumoral par organe : le PSMAorgan score

### 4.1 Concept

PROMISE V2 recommande de rapporter le volume tumoral **par système d'organes** (local, ganglions pelviens, ganglions à distance, os, viscères) plutôt qu'un PSMA-VOL global unique [[6]](#ref-6). Cette approche repose sur l'observation que la **localisation** des métastases influence leur agressivité biologique et la survie.

### 4.2 Impact pronostique différentiel

L'étude de Küper et al. [[8]](#ref-8) a démontré que le volume tumoral osseux est le paramètre le plus significatif pour la prédiction de la survie globale, tant au bilan initial (HR 3,92) qu'en évaluation de réponse (HR 32,27). En revanche, chez les patients hormonosensibles, c'est le volume ganglionnaire à distance qui est le déterminant principal [[8]](#ref-8).

| Sous-population | Paramètre volumétrique le plus pronostique |
| --- | --- |
| Cohorte totale (baseline) | Volume osseux [[8]](#ref-8) |
| Cohorte totale (réponse) | Volume osseux [[8]](#ref-8) |
| HSPC (réponse) | Volume ganglions à distance [[8]](#ref-8) |

:::info Implication clinique
Ces données suggèrent que les critères de réponse pourraient nécessiter une **pondération différente selon la localisation** des métastases et le stade de la maladie. Une progression volumétrique osseuse n'a pas la même signification pronostique qu'une progression ganglionnaire locorégionale.
:::

---

## 5. Questions ouvertes et perspectives

### 5.1 Quel seuil standardiser ?

C'est la question centrale non résolue. Le tableau ci-dessous résume les positions actuelles :

| Instance | Position sur le seuil |
| --- | --- |
| **SPARC (2025)** | Recommande le PSMA-VOL mais ne prescrit pas de méthode de segmentation [[1]](#ref-1) |
| **RECIP 1.0 Roadmap (2025)** | Seuils de réponse « software agnostic » ; encourage le développement d'outils open source [[11]](#ref-11) |
| **PCWG4 + SPARC** | Pas de critères validés de réponse/progression basés sur les changements de SUV [[1]](#ref-1) |

### 5.2 Critères de réponse au-delà du mCRPC

RECIP 1.0 a été développé et principalement validé chez des patients **mCRPC traités par ¹⁷⁷Lu-PSMA**. Son applicabilité aux autres contextes (HSPC, récidive biochimique, chimiothérapie, ARPI) est en cours d'évaluation [[8]](#ref-8) [[11]](#ref-11). Les données préliminaires montrent des résultats prometteurs sous ARPI [[7]](#ref-7), mais les seuils de variation volumétrique pourraient nécessiter un recalibrage selon le contexte thérapeutique.

### 5.3 Validation prospective

Aucune étude prospective randomisée n'a encore démontré que l'utilisation du PSMA-VOL et des critères RECIP modifie les outcomes cliniques des patients. Les données actuelles sont **rétrospectives et pronostiques** (valeur pronostique), et non prédictives (valeur pour guider la décision thérapeutique) [[2]](#ref-2) [[11]](#ref-11).

### 5.4 Place de l'intelligence artificielle

L'IA représente probablement la voie la plus prometteuse vers la standardisation. Pour que les outils automatiques deviennent le standard, il faudra :

- Une **validation multicritères** sur des cohortes multicentriques avec différents traceurs et scanners
- Une démonstration de la **non-infériorité** par rapport à la segmentation semi-automatique + correction manuelle pour la prédiction de la survie
- Un accès **ouvert et non propriétaire**, conformément aux recommandations SPARC [[1]](#ref-1)

---

## 6. Points clés

:::tip Points clés
- Il n'existe **pas de méthode de segmentation standardisée** pour mesurer le PSMA-VOL — c'est une lacune majeure identifiée par SPARC [[1]](#ref-1)
- La méthode de référence historique (**qPSMA**) utilise deux seuils distincts : SUV fixe ≥ 3 pour l'os, seuil adaptatif basé sur le foie pour les tissus mous [[3]](#ref-3)
- Des **alternatives simplifiées** existent (seuil fixe unique SUV ≥ 3, plateformes IA), mais aucune n'est formellement validée comme standard
- Les seuils de RECIP 1.0 sont **« software agnostic »** : la variation relative du PSMA-VOL (≥ 30 % diminution / ≥ 20 % augmentation) est indépendante de l'outil utilisé [[11]](#ref-11)
- L'**effet tumor sink** peut modifier le seuil hépatique entre les examens et affecter la reproductibilité longitudinale [[5]](#ref-5)
- Le **volume par organe** (notamment osseux) pourrait être plus informatif que le PSMA-VOL global pour certaines sous-populations [[8]](#ref-8)
- Le choix du **traceur** influence la biodistribution et donc les seuils applicables — utiliser le même traceur pour la référence et le suivi [[1]](#ref-1)
- La **segmentation corps entier** reste un frein pratique ; l'approche par lésions cibles n'est pas encore validée [[12]](#ref-12)
- **Aucune validation prospective** ne démontre que l'utilisation du PSMA-VOL modifie les outcomes cliniques [[2]](#ref-2) [[11]](#ref-11)
:::

---

## Références

<a id="ref-1"></a>
1. Herrmann K, Walz J, MacLennan S, et al. SPARC: The Standardised PSMA PET/CT Analysis and Reporting Consensus: A Delphi Analysis. *Eur Urol*. 2025;88(3):282-291.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/40945999/)

<a id="ref-2"></a>
2. Gafita A, Rauscher I, Weber M, et al. Novel Framework for Treatment Response Evaluation Using PSMA PET/CT in Patients with Metastatic Castration-Resistant Prostate Cancer (RECIP 1.0): An International Multicenter Study. *J Nucl Med*. 2022;63(11):1651-1658.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/35422442/)

<a id="ref-3"></a>
3. Gafita A, Bieth M, Krönke M, et al. qPSMA: Semiautomatic Software for Whole-Body Tumor Burden Assessment in Prostate Cancer Using ⁶⁸Ga-PSMA11 PET/CT. *J Nucl Med*. 2019;60(9):1277-1283.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/30850484/)

<a id="ref-4"></a>
4. Wahl RL, Jacene H, Kasamon Y, et al. From RECIST to PERCIST: Evolving Considerations for PET Response Criteria in Solid Tumors. *J Nucl Med*. 2009;50 Suppl 1:122S-150S.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/19403881/)

<a id="ref-5"></a>
5. Gafita A, Wang H, Robertson A, et al. Tumor Sink Effect in ⁶⁸Ga-PSMA-11 PET: Myth or Reality? *J Nucl Med*. 2022;63(2):226-232.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/34049987/)

<a id="ref-6"></a>
6. Seifert R, Emmett L, Rowe SP, et al. Second Version of the Prostate Cancer Molecular Imaging Standardized Evaluation Framework Including Response Evaluation for Clinical Trials (PROMISE V2). *Eur Urol*. 2023;83(5):405-412.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/36935345/)

<a id="ref-7"></a>
7. Shagera QA, Karfis I, Kristanto P, et al. PSMA PET/CT for Response Assessment and Overall Survival Prediction in Patients with Metastatic Castration-Resistant Prostate Cancer Treated with Androgen Receptor Pathway Inhibitors. *J Nucl Med*. 2023;64(12):1869-1876.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/37770114/)

<a id="ref-8"></a>
8. Küper AT, Kersting D, Telli T, et al. PSMA-PET follow-up to assess response in patients not receiving PSMA therapy: Is there value beyond localization of disease? *Theranostics*. 2024;14(9):3623-3633.
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/38948055/)

<a id="ref-9"></a>
9. Koehler D, Shenas F, Sauer M, et al. PSMA PET Evaluation with a Deep Learning Platform Compared with a Standard Image Viewer and Histopathology. *J Nucl Med*. 2025;66(12).
   [PubMed](https://pubmed.ncbi.nlm.nih.gov/41101977/)

<a id="ref-10"></a>
10. Yazdani E, Karamzadeh-Ziarati N, Cheshmi SS, et al. Automated segmentation of lesions and organs at risk on [⁶⁸Ga]Ga-PSMA-11 PET/CT images using self-supervised learning with Swin UNETR. *Cancer Imaging*. 2024;24:33.
    [PubMed](https://pubmed.ncbi.nlm.nih.gov/38424612/)

<a id="ref-11"></a>
11. Gafita A, Djaileb L, Calais J, et al. RECIP 1.0: A Roadmap for Clinical Implementation. *J Nucl Med*. 2025;66(5):683-686.
    [PubMed](https://pubmed.ncbi.nlm.nih.gov/40147848/)

<a id="ref-12"></a>
12. Hartrampf PE, Serfling SE, Michalski K, et al. PSMA PET/CT for Response Assessment of ¹⁷⁷Lu-PSMA Therapy. *Semin Nucl Med*. 2024;54(1):69-76.
    [PubMed](https://pubmed.ncbi.nlm.nih.gov/37357025/)
