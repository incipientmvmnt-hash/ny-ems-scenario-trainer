const SCENARIOS_P3 = [
  // ============================================================
  // SCENARIO 1: 71M — Sudden Confusion and Weakness (Acute Stroke)
  // ============================================================
  {
    id: "med-neuro-01",
    title: "71M — Sudden Confusion and Weakness",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "71-year-old male, sudden confusion and left-sided weakness, conscious and breathing",
    patient: { age: 71, sex: "M", cc: "Sudden confusion and left-sided weakness" },
    scene: "You arrive at a residence where a 71-year-old male is seated in a recliner. His wife states he was watching television and suddenly became confused and dropped his coffee cup. She noticed his face looked 'crooked' and called 911 immediately. She states he was completely normal 45 minutes ago.",
    vitals: { hr: 88, bp: "178/96", rr: 18, spo2: 96, gcs: 13, temp: "98.6°F", bg: "118 mg/dL" },
    history: { pmh: "Atrial fibrillation, hypertension, DVT history", meds: "Warfarin, metoprolol, lisinopril", allergies: "Penicillin" },
    presentation: "Patient has left facial droop, slurred speech, and left arm drift. He is confused but follows some commands. Wife confirms he takes warfarin daily and his last INR was 2.8 three days ago.",
    primary_protocol: "als_stroke",
    related_protocols: [
      "bls_stroke",
      "als_altered_mental_status",
      "als_general_approach_to_transportation"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find this 71-year-old male with acute onset confusion and left-sided weakness. His wife says he was last normal 45 minutes ago. What is your most critical first action regarding this patient?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Dispatch reports a 71-year-old male with sudden confusion. Wife is on scene and appears very anxious.",
        clinical_pearl: "Establishing 'Last Known Well' (LKW) is one of the most critical actions in stroke assessment per NY protocol. This is the exact time the patient was last in their usual state of health — it drives all treatment decisions at the hospital, including eligibility for thrombolytics (tPA within 3-4.5 hours) and thrombectomy.",
        options: [
          { text: "Confirm and document the exact Last Known Well time by interviewing the wife and any other witnesses present", correct: true, critical: false, explanation: "Per NY Stroke protocol, determining the Last Known Well is a critical early action. The LKW (45 minutes ago) places this patient well within the thrombolytic window.", protocol_ref: "als_stroke" },
          { text: "Immediately administer aspirin 324 mg chewed since the presentation is consistent with an acute ischemic event", correct: false, critical: true, explanation: "Aspirin is contraindicated in suspected stroke — the patient could have a hemorrhagic stroke, especially while on warfarin. Aspirin is for suspected cardiac events, not stroke.", protocol_ref: "als_stroke" },
          { text: "Begin a detailed neurological exam including cranial nerve testing before obtaining any history from the family", correct: false, critical: false, explanation: "While neurological assessment is important, confirming the Last Known Well takes priority because it directly impacts hospital treatment decisions and destination.", protocol_ref: "als_stroke" },
          { text: "Start an IV and administer a normal saline bolus to improve cerebral perfusion before performing any assessment", correct: false, critical: false, explanation: "Vascular access is appropriate but not the most critical first action. The LKW must be established early as it determines the entire treatment pathway.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You perform the Cincinnati Prehospital Stroke Scale. Which components are included in this assessment? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is cooperative but confused. He is able to follow simple commands with encouragement.",
        clinical_pearl: "The Cincinnati Prehospital Stroke Scale has three components: facial droop (smile), arm drift (hold arms out 10 seconds with eyes closed), and speech (repeat a phrase). Any single abnormality has a 72% probability of stroke; all three abnormal raises it to over 85%.",
        options: [
          { text: "Have the patient smile and assess for facial droop or asymmetry on one side of the face", correct: true, critical: false, explanation: "Per NY protocol, assessing for facial droop by having the patient smile is one of the three components of the Cincinnati Prehospital Stroke Scale.", protocol_ref: "als_stroke" },
          { text: "Have the patient close eyes and hold arms straight out for 10 seconds to assess for arm drift", correct: true, critical: false, explanation: "Per NY protocol, assessing for arm drift or unequal movement is a component of the Cincinnati Prehospital Stroke Scale.", protocol_ref: "als_stroke" },
          { text: "Have the patient repeat a phrase such as 'You can't teach an old dog new tricks' to assess speech", correct: true, critical: false, explanation: "Per NY protocol, assessing for correct use of words and lack of slurring by having the patient repeat a phrase is a component of the Cincinnati Scale.", protocol_ref: "als_stroke" },
          { text: "Have the patient squeeze both of your hands simultaneously to assess for unilateral grip weakness", correct: false, critical: false, explanation: "Grip strength assessment is not part of the Cincinnati Prehospital Stroke Scale, though it may be useful in a general neurological exam.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient's blood glucose is 118 mg/dL. His BP is 178/96. At the CC/Paramedic level, what is the appropriate blood pressure management for this suspected stroke patient?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "Cincinnati Stroke Scale is positive for all three components. The patient's BP reads 178/96 on recheck. He remains confused with left-sided deficits.",
        vitals_update: { hr: 84, bp: "182/98", rr: 16, spo2: 97 },
        clinical_pearl: "NY protocol states to maintain SBP >120 mmHg in stroke patients. Antihypertensive treatment (Metoprolol via medical control) is only considered when SBP >220 or DBP >120. Aggressively lowering BP in acute stroke can worsen ischemia by reducing collateral perfusion to the penumbra.",
        options: [
          { text: "Do not treat the blood pressure — it does not meet the NY protocol threshold of SBP greater than 220 or DBP greater than 120", correct: true, critical: false, explanation: "Per NY Stroke protocol, contact medical control for BP management only if SBP >220 or DBP >120. At 182/98, this patient does not meet either threshold.", protocol_ref: "als_stroke" },
          { text: "Administer metoprolol 5 mg slow IV push to reduce the blood pressure to below 140/90 before transport begins", correct: false, critical: true, explanation: "Lowering BP aggressively in acute stroke can extend the infarct. NY protocol reserves antihypertensives for SBP >220 or DBP >120, and only via medical control order.", protocol_ref: "als_stroke" },
          { text: "Administer nitroglycerin 0.4 mg sublingual to reduce afterload and decrease the risk of hemorrhagic conversion", correct: false, critical: true, explanation: "Nitroglycerin is not indicated in the stroke protocol and could dangerously lower blood pressure. It is a cardiac protocol medication, not a stroke intervention.", protocol_ref: "als_stroke" },
          { text: "Administer a normal saline 500 mL bolus to dilute the blood and reduce viscosity to improve cerebral blood flow", correct: false, critical: false, explanation: "Fluid bolus is not indicated for blood pressure management in stroke. NS may be given for hypotension (SBP <120), but this patient is hypertensive.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The wife mentions he takes warfarin and his INR was 2.8 three days ago. How does this information affect your prehospital management and hospital communication?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You have confirmed positive Cincinnati Stroke Scale and LKW of 45 minutes. The wife hands you his medication list showing warfarin 5 mg daily.",
        clinical_pearl: "Anticoagulant use is critical information for the receiving stroke center. Patients on warfarin with elevated INR may not be candidates for tPA (thrombolytics) without reversal, but may still be candidates for mechanical thrombectomy. This must be communicated early to the receiving facility.",
        options: [
          { text: "Document the warfarin use and INR value and relay this information to the receiving stroke center in your early notification", correct: true, critical: false, explanation: "Warfarin use and recent INR are critical for the stroke team's treatment decisions. This information must be communicated during early hospital notification per NY protocol.", protocol_ref: "als_stroke" },
          { text: "Withhold all interventions because the patient is anticoagulated and any treatment could cause a fatal hemorrhage", correct: false, critical: true, explanation: "Anticoagulation does not change prehospital stroke care. Supportive care, assessment, and rapid transport remain essential. The hospital makes thrombolytic decisions.", protocol_ref: "als_stroke" },
          { text: "Administer vitamin K intramuscularly in the field to begin reversing the warfarin before arrival at the hospital", correct: false, critical: false, explanation: "Vitamin K administration is not within the NY EMS scope of practice for any provider level. Anticoagulant reversal is a hospital-based decision.", protocol_ref: "als_stroke" },
          { text: "Assume the presentation is hemorrhagic stroke due to the warfarin and transport to the nearest hospital instead", correct: false, critical: false, explanation: "You cannot differentiate ischemic from hemorrhagic stroke in the field. The patient should still go to a designated stroke center for CT imaging and definitive diagnosis.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "transport",
        prompt: "With a Last Known Well of 45 minutes and positive stroke scale, what is the appropriate transport destination per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is packaged on the stretcher. Two facilities are available: a community hospital 6 minutes away and a NYS DOH Designated Stroke Center 18 minutes away.",
        clinical_pearl: "NY protocol specifies transport to a NYS DOH Designated Stroke Center if the time from LKW to estimated ED arrival is less than 3.5 hours. With LKW of 45 minutes and an 18-minute transport, total time would be approximately 63 minutes — well within the window.",
        options: [
          { text: "Transport to the NYS DOH Designated Stroke Center 18 minutes away since arrival will be well within the 3.5-hour window", correct: true, critical: false, explanation: "Per NY Stroke protocol, if time from LKW to estimated ED arrival is less than 3.5 hours, transport to a NYS DOH Designated Stroke Center. This patient is well within that window.", protocol_ref: "als_stroke" },
          { text: "Transport to the nearest community hospital 6 minutes away for rapid CT scan and stabilization before transfer", correct: false, critical: false, explanation: "Bypassing a closer facility for a stroke center is appropriate when within the 3.5-hour window. Transfer from a community hospital adds delay to definitive treatment.", protocol_ref: "als_stroke" },
          { text: "Contact medical control to request helicopter transport to the nearest comprehensive stroke center in the region", correct: false, critical: false, explanation: "With a stroke center 18 minutes away by ground, air transport is unnecessary and would likely delay care due to activation time.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Allow the wife to choose the destination hospital since the patient cannot make decisions due to his altered mental status", correct: false, critical: false, explanation: "While family input is considered, clinical judgment and NY protocol direct stroke patients to designated stroke centers when within the time window.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, what information must be included in your early notification to the receiving stroke center? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You are en route to the stroke center with an ETA of 16 minutes. The patient's deficits remain unchanged.",
        options: [
          { text: "Last Known Well time and who reported it, along with the time of symptom onset if different from the LKW", correct: true, critical: false, explanation: "Per NY protocol, LKW and who reported it must be documented and communicated. Time of symptom onset is also key information if available.", protocol_ref: "als_stroke" },
          { text: "Current anticoagulant medications including warfarin and the most recent INR value if available from family", correct: true, critical: false, explanation: "Anticoagulant use directly impacts thrombolytic eligibility. The stroke team needs this information as early as possible for treatment planning.", protocol_ref: "als_stroke" },
          { text: "Cincinnati Stroke Scale findings, current vital signs, and blood glucose level to help the team prepare for arrival", correct: true, critical: false, explanation: "Stroke scale results, vitals, and glucose are essential pre-arrival information that helps the stroke team prepare appropriate resources.", protocol_ref: "als_stroke" },
          { text: "A request for the stroke team to prepare thrombolytics for immediate administration upon the patient's arrival", correct: false, critical: false, explanation: "EMS does not direct hospital treatment decisions. The stroke team determines thrombolytic eligibility after CT imaging and further workup.", protocol_ref: "als_stroke" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: 56M — Chest Pain After Shoveling Snow (STEMI w/ RV involvement)
  // ============================================================
  {
    id: "med-cardiac-02",
    title: "56M — Chest Pain After Shoveling Snow",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "56-year-old male, chest pain after shoveling snow, conscious and breathing, appears pale",
    patient: { age: 56, sex: "M", cc: "Crushing chest pain radiating to left arm" },
    scene: "You arrive at a suburban driveway where a 56-year-old male is seated on the front steps, clutching his chest. He states he was shoveling heavy wet snow for about 30 minutes when he developed crushing chest pain radiating to his left arm. He is pale, diaphoretic, and nauseated. A neighbor called 911.",
    vitals: { hr: 56, bp: "92/58", rr: 22, spo2: 94, gcs: 15, temp: "97.8°F", bg: "132 mg/dL" },
    history: { pmh: "Hypertension, hyperlipidemia, 30-pack-year smoker", meds: "Amlodipine, atorvastatin", allergies: "NKDA" },
    presentation: "Patient is alert but appears acutely ill. He describes 10/10 crushing substernal chest pain radiating to his left arm and jaw. He is pale, cool, and diaphoretic with JVD noted. Lung sounds are clear bilaterally.",
    primary_protocol: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
    related_protocols: [
      "bls_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
      "als_general_approach_to_transportation"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You find a 56-year-old male with crushing chest pain after shoveling snow. He is pale, diaphoretic, and bradycardic at 56 bpm with BP 92/58. What should you recognize about this presentation? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is sitting on cold concrete steps. His skin is pale, cool, and clammy. He has visible JVD despite being upright.",
        clinical_pearl: "Bradycardia and hypotension in the setting of an acute MI suggest inferior STEMI with right ventricular involvement. The right coronary artery supplies the SA node in most patients, and RV infarction causes preload-dependent hemodynamics. JVD with clear lungs is a classic RV infarct triad sign.",
        options: [
          { text: "Acute myocardial infarction likely involving the inferior wall and right ventricle based on bradycardia, hypotension, and JVD", correct: true, critical: false, explanation: "Bradycardia, hypotension, JVD with clear lungs in the setting of acute chest pain is classic for inferior STEMI with RV involvement. The vagal tone and RV failure explain these findings.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Nitroglycerin is contraindicated in this patient due to hypotension and likely right ventricular preload dependence", correct: true, critical: false, explanation: "NY protocol requires SBP >120 mmHg for nitroglycerin. At SBP 92, NTG is contraindicated. RV infarction makes the patient preload-dependent, making NTG especially dangerous.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Vasovagal syncope episode triggered by pain and cold exposure that will self-resolve with rest and warming", correct: false, critical: true, explanation: "Dismissing crushing chest pain with hemodynamic instability as vasovagal could delay life-saving STEMI treatment. This patient needs emergent cardiac evaluation.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Hypothermia-related bradycardia from prolonged cold exposure that should be treated with passive rewarming first", correct: false, critical: false, explanation: "While the patient is outdoors in cold weather, the acute onset of crushing chest pain with radiation is the primary concern. The bradycardia is likely cardiac in origin, not hypothermic.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What medication should be administered immediately at all provider levels for this patient with suspected acute coronary syndrome?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient confirms no aspirin allergies. He has not taken any medications today other than his morning prescriptions.",
        clinical_pearl: "Aspirin 324 mg chewed is indicated at ALL provider levels including CFR for suspected cardiac chest pain per NY protocol. It should not be enteric coated. Chewing accelerates absorption compared to swallowing whole.",
        options: [
          { text: "Aspirin 324 mg (four 81 mg tablets) chewed, confirming the patient has no aspirin allergy and is able to chew", correct: true, critical: false, explanation: "Per NY protocol, aspirin 324 mg chewed is indicated at CFR and all provider levels for suspected cardiac chest pain. This is a standing order regardless of certification level.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Nitroglycerin 0.4 mg sublingual to relieve the chest pain and reduce myocardial oxygen demand immediately", correct: false, critical: true, explanation: "Nitroglycerin requires SBP >120 mmHg per NY protocol. This patient's SBP is 92 mmHg — NTG could cause cardiovascular collapse, especially with suspected RV infarction.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Oral glucose paste to address the potential metabolic component of the presentation before giving other medications", correct: false, critical: false, explanation: "Blood glucose is 132 mg/dL (normal). Oral glucose is indicated for hypoglycemia (<60 mg/dL), not for cardiac chest pain.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Supplemental oxygen via non-rebreather mask at 15 LPM before administering any medications to the patient", correct: false, critical: false, explanation: "Oxygen therapy is indicated per protocol, but aspirin should not be delayed. Both can be initiated simultaneously. SpO₂ is 94%, making aspirin the higher priority.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The 12-lead ECG shows ST elevation in leads II, III, and aVF. Medical control confirms inferior STEMI. At the CC/Paramedic level, what additional ECG assessment should be performed?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The transmitted 12-lead shows clear ST elevation in the inferior leads. Medical control confirms STEMI activation. The patient remains bradycardic and hypotensive.",
        vitals_update: { hr: 52, bp: "88/54", rr: 24, spo2: 93 },
        clinical_pearl: "NY protocol specifically states to 'consider a right-sided ECG in the setting of a suspected inferior STEMI.' Right ventricular infarction occurs in up to 50% of inferior STEMIs and dramatically changes management — particularly making nitroglycerin and other preload reducers contraindicated.",
        options: [
          { text: "Perform a right-sided 12-lead ECG to evaluate for right ventricular involvement as recommended by NY protocol", correct: true, critical: false, explanation: "Per NY STEMI protocol key points, a right-sided ECG should be considered in the setting of suspected inferior STEMI to evaluate for RV involvement.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Perform a posterior 15-lead ECG to evaluate for posterior wall extension before making any transport decisions", correct: false, critical: false, explanation: "While a posterior ECG may provide additional information, the NY protocol specifically mentions right-sided ECG for inferior STEMI, which is the priority given the clinical picture.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Repeat the standard 12-lead ECG every 5 minutes during transport to monitor for rhythm changes or evolution", correct: false, critical: false, explanation: "While serial ECGs may be useful, the right-sided ECG is the specific next step recommended by NY protocol for inferior STEMI to identify RV involvement.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "No additional ECG assessment is needed since the inferior STEMI has already been confirmed by medical control", correct: false, critical: false, explanation: "A right-sided ECG provides critical information about RV involvement that directly impacts fluid management and medication decisions.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's SBP has dropped to 84 mmHg. He is increasingly diaphoretic and lightheaded. Which interventions are appropriate at the CC/Paramedic level? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "Right-sided ECG confirms RV involvement with ST elevation in V4R. The patient is worsening hemodynamically despite being supine.",
        vitals_update: { hr: 50, bp: "84/50", rr: 26, spo2: 92, gcs: 14 },
        clinical_pearl: "Right ventricular infarction is a preload-dependent state. The failing RV cannot adequately fill the left ventricle. Treatment is volume resuscitation with NS boluses. Nitroglycerin, morphine, and other preload reducers can cause cardiovascular collapse.",
        options: [
          { text: "Place the patient supine and administer normal saline 500 mL IV bolus to restore preload and improve cardiac output", correct: true, critical: false, explanation: "Per NY protocol, if SBP drops below 100 mmHg, place supine and consider NS 500 mL bolus. RV infarction is preload-dependent and responds to volume resuscitation.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Prepare defibrillation pads for application given the high risk of dysrhythmia in this acute STEMI patient", correct: true, critical: false, explanation: "Per NY STEMI protocol key points, consider placing defibrillation pads. STEMI patients, especially with bradycardia and hemodynamic instability, are at high risk for lethal dysrhythmias.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer nitroglycerin 0.4 mg sublingual since it is a standing order for ALS providers treating confirmed STEMI", correct: false, critical: true, explanation: "Nitroglycerin is absolutely contraindicated here — SBP is 84 (protocol requires >120) and RV infarction makes the patient extremely preload-dependent. NTG could cause cardiovascular collapse.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer furosemide 40 mg IV to treat the jugular venous distension and reduce right-sided cardiac preload", correct: false, critical: true, explanation: "The JVD is from RV failure, not fluid overload. Diuretics would drastically reduce preload and worsen hypotension — potentially fatal in RV infarction.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After 500 mL NS bolus, BP improves to 96/60. The patient reports worsening 10/10 chest pain. What is the appropriate pain management approach per NY protocol?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The fluid bolus has modestly improved hemodynamics. The patient is writhing in pain and increasingly anxious.",
        vitals_update: { hr: 58, bp: "96/60", spo2: 94, gcs: 15 },
        options: [
          { text: "Administer fentanyl per the pain management protocol with close monitoring given the borderline blood pressure", correct: true, critical: false, explanation: "Per NY protocol, see Pain Management as indicated for STEMI. Fentanyl is appropriate with SBP >100 (borderline at 96 — use clinical judgment and consider small doses with close monitoring).", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Administer nitroglycerin 0.4 mg sublingual now that the blood pressure has improved slightly above 90 mmHg systolic", correct: false, critical: true, explanation: "NY protocol requires SBP >120 mmHg for nitroglycerin. At 96 mmHg with confirmed RV infarction, nitroglycerin remains absolutely contraindicated.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Withhold all analgesics until the patient arrives at the cath lab to avoid masking evolving symptoms during transport", correct: false, critical: false, explanation: "Untreated pain increases catecholamine release and myocardial oxygen demand, potentially extending the infarct. Pain management is indicated per NY protocol.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Administer ketorolac 30 mg IV as an alternative to opioids to avoid respiratory depression in this unstable patient", correct: false, critical: false, explanation: "NSAIDs are avoided in acute MI due to increased cardiovascular risk and interference with antiplatelet therapy. Ketorolac is not appropriate here.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "With a confirmed STEMI and hemodynamic instability, what is the most appropriate transport decision per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is packaged. A community hospital is 7 minutes away. A PCI-capable cardiac center is 25 minutes away. The patient is currently hemodynamically fragile but stable after fluids.",
        clinical_pearl: "NY STEMI protocol strongly recommends transport to a facility capable of primary angioplasty if transport time is less than 90 minutes. Even with hemodynamic instability, direct transport to PCI avoids the delays inherent in inter-facility transfer and improves door-to-balloon times.",
        options: [
          { text: "Transport directly to the PCI-capable cardiac center 25 minutes away with early notification and continued resuscitation", correct: true, critical: false, explanation: "Per NY protocol, STEMI patients should be transported to a facility capable of primary angioplasty if within 90 minutes. The 25-minute transport is well within this window.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Transport to the community hospital 7 minutes away for initial stabilization followed by helicopter transfer later", correct: false, critical: false, explanation: "Inter-facility transfer adds significant delay to reperfusion. Direct transport to PCI is preferred when within the 90-minute window per NY protocol.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Remain on scene to continue fluid resuscitation until the blood pressure stabilizes above 100 mmHg before transport", correct: false, critical: true, explanation: "Do not delay transport for STEMI. Fluid resuscitation can continue en route. Time to reperfusion is the critical determinant of outcome.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Contact medical control to request which destination is appropriate since the patient is too unstable to make the decision", correct: false, critical: false, explanation: "While medical control can assist with destination decisions, NY protocol clearly directs STEMI patients to PCI-capable facilities within 90 minutes. This should not delay transport.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: 34F — Rapid Heart Rate, Dizzy (SVT)
  // ============================================================
  {
    id: "med-cardiac-03",
    title: "34F — Rapid Heart Rate, Dizzy",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "34-year-old female, rapid heart rate, feeling dizzy, conscious and breathing",
    patient: { age: 34, sex: "F", cc: "Palpitations and dizziness" },
    scene: "You arrive at an office building where a 34-year-old female is seated in a break room chair. She states her heart suddenly started 'racing' about 15 minutes ago while she was sitting at her desk. She feels dizzy and lightheaded but denies chest pain or shortness of breath. Coworkers state she appeared to nearly faint.",
    vitals: { hr: 188, bp: "108/72", rr: 20, spo2: 98, gcs: 15, temp: "98.2°F", bg: "96 mg/dL" },
    history: { pmh: "None significant, no prior cardiac history", meds: "Oral contraceptive pills only", allergies: "NKDA" },
    presentation: "Patient is alert, anxious, and complaining of a rapid fluttering sensation in her chest. Skin is warm, slightly diaphoretic. Radial pulse is very rapid and regular. She denies caffeine or stimulant use today. She states this has happened twice before but resolved on its own.",
    primary_protocol: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
    related_protocols: [
      "bls_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl",
      "als_altered_mental_status"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find a 34-year-old female with a heart rate of 188 bpm that started suddenly while at rest. She is alert with a BP of 108/72. What initial actions should you take? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient describes a sudden onset of palpitations. Her pulse is very rapid and perfectly regular. She has no cardiac history.",
        clinical_pearl: "Sudden onset of a regular, narrow complex tachycardia in a young, otherwise healthy patient is classic for supraventricular tachycardia (SVT). Sinus tachycardia typically has a gradual onset related to an underlying cause (fever, pain, dehydration) and rarely exceeds 150 bpm in a healthy young adult at rest.",
        options: [
          { text: "Perform ABCs, apply oxygen, and obtain vital signs as the first priority for this symptomatic tachycardia patient", correct: true, critical: false, explanation: "Per NY Narrow Complex Tachycardia protocol, ABCs, vital signs, and airway management with appropriate oxygen therapy are indicated at the CFR/EMT level.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Place the patient in a position of comfort and obtain a thorough history including onset characteristics and prior episodes", correct: true, critical: false, explanation: "Sudden onset of a very rapid, regular tachycardia with prior similar episodes is classic SVT. History is essential for narrowing the differential.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Immediately administer adenosine 6 mg IV push before applying the cardiac monitor since the heart rate is dangerously high", correct: false, critical: false, explanation: "Adenosine is a CC/Paramedic level medication and requires a cardiac monitor first. Additionally, the rhythm must be identified as regular narrow complex before administering adenosine.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Perform immediate synchronized cardioversion at 100 Joules since any heart rate above 180 requires electrical intervention", correct: false, critical: false, explanation: "Cardioversion is reserved for UNSTABLE patients per NY protocol. This patient is alert with adequate BP — she is STABLE and should receive medical therapy first.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The cardiac monitor confirms a narrow complex, regular tachycardia at 188 bpm with no discernible P waves. At the AEMT level, what intervention should be considered while awaiting CC/Paramedic level care?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "ALS is en route but 8 minutes away. You have IV supplies and the patient is cooperative.",
        clinical_pearl: "NY Narrow Complex Tachycardia protocol directs AEMTs to establish vascular access and consider normal saline if tachycardia may be due to dehydration/hypovolemia. However, this patient's sudden onset without an obvious trigger makes dehydration unlikely — SVT is the probable diagnosis.",
        options: [
          { text: "Establish vascular access and consider normal saline only if there is concern for dehydration or hypovolemia as a cause", correct: true, critical: false, explanation: "Per NY protocol at the AEMT level: vascular access and consider NS 500 mL bolus if tachycardia may be due to dehydration/hypovolemia. IV access also prepares for adenosine administration.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer adenosine 6 mg rapid IV push since the rhythm has been identified as SVT on the cardiac monitor display", correct: false, critical: false, explanation: "Adenosine administration is a CC/Paramedic level intervention per NY protocol. AEMTs should establish vascular access and prepare for ALS arrival.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer a 2-liter normal saline bolus to rapidly expand intravascular volume and slow the heart rate reflexively", correct: false, critical: false, explanation: "A 2L bolus is excessive for a patient without clear dehydration. The protocol allows 500 mL, repeatable up to 2L if lung sounds remain clear and there's concern for hypovolemia.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Instruct the patient to perform a Valsalva maneuver by bearing down forcefully to attempt to break the tachycardia rhythm", correct: false, critical: false, explanation: "While vagal maneuvers can terminate SVT, per NY protocol they are listed under CC/Paramedic standing orders for narrow complex tachycardia, not at the AEMT level.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The cardiac monitor confirms a narrow complex, regular tachycardia at 188 bpm. The patient is alert with BP 108/72. Per NY protocol, does this patient meet criteria for STABLE or UNSTABLE?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The monitor shows a narrow complex regular tachycardia without discernible P waves. The patient remains alert and conversant but feels dizzy when she tries to stand.",
        clinical_pearl: "NY protocol defines UNSTABLE as 'significant cardio-respiratory compromise, hypotension, or altered level of consciousness.' This patient is alert (no AMS), normotensive at 108/72 (not hypotensive), and breathing comfortably — she is STABLE despite being symptomatic.",
        options: [
          { text: "STABLE — she is alert, normotensive, and without significant cardio-respiratory compromise despite her symptoms", correct: true, critical: false, explanation: "Per NY protocol, UNSTABLE includes significant cardio-respiratory compromise, hypotension, or altered LOC. This patient meets none of these criteria — she is STABLE.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "UNSTABLE — any heart rate above 150 bpm with symptoms automatically classifies the patient as hemodynamically unstable", correct: false, critical: false, explanation: "Heart rate alone does not determine stability. NY protocol specifically defines UNSTABLE as significant cardio-respiratory compromise, hypotension, or altered LOC.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "UNSTABLE — the dizziness and near-syncope episode indicate altered level of consciousness requiring immediate cardioversion", correct: false, critical: false, explanation: "Dizziness alone does not constitute altered LOC. The patient is alert, oriented, and conversant. Near-syncope is a symptom, not the same as AMS.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Neither — stability classification only applies to patients over 50 years old with underlying cardiac disease present", correct: false, critical: false, explanation: "Stability classification applies to all patients with tachycardia regardless of age. It determines the treatment pathway per NY protocol.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "For this STABLE patient with a regular narrow complex tachycardia, what is the correct first-line treatment per NY protocol at the CC/Paramedic level?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The patient remains stable. You have IV access established in the right antecubital fossa with a large-bore catheter and saline lock.",
        options: [
          { text: "Attempt a vagal maneuver first, then administer adenosine 6 mg rapid IV push with a saline flush if unsuccessful", correct: true, critical: false, explanation: "Per NY Narrow Complex Tachycardia protocol for STABLE regular rhythm: vagal maneuver first, then adenosine 6 mg IV with rapid saline flush if needed.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer diltiazem 0.25 mg/kg IV infused over 2 minutes as the first-line medication for narrow complex tachycardia", correct: false, critical: false, explanation: "Per NY protocol, diltiazem is indicated for STABLE IRREGULAR narrow complex tachycardia (like rapid AFib), not for STABLE REGULAR rhythms. Vagal maneuvers and adenosine come first for regular SVT.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Perform synchronized cardioversion starting at 100 Joules after procedural sedation for this symptomatic tachycardia", correct: false, critical: false, explanation: "Synchronized cardioversion is reserved for UNSTABLE regular narrow complex tachycardia per NY protocol. This patient is STABLE and should receive vagal maneuvers and adenosine first.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer amiodarone 150 mg in 100 mL normal saline infused over 10 minutes to chemically convert the rhythm", correct: false, critical: false, explanation: "Amiodarone is a medical control consideration for narrow complex tachycardia, not a first-line standing order. Vagal maneuvers and adenosine are the correct first steps.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The vagal maneuver is unsuccessful. You administer adenosine 6 mg rapid IV push. After a brief pause, the tachycardia resumes at 184 bpm. What is your next intervention per NY protocol?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "After the 6 mg adenosine push, the monitor briefly shows sinus rhythm for about 3 seconds before the SVT reinitializes. The patient felt a 'heavy' sensation in her chest momentarily.",
        vitals_update: { hr: 184, bp: "104/68", rr: 20, spo2: 97 },
        clinical_pearl: "The brief conversion to sinus rhythm confirms the diagnosis of SVT (re-entrant tachycardia). If 6 mg adenosine fails, NY protocol allows a repeat dose of 12 mg IV. Adenosine has a half-life of less than 10 seconds, which is why it must be given as a rapid push with an immediate saline flush.",
        options: [
          { text: "Administer adenosine 12 mg rapid IV push with a saline flush as the protocol-specified repeat dose for SVT", correct: true, critical: false, explanation: "Per NY protocol for STABLE regular narrow complex tachycardia, if adenosine 6 mg fails, repeat with adenosine 12 mg IV with rapid saline flush.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Proceed directly to synchronized cardioversion at 100 Joules since the adenosine failed to achieve sustained conversion", correct: false, critical: false, explanation: "The patient remains STABLE. NY protocol allows a second adenosine dose of 12 mg before escalating. Cardioversion is for UNSTABLE patients.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer a second dose of adenosine 6 mg rapid IV push since the first dose showed a brief response to treatment", correct: false, critical: false, explanation: "NY protocol specifies the repeat dose as 12 mg, not another 6 mg. The dose escalation is part of the standard SVT treatment algorithm.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer metoprolol 5 mg slow IV push as an alternative rate-control agent since adenosine was only temporarily effective", correct: false, critical: false, explanation: "Per NY protocol, metoprolol is not indicated as a next step after adenosine failure in regular narrow complex tachycardia. The repeat adenosine dose at 12 mg should be tried next.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After adenosine 12 mg, the rhythm converts to normal sinus rhythm at 82 bpm. The patient feels dramatically better. What ongoing care is appropriate? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient sighs with relief and states she feels 'completely normal' now. Her color improves immediately and dizziness resolves.",
        vitals_update: { hr: 82, bp: "118/76", rr: 16, spo2: 99, gcs: 15 },
        options: [
          { text: "Obtain a 12-lead ECG now that the patient is in sinus rhythm to evaluate for underlying conduction abnormalities", correct: true, critical: false, explanation: "Per NY protocol, 12-lead ECG should be obtained when possible. A post-conversion ECG may reveal WPW or other pre-excitation syndromes that cause recurrent SVT.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Continue cardiac monitoring during transport with frequent reassessment for recurrence of the tachycardia", correct: true, critical: false, explanation: "SVT can recur. Continuous cardiac monitoring and reassessment during transport is essential standard of care.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Discontinue cardiac monitoring and cancel transport since the rhythm has converted and the patient feels completely well", correct: false, critical: true, explanation: "SVT recurrence is common. The patient needs hospital evaluation to determine the underlying cause and receive appropriate follow-up. Transport should not be cancelled.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" },
          { text: "Administer a prophylactic dose of diltiazem IV to prevent the SVT from recurring during transport to the hospital", correct: false, critical: false, explanation: "Prophylactic diltiazem is not indicated in the NY protocol after successful conversion of SVT with adenosine. It may be considered if tachycardia is recurrent but not prophylactically.", protocol_ref: "als_cardiac_related_problem_chest_pain_adult_for_pediatric_see_cardiac_related_probl" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: 82F — Difficulty Speaking, Drooling (Posterior Circulation Stroke)
  // ============================================================
  {
    id: "med-neuro-02",
    title: "82F — Difficulty Speaking, Drooling",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "82-year-old female, difficulty speaking and drooling, conscious and breathing, assisted living facility",
    patient: { age: 82, sex: "F", cc: "Difficulty speaking, drooling, unsteady" },
    scene: "You arrive at an assisted living facility where staff reports an 82-year-old female was found having difficulty speaking and drooling at breakfast. She was her normal self when she went to bed last night at 9 PM. Staff noticed the changes this morning at 7:30 AM. She is currently seated in a wheelchair, leaning to the left.",
    vitals: { hr: 78, bp: "168/92", rr: 18, spo2: 95, gcs: 14, temp: "98.4°F", bg: "108 mg/dL" },
    history: { pmh: "Atrial fibrillation, hypertension, osteoporosis, mild dementia", meds: "Apixaban, metoprolol, alendronate, donepezil", allergies: "Codeine" },
    presentation: "Patient has dysarthria (slurred but comprehensible speech), drooling from the left side of her mouth, and pronounced vertigo. She reports the room is 'spinning.' She is unable to maintain balance when sitting unsupported and leans to the left. Her gait is markedly ataxic. No obvious facial droop or arm weakness on Cincinnati Scale testing.",
    primary_protocol: "als_stroke",
    related_protocols: [
      "bls_stroke",
      "als_altered_mental_status",
      "als_general_approach_to_transportation"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "The Cincinnati Stroke Scale shows no clear facial droop, no arm drift, and speech is slurred but words are correct. However, the patient has vertigo, ataxia, and dysarthria. What should you suspect?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Staff insists 'something is very wrong' with the patient. She cannot sit up straight and keeps complaining of severe dizziness. The Cincinnati Scale is essentially negative.",
        clinical_pearl: "Posterior circulation strokes (vertebrobasilar) often present with vertigo, ataxia, dysarthria, diplopia, and dysphagia — symptoms that may NOT trigger a positive Cincinnati Stroke Scale. The Cincinnati Scale primarily detects anterior circulation (MCA) strokes. A negative stroke scale does NOT rule out stroke.",
        options: [
          { text: "Posterior circulation stroke presenting with vertigo, ataxia, and dysarthria that is not well detected by the Cincinnati Scale", correct: true, critical: false, explanation: "The combination of vertigo, ataxia, dysarthria, and drooling in an 82-year-old with AFib is highly concerning for posterior circulation stroke, which the Cincinnati Scale frequently misses.", protocol_ref: "als_stroke" },
          { text: "Benign positional vertigo which is common in elderly patients and explains all of the symptoms being presented today", correct: false, critical: true, explanation: "BPPV does not cause dysarthria, drooling, or ataxia. Attributing these focal neurological findings to a benign condition in a high-risk patient could delay critical stroke care.", protocol_ref: "als_stroke" },
          { text: "Medication side effect from the donepezil causing dizziness and gastrointestinal symptoms including increased salivation", correct: false, critical: false, explanation: "While donepezil can cause GI side effects, the acute onset of vertigo, ataxia, and dysarthria together represent focal neurological deficits suggesting a vascular event.", protocol_ref: "als_stroke" },
          { text: "Inner ear infection causing labyrinthitis which would fully explain the vertigo, imbalance, and difficulty with speech", correct: false, critical: false, explanation: "Labyrinthitis causes vertigo but not dysarthria or truncal ataxia. The combination of symptoms in this high-risk patient warrants stroke assessment, not an infectious diagnosis.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient's Last Known Well is 9 PM last night (approximately 10.5 hours ago). How does this affect your transport decision per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Staff confirms she was completely normal at bedtime. No one checked on her between 9 PM and 7:30 AM. The LKW must be recorded as 9 PM.",
        vitals_update: { hr: 80, bp: "172/94", rr: 18, spo2: 95 },
        clinical_pearl: "When the exact onset is unknown (e.g., 'wake-up stroke'), the LKW is the last time the patient was witnessed to be normal. At 10.5 hours, this patient is outside the 3.5-hour tPA window. However, she may still be a candidate for endovascular thrombectomy (up to 24 hours in select patients). NY protocol includes following regional guidelines for triage to centers with endovascular capabilities.",
        options: [
          { text: "Transport to a stroke center with endovascular capabilities per regional guidelines since the tPA window has likely passed", correct: true, critical: false, explanation: "Per NY Stroke protocol, follow local or regional guidelines for triage to centers with endovascular capabilities. At 10.5 hours from LKW, tPA is not an option but thrombectomy may be.", protocol_ref: "als_stroke" },
          { text: "Transport to the nearest hospital since the patient is outside the 3.5-hour treatment window and no longer time-sensitive", correct: false, critical: true, explanation: "While outside the tPA window, mechanical thrombectomy can be performed up to 24 hours in select patients. NY protocol directs providers to follow regional guidelines for endovascular triage.", protocol_ref: "als_stroke" },
          { text: "Delay transport to perform a complete neurological exam on scene to determine if this is truly a stroke or just vertigo", correct: false, critical: true, explanation: "NY Stroke protocol explicitly states 'Do not delay transport.' Differentiation between stroke and benign causes requires hospital imaging — it cannot be determined in the field.", protocol_ref: "als_stroke" },
          { text: "Contact medical control to report that the Cincinnati Scale is negative and request permission to downgrade the response", correct: false, critical: false, explanation: "A negative Cincinnati Scale does not rule out stroke. The patient has clear focal neurological deficits (vertigo, ataxia, dysarthria) that warrant stroke center transport and early notification.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What critical information should be collected and documented for the receiving hospital? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You are preparing to transport. The facility nurse has the patient's medication list and recent medical records available.",
        options: [
          { text: "Last Known Well time and the identity of the person who last witnessed the patient in her normal state of health", correct: true, critical: false, explanation: "Per NY Stroke protocol, document the LKW and who reported it. This is essential for the stroke team's treatment decisions.", protocol_ref: "als_stroke" },
          { text: "Current anticoagulant medication name and dosage since the patient is on apixaban which affects treatment options", correct: true, critical: false, explanation: "Anticoagulant status is critical for the stroke team. Apixaban affects thrombolytic eligibility and may require reversal agent (andexanet alfa) at the hospital.", protocol_ref: "als_stroke" },
          { text: "Family or witness contact information to assist the hospital care team with additional history and consent decisions", correct: true, critical: false, explanation: "Per NY Stroke protocol, collecting family or witness contact information to assist with hospital care is specifically recommended.", protocol_ref: "als_stroke" },
          { text: "A detailed assessment of all twelve cranial nerves to provide the neurologist with a complete baseline examination", correct: false, critical: false, explanation: "A complete cranial nerve exam is beyond prehospital scope and would delay transport. The Cincinnati Scale and focused neuro assessment are appropriate.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC/Paramedic level, the patient's BP is 172/94. Should you treat the blood pressure per NY Stroke protocol?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The patient is on the stretcher. Cardiac monitor shows atrial fibrillation at 80 bpm. BP is 172/94 on recheck.",
        clinical_pearl: "NY Stroke protocol directs providers to maintain SBP >120 mmHg. Contact medical control only if SBP >220 or DBP >120. The body deliberately elevates BP during acute stroke to maintain perfusion to ischemic tissue through collateral circulation (the 'ischemic penumbra').",
        options: [
          { text: "Do not treat — the BP of 172/94 does not meet the threshold of SBP greater than 220 or DBP greater than 120 per protocol", correct: true, critical: false, explanation: "Per NY Stroke protocol, antihypertensive intervention is considered only for SBP >220 or DBP >120, and only via medical control order. This patient's BP is below both thresholds.", protocol_ref: "als_stroke" },
          { text: "Administer metoprolol 5 mg slow IV push to reduce the blood pressure below 160/90 to reduce hemorrhage risk", correct: false, critical: true, explanation: "Lowering BP in acute stroke can extend the infarct by reducing collateral perfusion. NY protocol only considers antihypertensives for SBP >220 or DBP >120, and only via medical control.", protocol_ref: "als_stroke" },
          { text: "Administer a normal saline 500 mL bolus to improve cerebral perfusion since the blood pressure is not high enough", correct: false, critical: false, explanation: "NS bolus for BP augmentation is considered when SBP <120 per protocol. At 172/94, the patient's BP is adequate and does not require augmentation.", protocol_ref: "als_stroke" },
          { text: "Contact medical control to request permission to administer nitroglycerin sublingual to reduce the blood pressure safely", correct: false, critical: false, explanation: "Nitroglycerin is not part of the stroke protocol and could cause unpredictable BP drops. Only metoprolol is listed as a medical control consideration for stroke hypertension.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "transport",
        prompt: "At the CC/Paramedic level, what monitoring and interventions should be initiated for transport? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "The patient is loaded in the ambulance. She continues to have significant vertigo and ataxia with dysarthria. Her atrial fibrillation is rate-controlled at 80 bpm.",
        options: [
          { text: "Cardiac monitor with 12-lead ECG to evaluate for dysrhythmias and identify any acute cardiac changes", correct: true, critical: false, explanation: "Per NY Stroke protocol at the CC/Paramedic level, cardiac monitor and 12-lead ECG when possible are indicated. The patient's AFib also warrants continuous monitoring.", protocol_ref: "als_stroke" },
          { text: "Maintain systolic BP above 120 mmHg and notify the destination hospital as soon as possible about the stroke patient", correct: true, critical: false, explanation: "Per NY Stroke protocol, maintain SBP >120 mmHg or MAP >90 mmHg, and notify the destination hospital ASAP. Early notification is specifically emphasized.", protocol_ref: "als_stroke" },
          { text: "Administer aspirin 324 mg chewed since atrial fibrillation with new neurological deficits likely represents an embolic stroke", correct: false, critical: true, explanation: "Aspirin is contraindicated in acute stroke — the patient may have a hemorrhagic stroke. Aspirin is for suspected cardiac events per NY protocol, not stroke.", protocol_ref: "als_stroke" },
          { text: "Administer diltiazem IV to achieve rate control of the atrial fibrillation below 60 bpm to reduce embolic risk", correct: false, critical: false, explanation: "The patient's AFib is already rate-controlled at 80 bpm. Aggressive rate control is not indicated and could cause hypotension, worsening cerebral perfusion.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient vomits and has difficulty managing her secretions. Her SpO₂ drops to 89%. What is your immediate priority?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient suddenly vomits a moderate amount. She is having trouble swallowing and her oxygen saturation is dropping rapidly.",
        vitals_update: { hr: 86, bp: "164/90", rr: 24, spo2: 89, gcs: 12 },
        clinical_pearl: "Posterior circulation strokes frequently impair swallowing (dysphagia) and protective reflexes. Aspiration is a major complication. Airway management and appropriate oxygen therapy is the first step at ALL provider levels per NY Stroke protocol. Position the patient to protect the airway.",
        options: [
          { text: "Suction the airway, position the patient laterally to prevent aspiration, and provide supplemental oxygen immediately", correct: true, critical: false, explanation: "Per NY Stroke protocol, airway management and appropriate oxygen therapy is the first priority at all provider levels. Suctioning and positioning to protect the airway are essential.", protocol_ref: "als_stroke" },
          { text: "Administer ondansetron 4 mg IV to stop the vomiting before addressing the airway or oxygen saturation concerns", correct: false, critical: true, explanation: "Airway protection takes absolute priority over antiemetic therapy. Treating nausea while the patient is actively aspirating could be fatal.", protocol_ref: "als_stroke" },
          { text: "Immediately intubate the patient to provide definitive airway protection given the declining level of consciousness", correct: false, critical: false, explanation: "Basic airway maneuvers (suction, positioning, supplemental O₂) should be attempted first. Intubation may be needed but is not the immediate first action.", protocol_ref: "als_stroke" },
          { text: "Increase the transport speed and request a lights-and-siren response since the patient is now clinically deteriorating", correct: false, critical: false, explanation: "While rapid transport is important, the immediate priority is managing the airway. Increasing speed without securing the airway first is inappropriate.", protocol_ref: "als_stroke" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: 47M — Diabetic Found on Floor (Hypoglycemia vs Stroke)
  // ============================================================
  {
    id: "med-endo-01",
    title: "47M — Diabetic Found on Floor",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "47-year-old male, diabetic, found on floor, altered mental status",
    patient: { age: 47, sex: "M", cc: "Found unresponsive on floor" },
    scene: "You arrive at an apartment where a 47-year-old male is found lying on the kitchen floor by his roommate. The roommate states the patient is a type 1 diabetic and was fine when he left for work this morning. He returned to find the patient on the floor, confused and mumbling. An insulin pen is noted on the kitchen counter next to an uneaten lunch.",
    vitals: { hr: 112, bp: "148/88", rr: 22, spo2: 97, gcs: 10, temp: "98.0°F", bg: "28 mg/dL" },
    history: { pmh: "Type 1 diabetes mellitus, hypertension", meds: "Insulin glargine, insulin lispro, lisinopril", allergies: "NKDA" },
    presentation: "Patient is diaphoretic, confused, and combative when stimulated. He opens eyes to voice, makes incomprehensible sounds, and withdraws from pain. His skin is pale, cool, and clammy. Right-sided weakness is noted — right arm appears weaker and right facial droop is subtle. Pupils are equal and reactive.",
    primary_protocol: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric",
    related_protocols: [
      "bls_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric",
      "als_stroke",
      "als_altered_mental_status"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You find a 47-year-old diabetic male on the floor with altered mental status and an insulin pen nearby. He has right-sided weakness and facial droop. What are your priority actions? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The roommate is concerned about a stroke because of the facial droop. The patient is diaphoretic and combative.",
        clinical_pearl: "Hypoglycemia can mimic stroke with focal neurological deficits including hemiparesis, facial droop, and aphasia. NY protocols for BOTH stroke and altered mental status direct providers to check blood glucose. Hypoglycemia must be identified and treated before attributing deficits to stroke — it is a rapidly reversible cause.",
        options: [
          { text: "Check blood glucose level immediately since both the stroke and altered mental status protocols require glucose assessment", correct: true, critical: false, explanation: "Per NY Stroke protocol and AMS protocol, check blood glucose. If below 60 mg/dL, treat per hypoglycemia protocol. This patient's insulin pen suggests hypoglycemia as a likely cause.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Ensure airway management and appropriate oxygen therapy as the first step for any patient with altered mental status", correct: true, critical: false, explanation: "Per NY Altered Mental Status protocol, airway management and appropriate oxygen therapy is indicated at all provider levels as a first priority.", protocol_ref: "als_altered_mental_status" },
          { text: "Administer naloxone 2 mg intranasal since the patient is found down with altered mental status and could be opioid-related", correct: false, critical: false, explanation: "The clinical picture (diabetic, insulin pen, diaphoresis, tachycardia) points to hypoglycemia, not opioid overdose. Glucose check is the appropriate first assessment step.", protocol_ref: "als_altered_mental_status" },
          { text: "Activate a stroke alert and begin immediate transport to a stroke center without checking glucose based on the focal deficits", correct: false, critical: false, explanation: "While the focal deficits raise stroke concern, glucose must be checked first. Hypoglycemia causes reversible focal deficits that mimic stroke. NY stroke protocol specifically directs glucose assessment.", protocol_ref: "als_stroke" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Blood glucose reads 28 mg/dL. The patient cannot follow commands or swallow on command. At the EMT level, what is the correct action per NY protocol?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "You confirm BG of 28 mg/dL. The patient opens eyes to voice but cannot follow commands and is unable to swallow reliably.",
        clinical_pearl: "NY Hypoglycemia protocol is clear: if glucose is below 60 mg/dL and the patient CANNOT swallow on command, do NOT administer oral glucose. Begin transport immediately for EMTs. ALS providers can administer IV dextrose or IM glucagon.",
        options: [
          { text: "Do not give oral glucose since the patient cannot swallow on command — begin transport and request ALS intercept if available", correct: true, critical: false, explanation: "Per NY Hypoglycemia protocol at the EMT level: if the patient is unable to swallow on command, do not administer oral glucose and begin transport. ALS intercept should be requested.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer oral glucose paste inside the cheek since the blood glucose is critically low and treatment cannot be delayed", correct: false, critical: true, explanation: "NY protocol explicitly states: if the patient is unable to swallow on command, do NOT administer oral glucose. Aspiration risk in a patient with GCS 10 is significant.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer aspirin 324 mg chewed and initiate the stroke protocol since the focal neurological deficits indicate stroke", correct: false, critical: true, explanation: "With a BG of 28, hypoglycemia is the most likely cause of the deficits. Treating for stroke without correcting hypoglycemia first is inappropriate. Aspirin is not indicated for stroke.", protocol_ref: "als_stroke" },
          { text: "Place a nasopharyngeal airway and begin bag-valve-mask ventilation since the altered mental status indicates respiratory failure", correct: false, critical: false, explanation: "The patient's respirations (RR 22, SpO₂ 97%) are adequate. Airway adjuncts may be considered if there's a concern for airway compromise, but BVM ventilation is not indicated.", protocol_ref: "als_altered_mental_status" }
        ]
      },
      {
        phase: "treatment",
        prompt: "ALS arrives on scene. At the AEMT/CC/Paramedic level, what is the appropriate treatment for this patient's blood glucose of 28 mg/dL?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "ALS has arrived and established IV access. The patient remains confused with GCS 10 and BG 28 mg/dL.",
        options: [
          { text: "Administer dextrose 10% up to 25 grams (250 mL) IV, which may be redosed once if hypoglycemia recurs after treatment", correct: true, critical: false, explanation: "Per NY Hypoglycemia protocol for ALS: administer Dextrose 10% up to 25 grams (250 mL) IV if glucose <60 and patient cannot swallow. May redose once if hypoglycemia recurs.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer dextrose 50% one amp (25 grams) IV push as a single rapid bolus to correct the hypoglycemia quickly", correct: false, critical: false, explanation: "NY protocol specifies Dextrose 10%, not D50. D10 is the current standard as it is less caustic to veins and allows better titration.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer glucagon 1 mg IV push as the preferred first-line treatment for severe hypoglycemia with altered consciousness", correct: false, critical: false, explanation: "Per NY protocol, glucagon 1 mg IM is considered only if unable to obtain vascular access. Dextrose 10% IV is the preferred treatment when IV access is available.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer a normal saline 1000 mL bolus with 10 units of regular insulin to stabilize the blood glucose level gradually", correct: false, critical: true, explanation: "Insulin would worsen hypoglycemia and could be fatal. The patient needs glucose, not insulin. This BG of 28 requires dextrose administration.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "IV access is difficult due to the patient's combativeness. After two failed attempts, what is the alternative route for glucose administration per NY protocol?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "The patient is thrashing and pulled out your first IV attempt. His veins are difficult to access. BG remains 28 mg/dL and he is deteriorating.",
        clinical_pearl: "NY Hypoglycemia protocol states: 'If unable to obtain vascular access, consider Glucagon 1 mg IM.' Glucagon stimulates hepatic glycogenolysis and takes 10-15 minutes to work — slower than IV dextrose but a critical alternative when IV access fails.",
        options: [
          { text: "Administer glucagon 1 mg intramuscular as the protocol-specified alternative when vascular access cannot be obtained", correct: true, critical: false, explanation: "Per NY Hypoglycemia protocol: if unable to obtain vascular access, consider Glucagon 1 mg IM. This is the specified alternative route.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer oral glucose paste buccally since some absorption will occur even if the patient cannot swallow on command", correct: false, critical: true, explanation: "NY protocol explicitly prohibits oral glucose in patients who cannot swallow on command due to aspiration risk. This patient has a GCS of 10.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer dextrose 10% rectally as an alternative absorption route that bypasses the need for IV access entirely", correct: false, critical: false, explanation: "Rectal dextrose administration is not part of the NY protocol. The specified alternative to IV dextrose is glucagon 1 mg IM.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Administer epinephrine 1:1,000 intramuscular to stimulate gluconeogenesis and raise blood glucose through catecholamine response", correct: false, critical: false, explanation: "Epinephrine is not indicated for hypoglycemia per NY protocol. Glucagon IM is the specified alternative when IV access cannot be obtained.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After D10 administration, the patient's BG rises to 94 mg/dL. He becomes alert, oriented, and his right-sided weakness and facial droop have completely resolved. What does this indicate?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Within 5 minutes of dextrose administration, the patient is sitting up, talking clearly, and asking what happened. All focal neurological deficits have resolved.",
        vitals_update: { hr: 88, bp: "132/78", rr: 16, spo2: 99, gcs: 15, bg: "94 mg/dL" },
        clinical_pearl: "Complete resolution of focal neurological deficits after glucose correction confirms that the deficits were caused by neuroglycopenia (brain glucose deprivation), not stroke. However, the patient should still be transported — hypoglycemia can recur, especially with long-acting insulin like glargine.",
        options: [
          { text: "The focal deficits were caused by severe hypoglycemia mimicking stroke, and the patient should still be transported for monitoring", correct: true, critical: false, explanation: "Resolution of deficits with glucose correction confirms hypoglycemia as the cause. Transport is still indicated because recurrence is likely with long-acting insulin (glargine) on board.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "The patient had a transient ischemic attack that coincidentally resolved at the same time as the glucose correction occurred", correct: false, critical: false, explanation: "The temporal correlation between glucose correction and deficit resolution strongly indicates hypoglycemia was the cause, not coincidental TIA resolution.", protocol_ref: "als_stroke" },
          { text: "The patient is now completely fine and may sign a refusal since all symptoms have resolved and glucose is normalized", correct: false, critical: false, explanation: "Per NY protocol, if medications were administered, regional procedure may require medical control contact before refusal. Long-acting insulin makes recurrence likely.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "The dextrose treated the stroke symptoms directly by providing neuroprotective glucose to the ischemic brain tissue areas", correct: false, critical: false, explanation: "Dextrose does not treat stroke. The resolution of deficits indicates they were caused by hypoglycemia, not ischemia. These are distinct pathophysiologic processes.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "The patient states he feels fine and wants to refuse transport. He is on insulin glargine (long-acting) and insulin lispro. Per NY protocol, what is required before accepting a refusal?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is fully alert and oriented, ambulatory, and insisting he just needs to eat lunch. His roommate is present and willing to monitor him.",
        options: [
          { text: "Contact medical control per regional procedure since medications were administered, especially given the long-acting insulin risk", correct: true, critical: false, explanation: "Per NY Hypoglycemia protocol, if medications were administered, regional procedure may require medical control contact before completing a refusal. The long-acting insulin is a particular concern.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Accept the refusal immediately since the patient is now competent and alert with a normal glucose level and intact capacity", correct: false, critical: false, explanation: "NY protocol specifically notes medical control consultation may be required when medications have been administered, particularly with oral glycemic medications or other concerns.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Refuse to allow the patient to sign out since all hypoglycemic patients must be transported regardless of their preference", correct: false, critical: false, explanation: "Patients with capacity have the right to refuse transport. However, the protocol requires appropriate consultation and documentation before accepting a refusal.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" },
          { text: "Transport the patient against his will since the focal neurological deficits indicate he may have had a stroke as well", correct: false, critical: false, explanation: "The focal deficits resolved with glucose correction, confirming hypoglycemia as the cause. Forced transport is not appropriate for a competent, refusing patient.", protocol_ref: "als_hypoglycemia_adult_for_pediatric_see_hypoglycemia_pediatric" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 6: 16F — Abdominal Pain, Fainted at School (Ectopic Pregnancy)
  // ============================================================
  {
    id: "med-gyn-01",
    title: "16F — Abdominal Pain, Fainted at School",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "16-year-old female, abdominal pain and syncope at school, conscious and breathing",
    patient: { age: 16, sex: "F", cc: "Lower abdominal pain and syncope" },
    scene: "You arrive at a high school nurse's office where a 16-year-old female is lying on a cot. The school nurse reports the student fainted in the hallway between classes. She regained consciousness quickly but is complaining of severe lower abdominal pain, predominantly on the right side. She appears pale and is curled up holding her abdomen.",
    vitals: { hr: 118, bp: "94/62", rr: 22, spo2: 98, gcs: 15, temp: "98.6°F", bg: "102 mg/dL" },
    history: { pmh: "None reported", meds: "None reported", allergies: "NKDA" },
    presentation: "Patient is pale, diaphoretic, and in obvious distress. She reports severe sharp right lower quadrant pain that started gradually this morning and has worsened. She denies any possibility of pregnancy when asked. She states her last menstrual period was 'a couple months ago' but says her periods are 'always irregular.' The school nurse notes the patient appears more pale than when she first arrived.",
    primary_protocol: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
    related_protocols: [
      "bls_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "als_childbirth_obstetrics",
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric",
      "als_general_approach_to_transportation"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "A 16-year-old female presents with syncope, right lower abdominal pain, tachycardia at 118, and BP 94/62. She denies any possibility of pregnancy. What condition must remain high on your differential despite her denial?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient becomes uncomfortable when asked about pregnancy and firmly denies sexual activity. Her friend is present in the room.",
        clinical_pearl: "Ectopic pregnancy must always be considered in any female of reproductive age presenting with abdominal pain and signs of shock — regardless of stated sexual history. Adolescents frequently deny sexual activity, especially in front of school staff and peers. A missed period, syncope, tachycardia, and hypotension are classic for ruptured ectopic pregnancy.",
        options: [
          { text: "Ectopic pregnancy with possible rupture given her age, missed period, syncope, abdominal pain, and signs of hypovolemic shock", correct: true, critical: false, explanation: "The combination of reproductive age, missed period, syncope, RLQ pain, tachycardia, and hypotension is classic for ruptured ectopic pregnancy — regardless of the patient's denial of pregnancy.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Acute appendicitis since right lower quadrant pain with fever and syncope is the most common surgical emergency in adolescents", correct: false, critical: false, explanation: "Appendicitis is possible but does not typically present with hypotension and tachycardia this early. The patient is afebrile. Ectopic pregnancy must be considered first in reproductive-age females.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Vasovagal syncope from menstrual cramps since she reports irregular periods and the pain started gradually this morning", correct: false, critical: true, explanation: "Dismissing this as menstrual cramps ignores the hemodynamic instability (HR 118, BP 94/62). Tachycardia and hypotension with abdominal pain suggest internal hemorrhage until proven otherwise.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Ovarian torsion which is the only condition that causes syncope with abdominal pain in adolescent females without pregnancy", correct: false, critical: false, explanation: "While ovarian torsion is possible, it is not the only cause. Ectopic pregnancy with rupture is more concerning given the hemodynamic instability and missed period.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You attempt to gather more history. The patient is reluctant to answer questions about her menstrual and sexual history with the school nurse and her friend present. How should you handle this?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient keeps looking at her friend and the school nurse when you ask about her last period. She appears uncomfortable and gives vague answers.",
        clinical_pearl: "Adolescents are far more likely to provide accurate reproductive and sexual history when interviewed privately. Removing peers and authority figures from the room is a basic but critical interview technique. HIPAA protections apply to minors regarding reproductive health in many situations.",
        options: [
          { text: "Politely ask the friend and school nurse to step out briefly so you can complete a private patient assessment", correct: true, critical: false, explanation: "Creating a private environment is essential for obtaining accurate reproductive history from adolescent patients. She may provide critical information without peers and authority figures present.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Accept her denial of pregnancy at face value and focus your assessment entirely on non-gynecological causes of pain", correct: false, critical: true, explanation: "Accepting the denial without attempting a private interview could lead to missing a life-threatening ectopic pregnancy. The hemodynamic instability demands a thorough differential.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Ask the school nurse to call the patient's parents to obtain an accurate sexual and menstrual history by telephone", correct: false, critical: false, explanation: "Parents may not have this information, and involving them over the phone may further inhibit the patient. A private interview with the patient is more appropriate and faster.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Directly confront the patient about the possibility of pregnancy in front of everyone since time is critical and she needs treatment", correct: false, critical: false, explanation: "Confronting an adolescent about sexual activity in front of peers and authority figures will likely produce more denial and damage rapport. A private interview is more effective.", protocol_ref: "als_general_approach_to_the_patient" }
        ]
      },
      {
        phase: "assessment",
        prompt: "In private, the patient tearfully admits she might be pregnant. Her vitals now show HR 126 and BP 88/56. She is becoming more pale. What does this hemodynamic trend indicate?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Once alone, the patient reveals she had unprotected intercourse about 7 weeks ago and has missed two periods. She is terrified and begging you not to tell anyone. Her pain is worsening.",
        vitals_update: { hr: 126, bp: "88/56", rr: 24, spo2: 97, gcs: 15 },
        clinical_pearl: "Worsening tachycardia and hypotension in the setting of abdominal pain and possible pregnancy strongly suggest active internal hemorrhage from a ruptured ectopic pregnancy. This is a time-critical surgical emergency requiring rapid transport.",
        options: [
          { text: "Worsening hypovolemic shock likely from active internal hemorrhage due to a ruptured ectopic pregnancy requiring emergent surgery", correct: true, critical: false, explanation: "Progressive tachycardia and hypotension with abdominal pain in a patient who may be pregnant at 7 weeks is classic for ruptured ectopic with ongoing intraperitoneal hemorrhage.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Anxiety-induced tachycardia and hypotension from the emotional distress of disclosing her pregnancy to a stranger in uniform", correct: false, critical: true, explanation: "While emotional distress can cause tachycardia, progressive hypotension with pallor and worsening abdominal pain indicates hemorrhagic shock, not anxiety.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Orthostatic hypotension from the earlier syncopal episode that will likely self-correct with rest and oral hydration fluids", correct: false, critical: true, explanation: "The worsening trend in vitals (increasing HR, decreasing BP) despite rest indicates ongoing hemorrhage, not simple orthostatic changes. This patient is decompensating.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Normal physiological changes of early pregnancy including increased heart rate and mildly decreased blood pressure readings", correct: false, critical: true, explanation: "A HR of 126, BP of 88/56, and worsening pallor are NOT normal pregnancy changes. This is compensated hemorrhagic shock progressing toward decompensation.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the ALS level, what are the priority interventions for this patient showing signs of hypovolemic shock? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "You have called for ALS backup. The patient is becoming increasingly diaphoretic and restless. She reports shoulder pain in addition to the abdominal pain.",
        vitals_update: { hr: 132, bp: "82/50", rr: 26, spo2: 96 },
        clinical_pearl: "Shoulder pain (Kehr's sign) in the setting of abdominal pain and shock indicates diaphragmatic irritation from free intraperitoneal blood — a classic finding in ruptured ectopic pregnancy. This confirms the diagnosis clinically.",
        options: [
          { text: "Establish two large-bore IV lines and administer normal saline boluses to support perfusion during rapid transport", correct: true, critical: false, explanation: "Per NY Shock protocol, vascular access and fluid resuscitation with normal saline are indicated for hypovolemic shock. Two IV sites are preferred for volume resuscitation.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Place the patient supine with legs elevated and keep her warm to maximize venous return and maintain core temperature", correct: true, critical: false, explanation: "Positioning to maximize preload and preventing hypothermia are standard shock management interventions at all provider levels.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Administer ketorolac 30 mg IV for the severe abdominal pain to improve patient comfort before initiating transport", correct: false, critical: true, explanation: "Ketorolac (an NSAID) can worsen bleeding by inhibiting platelet function. In a patient with suspected active hemorrhage, NSAIDs are contraindicated.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" },
          { text: "Delay transport to perform a focused abdominal ultrasound to confirm the ectopic pregnancy before going to the hospital", correct: false, critical: true, explanation: "Prehospital ultrasound for ectopic pregnancy diagnosis is not standard EMS practice. This patient needs emergent surgical intervention — do not delay transport.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      },
      {
        phase: "transport",
        prompt: "The patient begs you not to tell her parents or the school about the pregnancy. What is the most appropriate response regarding patient confidentiality?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is crying and repeatedly asking you to promise not to tell anyone. She is terrified of her parents finding out.",
        options: [
          { text: "Reassure her that your priority is her medical care and that relevant medical information will be shared with the hospital team", correct: true, critical: false, explanation: "The immediate priority is providing medical care and communicating clinical information to the receiving hospital. Reassure the patient while being honest that medical information must be shared with the treating team.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Promise her you will not tell anyone about the pregnancy to maintain her trust and ensure continued cooperation", correct: false, critical: false, explanation: "Making promises you may not be able to keep damages trust. The hospital team must know about the possible pregnancy for proper treatment. Be honest and compassionate.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Immediately call her parents from the ambulance since all minors require parental notification before any medical treatment", correct: false, critical: false, explanation: "Parental notification requirements vary by state and situation. Emergency medical treatment does not require parental consent. The hospital will manage notification appropriately.", protocol_ref: "als_general_approach_to_the_patient" },
          { text: "Inform the school nurse of the pregnancy so she can contact the parents and arrange follow-up counseling at the school", correct: false, critical: false, explanation: "Sharing reproductive health information with school staff is not appropriate. Medical information should be communicated to the receiving hospital team, not school personnel.", protocol_ref: "als_general_approach_to_the_patient" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the appropriate transport destination for this patient with suspected ruptured ectopic pregnancy and worsening hemorrhagic shock?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient's condition is deteriorating. A community hospital is 5 minutes away. A trauma center with OB surgical capabilities is 15 minutes away.",
        vitals_update: { hr: 138, bp: "78/48", rr: 28, spo2: 95 },
        clinical_pearl: "Ruptured ectopic pregnancy requires emergent surgical intervention (laparotomy or laparoscopy). Transport to a facility with surgical and OB capabilities is essential. The closest appropriate hospital may not be the nearest hospital, per NY transportation protocol.",
        options: [
          { text: "Transport to the facility with OB surgical capability 15 minutes away since the patient needs emergent surgical intervention", correct: true, critical: false, explanation: "Per NY protocol, transport to the closest appropriate hospital. A ruptured ectopic requires surgical intervention — a facility without OB surgery would need to transfer the patient, adding dangerous delay.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Transport to the nearest community hospital 5 minutes away since the patient is too unstable for a 15-minute transport time", correct: false, critical: false, explanation: "If the community hospital lacks surgical capability, the patient would require inter-facility transfer — adding more time than the additional 10 minutes to the surgical center.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Remain on scene to continue IV fluid resuscitation until the blood pressure stabilizes above 90 systolic before transport", correct: false, critical: true, explanation: "Do not delay transport for on-scene stabilization in hemorrhagic shock. The bleeding cannot be controlled in the field — she needs surgery. Fluids can be given en route.", protocol_ref: "als_general_approach_to_transportation" },
          { text: "Contact medical control for destination guidance since the patient is a minor and requires parental consent for surgical care", correct: false, critical: false, explanation: "Emergency medical treatment of minors does not require parental consent. While medical control can assist with destination, this should not delay transport of a decompensating patient.", protocol_ref: "als_general_approach_to_transportation" }
        ]
      }
    ]
  }
];
