import { useState, useMemo } from "react";

const tabs = [
  { id: "diabete", label: "Diabète", icon: "🩸" },
  { id: "glycemie", label: "Glycémie", icon: "📊" },
  { id: "checklist", label: "Checklist", icon: "✅" },
  { id: "pdc", label: "PDC iodé", icon: "💉" },
  { id: "delais", label: "Délais", icon: "📅" },
  { id: "pieges", label: "Pièges", icon: "📖" },
];

// --- Shared UI components ---
const Card = ({ children, style }) => (
  <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, marginTop: 16, ...style }}>{children}</div>
);
const Btn = ({ onClick, children, color = "#3b82f6", style }) => (
  <button onClick={onClick} style={{ background: color, color: "#fff", border: "none", borderRadius: 8, padding: "10px 18px", margin: 4, cursor: "pointer", fontSize: 14, fontWeight: 500, ...style }}>{children}</button>
);
const Alert = ({ type = "info", children }) => {
  const c = { danger: "#dc2626", warning: "#f59e0b", info: "#3b82f6", success: "#10b981" };
  return <div style={{ background: c[type] + "20", border: `1px solid ${c[type]}60`, borderRadius: 8, padding: 14, marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>{children}</div>;
};
const inputStyle = { background: "#334155", border: "1px solid #475569", borderRadius: 8, padding: "10px 14px", color: "#f1f5f9", fontSize: 15, width: "100%", boxSizing: "border-box" };
const selStyle = { ...inputStyle, cursor: "pointer" };

const Result = ({ title, items, alerts = [], onReset }) => (
  <Card>
    <h3 style={{ color: "#10b981", margin: "0 0 12px 0", fontSize: 17 }}>✅ {title}</h3>
    <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
      {items.map((it, i) => <li key={i} style={{ marginBottom: 4 }}>{it}</li>)}
    </ul>
    {alerts.map((a, i) => <Alert key={i} type={a.type}>{a.text}</Alert>)}
    {onReset && <div style={{ marginTop: 16 }}><Btn onClick={onReset} color="#6b7280">↩ Recommencer</Btn></div>}
  </Card>
);

// --- DIABETE MODULE ---
function DiabeteModule() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const answer = (k, v) => { setAnswers(p => ({ ...p, [k]: v })); setStep(s => s + 1); };
  const reset = () => { setStep(0); setAnswers({}); };

  if (step === 0) return (
    <Card><h3 style={{ color: "#93c5fd", margin: "0 0 12px" }}>Quel type de diabète ?</h3>
      <Btn onClick={() => answer("type", "dt2_ado")}>DT2 — ADO seuls</Btn>
      <Btn onClick={() => answer("type", "dt2_glp1")}>DT2 — Agonistes GLP-1</Btn>
      <Btn onClick={() => answer("type", "dt2_insuline")}>DT2 — Insulinotraité</Btn>
      <Btn onClick={() => answer("type", "dt1")}>DT1</Btn>
      <Btn onClick={() => answer("type", "pompe")}>Pompe / Boucle fermée</Btn>
    </Card>
  );

  if (answers.type === "dt2_ado" && step === 1) return (
    <Result onReset={reset} title="DT2 sous ADO seuls"
      items={["Programmer l'examen en fin de matinée", "Jeûne standard ≥ 4–6h", "Continuer : Metformine (sauf si PDC iodé ET eGFR < 30)", "Continuer : Inhibiteurs SGLT2 (si bien hydraté)", "OMETTRE à jeun : Sulfamides (gliclazide, glipizide)", "OMETTRE à jeun : Glinides (répaglinide)", "OMETTRE à jeun : Glitazones (pioglitazone)", "OMETTRE à jeun : Inhibiteurs DPP-4 / Gliptines", "OMETTRE à jeun : Acarbose", "→ Reprendre tous les ADO omis après le scan avec un repas"]}
      alerts={[
        { type: "warning", text: "⚠️ SGLT2 : si l'activité urinaire gêne l'interprétation pelvienne → arrêt 48h avant et 48h après" },
        { type: "info", text: "ℹ️ Metformine + PDC iodé : arrêt uniquement si eGFR < 30. Contrôler eGFR à 48h." }
      ]}
    />
  );

  if (answers.type === "dt2_glp1" && step === 1) return (
    <Result onReset={reset} title="DT2 sous agonistes GLP-1"
      items={["Sémaglutide, dulaglutide, liraglutide… → prise normale", "S'assurer que le patient est bien hydraté", "Respecter le jeûne standard ≥ 4–6h"]}
      alerts={[{ type: "success", text: "✅ Pas de modification de traitement nécessaire." }]}
    />
  );

  if (answers.type === "dt2_insuline" && step === 1) return (
    <Card><h3 style={{ color: "#93c5fd", margin: "0 0 12px" }}>Quel type d'insuline basale ?</h3>
      <Btn onClick={() => answer("ins", "inter")}>Intermédiaire / Prémixée</Btn>
      <Btn onClick={() => answer("ins", "longue")}>Longue durée (Lantus, Tresiba…)</Btn>
      <Btn onClick={() => answer("ins", "hebdo")}>Hebdomadaire (Icodec, Efsitora)</Btn>
    </Card>
  );

  if (answers.type === "dt2_insuline" && answers.ins === "inter" && step === 2) return (
    <Result onReset={reset} title="DT2 — Insuline intermédiaire/prémixée"
      items={["Omettre l'injection d'insuline du matin", "Scanner à jeun", "Après le scan : injecter 60 % de la dose habituelle puis manger"]}
      alerts={[{ type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" }]}
    />
  );

  if (answers.type === "dt2_insuline" && answers.ins === "longue" && step === 2) return (
    <Card><h3 style={{ color: "#93c5fd", margin: "0 0 12px" }}>Injection habituelle ?</h3>
      <Btn onClick={() => answer("h", "matin")}>Le matin</Btn>
      <Btn onClick={() => answer("h", "soir")}>Le soir</Btn>
    </Card>
  );

  if (answers.type === "dt2_insuline" && answers.ins === "longue" && answers.h === "matin" && step === 3) return (
    <Result onReset={reset} title="DT2 — Basale longue (matin)"
      items={["Omettre la dose du matin", "Injecter la dose habituelle après le scan"]}
      alerts={[{ type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" }]}
    />
  );

  if (answers.type === "dt2_insuline" && answers.ins === "longue" && answers.h === "soir" && step === 3) return (
    <Result onReset={reset} title="DT2 — Basale longue (soir)"
      items={["Injecter normalement la veille au soir", "Scanner selon le protocole standard", "Si risque d'hypoglycémie à jeun : réduire la dose du soir à 80 %"]}
      alerts={[{ type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" }]}
    />
  );

  if (answers.type === "dt2_insuline" && answers.ins === "hebdo" && step === 2) return (
    <Result onReset={reset} title="DT2 — Insuline hebdomadaire"
      items={["Programmer l'examen au jour 6, 7 ou 8 après la dernière injection", "Pas d'insuline rapide le matin du scan"]}
      alerts={[{ type: "warning", text: "⚠️ Vérifier la date de la dernière injection hebdomadaire." }]}
    />
  );

  // DT1
  if (answers.type === "dt1" && step === 1) return (
    <Card><h3 style={{ color: "#93c5fd", margin: "0 0 12px" }}>Quel type d'insuline basale ?</h3>
      <Btn onClick={() => answer("ins1", "inter")}>Intermédiaire / Prémixée</Btn>
      <Btn onClick={() => answer("ins1", "longue")}>Longue durée</Btn>
      <Btn onClick={() => answer("ins1", "hebdo")}>Hebdomadaire</Btn>
    </Card>
  );

  if (answers.type === "dt1" && answers.ins1 === "inter" && step === 2) return (
    <Result onReset={reset} title="DT1 — Insuline intermédiaire/prémixée"
      items={["Scanner IMPÉRATIVEMENT avant 10h", "Modification de dose EN LIAISON AVEC LE DIABÉTOLOGUE", "Pas d'insuline rapide le matin du scan"]}
      alerts={[
        { type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" },
        { type: "warning", text: "⚠️ HbA1c > 7,5 % → difficulté à atteindre les glycémies cibles. Consulter CGM si disponible." }
      ]}
    />
  );

  if (answers.type === "dt1" && answers.ins1 === "longue" && step === 2) return (
    <Card><h3 style={{ color: "#93c5fd", margin: "0 0 12px" }}>Injection habituelle ?</h3>
      <Btn onClick={() => answer("h1", "matin")}>Le matin</Btn>
      <Btn onClick={() => answer("h1", "soir")}>Le soir</Btn>
    </Card>
  );

  if (answers.type === "dt1" && answers.ins1 === "longue" && answers.h1 === "matin" && step === 3) return (
    <Result onReset={reset} title="DT1 — Basale longue (matin)"
      items={["Omettre la dose du matin", "Injecter après le scan", "Scanner tôt le matin si possible"]}
      alerts={[
        { type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" },
        { type: "warning", text: "⚠️ DT1 sans insuline basale → risque d'hyperglycémie rapide. Surveiller." }
      ]}
    />
  );

  if (answers.type === "dt1" && answers.ins1 === "longue" && answers.h1 === "soir" && step === 3) return (
    <Result onReset={reset} title="DT1 — Basale longue (soir)"
      items={["Injecter normalement la veille au soir", "Scanner selon le protocole standard"]}
      alerts={[{ type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" }]}
    />
  );

  if (answers.type === "dt1" && answers.ins1 === "hebdo" && step === 2) return (
    <Result onReset={reset} title="DT1 — Insuline hebdomadaire"
      items={["Scanner J6-J8 post-injection", "Coordination avec le diabétologue indispensable"]}
      alerts={[{ type: "danger", text: "🚫 JAMAIS d'insuline rapide le matin avant le scan !" }]}
    />
  );

  // Pompe
  if (answers.type === "pompe" && step === 1) return (
    <Result onReset={reset} title="Pompe à insuline / Boucle fermée"
      items={["Programmer l'examen TÔT LE MATIN", "Maintenir la pompe au débit basal", "NE PAS administrer de bolus avant le scan", "Ne pas suspendre la pompe (risque hyperglycémie DT1)", "Boucle fermée : peut rester en mode auto si euglycémie", "Après le scan : reprendre bolus + repas"]}
      alerts={[
        { type: "danger", text: "🚫 PAS DE BOLUS avant le scan !" },
        { type: "info", text: "ℹ️ Le débit basal continu maintient la glycémie stable sans provoquer l'hypercaptation musculaire d'un bolus." }
      ]}
    />
  );

  return <Card><p>Module en cours…</p><Btn onClick={reset}>↩ Recommencer</Btn></Card>;
}

// --- GLYCEMIE MODULE ---
function GlycemieModule() {
  const [val, setVal] = useState("");
  const [unit, setUnit] = useState("mmol");
  const [ctx, setCtx] = useState("clinique");
  const [result, setResult] = useState(null);

  const check = () => {
    const v = parseFloat(val);
    if (isNaN(v) || v <= 0) return;
    const mmol = unit === "mmol" ? v : v / 18.0;
    let verdict, color, details;
    if (mmol < 4) {
      verdict = "⛔ Glycémie trop basse — NE PAS INJECTER"; color = "#dc2626";
      details = "Glycémie < 4 mmol/L (70 mg/dL). Risque d'hypoglycémie. Reporter l'examen.";
    } else if (ctx === "clinique") {
      if (mmol < 11) {
        verdict = "✅ Glycémie acceptable (pratique clinique)"; color = "#10b981";
        details = `${mmol.toFixed(1)} mmol/L (${(mmol*18).toFixed(0)} mg/dL). Seuil < 11 mmol/L → OK.`;
      } else {
        verdict = "⚠️ Glycémie trop élevée — REPROGRAMMER"; color = "#f59e0b";
        details = `${mmol.toFixed(1)} mmol/L (${(mmol*18).toFixed(0)} mg/dL). Seuil < 11 mmol/L dépassé. Hydratation + déambulation puis recontrôle.`;
      }
    } else {
      if (mmol <= 8.3) {
        verdict = "✅ Glycémie acceptable (étude quantitative)"; color = "#10b981";
        details = `${mmol.toFixed(1)} mmol/L (${(mmol*18).toFixed(0)} mg/dL). Seuil ≤ 8,3 mmol/L → OK.`;
      } else {
        verdict = "⚠️ Trop élevée pour étude quantitative"; color = "#f59e0b";
        details = `${mmol.toFixed(1)} mmol/L (${(mmol*18).toFixed(0)} mg/dL). Seuil 7–8,3 mmol/L dépassé. Exclure ou reprogrammer.`;
      }
    }
    setResult({ verdict, color, details });
  };

  const onKey = e => { if (e.key === "Enter") check(); };

  return (
    <Card style={{ marginTop: 0 }}>
      <h3 style={{ color: "#93c5fd", margin: "0 0 16px" }}>Vérification de la glycémie</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Glycémie</label>
          <input type="number" step="0.1" value={val} onChange={e => { setVal(e.target.value); setResult(null); }} onKeyDown={onKey} placeholder="Ex: 6.5" style={inputStyle} autoFocus />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Unité</label>
          <select value={unit} onChange={e => { setUnit(e.target.value); setResult(null); }} style={selStyle}><option value="mmol">mmol/L</option><option value="mg">mg/dL</option></select>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Contexte</label>
        <select value={ctx} onChange={e => { setCtx(e.target.value); setResult(null); }} style={selStyle}>
          <option value="clinique">Pratique clinique (seuil 11 mmol/L)</option>
          <option value="etude">Étude quantitative (seuil 7–8,3 mmol/L)</option>
        </select>
      </div>
      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8, textAlign: "center" }}>Appuyez sur Entrée pour vérifier</div>
      {result && (
        <div style={{ background: result.color + "18", border: `1px solid ${result.color}50`, borderRadius: 10, padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: result.color, marginBottom: 8 }}>{result.verdict}</div>
          <div style={{ fontSize: 14, lineHeight: 1.6 }}>{result.details}</div>
          <div style={{ marginTop: 10, fontSize: 13, color: "#f87171", fontWeight: 600 }}>🚫 Ne JAMAIS injecter d'insuline pour corriger la glycémie.</div>
        </div>
      )}
    </Card>
  );
}

// --- CHECKLIST MODULE ---
function ChecklistModule() {
  const items = [
    { id: "jeune", label: "Jeûne ≥ 4h (idéalement 6h)", tip: "Seule l'eau plate non aromatisée. Pas de café ni boissons caféinées." },
    { id: "hydratation", label: "Hydratation : 1 L d'eau dans les 2h pré-injection", tip: "500 mL supplémentaires si activité vésicale problématique." },
    { id: "glycemie", label: "Glycémie mesurée et dans les normes", tip: "< 11 mmol/L (clinique) ou ≤ 8,3 mmol/L (étude). ≥ 4 mmol/L minimum." },
    { id: "diabete", label: "Traitement du diabète adapté (si applicable)", tip: "Voir module Diabète. JAMAIS d'insuline rapide le matin." },
    { id: "repos", label: "Repos musculaire (assis/allongé, silencieux)", tip: "Particulièrement important en ORL." },
    { id: "chaleur", label: "Maintien au chaud (30–60 min avant → fin scan)", tip: "Mesure la plus efficace contre la graisse brune." },
    { id: "exercice", label: "Pas d'exercice intense dans les 6h (idéalement 24h)", tip: "Augmente la captation musculaire du FDG." },
    { id: "donnees", label: "Données patient vérifiées (poids, taille, activité, heure)", tip: "Vérifier la saisie console." },
    { id: "rincage", label: "Rinçage ligne IV ≥ 10 mL NaCl 0,9 %", tip: "Pas de soluté glucosé. Mesurer l'activité résiduelle." },
    { id: "extrav", label: "Vérification absence d'extravasation", tip: "Si suspicion : signaler et imager le site d'injection." },
    { id: "horloges", label: "Horloges synchronisées (± 1 min)", tip: "TEP/TDM, activimètre hôpital, radiopharmacie → horloge officielle." },
    { id: "decroissance", label: "Correction de décroissance activée", tip: "Vérifier dans les paramètres de reconstruction." },
    { id: "miction", label: "Miction 5 min avant acquisition", tip: "Réduire l'activité vésicale." },
    { id: "captation", label: "Temps de captation ≈ 60 min (55–75 acceptable)", tip: "Suivi : reproduire à ± 10 min vs examen de référence." },
  ];
  const [checked, setChecked] = useState({});
  const [showTip, setShowTip] = useState(null);
  const toggle = id => setChecked(p => ({ ...p, [id]: !p[id] }));
  const total = items.length, done = Object.values(checked).filter(Boolean).length;

  return (
    <Card style={{ marginTop: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h3 style={{ color: "#93c5fd", margin: 0 }}>Checklist pré-injection</h3>
        <span style={{ color: done === total ? "#10b981" : "#94a3b8", fontWeight: 600, fontSize: 14 }}>{done}/{total}</span>
      </div>
      <div style={{ background: "#0f172a", borderRadius: 8, height: 6, marginBottom: 16, overflow: "hidden" }}>
        <div style={{ background: done === total ? "#10b981" : "#3b82f6", height: "100%", width: `${(done/total)*100}%`, transition: "width 0.3s" }} />
      </div>
      {items.map(it => (
        <div key={it.id} style={{ marginBottom: 2 }}>
          <div onClick={() => toggle(it.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 8, cursor: "pointer", background: checked[it.id] ? "#10b98115" : "transparent" }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checked[it.id] ? "#10b981" : "#475569"}`, background: checked[it.id] ? "#10b981" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {checked[it.id] && <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>✓</span>}
            </div>
            <span style={{ flex: 1, fontSize: 14, color: checked[it.id] ? "#94a3b8" : "#e2e8f0", textDecoration: checked[it.id] ? "line-through" : "none" }}>{it.label}</span>
            <span onClick={e => { e.stopPropagation(); setShowTip(showTip === it.id ? null : it.id); }} style={{ color: "#64748b", cursor: "pointer", fontSize: 16 }}>ℹ️</span>
          </div>
          {showTip === it.id && <div style={{ margin: "0 0 4px 46px", padding: "8px 12px", background: "#334155", borderRadius: 6, fontSize: 13, color: "#cbd5e1", lineHeight: 1.5 }}>{it.tip}</div>}
        </div>
      ))}
      {done === total && (
        <div style={{ marginTop: 16, padding: 14, background: "#10b98120", border: "1px solid #10b98160", borderRadius: 8, textAlign: "center", fontWeight: 600, color: "#10b981" }}>✅ Checklist complète — Prêt pour l'acquisition</div>
      )}
    </Card>
  );
}

// --- PDC IODE MODULE ---
function PdcModule() {
  const [section, setSection] = useState("screening");

  const sections = [
    { id: "calcdfg", label: "🧮 Calcul DFG", icon: "🧮" },
    { id: "screening", label: "🔍 Screening rénal", icon: "🔍" },
    { id: "egfr", label: "🧪 eGFR & risque", icon: "🧪" },
    { id: "metformine", label: "💊 Metformine", icon: "💊" },
    { id: "allergie", label: "⚠️ Allergie / Anaph.", icon: "⚠️" },
    { id: "intervalles", label: "⏱️ Intervalles inj.", icon: "⏱️" },
    { id: "extrav", label: "🩹 Extravasation", icon: "🩹" },
    { id: "populations", label: "👥 Populations", icon: "👥" },
    { id: "bio", label: "🔬 Interf. bio", icon: "🔬" },
  ];

  return (
    <Card style={{ marginTop: 0 }}>
      <h3 style={{ color: "#93c5fd", margin: "0 0 16px" }}>PDC iodé — ESUR 2025</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{ background: section === s.id ? "#3b82f630" : "#0f172a", border: `1px solid ${section === s.id ? "#3b82f6" : "#334155"}`, borderRadius: 8, padding: "8px 12px", color: section === s.id ? "#93c5fd" : "#94a3b8", fontSize: 13, cursor: "pointer", fontWeight: section === s.id ? 600 : 400 }}>{s.label}</button>
        ))}
      </div>
      {section === "calcdfg" && <CalcDFG />}
      {section === "screening" && <ScreeningRenal />}
      {section === "egfr" && <EgfrRisque />}
      {section === "metformine" && <MetforminePdc />}
      {section === "allergie" && <AllergieAnaph />}
      {section === "intervalles" && <IntervallesInj />}
      {section === "extrav" && <ExtravPdc />}
      {section === "populations" && <PopulationsPdc />}
      {section === "bio" && <InterfBio />}
    </Card>
  );
}

function CalcDFG() {
  const [mode, setMode] = useState("adulte");
  const [sexe, setSexe] = useState("F");
  const [age, setAge] = useState("");
  const [creat, setCreat] = useState("");
  const [creatUnit, setCreatUnit] = useState("umol");
  const [afro, setAfro] = useState(false);
  const [taille, setTaille] = useState("");

  const result = useMemo(() => {
    const cr = parseFloat(creat);
    if (isNaN(cr) || cr <= 0) return null;
    const scr = creatUnit === "umol" ? cr : cr * 88.4;

    if (mode === "enfant") {
      const t = parseFloat(taille);
      if (isNaN(t) || t <= 0) return null;
      const gfr = 36.5 * t / scr;
      return { gfr: gfr.toFixed(1), formula: "Schwartz révisée" };
    }

    const a = parseFloat(age);
    if (isNaN(a) || a < 18) return null;

    let gfr;
    if (sexe === "F") {
      if (scr <= 62) {
        gfr = 144 * Math.pow(scr / 62, -0.329) * Math.pow(0.993, a);
      } else {
        gfr = 144 * Math.pow(scr / 62, -1.209) * Math.pow(0.993, a);
      }
    } else {
      if (scr <= 80) {
        gfr = 141 * Math.pow(scr / 80, -0.411) * Math.pow(0.993, a);
      } else {
        gfr = 141 * Math.pow(scr / 80, -1.209) * Math.pow(0.993, a);
      }
    }
    if (afro) gfr *= 1.159;
    return { gfr: gfr.toFixed(1), formula: "CKD-EPI 2009" };
  }, [mode, sexe, age, creat, creatUnit, afro, taille]);

  const gfrVal = result ? parseFloat(result.gfr) : null;
  let stade = null, stadeColor = "#10b981";
  if (gfrVal !== null) {
    if (gfrVal >= 90) { stade = "G1 — Normal ou élevé"; stadeColor = "#10b981"; }
    else if (gfrVal >= 60) { stade = "G2 — Légèrement diminué"; stadeColor = "#a3e635"; }
    else if (gfrVal >= 45) { stade = "G3a — Diminution légère à modérée"; stadeColor = "#f59e0b"; }
    else if (gfrVal >= 30) { stade = "G3b — Diminution modérée à sévère"; stadeColor = "#f97316"; }
    else if (gfrVal >= 15) { stade = "G4 — Diminution sévère"; stadeColor = "#dc2626"; }
    else { stade = "G5 — Insuffisance rénale terminale"; stadeColor = "#991b1b"; }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setMode("adulte")} style={{ flex: 1, background: mode === "adulte" ? "#3b82f630" : "#0f172a", border: `1px solid ${mode === "adulte" ? "#3b82f6" : "#334155"}`, borderRadius: 8, padding: "10px", color: mode === "adulte" ? "#93c5fd" : "#94a3b8", fontSize: 14, cursor: "pointer", fontWeight: mode === "adulte" ? 600 : 400 }}>Adulte (≥ 18 ans)</button>
        <button onClick={() => setMode("enfant")} style={{ flex: 1, background: mode === "enfant" ? "#3b82f630" : "#0f172a", border: `1px solid ${mode === "enfant" ? "#3b82f6" : "#334155"}`, borderRadius: 8, padding: "10px", color: mode === "enfant" ? "#93c5fd" : "#94a3b8", fontSize: 14, cursor: "pointer", fontWeight: mode === "enfant" ? 600 : 400 }}>Enfant ({'<'} 18 ans)</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Créatinine</label>
          <input type="number" step="any" value={creat} onChange={e => setCreat(e.target.value)} placeholder={creatUnit === "umol" ? "Ex: 85" : "Ex: 0.96"} style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Unité</label>
          <select value={creatUnit} onChange={e => setCreatUnit(e.target.value)} style={selStyle}>
            <option value="umol">µmol/L</option>
            <option value="mg">mg/dL</option>
          </select>
        </div>
      </div>

      {mode === "adulte" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Sexe</label>
              <select value={sexe} onChange={e => setSexe(e.target.value)} style={selStyle}>
                <option value="F">Femme</option>
                <option value="M">Homme</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Âge (ans)</label>
              <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Ex: 65" style={inputStyle} />
            </div>
          </div>
          <div onClick={() => setAfro(!afro)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", cursor: "pointer", marginBottom: 12, borderRadius: 8, background: afro ? "#8b5cf615" : "transparent" }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${afro ? "#8b5cf6" : "#475569"}`, background: afro ? "#8b5cf6" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {afro && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
            </div>
            <span style={{ fontSize: 14, color: "#e2e8f0" }}>Patient afro-américain (× 1,159)</span>
          </div>
        </>
      )}

      {mode === "enfant" && (
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Taille (cm)</label>
          <input type="number" value={taille} onChange={e => setTaille(e.target.value)} placeholder="Ex: 120" style={inputStyle} />
        </div>
      )}

      {result && (
        <div style={{ background: "#0f172a", borderRadius: 10, padding: 16, marginTop: 8 }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>DFG estimé ({result.formula})</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: stadeColor }}>{result.gfr}</div>
            <div style={{ fontSize: 13, color: "#94a3b8" }}>mL/min/1,73 m²</div>
          </div>
          {stade && mode === "adulte" && (
            <div style={{ background: stadeColor + "18", border: `1px solid ${stadeColor}50`, borderRadius: 8, padding: 12, textAlign: "center", marginBottom: 12 }}>
              <span style={{ color: stadeColor, fontWeight: 600, fontSize: 14 }}>{stade}</span>
            </div>
          )}
          {gfrVal !== null && mode === "adulte" && (
            <div style={{ display: "grid", gap: 6, fontSize: 13 }}>
              <div style={{ background: "#1e293b", borderRadius: 6, padding: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#94a3b8" }}>Risque CA-AKI (injection IV)</span>
                <span style={{ fontWeight: 600, color: gfrVal < 30 ? "#dc2626" : "#10b981" }}>{gfrVal < 30 ? "⚠️ ÉLEVÉ" : "✅ Faible"}</span>
              </div>
              <div style={{ background: "#1e293b", borderRadius: 6, padding: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#94a3b8" }}>Risque CA-AKI (IA 1er passage)</span>
                <span style={{ fontWeight: 600, color: gfrVal < 45 ? "#dc2626" : "#10b981" }}>{gfrVal < 45 ? "⚠️ ÉLEVÉ" : "✅ Faible"}</span>
              </div>
              <div style={{ background: "#1e293b", borderRadius: 6, padding: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#94a3b8" }}>Metformine (si injection IV)</span>
                <span style={{ fontWeight: 600, color: gfrVal < 30 ? "#f59e0b" : "#10b981" }}>{gfrVal < 30 ? "⚠️ STOP" : "✅ Continuer"}</span>
              </div>
            </div>
          )}
          <div style={{ fontSize: 11, color: "#475569", marginTop: 12, textAlign: "center" }}>
            {mode === "adulte" ? "Formule CKD-EPI 2009 (ESUR 2025)" : "Formule de Schwartz révisée (ESUR 2025)"}
          </div>
        </div>
      )}
    </div>
  );
}

function ScreeningRenal() {
  const factors = [
    { id: "renal", label: "Maladie rénale connue (eGFR < 60)" },
    { id: "chir", label: "Chirurgie rénale / rein unique / greffe" },
    { id: "prot", label: "Protéinurie connue" },
    { id: "hta", label: "HTA traitée ou non" },
    { id: "diabete", label: "Diabète (type 1 ou 2)" },
    { id: "goutte", label: "Goutte / hyperuricémie" },
  ];
  const [checked, setChecked] = useState({});
  const toggle = id => setChecked(p => ({ ...p, [id]: !p[id] }));
  const anyChecked = Object.values(checked).filter(Boolean).length > 0;

  return (
    <div>
      <div style={{ fontSize: 14, color: "#94a3b8", marginBottom: 12 }}>Le patient présente-t-il un de ces facteurs de risque ? (Approche ciblée ESUR)</div>
      {factors.map(f => (
        <div key={f.id} onClick={() => toggle(f.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", cursor: "pointer", borderRadius: 8, background: checked[f.id] ? "#f59e0b15" : "transparent" }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${checked[f.id] ? "#f59e0b" : "#475569"}`, background: checked[f.id] ? "#f59e0b" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {checked[f.id] && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
          </div>
          <span style={{ fontSize: 14, color: "#e2e8f0" }}>{f.label}</span>
        </div>
      ))}
      <div style={{ marginTop: 16, padding: 14, background: anyChecked ? "#f59e0b20" : "#10b98120", border: `1px solid ${anyChecked ? "#f59e0b60" : "#10b98160"}`, borderRadius: 8 }}>
        {anyChecked ? (
          <div><strong style={{ color: "#f59e0b" }}>⚠️ Bilan rénal nécessaire</strong><br/><span style={{ fontSize: 13, color: "#cbd5e1" }}>Demander créatinine/eGFR. Délai : ≤ 3 mois (ambulatoire stable) ou ≤ 7 jours (hospitalisé/maladie aiguë).</span></div>
        ) : (
          <div><strong style={{ color: "#10b981" }}>✅ Aucun facteur de risque identifié</strong><br/><span style={{ fontSize: 13, color: "#cbd5e1" }}>Pas de bilan rénal obligatoire (approche ciblée ESUR). Injection possible.</span></div>
        )}
      </div>
    </div>
  );
}

function EgfrRisque() {
  const [egfr, setEgfr] = useState("");
  const [type, setType] = useState("iv");
  const v = parseFloat(egfr);
  const valid = !isNaN(v) && v > 0;
  let risk = null;
  if (valid) {
    if (type === "iv") {
      risk = v < 30 ? { level: "high", text: "⚠️ RISQUE ÉLEVÉ de CA-AKI (eGFR < 30)", color: "#dc2626", actions: ["Hydratation préventive obligatoire (NaHCO₃ 1,4 % 3 mL/kg/h × 1h avant OU NaCl 0,9 % 1 mL/kg/h × 3–4h avant et 4–6h après)", "STOP metformine à l'injection, eGFR à 48h", "Discussion bénéfice/risque", "Dose minimale de contraste"] }
        : { level: "low", text: "✅ Risque faible de CA-AKI (eGFR ≥ 30, injection IV)", color: "#10b981", actions: ["Continuer metformine normalement", "Pas d'hydratation préventive spécifique nécessaire"] };
    } else {
      risk = v < 45 ? { level: "high", text: "⚠️ RISQUE ÉLEVÉ de CA-AKI (eGFR < 45, IA 1er passage)", color: "#dc2626", actions: ["Hydratation préventive obligatoire", "STOP metformine, eGFR à 48h", "Ratio g iode / eGFR absolu < 1,1 (ou volume mL / eGFR < 3,0)", "Discussion bénéfice/risque"] }
        : { level: "low", text: "✅ Risque acceptable (eGFR ≥ 45, IA 1er passage)", color: "#10b981", actions: ["Hydratation préventive si eGFR < 45", "Respecter le ratio dose/eGFR"] };
    }
  }

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>eGFR (mL/min/1.73 m²)</label>
          <input type="number" value={egfr} onChange={e => setEgfr(e.target.value)} placeholder="Ex: 55" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Type d'injection</label>
          <select value={type} onChange={e => setType(e.target.value)} style={selStyle}>
            <option value="iv">IV ou IA 2nd passage</option>
            <option value="ia">IA 1er passage rénal</option>
          </select>
        </div>
      </div>
      {risk && (
        <div style={{ padding: 14, background: risk.color + "18", border: `1px solid ${risk.color}50`, borderRadius: 8 }}>
          <div style={{ fontWeight: 700, color: risk.color, marginBottom: 8 }}>{risk.text}</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.7, color: "#cbd5e1" }}>
            {risk.actions.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}
      <Alert type="info">
        <strong>CA-AKI :</strong> augmentation créatinine {'>'} 0,3 mg/dL (26,5 µmol/L) OU {'>'} 1,5× baseline dans les 48–72h post-injection.
      </Alert>
    </div>
  );
}

function MetforminePdc() {
  const rows = [
    { situation: "eGFR > 30 + injection IV (ou IA 2nd passage)", conduite: "Continuer metformine normalement", color: "#10b981" },
    { situation: "eGFR < 30", conduite: "STOP à l'injection. eGFR à 48h. Reprendre si stable.", color: "#dc2626" },
    { situation: "IA premier passage rénal", conduite: "STOP à l'injection. eGFR à 48h. Reprendre si stable.", color: "#dc2626" },
    { situation: "Insuffisance rénale aiguë suspectée", conduite: "STOP + surveillance rapprochée", color: "#dc2626" },
  ];
  return (
    <div>
      <div style={{ fontSize: 14, color: "#94a3b8", marginBottom: 12 }}>Conduite à tenir pour la metformine lors d'une injection de PDC iodé :</div>
      {rows.map((r, i) => (
        <div key={i} style={{ background: "#0f172a", borderRadius: 8, padding: 14, marginBottom: 8, borderLeft: `4px solid ${r.color}` }}>
          <div style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 600, marginBottom: 4 }}>{r.situation}</div>
          <div style={{ fontSize: 13, color: r.color, fontWeight: 500 }}>→ {r.conduite}</div>
        </div>
      ))}
      <Alert type="success"><strong>Point clé ESUR 2025 :</strong> plus d'arrêt systématique si eGFR {'>'} 30 et injection IV standard.</Alert>
    </div>
  );
}

function AllergieAnaph() {
  const [open, setOpen] = useState(null);
  const sections = [
    { id: "classif", title: "Classification des réactions", content: (
      <div>
        <div style={{ display: "grid", gap: 8 }}>
          {[
            { sev: "Légère (Grade 1)", sx: "Urticaire localisée, prurit, congestion nasale", color: "#f59e0b" },
            { sev: "Modérée (Grade 1–2)", sx: "Urticaire diffuse, œdème facial sans dyspnée, bronchospasme léger", color: "#f97316" },
            { sev: "Sévère (Grade 3–4)", sx: "Œdème laryngé, bronchospasme sévère, choc anaphylactique", color: "#dc2626" },
          ].map((r, i) => (
            <div key={i} style={{ background: r.color + "15", borderLeft: `4px solid ${r.color}`, borderRadius: 6, padding: 10 }}>
              <div style={{ fontWeight: 600, color: r.color, fontSize: 14 }}>{r.sev}</div>
              <div style={{ fontSize: 13, color: "#cbd5e1" }}>{r.sx}</div>
            </div>
          ))}
        </div>
      </div>
    )},
    { id: "equip", title: "Équipement obligatoire en salle", content: (
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.8, color: "#cbd5e1" }}>
        <li>Oxygène + masque haute concentration</li>
        <li>NaCl 0,9 % ou Ringer (≥ 2 L)</li>
        <li><strong style={{ color: "#dc2626" }}>Adrénaline 1 mg/mL (1:1000)</strong></li>
        <li>Antihistaminique H1 injectable (chlorphéniramine 20 mg ou clémastine 2 mg)</li>
        <li>β2-agoniste (salbutamol)</li>
        <li>Atropine</li>
        <li>Kit de prélèvement tryptase</li>
      </ul>
    )},
    { id: "pec", title: "🚨 PEC Anaphylaxie", content: (
      <div>
        {["1. Appeler équipe urgence", "2. Oxygène 10–15 L/min", "3. Adrénaline 0,5 mg IM (face latérale cuisse) — répéter si besoin", "4. Remplissage NaCl 500 mL en 10 min", "5. Antihistaminique IV", "6. ± Corticoïde (prednisolone 50 mg IV)"].map((s, i) => (
          <div key={i} style={{ background: "#0f172a", borderRadius: 6, padding: "8px 12px", marginBottom: 4, fontSize: 14, color: i < 4 ? "#f87171" : "#cbd5e1", fontWeight: i < 4 ? 600 : 400 }}>{s}</div>
        ))}
      </div>
    )},
    { id: "premed", title: "Prémédication (si allergie sévère connue)", content: (
      <div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ background: "#0f172a", borderRadius: 6, padding: 12 }}>
            <span style={{ fontWeight: 600, color: "#e2e8f0" }}>Prednisolone IV 50 mg</span><span style={{ color: "#94a3b8" }}> — ≥ 30 min avant</span>
          </div>
          <div style={{ background: "#0f172a", borderRadius: 6, padding: 12 }}>
            <span style={{ fontWeight: 600, color: "#e2e8f0" }}>Clémastine IV 2 mg</span><span style={{ color: "#94a3b8" }}> — ≥ 30 min avant</span>
          </div>
        </div>
        <Alert type="warning">La prémédication n'est PAS recommandée en routine, uniquement sur prescription allergologique.</Alert>
      </div>
    )},
  ];

  return (
    <div>
      {sections.map(s => (
        <div key={s.id} style={{ marginBottom: 8 }}>
          <div onClick={() => setOpen(open === s.id ? null : s.id)} style={{ background: "#0f172a", borderRadius: 8, padding: "12px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, color: "#e2e8f0", fontSize: 14 }}>{s.title}</span>
            <span style={{ color: "#64748b", transform: open === s.id ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
          </div>
          {open === s.id && <div style={{ padding: "12px 14px" }}>{s.content}</div>}
        </div>
      ))}
    </div>
  );
}

function IntervallesInj() {
  const [egfr, setEgfr] = useState("normal");
  const data = {
    normal: { label: "eGFR > 60", iode: { opt: "12h", min: "4h" }, gad: { opt: "6h", min: "2h" } },
    mid: { label: "eGFR 30–60", iode: { opt: "48h", min: "16h" }, gad: { opt: "48h", min: "16h" } },
    low: { label: "eGFR < 30", iode: { opt: "7 jours", min: "60h" }, gad: { opt: "7 jours", min: "60h" } },
  };
  const d = data[egfr];

  return (
    <div>
      <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Fonction rénale</label>
      <select value={egfr} onChange={e => setEgfr(e.target.value)} style={{ ...selStyle, marginBottom: 16 }}>
        <option value="normal">eGFR {'>'} 60</option>
        <option value="mid">eGFR 30–60</option>
        <option value="low">eGFR {'<'} 30</option>
      </select>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 8 }}>Entre 2 injections de contraste iodé</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        <div style={{ background: "#10b98120", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Optimal</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{d.iode.opt}</div>
        </div>
        <div style={{ background: "#f59e0b20", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Minimal (urgence)</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#f59e0b" }}>{d.iode.min}</div>
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 8 }}>Gadolinium (IRM) → puis iodé (CT)</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        <div style={{ background: "#8b5cf620", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Optimal</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#8b5cf6" }}>{d.gad.opt}</div>
        </div>
        <div style={{ background: "#f59e0b20", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Minimal</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#f59e0b" }}>{d.gad.min}</div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: "#64748b" }}>💡 Préférer IRM avant CT (sauf uro-CT).</div>
    </div>
  );
}

function ExtravPdc() {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 12 }}>Prévention</div>
      <ul style={{ margin: "0 0 16px", paddingLeft: 18, fontSize: 14, lineHeight: 1.8, color: "#cbd5e1" }}>
        <li>Cathéter adapté (taille veine + débit)</li>
        <li><strong>Test NaCl 0,9 % (10–20 mL)</strong> avant le contraste</li>
        <li>Réchauffement du contraste à 37°C (↓ viscosité)</li>
        <li>Surveillance visuelle du point de ponction pendant l'injection</li>
      </ul>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 8 }}>Prise en charge</div>
      {[
        { sev: "Légère", action: "Élévation membre + glace, surveillance 2–4h", color: "#f59e0b" },
        { sev: "Modérée", action: "Idem + évaluation neurovasculaire", color: "#f97316" },
        { sev: "Sévère (> 150 mL)", action: "AVIS CHIRURGICAL URGENT", color: "#dc2626" },
      ].map((r, i) => (
        <div key={i} style={{ background: r.color + "15", borderLeft: `4px solid ${r.color}`, borderRadius: 6, padding: 10, marginBottom: 6 }}>
          <span style={{ fontWeight: 600, color: r.color }}>{r.sev} : </span>
          <span style={{ color: "#cbd5e1", fontSize: 14 }}>{r.action}</span>
        </div>
      ))}
    </div>
  );
}

function PopulationsPdc() {
  const [open, setOpen] = useState(null);
  const items = [
    { id: "grossesse", title: "🤰 Grossesse", content: "Si examen essentiel → OK avec contraste iodé. Contrôle TSH néonatal dans la 1ère semaine (en France : test de Guthrie systématique = déjà couvert). Gadolinium : dose minimale macrocyclique si indication forte." },
    { id: "allaitement", title: "🤱 Allaitement", content: "Iodé et gadolinium macrocyclique : l'allaitement peut continuer normalement. Pas d'interruption nécessaire." },
    { id: "thyroide", title: "🦋 Hyperthyroïdie", content: "Contre-indication : hyperthyroïdie manifeste non traitée. Si risque : dosage TSH préalable. Surveillance endocrinologique post-injection si patient à risque." },
    { id: "myasthenie", title: "💪 Myasthénie", content: "Risque d'exacerbation dans les 24h (< 5 % patients). Gadolinium = sûr. Surveillance prolongée recommandée." },
    { id: "pheo", title: "🔴 Phéochromocytome", content: "IV : pas de préparation spéciale. IA : blocage α-β adrénergique oral recommandé." },
  ];

  return (
    <div>
      {items.map(it => (
        <div key={it.id} style={{ marginBottom: 6 }}>
          <div onClick={() => setOpen(open === it.id ? null : it.id)} style={{ background: "#0f172a", borderRadius: 8, padding: "12px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 500, color: "#e2e8f0", fontSize: 14 }}>{it.title}</span>
            <span style={{ color: "#64748b", transform: open === it.id ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
          </div>
          {open === it.id && <div style={{ padding: "10px 14px", fontSize: 13, color: "#cbd5e1", lineHeight: 1.6, background: "#0f172a80", borderRadius: "0 0 8px 8px" }}>{it.content}</div>}
        </div>
      ))}
    </div>
  );
}

function InterfBio() {
  const [egfr, setEgfr] = useState("normal");
  const data = {
    normal: { label: "> 60", sang: { min: "4h", opt: "12h" }, urine: "24h" },
    mid: { label: "30–60", sang: { min: "16h", opt: "48h" }, urine: "48h" },
    low: { label: "< 30", sang: { min: "60h", opt: "7 jours" }, urine: "7 jours" },
  };
  const d = data[egfr];

  return (
    <div>
      <div style={{ fontSize: 14, color: "#94a3b8", marginBottom: 12 }}>Délai entre injection de PDC iodé et prélèvements biologiques</div>
      <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>eGFR</label>
      <select value={egfr} onChange={e => setEgfr(e.target.value)} style={{ ...selStyle, marginBottom: 16 }}>
        <option value="normal">{'>'} 60</option>
        <option value="mid">30–60</option>
        <option value="low">{'<'} 30</option>
      </select>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        <div style={{ background: "#3b82f620", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Sang (min)</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#3b82f6" }}>{d.sang.min}</div>
        </div>
        <div style={{ background: "#10b98120", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Sang (optimal)</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#10b981" }}>{d.sang.opt}</div>
        </div>
        <div style={{ background: "#8b5cf620", borderRadius: 8, padding: 12, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>Urinaire</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#8b5cf6" }}>{d.urine}</div>
        </div>
      </div>
    </div>
  );
}

// --- DELAIS MODULE ---
function DelaisModule() {
  const traitements = [
    { id: "chimio", label: "Chimiothérapie", delai: "≥ 10 jours", jours: 10, detail: "Pic d'infiltration macrophagique → faux positifs. Idéalement juste avant le cycle suivant." },
    { id: "rt", label: "Radiothérapie", delai: "2–3 mois", jours: 75, detail: "Inflammation radio-induite visible en TEP jusqu'à 2–3 mois (surtout ORL)." },
    { id: "chir", label: "Chirurgie", delai: "≥ 6 semaines", jours: 42, detail: "Inflammation post-opératoire du champ et des relais ganglionnaires adjacents." },
    { id: "gcsf", label: "G-CSF / GM-CSF", delai: "> 2 semaines", jours: 15, detail: "Hyperfixation médullaire diffuse. Ne pas confondre avec envahissement." },
  ];
  const [sel, setSel] = useState(null);
  const [dateTrt, setDateTrt] = useState("");
  const earliest = useMemo(() => {
    if (!sel || !dateTrt) return null;
    const t = traitements.find(x => x.id === sel);
    const d = new Date(dateTrt);
    if (isNaN(d.getTime())) return null;
    d.setDate(d.getDate() + t.jours);
    return d.toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }, [sel, dateTrt]);

  return (
    <Card style={{ marginTop: 0 }}>
      <h3 style={{ color: "#93c5fd", margin: "0 0 16px" }}>Intervalles post-traitement</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {traitements.map(t => (
          <div key={t.id} onClick={() => setSel(t.id)} style={{ background: sel === t.id ? "#3b82f620" : "#0f172a", border: `1px solid ${sel === t.id ? "#3b82f6" : "#334155"}`, borderRadius: 10, padding: 14, cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: "#e2e8f0", fontSize: 14 }}>{t.label}</span>
              <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13 }}>{t.delai}</span>
            </div>
            {sel === t.id && <div style={{ marginTop: 8, fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{t.detail}</div>}
          </div>
        ))}
      </div>
      {sel && (
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, display: "block" }}>Date du traitement (optionnel)</label>
          <input type="date" value={dateTrt} onChange={e => setDateTrt(e.target.value)} style={inputStyle} />
        </div>
      )}
      {earliest && (
        <div style={{ background: "#10b98120", border: "1px solid #10b98160", borderRadius: 8, padding: 14, textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4 }}>Date la plus précoce pour la TEP</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#10b981" }}>{earliest}</div>
        </div>
      )}
    </Card>
  );
}

// --- PIEGES MODULE ---
function PiegesModule() {
  const categories = [
    { title: "Captations physiologiques", items: [
      { label: "Cerveau", text: "Captation très intense (≈ 7 %). NE PAS utiliser la TEP FDG pour la détection primaire des métastases cérébrales.", color: "#dc2626" },
      { label: "Myocarde", text: "Variable. Jeûne = faible, post-prandial = intense. Régime pauvre en glucides 24h si évaluation cardiaque.", color: "#f59e0b" },
      { label: "Reins / voies urinaires", text: "Excrétion FDG. Artefacts pelviens. Bonne hydratation + miction pré-acquisition.", color: "#f59e0b" },
      { label: "Graisse brune", text: "Sujets jeunes, minces, froid. Maintien au chaud +++.", color: "#f59e0b" },
      { label: "Anneau de Waldeyer", text: "Captation lymphoïde physiologique.", color: "#3b82f6" },
      { label: "Thymus", text: "Enfants/jeunes adultes. Rebond thymique post-chimio.", color: "#3b82f6" },
      { label: "Côlon", text: "Variable. Augmentée sous metformine.", color: "#f59e0b" },
      { label: "Moelle osseuse", text: "Augmentée par G-CSF, infection, anémie.", color: "#f59e0b" },
      { label: "Muscles", text: "Augmentée par exercice, insuline, alimentation.", color: "#3b82f6" },
      { label: "Iléon terminal / cæcum", text: "Tissu lymphoïde. Variabilité interindividuelle.", color: "#3b82f6" },
    ]},
    { title: "Artefacts techniques", items: [
      { label: "Implants métalliques", text: "Artefacts sévères TDM → TEP. Quantification non fiable. Vérifier NAC-PET.", color: "#dc2626" },
      { label: "Troncature champ TDM", text: "Champ TDM < TEP → artefacts. Champs étendus recommandés.", color: "#dc2626" },
      { label: "Désynchronisation horloges", text: "± 1 min. Erreur systématique dans correction de décroissance.", color: "#f59e0b" },
      { label: "Extravasation", text: "Signaler + imager. SUV potentiellement sous-estimé.", color: "#dc2626" },
      { label: "Mouvement patient", text: "Mismatch TEP/TDM. Vérifier NAC-PET.", color: "#f59e0b" },
      { label: "PDC iodé concentré", text: "Surdensité TDM → surcorrection d'atténuation. Vérifier NAC-PET.", color: "#f59e0b" },
    ]},
    { title: "Pièges post-traitement", items: [
      { label: "Post-chimiothérapie", text: "Infiltration macrophagique = faux positifs. Délai ≥ 10 jours.", color: "#f59e0b" },
      { label: "Post-radiothérapie", text: "Inflammation radio-induite jusqu'à 2–3 mois.", color: "#f59e0b" },
      { label: "Post-chirurgie", text: "Inflammation champ opératoire + ganglions. Délai ≥ 6 semaines.", color: "#f59e0b" },
      { label: "G-CSF / GM-CSF", text: "Activation médullaire diffuse > 2 semaines. ≠ envahissement.", color: "#f59e0b" },
      { label: "Rebond thymique", text: "Post-chimio chez sujet jeune. Physiologique.", color: "#3b82f6" },
    ]},
  ];
  const [openCat, setOpenCat] = useState(0);
  const [openItem, setOpenItem] = useState(null);

  return (
    <Card style={{ marginTop: 0 }}>
      <h3 style={{ color: "#93c5fd", margin: "0 0 16px" }}>Pièges & biodistribution</h3>
      {categories.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: 12 }}>
          <div onClick={() => setOpenCat(openCat === ci ? null : ci)} style={{ background: "#0f172a", borderRadius: 8, padding: "12px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, color: "#e2e8f0", fontSize: 15 }}>{cat.title}</span>
            <span style={{ color: "#64748b", transform: openCat === ci ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
          </div>
          {openCat === ci && (
            <div style={{ marginTop: 4 }}>
              {cat.items.map((it, ii) => {
                const key = `${ci}-${ii}`;
                return (
                  <div key={key}>
                    <div onClick={() => setOpenItem(openItem === key ? null : key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", cursor: "pointer", borderBottom: "1px solid #1e293b" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: it.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "#cbd5e1" }}>{it.label}</span>
                    </div>
                    {openItem === key && <div style={{ padding: "8px 14px 12px 32px", fontSize: 13, color: "#94a3b8", lineHeight: 1.6, background: "#0f172a50" }}>{it.text}</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: 16, fontSize: 12, color: "#475569", textAlign: "center" }}>Sources : EANM v3.0 2025 • ESUR 2025</div>
    </Card>
  );
}

// --- MAIN APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState("diabete");
  const renderModule = () => {
    switch (activeTab) {
      case "diabete": return <DiabeteModule />;
      case "glycemie": return <GlycemieModule />;
      case "checklist": return <ChecklistModule />;
      case "pdc": return <PdcModule />;
      case "delais": return <DelaisModule />;
      case "pieges": return <PiegesModule />;
      default: return null;
    }
  };

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "12px 16px 100px" }}>
        <div style={{ textAlign: "center", padding: "16px 0 12px" }}>
          <div style={{ fontSize: 13, color: "#64748b", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>EANM 2025 • ESUR 2025</div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#f1f5f9" }}>Assistant TEP [¹⁸F]FDG</h1>
          <div style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>Boellaard et al. 2025 • ESUR CMSC 2025</div>
        </div>
        <div style={{ marginTop: 8 }}>{renderModule()}</div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#1e293b", borderTop: "1px solid #334155", display: "flex", justifyContent: "center", padding: "0 4px", zIndex: 100 }}>
        <div style={{ display: "flex", maxWidth: 640, width: "100%", justifyContent: "space-around" }}>
          {tabs.map(t => (
            <div key={t.id} onClick={() => setActiveTab(t.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 4px", cursor: "pointer", flex: 1, minWidth: 0, color: activeTab === t.id ? "#3b82f6" : "#64748b" }}>
              <span style={{ fontSize: 18, marginBottom: 2 }}>{t.icon}</span>
              <span style={{ fontSize: 10, fontWeight: activeTab === t.id ? 700 : 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
