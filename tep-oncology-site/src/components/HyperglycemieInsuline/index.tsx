import React from 'react';
import styles from './styles.module.css';

const DOI_ESKIAN = 'https://doi.org/10.1007/s00259-018-4194-x';
const DOI_BUSING = 'https://doi.org/10.1016/j.nucmedbio.2012.10.014';
const DOI_EANM_V2 = 'https://doi.org/10.1007/s00259-014-2961-x';
const URL_EANM_V3 = 'https://www.sciencedirect.com/science/article/pii/S3051292125000065';

type RefProps = { href: string; children: React.ReactNode };
const Ref = ({ href, children }: RefProps) => (
  <a className={styles.ref} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function HyperglycemieInsuline(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <p className={styles.subtitle}>
        Tableau simplifié après analyse critique : ne sont conservées que les
        affirmations soutenues par la méta-analyse sur données individuelles
        (Eskian 2018) et/ou les recommandations EANM. Les conclusions reposant
        uniquement sur un case report (n=1) ou un micro-sous-groupe ancien ont
        été retirées ou requalifiées.
      </p>

      <div className={styles.evidenceLegend}>
        <strong>Niveau de preuve par ligne (gradation simplifiée)</strong>
        <span className={`${styles.evBadge} ${styles.evSolid}`}>SOLIDE</span>
        méta-analyse de données individuelles + guideline EANM concordantes
        &nbsp;·&nbsp;
        <span className={`${styles.evBadge} ${styles.evModerate}`}>MODÉRÉ</span>
        méta-analyse seule ou séries rétrospectives concordantes &nbsp;·&nbsp;
        <span className={`${styles.evBadge} ${styles.evWeak}`}>FAIBLE</span>
        case report / sous-groupe limité / extrapolation
      </div>

      <div className={styles.legend}>
        <span>
          <span className={styles.dot} style={{ background: 'var(--hp-hyper)' }} />
          Hyperglycémie à jeun
        </span>
        <span>
          <span className={styles.dot} style={{ background: 'var(--hp-insulin)' }} />
          Effet insulinique (exogène ou endogène)
        </span>
        <span>
          <span className={styles.arrowUp}>↑</span> augmentée &nbsp;
          <span className={styles.arrowDown}>↓</span> diminuée
        </span>
      </div>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.braceRow}>
              <th />
              <th />
              <th className={styles.braceCell}>
                <span className={styles.braceLabel}>
                  Même mécanisme : insuline → translocation de GLUT4 vers les
                  tissus non tumoraux
                </span>
                <span className={styles.braceShape} aria-hidden="true" />
              </th>
            </tr>
            <tr>
              <th className={styles.colParam}>Paramètre</th>
              <th className={styles.colHyper}>
                Hyperglycémie à jeun
                <span className={styles.mech}>
                  Compétition glucose/FDG pour GLUT &amp; hexokinase
                  (insulinémie basse)
                </span>
              </th>
              <th className={styles.colInsulin}>
                Effet insulinique
                <br />
                (insuline injectée <em>ou</em> repas récent / non-jeûne)
                <span className={styles.mech}>
                  Insuline exogène ou endogène post-prandiale
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Captation cérébrale</th>
              <td>
                <span className={styles.arrowDown}>↓↓</span> Diminuée{' '}
                <span className={`${styles.evTag} ${styles.evSolid}`}>SOLIDE</span>
                <br />
                <Ref href={DOI_ESKIAN}>Eskian 2018</Ref>
              </td>
              <td>
                <span className={styles.arrowDown}>↓</span> Diminuée (le glucose
                entré reste capté en périphérie)
                <br />
                <Ref href={DOI_ESKIAN}>Eskian 2018</Ref>
              </td>
            </tr>
            <tr>
              <th>Muscle squelettique</th>
              <td>
                <span className={styles.arrowUp}>↑</span> Légèrement augmentée{' '}
                <span className={`${styles.evTag} ${styles.evModerate}`}>
                  MODÉRÉ
                </span>
                <br />
                <Ref href={DOI_ESKIAN}>Eskian 2018</Ref>
              </td>
              <td>
                <span className={styles.arrowUp2}>↑↑↑</span> Fortement augmentée,
                diffuse{' '}
                <span className={`${styles.evTag} ${styles.evSolid}`}>SOLIDE</span>
                <br />
                <Ref href={DOI_BUSING}>Büsing 2012</Ref>
                <Ref href={DOI_EANM_V2}>EANM</Ref>
              </td>
            </tr>
            <tr>
              <th>Foie / blood pool</th>
              <td>
                <span className={styles.arrowUp}>↑</span> Augmentés{' '}
                <span className={`${styles.evTag} ${styles.evModerate}`}>
                  MODÉRÉ
                </span>
                <br />
                <Ref href={DOI_ESKIAN}>Eskian 2018</Ref>
              </td>
              <td>
                Effet non clairement établi{' '}
                <span className={`${styles.evTag} ${styles.evWeak}`}>FAIBLE</span>
                <span className={styles.muted}> (données insuffisantes)</span>
              </td>
            </tr>
            <tr>
              <th>SUV tumoral</th>
              <td>
                Pas d'effet significatif &lt; 200 mg/dL ; ↓ seulement &gt; 200
                mg/dL{' '}
                <span className={`${styles.evTag} ${styles.evSolid}`}>SOLIDE</span>
                <br />
                <Ref href={DOI_ESKIAN}>Eskian 2018</Ref>
              </td>
              <td>
                Pas d'amélioration démontrée de la captation tumorale{' '}
                <span className={`${styles.evTag} ${styles.evModerate}`}>
                  MODÉRÉ
                </span>
                <br />
                <Ref href={DOI_BUSING}>Büsing 2012</Ref>
              </td>
            </tr>
            <tr>
              <th>Contraste tumeur / fond &amp; détection</th>
              <td>
                Globalement préservé &lt; 200 mg/dL ; prudence si très élevé{' '}
                <span className={`${styles.evTag} ${styles.evModerate}`}>
                  MODÉRÉ
                </span>
                <br />
                <Ref href={URL_EANM_V3}>EANM v3.0</Ref>
              </td>
              <td>
                <span className={styles.arrowDown}>↓↓</span> Dégradé par le fond
                musculaire/graisseux{' '}
                <span className={`${styles.evTag} ${styles.evSolid}`}>SOLIDE</span>
                <br />
                <Ref href={URL_EANM_V3}>EANM v3.0</Ref>
              </td>
            </tr>
            <tr className={styles.practical}>
              <th>Conduite recommandée (EANM)</th>
              <td>
                Jeûne ≥ 4 h ; viser 4–7 mmol/L. Hyperglycémie à jeun = <em>pas</em>{' '}
                une contre-indication absolue ; noter la glycémie pour
                l'interprétation
              </td>
              <td>
                Ne <strong>pas</strong> injecter d'insuline pour corriger la
                glycémie ; respecter le jeûne pour garder l'insulinémie basse
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.cites}>
        <h2>Sources, citations exactes et appréciation critique</h2>
        <p className={styles.crit}>
          Classées par niveau de preuve décroissant. Le niveau attribué à chaque
          ligne du tableau reflète la source la plus solide qui la soutient.
        </p>

        <div className={styles.citeItem}>
          <span className={styles.tag}>
            EANM — Guidelines tumour imaging v2.0 &amp; v3.0
          </span>{' '}
          <span className={`${styles.evBadge} ${styles.evSolid}`}>
            Recommandation d'experts
          </span>
          <span className={styles.quote}>
            v3.0 : « Insulin should not be given to reduce glucose levels (this
            leads to altered pharmacokinetics and biodistribution, including high
            muscle uptake of [18F]FDG). » — « fasting hyperglycaemia may not
            hamper the clinical value of [18F]FDG PET... should not represent an
            absolute contraindication. »
          </span>
          Niveau le plus élevé pour la conduite pratique et le mécanisme
          insulinique. Fonde la fusion des colonnes insuline exogène/endogène.
          <br />
          <a href={URL_EANM_V3} target="_blank" rel="noopener noreferrer">
            EANM v3.0
          </a>{' '}
          &nbsp;·&nbsp;{' '}
          <a href={DOI_EANM_V2} target="_blank" rel="noopener noreferrer">
            EANM v2.0 — doi.org/10.1007/s00259-014-2961-x
          </a>
        </div>

        <div className={styles.citeItem}>
          <span className={styles.tag}>Eskian 2018</span>{' '}
          <span className={`${styles.evBadge} ${styles.evSolid}`}>
            Méta-analyse données individuelles (n=20 807 SUV)
          </span>
          <span className={styles.quote}>
            « Increased BGL is significantly correlated with decreased SUV in
            brain and muscle and increased SUV in liver and blood pool... No
            significant correlation was found between BGL and SUV in tumors...
            only the hyperglycemic group with BGL &gt; 200 mg/dl had
            significantly lower SUV. »
          </span>
          <strong>Source la plus robuste.</strong> Limite : méta-analyse
          d'études <em>observationnelles</em> hétérogènes, sans randomisation.
          Très fiable pour les organes sains ; son résultat clé est{' '}
          <em>négatif</em> (pas d'effet tumoral sous 200 mg/dL). Eur J Nucl Med
          Mol Imaging 2018;46(1):224-237.{' '}
          <a href={DOI_ESKIAN} target="_blank" rel="noopener noreferrer">
            doi.org/10.1007/s00259-018-4194-x
          </a>
        </div>

        <div className={styles.citeItem}>
          <span className={styles.tag}>Büsing 2012</span>{' '}
          <span className={`${styles.evBadge} ${styles.evModerate}`}>
            Série rétrospective monocentrique (n=90)
          </span>
          <span className={styles.quote}>
            « Increased BGLs were associated with decreased cerebral FDG uptake
            and increased uptake in skeletal muscle. Diabetes and insulin...
            increased the average SUV(max) in muscle cells and fat... Tumoral
            uptake was not significantly influenced by BGL, diabetes, insulin,
            or obesity. »
          </span>
          Cohérent avec la méta-analyse mais petit effectif, non randomisé.
          Soutient (en appoint) l'effet musculaire de l'insuline et l'absence
          d'effet tumoral. Nucl Med Biol 2012;40(2):206-13.{' '}
          <a href={DOI_BUSING} target="_blank" rel="noopener noreferrer">
            doi.org/10.1016/j.nucmedbio.2012.10.014
          </a>
        </div>

        <div className={styles.citeItem}>
          <span className={styles.tag}>Rosica 2018</span>{' '}
          <span className={`${styles.evBadge} ${styles.evModerate}`}>
            Série rétrospective monocentrique (n=437)
          </span>
          <span className={styles.quote}>
            « the effects are negligible or mild in most patients with BGL less
            than 200 mg/dl... decline in brain metabolic activity correlated the
            most with various BGL. »
          </span>
          Renforce le seuil de 200 mg/dL et la prédominance de l'effet cérébral,
          mais design observationnel monocentrique. Nucl Med Commun
          2018;39(5):417-422.{' '}
          <a
            href="https://doi.org/10.1097/MNM.0000000000000829"
            target="_blank"
            rel="noopener noreferrer"
          >
            doi.org/10.1097/MNM.0000000000000829
          </a>
        </div>

        <div className={styles.citeItem}>
          <span className={styles.tag}>Diederichs 1998</span>{' '}
          <span className={`${styles.evBadge} ${styles.evWeak}`}>
            Rétrospectif ancien — sous-groupe n=19
          </span>
          <span className={styles.quote}>
            « detection rates... 86% and 42%... if fasted plasma glucose levels
            were below and above 130 mg/dl... Negative PET results... should be
            interpreted with caution. »
          </span>
          <strong>Écarté des conclusions quantitatives du tableau.</strong>{' '}
          Chiffres frappants mais fondés sur 19 patients seulement, technologie
          pré-PET/CT (1998), monocentrique. Ne sert qu'à appuyer une prudence
          qualitative — déjà couverte par l'EANM. J Nucl Med 1998;39(6):1030-3.{' '}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/9627339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PMID 9627339
          </a>
        </div>

        <div className={styles.citeItem}>
          <span className={styles.tag}>Hofman 2011</span>{' '}
          <span className={`${styles.evBadge} ${styles.evWeak}`}>
            Case report (n=1)
          </span>
          <span className={styles.quote}>
            « Prominent diffuse white adipose tissue, gastric mucosal,
            myocardial, and very low hepatic and muscle activity were observed. »
          </span>
          <strong>
            Retiré des cellules « myocarde », « graisse » et « foie bas » du
            tableau.
          </strong>{' '}
          Niveau de preuve le plus faible (1 patient). Illustratif du mécanisme
          insulinique mais non généralisable ; redondant avec l'EANM qui établit
          déjà la captation musculaire induite par l'insuline. EJNMMI Res
          2011;1(1):2.{' '}
          <a
            href="https://doi.org/10.1186/2191-219X-1-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            doi.org/10.1186/2191-219X-1-2
          </a>
        </div>
      </div>

      <p className={styles.sourceNote}>
        Principales modifications après lecture critique : (1) la colonne « SUV
        tumoral » indique désormais l'<em>absence</em> d'effet significatif sous
        200 mg/dL (résultat le plus solide, Eskian + EANM), corrigeant la version
        précédente qui suggérait une baisse ; (2) lignes « myocarde » et « graisse
        exogène » supprimées car reposant sur un case report ; (3) chiffres de
        détection pancréatique (Diederichs) retirés du corps du tableau et
        requalifiés en prudence qualitative ; (4) colonnes insuline
        exogène/endogène fusionnées, conformément au mécanisme GLUT4 commun
        explicité par l'EANM. Données issues de PubMed et des guidelines EANM.
      </p>
    </div>
  );
}
