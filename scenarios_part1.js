const SCENARIOS_P1 = [
  // ============================================================
  // SCENARIO 1: 62F — Nausea and Stomach Pain (Atypical ACS)
  // ============================================================
  {
    id: "med-cardiac-01",
    title: "62F — Nausea and Stomach Pain",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "62-year-old female, nausea and stomach pain, conscious and breathing",
    patient: { age: 62, sex: "F", cc: "Nausea and epigastric pain" },
    scene: "You arrive at a suburban home. A 62-year-old female is seated at the kitchen table, appearing pale and diaphoretic. She states she has been having 'bad stomach pain' for about an hour and has vomited twice. She denies chest pain.",
    vitals: { hr: 96, bp: "104/68", rr: 22, spo2: 94, gcs: 15, temp: "98.4°F", bg: "142 mg/dL" },
    history: { pmh: "Hypertension, type 2 diabetes, hyperlipidemia", meds: "Metformin, lisinopril, atorvastatin", allergies: "Sulfa drugs" },
    presentation: "Patient is pale, diaphoretic, and mildly short of breath. She describes a constant, dull epigastric pain radiating to her jaw. She attributes it to something she ate. No chest pain or pressure reported.",
    primary_protocol: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
    related_protocols: [
      "bls_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
      "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "Based on dispatch information, what is your primary concern as you approach the scene?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Dispatch reports a 62-year-old female with nausea and stomach pain. No other units on scene.",
        clinical_pearl: "Women over 55 frequently present with atypical ACS symptoms: nausea, vomiting, epigastric pain, jaw pain, and fatigue — often without classic chest pain. Always maintain high suspicion.",
        options: [
          { text: "Consider atypical cardiac presentation given patient age, sex, and complaint of epigastric pain with nausea", correct: true, critical: false, explanation: "Elderly females commonly present with atypical ACS symptoms including nausea, vomiting, and epigastric pain without chest pain.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Prepare primarily for a gastrointestinal emergency such as bowel obstruction or acute gastroenteritis", correct: false, critical: false, explanation: "While GI causes are possible, the patient's age, sex, and risk factors warrant cardiac consideration first.", protocol_ref: "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr" },
          { text: "Assume food poisoning is most likely given the nausea and vomiting with no reported chest discomfort", correct: false, critical: true, explanation: "Assuming a benign cause without evaluation could delay life-saving ACS treatment. Atypical presentations are common in this demographic.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Focus assessment on diabetic ketoacidosis since the patient has a history of type 2 diabetes mellitus", correct: false, critical: false, explanation: "DKA is more common in type 1 diabetes. While blood glucose should be checked, the presentation is more consistent with a cardiac event.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "assessment",
        prompt: "After obtaining vitals (HR 96, BP 104/68, RR 22, SpO₂ 94%, GCS 15), what are your priority assessment steps? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient continues to complain of epigastric pain now radiating to her jaw. She appears increasingly diaphoretic.",
        vitals_update: { hr: 102, bp: "98/62", spo2: 93 },
        clinical_pearl: "NY protocols include anginal equivalents as criteria for the cardiac chest pain protocol. Epigastric pain with diaphoresis and jaw radiation in an elderly diabetic female is a classic anginal equivalent.",
        options: [
          { text: "Acquire and transmit a 12-lead ECG to identify possible STEMI or acute cardiac changes", correct: true, critical: false, explanation: "Per NY protocol, EMTs should acquire and transmit a 12-lead ECG for patients with suspected cardiac chest pain or anginal equivalents including nausea, vomiting, and dyspnea.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer supplemental oxygen to maintain SpO₂ above 92% with appropriate airway management as indicated", correct: true, critical: false, explanation: "Per NY protocol, airway management and appropriate oxygen therapy is indicated at all provider levels for suspected cardiac events. SpO₂ is 94%, borderline.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer ondansetron for nausea relief before proceeding with any further assessment", correct: false, critical: false, explanation: "Treating symptoms before identifying the underlying cause could delay recognition of an acute MI. Assessment takes priority.", protocol_ref: "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr" },
          { text: "Start a fluid bolus of normal saline to treat the borderline hypotension before further workup", correct: false, critical: false, explanation: "While vascular access is appropriate, identifying a STEMI early changes the transport destination and must take priority.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The 12-lead ECG shows ST elevation in leads II, III, and aVF. Medical control confirms STEMI. What medication should be administered immediately at all provider levels?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Medical control has reviewed the transmitted ECG and confirms an inferior STEMI. The patient now reports feeling lightheaded.",
        clinical_pearl: "Aspirin 324 mg chewed is indicated at ALL provider levels (including CFR) for suspected cardiac events per NY protocol. It should not be enteric coated.",
        options: [
          { text: "Aspirin 324 mg (four 81 mg tablets) chewed, confirming the patient is able to chew them", correct: true, critical: false, explanation: "Per NY protocol, aspirin 324 mg chewed is indicated at CFR and all provider levels for suspected cardiac chest pain or anginal equivalents.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Nitroglycerin 0.4 mg sublingual to reduce cardiac workload and improve coronary perfusion", correct: false, critical: true, explanation: "With BP 98/62 (below 120 mmHg threshold) and an inferior STEMI, nitroglycerin is contraindicated. Inferior STEMIs are prone to right ventricular involvement and hypotension.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Morphine 0.05 mg/kg IV push for pain control before initiating any other cardiac medications", correct: false, critical: false, explanation: "While pain management may be indicated, aspirin is the immediate priority. Morphine also requires CC/Paramedic level and vascular access.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Ondansetron 4 mg ODT to address the nausea and vomiting before giving any oral medications", correct: false, critical: false, explanation: "Aspirin is the immediate priority. Delaying aspirin to treat nausea is not appropriate in a confirmed STEMI.", protocol_ref: "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's BP has dropped to 88/54. She is now confused and her skin is cool and clammy. Which interventions are appropriate at the CC/Paramedic level? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "After aspirin administration, the patient becomes increasingly hypotensive and confused. SpO₂ has dropped to 91%.",
        vitals_update: { hr: 110, bp: "88/54", rr: 26, spo2: 91, gcs: 13 },
        clinical_pearl: "Inferior STEMI with hypotension suggests right ventricular involvement. Fluid resuscitation is critical. Avoid nitroglycerin and agents that reduce preload.",
        options: [
          { text: "Place the patient supine and administer a normal saline 500 mL IV bolus to restore perfusion", correct: true, critical: false, explanation: "Per NY protocol, if systolic BP drops below 100 mmHg, place patient supine and consider NS 500 mL IV bolus.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Initiate cardiac monitoring with continuous 12-lead ECG and prepare for rhythm deterioration", correct: true, critical: false, explanation: "Cardiac monitoring is indicated at CC/Paramedic level. STEMI patients are at high risk for dysrhythmias.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer nitroglycerin 0.4 mg sublingual to dilate coronary arteries and reduce ischemia", correct: false, critical: true, explanation: "Nitroglycerin is contraindicated when SBP is below 120 mmHg per NY protocol. It could cause cardiovascular collapse in this hypotensive patient.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer furosemide 40 mg IV to reduce fluid overload and improve cardiac output quickly", correct: false, critical: true, explanation: "This patient is hypovolemic, not fluid-overloaded. Diuretics would worsen hypotension and are not indicated in this protocol.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After fluid resuscitation, the patient's BP improves to 102/66 but she reports worsening pain rated 9/10. What is the appropriate pain management approach?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The fluid bolus has improved her hemodynamics. She remains alert but in significant distress from ongoing ischemic pain.",
        vitals_update: { hr: 104, bp: "102/66", spo2: 93, gcs: 15 },
        options: [
          { text: "Fentanyl 1-1.5 mcg/kg IV, which may be repeated after 10 minutes to a max of 200 mcg total", correct: true, critical: false, explanation: "Per NY pain management protocol, fentanyl is appropriate. However, SBP must be >100 mmHg. At 102 mmHg this is borderline — close monitoring required.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Ketorolac 15 mg IV as a first-line analgesic since it avoids the respiratory depression of opioids", correct: false, critical: false, explanation: "NSAIDs are generally avoided in acute MI due to increased risk of adverse cardiovascular events and interference with antiplatelet therapy.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Nitroglycerin 0.4 mg sublingual since the systolic BP is now above 100 mmHg and pain persists", correct: false, critical: false, explanation: "NY protocol requires SBP >120 mmHg (or MAP >90) for nitroglycerin. At 102/66, this patient does not meet the threshold.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Withhold all pain medication during transport to avoid masking symptoms for the cath lab team", correct: false, critical: false, explanation: "Pain management is indicated per protocol. Untreated pain increases catecholamine release, worsening myocardial oxygen demand.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "With a confirmed STEMI, what is the appropriate transport destination per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is packaged and ready for transport. Two hospitals are nearby: a community hospital 8 minutes away and a PCI-capable center 22 minutes away.",
        clinical_pearl: "For confirmed STEMI, transport to a PCI-capable facility if arrival is within 90 minutes of patient contact, or as directed by medical control or regional procedure.",
        options: [
          { text: "Transport to the PCI-capable facility 22 minutes away since it is within 90 minutes of patient contact", correct: true, critical: false, explanation: "Per NY protocol, confirmed STEMI patients should be transported to a facility capable of primary angioplasty if within 90 minutes of patient contact.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Transport to the closest community hospital 8 minutes away for initial stabilization and transfer", correct: false, critical: false, explanation: "Door-to-balloon time is critical in STEMI. Direct transport to PCI-capable center is preferred when within 90 minutes.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Contact medical control to request air medical transport to a tertiary cardiac surgery center", correct: false, critical: false, explanation: "With a PCI-capable center only 22 minutes away, ground transport is appropriate and faster than arranging air medical.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Transport to whichever facility the patient requests since she is alert and oriented with a GCS of 15", correct: false, critical: false, explanation: "While patient preference matters, clinical judgment and protocol direct STEMI patients to PCI-capable facilities for optimal outcomes.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: 4M — Child with High Fever and Stiff Neck
  // ============================================================
  {
    id: "med-pedi-01",
    title: "4M — Child with High Fever and Stiff Neck",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "4-year-old male, high fever, mother states child is 'acting strange'",
    patient: { age: 4, sex: "M", cc: "High fever and altered behavior" },
    scene: "You arrive at an apartment to find a 4-year-old male lying on a couch, appearing lethargic. His mother reports the fever started yesterday and has gotten worse. She states he had a brief episode of 'shaking all over' about 20 minutes ago that lasted approximately 90 seconds.",
    vitals: { hr: 162, bp: "86/52", rr: 32, spo2: 96, gcs: 13, temp: "104.2°F", bg: "98 mg/dL" },
    history: { pmh: "None significant, immunizations up to date", meds: "Children's Tylenol given 3 hours ago", allergies: "NKDA" },
    presentation: "Child is lethargic but arousable, warm and flushed. He cries when you attempt to flex his neck. A non-blanching petechial rash is noted on the trunk. Capillary refill is 4 seconds in the extremities.",
    primary_protocol: "als_fever_pediatric",
    related_protocols: [
      "als_altered_mental_status",
      "als_shock_pediatric_sepsis_shock_hypoperfusion",
      "bls_shock_pediatric_sepsis_shock_hypoperfusion"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "Upon arrival, the mother reports the child had a 90-second shaking episode 20 minutes ago. What is your primary concern given the full clinical picture?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child is lethargic on the couch. You notice a rash on his torso as you approach.",
        clinical_pearl: "While febrile seizures are common in children, nuchal rigidity and petechial rash are red flags for meningitis. A simple febrile seizure does not typically present with these findings.",
        options: [
          { text: "Meningitis with possible sepsis, given the fever, nuchal rigidity, petechial rash, and altered mental status", correct: true, critical: false, explanation: "The combination of high fever, neck stiffness, petechial rash, and lethargy is highly suspicious for bacterial meningitis with possible sepsis.", protocol_ref: "als_fever_pediatric" },
          { text: "Simple febrile seizure that has self-resolved, requiring only fever management and observation during transport", correct: false, critical: true, explanation: "Dismissing this as a simple febrile seizure misses critical signs of meningitis. Nuchal rigidity and petechiae indicate a potentially life-threatening infection.", protocol_ref: "als_fever_pediatric" },
          { text: "Viral exanthem with coincidental febrile seizure, commonly seen in pediatric patients during winter months", correct: false, critical: false, explanation: "Petechiae that are non-blanching, combined with nuchal rigidity and altered mentation, should not be attributed to a benign viral illness.", protocol_ref: "als_fever_pediatric" },
          { text: "New-onset epilepsy triggered by the fever, requiring anticonvulsant therapy as the primary intervention", correct: false, critical: false, explanation: "While seizure is part of the presentation, the overall clinical picture points to an infectious etiology requiring urgent sepsis management.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which findings in this patient meet the NY protocol criteria for pediatric sepsis? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You complete your primary assessment. The child whimpers but does not follow commands consistently. Extremities feel cool to the touch.",
        clinical_pearl: "NY pediatric sepsis criteria: suspected infection PLUS abnormal temperature (>100.4°F or <96.8°F) PLUS high HR/RR for age WITH poor perfusion (cap refill >3 sec, decreased peripheral pulses, cool/dusky extremities) and/or altered mental status.",
        options: [
          { text: "Heart rate of 162, which exceeds the tachycardia threshold of 140 bpm for a child aged 1-11 years", correct: true, critical: false, explanation: "Per NY protocol, tachycardia >140 in a 1-11 year old with suspected infection meets sepsis criteria.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Capillary refill of 4 seconds with cool, dusky extremities indicating poor peripheral perfusion", correct: true, critical: false, explanation: "Per NY protocol, capillary refill >3 seconds with cool/dusky extremities is a sign of poor perfusion in pediatric sepsis.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Blood glucose of 98 mg/dL, which is abnormally low for a febrile pediatric patient in acute distress", correct: false, critical: false, explanation: "A blood glucose of 98 mg/dL is within normal range and does not meet sepsis criteria, though glucose should be monitored.", protocol_ref: "als_fever_pediatric" },
          { text: "Respiratory rate of 32, which exceeds the tachypnea threshold of 30 breaths per minute for this age group", correct: true, critical: false, explanation: "Per NY protocol, tachypnea >30 in a 1-11 year old with suspected infection and poor perfusion meets sepsis criteria.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What is the appropriate oxygen therapy for this patient per NY protocol?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child's SpO₂ is 96% on room air but he remains lethargic with poor perfusion.",
        options: [
          { text: "High-flow oxygen via non-rebreather mask, as tolerated, per the pediatric sepsis/shock protocol", correct: true, critical: false, explanation: "Per NY pediatric sepsis protocol, high-flow oxygen via NRB mask is indicated at all provider levels for patients with signs of sepsis/shock.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Nasal cannula at 2 LPM since the SpO₂ is 96% and high-flow oxygen is not indicated at this time", correct: false, critical: false, explanation: "Despite adequate SpO₂, the sepsis/shock protocol specifies high-flow oxygen. Perfusion and oxygen delivery to tissues is impaired.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Blow-by oxygen only to avoid agitating the child, since crying increases oxygen consumption significantly", correct: false, critical: false, explanation: "While minimizing agitation is important, the sepsis protocol calls for high-flow oxygen. Blow-by is insufficient for a septic child.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Withhold supplemental oxygen entirely since the SpO₂ is above the 92% target threshold currently", correct: false, critical: true, explanation: "This child has signs of septic shock with poor perfusion. Withholding oxygen in this context is dangerous regardless of SpO₂ reading.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the AEMT level and above, what fever management medication is appropriate per NY protocol for this 4-year-old?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "The child's temperature is 104.2°F. He is able to swallow liquids when offered small sips.",
        vitals_update: { hr: 168, bp: "82/48", temp: "104.6°F" },
        clinical_pearl: "Per NY protocol, acetaminophen and ibuprofen are available at the Advanced level for pediatric fever. Ibuprofen requires the patient be >6 months old. Dosing is weight-based.",
        options: [
          { text: "Acetaminophen 15 mg/kg PO, since the child can tolerate oral fluids and the dose is weight-based per protocol", correct: true, critical: false, explanation: "Per NY pediatric fever protocol, acetaminophen 15 mg/kg PO is appropriate at the Advanced level if the child can tolerate oral fluids.", protocol_ref: "als_fever_pediatric" },
          { text: "Ibuprofen 20 mg/kg PO, since a higher dose is needed to control this degree of fever more effectively", correct: false, critical: false, explanation: "The NY protocol dose for ibuprofen is 10 mg/kg, not 20 mg/kg. Doubling the dose exceeds protocol parameters.", protocol_ref: "als_fever_pediatric" },
          { text: "Aspirin 81 mg chewed to reduce both fever and inflammation simultaneously in this pediatric patient", correct: false, critical: true, explanation: "Aspirin is contraindicated in febrile children due to the risk of Reye's syndrome, a potentially fatal condition. It is not in the pediatric fever protocol.", protocol_ref: "als_fever_pediatric" },
          { text: "Dexamethasone 10 mg IV to rapidly reduce the inflammatory response causing the high-grade fever", correct: false, critical: false, explanation: "Dexamethasone is not part of the NY pediatric fever protocol. While used in hospital meningitis treatment, it is not a prehospital standing order here.", protocol_ref: "als_fever_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The child's BP has dropped to 82/48 and capillary refill is now 5 seconds. At the Paramedic level, what fluid resuscitation is indicated?",
        multi_select: false,
        level_filter: "P",
        narrative: "Despite oxygen therapy, the child is becoming more lethargic. Extremities are now mottled and cool.",
        vitals_update: { hr: 174, bp: "78/44", spo2: 94, gcs: 11 },
        options: [
          { text: "Normal saline 20 mL/kg bolus IV, using a 100 mL bag since the patient weighs less than 20 kg", correct: true, critical: false, explanation: "Per NY pediatric sepsis protocol, Paramedics should give NS 20 mL/kg IV bolus, using a 100 mL bag if the patient is under 20 kg.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 500 mL wide-open IV bolus, the same as the standard adult shock fluid resuscitation", correct: false, critical: true, explanation: "Adult dosing is inappropriate for a 4-year-old. Fluid overload could cause pulmonary edema. Pediatric dosing is weight-based at 20 mL/kg.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Lactated Ringer's solution 10 mL/kg bolus IV as the preferred crystalloid for pediatric septic shock", correct: false, critical: false, explanation: "NY protocol specifies normal saline, not lactated Ringer's, for pediatric sepsis fluid resuscitation.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Defer IV access and fluid resuscitation to the hospital since obtaining pediatric IV access is time-consuming", correct: false, critical: true, explanation: "Delaying fluid resuscitation in pediatric septic shock significantly increases mortality. Vascular access is a protocol priority.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most important action during transport of this patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The child is secured on the stretcher with oxygen in place. You are preparing to depart for the hospital.",
        clinical_pearl: "Per NY protocol, advise the destination hospital ASAP that the patient has signs of sepsis/septic shock. Early notification allows the ED to prepare for aggressive resuscitation.",
        options: [
          { text: "Provide early notification to the receiving hospital that this patient has signs of pediatric sepsis or septic shock", correct: true, critical: false, explanation: "Per NY protocol, at the EMT level and above, advise the destination hospital ASAP that the patient has signs of sepsis/septic shock.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Apply ice packs to the groin and axillae to aggressively reduce the temperature before hospital arrival", correct: false, critical: false, explanation: "While maintaining normal body temperature is in the protocol, aggressive cooling measures are not specified. Medication and supportive care are the focus.", protocol_ref: "als_fever_pediatric" },
          { text: "Obtain IV access en route since it was deferred on scene to avoid delaying transport of this critical patient", correct: false, critical: false, explanation: "While IV access en route is reasonable, early hospital notification is the most important action to ensure the ED team is prepared.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Perform a detailed secondary assessment including a full neurological exam to document baseline findings", correct: false, critical: false, explanation: "While documentation is important, early hospital notification and ongoing reassessment of ABCs take priority in a critically ill pediatric patient.", protocol_ref: "als_general_approach_to_the_patient" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: 28M — Agitated Male, Taser Deployed
  // ============================================================
  {
    id: "med-behav-01",
    title: "28M — Agitated Male, Taser Deployed",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "28-year-old male, EDP, taser deployed by PD, patient restrained on ground",
    patient: { age: 28, sex: "M", cc: "Agitation, combativeness" },
    scene: "You arrive on scene to find PD with a 28-year-old male in prone position, handcuffed. Officers report the patient was found running naked through traffic, screaming incoherently, and threw a trash can through a store window. He was tased once with minimal effect before being physically restrained. He continues to struggle against restraints.",
    vitals: { hr: 148, bp: "188/102", rr: 34, spo2: 92, gcs: 12, temp: "103.8°F", bg: "186 mg/dL" },
    history: { pmh: "Unknown", meds: "Unknown", allergies: "Unknown" },
    presentation: "Patient is diaphoretic with dilated pupils, displaying unusual strength and failing to respond to any verbal communication. He has abrasions on his forearms and knees. He does not appear to tire despite continuous struggling. Tactile hyperthermia is noted.",
    primary_protocol: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha",
    related_protocols: [
      "als_altered_mental_status",
      "als_general_approach_to_safety_restraining_devices"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "The patient is prone and handcuffed with ongoing struggling. What are your immediate scene priorities? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Officers are holding the patient on his stomach. He has been in this position for approximately 5 minutes. He continues to fight against restraints.",
        clinical_pearl: "Prone restraint with continued struggling is a significant risk factor for positional asphyxia and sudden cardiac arrest in excited delirium. Reposition to lateral or supine as soon as safely possible.",
        options: [
          { text: "Immediately request the patient be repositioned from prone to lateral recumbent or supine to prevent positional asphyxia", correct: true, critical: false, explanation: "Prone restraint is a significant risk for positional asphyxia, especially in an agitated patient. This is an immediate life threat that must be addressed.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Maintain the prone position since the patient is still combative and repositioning could endanger the crew", correct: false, critical: true, explanation: "Prolonged prone restraint significantly increases the risk of sudden death. Coordinating with PD to safely reposition is critical.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Stand back and wait for the patient to exhaust himself before approaching to begin medical assessment", correct: false, critical: true, explanation: "Patients with excited delirium characteristically do NOT tire. Waiting increases the risk of sudden cardiac arrest. The inability to tire is a hallmark feature.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Ensure airway management and appropriate oxygen therapy are initiated as soon as safely possible per protocol", correct: true, critical: false, explanation: "Per NY protocol, airway management, vital signs, and appropriate oxygen therapy are indicated at CFR and all provider levels for agitated patients.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which combination of findings is consistent with the NY protocol description of a patient requiring ketamine sedation?",
        multi_select: false,
        level_filter: "P",
        narrative: "The patient has been repositioned to his side. He continues to struggle violently. You note unusual strength, lack of tiring, apparent unnatural pain tolerance, diaphoresis, and tactile hyperthermia.",
        clinical_pearl: "NY protocol describes the Paramedic-level ketamine patient as one with a clinical triad: psychomotor agitation, physiologic excitation, and failure to respond to verbal/environmental de-escalation with destructive, erratic, bizarre, or violent behavior.",
        options: [
          { text: "Psychomotor agitation, physiologic excitation, and failure to respond to de-escalation with violent, erratic behavior", correct: true, critical: false, explanation: "Per NY protocol, ketamine is indicated for the Paramedic when the patient presents with this clinical triad and is at immediate risk of causing physical harm.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Tachycardia, hypertension, and an elevated blood glucose level with mild agitation responsive to verbal redirection", correct: false, critical: false, explanation: "Mild agitation responsive to verbal cues does not meet the criteria for ketamine. The protocol requires failure to respond to de-escalation.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Dilated pupils, diaphoresis, and elevated temperature in a patient who is cooperative but intermittently confused", correct: false, critical: false, explanation: "A cooperative patient does not meet the criteria of being at immediate risk of causing physical harm. Ketamine would not be indicated.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Altered mental status, unusual strength, and suspected drug ingestion regardless of the patient's current behavior", correct: false, critical: false, explanation: "Suspected drug ingestion alone is insufficient. The protocol specifically requires ongoing violent/destructive behavior with failure of de-escalation.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What is the correct Paramedic-level standing order dose of ketamine for this patient per NY protocol?",
        multi_select: false,
        level_filter: "P",
        narrative: "You have determined the patient meets criteria for chemical sedation. Verbal de-escalation has been unsuccessful. He remains violently combative.",
        options: [
          { text: "Ketamine 250 mg IM, with the option to repeat 250 mg IM once after 5 minutes if the patient remains uncontrolled", correct: true, critical: false, explanation: "Per NY protocol, Paramedics may administer ketamine 250 mg IM, with a single repeat dose of 250 mg IM after 5 minutes if needed.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Ketamine 4 mg/kg IV push for rapid onset of sedation, titrated to effect with additional doses every 2 minutes", correct: false, critical: false, explanation: "The standing order for this presentation is a fixed 250 mg IM dose, not weight-based IV dosing. IV ketamine at this dose is not in the standing order.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Ketamine 100 mg IM as an initial low dose to test for adverse reaction before administering a full sedation dose", correct: false, critical: false, explanation: "The protocol specifies 250 mg IM, not a titrated low dose. Under-dosing may fail to achieve sedation and prolong the dangerous situation.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Ketamine 500 mg IM as a single large dose to ensure rapid and complete sedation of the combative patient", correct: false, critical: false, explanation: "500 mg exceeds the standing order. The protocol allows 250 mg IM with one repeat dose of 250 mg after 5 minutes if needed.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC level, what sedation medication is available as a standing order for agitated patients?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "Consider the scenario from the CC provider perspective, where ketamine is not available.",
        clinical_pearl: "CC providers have midazolam (Versed) up to 5 mg IM or IV, with repeat dosing up to a total of 10 mg. Paramedics have ketamine in addition to midazolam.",
        options: [
          { text: "Midazolam (Versed) up to 5 mg IM or IV, which may be repeated up to a total dose of 10 mg", correct: true, critical: false, explanation: "Per NY protocol, CC providers may administer midazolam up to 5 mg IM or IV, repeated up to a total of 10 mg for agitated patients.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Haloperidol 10 mg IM as the preferred first-line antipsychotic for acute behavioral emergencies in the field", correct: false, critical: false, explanation: "Haloperidol is not in the NY agitated patient protocol as a standing order for any provider level.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Lorazepam (Ativan) 2 mg IV push, which is the standard benzodiazepine for prehospital behavioral emergencies", correct: false, critical: false, explanation: "Lorazepam is not the specified benzodiazepine in this NY protocol. Midazolam (Versed) is the standing order medication.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Diazepam (Valium) 10 mg IM for its longer duration of action and more predictable intramuscular absorption", correct: false, critical: false, explanation: "Diazepam is not in the NY agitated patient protocol. Midazolam is specified due to its reliable IM absorption.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After sedation, the patient's breathing becomes shallow at 8 breaths per minute and SpO₂ drops to 88%. What is your immediate intervention?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The ketamine has taken effect. The patient is now sedated but his respiratory rate has decreased significantly.",
        vitals_update: { hr: 118, bp: "146/88", rr: 8, spo2: 88, gcs: 8 },
        clinical_pearl: "Any patient who receives chemical sedation requires continuous monitoring of airway, breathing, and circulation. Be prepared to manage respiratory depression with BVM ventilation.",
        options: [
          { text: "Open the airway, provide BVM-assisted ventilation with supplemental oxygen, and continuously reassess effectiveness", correct: true, critical: false, explanation: "Per NY respiratory arrest/failure protocol, patients with RR <10 and signs of poor perfusion require positive pressure ventilation with BVM.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Apply a nasal cannula at 6 LPM and monitor closely since some respiratory depression is expected after sedation", correct: false, critical: true, explanation: "A respiratory rate of 8 with SpO₂ of 88% indicates respiratory failure, not acceptable sedation-related depression. BVM ventilation is required.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Administer naloxone 2 mg intranasal to reverse the respiratory depression caused by the ketamine sedation", correct: false, critical: false, explanation: "Naloxone reverses opioids, not ketamine. Ketamine-related respiratory depression is managed with airway support and ventilation.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Place the patient in the recovery position and apply a non-rebreather at 15 LPM while preparing for transport", correct: false, critical: false, explanation: "While the recovery position is appropriate for airway protection, a RR of 8 with SpO₂ of 88% requires active ventilation, not just supplemental oxygen.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "transport",
        prompt: "If this patient were to go into cardiac arrest during transport, what additional medication does the NY protocol specify?",
        multi_select: false,
        level_filter: "P",
        narrative: "You are monitoring the patient closely during transport. You recall the protocol guidance about cardiac arrest in agitated patients.",
        clinical_pearl: "NY protocol specifically states: if the agitated patient goes into cardiac arrest, refer to appropriate protocol AND administer sodium bicarbonate 50 mEq IV. This addresses the metabolic acidosis common in excited delirium.",
        options: [
          { text: "Sodium bicarbonate 50 mEq IV in addition to standard cardiac arrest protocol interventions", correct: true, critical: false, explanation: "Per NY protocol, if an agitated patient goes into cardiac arrest, administer sodium bicarbonate 50 mEq IV in addition to standard cardiac arrest management.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Amiodarone 300 mg IV push as the first-line antiarrhythmic specific to excited delirium cardiac arrest", correct: false, critical: false, explanation: "While amiodarone may be used per standard ACLS, the NY agitated patient protocol specifically calls for sodium bicarbonate as the additional medication.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Calcium chloride 1 gram IV push to counteract the potential hyperkalemia seen in rhabdomyolysis patients", correct: false, critical: false, explanation: "While hyperkalemia is a concern, the NY protocol specifically identifies sodium bicarbonate 50 mEq IV as the additional medication for this scenario.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Magnesium sulfate 2 grams IV to stabilize the myocardium and prevent recurrent ventricular fibrillation", correct: false, critical: false, explanation: "Magnesium is not specified in the NY agitated patient protocol for cardiac arrest. Sodium bicarbonate is the designated additional medication.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: 22F — Can't Breathe, Asthma History
  // ============================================================
  {
    id: "med-resp-01",
    title: "22F — Can't Breathe, Asthma History",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "22-year-old female, difficulty breathing, history of asthma, unable to speak in full sentences",
    patient: { age: 22, sex: "F", cc: "Severe shortness of breath" },
    scene: "You arrive at a college dorm room to find a 22-year-old female sitting upright on the edge of her bed in a tripod position. Her roommate called 911 after the patient's inhaler did not help. The patient can only speak in one- to two-word phrases between gasps.",
    vitals: { hr: 132, bp: "142/88", rr: 36, spo2: 87, gcs: 15, temp: "98.6°F", bg: "118 mg/dL" },
    history: { pmh: "Asthma since childhood, 2 prior intubations, 3 ER visits in past year", meds: "Albuterol MDI, fluticasone inhaler (admits not using regularly)", allergies: "Penicillin" },
    presentation: "Patient is in severe respiratory distress with audible expiratory wheezing, intercostal and supraclavicular retractions, and diaphoresis. She is using accessory muscles and can barely speak. Air movement is diminished bilaterally with minimal wheezing heard on auscultation.",
    primary_protocol: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr",
    related_protocols: [
      "bls_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr",
      "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe",
      "als_oxygen_administration_and_airway_management"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "The patient has diminished air movement with minimal wheezing on auscultation. What does this finding indicate, and what is your initial action? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "On your initial assessment, you note severe retractions and accessory muscle use but hear very little wheezing when you auscultate the chest.",
        clinical_pearl: "A 'quiet chest' in a known asthmatic is an ominous sign. It indicates such severe bronchospasm that there is insufficient air movement to generate wheezing. This patient is approaching respiratory failure.",
        options: [
          { text: "Critically severe bronchospasm with air trapping — the absence of wheezing indicates insufficient air movement and impending failure", correct: true, critical: false, explanation: "Diminished breath sounds with minimal wheezing in a severe asthmatic indicates near-complete airway obstruction. This is worse than loud wheezing.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Improvement in bronchospasm since the wheezing has decreased, suggesting the patient's inhaler provided partial relief", correct: false, critical: true, explanation: "Decreasing wheezing with worsening clinical appearance is NOT improvement. It indicates worsening obstruction with inadequate air movement.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Administer supplemental oxygen immediately and assess for the need for respiratory failure interventions per protocol", correct: true, critical: false, explanation: "Per NY protocol, ongoing assessment of breathing effectiveness is required, with escalation to respiratory arrest/failure protocol if necessary. Immediate oxygen is indicated.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Anxiety-related hyperventilation that is mimicking asthma symptoms, given the patient's young age and college setting", correct: false, critical: true, explanation: "Attributing this to anxiety in a patient with known severe asthma, prior intubations, SpO₂ of 87%, and accessory muscle use is dangerous and could lead to death.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What initial treatments should be started simultaneously at the EMT level? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You have confirmed severe asthma exacerbation with impending respiratory failure. SpO₂ is 87%.",
        clinical_pearl: "Per NY protocol, EMTs can administer albuterol 2.5 mg via nebulizer (up to 3 doses), combined with ipratropium 0.5 mg, AND apply CPAP 5-10 cm H₂O.",
        options: [
          { text: "Albuterol 2.5 mg via nebulizer, which may be combined with ipratropium (Atrovent) 0.5 mg unit dose", correct: true, critical: false, explanation: "Per NY protocol, albuterol 2.5 mg nebulizer may be repeated up to 3 doses and combined with ipratropium 0.5 mg.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Continuous positive airway pressure (CPAP) at 5-10 cm H₂O to help stent open the airways and improve oxygenation", correct: true, critical: false, explanation: "Per NY protocol, CPAP 5-10 cm H₂O is available at the EMT level for patients in respiratory distress.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Epinephrine 1:1,000 at 0.3 mg IM for severe distress, available as a standing order at the EMT level", correct: false, critical: false, explanation: "Epinephrine for severe asthma is at the AEMT (Advanced) level per NY protocol. EMTs must seek medical control for consideration of epinephrine.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Supplemental oxygen via non-rebreather mask at 10-15 LPM to maintain oxygen saturation above 92 percent", correct: true, critical: false, explanation: "Per NY protocol, supplemental oxygen is indicated at all levels when SpO₂ is below 92%. NRB at 10-15 LPM is appropriate.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After one nebulizer treatment, there is minimal improvement. At the AEMT level, what additional intervention is available?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "The patient remains in severe distress after the first albuterol/ipratropium treatment. SpO₂ is now 85% on CPAP with supplemental oxygen.",
        vitals_update: { hr: 140, bp: "148/92", rr: 38, spo2: 85 },
        options: [
          { text: "Epinephrine (1:1,000 / 1 mg/mL) 0.3 mg IM for severe distress, with a repeat dose in 5 minutes if distress persists", correct: true, critical: false, explanation: "Per NY protocol, AEMTs may administer epinephrine 1:1,000 0.3 mg IM for severe distress, with one repeat in 5 minutes if needed.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Epinephrine (1:10,000) 1 mg IV push to achieve faster bronchodilation than the intramuscular route provides", correct: false, critical: true, explanation: "IV push epinephrine at cardiac arrest doses (1 mg) for a patient with a pulse could cause fatal cardiac arrhythmia. The protocol specifies 0.3 mg IM.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Methylprednisolone 125 mg IV push as a corticosteroid to reduce airway inflammation within minutes of administration", correct: false, critical: false, explanation: "Methylprednisolone is not in the NY protocol. Dexamethasone is the corticosteroid available at CC/Paramedic level.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Magnesium sulfate 2 grams IV over 10 minutes as a bronchodilator for refractory asthma not responding to albuterol", correct: false, critical: false, explanation: "Magnesium is a CC/Paramedic-level intervention per NY protocol for asthma patients not responding to treatments. It is not available at the AEMT level.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC/Paramedic level, the patient remains in severe distress despite epinephrine and nebulizers. What additional interventions are indicated? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "The patient has received two albuterol/ipratropium treatments, epinephrine IM, and is on CPAP. She remains in severe distress.",
        vitals_update: { hr: 146, bp: "138/86", rr: 34, spo2: 86 },
        clinical_pearl: "For refractory asthma at the CC/Paramedic level, NY protocol provides dexamethasone 10 mg and magnesium 2 grams IV over 10 minutes as additional therapies.",
        options: [
          { text: "Dexamethasone (Decadron) 10 mg PO, IM, or IV to reduce airway inflammation as an adjunct to bronchodilators", correct: true, critical: false, explanation: "Per NY protocol, dexamethasone 10 mg is available at CC/Paramedic level via PO, IM, or IV routes.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Magnesium sulfate 2 grams in 100 mL normal saline IV over 10 minutes for the asthma patient not responding to treatment", correct: true, critical: false, explanation: "Per NY protocol, for asthma patients not responding to treatments, consider magnesium 2 grams in 100 mL NS IV over 10 minutes.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Aminophylline 250 mg IV over 20 minutes as a second-line bronchodilator for refractory severe asthma attacks", correct: false, critical: false, explanation: "Aminophylline is not in the NY protocol. It has fallen out of favor due to narrow therapeutic index and side effects.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Terbutaline 0.25 mg subcutaneous injection as an alternative beta-agonist for severe bronchospasm not responding", correct: false, critical: false, explanation: "Terbutaline is not in the NY protocol. Epinephrine IM is the specified parenteral beta-agonist for severe distress.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient becomes unresponsive with a respiratory rate of 6. SpO₂ is 72%. What is the immediate intervention?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient suddenly slumps over. She is no longer responsive to verbal or painful stimuli. Breathing is agonal at 6 breaths per minute.",
        vitals_update: { hr: 54, bp: "82/50", rr: 6, spo2: 72, gcs: 3 },
        options: [
          { text: "Immediately begin BVM-assisted ventilation with supplemental oxygen at 15-25 LPM and reassess effectiveness continuously", correct: true, critical: false, explanation: "Per NY respiratory arrest/failure protocol, patients with absent or ineffective breathing require positive pressure ventilation with BVM and supplemental oxygen.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Increase the CPAP pressure to 15 cm H₂O and add another albuterol nebulizer to the CPAP circuit immediately", correct: false, critical: true, explanation: "CPAP requires a spontaneously breathing patient. With a RR of 6 and GCS of 3, CPAP is ineffective and delays needed ventilation.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Perform immediate endotracheal intubation before attempting any BVM ventilation to secure the definitive airway", correct: false, critical: false, explanation: "BVM ventilation should be initiated immediately. Intubation should not delay oxygenation and ventilation.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Administer a fourth albuterol nebulizer and a second dose of epinephrine IM while monitoring the patient closely", correct: false, critical: true, explanation: "This patient is in respiratory arrest. Nebulizers require adequate air movement. BVM ventilation is the life-saving intervention needed now.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport with BVM ventilation, you are meeting significant resistance to ventilation. What is the most likely cause and appropriate action?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "You are ventilating the patient but each breath requires significant force to deliver. Chest rise is minimal despite proper head positioning and mask seal.",
        clinical_pearl: "Severe bronchospasm causes high airway resistance. Slow ventilations with longer expiratory time help prevent air trapping. Each breath should be given over 1 second with visible chest rise.",
        options: [
          { text: "Severe bronchospasm is causing high airway resistance — use slow, steady ventilations with longer expiratory phase to prevent air trapping", correct: true, critical: false, explanation: "In status asthmaticus, slow ventilations with prolonged expiration prevent air trapping and barotrauma. Each breath over 1 second with visible chest rise.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "A tension pneumothorax has developed and requires immediate bilateral needle decompression before continuing ventilation", correct: false, critical: false, explanation: "While tension pneumothorax is possible, high airway resistance in a known severe asthmatic is most likely from bronchospasm. Assess for unilateral findings before decompression.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "The BVM pop-off valve is malfunctioning and should be replaced with a new device before continuing any ventilation", correct: false, critical: false, explanation: "Per NY protocol, adequate ventilation may require disabling the pop-off valve. High airway resistance in asthma is expected, not an equipment malfunction.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Foreign body obstruction has developed and you should perform direct laryngoscopy to visualize and remove the obstruction", correct: false, critical: false, explanation: "In a known asthmatic with progressive deterioration, high ventilation resistance is most consistent with bronchospasm, not foreign body obstruction.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: 31M — Motorcycle Down on Highway
  // ============================================================
  {
    id: "trm-msk-01",
    title: "31M — Motorcycle Down on Highway",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "Motorcycle accident on highway, rider down, bystanders report heavy bleeding from leg",
    patient: { age: 31, sex: "M", cc: "Open femur fracture with hemorrhage" },
    scene: "You arrive on a highway to find a 31-year-old male lying supine approximately 30 feet from a damaged motorcycle. He is alert but screaming in pain. His left thigh is grossly deformed with an open wound and visible bone. There is a large pool of blood around his left leg. He is wearing a cracked helmet.",
    vitals: { hr: 128, bp: "92/58", rr: 28, spo2: 95, gcs: 14, temp: "97.2°F", bg: "132 mg/dL" },
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    presentation: "Left thigh is angulated with an open wound and exposed bone fragment. Active arterial bleeding from the wound. Right leg appears uninjured. Pelvis appears stable on gentle assessment. Helmet is cracked. No midline cervical spine tenderness. Abrasions on left forearm. Skin is pale, cool, and diaphoretic.",
    primary_protocol: "als_bleeding_hemorrhage_control",
    related_protocols: [
      "als_musculoskeletal_trauma",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "als_trauma_general",
      "als_suspected_spinal_injuries",
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric",
      "bls_bleeding_hemorrhage_control",
      "bls_musculoskeletal_trauma"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "What are the immediate life-threatening priorities that must be addressed? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You approach the patient and see active arterial bleeding from the left thigh wound. A large blood pool has formed on the pavement.",
        clinical_pearl: "In trauma, 'C-A-B' prioritization applies when there is massive hemorrhage. Control life-threatening bleeding before addressing airway and breathing per the hemorrhage control protocol.",
        options: [
          { text: "Apply direct pressure to the wound and prepare to place a tourniquet 2-3 inches proximal to the open femur wound", correct: true, critical: false, explanation: "Per NY protocol, immediate intervention for severe bleeding is direct pressure, followed by tourniquet placement for uncontrollable extremity bleeding.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Assess and manage the airway while providing supplemental oxygen therapy per the oxygen administration protocol", correct: true, critical: false, explanation: "Per NY protocol, ABCs and airway management with appropriate oxygen therapy are indicated at all provider levels alongside hemorrhage control.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Perform a rapid full-body trauma assessment before initiating any specific treatment interventions on scene", correct: false, critical: true, explanation: "With active arterial bleeding and signs of hemorrhagic shock, delaying hemorrhage control for a full assessment could result in exsanguination.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Start two large-bore IVs with normal saline running wide open to replace the volume already lost from bleeding", correct: false, critical: false, explanation: "Fluid resuscitation without hemorrhage control is futile. 'You cannot fill a bucket with a hole in it.' Stop the bleeding first.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Direct pressure is applied but bleeding continues through the dressing. What are the appropriate next steps per NY hemorrhage control protocol? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You apply direct pressure with a gauze dressing but blood rapidly soaks through. The bleeding is not controlled.",
        clinical_pearl: "NY protocol provides a clear escalation: direct pressure → hemostatic gauze → tourniquet. If severe bleeding persists through conventional dressings and hemostatic dressing becomes available, remove all conventional dressings, expose the site, and apply hemostatic dressing.",
        options: [
          { text: "Place a tourniquet 2-3 inches proximal to the wound, and if bleeding continues, place a second tourniquet proximal to the first", correct: true, critical: false, explanation: "Per NY protocol, for uncontrollable extremity bleeding, place a tourniquet 2-3 inches proximal. If bleeding continues, place a second proximal to the first.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Note the time of tourniquet application and the location of the tourniquet for documentation and hospital handoff", correct: true, critical: false, explanation: "Per NY protocol, note the time of tourniquet application and location of tourniquet(s). This is critical information for the receiving facility.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Elevate the injured leg above the level of the heart to reduce arterial pressure at the wound and slow the bleeding", correct: false, critical: false, explanation: "Elevating a grossly deformed femur with exposed bone would worsen the injury and cause extreme pain. Tourniquet is the appropriate intervention.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Apply a blood pressure cuff above the wound and inflate it to serve as a temporary tourniquet until arrival at hospital", correct: false, critical: false, explanation: "BP cuffs are unreliable as tourniquets and may deflate during transport. A proper tourniquet is the standard of care per NY protocol.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The tourniquet controls the bleeding. Given the open femur fracture, what splinting approach is appropriate per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Bleeding is now controlled with a proximal tourniquet. The left femur is grossly deformed with bone protruding through the skin.",
        vitals_update: { hr: 132, bp: "88/54", rr: 30, spo2: 94 },
        clinical_pearl: "Per NY protocol, traction splints may be indicated for mid-thigh injuries with no suspected injury to the pelvis, knee, lower leg, or ankle on the same side. Traction splints may NOT be applied if the injury is associated with amputation or near an avulsion with bone separation.",
        options: [
          { text: "Manually stabilize the extremity above and below the fracture, apply gentle traction to align, then apply a rigid splint", correct: true, critical: false, explanation: "Per NY protocol, if a long bone is severely deformed, align by applying gentle manual traction prior to splinting. Evaluate distal pulse, motor, and sensory function.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Apply a traction splint to the left leg since a mid-thigh femur fracture is the classic indication for this device", correct: false, critical: false, explanation: "While mid-thigh fractures are indicated for traction splints, the protocol notes caution with open fractures near avulsions. Given the tourniquet and open wound, rigid splinting may be more practical.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Leave the fracture in its current position without any manipulation and transport immediately as a priority trauma patient", correct: false, critical: false, explanation: "Per NY protocol, severely deformed long bones should be aligned with gentle traction prior to splinting. Leaving in a deformed position risks further vascular and nerve damage.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Reduce the open fracture by pushing the bone fragment back beneath the skin before applying a traction splint device", correct: false, critical: true, explanation: "Never attempt to reduce an open fracture in the field. This introduces contamination and can cause further tissue damage. Align and splint without pushing bone back in.", protocol_ref: "als_musculoskeletal_trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's vitals show signs of hemorrhagic shock (HR 132, BP 88/54). At the AEMT level, what fluid resuscitation is indicated?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "Despite hemorrhage control, the patient shows signs of shock: tachycardia, hypotension, altered mentation, cool and diaphoretic skin.",
        clinical_pearl: "Per NY shock protocol, AEMT may give NS 500 mL bolus if SBP <100 or MAP <65, repeated up to 2 L total if lungs remain clear, targeting SBP >100 and MAP >65.",
        options: [
          { text: "Normal saline 500 mL bolus IV, may repeat up to 2 liters total if lung sounds remain clear with a goal SBP greater than 100", correct: true, critical: false, explanation: "Per NY protocol, Advanced providers may give NS 500 mL bolus if SBP <100 or MAP <65, repeated up to 2 L total with goal SBP >100 and MAP >65.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Normal saline 2 liters wide open immediately to rapidly restore circulating volume to normal before initiating transport", correct: false, critical: false, explanation: "Aggressive fluid resuscitation in trauma can worsen coagulopathy and increase bleeding. The protocol calls for measured 500 mL boluses targeting specific BP goals.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Defer IV access and fluid resuscitation until in the ambulance to avoid delaying transport of this time-critical trauma patient", correct: false, critical: false, explanation: "IV access and fluid can be initiated en route, but should not be completely deferred. The protocol supports fluid resuscitation for hypotension.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Administer packed red blood cells if available in the ambulance, since crystalloid is no longer preferred for hemorrhagic shock", correct: false, critical: false, explanation: "While blood products are preferred, they are not part of the NY prehospital protocol. Normal saline is the specified resuscitation fluid.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient is screaming in pain (10/10). At the CC/Paramedic level, what pain management is appropriate given the current vitals?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The fracture is splinted and bleeding is controlled. The patient is in severe pain but his BP is 88/54.",
        options: [
          { text: "Contact medical control, as the standing order pain management protocol has contraindications including SBP below 100 mmHg", correct: true, critical: false, explanation: "Per NY pain management protocol, contraindications include SBP <100 mmHg. With BP 88/54, medical control should be consulted before administering analgesics.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Fentanyl 1.5 mcg/kg IV since it has less hemodynamic effect than morphine and is safer in hypotensive trauma patients", correct: false, critical: false, explanation: "While fentanyl has fewer hemodynamic effects, the NY protocol contraindicates standing-order pain management when SBP is below 100 mmHg.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Morphine 10 mg IV push to achieve rapid complete pain relief for this severe orthopedic injury presentation", correct: false, critical: true, explanation: "Morphine causes vasodilation and histamine release, worsening hypotension. Additionally, 10 mg IV push exceeds the 0.05 mg/kg dosing and SBP <100 is a contraindication.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Withhold all pain medication entirely since treating pain in trauma patients can mask deterioration and worsen shock", correct: false, critical: false, explanation: "Pain management is appropriate per protocol when not contraindicated. Medical control can authorize analgesia even with relative contraindications.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "Per NY protocol, what is the transport time goal for this unstable trauma patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is packaged on the stretcher with hemorrhage controlled, fracture splinted, IV running, and c-collar in place. You are ready to transport.",
        clinical_pearl: "Per NY trauma general protocol: UNSTABLE patients should have transport initiated to the appropriate hospital/landing zone within 10 minutes of disentanglement/extrication.",
        options: [
          { text: "Transport should be initiated within 10 minutes of disentanglement or extrication to the appropriate trauma center", correct: true, critical: false, explanation: "Per NY trauma general protocol, unstable patients should have transport initiated to the appropriate hospital or landing zone within 10 minutes.", protocol_ref: "als_trauma_general" },
          { text: "Transport should be initiated within 20 minutes to allow for complete on-scene assessment and stabilization first", correct: false, critical: false, explanation: "Twenty minutes exceeds the NY protocol guideline of 10 minutes for unstable trauma patients. Prolonged scene time increases mortality.", protocol_ref: "als_trauma_general" },
          { text: "Transport as soon as the patient is on the stretcher regardless of treatment status since speed is the only priority", correct: false, critical: false, explanation: "While rapid transport is critical, life-threatening hemorrhage control and basic stabilization should occur on scene. The 10-minute benchmark balances both.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene until two large-bore IVs are running and at least one liter of fluid has been administered completely", correct: false, critical: false, explanation: "Delaying transport for IV fluid administration increases scene time beyond protocol guidelines. IV access and fluids can continue en route.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 6: 79M — Fall at Home, on Eliquis
  // ============================================================
  {
    id: "trm-fall-01",
    title: "79M — Fall at Home, on Eliquis",
    category: "Trauma",
    difficulty: "Medium",
    dispatch: "79-year-old male, fall, hit his head, on blood thinners",
    patient: { age: 79, sex: "M", cc: "Fall with head strike" },
    scene: "You arrive at a single-story home to find a 79-year-old male sitting in a recliner. His wife called 911 after he tripped over a rug and struck his head on the coffee table approximately 45 minutes ago. He has a small laceration on his right forehead with oozing. He states he feels 'fine' and does not want to go to the hospital.",
    vitals: { hr: 72, bp: "168/94", rr: 16, spo2: 97, gcs: 15, temp: "98.0°F", bg: "108 mg/dL" },
    history: { pmh: "Atrial fibrillation, hypertension, GERD", meds: "Apixaban (Eliquis) 5mg BID, metoprolol, omeprazole", allergies: "Codeine" },
    presentation: "Patient is alert and oriented x4 with a 2 cm laceration on the right forehead with slow oozing. No loss of consciousness per patient, though his wife states he seemed 'dazed' for a minute after the fall. Pupils are equal and reactive. No focal neurological deficits on exam. Mild headache.",
    primary_protocol: "als_altered_mental_status",
    related_protocols: [
      "als_suspected_spinal_injuries",
      "bls_suspected_spinal_injuries",
      "als_trauma_general",
      "als_bleeding_hemorrhage_control",
      "als_refusal_of_medical_attention"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "The patient appears well and wants to refuse transport. What is your primary concern about this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is sitting comfortably, conversant, and states he feels fine. He has a small forehead laceration with slow bleeding.",
        clinical_pearl: "Patients on anticoagulants (Eliquis/apixaban) are at significantly increased risk of intracranial hemorrhage after head trauma, even from seemingly minor mechanisms. Symptoms may be delayed hours.",
        options: [
          { text: "Anticoagulant use (Eliquis) places this patient at high risk for delayed intracranial hemorrhage despite appearing clinically well now", correct: true, critical: false, explanation: "Patients on anticoagulants like Eliquis are at significantly increased risk for intracranial bleeding after head trauma. Symptoms can be delayed and deterioration can be rapid.", protocol_ref: "als_altered_mental_status" },
          { text: "The forehead laceration requires sutures and should be the primary focus of assessment and wound care management", correct: false, critical: false, explanation: "While the laceration needs attention, the greatest risk is occult intracranial hemorrhage in a patient on anticoagulants after head trauma.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "A fall in a 79-year-old is likely due to a cardiac arrhythmia and requires a 12-lead ECG before any other intervention", correct: false, critical: false, explanation: "While syncope should be considered as a cause of falls, the immediate concern is the head trauma in a patient on anticoagulants.", protocol_ref: "als_altered_mental_status" },
          { text: "Since the patient is alert and oriented with no neurological deficits, the head injury risk is low and refusal may be appropriate", correct: false, critical: true, explanation: "Allowing this patient to refuse transport is dangerous. Anticoagulated patients with head trauma can deteriorate rapidly from delayed intracranial bleeding.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient's wife reports he seemed 'dazed' for about a minute after the fall. Which factors support the need for spinal motion restriction? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You are assessing the patient further. He denies neck pain but his wife's report of being 'dazed' concerns you.",
        clinical_pearl: "Per NY protocol, spinal motion restriction guidelines should be used with caution in patients over age 65. A brief altered mental status after head trauma qualifies as a criterion for spinal precautions.",
        options: [
          { text: "Altered mental status associated with trauma — the wife reports the patient was 'dazed' for a minute after the fall event", correct: true, critical: false, explanation: "Per NY protocol, altered mental status associated with trauma for any reason meets criteria for spinal motion restriction.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Patient age over 65 — the protocol notes spinal motion restriction guidelines should be used with caution in this age group", correct: true, critical: false, explanation: "Per NY protocol, these guidelines should be used with caution in patients over age 65, meaning providers should have a lower threshold for restriction.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Only if the patient complains of neck pain during palpation of the cervical spine during your focused physical examination", correct: false, critical: false, explanation: "Per NY protocol, altered mental status associated with trauma alone is sufficient criteria. Waiting for neck pain to develop could miss an occult injury.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Spinal motion restriction is only indicated for high-speed mechanisms like motor vehicle accidents, not ground-level falls", correct: false, critical: false, explanation: "Per NY protocol, falls >3 feet or the patient's height are specifically listed, and altered mental status is an independent criterion regardless of mechanism.", protocol_ref: "als_suspected_spinal_injuries" }
        ]
      },
      {
        phase: "assessment",
        prompt: "During your assessment, the patient becomes confused and asks you the same question three times. His wife says this is not normal. What do you suspect?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "About 10 minutes into your assessment, the patient's behavior changes. He becomes repetitive and seems disoriented to time.",
        vitals_update: { hr: 62, bp: "182/98", gcs: 14 },
        clinical_pearl: "The 'talk and deteriorate' pattern is classic for intracranial hemorrhage. A lucid interval followed by declining mental status is an emergency requiring immediate transport.",
        options: [
          { text: "Expanding intracranial hemorrhage, likely worsened by anticoagulation — this patient needs immediate transport to the hospital", correct: true, critical: false, explanation: "New-onset confusion after head trauma in an anticoagulated patient is highly concerning for expanding intracranial hemorrhage requiring emergent evaluation and reversal agents.", protocol_ref: "als_altered_mental_status" },
          { text: "Transient post-concussive confusion that is common after head trauma and will likely resolve with rest and observation", correct: false, critical: true, explanation: "Dismissing new confusion in an anticoagulated patient after head trauma is extremely dangerous. This presentation warrants emergent transport and CT imaging.", protocol_ref: "als_altered_mental_status" },
          { text: "Delirium related to the stress of the situation and unfamiliar people in his home, which is common in elderly patients", correct: false, critical: false, explanation: "While delirium has many causes, new confusion after head trauma in an anticoagulated patient must be assumed to be intracranial hemorrhage until proven otherwise.", protocol_ref: "als_altered_mental_status" },
          { text: "Possible stroke unrelated to the fall, and you should perform a stroke screening assessment before making transport decisions", correct: false, critical: false, explanation: "While stroke is possible, the temporal relationship to head trauma with anticoagulation makes intracranial hemorrhage the most likely and dangerous diagnosis.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What is the appropriate oxygen therapy for this patient at this point?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is now confused with GCS 14, SpO₂ 97%, and you are preparing for immediate transport.",
        options: [
          { text: "Airway management and appropriate oxygen therapy per protocol, with supplemental O₂ if saturation drops below 92 percent", correct: true, critical: false, explanation: "Per NY protocol, maintain oxygen saturation ≥92%. With SpO₂ at 97%, supplemental oxygen is not currently required but airway management and monitoring are essential.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "High-flow oxygen at 15 LPM via non-rebreather mask regardless of SpO₂ because all head injury patients require high-flow oxygen", correct: false, critical: false, explanation: "NY protocol bases oxygen therapy on saturation <92% or signs of dyspnea. Routine high-flow O₂ for head injury is not specified when SpO₂ is adequate.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Nasal cannula at 6 LPM prophylactically since intracranial hemorrhage patients benefit from supplemental oxygen delivery", correct: false, critical: false, explanation: "Supplemental oxygen is indicated when SpO₂ <92% or signs of respiratory distress. Prophylactic supplementation is not specified in the protocol.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "No oxygen therapy is needed at this time — focus exclusively on rapid transport and defer all airway interventions to the ED", correct: false, critical: false, explanation: "While SpO₂ is adequate, ongoing airway management and monitoring are required per protocol. The patient's mental status may decline further.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient's GCS drops to 10 and he develops a dilated right pupil. What positioning is indicated per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "En route, the patient becomes increasingly obtunded. His right pupil is now 6 mm and sluggishly reactive while the left is 3 mm and brisk.",
        vitals_update: { hr: 56, bp: "198/108", rr: 12, gcs: 10 },
        clinical_pearl: "Cushing's triad (bradycardia, hypertension, irregular respirations) with a unilateral dilated pupil indicates transtentorial herniation from rising intracranial pressure. Elevate the head of stretcher up to 30 degrees per NY protocol.",
        options: [
          { text: "Elevate the head of the stretcher no more than 30 degrees to help reduce intracranial pressure per the spinal injury protocol", correct: true, critical: false, explanation: "Per NY spinal injury protocol, consider elevating the head of the stretcher no more than 30 degrees if there is concern for head injury.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Place the patient in the Trendelenburg position with legs elevated to improve cerebral perfusion pressure immediately", correct: false, critical: true, explanation: "Trendelenburg position increases intracranial pressure and would worsen herniation. Head elevation is indicated to reduce ICP.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Keep the patient completely flat and supine on the stretcher to maintain neutral spinal alignment during transport", correct: false, critical: false, explanation: "While spinal alignment is important, the protocol specifically allows head-of-bed elevation up to 30 degrees for head injury patients.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Position the patient on his right side in the recovery position to prevent aspiration in case of vomiting during transport", correct: false, critical: false, explanation: "While aspiration prevention is important, this patient requires spinal motion restriction and head elevation for ICP management. Suction should be available.", protocol_ref: "als_suspected_spinal_injuries" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 7: 8F — Bicycle vs Car
  // ============================================================
  {
    id: "trm-pedi-01",
    title: "8F — Bicycle vs Car",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "8-year-old female struck by car while riding bicycle, conscious, abdominal pain",
    patient: { age: 8, sex: "F", cc: "Abdominal pain after bicycle vs auto" },
    scene: "You arrive at a residential intersection to find an 8-year-old female lying on the sidewalk, crying. Bystanders report she was struck by a car turning right at approximately 15-20 mph. She was thrown from her bicycle and landed on the handlebars before hitting the ground. She is wearing a helmet that appears intact. She is holding her abdomen and crying.",
    vitals: { hr: 138, bp: "94/62", rr: 28, spo2: 97, gcs: 14, temp: "98.4°F", bg: "112 mg/dL" },
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    presentation: "The child is crying but becomes quiet when you palpate her abdomen. She has a visible handlebar imprint bruise on the left upper quadrant. Abdomen is rigid and tender diffusely with guarding. A small abrasion is present on her left elbow. No other external injuries noted. She complains of left shoulder pain but has no visible injury there.",
    primary_protocol: "als_trauma_general",
    related_protocols: [
      "als_shock_pediatric_sepsis_shock_hypoperfusion",
      "bls_shock_pediatric_sepsis_shock_hypoperfusion",
      "als_suspected_spinal_injuries",
      "bls_suspected_spinal_injuries",
      "als_bleeding_hemorrhage_control",
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "The child has a handlebar imprint bruise on the left upper quadrant and complains of left shoulder pain without visible shoulder injury. What do you suspect?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You note the handlebar bruise pattern on the LUQ and the child reports left shoulder pain when lying flat, despite no shoulder injury being visible.",
        clinical_pearl: "Kehr's sign — referred left shoulder pain from diaphragmatic irritation — suggests splenic injury with intraperitoneal hemorrhage. Handlebar injuries are a classic mechanism for solid organ injury in children.",
        options: [
          { text: "Splenic injury with possible intraperitoneal hemorrhage — the left shoulder pain is referred pain from diaphragmatic irritation (Kehr's sign)", correct: true, critical: false, explanation: "Handlebar injuries to the LUQ with referred left shoulder pain (Kehr's sign) are classic for splenic laceration. The rigid abdomen confirms intra-abdominal pathology.", protocol_ref: "als_trauma_general" },
          { text: "Musculoskeletal contusion of the abdominal wall from handlebar impact that is causing referred pain to the left shoulder area", correct: false, critical: false, explanation: "While abdominal wall contusion is possible, the rigid abdomen with guarding and referred shoulder pain suggest intra-abdominal injury, not just a surface bruise.", protocol_ref: "als_trauma_general" },
          { text: "Left shoulder sprain from the mechanism of being thrown from the bicycle that is separate from the abdominal complaint", correct: false, critical: true, explanation: "Dismissing the shoulder pain as a separate injury misses the critical connection to Kehr's sign and potential splenic hemorrhage.", protocol_ref: "als_trauma_general" },
          { text: "Fractured left rib causing both the abdominal pain and the shoulder discomfort due to splinting and shallow breathing patterns", correct: false, critical: false, explanation: "While rib fractures can cause referred pain, in a child with a handlebar mechanism and rigid abdomen, solid organ injury must be the primary concern.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What findings on this patient meet the criteria for suspected spinal injury per NY protocol? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You are determining whether spinal motion restriction is needed for this pediatric trauma patient.",
        options: [
          { text: "Pedestrian or bicyclist struck/collision, which is listed as a high-risk mechanism for unstable spinal injuries", correct: true, critical: false, explanation: "Per NY spinal protocol, pedestrian or bicyclist struck/collision is specifically listed as a high-risk mechanism associated with unstable spinal injuries.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Painful distracting injury — the abdominal and shoulder pain produce an unreliable physical exam for spinal assessment", correct: true, critical: false, explanation: "Per NY protocol, painful distracting injuries that produce an unreliable physical exam are criteria for spinal motion restriction.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "GCS of 14 indicates mildly altered mental status associated with trauma, which is an independent criterion for restriction", correct: true, critical: false, explanation: "Per NY protocol, altered mental status associated with trauma, for any reason, meets criteria for spinal motion restriction.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Age of 8 years automatically requires spinal motion restriction for any trauma mechanism per pediatric guidelines", correct: false, critical: false, explanation: "There is no age-based automatic spinal restriction criterion. The protocol uses clinical findings and mechanism to determine need.", protocol_ref: "als_suspected_spinal_injuries" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The child's heart rate is 138 and BP is 94/62. How do you interpret these vitals in an 8-year-old?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You are reassessing the child. She appears pale and her extremities are cool to the touch. Capillary refill is 3 seconds.",
        vitals_update: { hr: 148, bp: "88/56" },
        clinical_pearl: "Children compensate for hemorrhage by increasing heart rate. Hypotension is a LATE finding in pediatric shock. Per NY protocol, SBP <70 + (2 × age) is hypotensive for children 2+ years. For an 8-year-old: <70 + 16 = <86 mmHg.",
        options: [
          { text: "Compensated hemorrhagic shock — tachycardia with borderline BP for age indicates significant blood loss with early decompensation beginning", correct: true, critical: false, explanation: "For an 8-year-old, SBP <86 (70 + 2×8) is hypotensive per NY protocol. At 88/56 she is at the threshold, and tachycardia with cool extremities confirms compensated shock.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal pediatric vitals — children have higher heart rates and lower blood pressures than adults, so these are age-appropriate values", correct: false, critical: true, explanation: "HR 148 is tachycardic for an 8-year-old (>140 is abnormal per NY protocol). BP 88/56 is borderline hypotensive. These are NOT normal vitals in context.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Anxiety-related tachycardia with pain-induced elevation in blood pressure, which is expected in a scared, injured child", correct: false, critical: false, explanation: "While anxiety causes tachycardia, the BP is LOW (not elevated), and cool extremities with delayed cap refill indicate hemorrhagic shock, not anxiety.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Neurogenic shock from a spinal cord injury causing loss of vascular tone with the resultant tachycardia and hypotension", correct: false, critical: false, explanation: "Neurogenic shock typically presents with bradycardia and hypotension, not tachycardia. The mechanism and presentation are consistent with hemorrhagic shock.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the Paramedic level, the child's BP has dropped to 82/50 with HR 156. What fluid resuscitation is indicated?",
        multi_select: false,
        level_filter: "P",
        narrative: "The child is becoming increasingly lethargic. Her skin is now mottled and capillary refill is 5 seconds.",
        vitals_update: { hr: 156, bp: "82/50", spo2: 96, gcs: 13 },
        clinical_pearl: "Per NY pediatric sepsis/shock protocol, Paramedics give NS 20 mL/kg IV bolus. Use a 100 mL bag if the patient weighs less than 20 kg. An average 8-year-old weighs approximately 25 kg.",
        options: [
          { text: "Normal saline 20 mL/kg IV bolus — approximately 500 mL for this child — while reassessing after completion for continued shock signs", correct: true, critical: false, explanation: "Per NY pediatric shock protocol, NS 20 mL/kg IV bolus. An average 8-year-old (~25 kg) would receive approximately 500 mL.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 500 mL bolus wide open IV, the same standard adult bolus dose, since the child weighs enough for adult dosing", correct: false, critical: false, explanation: "While the volume may be similar, pediatric fluid resuscitation should always be calculated on a weight basis (20 mL/kg), not by using a standard adult dose.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 10 mL/kg IV bolus as the initial dose to avoid fluid overload in a child with possible intra-abdominal bleeding", correct: false, critical: false, explanation: "NY protocol specifies 20 mL/kg, not 10 mL/kg, for pediatric shock resuscitation. Under-resuscitation in hemorrhagic shock is dangerous.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Defer IV fluids and focus solely on rapid transport since prehospital fluid resuscitation has not been shown to improve outcomes", correct: false, critical: false, explanation: "While rapid transport is critical, the NY protocol includes fluid resuscitation for pediatric shock. Both should happen simultaneously.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "transport",
        prompt: "Per NY protocol, what is the appropriate transport destination and notification for this child?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The child is packaged with spinal precautions, IV running, and high-flow oxygen. You are preparing for immediate transport.",
        clinical_pearl: "Per NY trauma general protocol, trauma patients meeting criteria for transport to a trauma center go to the closest appropriate trauma center. Pediatric trauma patients should ideally go to a pediatric trauma center when available and within a reasonable distance.",
        options: [
          { text: "Transport to the closest appropriate trauma center with early notification including mechanism, patient status, and estimated arrival time", correct: true, critical: false, explanation: "Per NY trauma general protocol, trauma patients go to the closest appropriate trauma center with early notification including mechanism, status, and ETA.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the closest hospital of any type for initial stabilization before transfer to a trauma center for definitive care", correct: false, critical: false, explanation: "Direct transport to a trauma center is preferred when available. Stopping at a non-trauma hospital delays definitive surgical care for this child.", protocol_ref: "als_trauma_general" },
          { text: "Call for air medical transport to the regional pediatric hospital since ground transport cannot provide surgical intervention", correct: false, critical: false, explanation: "Air medical should be considered when ground transport time to a trauma center is excessive. The protocol favors the closest appropriate trauma center.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the family's preferred hospital per parental request since the parents have arrived on scene and have legal authority", correct: false, critical: false, explanation: "While parental wishes are important, protocol directs trauma patients meeting criteria to the closest appropriate trauma center. Patient safety takes priority.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the child vomits and her GCS drops to 11. What are your priority interventions? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child suddenly vomits and becomes more lethargic. She is still in spinal motion restriction on the stretcher.",
        vitals_update: { hr: 162, bp: "76/48", rr: 32, spo2: 93, gcs: 11 },
        options: [
          { text: "Suction the airway immediately, log-roll if needed to clear vomitus, and ensure the airway remains patent while maintaining spinal precautions", correct: true, critical: false, explanation: "Airway management is the immediate priority when a patient vomits while in spinal restriction. Suction and log-roll to prevent aspiration.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Remove the cervical collar to allow the child to turn her head freely and clear the vomitus on her own without assistance", correct: false, critical: true, explanation: "Removing the c-collar in a patient with indications for spinal motion restriction risks spinal cord injury. Log-roll the entire patient to clear the airway.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Provide updated notification to the receiving trauma center about the clinical deterioration and new GCS of 11", correct: true, critical: false, explanation: "Per NY protocol, notify the receiving facility with patient status updates. Deteriorating GCS changes the urgency and resources needed on arrival.", protocol_ref: "als_trauma_general" },
          { text: "Administer ondansetron 4 mg ODT to prevent further vomiting episodes before addressing any other concerns during transport", correct: false, critical: false, explanation: "Antiemetics are secondary to airway management. The immediate priority is clearing the airway and preventing aspiration.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      }
    ]
  }
];
