const SCENARIOS_P5 = [
  // ============================================================
  // SCENARIO 1: 65M — Found in Unheated Apartment (Severe Hypothermia)
  // ============================================================
  {
    id: "env-hypothermia-01",
    title: "65M — Found in Unheated Apartment",
    category: "Environmental",
    difficulty: "Hard",
    dispatch: "65-year-old male, welfare check, found unresponsive in apartment with no heat",
    patient: { age: 65, sex: "M", cc: "Unresponsive, cold environment" },
    scene: "Police requested EMS for a welfare check. You enter a frigid apartment — the heat has been off for several days. A 65-year-old male is found supine on his bed, minimally responsive. His skin is ice-cold to the touch and he is not shivering. Empty liquor bottles are noted on the nightstand.",
    vitals: { hr: 34, bp: "78/50", rr: 6, spo2: 80, gcs: 6, temp: "78°F (25.6°C)", bg: "64 mg/dL" },
    history: { pmh: "Alcohol use disorder, hypertension, peripheral neuropathy", meds: "Lisinopril, gabapentin", allergies: "NKDA" },
    presentation: "Patient is unresponsive to verbal stimuli, withdraws sluggishly to pain. Skin is pale, cold, and waxy. No visible shivering. Pupils are fixed and dilated. Muscles are rigid. Bradycardic with slow, shallow respirations.",
    primary_protocol: "als_environmental_hypothermia",
    related_protocols: [
      "bls_environmental_hypothermia",
      "als_altered_mental_status",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "Upon finding this patient cold and unresponsive with fixed, dilated pupils and muscular rigidity, what is your most appropriate initial determination?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Police let you into the apartment. It is extremely cold inside. The patient is on his bed, stiff and unresponsive with fixed, dilated pupils.",
        clinical_pearl: "Per NY protocol, rigor mortis, fixed pupils, and dependent lividity are NOT obvious signs of death in a hypothermic patient. Only trauma inconsistent with life or extensive chest wall rigidity preventing compressions qualifies.",
        options: [
          { text: "The patient cannot be declared dead — fixed pupils and rigidity are unreliable signs of death in hypothermia", correct: true, critical: false, explanation: "Per NY hypothermia protocol, rigor mortis, fixed pupils, and dependent lividity are not obvious signs of death in a hypothermic patient. Full resuscitation should be considered.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Fixed dilated pupils and muscular rigidity indicate biological death and you should contact medical control to confirm", correct: false, critical: true, explanation: "Hypothermia mimics death. NY protocol explicitly states these are NOT obvious signs of death in hypothermic patients. Premature declaration could be fatal.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Begin the Obvious Death protocol since the patient has rigor mortis and no detectable vital signs present", correct: false, critical: true, explanation: "Hypothermic patients may appear dead but be salvageable. The saying 'no one is dead until they are warm and dead' reflects this critical principle.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Contact law enforcement to investigate possible foul play before initiating any medical assessment or treatment", correct: false, critical: false, explanation: "While scene safety is important, there is no indication of foul play. Delaying assessment of a potentially viable hypothermic patient is inappropriate.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Before determining if CPR is needed, how long should you assess for a pulse and breathing in this severely hypothermic patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You have moved to the patient's side. His skin is ice-cold. You need to determine if he has any signs of life.",
        clinical_pearl: "Severe hypothermia causes profound bradycardia that may be difficult to detect. NY protocol requires a full 60-second pulse and breathing check — significantly longer than the standard 10-second check.",
        options: [
          { text: "Assess pulse and breathing for a full 60 seconds before determining the need to initiate CPR", correct: true, critical: false, explanation: "Per NY hypothermia protocol, providers should assess pulse and breathing for 60 seconds in patients with severe/profound hypothermia and no signs of life.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Assess pulse and breathing for 10 seconds using the standard cardiac arrest assessment protocol", correct: false, critical: false, explanation: "The standard 10-second check is insufficient for hypothermic patients. Severe bradycardia may result in extremely slow, weak pulses easily missed in 10 seconds.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Assess pulse and breathing for 30 seconds as a compromise between standard protocol and cold exposure", correct: false, critical: false, explanation: "NY protocol specifically requires 60 seconds, not 30. Hypothermic pulses can be extremely faint and infrequent.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Skip the manual pulse check entirely and immediately apply the cardiac monitor to confirm rhythm", correct: false, critical: false, explanation: "While monitoring is valuable at advanced levels, the protocol directs a 60-second manual assessment for pulse and breathing at all provider levels.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You detect a very slow, faint pulse at 34 bpm. The cardiac monitor shows a bradycardic rhythm with J-waves (Osborn waves). Which classification best describes this patient's hypothermia severity?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "After a 60-second check, you confirm a pulse is present. The monitor shows a slow rhythm with distinctive J-waves. Core temperature reads 78°F (25.6°C).",
        vitals_update: { hr: 34, bp: "78/50", rr: 6, spo2: 82 },
        clinical_pearl: "J-waves (Osborn waves) are pathognomonic ECG findings in hypothermia — positive deflections at the J-point seen most commonly below 32°C. Their presence confirms significant hypothermia and high risk for ventricular fibrillation.",
        options: [
          { text: "Severe/profound hypothermia — core temperature below 28°C with unconsciousness and high risk of VF or asystole", correct: true, critical: false, explanation: "Per NY protocol, severe/profound hypothermia is defined as core temp <28°C (<82.4°F) with unconsciousness, no shivering, and high risk of VF/asystole. This patient at 25.6°C meets criteria.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Moderate hypothermia — core temperature between 28°C and 32°C with decreased level of consciousness noted", correct: false, critical: false, explanation: "Moderate hypothermia is 28-32°C (82.4-89.6°F). This patient's core temp of 25.6°C (78°F) is well below this range, placing him in severe/profound.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Mild hypothermia — the patient still has a detectable pulse which indicates his thermoregulation is functional", correct: false, critical: false, explanation: "Mild hypothermia (32-35°C) presents with shivering and impaired movement. This patient is unconscious at 25.6°C — far beyond mild.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Cold stressed but not hypothermic — the patient has intact circulation as evidenced by a palpable pulse", correct: false, critical: false, explanation: "Cold stress (>35°C) involves shivering with intact movement. This patient is profoundly hypothermic at 25.6°C with a GCS of 6.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What are the appropriate EMT-level treatment priorities for this severely hypothermic patient? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient has a pulse but is severely hypothermic. You need to begin treatment while awaiting ALS backup.",
        clinical_pearl: "Gentle handling is critical in severe hypothermia. Rough movement can precipitate ventricular fibrillation in an irritable myocardium. The patient must be kept horizontal and movement minimized.",
        options: [
          { text: "Minimize all movement, maintain the patient horizontal, and handle extremely gently during all interventions", correct: true, critical: false, explanation: "Per NY protocol for moderate and severe hypothermia: minimize movement during extrication (NO standing or walking) and maintain horizontal position. Rough handling can trigger VF.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Begin active external rewarming by applying heat sources to the axilla, chest, and back with a skin barrier", correct: true, critical: false, explanation: "Per NY protocol for moderate/severe hypothermia, active external rewarming includes applying heat sources to axilla, chest, and back with a thin barrier to prevent thermal burns.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Sit the patient upright to facilitate breathing since his respiratory rate is dangerously slow at 6 breaths per minute", correct: false, critical: true, explanation: "Sitting a severely hypothermic patient upright can cause cardiovascular collapse. The protocol specifically states to maintain horizontal position.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Provide insulation with blankets and a vapor barrier and heat the ambulance interior during transport", correct: true, critical: false, explanation: "Per NY protocol: provide insulation (blankets), vapor barrier (plastic tarp or mylar sheets) if available, and heat inside the ambulance.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "treatment",
        prompt: "ALS arrives. At the CC/Paramedic level, what is the correct approach to defibrillation and medication administration in this severely hypothermic patient?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "ALS has arrived. The patient remains bradycardic at 34 bpm with J-waves. He has not gone into cardiac arrest but the rhythm is tenuous. The crew discusses contingency plans.",
        clinical_pearl: "In severe hypothermia, the myocardium is resistant to defibrillation and medications. NY protocol limits both to one attempt/dose to avoid compounding toxicity as drugs won't metabolize normally in a cold body.",
        options: [
          { text: "Limit defibrillation to one shock if indicated and limit indicated medications to one dose per protocol", correct: true, critical: false, explanation: "Per NY CC/Paramedic hypothermia protocol: limit manual defibrillation to one shock if indicated and limit indicated medications to one dose. Hypothermic myocardium is resistant to repeated interventions.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Follow standard ACLS algorithms with full dosing of all cardiac medications and repeated shocks as needed", correct: false, critical: true, explanation: "Standard ACLS dosing is contraindicated in severe hypothermia. Medications accumulate in the cold body and can reach toxic levels upon rewarming.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Withhold all defibrillation attempts entirely since the hypothermic heart cannot respond to electrical therapy", correct: false, critical: false, explanation: "One shock attempt is still indicated if the rhythm calls for it. Complete withholding may deny the patient a potentially lifesaving intervention.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Administer double-dose epinephrine to overcome the reduced metabolic rate caused by severe hypothermia", correct: false, critical: true, explanation: "Increased medication doses are dangerous in hypothermia. The cold body cannot metabolize drugs normally, leading to toxic accumulation upon rewarming.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most appropriate transport destination for this patient with severe hypothermia, hemodynamic instability, and a tenuous cardiac rhythm?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is packaged. A community hospital is 10 minutes away. A tertiary center with cardiopulmonary bypass capability is 35 minutes away. A Level I trauma center is 20 minutes away.",
        clinical_pearl: "Extracorporeal life support (ECLS) or cardiopulmonary bypass is the gold standard for rewarming severely hypothermic patients — especially those in or near cardiac arrest. NY protocol recommends these facilities if transport is less than 1 hour.",
        options: [
          { text: "Transport to the facility capable of extracorporeal life support or cardiopulmonary bypass within one hour", correct: true, critical: false, explanation: "Per NY protocol, patients with severe/profound hypothermia and hemodynamic instability may benefit from ECLS if available and <1 hour transport. At 35 minutes, this is appropriate.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Transport to the closest community hospital for initial stabilization and rewarming with warm IV fluids", correct: false, critical: false, explanation: "While closer, a community hospital likely cannot provide ECLS/bypass rewarming. The tertiary center is within the 1-hour window recommended by protocol.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Transport to the Level I trauma center since it has the broadest range of critical care resources available", correct: false, critical: false, explanation: "Trauma center designation alone does not guarantee ECLS/bypass capability. The protocol specifically recommends facilities with cardiopulmonary bypass.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Request air medical transport to the nearest academic medical center regardless of transport time involved", correct: false, critical: false, explanation: "Arranging air transport adds delays. The bypass-capable facility is 35 minutes by ground — well within the 1-hour window. Ground transport is fastest here.", protocol_ref: "als_environmental_hypothermia" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: 24F — College Party, Won't Wake Up (Polysubstance OD)
  // ============================================================
  {
    id: "env-overdose-01",
    title: "24F — College Party, Won't Wake Up",
    category: "Environmental",
    difficulty: "Medium",
    dispatch: "24-year-old female, unconscious at a party, friends unable to wake her",
    patient: { age: 24, sex: "F", cc: "Unresponsive after drinking" },
    scene: "You arrive at an off-campus house party. A 24-year-old female is found supine on a couch, surrounded by anxious friends. Multiple empty alcohol bottles and a prescription bottle of alprazolam (Xanax) are on the table. Friends state she was drinking heavily and may have taken 'a few bars' about two hours ago.",
    vitals: { hr: 58, bp: "96/58", rr: 6, spo2: 84, gcs: 7, temp: "97.1°F", bg: "72 mg/dL" },
    history: { pmh: "Anxiety disorder", meds: "Alprazolam 1 mg PRN (prescribed)", allergies: "NKDA" },
    presentation: "Patient is unresponsive to verbal stimuli, withdraws to painful stimuli. Breathing is slow and shallow at 6/min. Skin is pale and cool. Mild emesis is noted around the mouth. No gag reflex on examination. Pupils are mid-range and sluggish.",
    primary_protocol: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p",
    related_protocols: [
      "als_opioid_narcotic_overdose",
      "als_altered_mental_status",
      "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe",
      "als_oxygen_administration_and_airway_management"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "Based on scene findings and the patient's presentation, what substance combination is most likely responsible for this patient's condition?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Friends are panicked. Empty bottles of vodka and a prescription bottle of alprazolam are visible. They say she was 'partying hard' and took some pills.",
        clinical_pearl: "Alcohol and benzodiazepines are both CNS depressants with synergistic effects. Combined, they profoundly suppress the respiratory drive and protective airway reflexes, creating a high-risk airway emergency even at moderate doses of each.",
        options: [
          { text: "Alcohol combined with benzodiazepines causing synergistic CNS and respiratory depression with airway compromise", correct: true, critical: false, explanation: "The scene evidence (alcohol bottles + alprazolam), bradycardia, respiratory depression, absent gag reflex, and mid-range pupils are consistent with alcohol + benzo polysubstance overdose.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Opioid overdose presenting with classic findings of respiratory depression, pinpoint pupils, and bradycardia", correct: false, critical: false, explanation: "While respiratory depression is present, opioid OD typically presents with pinpoint pupils. This patient has mid-range sluggish pupils and scene evidence points to alcohol + benzos.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Acute alcohol poisoning alone since the friends report heavy drinking and the pills may be unrelated", correct: false, critical: false, explanation: "While alcohol alone can cause this presentation, ignoring the open alprazolam bottle and friends' report of pill ingestion is a dangerous assumption that changes management.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Stimulant overdose with a secondary crash phase resulting in the current depressed neurological status", correct: false, critical: false, explanation: "Stimulant crash typically presents with fatigue but preserved airway reflexes and respirations. This patient has profound respiratory depression and absent gag reflex.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "assessment",
        prompt: "With a respiratory rate of 6, SpO₂ of 84%, absent gag reflex, and emesis around the mouth, what is the immediate priority intervention?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient has vomit around her mouth and her breathing is dangerously slow. You hear gurgling with each breath.",
        clinical_pearl: "In polysubstance OD with absent gag reflex and vomiting, aspiration is an immediate threat. Airway management takes absolute priority — suction first, then assist ventilations. Naloxone will not reverse benzodiazepine effects.",
        options: [
          { text: "Suction the airway immediately, position the patient laterally, and begin bag-valve-mask assisted ventilations", correct: true, critical: false, explanation: "With RR of 6, SpO₂ 84%, and emesis in the airway, immediate suctioning and assisted ventilations are the top priority per respiratory arrest/failure and airway management protocols.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Administer intranasal naloxone immediately since the respiratory depression suggests opioid involvement", correct: false, critical: false, explanation: "Naloxone is indicated for suspected opioid overdose with respiratory insufficiency. This patient's presentation is most consistent with alcohol + benzo OD. Naloxone does not reverse benzodiazepines, and airway management cannot wait.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Place the patient in a recovery position and monitor closely to see if respiratory effort improves on its own", correct: false, critical: true, explanation: "With RR of 6 and SpO₂ of 84%, this patient is in respiratory failure. Monitoring without active ventilation support risks respiratory arrest and death.", protocol_ref: "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe" },
          { text: "Apply a non-rebreather mask at 15 liters per minute to address the hypoxia before any other interventions", correct: false, critical: false, explanation: "A non-rebreather is insufficient for a patient breathing at 6/min. She needs assisted ventilations, not just supplemental oxygen. The airway must also be cleared of emesis first.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After suctioning and initiating BVM ventilations, SpO₂ improves to 92%. The patient remains unresponsive. Should naloxone be administered?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Ventilations are effective and SpO₂ is rising. However, the patient remains deeply unresponsive with no gag reflex. Friends now mention she may have also taken a Percocet someone had.",
        vitals_update: { hr: 62, bp: "100/62", rr: 8, spo2: 92 },
        clinical_pearl: "When polysubstance OD includes a possible opioid component, naloxone is indicated for respiratory insufficiency per NY protocol. However, it will only reverse the opioid portion — the alcohol and benzo effects will persist, requiring continued airway vigilance.",
        options: [
          { text: "Yes — administer intranasal naloxone for suspected opioid component since respiratory insufficiency persists at RR of 8", correct: true, critical: false, explanation: "Per NY protocol, naloxone is indicated for suspected opioid overdose with respiratory insufficiency. New information suggests possible opioid ingestion and RR remains depressed at 8.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "No — naloxone is only indicated for confirmed pure opioid overdoses and will not help a polysubstance ingestion", correct: false, critical: false, explanation: "Naloxone is indicated for suspected opioid involvement with respiratory insufficiency. It may partially improve respiratory drive even in polysubstance OD.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "No — the SpO₂ has improved to 92 percent so there is no longer an indication for naloxone administration", correct: false, critical: false, explanation: "SpO₂ improved due to assisted ventilations, not because the patient is breathing adequately. RR of 8 still represents respiratory insufficiency.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Yes — administer the maximum naloxone dose of 4 mg intranasal immediately to reverse all CNS depression", correct: false, critical: false, explanation: "NY protocol recommends titrating naloxone to respiratory effort, not giving maximum doses. Naloxone also cannot reverse benzo or alcohol effects. At AEMT+ level, consider ≤0.5 mg IV increments.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the AEMT/CC/Paramedic level, what additional interventions are appropriate for this patient? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "After one dose of intranasal naloxone, respiratory rate increases slightly to 10 but the patient remains obtunded. GCS is now 8.",
        vitals_update: { hr: 66, bp: "102/64", rr: 10, spo2: 94, gcs: 8 },
        options: [
          { text: "Establish vascular access and titrate naloxone IV in 0.5 mg increments to improve respiratory effort", correct: true, critical: false, explanation: "Per NY ALS protocol, AEMT+ can titrate naloxone to max 2 mg/dose IV, considering ≤0.5 mg increments. The goal is adequate respiratory effort, not full arousal.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Place a supraglottic airway to protect against aspiration since the patient has no gag reflex and GCS of 8", correct: true, critical: false, explanation: "Per NY airway protocol, AEMT can place a supraglottic airway in unresponsive patients. With absent gag reflex and ongoing aspiration risk, this is appropriate airway protection.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Administer activated charcoal orally to decontaminate the GI tract and reduce further drug absorption now", correct: false, critical: true, explanation: "Activated charcoal is contraindicated in a patient with GCS of 8 and absent gag reflex due to extreme aspiration risk. It is also not in NY EMS protocols.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Administer flumazenil to reverse the benzodiazepine component since naloxone only addresses opioids present", correct: false, critical: true, explanation: "Flumazenil is not included in NY EMS protocols. In chronic benzo users, it can precipitate life-threatening seizures. It is contraindicated in polysubstance overdose.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient vomits and begins to desaturate. What is the most critical immediate action?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Five minutes into transport, the patient vomits copiously. SpO₂ drops rapidly to 78%. You hear gurgling sounds.",
        vitals_update: { hr: 54, bp: "88/52", rr: 4, spo2: 78 },
        clinical_pearl: "Aspiration is the leading cause of death in obtunded overdose patients. Immediate aggressive suctioning and repositioning take priority over all other interventions. Seconds count.",
        options: [
          { text: "Immediately turn the patient to their side, aggressively suction the airway, and resume assisted ventilations", correct: true, critical: false, explanation: "Aspiration management requires immediate lateral positioning to allow drainage, aggressive suctioning to clear the airway, then resuming ventilatory support.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Administer another dose of naloxone to improve the respiratory drive and allow the patient to protect her airway", correct: false, critical: false, explanation: "Naloxone may help eventually, but an actively soiled airway requires immediate mechanical clearance. Waiting for a drug to work while the patient aspirates is dangerous.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Continue BVM ventilations in the supine position while your partner prepares the suction equipment for use", correct: false, critical: true, explanation: "BVM ventilations in a supine patient with active vomiting will force emesis deeper into the lungs, worsening aspiration. Lateral positioning and suction must come first.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Request the driver pull over and stop the ambulance so you can safely perform endotracheal intubation now", correct: false, critical: false, explanation: "While definitive airway may be needed, stopping to intubate before clearing the airway wastes critical time. Suction and position first; intubation follows once the airway is cleared.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: 58M — Snake Bite on Hiking Trail (Envenomation)
  // ============================================================
  {
    id: "env-snakebite-01",
    title: "58M — Snake Bite on Hiking Trail",
    category: "Environmental",
    difficulty: "Medium",
    dispatch: "58-year-old male, snake bite to right lower leg on hiking trail, conscious and alert",
    patient: { age: 58, sex: "M", cc: "Snake bite to right calf" },
    scene: "You hike approximately 200 yards to reach the patient on a rocky trail in a state park. A 58-year-old male is seated on a rock, holding his right lower leg. He reports he was bitten by a 'brownish snake with a triangular head' approximately 30 minutes ago. Two puncture wounds are visible with progressive swelling and ecchymosis.",
    vitals: { hr: 108, bp: "132/84", rr: 22, spo2: 97, gcs: 15, temp: "98.6°F", bg: "118 mg/dL" },
    history: { pmh: "Hypertension, BPH", meds: "Amlodipine, tamsulosin", allergies: "Penicillin" },
    presentation: "Patient is anxious but alert and oriented. Right calf shows two puncture wounds with surrounding edema extending past the ankle. Ecchymosis is spreading. The patient reports burning pain at the site rated 8/10 and mild nausea. No signs of systemic toxicity yet.",
    primary_protocol: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p",
    related_protocols: [
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "als_bleeding_hemorrhage_control"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "A bystander suggests applying a tourniquet above the bite to prevent venom from spreading. What is the correct response?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "A well-meaning fellow hiker has already wrapped a belt tightly around the patient's thigh. The patient's foot is cool and mottled.",
        clinical_pearl: "Tourniquets, incision/suction, and ice are all harmful for snake bites. Tourniquets concentrate venom locally, causing severe tissue destruction, and do not prevent systemic absorption. They should be removed if found in place.",
        options: [
          { text: "Remove the improvised tourniquet — tourniquets worsen local tissue damage and do not prevent systemic envenomation", correct: true, critical: false, explanation: "Tourniquets are contraindicated for snake bites. They concentrate venom in the affected tissue, increasing local necrosis without preventing systemic absorption. The cool, mottled foot indicates vascular compromise.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Leave the tourniquet in place since per protocol a tourniquet placed for life-threatening bleeding should not be removed", correct: false, critical: false, explanation: "The tourniquet protocol applies to hemorrhage control. This was not placed for bleeding — it was improperly applied for envenomation and is causing harm by restricting perfusion to the foot.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Tighten the tourniquet further and add a second one below the knee to create a complete venom containment zone", correct: false, critical: true, explanation: "This would cause severe ischemic injury to the entire extremity. Double tourniqueting for envenomation is dangerous and has no medical basis.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Replace the belt with a commercial tourniquet placed two to three inches proximal to the bite per standard protocol", correct: false, critical: false, explanation: "Tourniquet placement is indicated for uncontrollable hemorrhage, not envenomation. No commercial tourniquet is appropriate for snake bite management.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What findings would indicate this patient is developing systemic envenomation requiring emergent transport? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "After removing the tourniquet, color returns to the foot. You are performing a thorough assessment while awaiting the stokes basket for trail evacuation.",
        clinical_pearl: "Pit viper envenomation can progress from local to systemic over minutes to hours. Signs of systemic toxicity include coagulopathy (oozing from puncture wounds), hypotension, tachycardia, vomiting, and altered mental status — all indicating urgent need for antivenom.",
        options: [
          { text: "Hypotension developing with tachycardia beyond what would be expected from anxiety and pain alone", correct: true, critical: false, explanation: "Hemodynamic instability indicates venom-induced vasodilation and possible coagulopathy — signs of serious systemic envenomation requiring emergent transport.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Swelling that rapidly progresses past the knee or oozing of blood from the puncture wounds that will not stop", correct: true, critical: false, explanation: "Rapidly advancing edema and persistent bleeding from the bite site indicate significant envenomation with possible coagulopathy requiring antivenom.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Moderate pain at the bite site with localized redness limited to a three-inch area around the puncture wounds", correct: false, critical: false, explanation: "Localized pain and limited redness are expected findings even with minor envenomation and do not indicate systemic toxicity.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "The patient feels anxious and nauseated with a heart rate of 108 but has stable blood pressure and clear mentation", correct: false, critical: false, explanation: "Anxiety and mild nausea with stable vitals are concerning but may represent the stress response. These alone do not confirm systemic envenomation.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What is the appropriate prehospital wound management for this snake bite?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is being prepared for transport via stokes basket. You need to address the bite site before the carry-out.",
        options: [
          { text: "Immobilize the affected extremity at or below the level of the heart, remove jewelry, and mark the swelling edge", correct: true, critical: false, explanation: "Proper snake bite management includes immobilizing the extremity, keeping it at or below heart level to slow lymphatic spread, removing constrictive items before swelling worsens, and marking edema progression.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Apply ice packs directly to the bite site to reduce swelling and slow the absorption of venom into the bloodstream", correct: false, critical: false, explanation: "Ice is contraindicated in snake bites. It causes vasoconstriction that concentrates venom locally and can worsen tissue necrosis without preventing systemic absorption.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Incise the bite marks with a scalpel and apply suction to extract the venom before systemic absorption occurs", correct: false, critical: true, explanation: "Incision and suction is a dangerous myth. It does not remove significant venom, causes additional tissue damage, and increases infection risk.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Elevate the extremity well above the heart and apply a compression bandage tightly around the entire lower leg", correct: false, critical: false, explanation: "Elevation above heart level and tight compression are not recommended for pit viper bites in North America. Pressure immobilization is used for some non-US species but is not standard here.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's pain is 8/10 and worsening. At the CC/Paramedic level, what is the most appropriate pain management approach?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The patient is now in the ambulance. His pain has increased to 9/10. BP remains 128/80 and he is alert and oriented.",
        vitals_update: { hr: 112, bp: "128/80", rr: 24, spo2: 96 },
        clinical_pearl: "NSAIDs (ketorolac, ibuprofen) are contraindicated in envenomation because pit viper venom can cause coagulopathy. Adding an antiplatelet/anticoagulant agent could worsen bleeding complications.",
        options: [
          { text: "Fentanyl 1-1.5 mcg/kg IV titrated to pain relief, avoiding ketorolac due to potential coagulopathy risk", correct: true, critical: false, explanation: "Per NY pain management protocol, fentanyl is appropriate for severe pain with SBP >100. NSAIDs should be avoided in envenomation due to potential venom-induced coagulopathy.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Ketorolac 15 mg IV as first-line since it provides strong anti-inflammatory effects ideal for swelling at the site", correct: false, critical: true, explanation: "Ketorolac is an NSAID that inhibits platelet function. With potential venom-induced coagulopathy, this could cause dangerous bleeding. Ketorolac is also contraindicated in patients who are actively bleeding.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Withhold all pain medications to preserve the patient's mental status as a reliable indicator of envenomation", correct: false, critical: false, explanation: "Untreated severe pain causes tachycardia and hypertension, which can worsen venom distribution. Pain management is indicated per protocol when criteria are met.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Morphine 0.1 mg/kg IM since IV access should be preserved for potential antivenom administration in hospital", correct: false, critical: false, explanation: "While morphine is an option, there is no reason to avoid IV use — vascular access at multiple sites is appropriate. Fentanyl IV provides faster onset and is easier to titrate.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most important consideration when selecting a transport destination for this patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is now showing signs of progressing envenomation — swelling has passed the knee and he reports a metallic taste in his mouth. Two hospitals are available: a small community ED 15 minutes away and a regional medical center 30 minutes away that stocks antivenom.",
        vitals_update: { hr: 118, bp: "108/68", rr: 24, spo2: 95 },
        clinical_pearl: "Antivenom (CroFab) is the definitive treatment for significant pit viper envenomation. Not all hospitals stock it. Transporting to a facility with antivenom capability — even if farther — can be life-saving when systemic signs are developing.",
        options: [
          { text: "Transport to the regional medical center with antivenom capability since the patient shows progressing envenomation", correct: true, critical: false, explanation: "With advancing swelling, hemodynamic changes, and signs of systemic toxicity, this patient needs antivenom. A facility that stocks it is the most appropriate destination despite the longer transport.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Transport to the closest community hospital since any emergency department can manage a snake bite effectively", correct: false, critical: false, explanation: "Not all EDs stock antivenom. A small community hospital may not have CroFab available, causing further delays in definitive treatment for progressing envenomation.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Stay on scene and request a helicopter to fly the patient directly to the nearest poison control center facility", correct: false, critical: false, explanation: "Poison control centers are phone consultative services, not treatment facilities. A helicopter may be appropriate for remote locations, but a 30-minute ground transport to a capable facility is reasonable.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Transport to the closest facility and request that antivenom be transferred from the regional center by courier", correct: false, critical: false, explanation: "Antivenom transfer adds logistical delays and complexity. Direct transport to the facility with antivenom is faster and more reliable for a patient with progressing envenomation.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: 10M — Allergic Reaction at Baseball Game (Pediatric Anaphylaxis)
  // ============================================================
  {
    id: "env-anaphylaxis-pedi-01",
    title: "10M — Allergic Reaction at Baseball Game",
    category: "Special",
    difficulty: "Hard",
    dispatch: "10-year-old male, difficulty breathing and rash after eating at a baseball game, EpiPen not available",
    patient: { age: 10, sex: "M", cc: "Difficulty breathing, hives, facial swelling" },
    scene: "You arrive at a minor league baseball stadium. A 10-year-old male is seated in the bleachers in visible distress. His father reports the child ate a hot dog about 15 minutes ago and rapidly developed hives, facial swelling, and difficulty breathing. The father states his son has a known peanut allergy and the hot dog may have contained peanut oil. The child's EpiPen is at home.",
    vitals: { hr: 148, bp: "78/42", rr: 36, spo2: 89, gcs: 14, temp: "98.8°F", bg: "126 mg/dL" },
    history: { pmh: "Severe peanut allergy, mild asthma", meds: "Albuterol PRN, carries EpiPen (not present)", allergies: "Peanuts — anaphylaxis" },
    presentation: "The child is sitting upright, using accessory muscles to breathe. Diffuse urticaria covers the trunk and extremities. Significant angioedema of the lips and tongue is present. Audible inspiratory stridor and expiratory wheezing. Capillary refill is 4 seconds. The child is frightened but follows commands.",
    primary_protocol: "als_anaphylaxis_and_allergic_reaction_pediatric",
    related_protocols: [
      "bls_anaphylaxis_and_allergic_reaction_pediatric",
      "als_shock_pediatric_sepsis_shock_hypoperfusion",
      "als_dif_breathing_pediatric_asthma_wheezing"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "This child presents with urticaria, angioedema, stridor, wheezing, and hypotension after allergen exposure. What condition does this represent?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child is covered in hives, his lips are visibly swollen, you can hear stridor from several feet away, and he looks pale with delayed capillary refill.",
        clinical_pearl: "Anaphylaxis requires multi-system involvement: skin (urticaria, angioedema) PLUS respiratory compromise (stridor, wheezing) AND/OR cardiovascular compromise (hypotension, tachycardia). This triad demands immediate epinephrine.",
        options: [
          { text: "Anaphylaxis — a life-threatening allergic reaction with respiratory distress, cardiovascular compromise, and skin findings", correct: true, critical: false, explanation: "This patient meets all criteria for anaphylaxis per NY protocol: severe respiratory distress (stridor/wheezing), facial/oral edema, and hypoperfusion (BP 78/42, cap refill 4 sec) after allergen exposure.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Moderate allergic reaction with anxiety-induced hyperventilation causing the appearance of respiratory distress", correct: false, critical: true, explanation: "This is anaphylaxis, not a moderate reaction. Stridor, wheezing, angioedema, and hypotension are life-threatening findings requiring immediate epinephrine. Dismissing this as anxiety could be fatal.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Acute asthma exacerbation triggered by the allergen exposure requiring bronchodilator therapy as the priority", correct: false, critical: false, explanation: "While asthma and anaphylaxis can coexist, the urticaria, angioedema, and hypotension make this anaphylaxis. Epinephrine is the priority, not just bronchodilators.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Foreign body airway obstruction from the hot dog causing the stridor with a coincidental allergic skin reaction", correct: false, critical: false, explanation: "While FBAO should be considered, the progressive urticaria, angioedema, wheezing, and hypotension timeline following allergen exposure clearly points to anaphylaxis.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The child weighs approximately 32 kg. What is the correct epinephrine dose and route for this patient at all provider levels?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "You confirm anaphylaxis and reach for your medication kit. The child weighs approximately 32 kg based on a length-based tape measurement.",
        clinical_pearl: "NY pediatric anaphylaxis protocol uses a weight-based threshold: ≥30 kg gets 0.3 mg IM (adult dose), <30 kg gets 0.15 mg IM (pediatric dose). At 32 kg, this child gets the 0.3 mg adult dose. This can be given via autoinjector (CFR+) or syringe kit (EMT+).",
        options: [
          { text: "Epinephrine 1 mg/mL concentration at 0.3 mg intramuscular since the child weighs 30 kg or greater", correct: true, critical: false, explanation: "Per NY pediatric anaphylaxis protocol, epinephrine 0.3 mg IM is indicated for patients ≥30 kg. At 32 kg, this child meets the threshold for the 0.3 mg (adult) dose.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 1 mg/mL concentration at 0.15 mg intramuscular since this is a pediatric patient under age twelve", correct: false, critical: false, explanation: "NY protocol bases the dose on weight, not age. At 32 kg (≥30 kg), this child receives 0.3 mg IM, not the 0.15 mg pediatric dose.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 0.1 mg/mL concentration at 0.01 mg/kg intravenous push for immediate cardiovascular stabilization", correct: false, critical: true, explanation: "IV epinephrine push is not indicated at standing order levels for anaphylaxis. IM is the correct route per NY protocol for all provider levels. IV epi drip is a medical control consideration only.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 1 mg/mL concentration at 0.5 mg intramuscular as the standard adult anaphylaxis treatment dose", correct: false, critical: false, explanation: "NY protocol specifies 0.3 mg IM for patients ≥30 kg in the pediatric anaphylaxis protocol. A 0.5 mg dose is not listed in the NY pediatric protocol.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Five minutes after the first dose of epinephrine, the child's stridor persists and BP remains 80/48. What is the next appropriate intervention? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The hives have improved slightly but the angioedema and stridor persist. The child is still working hard to breathe. SpO₂ is 90%.",
        vitals_update: { hr: 140, bp: "80/48", rr: 34, spo2: 90 },
        clinical_pearl: "NY protocol allows ONE repeat dose of IM epinephrine after 5 minutes if no improvement. Additionally, albuterol is indicated for wheezing at EMT level and above, and may be combined with ipratropium.",
        options: [
          { text: "Repeat epinephrine 0.3 mg IM since the patient has not improved after five minutes per protocol allowance", correct: true, critical: false, explanation: "Per NY pediatric anaphylaxis protocol, epinephrine may be repeated once after 5 minutes if the patient does not improve.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Administer albuterol 2.5 mg via nebulizer for the persistent wheezing which may be combined with ipratropium", correct: true, critical: false, explanation: "Per NY protocol, EMT and AEMT may administer albuterol 2.5 mg via nebulizer for wheezing, which may be combined with ipratropium 0.5 mg. May repeat to three total doses.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Increase the epinephrine dose to 0.5 mg IM since the initial dose of 0.3 mg was insufficient for this patient", correct: false, critical: false, explanation: "NY protocol does not authorize dose escalation beyond the weight-based dosing. The repeat dose is the same 0.3 mg IM, not a higher amount.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Switch to subcutaneous epinephrine injection since the intramuscular route may not be absorbing properly now", correct: false, critical: false, explanation: "IM injection provides faster and more reliable absorption than subcutaneous, especially in patients with hypoperfusion. NY protocol specifies IM as the route.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC level, what additional medication is indicated for this patient?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "ALS has arrived. The child has received two doses of IM epinephrine and one albuterol nebulizer. Stridor is improving but urticaria persists. BP is now 86/52.",
        vitals_update: { hr: 132, bp: "86/52", rr: 28, spo2: 93, gcs: 15 },
        clinical_pearl: "Diphenhydramine at the CC level is dosed at 1 mg/kg IM (max 50 mg) for pediatric anaphylaxis. At the Paramedic level, it can also be given IV and additional interventions include NS 20 mL/kg bolus and dexamethasone.",
        options: [
          { text: "Diphenhydramine 1 mg/kg intramuscular to a maximum of 50 mg to address the histamine-mediated symptoms", correct: true, critical: false, explanation: "Per NY CC-level pediatric anaphylaxis protocol, diphenhydramine 1 mg/kg IM (max 50 mg) is indicated. At 32 kg, this patient would receive 32 mg IM.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Methylprednisolone 2 mg/kg IV push for rapid suppression of the ongoing inflammatory cascade in anaphylaxis", correct: false, critical: false, explanation: "Methylprednisolone is not in the NY pediatric anaphylaxis protocol. Dexamethasone 10 mg is the steroid option, available at the Paramedic level.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Famotidine 0.25 mg/kg IV as an H2 blocker to complement the H1 blockade from diphenhydramine administration", correct: false, critical: false, explanation: "H2 blockers are not included in the NY pediatric anaphylaxis protocol. While used in some hospital settings, they are not an EMS standing order.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Epinephrine 0.1 mcg/kg/minute IV drip initiated immediately to maintain hemodynamic stability during transport", correct: false, critical: false, explanation: "IV epinephrine drip is a medical control consideration, not a standing order. It requires physician authorization and is started at 0.1 mcg/kg/min, titrated to max 1.5 mcg/kg/min.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the Paramedic level, what additional interventions should be initiated for this patient? (Select all that apply)",
        multi_select: true,
        level_filter: "P",
        narrative: "The CC has administered diphenhydramine. The Paramedic is now taking over care. The child remains hypotensive with BP 86/52.",
        options: [
          { text: "Normal saline 20 mL/kg IV bolus to address the distributive shock caused by histamine-mediated vasodilation", correct: true, critical: false, explanation: "Per NY Paramedic-level pediatric anaphylaxis protocol, NS 20 mL/kg IV bolus is indicated. At 32 kg, this is a 640 mL bolus.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Dexamethasone 10 mg administered PO, IM, or IV for patients two years old and older to prevent biphasic reaction", correct: true, critical: false, explanation: "Per NY Paramedic-level pediatric anaphylaxis protocol, dexamethasone 10 mg PO, IM, or IV is indicated for patients ≥2 years old.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Administer a second dose of diphenhydramine 1 mg/kg IV to maximize the antihistamine blockade for this patient", correct: false, critical: false, explanation: "The max total dose of diphenhydramine is 50 mg. The CC already gave the weight-based dose. Additional diphenhydramine beyond max is not indicated.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Initiate nebulized epinephrine at 5 mg via nebulizer to directly treat the upper airway edema causing the stridor", correct: false, critical: false, explanation: "Nebulized epinephrine for stridor is not in the NY anaphylaxis protocol. The protocol uses IM epinephrine and directs to the stridor protocol separately if needed.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "The father insists you should not force his child to lie down in the ambulance. How should you position this patient during transport?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child is being moved to the ambulance. He is still mildly stridorous but breathing has improved. He becomes anxious when you try to lay him flat on the stretcher.",
        clinical_pearl: "NY pediatric anaphylaxis protocol explicitly states: allow the patient to maintain position of comfort, do not force the child to lie down, and do not agitate the child. Forcing a child with upper airway edema supine can worsen obstruction.",
        options: [
          { text: "Allow the child to remain in a position of comfort as per protocol — do not force the child to lie down or cause agitation", correct: true, critical: false, explanation: "Per NY pediatric anaphylaxis protocol: 'Allow the patient to maintain position of comfort. Do not force the child to lie down. Do not agitate the child.' Agitation increases oxygen demand and can worsen airway compromise.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Place the child flat with legs elevated in modified Trendelenburg position to improve venous return and blood pressure", correct: false, critical: false, explanation: "While Trendelenburg may help with pure hypotension, forcing an anaphylactic child with active stridor to lie flat can worsen airway obstruction. Protocol says position of comfort.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Restrain the child supine on the stretcher for safety during transport regardless of his respiratory complaints", correct: false, critical: true, explanation: "Restraining an anaphylactic child supine with upper airway edema can precipitate complete airway obstruction. NY protocol explicitly prohibits forcing the child to lie down.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" },
          { text: "Have the father hold the child in his lap during transport to keep the child calm and reduce oxygen consumption", correct: false, critical: false, explanation: "While keeping the child calm is important, an unsecured patient (and parent) during transport is a safety hazard. The child should be secured on the stretcher in a position of comfort.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_pediatric" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: 44F — Farm Accident, Pinned Under Tractor (Crush Syndrome)
  // ============================================================
  {
    id: "env-crush-01",
    title: "44F — Farm Accident, Pinned Under Tractor",
    category: "Special",
    difficulty: "Hard",
    dispatch: "44-year-old female, farm accident, trapped under overturned tractor for approximately 3 hours",
    patient: { age: 44, sex: "F", cc: "Bilateral lower extremities pinned under tractor" },
    scene: "You arrive at a rural farm where a 44-year-old female is pinned from the mid-thighs down under an overturned tractor. Fire rescue is on scene working to stabilize the tractor for extrication. A farmhand discovered her approximately 30 minutes ago and estimates she has been trapped for about 3 hours. She is alert and conversational but in pain.",
    vitals: { hr: 110, bp: "138/88", rr: 22, spo2: 97, gcs: 15, temp: "96.8°F", bg: "142 mg/dL" },
    history: { pmh: "Hypothyroidism, seasonal allergies", meds: "Levothyroxine, cetirizine", allergies: "NKDA" },
    presentation: "Patient is alert and oriented, speaking in full sentences. She reports severe pain in both legs rated 9/10. Visible portions of both lower extremities appear dusky and swollen. She can wiggle her toes slightly. Abdomen is soft. She is mildly hypothermic from ground exposure.",
    primary_protocol: "als_chest_trauma",
    related_protocols: [
      "als_hyperkalemia_adult",
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "als_trauma_general"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "This patient has had both legs crushed for approximately 3 hours. What is the most dangerous complication you should anticipate upon extrication?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Fire rescue estimates 30-45 minutes until they can safely lift the tractor. The patient is conversational and seems stable, but her legs have been crushed for hours.",
        clinical_pearl: "Crush syndrome occurs when compressed muscle releases potassium, myoglobin, and lactic acid into systemic circulation upon reperfusion. The patient may appear stable while trapped, but release can cause fatal hyperkalemia and cardiac arrest within minutes.",
        options: [
          { text: "Crush syndrome with fatal hyperkalemia and cardiac arrest occurring within minutes of releasing the trapped extremities", correct: true, critical: false, explanation: "Prolonged crush injury (≥1 hour for 2 extremities) causes buildup of potassium, myoglobin, and acids in ischemic tissue. Upon release, these flood the circulation causing hyperkalemia, cardiac arrest, and renal failure.", protocol_ref: "als_chest_trauma" },
          { text: "Severe hemorrhage from traumatic amputation of the crushed extremities that were held in place by the tractor", correct: false, critical: false, explanation: "While hemorrhage is possible, the greatest threat with prolonged entrapment is the metabolic derangement of crush syndrome upon reperfusion, not hemorrhage.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Compartment syndrome developing slowly over the next twenty-four to forty-eight hours requiring surgical evaluation", correct: false, critical: false, explanation: "While compartment syndrome is a concern, the immediate life threat is hyperkalemia-induced cardiac arrest upon release. Compartment syndrome develops over hours to days.", protocol_ref: "als_chest_trauma" },
          { text: "Fat embolism from bilateral femur fractures causing acute respiratory distress syndrome during ambulance transport", correct: false, critical: false, explanation: "Fat embolism is typically associated with long bone fractures and develops over 24-72 hours. The immediate threat here is reperfusion-related hyperkalemia upon extrication.", protocol_ref: "als_chest_trauma" }
        ]
      },
      {
        phase: "assessment",
        prompt: "NY protocol specifies time-based criteria for crush syndrome pretreatment. Which of the following meets the threshold requiring pretreatment before extrication?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "You are reviewing the crush injury protocol to determine if pretreatment is needed before fire rescue lifts the tractor.",
        clinical_pearl: "NY crush injury protocol has specific time thresholds: one complete extremity crushed ≥2 hours OR two extremities crushed ≥1 hour triggers the pretreatment pathway. This patient has bilateral crush for ~3 hours — well above threshold.",
        options: [
          { text: "Two extremities crushed for one hour or more, or one complete extremity crushed for two hours or more", correct: true, critical: false, explanation: "Per NY crush injury protocol, pretreatment with sodium bicarbonate is indicated if one complete extremity is crushed ≥2 hours or 2 extremities are crushed ≥1 hour. This patient exceeds both criteria.", protocol_ref: "als_chest_trauma" },
          { text: "Any extremity crushed for thirty minutes or more regardless of the number of extremities that are involved", correct: false, critical: false, explanation: "NY protocol uses specific thresholds: 2 hours for one extremity or 1 hour for two extremities. Thirty minutes alone does not trigger the pretreatment pathway.", protocol_ref: "als_chest_trauma" },
          { text: "Only when ECG changes consistent with hyperkalemia are already present on the cardiac monitor before release", correct: false, critical: false, explanation: "Waiting for ECG changes means waiting until hyperkalemia is already occurring. The protocol calls for pretreatment based on entrapment time to prevent cardiac arrest upon release.", protocol_ref: "als_chest_trauma" },
          { text: "Crush injury pretreatment is only indicated for patients who are hemodynamically unstable while still entrapped", correct: false, critical: false, explanation: "The patient may be hemodynamically stable while trapped because the compression acts as a 'tourniquet.' The danger occurs at release. Pretreatment is time-based, not vitals-based.", protocol_ref: "als_chest_trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What are the correct AEMT-level interventions that should be initiated BEFORE extrication begins? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "Fire rescue will be ready to lift the tractor in approximately 20 minutes. You need to prepare the patient for the metabolic insult of reperfusion.",
        clinical_pearl: "Aggressive IV fluid resuscitation BEFORE release is critical. NY protocol calls for 1 liter NS bolus then 1 liter/hour, ideally through 2 IV sites. Fluids dilute the potassium and myoglobin bolus that hits the circulation upon release.",
        options: [
          { text: "Establish vascular access at two sites and begin normal saline one liter bolus then one liter per hour infusion", correct: true, critical: false, explanation: "Per NY crush injury protocol at AEMT level: vascular access ideally at 2 sites (no more than one IO), NS 1 liter bolus then 1 liter per hour.", protocol_ref: "als_chest_trauma" },
          { text: "Initiate pain management per the adult pain management protocol since the patient reports nine out of ten pain", correct: true, critical: false, explanation: "Per NY crush injury protocol, pain management per the adult protocol is indicated at the AEMT level and above. Fentanyl or ketamine would be appropriate options at CC/P level.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Withhold all IV fluids until after extrication to avoid worsening any internal hemorrhage that may be present", correct: false, critical: true, explanation: "Pre-release fluid loading is essential to survive crush syndrome. Withholding fluids dramatically increases the risk of fatal hyperkalemia and renal failure upon reperfusion.", protocol_ref: "als_chest_trauma" },
          { text: "Apply bilateral tourniquets above the crush site before extrication to prevent reperfusion of the injured tissue", correct: false, critical: false, explanation: "Tourniquet application for prolonged entrapment is a medical control consideration, not a standing order. It is considered only when placed as close as possible to the crush site prior to release.", protocol_ref: "als_chest_trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the Paramedic level, what specific medication must be administered before and during extrication for crush syndrome?",
        multi_select: false,
        level_filter: "P",
        narrative: "Fire rescue is almost ready to lift the tractor. The CC has placed the cardiac monitor showing sinus tachycardia without ectopy. You need to administer pretreatment medications.",
        clinical_pearl: "Sodium bicarbonate 50 mEq IV slow push every 30 minutes while trapped, PLUS an additional 50 mEq one minute prior to extrication. Bicarb alkalinizes the blood, counteracting the acidosis and helping protect against hyperkalemia-induced cardiac arrest.",
        options: [
          { text: "Sodium bicarbonate 50 mEq IV slow push every 30 minutes while trapped, plus 50 mEq one minute before release", correct: true, critical: false, explanation: "Per NY crush injury Paramedic protocol: sodium bicarbonate 50 mEq IV slow push every 30 minutes while trapped. In addition, one minute prior to extrication: sodium bicarbonate 50 mEq IV.", protocol_ref: "als_chest_trauma" },
          { text: "Calcium chloride 1 gram IV over 5 minutes to stabilize the cardiac membrane against hyperkalemia before release", correct: false, critical: false, explanation: "Calcium chloride is a medical control consideration for suspected hyperkalemia with ECG changes — not a standing order pretreatment. Sodium bicarbonate is the standing order.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Albuterol 2.5 mg via nebulizer repeated every 10 minutes to drive potassium intracellularly before extrication", correct: false, critical: false, explanation: "Nebulized albuterol for hyperkalemia is a medical control consideration, not a standing order for crush injuries. Sodium bicarbonate is the required pretreatment.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Epinephrine 1 mg IV push administered prophylactically one minute before extrication to prevent cardiac arrest", correct: false, critical: true, explanation: "Prophylactic epinephrine is not indicated and could cause dangerous hypertension and tachyarrhythmias. Sodium bicarbonate is the correct pretreatment per protocol.", protocol_ref: "als_chest_trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Immediately after extrication, the cardiac monitor shows peaked T-waves and a widening QRS complex. What intervention is now indicated?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The tractor has been lifted and the patient's legs are free. Within 2 minutes, the monitor alarm sounds — peaked T-waves and QRS widening to 160 ms are visible. The patient reports tingling in her hands and feels her heart 'fluttering.'",
        vitals_update: { hr: 52, bp: "82/48", rr: 28, spo2: 93, gcs: 14 },
        clinical_pearl: "Peaked T-waves and widened QRS are hallmarks of hyperkalemia — potassium flooding from crushed muscle. Calcium chloride stabilizes the cardiac membrane within minutes. Per NY protocol, flush 50 mL NS between calcium chloride and sodium bicarbonate to prevent precipitation.",
        options: [
          { text: "Contact medical control for calcium chloride 1 gram IV over 5 minutes for suspected hyperkalemia with ECG changes", correct: true, critical: false, explanation: "Per NY protocol medical control considerations: if hyperkalemia suspected with ECG changes (peaked T-waves, widened QRS), calcium chloride 1 gram IV over 5 minutes. Repeat in 10 minutes if no resolution. Flush 50 mL NS between calcium and bicarb.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Administer another dose of sodium bicarbonate 50 mEq IV since it was effective as pretreatment before extrication", correct: false, critical: false, explanation: "While additional bicarb may help, the immediate threat is cardiac membrane instability from hyperkalemia. Calcium chloride directly stabilizes the myocardium and works within minutes.", protocol_ref: "als_chest_trauma" },
          { text: "Prepare for synchronized cardioversion at 100 joules since the widened QRS suggests an unstable tachyarrhythmia", correct: false, critical: false, explanation: "The wide QRS is from hyperkalemia, not a primary cardiac rhythm disturbance. Cardioversion will not correct a metabolic cause. Calcium chloride addresses the underlying hyperkalemia.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Administer amiodarone 150 mg IV over 10 minutes to stabilize the cardiac rhythm and prevent ventricular fibrillation", correct: false, critical: false, explanation: "Amiodarone treats primary arrhythmias, not metabolic causes. The ECG changes are from hyperkalemia — calcium chloride is the specific treatment to stabilize the cardiac membrane.", protocol_ref: "als_hyperkalemia_adult" }
        ]
      },
      {
        phase: "transport",
        prompt: "After calcium chloride administration, the QRS narrows. What are the key transport considerations for this patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Calcium chloride has improved the ECG. The patient's bilateral legs are severely swollen, dusky, and painful. She is hemodynamically fragile. A community hospital is 20 minutes away; a Level I trauma center is 45 minutes away.",
        vitals_update: { hr: 98, bp: "94/58", rr: 24, spo2: 95 },
        clinical_pearl: "Post-crush patients need trauma center care with dialysis capability. After extrication, do NOT elevate the crushed extremities and apply cold therapy. Continued cardiac monitoring is critical as hyperkalemia can recur.",
        options: [
          { text: "Transport to the trauma center — immobilize both extremities without elevation, apply cold therapy, and continue cardiac monitoring", correct: true, critical: false, explanation: "Per NY protocol, after extrication: immobilize extremities, apply cold therapy, do NOT elevate. This patient needs trauma center with likely dialysis capability. Continued monitoring for recurrent hyperkalemia is essential.", protocol_ref: "als_chest_trauma" },
          { text: "Transport to the closest community hospital for initial stabilization before transferring to a higher level of care", correct: false, critical: false, explanation: "This patient needs a trauma center with dialysis capability for rhabdomyolysis management. The 45-minute transport is reasonable per NY trauma general protocol (unstable patients within 10 min of extrication).", protocol_ref: "als_trauma_general" },
          { text: "Elevate both legs above the heart to reduce swelling and improve venous return during the transport to the hospital", correct: false, critical: true, explanation: "NY crush injury protocol specifically states: do NOT elevate the extremity after extrication. Elevation increases the rate of toxic metabolite washout into central circulation.", protocol_ref: "als_chest_trauma" },
          { text: "Apply warm compresses to both legs to improve circulation and promote healing of the ischemic muscle tissue present", correct: false, critical: false, explanation: "NY protocol specifies cold therapy, not heat, after extrication. Warming increases metabolic demand in already damaged tissue and accelerates release of toxic metabolites.", protocol_ref: "als_chest_trauma" }
        ]
      }
    ]
  }
];
