const SCENARIOS = [
  // ============================================================
  // SCENARIO 1: Atypical ACS in elderly female
  // ============================================================
  {
    id: "med-acs-01",
    title: "62F — Nausea and Stomach Pain",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "62-year-old female, nausea and epigastric pain, residence, 2nd floor walk-up",
    patient: { age: 62, sex: "F", cc: "Epigastric pain and nausea for 2 hours" },
    scene: "You arrive at a tidy apartment. The patient is seated in a recliner, appearing pale and diaphoretic. She states she ate dinner two hours ago and has had worsening stomach pain and nausea since. She denies chest pain or shortness of breath.",
    vitals: { hr: 92, bp: "148/88", rr: 20, spo2: 95, gcs: 15, temp: "98.4°F", bg: "142 mg/dL" },
    history: { pmh: "HTN, Type 2 DM, hyperlipidemia", meds: "Metformin, lisinopril, atorvastatin", allergies: "Sulfa" },
    presentation: "Patient is alert and oriented x4, skin pale and diaphoretic. Denies chest pain but endorses epigastric discomfort radiating to left jaw, nausea, and general malaise. Lung sounds clear bilaterally. Abdomen soft, mildly tender in epigastrium without guarding or rigidity.",
    primary_protocol: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
    related_protocols: ["als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr", "als_general_approach_to_the_patient"],
    level_min: "EMT",
    questions: [
      {
        phase: "assessment",
        prompt: "Given this patient's presentation, which condition should be at the top of your differential diagnosis?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient continues to look uncomfortable, rubbing her epigastrium and intermittently gagging.",
        clinical_pearl: "Women, diabetics, and elderly patients frequently present with atypical ACS symptoms including epigastric pain, nausea, jaw pain, and fatigue — without classic chest pain. Always consider ACS with these risk factors.",
        options: [
          { text: "Acute coronary syndrome presenting with atypical anginal equivalents given her risk factors", correct: true, critical: false, explanation: "Epigastric pain with jaw radiation, diaphoresis, and nausea in a 62F with HTN, DM, and hyperlipidemia is classic atypical ACS.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Acute cholecystitis based on the postprandial timing and epigastric location of her pain", correct: false, critical: false, explanation: "Cholecystitis is plausible but diaphoresis and jaw radiation make ACS more likely and more dangerous to miss.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Gastroesophageal reflux disease exacerbation given her recent meal and epigastric symptoms", correct: false, critical: true, explanation: "Dismissing this as GERD with these risk factors and diaphoresis could be fatal. Always rule out ACS first.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Diabetic gastroparesis causing delayed gastric emptying and resulting nausea with discomfort", correct: false, critical: false, explanation: "Gastroparesis doesn't explain diaphoresis or jaw radiation. ACS must be considered first.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What interventions should you perform during your initial assessment? Select all that apply.",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        clinical_pearl: "NY protocol states to consider 12-lead ECG for adults with any one of: dyspnea, syncope, dizziness, fatigue, weakness, nausea, or vomiting — even without chest pain.",
        options: [
          { text: "Acquire and transmit a 12-lead ECG to identify ST changes or STEMI pattern", correct: true, critical: false, explanation: "Per NY protocol, 12-lead ECG should be acquired for patients with nausea/vomiting as potential anginal equivalents.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer aspirin 324 mg chewed if the patient is able to chew without difficulty", correct: true, critical: false, explanation: "Aspirin is a standing order for all provider levels when ACS is suspected.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Provide supplemental oxygen therapy and ongoing airway assessment as indicated", correct: true, critical: false, explanation: "Airway management and appropriate oxygen therapy is the first step in the cardiac protocol.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer ondansetron 4 mg ODT immediately to address the patient's primary complaint", correct: false, critical: false, explanation: "While nausea treatment may be appropriate later, identifying and treating the underlying cause (ACS) takes priority.", protocol_ref: "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The 12-lead ECG shows 2mm ST elevation in leads II, III, and aVF. What is the most important next action?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Your partner shows you the 12-lead printout. Medical control confirms STEMI. The patient now reports feeling lightheaded.",
        vitals_update: { hr: 56, bp: "94/60", rr: 22, spo2: 93 },
        clinical_pearl: "Inferior STEMI often involves the right ventricle. Bradycardia and hypotension are common. Nitroglycerin is contraindicated when SBP ≤120 mmHg. Consider a right-sided ECG.",
        options: [
          { text: "Begin immediate transport to a PCI-capable facility and notify the receiving hospital of STEMI", correct: true, critical: false, explanation: "Per NY protocol, confirmed STEMI patients should be transported to a PCI-capable facility if within 90 minutes. Early notification is critical.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer nitroglycerin 0.4 mg sublingual to reduce cardiac workload and relieve her pain", correct: false, critical: true, explanation: "Her SBP is 94 mmHg. Nitroglycerin requires SBP >120 mmHg per NY protocol. Giving NTG could cause cardiovascular collapse, especially with right ventricular involvement.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Establish vascular access and administer a 500 mL normal saline bolus for the hypotension", correct: false, critical: false, explanation: "IV access and fluids are appropriate but should not delay transport to a PCI facility. These can be done en route.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Obtain a right-sided 12-lead ECG to evaluate for right ventricular infarction involvement", correct: false, critical: false, explanation: "A right-sided ECG is recommended for inferior STEMI but should not delay transport to definitive care.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "En route, the patient's blood pressure drops to 82/50. She is now confused. As an ALS provider, what is the most appropriate intervention?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        vitals_update: { hr: 48, bp: "82/50", gcs: 13 },
        clinical_pearl: "For cardiogenic shock with STEMI, NY protocol calls for NS bolus if SBP <100 or MAP <65, up to 2L if lungs remain clear. Goal SBP >100 and MAP >65.",
        options: [
          { text: "Position patient supine and administer normal saline 500 mL bolus with repeat as needed", correct: true, critical: false, explanation: "Per NY cardiogenic shock protocol, NS 500 mL bolus if SBP <100 or MAP <65, may repeat to 2L if lungs clear.", protocol_ref: "als_cardiogenic_shock_adult_for_pediatric_see_sepsis_shock_hypoperfusion_pediatric" },
          { text: "Administer atropine 1 mg IV to treat the symptomatic bradycardia causing hypotension", correct: false, critical: false, explanation: "Atropine may help the bradycardia but fluid resuscitation is the priority for cardiogenic shock per NY protocol. The bradycardia is secondary to the inferior MI.", protocol_ref: "als_cardiogenic_shock_adult_for_pediatric_see_sepsis_shock_hypoperfusion_pediatric" },
          { text: "Start a norepinephrine infusion at 2 mcg/min titrated to maintain adequate blood pressure", correct: false, critical: false, explanation: "Norepinephrine is indicated per protocol but only after fluid bolus is complete and hypotension persists. Paramedic level.", protocol_ref: "als_cardiogenic_shock_adult_for_pediatric_see_sepsis_shock_hypoperfusion_pediatric" },
          { text: "Administer morphine 5 mg IV for pain relief which will also reduce cardiac preload demand", correct: false, critical: true, explanation: "Morphine causes vasodilation and can worsen hypotension. Reducing preload in a patient who is already hypotensive with possible RV infarction is extremely dangerous.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "The closest hospital is 8 minutes away. The closest PCI-capable facility is 28 minutes. Where should you transport this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After 500 mL NS, BP improves to 92/58. Patient remains drowsy but arousable. ST elevation persists on the monitor.",
        options: [
          { text: "Continue to the PCI-capable facility since transport time is well within the 90-minute window", correct: true, critical: false, explanation: "NY protocol directs STEMI patients to PCI-capable facilities if within 90 minutes. 28 minutes is well within this window.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Divert to the closest hospital given the patient's hemodynamic instability and altered status", correct: false, critical: false, explanation: "While concerning, her BP is responding to fluids and the PCI facility is only 28 minutes away. The closest hospital cannot perform the angioplasty she needs.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Contact medical control and request guidance on destination given the clinical deterioration", correct: false, critical: false, explanation: "Consulting medical control is always reasonable but should not delay transport. The protocol clearly directs PCI transport within 90 minutes.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Stage at the closer hospital to stabilize the patient before transferring to the PCI facility", correct: false, critical: false, explanation: "Stopping at a non-PCI hospital adds significant door-to-balloon time and worsens outcomes. Direct transport is preferred.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: Pediatric febrile seizure vs meningitis
  // ============================================================
  {
    id: "med-peds-02",
    title: "2M — Seizure Activity, High Fever",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "2-year-old male, seizure, still seizing per caller, residence",
    patient: { age: 2, sex: "M", cc: "Active seizure with fever" },
    scene: "You arrive to find a 2-year-old male on a couch, postictal. Mother states he started shaking about 4 minutes ago and stopped just before your arrival. She noticed a fever earlier today. The home is clean with no hazards noted.",
    vitals: { hr: 162, bp: "86/52", rr: 32, spo2: 94, gcs: 10, temp: "104.2°F", bg: "98 mg/dL" },
    history: { pmh: "None, full-term birth, vaccinations up to date", meds: "Children's Tylenol given 1 hour ago", allergies: "NKDA" },
    presentation: "Child is postictal — eyes open intermittently, does not track, withdraws to pain. Skin is hot and flushed. No rash noted on initial exam. Mild rhinorrhea present. Fontanelle is closed and non-bulging. Neck appears supple on passive range of motion.",
    primary_protocol: "als_fever_pediatric",
    related_protocols: ["als_altered_mental_status", "als_shock_pediatric_sepsis_shock_hypoperfusion"],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "On arrival, the child has stopped seizing. What is your immediate priority?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Most febrile seizures are brief (<5 min) and self-limited. The postictal period may mimic altered mental status from other causes. Airway management is always the first priority.",
        options: [
          { text: "Assess and manage the airway, position the child, and provide appropriate oxygen therapy", correct: true, critical: false, explanation: "ABCs always come first. Postictal children are at risk for airway compromise from secretions and decreased level of consciousness.", protocol_ref: "als_altered_mental_status" },
          { text: "Immediately administer midazolam intranasally to prevent recurrence of seizure activity", correct: false, critical: false, explanation: "The seizure has stopped. Benzodiazepines are for active seizures. Prophylactic administration is not indicated per NY protocol.", protocol_ref: "als_altered_mental_status" },
          { text: "Obtain a full set of vitals including blood glucose and rectal temperature before any treatment", correct: false, critical: false, explanation: "Vitals are important but airway assessment and management must come before detailed assessment in a postictal child.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Begin aggressive cooling measures immediately using ice packs to the groin and bilateral axillae", correct: false, critical: false, explanation: "Aggressive cooling with ice is not indicated. Minimize clothing and keep the environment comfortable per NY fever protocol.", protocol_ref: "als_fever_pediatric" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which findings would MOST increase your concern that this is meningitis rather than a simple febrile seizure? Select all that apply.",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After airway management, you perform a thorough secondary assessment. The child remains lethargic with a GCS of 10.",
        clinical_pearl: "Red flags for meningitis include: petechial/purpuric rash, bulging fontanelle (if open), nuchal rigidity, prolonged altered mental status, toxic appearance, and age <6 months with fever.",
        options: [
          { text: "Development of a petechial or purpuric rash on the trunk or extremities during your assessment", correct: true, critical: false, explanation: "Petechiae or purpura with fever is highly concerning for meningococcemia and bacterial meningitis.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Failure to return to baseline mental status within 15 to 20 minutes following seizure cessation", correct: true, critical: false, explanation: "Prolonged postictal state beyond 15-20 minutes suggests a cause beyond simple febrile seizure.", protocol_ref: "als_altered_mental_status" },
          { text: "The child's temperature reading of 104.2 degrees Fahrenheit measured with your thermometer", correct: false, critical: false, explanation: "High fever alone does not differentiate meningitis from febrile seizure. Simple febrile seizures commonly occur with temps >104°F.", protocol_ref: "als_fever_pediatric" },
          { text: "Signs of nuchal rigidity with the child crying and arching when you attempt neck flexion gently", correct: true, critical: false, explanation: "Nuchal rigidity is a classic meningeal sign. However, it may be absent in very young children.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Ten minutes later, the child has another generalized tonic-clonic seizure. What is the appropriate CC-level intervention?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The child begins seizing again — tonic-clonic activity of all four extremities. SpO2 drops to 88%.",
        vitals_update: { hr: 178, spo2: 88, gcs: 3 },
        clinical_pearl: "NY pediatric seizure protocol: CC may give Midazolam 0.2 mg/kg IM or intranasal (max 10 mg). Paramedic may also give 0.1 mg/kg IV (max 5 mg). Dose based on ideal body weight.",
        options: [
          { text: "Administer midazolam 0.2 mg/kg intranasally while maintaining airway with BVM ventilation", correct: true, critical: false, explanation: "Per NY protocol, CC providers may give Midazolam 0.2 mg/kg IM or intranasal (max 10 mg) for active pediatric seizures.", protocol_ref: "als_fever_pediatric" },
          { text: "Establish IV access and administer midazolam 0.1 mg/kg intravenously to stop the seizure", correct: false, critical: false, explanation: "IV midazolam is a paramedic intervention per NY protocol. CC level should use IM or intranasal routes. Also, IV access during active seizure in a toddler is extremely difficult.", protocol_ref: "als_fever_pediatric" },
          { text: "Restrain the child securely to prevent injury and wait for the seizure to terminate on its own", correct: false, critical: true, explanation: "Never restrain a seizing patient. Protect from harm by removing hazards. Active seizures require treatment — status epilepticus is a medical emergency.", protocol_ref: "als_fever_pediatric" },
          { text: "Place the child in a recovery position and suction the airway until seizure activity has stopped", correct: false, critical: false, explanation: "Airway management is important but pharmacologic seizure termination is needed. The seizure has recurred and requires benzodiazepine treatment.", protocol_ref: "als_fever_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After the seizure stops, you notice scattered petechiae on the child's chest and abdomen. How does this change your management?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The seizure terminates after midazolam. As you expose the child, you find new scattered petechiae across the trunk. The child remains altered with capillary refill of 4 seconds.",
        vitals_update: { hr: 182, bp: "72/40", rr: 36, spo2: 92, gcs: 9 },
        clinical_pearl: "Petechiae with fever and altered mental status = presume meningococcemia with septic shock until proven otherwise. This is a time-critical emergency requiring aggressive fluid resuscitation and immediate transport.",
        options: [
          { text: "Initiate treatment for septic shock with rapid fluid resuscitation and immediate transport to the closest appropriate hospital", correct: true, critical: false, explanation: "Petechiae, fever, altered mental status, poor perfusion, and hypotension indicate septic shock. Per NY pediatric sepsis protocol, aggressive fluid resuscitation and immediate transport are required.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Continue monitoring and prepare for transport since petechiae may simply result from the increased intrathoracic pressure during seizure", correct: false, critical: true, explanation: "While seizure-related petechiae occur, this child has hemodynamic instability and altered mental status. Failing to treat for sepsis could be fatal.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Administer epinephrine intramuscularly as this presentation is consistent with anaphylactic shock from an unknown allergen", correct: false, critical: false, explanation: "There is no allergen exposure history and the rash is petechial, not urticarial. This is septic shock, not anaphylaxis.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Obtain IV access and administer dexamethasone intravenously to reduce the inflammatory meningeal response before transport", correct: false, critical: false, explanation: "While steroids are used in hospital meningitis treatment, prehospital dexamethasone is not part of the NY pediatric sepsis protocol. Fluid resuscitation and transport take priority.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the appropriate fluid resuscitation for this child during transport? (Estimated weight: 12 kg)",
        multi_select: false,
        level_filter: "P",
        options: [
          { text: "Normal saline 20 mL/kg bolus IV which equals 240 mL using a 100 mL bag since weight is under 20 kg", correct: true, critical: false, explanation: "Per NY pediatric sepsis protocol: NS 20 mL/kg bolus IV. For patients <20 kg, use 100 mL bags. 20 x 12 = 240 mL.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 500 mL bolus IV administered rapidly to restore circulating volume and improve perfusion", correct: false, critical: false, explanation: "500 mL is an adult dose. Pediatric dosing is weight-based at 20 mL/kg. NY protocol specifically warns against using 1000 mL bags for children <20 kg.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 10 mL/kg bolus IV which equals 120 mL administered slowly over 20 minutes for safety", correct: false, critical: false, explanation: "10 mL/kg is too conservative for septic shock. NY protocol calls for 20 mL/kg bolus. Septic shock requires aggressive resuscitation.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Lactated Ringer's solution 20 mL/kg bolus IV as it provides better electrolyte balance than normal saline", correct: false, critical: false, explanation: "NY protocol specifically calls for Normal Saline. While LR is an acceptable alternative crystalloid, NS is the protocol-directed fluid.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: Excited delirium with taser deployment
  // ============================================================
  {
    id: "med-behav-03",
    title: "34M — Violent Male, Tased by Police",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "34-year-old male, violent behavior, police on scene, one subject tased, requesting EMS for medical clearance",
    patient: { age: 34, sex: "M", cc: "Agitated/violent behavior, taser deployment" },
    scene: "You arrive to find a male in handcuffs, prone on the sidewalk with two officers holding him down. He is screaming incoherently, continuing to struggle despite restraints. Officers report he was destroying property, appeared to have superhuman strength, and was impervious to pain compliance. Taser was deployed twice with minimal effect. Ambient temperature is 45°F but the patient is wearing only shorts and is drenched in sweat.",
    vitals: { hr: 148, bp: "182/104", rr: 34, spo2: 92, gcs: 13, temp: "103.8°F", bg: "168 mg/dL" },
    history: { pmh: "Unknown", meds: "Unknown", allergies: "Unknown" },
    presentation: "Male is extremely agitated, diaphoretic, and hyperthermic despite cold ambient temperature. Dilated pupils bilaterally. Skin is hot to touch. Continuous psychomotor agitation with apparent unusual strength. Does not respond to verbal commands. Two taser probe sites noted on left flank — no significant injury.",
    primary_protocol: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha",
    related_protocols: ["als_deescalation_techniques", "als_general_approach_to_the_patient"],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "What is your FIRST priority upon arrival at this scene?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Scene safety is continuous — not a one-time check. In behavioral emergencies, always ensure law enforcement has secured the scene before approaching. Stage if the scene is not safe.",
        options: [
          { text: "Confirm the scene is secure with law enforcement before approaching the patient for assessment", correct: true, critical: false, explanation: "Scene safety is always first. Per NY protocol: assess the scene for safety and retreat if unsafe. Obtain police assistance.", protocol_ref: "als_general_approach_to_the_ems_call" },
          { text: "Immediately request the officers to reposition the patient off his stomach to prevent asphyxiation", correct: false, critical: false, explanation: "Repositioning is critically important but confirming scene safety comes first. You cannot help the patient if you become a victim.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Begin verbal de-escalation techniques while approaching to quickly establish therapeutic rapport", correct: false, critical: false, explanation: "De-escalation is appropriate but the patient is not responding to verbal commands and the scene must be confirmed safe first.", protocol_ref: "als_deescalation_techniques" },
          { text: "Administer ketamine intramuscularly immediately to sedate the patient before he injures someone", correct: false, critical: true, explanation: "Administering medication without scene safety assessment, patient assessment, or proper indication is dangerous and premature. This also requires paramedic level.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient is handcuffed and officers have the scene controlled. What critical action must happen immediately?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Officers confirm the scene is secure. The patient remains prone, still struggling against handcuffs, screaming incoherently. His face is pressed into the pavement.",
        options: [
          { text: "Have officers reposition the patient off his stomach immediately as prone transport is prohibited", correct: true, critical: false, explanation: "NY protocol is explicit: 'Patient must NOT be transported in a face-down position.' Prone restraint is associated with positional asphyxia and sudden death.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Obtain a complete set of vital signs including blood glucose while the patient is in the prone position", correct: false, critical: false, explanation: "Vitals are important but getting the patient out of prone position is immediately life-threatening. Positional asphyxia kills.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Attempt verbal de-escalation and environmental modification before initiating any physical contact", correct: false, critical: false, explanation: "This patient is past the point of verbal de-escalation. The immediate danger is positional asphyxia from prone restraint.", protocol_ref: "als_deescalation_techniques" },
          { text: "Apply soft restraints to all four extremities and secure the patient to the stretcher for transport", correct: false, critical: false, explanation: "Restraints may eventually be needed but the immediate priority is removing the patient from the prone position.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "treatment",
        prompt: "This patient meets the criteria for excited delirium. As a paramedic, what is the appropriate pharmacologic intervention per NY protocol?",
        multi_select: false,
        level_filter: "P",
        narrative: "The patient has been repositioned supine. He continues to exhibit unusual strength, lack of tiring, tactile hyperthermia, diaphoresis, tachypnea, and altered mental status despite verbal de-escalation attempts.",
        clinical_pearl: "NY protocol specifically defines excited delirium criteria: psychomotor agitation, physiologic excitation, failure to respond to de-escalation, with destructive/erratic/violent behavior. Features include unusual strength, pain tolerance, lack of tiring, tachypnea, diaphoresis, hyperthermia.",
        options: [
          { text: "Ketamine 250 mg IM with a single repeat dose after 5 minutes if the patient remains uncontrolled", correct: true, critical: false, explanation: "Per NY paramedic protocol for excited delirium: Ketamine 250 mg IM, may repeat 250 mg IM after 5 minutes if uncontrolled.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Midazolam 5 mg IM repeated every 5 minutes up to a maximum total dose of 10 mg as tolerated", correct: false, critical: false, explanation: "Midazolam up to 5 mg IM/IV (repeat to 10 mg) is the CC-level intervention. Paramedics have ketamine as the preferred agent for excited delirium per NY protocol.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Haloperidol 10 mg IM as a first-line antipsychotic to address the underlying psychotic agitation", correct: false, critical: false, explanation: "Haloperidol is not in the NY standing order protocol for agitated patients. Ketamine and midazolam are the protocol agents.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Ketamine 2 mg/kg IV push for rapid onset sedation while partner maintains airway management", correct: false, critical: false, explanation: "IV ketamine for agitation is a medical control consideration only, not standing order. Standing order is Ketamine 250 mg IM. Also, IV access on this patient would be extremely difficult.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After ketamine administration, what monitoring must be initiated as soon as practicable?",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "Ketamine 250 mg IM administered. After 3 minutes, the patient becomes progressively sedated. Muscle tone decreases significantly.",
        vitals_update: { hr: 128, bp: "156/92", rr: 14, spo2: 94, gcs: 8 },
        clinical_pearl: "NY protocol mandates: 'Utilize waveform capnography as soon as practicable following administration of any medications in this protocol.' Also: if the agitated patient goes into cardiac arrest, administer Sodium Bicarbonate 50 mEq IV.",
        options: [
          { text: "Waveform capnography to continuously monitor ventilatory status following sedation medication", correct: true, critical: false, explanation: "NY protocol explicitly requires waveform capnography as soon as practicable after any medication in the agitated patient protocol.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Continuous pulse oximetry and cardiac monitoring to detect respiratory depression or dysrhythmia", correct: true, critical: false, explanation: "Cardiac monitoring and continuous SpO2 are essential. Excited delirium carries significant risk of sudden cardiac arrest.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Reassessment of blood glucose level since hypoglycemia can mimic or contribute to agitated behavior", correct: true, critical: false, explanation: "Per NY protocol, check blood glucose as soon as safely possible. Hypoglycemia is listed as a medical cause of abnormal behavior.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Administration of flumazenil to prepare for potential benzodiazepine reversal if over-sedation occurs", correct: false, critical: true, explanation: "Ketamine was given, not a benzodiazepine. Flumazenil is not indicated and would have no effect. It is also not part of NY protocol for this situation.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient suddenly goes into cardiac arrest. Beyond standard ACLS, what additional medication does the NY agitated patient protocol specifically direct?",
        multi_select: false,
        level_filter: "P",
        narrative: "The cardiac monitor shows wide-complex tachycardia that deteriorates into ventricular fibrillation. No pulse detected.",
        vitals_update: { hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 3 },
        options: [
          { text: "Sodium bicarbonate 50 mEq IV in addition to standard cardiac arrest protocol medications", correct: true, critical: false, explanation: "NY protocol specifically states: 'If the agitated patient goes into cardiac arrest, refer to the appropriate protocol and administer Sodium Bicarbonate 50 mEq IV.'", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Calcium chloride 1 gram IV to counteract the presumed hyperkalemia from rhabdomyolysis", correct: false, critical: false, explanation: "Calcium chloride for hyperkalemia is in the VF/VT arrest protocol but the agitated patient protocol specifically directs sodium bicarbonate.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Magnesium 2 grams IV to treat the suspected torsades de pointes rhythm causing the arrest", correct: false, critical: false, explanation: "Magnesium for torsades is a consideration but the agitated patient protocol specifically directs sodium bicarbonate for cardiac arrest.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" },
          { text: "Amiodarone 300 mg IV as the first-line antiarrhythmic per standard ventricular fibrillation protocol", correct: false, critical: false, explanation: "Amiodarone is part of the standard VF protocol but the question asks about the ADDITIONAL medication the agitated patient protocol specifically directs — sodium bicarbonate.", protocol_ref: "als_behavioral_agitated_patient_adult_for_pediatric_and_adolescent_patients_see_beha" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: Severe asthma → respiratory failure
  // ============================================================
  {
    id: "med-resp-04",
    title: "28F — Can't Breathe, History of Asthma",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "28-year-old female, difficulty breathing, known asthmatic, tripod position, can barely speak",
    patient: { age: 28, sex: "F", cc: "Severe shortness of breath" },
    scene: "You find the patient seated on the edge of her bed in tripod position. She is using accessory muscles and can only speak one to two words between breaths. Multiple inhalers are on the nightstand. Her roommate states the patient ran out of her controller medication a week ago.",
    vitals: { hr: 128, bp: "142/86", rr: 32, spo2: 88, gcs: 15, temp: "98.6°F", bg: "118 mg/dL" },
    history: { pmh: "Asthma since childhood, 2 prior intubations, last hospitalization 6 months ago", meds: "Albuterol PRN, fluticasone/salmeterol (ran out 1 week ago)", allergies: "Erythromycin" },
    presentation: "Patient in severe respiratory distress, tripod position, intercostal and supraclavicular retractions. Speaking in 1-2 word sentences. Diffuse bilateral expiratory wheezing with prolonged expiratory phase. Diaphoretic, appears exhausted.",
    primary_protocol: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr",
    related_protocols: ["als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe", "als_oxygen_administration_and_airway_management"],
    level_min: "EMT",
    questions: [
      {
        phase: "treatment",
        prompt: "What are the appropriate EMT-level interventions for this patient? Select all that apply.",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        clinical_pearl: "NY EMT protocol for asthma: Albuterol 2.5 mg nebulized (repeat up to 3 doses), may combine with Ipratropium 0.5 mg. Consider CPAP 5-10 cm H2O. For severe distress, seek medical control for epinephrine.",
        options: [
          { text: "Albuterol 2.5 mg via nebulizer, may repeat to three total doses, combined with ipratropium 0.5 mg", correct: true, critical: false, explanation: "Per NY EMT protocol for asthma: Albuterol 2.5 mg nebulized, may repeat to 3 doses, may combine with Ipratropium.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "CPAP at 5-10 cm H2O to reduce the work of breathing and improve oxygen saturation levels", correct: true, critical: false, explanation: "CPAP 5-10 cm H2O is an EMT standing order for asthma/COPD per NY protocol.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Supplemental oxygen therapy via non-rebreather mask and allow the patient to maintain her position of comfort", correct: true, critical: false, explanation: "Oxygen administration and allowing position of comfort are explicitly in the protocol. Do not force the patient to lie down.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Epinephrine 0.3 mg IM immediately without contacting medical control for this critical presentation", correct: false, critical: false, explanation: "At the EMT level, epinephrine for severe asthma requires medical control consultation per NY protocol. AEMT and above may give it on standing order.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After two albuterol treatments, the patient's wheezing diminishes but her respiratory effort remains labored. SpO2 is now 84%. What is the most concerning interpretation?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After two nebulizer treatments, the audible wheezing has decreased but the patient appears more fatigued. She is now only nodding, unable to speak.",
        vitals_update: { hr: 138, bp: "134/80", rr: 28, spo2: 84, gcs: 14 },
        clinical_pearl: "Absence of wheezing in a severe asthmatic is NOT improvement — it indicates critically reduced air movement (status asthmaticus). 'Silent chest' is a pre-arrest sign. Be prepared for respiratory failure.",
        options: [
          { text: "The silent chest indicates worsening status asthmaticus with critically reduced tidal volumes", correct: true, critical: false, explanation: "Loss of wheezing with continued distress indicates air movement is so poor that wheezes cannot be generated. This is a pre-arrest sign.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "The decrease in wheezing indicates the albuterol treatments are providing effective bronchodilation", correct: false, critical: true, explanation: "Interpreting a silent chest as improvement could be fatal. The patient is MORE fatigued and SpO2 has DROPPED — this is respiratory failure.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "The worsening oxygenation suggests a developing pneumothorax from the positive pressure treatments", correct: false, critical: false, explanation: "Pneumothorax is possible but this presentation is more consistent with progressing status asthmaticus. Assess lung sounds bilaterally.", protocol_ref: "als_chest_trauma" },
          { text: "The patient's fatigue suggests she needs to rest briefly and will likely improve with continued nebulizers", correct: false, critical: true, explanation: "Fatigue in a severe asthmatic indicates impending respiratory failure, not need for rest. Immediate escalation of care is required.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" }
        ]
      },
      {
        phase: "treatment",
        prompt: "As an AEMT, what additional intervention is available for this patient in severe distress?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        clinical_pearl: "NY AEMT protocol: Epinephrine 1:1,000 (1 mg/mL) 0.3 mg IM for severe distress. May repeat in 5 minutes. IM route is used when tidal volume is so small that nebulized medications won't work.",
        options: [
          { text: "Epinephrine 1:1,000 at 0.3 mg IM for severe respiratory distress and establish vascular access", correct: true, critical: false, explanation: "Per NY AEMT protocol: Epinephrine 1 mg/mL 0.3 mg IM for severe distress, may repeat in 5 minutes. Vascular access if not improving with nebulizer.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Magnesium 2 grams in 100 mL normal saline IV over 10 minutes for refractory bronchospasm", correct: false, critical: false, explanation: "Magnesium is a CC/Paramedic-level intervention per NY protocol, not available at the AEMT level.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Dexamethasone 10 mg IV to reduce airway inflammation and prevent continued bronchospasm", correct: false, critical: false, explanation: "Dexamethasone is a CC/Paramedic-level intervention per NY protocol.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Epinephrine 1:10,000 at 1 mg IV push as a last resort for impending respiratory arrest status", correct: false, critical: true, explanation: "1:10,000 IV epinephrine 1 mg is a cardiac arrest dose. This patient has a pulse. The correct route and concentration is 1:1,000 0.3 mg IM.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient stops responding to verbal stimuli. Respiratory rate drops to 8. What must you do immediately?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient suddenly slumps forward. Respiratory rate drops to 8 with shallow, ineffective breaths. SpO2 reads 72%.",
        vitals_update: { hr: 142, rr: 8, spo2: 72, gcs: 6 },
        options: [
          { text: "Begin immediate bag-valve-mask ventilation with supplemental oxygen and prepare for advanced airway", correct: true, critical: false, explanation: "This patient is in respiratory failure/arrest. Per NY protocol, provide BVM ventilation immediately. Do not delay ventilations for oxygen connection.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Administer another round of albuterol nebulization treatment and wait for a clinical response", correct: false, critical: true, explanation: "This patient cannot effectively inhale nebulized medications. She is in respiratory failure and needs immediate assisted ventilation.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Place the patient on high-flow oxygen via non-rebreather mask and continue to monitor closely", correct: false, critical: true, explanation: "Non-rebreather provides no positive pressure. With a RR of 8 and SpO2 of 72%, the patient needs active ventilation immediately.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Perform endotracheal intubation immediately to secure a definitive airway before any ventilation", correct: false, critical: false, explanation: "Do not delay ventilation to intubate. Oxygenate first with BVM, then intubate if needed. BVM is appropriate at all provider levels.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" }
        ]
      },
      {
        phase: "transport",
        prompt: "Which CC/Paramedic-level medication should be strongly considered for this asthma patient who is not responding to initial treatments?",
        multi_select: false,
        level_filter: "CC-P",
        options: [
          { text: "Magnesium 2 grams in 100 mL normal saline IV over 10 minutes for refractory status asthmaticus", correct: true, critical: false, explanation: "Per NY CC/P protocol: for the asthma patient not responding to treatments, consider Magnesium 2 grams in 100 mL NS IV over 10 minutes.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Methylprednisolone 125 mg IV push as the preferred corticosteroid for acute severe bronchospasm", correct: false, critical: false, explanation: "NY protocol directs Dexamethasone 10 mg, not methylprednisolone, for asthma. Methylprednisolone is listed only as a REMAC alternative.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Terbutaline 0.25 mg subcutaneous injection as an alternative bronchodilator for refractory asthma", correct: false, critical: false, explanation: "Terbutaline is not in the NY EMS protocol formulary. The available bronchodilators are albuterol and epinephrine.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" },
          { text: "Aminophylline 250 mg IV over 20 minutes for its sustained bronchodilator and respiratory stimulant effect", correct: false, critical: false, explanation: "Aminophylline is not in the NY EMS protocol formulary and carries significant cardiac side effects.", protocol_ref: "als_dif_breathing_adult_asthma_copd_wheezing_for_pediatric_see_dif_breathing_pediatr" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: Opiate OD with polysubstance
  // ============================================================
  {
    id: "med-tox-05",
    title: "24M — Found Unresponsive, Drug Paraphernalia",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "24-year-old male, unconscious, not breathing well, drug paraphernalia on scene per caller",
    patient: { age: 24, sex: "M", cc: "Unresponsive with respiratory depression" },
    scene: "You enter a bathroom to find a 24-year-old male slumped against the wall. Multiple drug paraphernalia items visible: syringe, burnt spoon, empty pill bottles (alprazolam, gabapentin), and a small baggie of white powder. Tourniquet tied around left arm with fresh needle mark in antecubital fossa.",
    vitals: { hr: 52, bp: "88/54", rr: 4, spo2: 74, gcs: 4, temp: "96.8°F", bg: "94 mg/dL" },
    history: { pmh: "Opioid use disorder, anxiety, prior overdoses x3", meds: "Alprazolam 2mg TID (prescribed), gabapentin", allergies: "NKDA" },
    presentation: "Unresponsive male with pinpoint pupils bilaterally. Respiratory rate of 4 with shallow, agonal-quality breaths. Cyanotic lips and nail beds. Fresh injection site left antecubital. Cool, clammy skin. No evidence of trauma.",
    primary_protocol: "als_opioid_narcotic_overdose",
    related_protocols: ["als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe", "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p", "als_altered_mental_status"],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "What is your immediate first action for this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        options: [
          { text: "Open the airway and begin positive pressure ventilation with a bag-valve-mask immediately", correct: true, critical: false, explanation: "With a RR of 4 and SpO2 of 74%, this patient is in respiratory arrest. ABCs — ventilation is the immediate priority. Do not delay ventilations.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Administer intranasal naloxone immediately to reverse the opioid effects causing respiratory depression", correct: false, critical: false, explanation: "Naloxone is important but ventilation takes priority. Per NY protocol: ABCs, airway management, and appropriate oxygen therapy come BEFORE naloxone.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Check blood glucose first since hypoglycemia could be contributing to the altered mental status", correct: false, critical: true, explanation: "Blood glucose is important but this patient has agonal respirations. Without immediate ventilation, he will arrest. ABCs always first.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Establish vascular access for IV naloxone administration as it is faster than the intranasal route", correct: false, critical: false, explanation: "IV access should not delay ventilation or intranasal naloxone. The patient needs oxygenation NOW.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "treatment",
        prompt: "You begin BVM ventilation. What is the correct naloxone dosing approach for a CFR?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Your partner begins BVM ventilation and SpO2 slowly improves to 82%. The patient remains unresponsive.",
        clinical_pearl: "NY protocol: CFR may administer one naloxone prefilled unit dose intranasal for suspected opioid overdose with respiratory insufficiency or arrest. May repeat once in 5 minutes if no improvement.",
        options: [
          { text: "One prefilled naloxone unit dose intranasal, may repeat once in 5 minutes if no respiratory improvement", correct: true, critical: false, explanation: "Per NY CFR protocol: one naloxone prefilled unit dose intranasal, may repeat once in 5 minutes if no improvement in respiratory effort.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Two prefilled naloxone unit doses intranasal simultaneously to ensure adequate reversal of opioids", correct: false, critical: false, explanation: "Protocol directs one dose initially with a repeat in 5 minutes. Giving both simultaneously is not per protocol.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Naloxone 2 mg intramuscular injection as it provides more reliable absorption than intranasal route", correct: false, critical: false, explanation: "IM naloxone is AEMT and above per NY protocol. CFR level uses intranasal only.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Withhold naloxone and continue ventilatory support only since BVM ventilation is adequate treatment", correct: false, critical: false, explanation: "Naloxone is indicated per protocol when there is suspected opioid overdose with respiratory insufficiency. It should be administered alongside ventilatory support.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After two doses of intranasal naloxone, the patient's respiratory rate improves to only 10 with persistent altered mental status. Why might naloxone be less effective, and what is the concern?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient's respiratory rate improves to 10 but he remains obtunded. Pupils are now mid-range. He does not fully wake up. SpO2 is 90% on BVM.",
        vitals_update: { hr: 68, bp: "96/62", rr: 10, spo2: 90, gcs: 7 },
        clinical_pearl: "With polysubstance ingestion (opioids + benzodiazepines), naloxone only reverses the opioid component. Benzodiazepines contribute to CNS and respiratory depression independently. Continue ventilatory support.",
        options: [
          { text: "Concurrent benzodiazepine ingestion is likely causing persistent CNS depression that naloxone cannot reverse", correct: true, critical: false, explanation: "Empty alprazolam bottles suggest co-ingestion. Naloxone only reverses opioids. Benzodiazepine CNS depression requires continued ventilatory support.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "The naloxone dose was insufficient and requires additional higher doses intravenously to achieve full reversal", correct: false, critical: false, explanation: "While more naloxone may help the opioid component, the persistent alteration despite improved respirations suggests another CNS depressant is involved.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "The white powder likely contained a synthetic opioid requiring a much longer naloxone infusion to overcome", correct: false, critical: false, explanation: "While fentanyl analogs may require more naloxone, the partial response with persistent depression suggests polysubstance involvement beyond opioids alone.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Brain injury from prolonged hypoxia is the most likely cause of his persistent altered mental status", correct: false, critical: false, explanation: "Possible but premature to conclude. Polysubstance ingestion is more likely given the scene evidence of benzodiazepines.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "treatment",
        prompt: "As an AEMT, how should you titrate additional naloxone per NY protocol?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        clinical_pearl: "NY AEMT protocol: Titrate naloxone to max 2 mg per dose IV, IM, or 4 mg intranasal, ONLY if respiratory arrest or insufficiency. If IV, consider administering in ≤0.5 mg increments. Goal is adequate respirations, NOT full consciousness.",
        options: [
          { text: "Titrate naloxone up to 2 mg per dose IV in 0.5 mg or smaller increments targeting improved respiratory effort", correct: true, critical: false, explanation: "Per NY AEMT protocol: titrate naloxone to max 2 mg/dose IV, IM, or 4 mg IN. If IV, consider ≤0.5 mg increments. Only if respiratory insufficiency persists.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer naloxone 4 mg IV push as a single bolus to ensure maximal opioid receptor displacement", correct: false, critical: false, explanation: "Max per dose is 2 mg IV per NY protocol. Also, large bolus doses risk acute withdrawal, vomiting, aspiration, and combativeness.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer flumazenil 0.2 mg IV to reverse the benzodiazepine component contributing to depression", correct: false, critical: true, explanation: "Flumazenil is NOT in the NY EMS protocol and can precipitate life-threatening seizures in chronic benzodiazepine users. This patient takes alprazolam daily.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Withhold further naloxone since it has already been given twice and focus solely on BVM ventilation", correct: false, critical: false, explanation: "AEMT may titrate additional naloxone per protocol if respiratory insufficiency persists. Both ventilation and naloxone should be utilized.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient begins to wake and becomes agitated, vomiting and trying to remove the oxygen mask. What is your priority?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After additional naloxone, the patient wakes suddenly, becomes combative, and begins vomiting forcefully. He tries to pull out his IV and leave the stretcher.",
        vitals_update: { hr: 112, bp: "148/92", rr: 22, spo2: 95, gcs: 14 },
        options: [
          { text: "Position the patient on his side, suction the airway aggressively, and maintain vascular access for monitoring", correct: true, critical: false, explanation: "Aspiration prevention is the priority. Position on side if vomiting per seizure/overdose protocol principles. Maintain IV — the naloxone may wear off before the opioid.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer ondansetron 4 mg IV to control the vomiting and then physically restrain the patient securely", correct: false, critical: false, explanation: "Anti-emetics are helpful but airway protection comes first. Restraint may be needed but positioning and suctioning are the immediate priorities.", protocol_ref: "als_nausea_andor_vomiting_adult_for_pediatric_see_nausea_andor_vomiting_2_yo_pediatr" },
          { text: "Allow the patient to refuse further care since he is now conscious and has the right to decline treatment", correct: false, critical: true, explanation: "This patient has polysubstance ingestion and naloxone may wear off. He may become unresponsive again. Post-naloxone patients require continued monitoring and transport.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer additional naloxone to ensure complete opioid reversal and reduce the risk of re-narcotization", correct: false, critical: false, explanation: "The patient is already agitated from naloxone-induced withdrawal. More naloxone will worsen agitation and vomiting without improving the benzodiazepine effect.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 6: Motorcycle MVC — open femur fracture, hemorrhagic shock
  // ============================================================
  {
    id: "trm-mvc-06",
    title: "32M — Motorcycle Down, Leg Deformity",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "Motorcycle vs guardrail, rider down, bystanders report heavy bleeding from leg, highway shoulder",
    patient: { age: 32, sex: "M", cc: "Open right femur fracture with hemorrhage" },
    scene: "Highway shoulder. A 32-year-old male is supine next to a heavily damaged motorcycle. His right thigh is severely deformed with an open wound — bone visible through torn riding pants. Significant blood pooling on the ground. He is alert, screaming in pain. Helmet still in place, appears intact.",
    vitals: { hr: 128, bp: "92/58", rr: 28, spo2: 96, gcs: 14, temp: "97.2°F", bg: "112 mg/dL" },
    history: { pmh: "None", meds: "None", allergies: "Penicillin" },
    presentation: "Alert male in obvious distress. Right thigh with mid-shaft open fracture — exposed bone, active bright red bleeding from wound. Right lower extremity shortened and externally rotated. Weak distal pedal pulse on right. Left lower extremity intact. No chest wall tenderness, abdomen soft. Helmet intact.",
    primary_protocol: "als_musculoskeletal_trauma",
    related_protocols: ["als_bleeding_hemorrhage_control", "als_trauma_general", "als_pain_management_adult_for_pediatric_see_pain_management_pediatric"],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "What is the MOST critical immediate intervention for this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Hemorrhage control is the #1 priority in trauma with active bleeding. A femur fracture can result in 1-2 liters of blood loss. Open fractures with active hemorrhage require immediate tourniquet application when direct pressure fails.",
        options: [
          { text: "Control the hemorrhage from the open femur fracture using direct pressure and tourniquet application", correct: true, critical: false, explanation: "Per NY hemorrhage control protocol: immediate intervention for severe bleeding includes direct pressure and tourniquet if bleeding persists. Life-threatening hemorrhage must be controlled first.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Perform a full spinal motion restriction with cervical collar and backboard before any other care", correct: false, critical: false, explanation: "While spinal precautions may be needed, hemorrhage control takes priority. You cannot immobilize a dead patient. Control life threats first.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Realign the fractured extremity and apply a traction splint to control pain and internal bleeding", correct: false, critical: false, explanation: "Splinting is important but hemorrhage control from the open wound is the immediate life threat. Tourniquet first, then splint.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Establish two large-bore IVs and begin aggressive fluid resuscitation for hemorrhagic shock treatment", correct: false, critical: false, explanation: "IV fluid resuscitation is important but does not stop the bleeding. Control the source of hemorrhage first.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Hemorrhage is controlled with a tourniquet. How should you manage the open fracture and extremity?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "A tourniquet has been applied 2-3 inches proximal to the wound. Bleeding is controlled. The limb remains severely angulated with exposed bone.",
        clinical_pearl: "Per NY protocol: if distal extremity is cyanotic, pulseless, or long bone is severely deformed, align with gentle manual traction before splinting. A traction splint is indicated for mid-thigh injuries without pelvic, knee, or lower leg injury on the same side.",
        options: [
          { text: "Apply gentle manual traction to realign the extremity, then apply a traction splint for the mid-thigh fracture", correct: true, critical: false, explanation: "Per NY musculoskeletal protocol: if severely deformed, align with gentle traction before splinting. Traction splint is indicated for mid-thigh injury without pelvic/knee/lower leg injury.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Splint the extremity in the position found without any attempt at realignment to avoid further injury", correct: false, critical: false, explanation: "The protocol specifically says to align if the long bone is severely deformed or the distal extremity is cyanotic/pulseless. This fracture is severely angulated.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Push the exposed bone back into the wound, cover with sterile dressings, then apply a rigid splint only", correct: false, critical: true, explanation: "Never push exposed bone back into a wound in the field. This introduces contamination and can cause further vascular or nerve damage.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Cover the open wound with moist sterile dressings only and defer all splinting until hospital arrival", correct: false, critical: false, explanation: "Splinting reduces pain, bleeding, and further tissue damage. It should not be deferred. Traction splinting is specifically indicated here.", protocol_ref: "als_musculoskeletal_trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's blood pressure drops to 78/48 during splinting. As an AEMT or higher, what is the fluid resuscitation target per NY protocol?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        vitals_update: { hr: 140, bp: "78/48", rr: 32, spo2: 94, gcs: 13 },
        options: [
          { text: "Normal saline 500 mL bolus, repeat up to 2 liters total if lungs remain clear, targeting SBP ≥100 and MAP ≥65", correct: true, critical: false, explanation: "Per NY hemorrhagic shock protocol: NS 500 mL bolus if SBP <100 or MAP <65, may repeat to 2L if lungs clear. Goal SBP ≥100, MAP ≥65.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Normal saline wide open infusion until blood pressure normalizes to the patient's expected baseline level", correct: false, critical: false, explanation: "Uncontrolled crystalloid resuscitation dilutes clotting factors and can worsen hemorrhage. NY protocol has specific targets and limits.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Lactated Ringer's 1 liter bolus as the preferred trauma resuscitation fluid over normal saline solution", correct: false, critical: false, explanation: "NY protocol specifically directs Normal Saline. LR is listed only as a REMAC alternative for NS 1000 mL.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Withhold IV fluids and rely on permissive hypotension until the patient reaches surgical intervention", correct: false, critical: false, explanation: "While permissive hypotension has merit, NY protocol directs fluid resuscitation targeting SBP ≥100 and MAP ≥65.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the transport priority and destination for this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After 1L NS, BP is 88/56. The patient is becoming confused, answering questions slowly.",
        vitals_update: { hr: 136, bp: "88/56", gcs: 13 },
        clinical_pearl: "Unstable trauma patients should have transport initiated within 10 minutes of disentanglement/extrication. Go to the closest appropriate trauma center, not necessarily the closest hospital.",
        options: [
          { text: "Immediate transport to the closest designated trauma center with early notification of incoming shock patient", correct: true, critical: false, explanation: "Per NY trauma protocol: unstable patients should have transport initiated within 10 minutes. Go to closest appropriate trauma center. Notify early.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the closest community hospital for stabilization followed by interfacility transfer to trauma center", correct: false, critical: false, explanation: "Stopping at a non-trauma hospital delays definitive surgical care. Direct transport to a trauma center is standard of care for this patient.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene to complete all interventions including a second liter of fluids before initiating transport", correct: false, critical: true, explanation: "This patient needs surgery, not more field time. Continuing interventions en route. Scene time should be minimal for unstable trauma.", protocol_ref: "als_trauma_general" },
          { text: "Request air medical transport to a Level I trauma center regardless of ground transport time to any facility", correct: false, critical: false, explanation: "Air transport should be considered based on transport time, not automatically requested. If a trauma center is within reasonable ground transport time, air may add unnecessary delay.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      },
      {
        phase: "transport",
        prompt: "As a paramedic, what additional hemorrhagic shock intervention may be available per NY protocol?",
        multi_select: true,
        level_filter: "P",
        clinical_pearl: "NY paramedic hemorrhagic shock protocol includes: Type O blood transfusion (if equipped per REMAC) and Tranexamic Acid (TXA) 2g IV/IO over 10 minutes for traumatic hemorrhage. Neither should delay transport.",
        options: [
          { text: "Tranexamic acid 2 grams IV/IO over 10 minutes for traumatic hemorrhage if equipped and regionally approved", correct: true, critical: false, explanation: "Per NY hemorrhagic shock protocol: TXA 2g IV/IO over 10 minutes for traumatic hemorrhage. Should not delay transport.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Transfusion of 1 unit type O blood if the service carries prehospital blood products per REMAC approval", correct: true, critical: false, explanation: "Per NY protocol: transfuse 1 unit Type O or whole blood if signs of shock and SBP <100. Subject to REMAC blood distribution plan.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Fentanyl 1-1.5 mcg/kg IV for pain management provided the systolic blood pressure remains above 100 mmHg", correct: false, critical: false, explanation: "Pain management is important but SBP must be >100 mmHg per standing order contraindications. This patient's SBP is 88.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Norepinephrine infusion at 2 mcg/min titrated to maintain adequate blood pressure targets during transport", correct: false, critical: false, explanation: "Norepinephrine for hemorrhagic shock is a medical control consideration only, not a paramedic standing order per NY protocol.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 7: Elderly fall on blood thinners — occult head bleed
  // ============================================================
  {
    id: "trm-fall-07",
    title: "78M — Fall, On Blood Thinners",
    category: "Trauma",
    difficulty: "Medium",
    dispatch: "78-year-old male, fall, hit his head, wife called, patient is refusing transport",
    patient: { age: 78, sex: "M", cc: "Ground-level fall with head strike" },
    scene: "You arrive at a well-kept home. The patient is seated in a kitchen chair, holding an ice pack to the left side of his head. His wife states he tripped over a rug and hit his head on the tile floor about 45 minutes ago. He did not lose consciousness per his wife. He appears alert and conversational.",
    vitals: { hr: 72, bp: "158/88", rr: 16, spo2: 97, gcs: 15, temp: "98.2°F", bg: "106 mg/dL" },
    history: { pmh: "Atrial fibrillation, HTN, history of TIA", meds: "Apixaban (Eliquis) 5mg BID, metoprolol, lisinopril", allergies: "Codeine" },
    presentation: "Alert and oriented x4 elderly male with a 3cm laceration to the left temporal region with moderate swelling. Active slow bleeding from the laceration. Pupils equal and reactive. No focal neurological deficits. Gait steady. Patient states he feels fine and does not want to go to the hospital.",
    primary_protocol: "als_trauma_general",
    related_protocols: ["als_suspected_spinal_injuries", "als_bleeding_hemorrhage_control", "als_stroke"],
    level_min: "EMT",
    questions: [
      {
        phase: "assessment",
        prompt: "Why does this patient's medication history make this seemingly minor fall a high-risk emergency?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Patients on anticoagulants (warfarin, apixaban, rivaroxaban) can develop delayed intracranial hemorrhage from minor head trauma. Symptoms may not appear for hours. These patients require ED evaluation regardless of initial presentation.",
        options: [
          { text: "Apixaban prevents normal blood clotting so even minor head trauma can cause expanding intracranial hemorrhage over hours", correct: true, critical: false, explanation: "Anticoagulants like apixaban inhibit clotting factors, allowing intracranial bleeds to expand without the body's ability to control them. Delayed deterioration is common.", protocol_ref: "als_trauma_general" },
          { text: "Metoprolol will mask the tachycardic response to hemorrhage making it difficult to detect early shock", correct: false, critical: false, explanation: "While true that beta-blockers mask tachycardia, the more critical concern with head trauma is the anticoagulant allowing intracranial hemorrhage expansion.", protocol_ref: "als_trauma_general" },
          { text: "His history of TIA indicates pre-existing cerebrovascular disease that increases his risk of a stroke event", correct: false, critical: false, explanation: "TIA history is relevant but the immediate concern is anticoagulant-related intracranial hemorrhage from the head trauma, not a new ischemic event.", protocol_ref: "als_stroke" },
          { text: "Elderly patients over 65 have thinner skull bones that are more susceptible to fractures from ground-level falls", correct: false, critical: false, explanation: "While true that elderly bones are more fragile, the specific high-risk factor here is the anticoagulant allowing uncontrolled intracranial bleeding.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient insists he is fine and refuses transport. You begin a detailed neurological exam. Twenty minutes later, his wife notes he is now repeating the same question. New vitals show BP 178/96, HR 62. What is happening?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "During your assessment, the patient's wife pulls you aside. 'He keeps asking me why you're here. I've told him three times.' You notice the patient now has mild confusion, scoring GCS 14.",
        vitals_update: { hr: 62, bp: "178/96", gcs: 14 },
        clinical_pearl: "The Cushing triad (hypertension, bradycardia, irregular respirations) indicates rising intracranial pressure. In anticoagulated patients, even a 'lucid interval' followed by subtle confusion suggests expanding intracranial hemorrhage.",
        options: [
          { text: "Expanding intracranial hemorrhage is causing increasing intracranial pressure and progressive mental status changes", correct: true, critical: false, explanation: "New confusion with rising BP and slowing HR (Cushing response) in an anticoagulated patient after head trauma indicates expanding intracranial hemorrhage.", protocol_ref: "als_trauma_general" },
          { text: "The patient is likely experiencing a new transient ischemic attack unrelated to the fall from his history of TIAs", correct: false, critical: false, explanation: "While possible, new neurologic changes after head trauma on anticoagulants should be presumed to be intracranial hemorrhage until proven otherwise.", protocol_ref: "als_stroke" },
          { text: "Normal age-related memory changes are being exacerbated by the stress of the emergency medical evaluation", correct: false, critical: true, explanation: "New repetitive questioning and confusion after head trauma in an anticoagulated patient is NOT normal stress. This is a life-threatening emergency requiring immediate transport.", protocol_ref: "als_altered_mental_status" },
          { text: "The patient likely has an undiagnosed urinary tract infection causing the acute confusion and altered behavior", correct: false, critical: false, explanation: "UTI can cause confusion in elderly patients, but with recent head trauma and anticoagulation, intracranial hemorrhage must be the primary concern.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient now agrees to transport after his wife's urging. His GCS drops to 12. How should you manage transport?",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient becomes increasingly drowsy. He follows commands but is confused and disoriented. Left pupil is now slightly larger than the right.",
        vitals_update: { hr: 58, bp: "192/102", rr: 14, gcs: 12 },
        options: [
          { text: "Initiate rapid transport to the closest appropriate hospital with early notification of deteriorating head injury", correct: true, critical: false, explanation: "This patient has signs of herniation (unequal pupils, declining GCS, Cushing response). Rapid transport with early notification is critical.", protocol_ref: "als_trauma_general" },
          { text: "Elevate the head of the stretcher to 30 degrees to help reduce intracranial pressure during transport", correct: true, critical: false, explanation: "Per NY spinal injury protocol considerations: consider elevating head of stretcher no more than 30 degrees if concern for head injury.", protocol_ref: "als_suspected_spinal_injuries" },
          { text: "Administer supplemental oxygen even without hypoxia since oxygen is encouraged with suspected traumatic brain injury", correct: true, critical: false, explanation: "Per NY hemorrhagic shock protocol: oxygen administration is encouraged even without hypoxia if TBI is suspected.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Administer nitroglycerin sublingually to control the dangerously elevated blood pressure during transport", correct: false, critical: true, explanation: "The hypertension is a Cushing response to rising ICP, NOT primary hypertension. Lowering BP will reduce cerebral perfusion and worsen the herniation.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient becomes unresponsive. GCS 6. Left pupil fixed and dilated. What does this indicate?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        vitals_update: { hr: 52, bp: "204/108", rr: 10, gcs: 6 },
        options: [
          { text: "Uncal herniation from expanding intracranial hemorrhage with compression of the third cranial nerve", correct: true, critical: false, explanation: "Unilateral fixed dilated pupil with declining GCS indicates transtentorial (uncal) herniation. CN III compression on the ipsilateral side. This is a neurosurgical emergency.", protocol_ref: "als_trauma_general" },
          { text: "A large territory ischemic stroke affecting the middle cerebral artery with impending cerebral edema formation", correct: false, critical: false, explanation: "While stroke can cause pupil changes, in the setting of head trauma with anticoagulation, hemorrhagic etiology is far more likely.", protocol_ref: "als_stroke" },
          { text: "Direct traumatic injury to the left eye from the original fall impact causing an isolated pupillary dysfunction", correct: false, critical: false, explanation: "A traumatic pupil would not explain the declining GCS, Cushing triad, and progressive deterioration. This is herniation.", protocol_ref: "als_trauma_general" },
          { text: "Post-concussive syndrome with autonomic dysfunction causing transient pupillary asymmetry and somnolence", correct: false, critical: true, explanation: "This is NOT post-concussive syndrome. GCS 6 with fixed dilated pupil is brain herniation — a life-threatening emergency requiring immediate intervention.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 8: Pediatric bike vs car — handlebar abdominal injury
  // ============================================================
  {
    id: "trm-ped-08",
    title: "8M — Bicycle Hit by Car, Stomach Pain",
    category: "Trauma",
    difficulty: "Medium",
    dispatch: "8-year-old male, bicycle vs car, child is conscious, complaining of stomach pain, police on scene",
    patient: { age: 8, sex: "M", cc: "Abdominal pain after bicycle collision with car" },
    scene: "Residential intersection. An 8-year-old male is sitting on the curb with a bystander. His bicycle is nearby with a bent handlebar. The child was struck by a turning car at low speed, went over the handlebars, and the handlebar struck his abdomen. He is crying and holding his left upper abdomen. No helmet was worn but no head strike reported.",
    vitals: { hr: 118, bp: "96/62", rr: 24, spo2: 98, gcs: 15, temp: "98.4°F", bg: "102 mg/dL" },
    history: { pmh: "None, healthy child", meds: "None", allergies: "NKDA" },
    presentation: "Crying but alert child holding his left upper quadrant. Handlebar-shaped bruise visible across the left upper abdomen. Abdomen is tender to palpation in LUQ with voluntary guarding. No distension. Abrasions to both knees and left palm. No chest wall tenderness. Pelvis stable.",
    primary_protocol: "als_trauma_general",
    related_protocols: ["als_shock_pediatric_sepsis_shock_hypoperfusion", "als_pain_management_adult_for_pediatric_see_pain_management_pediatric"],
    level_min: "EMT",
    questions: [
      {
        phase: "assessment",
        prompt: "The handlebar bruise pattern over the left upper quadrant is highly suggestive of injury to which organ?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Handlebar injuries are a classic mechanism for solid organ injury in children. LUQ handlebar impact = splenic injury until proven otherwise. The spleen is the most commonly injured abdominal organ in pediatric blunt trauma.",
        options: [
          { text: "Splenic injury, as the spleen is the most commonly injured organ from LUQ blunt force in pediatric trauma", correct: true, critical: false, explanation: "LUQ handlebar impact is a classic mechanism for splenic injury. Children's relatively larger spleens and thinner abdominal walls make them more vulnerable.", protocol_ref: "als_trauma_general" },
          { text: "Left kidney contusion based on the flank location and mechanism of direct blunt force compression injury", correct: false, critical: false, explanation: "Kidney injury is possible but the handlebar bruise over the LUQ is more anterior than the typical kidney injury location. Splenic injury is more likely.", protocol_ref: "als_trauma_general" },
          { text: "Pancreatic laceration since the pancreas sits in the retroperitoneal space directly behind the handlebar impact", correct: false, critical: false, explanation: "Handlebar injuries can cause pancreatic injury but the pancreas is more central/epigastric. LUQ impact most commonly injures the spleen.", protocol_ref: "als_trauma_general" },
          { text: "Stomach rupture from compression of a full stomach between the handlebar and the posterior spine", correct: false, critical: false, explanation: "Gastric rupture from blunt trauma is rare. Splenic injury from LUQ handlebar impact is far more common and more likely here.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Fifteen minutes into your assessment, the child becomes quieter and his abdomen appears slightly more distended. New vitals show HR 138, BP 82/50. What does this suggest?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child stops crying and becomes listless. His abdomen is now visibly more distended and rigid on palpation. Skin is cool and pale.",
        vitals_update: { hr: 138, bp: "82/50", rr: 28, spo2: 96, gcs: 14 },
        clinical_pearl: "In pediatric trauma, tachycardia is the EARLIEST sign of shock. Hypotension is a LATE finding — by the time a child becomes hypotensive, they have already lost 25-30% of blood volume. A quiet child who was previously crying is a red flag.",
        options: [
          { text: "Progressive intra-abdominal hemorrhage from solid organ injury with decompensating hemorrhagic shock", correct: true, critical: false, explanation: "Increasing tachycardia, falling BP, distending abdomen, and behavioral change (becoming quiet) indicate progressive internal hemorrhage and shock.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "The child is simply calming down and becoming tired which is a normal response after an acute trauma event", correct: false, critical: true, explanation: "A previously crying child who becomes quiet with worsening vitals is NOT calming down — this is decompensated shock. Missing this kills children.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Developing peritonitis from hollow viscus perforation causing the abdominal rigidity and hemodynamic changes", correct: false, critical: false, explanation: "Hollow viscus injury is possible but peritonitis takes hours to develop. The rapid deterioration suggests hemorrhagic shock from solid organ injury.", protocol_ref: "als_trauma_general" },
          { text: "Pain and anxiety are causing a vasovagal response with resulting hypotension and altered mental status changes", correct: false, critical: false, explanation: "Vasovagal responses cause bradycardia, not tachycardia. This child's HR is 138 with a falling BP — this is hemorrhagic shock.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What is the appropriate fluid resuscitation for this approximately 25 kg child showing signs of shock?",
        multi_select: false,
        level_filter: "P",
        clinical_pearl: "NY pediatric sepsis/shock protocol: NS 20 mL/kg bolus IV. For patients <20 kg use 100 mL bags. This child is ~25 kg so a 1000 mL bag can be used with careful measurement. 20 x 25 = 500 mL initial bolus.",
        options: [
          { text: "Normal saline 20 mL/kg IV bolus which is 500 mL for this child, administered rapidly with reassessment", correct: true, critical: false, explanation: "Per NY pediatric shock protocol: NS 20 mL/kg bolus. At 25 kg: 20 x 25 = 500 mL. Reassess after bolus.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 10 mL/kg IV bolus which is 250 mL for this child, given slowly over 20 minutes for safety", correct: false, critical: false, explanation: "10 mL/kg is too conservative for hemorrhagic shock. NY protocol calls for 20 mL/kg bolus. This child needs aggressive resuscitation.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 500 mL wide open from a 1000 mL bag as the standard adult fluid bolus is appropriate here", correct: false, critical: false, explanation: "While 500 mL happens to be correct, the reasoning should be weight-based (20 mL/kg), not an adult standard dose.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" },
          { text: "Normal saline 1000 mL IV bolus administered as rapidly as possible given the severity of hemorrhagic shock", correct: false, critical: false, explanation: "1000 mL is 40 mL/kg — double the protocol dose. Pediatric fluid resuscitation must be weight-based to avoid over-resuscitation.", protocol_ref: "als_shock_pediatric_sepsis_shock_hypoperfusion" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the appropriate transport decision for this child?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After 500 mL NS bolus, HR is 132, BP 86/54. The child remains lethargic. Abdomen continues to distend.",
        options: [
          { text: "Immediate transport to the closest designated trauma center with early notification of pediatric shock patient", correct: true, critical: false, explanation: "Per NY protocol, trauma patients meeting criteria go to the closest appropriate trauma center. Unstable patients should have transport initiated within 10 minutes. Early hospital notification is critical.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the closest pediatric hospital even if it is not a designated trauma center for age-appropriate care", correct: false, critical: false, explanation: "The closest appropriate TRAUMA CENTER is the correct destination. Surgical intervention for splenic hemorrhage takes priority over pediatric specialty care.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene to establish a second IV and administer a second fluid bolus before initiating any transport", correct: false, critical: true, explanation: "This child needs surgery, not more prehospital time. Do not delay transport for additional field interventions. Continue care en route.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the closest emergency department for CT imaging to confirm the diagnosis before any intervention", correct: false, critical: false, explanation: "The closest ED may not have surgical capability. The trauma center has both imaging and surgical teams ready. Direct transport saves time.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 9: Neck stabbing — zone II with expanding hematoma
  // ============================================================
  {
    id: "trm-pen-09",
    title: "26M — Stabbed in Neck, Swelling",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "26-year-old male, stabbing, neck wound, heavy bleeding, police securing scene",
    patient: { age: 26, sex: "M", cc: "Penetrating neck wound with expanding hematoma" },
    scene: "Bodega parking lot, PD on scene. A 26-year-old male is seated against a wall with a bloodsoaked towel held to the right side of his neck. The wound is in the mid-neck between the angle of the mandible and the clavicle. An expanding, pulsatile hematoma is visible. Blood is soaking through the towel. The patient is alert but his voice is hoarse.",
    vitals: { hr: 118, bp: "108/72", rr: 22, spo2: 94, gcs: 14, temp: "98.2°F", bg: "108 mg/dL" },
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    presentation: "Alert male with a 4cm stab wound to the right anterolateral neck at the level of the thyroid cartilage. Pulsatile, expanding hematoma surrounding the wound. Active bleeding partially controlled by direct pressure. Voice is hoarse. Trachea midline. Mild subcutaneous emphysema palpated around the wound. No stridor currently.",
    primary_protocol: "als_bleeding_hemorrhage_control",
    related_protocols: ["als_trauma_general", "als_chest_trauma", "als_oxygen_administration_and_airway_management"],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "What makes this neck wound particularly dangerous? Select all that apply.",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Zone II neck injuries (cricoid to angle of mandible) can involve the carotid artery, jugular vein, larynx, trachea, and esophagus. An expanding pulsatile hematoma suggests vascular injury. Hoarseness and subcutaneous emphysema suggest airway/laryngeal involvement.",
        options: [
          { text: "The expanding pulsatile hematoma suggests major vascular injury to the carotid artery or jugular vein", correct: true, critical: false, explanation: "Pulsatile hematoma in the mid-neck indicates arterial injury, most likely the carotid. This can rapidly expand and compromise the airway.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Hoarseness indicates potential injury to the larynx or recurrent laryngeal nerve threatening the airway", correct: true, critical: false, explanation: "Hoarseness after neck trauma suggests laryngeal injury or nerve damage. The airway can become compromised as swelling progresses.", protocol_ref: "als_trauma_general" },
          { text: "Subcutaneous emphysema suggests air is escaping from an injured airway structure into surrounding tissue", correct: true, critical: false, explanation: "Subcutaneous emphysema around a neck wound indicates violation of the airway — trachea or larynx. This patient's airway is at risk.", protocol_ref: "als_chest_trauma" },
          { text: "The wound location is too posterior to involve any major structures and only superficial muscles are affected", correct: false, critical: true, explanation: "An anterolateral wound at the thyroid cartilage level is in the most vascular and structurally critical zone of the neck. Multiple life-threatening structures are at risk.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "treatment",
        prompt: "How should you manage the hemorrhage from this neck wound?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The bleeding increases as the patient moves. The hematoma continues to expand visibly.",
        clinical_pearl: "Neck wounds require direct pressure — tourniquets cannot be applied to the neck. Consider wound packing with hemostatic gauze and direct pressure. A standard tourniquet is contraindicated in the neck as it would occlude the airway and contralateral vasculature.",
        options: [
          { text: "Maintain firm direct pressure over the wound, consider packing with hemostatic gauze, and prepare for rapid transport", correct: true, critical: false, explanation: "Per NY hemorrhage protocol: direct pressure with dressing, consider hemostatic gauze for wound packing. Neck wounds cannot be tourniqueted.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Apply a cervical collar snugly to provide circumferential compression and simultaneously protect the spine", correct: false, critical: false, explanation: "A cervical collar is not designed for hemorrhage control. It may worsen a neck hematoma by compressing venous return while not controlling arterial bleeding.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Apply a tourniquet high on the neck proximal to the wound to control the hemorrhage from the arterial source", correct: false, critical: true, explanation: "A tourniquet on the neck would compress the airway and occlude blood flow to the brain. This would kill the patient. Never tourniquet the neck.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Remove the towel to fully visualize the wound, then clamp any visible bleeding vessels with hemostats forceps", correct: false, critical: true, explanation: "Removing pressure could cause catastrophic hemorrhage. Clamping neck vessels blindly can damage the carotid, vagus nerve, or airway structures. Maintain direct pressure.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The hematoma continues expanding. The patient now develops stridor and increasing difficulty breathing. What is the critical concern?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "Five minutes later, the patient develops audible stridor. His voice is now barely a whisper. The hematoma has doubled in size. SpO2 dropping.",
        vitals_update: { hr: 132, bp: "96/64", rr: 30, spo2: 88, gcs: 13 },
        options: [
          { text: "The expanding hematoma is compressing the trachea causing airway obstruction that may require advanced airway intervention", correct: true, critical: false, explanation: "An expanding neck hematoma can externally compress the trachea, causing progressive airway obstruction. This is a surgical airway emergency if it progresses.", protocol_ref: "als_trauma_general" },
          { text: "The patient is developing a tension pneumothorax from the penetrating wound tracking into the thoracic cavity", correct: false, critical: false, explanation: "While possible, the stridor and expanding neck hematoma indicate the primary problem is direct airway compression, not pneumothorax.", protocol_ref: "als_chest_trauma" },
          { text: "The patient is hyperventilating from pain and anxiety which is causing the stridor and oxygen desaturation", correct: false, critical: true, explanation: "Stridor with an expanding neck hematoma is NOT anxiety. This is mechanical airway obstruction that will progress to complete obstruction without intervention.", protocol_ref: "als_trauma_general" },
          { text: "Blood aspiration from the neck wound is entering the trachea and filling the lungs causing the respiratory distress", correct: false, critical: false, explanation: "While blood aspiration is a risk, the stridor pattern and expanding hematoma indicate external compression of the airway as the primary mechanism.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most critical transport consideration for this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Patients with expanding neck hematomas and airway compromise need the closest appropriate hospital with surgical capability — ideally a trauma center. Per NY protocol: patients with unmanageable airways go to the closest hospital.",
        options: [
          { text: "Immediate transport to the closest trauma center with a pre-arrival alert for a surgical airway emergency", correct: true, critical: false, explanation: "Per NY trauma protocol, transport to the closest appropriate trauma center. This patient needs surgical exploration. Early notification is critical.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene and attempt endotracheal intubation before transport since the airway is deteriorating rapidly", correct: false, critical: false, explanation: "Intubation of a patient with a distorted neck anatomy from hematoma is extremely high-risk. Per NY protocol, do not delay transport. Consider the closest hospital if airway is unmanageable.", protocol_ref: "als_trauma_general" },
          { text: "Transport to the closest hospital regardless of trauma designation since the patient needs immediate surgical airway", correct: false, critical: false, explanation: "The closest hospital may not have surgical capability for neck exploration. A trauma center is preferred if transport time is reasonable.", protocol_ref: "als_trauma_general" },
          { text: "Request air medical transport for definitive airway management en route to a Level I trauma center facility", correct: false, critical: false, explanation: "Waiting for air transport adds time this patient doesn't have. Ground transport to the nearest trauma center is faster if within reasonable distance.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 10: Breech delivery in field
  // ============================================================
  {
    id: "ob-del-10",
    title: "32F — In Labor, Baby Coming, Something Wrong",
    category: "OB/Peds",
    difficulty: "Hard",
    dispatch: "32-year-old female, 38 weeks pregnant, in active labor, baby's feet are coming out, frantic husband on phone",
    patient: { age: 32, sex: "F", cc: "Active labor with breech presentation" },
    scene: "You arrive at a residence to find a 32-year-old female on the bedroom floor in active labor. Her husband states the baby's feet appeared about 3 minutes ago. On exam, both feet and legs of the infant are delivered to the level of the buttocks. The mother is screaming and bearing down with contractions.",
    vitals: { hr: 108, bp: "132/82", rr: 24, spo2: 97, gcs: 15, temp: "98.8°F", bg: "92 mg/dL" },
    history: { pmh: "G3P2, previous vaginal deliveries, no complications", meds: "Prenatal vitamins", allergies: "NKDA" },
    presentation: "Full-term pregnant female in active labor. Breech presentation with both lower extremities delivered to the buttocks. Amniotic fluid is clear. The baby's body is warm and pink with visible movement in the legs. The umbilical cord is not visible. Mother is contracting regularly every 2 minutes.",
    primary_protocol: "als_childbirth_obstetrics",
    related_protocols: ["als_childbirth_newborn_neonatal_care", "als_general_approach_to_the_patient"],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You confirm a breech delivery in progress. What is your immediate decision regarding transport vs. on-scene delivery?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "Delivery is imminent and cannot be stopped — this breech delivery WILL happen in the field. You must manage it. Per NY protocol, if delivery is imminent, prepare for on-scene delivery. Do not attempt to push the baby back in.",
        options: [
          { text: "Prepare for on-scene delivery as this breech is too far progressed to delay and transport would be dangerous", correct: true, critical: false, explanation: "With lower extremities already delivered, this delivery is imminent. Moving the patient could cause cord compression or entrap the head. Manage on scene.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Immediately load the patient and transport emergently because breech deliveries require hospital management", correct: false, critical: true, explanation: "Moving this patient with a partially delivered breech could trap the aftercoming head or compress the cord. The delivery must be managed where you are.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Attempt to push the baby's legs back into the birth canal to delay delivery until reaching the hospital", correct: false, critical: true, explanation: "NEVER push a presenting part back in. This can injure the baby, compress the cord, and cause uterine rupture.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Place the mother in Trendelenburg position with her hips elevated to slow the delivery progression temporarily", correct: false, critical: false, explanation: "Trendelenburg is used for prolapsed cord, not to slow a breech delivery. The delivery is already progressing and must be managed.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Per NY protocol, how do you manage the delivery of the baby's body in a breech presentation?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The baby's body continues to deliver. The buttocks and trunk are now visible. You need to assist the delivery.",
        clinical_pearl: "NY breech delivery protocol: Support buttocks/extremities until back appears. Grasp iliac wings with gentle downward traction. DO NOT pull on legs or back — this may cause spine dislocation or adrenal hemorrhage.",
        options: [
          { text: "Support the buttocks until the back appears, grasp the iliac wings with gentle downward traction without pulling on legs or back", correct: true, critical: false, explanation: "Per NY protocol: Support buttocks/extremities until back appears, grasp iliac wings, apply gentle downward traction. DO NOT pull on legs or back.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Grasp both legs firmly and apply steady downward traction to expedite delivery of the shoulders and head", correct: false, critical: true, explanation: "NY protocol explicitly states: DO NOT pull on the legs or back, as this may cause spine dislocation or adrenal hemorrhage.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Wrap the baby's body in a towel for better grip and rotate the body 180 degrees to deliver the shoulders", correct: false, critical: false, explanation: "While wrapping for grip is reasonable, forced rotation is not per NY protocol. The protocol describes swinging in the direction of least resistance for shoulder delivery.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Apply fundal pressure to the mother's abdomen while simultaneously providing gentle traction on the baby's body", correct: false, critical: false, explanation: "The protocol describes gentle downward compression of the uterus to assist head delivery, not body delivery. Body delivery uses gentle traction on iliac wings.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The body is delivered to the shoulders. Per NY protocol, how do you deliver the shoulders and then the head?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The baby's body is delivered to the level of the scapulae. Shoulders are not yet delivered. The baby appears dusky but has good muscle tone.",
        clinical_pearl: "NY protocol for breech shoulders: Gently swing the infant's body in the direction of least resistance. Both shoulders should deliver posteriorly. Splint the humerus bones with two fingers, apply gentle traction. For the head: swing legs upward to vertical position.",
        options: [
          { text: "Swing the body in the direction of least resistance for shoulders, then swing legs upward to vertical position for head delivery", correct: true, critical: false, explanation: "Per NY protocol: swing body in direction of least resistance for shoulders. Splint humerus with fingers and gentle traction. Swing legs upward to vertical for head delivery.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Apply suprapubic pressure to the mother while rotating the baby's body clockwise to deliver both shoulders simultaneously", correct: false, critical: false, explanation: "Suprapubic pressure is for shoulder dystocia in cephalic (head-first) presentations, not breech. The protocol directs a different technique.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Place your fingers in the baby's mouth to flex the head and apply traction while an assistant applies fundal pressure", correct: false, critical: false, explanation: "While Mauriceau-Smellie-Veit maneuver involves finger placement, the NY protocol more simply directs gentle downward uterine compression and swinging legs upward.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Wait for the next contraction and allow the body to deliver spontaneously without any intervention or manipulation", correct: false, critical: false, explanation: "The aftercoming head can become trapped without assistance. Active management per protocol is required to prevent head entrapment and asphyxiation.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The baby is delivered but is limp and not breathing. Heart rate by cord palpation is 80 bpm. What is your immediate management per NY neonatal protocol?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The baby is fully delivered — a male, approximately full-term. He is limp, blue, and not crying. You palpate the umbilical cord and count approximately 80 beats per minute.",
        clinical_pearl: "Per NY neonatal protocol: if not breathing and HR <100, gentle stimulation first. If respirations remain absent/depressed or HR <100, clear airway and ventilate at 40-60 breaths/min with BVM. Start with room air. Add O2 if no response after 30-60 seconds.",
        options: [
          { text: "Clear the airway with bulb syringe, stimulate, then begin BVM ventilation at 40-60 breaths per minute starting with room air", correct: true, critical: false, explanation: "Per NY neonatal protocol: if not breathing with HR <100, clear airway, stimulate, ventilate at 40-60 breaths/min. Start with room air, add O2 if no response in 30-60 seconds.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Immediately begin chest compressions at a 3:1 ratio with ventilations since the heart rate is below 100 bpm", correct: false, critical: false, explanation: "Compressions are for HR <60 bpm, not <100. This baby needs ventilation first. Most neonatal resuscitations respond to effective ventilation alone.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Administer blow-by oxygen at 15 LPM while vigorously drying and stimulating the baby to initiate spontaneous breathing", correct: false, critical: false, explanation: "Blow-by oxygen alone is insufficient for an apneic neonate. This baby needs positive pressure ventilation, not just stimulation and passive O2.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Intubate the newborn immediately with a 3.0 mm endotracheal tube to secure a definitive airway for resuscitation", correct: false, critical: false, explanation: "Per NY neonatal protocol, begin BVM ventilation first. Intubation is considered by paramedics only if unable to ventilate effectively with BVM.", protocol_ref: "als_childbirth_newborn_neonatal_care" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 11: Allergic reaction → anaphylaxis
  // ============================================================
  {
    id: "ob-anaph-11",
    title: "10F — Allergic Reaction, Trouble Breathing",
    category: "OB/Peds",
    difficulty: "Medium",
    dispatch: "10-year-old female, allergic reaction, difficulty breathing, at school cafeteria, school nurse on scene",
    patient: { age: 10, sex: "F", cc: "Allergic reaction with progressive respiratory distress" },
    scene: "School cafeteria. A 10-year-old female is seated on a chair, anxious, with diffuse hives on her face, neck, and arms. The school nurse states the child ate a cookie that may have contained tree nuts. The child has a known tree nut allergy. The school epinephrine auto-injector was not used because the nurse wasn't sure if it was needed since the child was 'just itchy' initially.",
    vitals: { hr: 128, bp: "100/62", rr: 26, spo2: 95, gcs: 15, temp: "98.4°F", bg: "110 mg/dL" },
    history: { pmh: "Tree nut allergy, mild intermittent asthma", meds: "Albuterol PRN, carries EpiPen Jr at home (not with her)", allergies: "Tree nuts — cashews, walnuts" },
    presentation: "Anxious 10-year-old with diffuse urticaria on face, neck, arms, and trunk. Visible periorbital edema and lip swelling. Audible wheezing on auscultation bilaterally. Mild inspiratory stridor developing. Speaking in full sentences but voice is becoming hoarse. No vomiting or diarrhea.",
    primary_protocol: "als_anaphylaxis_and_allergic_reaction_pediatric",
    related_protocols: ["als_dif_breathing_pediatric_asthma_wheezing", "als_shock_pediatric_sepsis_shock_hypoperfusion"],
    level_min: "CFR",
    questions: [
      {
        phase: "assessment",
        prompt: "Does this patient meet the criteria for epinephrine administration per NY protocol?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "NY anaphylaxis protocol: Epinephrine is indicated for severe respiratory distress, facial/oral edema, AND/OR hypoperfusion — OR — history of anaphylaxis with allergen exposure developing respiratory distress and/or hypoperfusion and/or rash.",
        options: [
          { text: "Yes — she has a known allergen exposure with respiratory distress, facial edema, and developing airway compromise", correct: true, critical: false, explanation: "Per NY protocol: history of anaphylaxis + allergen exposure + respiratory distress + rash = epinephrine is indicated. She has facial/oral edema and wheezing.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "No — her blood pressure is still within normal limits and true anaphylaxis requires hypotension to be present", correct: false, critical: true, explanation: "Anaphylaxis does NOT require hypotension. Respiratory distress with facial edema and known allergen exposure is sufficient. Waiting for hypotension risks death.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "No — epinephrine should be withheld until she develops signs of severe respiratory failure or cardiovascular collapse", correct: false, critical: true, explanation: "This is dangerously wrong. Anaphylaxis progresses rapidly. Early epinephrine is life-saving. Waiting for collapse means it may be too late.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Yes — but only after administering albuterol and diphenhydramine first to see if they resolve the allergic symptoms", correct: false, critical: false, explanation: "Epinephrine is the FIRST-LINE treatment for anaphylaxis, not antihistamines or bronchodilators. It should not be delayed.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What is the correct epinephrine dose for this approximately 35 kg child? (CFR and all levels)",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        clinical_pearl: "NY pediatric anaphylaxis protocol: Epinephrine 0.3 mg IM if ≥30 kg, Epinephrine 0.15 mg IM if <30 kg. May repeat once in 5 minutes if no improvement. CFR may use auto-injector, EMT and above may use syringe epi kit.",
        options: [
          { text: "Epinephrine 1 mg/mL at 0.3 mg IM since the child weighs 35 kg which is above the 30 kg adult dose threshold", correct: true, critical: false, explanation: "Per NY protocol: Epinephrine 0.3 mg IM for patients ≥30 kg. At 35 kg, this child gets the 0.3 mg (adult auto-injector) dose.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 1 mg/mL at 0.15 mg IM using the pediatric auto-injector since the patient is only 10 years old", correct: false, critical: false, explanation: "Dosing is weight-based, not age-based. At ≥30 kg, the 0.3 mg dose is correct per NY protocol.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 1:10,000 at 0.01 mg/kg IV for a total dose of 0.35 mg administered slowly over 2 minutes", correct: false, critical: false, explanation: "IV epinephrine at this dose is a cardiac arrest medication. The anaphylaxis protocol directs IM epinephrine at 1 mg/mL concentration.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 1 mg/mL at 0.5 mg IM as a higher initial dose given the severity of the allergic reaction", correct: false, critical: false, explanation: "0.5 mg is an off-protocol dose. NY pediatric anaphylaxis maxes at 0.3 mg IM. The adult protocol also uses 0.3 mg.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After epinephrine, the wheezing persists. What additional treatment is appropriate? Select all that apply.",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Epinephrine 0.3 mg IM administered. After 3 minutes, the facial swelling has stabilized and stridor has decreased, but wheezing continues. SpO2 is 93%.",
        vitals_update: { hr: 142, bp: "92/58", rr: 24, spo2: 93 },
        clinical_pearl: "NY pediatric anaphylaxis: if wheezing, Albuterol 2.5 mg nebulized (repeat to 3 doses), may combine with Ipratropium. If no improvement in 5 minutes, may repeat epinephrine once. CC level: Diphenhydramine 1 mg/kg IM (max 50 mg).",
        options: [
          { text: "Albuterol 2.5 mg via nebulizer, may repeat to three total doses, combined with ipratropium 0.5 mg unit dose", correct: true, critical: false, explanation: "Per NY protocol: if wheezing, Albuterol 2.5 mg nebulized, repeat to 3 doses. May combine with Ipratropium.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Repeat epinephrine 0.3 mg IM if no improvement within 5 minutes of the first dose as a single repeat dose", correct: true, critical: false, explanation: "Per NY protocol: if patient does not improve within 5 minutes, may repeat epinephrine once.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Normal saline 20 mL/kg IV bolus since the blood pressure is below normal for age and there are signs of poor perfusion", correct: false, critical: false, explanation: "IV fluid is indicated for hypotension per paramedic protocol, but the question asks about EMT/AEMT level. NS bolus is paramed