const MIXED_BATCH1 = [
  // ============================================================
  // 1. CARDIAC ARREST — Hard, P level — 4 questions
  // ============================================================
  {
    id: "mixed-cardiac-arrest-01",
    title: "58M — Unresponsive in Restaurant",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "Dispatched to a busy restaurant for a 58-year-old male who collapsed at the table. Bystanders report he grabbed his chest and then slumped over approximately 2 minutes ago. A bystander is performing CPR.",
    patient: { age: 58, sex: "M", cc: "Unresponsive, not breathing" },
    scene: "Patient is supine on the restaurant floor. A bystander is doing chest compressions. An AED from the restaurant wall is nearby but has not been applied. Multiple witnesses confirm the collapse was witnessed approximately 2 minutes ago.",
    vitals: { hr: 0, bp: "0/0", rr: 0, spo2: null, gcs: 3, temp: "98.2°F", bg: null },
    questions: [
      {
        phase: "initial",
        prompt: "You arrive to find bystander CPR in progress on this witnessed arrest. Place the following actions in the correct order per NY State protocol.",
        type: "order",
        level_filter: "P",
        items: [
          "Apply defibrillator pads and analyze rhythm",
          "Take over high-quality CPR from bystander",
          "Shock if indicated, then resume CPR for 2 minutes",
          "Establish advanced airway and switch to continuous compressions at 8-10 breaths/min"
        ],
        correctOrder: [1, 0, 2, 3],
        explanation: "For a witnessed arrest with bystander CPR, the priority is to apply the defibrillator quickly since early defibrillation is key. Take over CPR, apply pads and analyze, shock if indicated then 2-min cycle, then establish advanced airway. After advanced airway, switch to continuous compressions with 8-10 breaths/min.",
        protocol_ref: "als_cardiac_arrest_adult...",
        clinical_pearl: "In a witnessed arrest with bystander CPR already in progress, prioritize early defibrillation. Minimize interruptions in compressions — pause only to analyze and shock."
      },
      {
        phase: "assessment",
        prompt: "After ROSC is not achieved through two cycles, you need to search for reversible causes. Categorize each item as either an 'H' or a 'T' per the NY protocol H's and T's mnemonic.",
        type: "categorize",
        level_filter: "P",
        narrative: "You have intubated the patient with waveform capnography reading 12 mmHg. Two rounds of epinephrine have been given. No ROSC after 10 minutes. You begin considering reversible causes.",
        vitals_update: { hr: 0, bp: "0/0", rr: 0, spo2: null, gcs: 3 },
        items: [
          "Hypoglycemia",
          "Tension pneumothorax",
          "Hypovolemia",
          "Toxins",
          "Hyperkalemia",
          "Trauma"
        ],
        categories: ["H (H's)", "T (T's)"],
        correctCategories: [0, 1, 0, 1, 0, 1],
        explanation: "Per NY protocol, the H's are: Hypoglycemia, Hypovolemia, Hypoxia, H+ (acidosis), and Hyperkalemia. The T's are: Toxins, Tension pneumothorax, and Trauma. Systematically working through these during arrest helps identify treatable causes.",
        protocol_ref: "als_cardiac_arrest_adult...",
        clinical_pearl: "NY protocol specifically includes Hypoglycemia in the H's — always check blood glucose during cardiac arrest when possible."
      },
      {
        phase: "treatment",
        prompt: "Your partner reports the patient's core temperature is 29°C (84°F). You have already delivered 3 defibrillation shocks with no change. Per NY protocol for hypothermic cardiac arrest, what is your next action regarding defibrillation?",
        type: "mc",
        level_filter: "P",
        narrative: "A restaurant employee mentions the patient had been outside in freezing rain for over an hour before coming inside. Core temperature reads 29°C.",
        options: [
          { text: "Continue shocking every 2 minutes as with any arrest", correct: false, critical: true, explanation: "In hypothermic arrest, NY protocol limits shocks to a maximum of 3. Continued shocks on a hypothermic myocardium are unlikely to convert and may cause harm.", protocol_ref: "als_cardiac_arrest_adult..." },
          { text: "Withhold further shocks; max 3 shocks have been delivered per hypothermia protocol", correct: true, critical: false, explanation: "Correct. NY protocol states that in hypothermic cardiac arrest, defibrillation is limited to a maximum of 3 shocks. Medications are also limited to one round.", protocol_ref: "als_cardiac_arrest_adult..." },
          { text: "Double the joules on the next shock attempt to overcome hypothermic resistance", correct: false, critical: true, explanation: "There is no protocol for doubling joules. Hypothermia protocol limits total shocks to 3.", protocol_ref: "als_cardiac_arrest_adult..." },
          { text: "Switch to synchronized cardioversion since defibrillation has failed", correct: false, critical: false, explanation: "Synchronized cardioversion is not indicated in cardiac arrest. The correct action is to withhold further shocks after 3 attempts in hypothermia.", protocol_ref: "als_cardiac_arrest_adult..." }
        ],
        clinical_pearl: "Hypothermic patients get max 3 shocks AND medications limited to one round. The cold myocardium is refractory — focus on rewarming and high-quality CPR."
      },
      {
        phase: "transport",
        prompt: "Match each provider level to the correct termination of resuscitation (TOR) guidance per NY protocol.",
        type: "table",
        level_filter: "P",
        narrative: "It has been 25 minutes with no ROSC. You are considering options.",
        rows: [
          "EMT-level crew, 20+ minutes no ROSC",
          "Paramedic-level crew, hypothermic arrest patient"
        ],
        columns: [
          "Consider contacting medical control for TOR",
          "Continue resuscitation, do NOT terminate"
        ],
        correctCells: [[0], [1]],
        explanation: "Per NY protocol, EMTs may consider contacting medical control for termination of resuscitation after 20 minutes of no ROSC. However, hypothermic arrest patients should NOT be terminated in the field — 'they're not dead until they're warm and dead.' Continue resuscitation and transport.",
        protocol_ref: "als_cardiac_arrest_adult...",
        clinical_pearl: "The old adage holds: hypothermic patients are not dead until they are warm and dead. Always transport hypothermic arrest patients."
      }
    ]
  },

  // ============================================================
  // 2. STROKE — Medium, EMT-AEMT-CC-P — 3 questions
  // ============================================================
  {
    id: "mixed-stroke-01",
    title: "72F — Difficulty Speaking, Right-Sided Weakness",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "Dispatched to a private residence for a 72-year-old female with sudden difficulty speaking. Family reports symptoms noticed when she woke from a nap 45 minutes ago.",
    patient: { age: 72, sex: "F", cc: "Slurred speech, right arm weakness" },
    scene: "Patient is seated in a recliner in the living room. She is awake but having difficulty speaking. Her husband states she was fine when she went to nap at 1300 and he found her like this at 1345. She was last seen normal by a neighbor at 1230 when they had coffee together.",
    vitals: { hr: 88, bp: "178/96", rr: 16, spo2: 97, gcs: 13, temp: "98.4°F", bg: "142 mg/dL" },
    questions: [
      {
        phase: "assessment",
        prompt: "The husband says she was fine at 1300 before her nap, and the neighbor saw her normal at 1230. Symptoms were discovered at 1345. Per NY protocol, what is the 'Last Known Well' time?",
        type: "mc",
        level_filter: "EMT-AEMT-CC-P",
        options: [
          { text: "1345 — when symptoms were first discovered", correct: false, critical: false, explanation: "1345 is when symptoms were noticed, not when she was last known to be well. NY protocol distinguishes 'Last Known Well' from symptom onset/discovery.", protocol_ref: "als_stroke" },
          { text: "1300 — when the husband last saw her normal before the nap", correct: true, critical: false, explanation: "Correct. The husband is the last person to confirm she was neurologically normal, at 1300. The neighbor saw her at 1230 but the husband's 1300 observation is more recent. 'Last Known Well' is the last time someone confirmed normal function — not when symptoms were found.", protocol_ref: "als_stroke" },
          { text: "1230 — when the neighbor saw her at coffee", correct: false, critical: false, explanation: "While the neighbor did see her normal at 1230, the husband confirmed normal function more recently at 1300. Use the most recent confirmed normal time.", protocol_ref: "als_stroke" },
          { text: "Unknown — since she was asleep, the onset time cannot be determined", correct: false, critical: false, explanation: "The onset time may be uncertain, but 'Last Known Well' can still be determined — it is when she was last confirmed normal (1300 by husband).", protocol_ref: "als_stroke" }
        ],
        clinical_pearl: "NY protocol specifically uses 'Last Known Well' — NOT 'symptom onset.' This distinction matters because stroke patients may wake with symptoms. The clock starts from the last confirmed normal neurologic status."
      },
      {
        phase: "assessment",
        prompt: "Place the following stroke assessment and management steps in the correct order per NY protocol.",
        type: "order",
        level_filter: "EMT-AEMT-CC-P",
        items: [
          "Perform Cincinnati Stroke Scale",
          "Check blood glucose",
          "Determine Last Known Well time",
          "Notify receiving hospital of suspected stroke"
        ],
        correctOrder: [2, 0, 1, 3],
        explanation: "Per NY protocol: First determine the Last Known Well time (critical for treatment decisions), perform the Cincinnati Stroke Scale to confirm stroke signs, check blood glucose (to rule out hypoglycemia mimicking stroke), then notify the hospital ASAP so the stroke team can prepare. Do not delay transport for any of these steps.",
        protocol_ref: "als_stroke",
        clinical_pearl: "Early hospital notification is emphasized in NY protocol — the stroke team needs maximum preparation time. But don't delay transport to make the call; notify en route."
      },
      {
        phase: "treatment",
        prompt: "The Last Known Well time is 1300 and current time is 1400. Select the TWO most important transport decisions per NY protocol. (Select 2)",
        type: "mr",
        level_filter: "EMT-AEMT-CC-P",
        selectCount: 2,
        narrative: "Cincinnati Stroke Scale is positive for facial droop and arm drift. Blood glucose is 142 mg/dL. BP is 178/96.",
        options: [
          { text: "Transport to the nearest Designated Stroke Center since Last Known Well is less than 3.5 hours", correct: true, critical: false, explanation: "Correct. With a Last Known Well of only 1 hour ago (<3.5 hours), the patient is a potential thrombolytic candidate and should go to a Designated Stroke Center.", protocol_ref: "als_stroke" },
          { text: "Notify the receiving hospital as soon as possible so the stroke team can prepare", correct: true, critical: false, explanation: "Correct. NY protocol emphasizes notifying the hospital ASAP. Early notification allows the stroke team to mobilize and prepare for rapid assessment on arrival.", protocol_ref: "als_stroke" },
          { text: "Administer Metoprolol 5mg IV push to lower the blood pressure before transport", correct: false, critical: true, explanation: "Metoprolol requires medical control authorization and is only indicated when SBP >220 or DBP >120. This patient's BP of 178/96 does not meet that threshold. Lowering BP inappropriately can worsen stroke outcomes.", protocol_ref: "als_stroke" },
          { text: "Delay transport to establish two large-bore IVs and obtain a 12-lead ECG", correct: false, critical: false, explanation: "NY protocol states do not delay transport. IV access and 12-lead can be obtained en route. Time to definitive care is critical.", protocol_ref: "als_stroke" },
          { text: "Transport to the nearest emergency department regardless of stroke designation since time is critical", correct: false, critical: false, explanation: "When Last Known Well is <3.5 hours, NY protocol directs transport to a Designated Stroke Center, not just the nearest ED. The stroke center has the resources for thrombolytic therapy.", protocol_ref: "als_stroke" }
        ],
        clinical_pearl: "The 3.5-hour window from Last Known Well is the key decision point for stroke center transport in NY protocol. Every minute counts — 'time is brain.'"
      }
    ]
  },

  // ============================================================
  // 3. SEPTIC SHOCK — Hard, AEMT-CC-P — 3 questions
  // ============================================================
  {
    id: "mixed-sepsis-01",
    title: "76M — Fever and Confusion at Nursing Facility",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "Dispatched to a skilled nursing facility for a 76-year-old male with fever and altered mental status. Staff reports he has had a urinary catheter and has been increasingly confused over the past 6 hours.",
    patient: { age: 76, sex: "M", cc: "Fever, confusion" },
    scene: "Patient is in bed at the nursing facility. He is diaphoretic and appears flushed. Staff reports his temperature spiked to 103.2°F two hours ago. He has an indwelling urinary catheter with cloudy, foul-smelling urine. He is disoriented and only following simple commands intermittently.",
    vitals: { hr: 118, bp: "88/52", rr: 24, spo2: 91, gcs: 12, temp: "103.2°F", bg: "158 mg/dL" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on NY protocol criteria for severe sepsis/septic shock, which finding is MOST critical in confirming this patient meets the septic shock definition?",
        type: "mc",
        level_filter: "AEMT-CC-P",
        options: [
          { text: "Temperature of 103.2°F indicating active infection", correct: false, critical: false, explanation: "While fever supports suspected infection, temperature alone does not define septic shock. The NY protocol criteria require suspected infection PLUS hypotension (SBP <100) or altered mental status.", protocol_ref: "als_shock_adult_severe_sepsis..." },
          { text: "Suspected infection (UTI) combined with hypotension (SBP 88, which is <100)", correct: true, critical: false, explanation: "Correct. NY protocol defines septic shock criteria as suspected infection plus hypotension (SBP <100) OR altered mental status. This patient has both — suspected UTI with SBP of 88 (<100) and altered mental status.", protocol_ref: "als_shock_adult_severe_sepsis..." },
          { text: "Heart rate of 118 indicating cardiovascular compromise", correct: false, critical: false, explanation: "Tachycardia is concerning but is not one of the specific NY protocol criteria for septic shock. The criteria are suspected infection + SBP <100 or altered mental status.", protocol_ref: "als_shock_adult_severe_sepsis..." },
          { text: "SpO2 of 91% indicating respiratory failure from sepsis", correct: false, critical: false, explanation: "Low SpO2 needs treatment but is not part of the specific NY septic shock criteria. The protocol specifies suspected infection + SBP <100 or altered mental status.", protocol_ref: "als_shock_adult_severe_sepsis..." }
        ],
        clinical_pearl: "NY protocol septic shock criteria are straightforward: suspected infection + (SBP <100 OR altered mental status). This patient hits both — UTI source plus hypotension AND confusion."
      },
      {
        phase: "assessment",
        prompt: "Categorize each of the following findings as either a 'Septic Shock Criterion' per NY protocol or a 'Supportive Finding' (concerning but not part of the specific criteria).",
        type: "categorize",
        level_filter: "AEMT-CC-P",
        items: [
          "SBP of 88 mmHg",
          "Heart rate of 118",
          "Altered mental status",
          "SpO2 of 91%",
          "Suspected urinary tract infection",
          "Temperature of 103.2°F"
        ],
        categories: ["Septic Shock Criterion", "Supportive Finding"],
        correctCategories: [0, 1, 0, 1, 0, 1],
        explanation: "Per NY protocol, the septic shock criteria are: suspected infection (the UTI), plus hypotension SBP <100 (SBP 88) OR altered mental status. The tachycardia (HR 118), hypoxia (SpO2 91%), and fever (103.2°F) are supportive clinical findings that suggest sepsis but are not the specific protocol-defined criteria.",
        protocol_ref: "als_shock_adult_severe_sepsis...",
        clinical_pearl: "Knowing the exact protocol criteria helps you quickly identify septic shock in the field and activate the appropriate treatment pathway."
      },
      {
        phase: "treatment",
        prompt: "Place the following septic shock treatment steps in the correct priority order per NY protocol.",
        type: "order",
        level_filter: "AEMT-CC-P",
        narrative: "You have confirmed septic shock. Lungs are clear bilaterally. You are preparing to treat.",
        vitals_update: { hr: 122, bp: "84/48", rr: 26, spo2: 89 },
        items: [
          "Start Norepinephrine 2mcg/min if MAP still <65 after at least 1L infused",
          "Apply high-flow O2 via NRB and maintain body temperature",
          "Establish large-bore IV and give NS 500mL bolus",
          "Reassess — repeat NS 500mL bolus up to 2L total if lungs remain clear and SBP <100"
        ],
        correctOrder: [1, 2, 3, 0],
        explanation: "Per NY protocol: First apply high-flow O2 via NRB and maintain body temperature (ALL level). Then establish large-bore IV and give NS 500mL bolus (SBP <100 or MAP <65). Reassess and repeat fluid up to 2L if lungs clear and goals not met. Only after at least 1L has been infused should Norepinephrine be considered (Paramedic level) at 2mcg/min titrated to MAP >65 or SBP >100.",
        protocol_ref: "als_shock_adult_severe_sepsis...",
        clinical_pearl: "The 1L minimum before pressors is a key NY protocol point — Norepinephrine should not be started until adequate fluid resuscitation has been attempted. Goal is SBP >100 and MAP >65."
      }
    ]
  },

  // ============================================================
  // 4. CHEST PAIN / ACS — Medium, EMT-AEMT-CC-P — 3 questions
  // ============================================================
  {
    id: "mixed-chest-pain-01",
    title: "55M — Chest Tightness While Shoveling Snow",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "Dispatched to a residential driveway for a 55-year-old male with chest tightness that started while shoveling snow. Patient is conscious and breathing.",
    patient: { age: 55, sex: "M", cc: "Chest tightness radiating to left arm" },
    scene: "Patient is sitting on his front steps in the cold. He is diaphoretic and pale, clutching his chest. He states the pain started 20 minutes ago while shoveling heavy wet snow. He has a prescription for nitroglycerin tablets at home. Pain is 8/10, pressure-like, radiating to his left arm and jaw.",
    vitals: { hr: 96, bp: "148/92", rr: 20, spo2: 95, gcs: 15, temp: "97.8°F", bg: "124 mg/dL" },
    questions: [
      {
        phase: "assessment",
        prompt: "You perform a 12-lead ECG. The monitor displays: ST-segment elevation of 3mm in leads II, III, and aVF with reciprocal ST depression in leads I and aVL. Based on this ECG pattern, what is your interpretation and the MOST appropriate transport decision?",
        type: "graphical",
        level_filter: "EMT-AEMT-CC-P",
        options: [
          { text: "Inferior STEMI — transport to the nearest PCI-capable facility targeting arrival within 90 minutes", correct: true, critical: false, explanation: "Correct. ST elevation in II, III, aVF with reciprocal changes in I and aVL indicates an inferior STEMI. Per NY protocol, STEMI patients should be transported to a PCI facility within 90 minutes.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Anterior STEMI — transport to the nearest PCI-capable facility targeting arrival within 60 minutes", correct: false, critical: false, explanation: "The leads described (II, III, aVF) indicate an inferior wall MI, not anterior. Anterior STEMI would show ST elevation in V1-V4. Also, NY protocol specifies a 90-minute target, not 60.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Non-STEMI — transport to the nearest emergency department for further evaluation", correct: false, critical: true, explanation: "This ECG shows clear ST elevation meeting STEMI criteria. Misidentifying a STEMI as a non-STEMI would delay critical PCI intervention.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Pericarditis — diffuse ST changes, transport non-emergently to nearest ED", correct: false, critical: false, explanation: "Pericarditis typically shows diffuse ST elevation across many leads without reciprocal changes. This pattern of focal elevation with reciprocal depression is classic STEMI.", protocol_ref: "als_cardiac_related_problem..." }
        ],
        clinical_pearl: "Reciprocal changes (ST depression in leads 'opposite' to the elevation) strongly support true STEMI over other causes of ST elevation like pericarditis or early repolarization."
      },
      {
        phase: "treatment",
        prompt: "The patient has his own prescribed nitroglycerin tablets. His BP is 148/92. Per NY protocol, what is the correct approach to nitroglycerin administration at the EMT level?",
        type: "mc",
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You have administered aspirin 324mg (4 x 81mg chewed). The patient asks if he can take his nitroglycerin.",
        options: [
          { text: "Assist the patient with his own NTG, up to 3 doses 5 minutes apart, as long as SBP remains above 120", correct: true, critical: false, explanation: "Correct. Per NY protocol at the EMT level, you may assist the patient with their own prescribed NTG up to 3 doses, 5 minutes apart, provided SBP remains above 120 mmHg.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Administer NTG 0.4mg sublingual from your own drug supply since the patient has chest pain", correct: false, critical: false, explanation: "At the EMT level, you assist with the patient's own NTG — you do not carry or administer NTG from your own supply. AEMT and above can administer NTG 0.4mg SL from their supply.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Withhold NTG because this is an inferior STEMI and NTG is contraindicated", correct: false, critical: false, explanation: "While some systems are cautious with NTG in inferior/right ventricular MI, the NY protocol criteria for NTG is based on blood pressure (SBP >120), not infarct location at the EMT level.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Give one dose only and reassess; NY protocol limits EMTs to a single NTG dose", correct: false, critical: false, explanation: "NY protocol allows EMTs to assist with up to 3 doses of the patient's own NTG, 5 minutes apart, as long as SBP stays above 120.", protocol_ref: "als_cardiac_related_problem..." }
        ],
        clinical_pearl: "Key distinction: EMTs ASSIST with the patient's OWN NTG. AEMTs and above can administer NTG 0.4mg SL from their supply. The SBP threshold differs too — EMT requires >120, Advanced requires >120 or MAP >90."
      },
      {
        phase: "treatment",
        prompt: "En route to the PCI facility, the patient's BP drops to 92/58. Select the TWO correct interventions per NY protocol. (Select 2)",
        type: "mr",
        level_filter: "EMT-AEMT-CC-P",
        selectCount: 2,
        narrative: "After one dose of NTG, the patient reports some relief but now feels lightheaded. Repeat vitals show a significant BP drop.",
        vitals_update: { hr: 104, bp: "92/58", rr: 22, spo2: 94, gcs: 15 },
        options: [
          { text: "Place the patient supine and administer NS 500mL bolus IV", correct: true, critical: false, explanation: "Correct. Per NY protocol, if SBP <100, place the patient supine and give a NS 500mL bolus.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Withhold any further nitroglycerin doses", correct: true, critical: false, explanation: "Correct. NTG requires SBP >120 (EMT assisting patient's own) or SBP >120/MAP >90 (Advanced). With SBP of 92, NTG is absolutely contraindicated and could worsen hypotension.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Administer a second NTG dose to continue treating the chest pain", correct: false, critical: true, explanation: "Giving NTG with SBP of 92 is dangerous. NY protocol requires SBP >120 for NTG administration. This could cause cardiovascular collapse.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Start a Norepinephrine drip at 2mcg/min to support blood pressure", correct: false, critical: false, explanation: "Norepinephrine is part of the septic shock protocol, not the cardiac chest pain protocol. The correct intervention for hypotension in ACS is supine positioning and NS fluid bolus.", protocol_ref: "als_cardiac_related_problem..." },
          { text: "Administer a second 324mg dose of aspirin to improve platelet inhibition", correct: false, critical: false, explanation: "The protocol calls for a single dose of aspirin 324mg (4 x 81mg chewed). There is no indication to repeat the aspirin dose.", protocol_ref: "als_cardiac_related_problem..." }
        ],
        clinical_pearl: "Always recheck BP before each NTG dose. The SBP >120 threshold exists because NTG is a potent vasodilator — especially dangerous in right ventricular infarction where preload is already compromised."
      }
    ]
  },

  // ============================================================
  // 5. OPIOID OD WITH HYPOGLYCEMIA — Medium, EMT-AEMT-CC-P — 3 questions
  // ============================================================
  {
    id: "mixed-opioid-hypo-01",
    title: "34F — Found Unresponsive in Park",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "Dispatched to a city park for a 34-year-old female found unresponsive on a bench. Bystanders report she has been there for an unknown amount of time. Drug paraphernalia noted nearby.",
    patient: { age: 34, sex: "F", cc: "Unresponsive" },
    scene: "Patient is slumped on a park bench, unresponsive. Respirations are slow and shallow at 6/min. Pupils are pinpoint bilaterally. A syringe and rubber tourniquet are on the ground next to her. A medical alert bracelet on her left wrist reads 'Type 1 Diabetes.'",
    vitals: { hr: 52, bp: "96/60", rr: 6, spo2: 78, gcs: 6, temp: "96.8°F", bg: "38 mg/dL" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient presents with signs of opioid overdose AND a blood glucose of 38 mg/dL. Per NY protocol, what is the MOST important first intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-CC-P",
        options: [
          { text: "Administer intranasal naloxone immediately to reverse the opioid effects", correct: false, critical: false, explanation: "While naloxone is important, the patient is hypoxic (SpO2 78%) with a respiratory rate of 6. ABCs come first — airway management and ventilation must precede naloxone. Both the opioid and hypoglycemia protocols start with ABCs.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Manage the airway and provide ventilatory support (BVM) as the first priority", correct: true, critical: false, explanation: "Correct. Per NY protocol, ABCs are the priority for both opioid overdose and hypoglycemia. With an SpO2 of 78% and RR of 6, this patient needs immediate airway management and assisted ventilations before any medications.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer oral glucose immediately since blood sugar is critically low", correct: false, critical: true, explanation: "Oral glucose in an unresponsive patient (GCS 6) is extremely dangerous — aspiration risk is high. NY protocol states oral glucose only if the patient can swallow. This patient cannot protect her airway.", protocol_ref: "als_hypoglycemia_adult..." },
          { text: "Start an IV and push D10 to correct the hypoglycemia before addressing respirations", correct: false, critical: false, explanation: "While D10 will be needed, the immediate life threat is hypoxia from respiratory depression. ABCs always come first per NY protocol.", protocol_ref: "als_hypoglycemia_adult..." }
        ],
        clinical_pearl: "When opioid OD and hypoglycemia overlap, remember: hypoxia kills in minutes, hypoglycemia kills in hours. Secure the airway and ventilate first, then address both conditions."
      },
      {
        phase: "treatment",
        prompt: "Match each medication to the correct route/dose for THIS patient (unresponsive, GCS 6, IV not yet established) per NY protocol.",
        type: "table",
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You are ventilating the patient with BVM and SpO2 is improving. You need to address both the opioid overdose and hypoglycemia. IV access has not been established yet.",
        vitals_update: { hr: 58, bp: "100/64", rr: 8, spo2: 88, gcs: 6 },
        rows: [
          "Naloxone (no IV access)",
          "Glucose replacement (no IV, patient cannot swallow)"
        ],
        columns: [
          "Intranasal prefilled unit dose; may repeat once in 5 min",
          "Glucagon 1mg IM"
        ],
        correctCells: [[0], [1]],
        explanation: "Per NY protocol: Naloxone is given intranasal via prefilled unit dose and may be repeated once in 5 minutes. For hypoglycemia when the patient cannot swallow and there is no IV access, Glucagon 1mg IM is the appropriate route. D10 IV is preferred but requires vascular access. Oral glucose is contraindicated since the patient cannot swallow (GCS 6).",
        protocol_ref: "als_opioid_narcotic_overdose, als_hypoglycemia_adult...",
        clinical_pearl: "Always check blood glucose in opioid overdose patients — hypoglycemia can mimic or compound altered mental status. Treating only one problem may leave the patient unresponsive."
      },
      {
        phase: "treatment",
        prompt: "After establishing IV access, the patient is now intubated and receiving mechanical ventilation. Blood glucose is still 48 mg/dL. Place the following next steps in the correct order per NY protocol.",
        type: "order",
        level_filter: "AEMT-CC-P",
        narrative: "IV access has been established. The patient was intubated due to persistent respiratory failure. SpO2 is now 96% on the ventilator. She remains unresponsive. BG rechecked at 48 mg/dL.",
        vitals_update: { hr: 64, bp: "104/68", rr: 12, spo2: 96, gcs: 5 },
        items: [
          "Contact medical control before giving naloxone to the intubated patient",
          "Administer D10 up to 25g (250mL) IV for persistent hypoglycemia",
          "Recheck blood glucose after D10 administration",
          "Consider redosing D10 once if glucose remains low"
        ],
        correctOrder: [1, 2, 0, 3],
        explanation: "Per NY protocol: First address the persistent hypoglycemia with D10 up to 25g (250mL) IV. Recheck the glucose. For naloxone — critically, NY protocol states do NOT give naloxone to an intubated patient without medical control authorization (unless in cardiac arrest). Contact medical control before administering naloxone. D10 may be redosed once if glucose remains low.",
        protocol_ref: "als_opioid_narcotic_overdose, als_hypoglycemia_adult...",
        clinical_pearl: "This is a commonly tested NY protocol point: naloxone is CONTRAINDICATED in intubated patients without medical control approval (unless cardiac arrest). The airway is already secured — naloxone could cause acute withdrawal, vomiting, and aspiration risk around the tube."
      }
    ]
  }
];
