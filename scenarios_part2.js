const SCENARIOS_P2 = [
  // ============================================================
  // 1. 25M — Stabbing to Neck (Zone II penetrating trauma)
  // ============================================================
  {
    id: "trauma-penetrating-07",
    title: "25M — Stabbing to Neck",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "25-year-old male stabbed in the neck outside a bar. PD on scene, scene safe.",
    patient: { age: 25, sex: "M", cc: "Stab wound to anterior neck" },
    scene: "Street outside a bar at 0130. PD has detained the assailant. Patient is sitting on the curb holding a blood-soaked towel to the left side of his neck. Blood is actively oozing around the towel edges. An expanding hematoma is visible above the left clavicle.",
    vitals: { hr: 118, bp: "98/62", rr: 26, spo2: 93, gcs: 14, temp: "98.2°F", bg: "112 mg/dL" },
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    presentation: "Alert but anxious male with a 3 cm stab wound to Zone II of the left anterior neck. Expanding hematoma noted. Voice is hoarse. Mild stridor on inhalation. Trachea midline. Active oozing from wound. Radial pulses present but thready bilaterally.",
    primary_protocol: "als_trauma_general",
    related_protocols: [
      "als_bleeding_hemorrhage_control",
      "als_oxygen_administration_and_airway_management",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "als_trauma_patient_destination"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find the patient holding a blood-soaked towel to his neck with an expanding hematoma. What is your FIRST priority?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "Penetrating neck injuries in Zone II (cricoid to angle of mandible) can involve the carotid artery, jugular vein, trachea, and esophagus. An expanding hematoma suggests vascular injury and potential airway compromise.",
        options: [
          { text: "Apply direct pressure to the wound and maintain manual c-spine stabilization while assessing the airway", correct: true, critical: false, explanation: "Direct pressure controls hemorrhage while c-spine precautions and airway assessment address the two immediate threats in penetrating neck trauma.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Remove the towel to fully visualize the wound and determine depth of penetration before treatment", correct: false, critical: true, explanation: "Removing direct pressure from an actively bleeding neck wound risks uncontrolled hemorrhage or air embolism. Never remove pressure to explore a penetrating neck wound in the field.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Immediately apply a cervical collar to protect the spine and then begin a full secondary survey", correct: false, critical: false, explanation: "While spinal precautions may be indicated, hemorrhage control and airway take priority over a c-collar and full secondary survey in an actively bleeding neck wound.", protocol_ref: "als_trauma_general" },
          { text: "Place the patient supine and elevate his legs to treat for hemorrhagic shock before wound care", correct: false, critical: false, explanation: "Placing a patient with a neck wound and stridor supine may worsen airway compromise. Hemorrhage control at the wound site must come first.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The patient's voice becomes more hoarse and stridor increases. The hematoma continues to expand. Which findings indicate imminent airway compromise? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Over the next two minutes the hematoma has noticeably increased in size. The patient is now having difficulty speaking in full sentences.",
        vitals_update: { hr: 126, bp: "92/58", rr: 30, spo2: 89, gcs: 13 },
        clinical_pearl: "An expanding neck hematoma can compress the trachea externally. Worsening stridor and voice changes indicate progressive airway compromise — this patient may need a surgical airway if intubation fails.",
        options: [
          { text: "Expanding hematoma with progressive stridor and worsening hoarseness indicating external airway compression", correct: true, critical: false, explanation: "The combination of expanding hematoma, progressive stridor, and worsening hoarseness indicates the trachea is being compressed and the airway may occlude.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Dropping SpO2 to 89% with inability to speak in full sentences indicating inadequate oxygenation and ventilation", correct: true, critical: false, explanation: "Falling SpO2 combined with difficulty speaking confirms worsening airway compromise and inadequate gas exchange — both indicate imminent airway loss.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Decreasing GCS from 14 to 13 suggesting traumatic brain injury from associated head trauma", correct: false, critical: false, explanation: "The GCS change is more likely from hypoxia and hypoperfusion rather than TBI. While notable, it is a downstream effect, not a direct sign of airway compromise.", protocol_ref: "als_trauma_general" },
          { text: "Tachycardia of 126 bpm alone as the primary indicator that the airway will be lost imminently", correct: false, critical: false, explanation: "Tachycardia indicates shock progression but is not a specific sign of imminent airway loss. The stridor, hoarseness, and expanding hematoma are the direct airway threat indicators.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which interventions are appropriate for this patient? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "You are maintaining direct pressure with hemostatic gauze packed into the wound. The bleeding has slowed but the hematoma remains tense.",
        vitals_update: null,
        clinical_pearl: "For penetrating neck wounds, pack with hemostatic gauze and hold pressure. Never apply a circumferential pressure dressing around the neck — this can occlude the contralateral vessels and airway.",
        options: [
          { text: "Pack the wound with hemostatic gauze, maintain direct pressure, and establish large-bore IV access for fluid resuscitation", correct: true, critical: false, explanation: "Wound packing with hemostatic gauze and IV access for volume replacement are both indicated per the hemorrhage control and trauma protocols.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Administer high-flow oxygen via non-rebreather mask and prepare advanced airway equipment for potential rapid sequence intubation", correct: true, critical: false, explanation: "High-flow O2 is indicated for the hypoxia and airway compromise. Having advanced airway equipment ready is essential given the progressive airway threat.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Apply a circumferential pressure dressing around the entire neck to provide uniform compression of the bleeding vessel", correct: false, critical: true, explanation: "A circumferential neck dressing can compress the contralateral carotid and jugular as well as the trachea, causing cerebral ischemia and complete airway obstruction.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Initiate a Normal Saline 500 mL bolus to maintain perfusion and begin rapid transport to the closest trauma center", correct: true, critical: false, explanation: "Fluid resuscitation and rapid transport to a trauma center are indicated per protocol for penetrating trauma with hemorrhagic shock.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "treatment",
        prompt: "En route, the patient becomes increasingly agitated and the stridor worsens. SpO2 drops to 82%. At the CC/Paramedic level, what is the next airway intervention?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "Despite high-flow O2, the patient is deteriorating. He can no longer speak. Suctioning reveals blood in the oropharynx.",
        vitals_update: { hr: 134, bp: "86/52", rr: 34, spo2: 82, gcs: 10 },
        clinical_pearl: "Penetrating neck trauma with blood in the airway and expanding hematoma represents one of the most difficult airways in EMS. If direct laryngoscopy fails, be prepared for a surgical cricothyrotomy.",
        options: [
          { text: "Attempt endotracheal intubation with in-line stabilization, suctioning as needed, with surgical cricothyrotomy as immediate backup", correct: true, critical: false, explanation: "With a failing airway and blood in the oropharynx, definitive airway management via ETI is indicated at the CC/Paramedic level, with cricothyrotomy as the rescue plan.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Insert a supraglottic airway device such as an i-gel or King Airway as the primary definitive airway for transport", correct: false, critical: false, explanation: "A supraglottic device may not seal properly with an expanding neck hematoma distorting anatomy, and does not protect against blood aspiration as well as an ETT.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Continue BVM ventilation with high-flow oxygen and defer all advanced airway interventions until arrival at the trauma center", correct: false, critical: true, explanation: "With SpO2 of 82% and a rapidly closing airway, deferring intervention risks complete airway obstruction and cardiac arrest before hospital arrival.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Perform immediate needle cricothyrotomy with jet ventilation as the safest initial approach for this type of injury", correct: false, critical: false, explanation: "Needle cricothyrotomy with jet ventilation is a temporizing measure, not a first-line approach when oral intubation is still potentially possible.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the appropriate transport destination for this patient per NY protocol?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient has been intubated successfully. Bleeding is controlled with wound packing. Two large-bore IVs are running NS.",
        vitals_update: { hr: 120, bp: "94/60", rr: 16, spo2: 96, gcs: 3 },
        clinical_pearl: null,
        options: [
          { text: "Closest appropriate trauma center, with early notification including mechanism, patient status, and ETA", correct: true, critical: false, explanation: "Per NY Trauma Patient Destination protocol, penetrating neck trauma requires transport to the closest appropriate trauma center with early notification.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Closest community hospital emergency department for initial stabilization before transfer to a trauma center", correct: false, critical: false, explanation: "Diverting to a non-trauma facility delays definitive surgical care that this patient needs. Go directly to the trauma center.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Request aeromedical transport and wait on scene for helicopter arrival to expedite transfer to a Level I center", correct: false, critical: false, explanation: "If a trauma center is reachable by ground in a reasonable time, waiting for a helicopter delays care. Begin ground transport and consider rendezvous if appropriate.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Nearest hospital with a surgical suite regardless of trauma center designation for immediate operative intervention", correct: false, critical: false, explanation: "A trauma center has the multidisciplinary team (vascular, ENT, thoracic surgery) needed for complex neck injuries. A general surgical suite may not suffice.", protocol_ref: "als_trauma_patient_destination" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the patient's blood pressure drops to 78/44 despite 1L of NS. What should you do next?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "Five minutes from the trauma center. The wound packing appears intact but blood is accumulating in the endotracheal tube on suctioning.",
        vitals_update: { hr: 140, bp: "78/44", rr: 16, spo2: 94 },
        clinical_pearl: "In hemorrhagic shock from penetrating trauma, permissive hypotension (target SBP ~90) may be appropriate, but avoid over-resuscitation which can worsen bleeding. This patient needs surgical intervention.",
        options: [
          { text: "Administer an additional 500 mL NS bolus, recheck wound packing integrity, and continue rapid transport with early hospital update", correct: true, critical: false, explanation: "An additional fluid bolus is indicated per protocol (up to 2L total). Checking the wound and updating the receiving facility are all appropriate actions.", protocol_ref: "als_trauma_general" },
          { text: "Slow the IV rate to TKO to practice permissive hypotension and avoid disrupting any clot formation at the wound site", correct: false, critical: false, explanation: "While permissive hypotension is a valid concept, a BP of 78/44 is below the acceptable range. Additional volume is needed to maintain minimum perfusion.", protocol_ref: "als_trauma_general" },
          { text: "Remove the wound packing to inspect for an arterial bleed, then repack with fresh hemostatic gauze and apply more pressure", correct: false, critical: true, explanation: "Removing wound packing disrupts any hemostasis that has formed and risks catastrophic rebleeding. Do not unpack a controlled neck wound.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Start a vasopressor infusion such as push-dose epinephrine to maintain blood pressure above systolic of 100 mmHg", correct: false, critical: false, explanation: "Vasopressors in hemorrhagic shock without adequate volume replacement are ineffective and can worsen tissue ischemia. Volume and surgical control are the priorities.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // 2. 29F — Pregnant, Baby Coming Feet First (Breech)
  // ============================================================
  {
    id: "ob-breech-08",
    title: "29F — Pregnant, Baby Coming Feet First",
    category: "OB/Peds",
    difficulty: "Hard",
    dispatch: "29-year-old female, 38 weeks pregnant, in active labor with feet presenting. Third-floor apartment.",
    patient: { age: 29, sex: "F", cc: "Active labor with breech presentation" },
    scene: "Third-floor walkup apartment, bedroom. Patient is on the bed in obvious distress. Her partner states she has been in labor for several hours and 'something doesn't look right.' On inspection, two small feet are visible at the vaginal opening.",
    vitals: { hr: 108, bp: "132/84", rr: 22, spo2: 98, gcs: 15, temp: "99.1°F", bg: "94 mg/dL" },
    history: { pmh: "G3P2 — two prior uncomplicated vaginal deliveries", meds: "Prenatal vitamins", allergies: "Penicillin" },
    presentation: "Full-term gravid female in active labor with frank breech presentation. Two feet visible at the introitus. Membranes ruptured approximately 45 minutes ago per patient. Contractions every 2 minutes lasting 60 seconds. No prolapsed cord visible or palpable.",
    primary_protocol: "als_childbirth_obstetrics",
    related_protocols: [
      "als_childbirth_newborn_neonatal_care",
      "als_oxygen_administration_and_airway_management",
      "bls_childbirth_obstetrics"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You see two feet presenting at the vaginal opening. Contractions are every 2 minutes. What is your FIRST action?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "In a breech presentation with extremities already delivering, do NOT attempt to push the baby back in or delay delivery. Support the presenting parts and prepare for a field delivery.",
        options: [
          { text: "Support the presenting extremities, prepare your OB kit, and do NOT attempt to push the feet back or delay delivery", correct: true, critical: false, explanation: "Per NY protocol, once a breech delivery is progressing, support the buttocks or extremities as they deliver. Do not attempt to delay or reverse the delivery.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Place the mother in Trendelenburg position and apply gentle pressure to the presenting feet to delay delivery for hospital", correct: false, critical: true, explanation: "Attempting to delay or push back a progressing breech delivery can cause cord compression, fetal distress, and entrapment. This is extremely dangerous.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Immediately move the patient to the ambulance stretcher and begin rapid transport to deliver at the hospital instead", correct: false, critical: false, explanation: "With feet already presenting and contractions every 2 minutes, delivery is imminent. Moving the patient risks delivering during transport without proper support.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Have the mother push forcefully with each contraction to speed up the delivery and minimize time in the birth canal", correct: false, critical: false, explanation: "Uncontrolled forceful pushing in a breech delivery can cause rapid head delivery leading to head entrapment or cervical spine injury to the infant.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The baby has delivered to the level of the umbilicus. You note the cord is being compressed between the baby and the birth canal. What do you assess for NEXT?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The buttocks and legs have delivered. The umbilical cord is visible and appears somewhat compressed against the baby's abdomen.",
        vitals_update: null,
        clinical_pearl: "In breech delivery, once the umbilicus delivers, the clock is ticking — the head must deliver within a few minutes or the cord compression will cause fetal hypoxia. Do NOT pull on the legs or trunk.",
        options: [
          { text: "Check for a pulsating cord to assess fetal perfusion and note the time to track how long until the head must deliver", correct: true, critical: false, explanation: "Assessing cord pulsation gives information about fetal status. Timing is critical — the aftercoming head must deliver within minutes to avoid fetal anoxia.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Attempt to push a loop of the umbilical cord back into the vagina to relieve the compression and improve blood flow", correct: false, critical: false, explanation: "Manipulating the cord risks further compression or tearing. The focus should be on facilitating delivery of the head, not cord repositioning.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Clamp and cut the umbilical cord immediately to free the baby from the compressed cord during the remainder of delivery", correct: false, critical: true, explanation: "Cutting the cord before the head delivers eliminates the baby's only oxygen supply while the head is still in the birth canal. This can be fatal.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Apply firm fundal pressure to the mother's abdomen to speed delivery of the remaining head and shoulder portions", correct: false, critical: false, explanation: "While gentle downward compression of the uterus can assist, firm aggressive fundal pressure can cause uterine rupture or uncontrolled rapid delivery.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The baby has delivered to the shoulders. Per NY protocol, how should you manage delivery of the arms and shoulders in a breech presentation?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The baby's back is now visible. Both shoulders are still in the birth canal.",
        vitals_update: null,
        clinical_pearl: null,
        options: [
          { text: "Grasp the iliac wings, apply gentle downward traction, and swing the body anteriorly and posteriorly to deliver each shoulder", correct: true, critical: false, explanation: "Per NY protocol: grasp the iliac wings, apply gentle downward traction, and gently swing the infant anteriorly and posteriorly to deliver both shoulders.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Pull firmly on the baby's legs to extract the torso while an assistant applies suprapubic pressure to flex the head", correct: false, critical: true, explanation: "The protocol explicitly states: DO NOT pull on the legs or back, as this may cause spine dislocation or adrenal hemorrhage.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Rotate the baby's body 180 degrees clockwise to disengage both shoulders simultaneously from the pelvic outlet", correct: false, critical: false, explanation: "Aggressive rotation is not described in the NY protocol and risks injury. The protocol calls for gentle swinging in the direction of least resistance.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Splint each humerus individually with two fingers and apply lateral traction to sweep the arms across the baby's chest", correct: false, critical: false, explanation: "While splinting the humerus is mentioned in protocol, it is done after the swinging maneuver delivers the shoulders, not as the primary technique.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The head is the last part to deliver. What technique should you use to deliver the aftercoming head?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Both arms and shoulders have been delivered. The head remains in the birth canal. The baby's body is becoming cyanotic.",
        vitals_update: null,
        clinical_pearl: "The aftercoming head is the most dangerous part of a breech delivery. Gentle downward uterine compression and swinging the legs upward to a vertical position facilitates delivery. Aggressive traction on the body can cause cervical spine injury.",
        options: [
          { text: "Apply gentle downward compression of the uterus and swing the legs upward until the body is vertical to permit head delivery", correct: true, critical: false, explanation: "Per NY protocol: gentle downward compression of the uterus will assist in head delivery. Swing the legs upward until the body is in a vertical position.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Place two fingers in the baby's mouth and apply steady downward traction on the mandible to flex and deliver the head", correct: false, critical: false, explanation: "While Mauriceau-Smellie-Veit maneuver involves jaw flexion, the NY prehospital protocol specifically describes uterine compression and elevation of the body.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Have your partner apply firm suprapubic pressure while you pull downward on the baby's shoulders with both hands", correct: false, critical: false, explanation: "Pulling on the shoulders risks cervical spine injury. The protocol describes a specific technique using body elevation and gentle uterine compression.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Instruct the mother to perform a prolonged Valsalva maneuver while you maintain steady axial traction on the trunk", correct: false, critical: false, explanation: "Axial traction on the trunk risks spinal injury. The protocol technique uses positioning (vertical body) and gentle uterine compression, not traction.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The baby is delivered but is limp, cyanotic, and not breathing. Heart rate by cord pulsation feels around 80 bpm. What interventions are indicated? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The baby has been delivered completely. APGAR appears low. The infant is limp with no respiratory effort and central cyanosis.",
        vitals_update: null,
        clinical_pearl: "Neonatal resuscitation follows the sequence: warm-dry-stimulate → clear airway → ventilate. Most neonates respond to effective ventilation. A heart rate of 80 bpm with no respiratory effort requires PPV.",
        options: [
          { text: "Dry and stimulate the infant vigorously, suction the mouth then nose, and position the airway in a neutral sniffing position", correct: true, critical: false, explanation: "Initial neonatal resuscitation begins with drying, stimulation, airway clearing, and positioning per the neonatal care protocol.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Begin positive pressure ventilation with a BVM at 40-60 breaths per minute using room air or supplemental oxygen", correct: true, critical: false, explanation: "With a heart rate around 80 and no respiratory effort, BVM ventilation at 40-60 bpm is indicated per neonatal resuscitation guidelines.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Clamp and cut the umbilical cord to allow the infant to be moved to a warm resuscitation area away from the mother", correct: true, critical: false, explanation: "Clamping and cutting the cord allows the baby to be moved to a resuscitation surface for effective interventions.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Begin chest compressions immediately at a rate of 120 per minute since the infant is cyanotic and not breathing", correct: false, critical: false, explanation: "Chest compressions in neonates are indicated when HR falls below 60 bpm despite effective ventilation. At 80 bpm, ventilation alone is the appropriate intervention.", protocol_ref: "als_childbirth_newborn_neonatal_care" }
        ]
      },
      {
        phase: "transport",
        prompt: "After 30 seconds of PPV, the baby's heart rate increases to 120 bpm and the infant begins gasping. How should you manage transport?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The baby is pinking up, heart rate is improving, and some respiratory effort is noted. The mother has delivered the placenta with moderate bleeding controlled by uterine massage.",
        vitals_update: { hr: 92, bp: "118/72", rr: 20, spo2: 97 },
        clinical_pearl: "Always transport both mother and baby together. Keep the infant warm — hypothermia is a major risk for neonates, especially after a complicated delivery.",
        options: [
          { text: "Keep the infant warm and continue monitoring, transport mother and baby together to the closest appropriate hospital", correct: true, critical: false, explanation: "Both mother and infant need hospital evaluation after a complicated breech delivery. Keep the neonate warm and monitor continuously during transport.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Request a separate ambulance for the baby so both patients can receive dedicated one-on-one care during transport", correct: false, critical: false, explanation: "Separating mother and infant is not standard practice. They should be transported together with adequate crew to manage both.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Continue resuscitation on scene until the infant has sustained normal breathing for at least ten minutes before transporting", correct: false, critical: false, explanation: "Delaying transport to wait for sustained respirations is inappropriate. The infant needs hospital evaluation and continued monitoring during transport.", protocol_ref: "als_childbirth_newborn_neonatal_care" },
          { text: "Stop all interventions since the baby is improving, wrap in a blanket, and hand the baby to the mother for skin-to-skin care", correct: false, critical: false, explanation: "While the baby is improving, continued monitoring is essential after a complicated delivery. Stopping all assessment is premature for a neonate who was initially apneic.", protocol_ref: "als_childbirth_newborn_neonatal_care" }
        ]
      }
    ]
  },

  // ============================================================
  // 3. 45F — Swollen Face, Can't Swallow (Anaphylaxis)
  // ============================================================
  {
    id: "medical-anaphylaxis-09",
    title: "45F — Swollen Face, Can't Swallow",
    category: "Medical",
    difficulty: "Hard",
    dispatch: "45-year-old female with difficulty breathing and swollen face at a restaurant. Possible allergic reaction.",
    patient: { age: 45, sex: "F", cc: "Facial swelling, difficulty swallowing, difficulty breathing" },
    scene: "Upscale restaurant. Patient is seated at a table leaning forward in a tripod position. Her face is visibly swollen, lips are edematous, and she has diffuse urticaria on her neck and arms. Her server says she ate a shrimp appetizer about 15 minutes ago.",
    vitals: { hr: 124, bp: "88/54", rr: 28, spo2: 91, gcs: 15, temp: "98.6°F", bg: "118 mg/dL" },
    history: { pmh: "Asthma, shellfish allergy (diagnosed as a child, no recent reactions)", meds: "Albuterol inhaler PRN", allergies: "Shellfish, sulfa drugs" },
    presentation: "Severe facial and oropharyngeal edema. Tongue is swollen and protruding. Audible stridor and diffuse bilateral wheezing. Diffuse urticaria on trunk and extremities. Unable to swallow her own secretions. Drooling. Hypotensive and tachycardic.",
    primary_protocol: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_",
    related_protocols: [
      "als_oxygen_administration_and_airway_management",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h",
      "bls_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find the patient with severe facial swelling, stridor, wheezing, urticaria, and hypotension after eating shrimp. What is the MOST important FIRST intervention?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "Anaphylaxis is a clinical diagnosis. The presence of respiratory distress AND hypotension after allergen exposure = anaphylactic shock. Epinephrine is the FIRST and most important drug — do not delay it for any other intervention.",
        options: [
          { text: "Administer Epinephrine 0.3 mg IM immediately while positioning the patient for airway management and applying oxygen", correct: true, critical: false, explanation: "Per NY protocol, epinephrine IM is the first-line treatment for anaphylaxis with respiratory distress and/or hypoperfusion. It is indicated at ALL provider levels.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Establish IV access first, then administer Diphenhydramine 50 mg IV to reverse the allergic reaction before giving epinephrine", correct: false, critical: true, explanation: "Delaying epinephrine to give diphenhydramine is dangerous. Diphenhydramine does not reverse anaphylaxis — it only treats minor allergic symptoms. Epinephrine is the only life-saving drug.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Administer Albuterol 2.5 mg via nebulizer to treat the wheezing and stridor before considering epinephrine administration", correct: false, critical: false, explanation: "While albuterol is indicated for wheezing, it does not treat the systemic anaphylaxis causing the hypotension, edema, and urticaria. Epinephrine must come first.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Place the patient supine with legs elevated to treat the hypotension and begin a Normal Saline bolus before any medications", correct: false, critical: false, explanation: "While positioning and fluids are supportive, epinephrine is the definitive first-line treatment that addresses all components of anaphylaxis simultaneously.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" }
        ]
      },
      {
        phase: "assessment",
        prompt: "After administering epinephrine 0.3 mg IM, you reassess in 5 minutes. The patient's wheezing has slightly improved but she remains hypotensive and the facial swelling has not changed. What do you do?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Five minutes post-epinephrine. Wheezing somewhat improved. Still drooling, unable to swallow. BP remains 86/52.",
        vitals_update: { hr: 118, bp: "86/52", rr: 26, spo2: 93, gcs: 15 },
        clinical_pearl: "NY protocol allows a SECOND dose of epinephrine 0.3 mg IM if the patient does not improve within 5 minutes. Do not hesitate to repeat.",
        options: [
          { text: "Administer a second dose of Epinephrine 0.3 mg IM, as the patient has not adequately improved after the initial dose", correct: true, critical: false, explanation: "Per NY protocol: if the patient does not improve within 5 minutes, may repeat epinephrine once. This patient still has hypotension and significant airway edema.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Switch to Epinephrine 1 mg IV push since the IM route has failed to produce an adequate clinical response", correct: false, critical: true, explanation: "Epinephrine 1 mg IV is a cardiac arrest dose. In a patient with a pulse, this can cause fatal dysrhythmias, hypertensive crisis, and myocardial ischemia.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Hold the second epinephrine dose and instead administer Dexamethasone 10 mg IV to provide more sustained anti-inflammatory effect", correct: false, critical: false, explanation: "Steroids take hours to work and do not address the acute anaphylaxis. The protocol specifically allows a repeat epi dose if no improvement in 5 minutes.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Administer a third Albuterol nebulizer treatment since the wheezing only partially improved and is the primary concern now", correct: false, critical: false, explanation: "The hypotension and airway edema are more immediately life-threatening than the residual wheezing. A second epi dose addresses all components.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the EMT level, what additional treatment is indicated for the persistent wheezing?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Second epinephrine dose given. BP has come up to 96/60. Stridor is improving but bilateral wheezing persists.",
        vitals_update: { hr: 112, bp: "96/60", rr: 24, spo2: 94 },
        clinical_pearl: "At the EMT level, albuterol can be combined with ipratropium (Atrovent) for enhanced bronchodilation in anaphylaxis with refractory wheezing.",
        options: [
          { text: "Administer Albuterol 2.5 mg via nebulizer, which may be combined with Ipratropium 0.5 mg, and repeat up to three total doses", correct: true, critical: false, explanation: "Per NY protocol, EMTs can administer albuterol 2.5 mg via nebulizer for wheezing, which may be combined with ipratropium. May repeat to a total of three doses.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Have the patient use her own personal albuterol metered-dose inhaler since she is familiar with the device and technique", correct: false, critical: false, explanation: "While patients can use their own inhalers, a nebulizer provides more effective medication delivery in a patient with severe distress and facial edema.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Administer continuous positive airway pressure via CPAP at 10 cmH2O to stent open the edematous airways and improve oxygenation", correct: false, critical: false, explanation: "CPAP is not specifically indicated in the anaphylaxis protocol. Bronchodilators are the appropriate treatment for the wheezing component.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Administer Diphenhydramine 50 mg orally to help reduce the bronchospasm component of the allergic reaction directly", correct: false, critical: false, explanation: "Diphenhydramine does not directly relieve bronchospasm. Additionally, this patient cannot swallow — oral medication is inappropriate.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the AEMT/CC/Paramedic level, which additional interventions should be initiated? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "Albuterol/ipratropium nebulizer running. BP has improved slightly but remains below target.",
        vitals_update: null,
        clinical_pearl: "The NY protocol fluid goal in anaphylaxis is SBP >100 mmHg and MAP >65 mmHg. Up to 2L of NS can be given if lung sounds remain clear.",
        options: [
          { text: "Establish vascular access and administer Normal Saline 500 mL bolus for SBP less than 100 mmHg, repeating up to 2 liters total", correct: true, critical: false, explanation: "Per NY protocol (AEMT level): NS 500 mL bolus if SBP <100 or MAP <65, may repeat up to 2L total if lungs remain clear. Goal SBP >100 and MAP >65.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Place the patient on a cardiac monitor and consider a 12-lead ECG to evaluate for dysrhythmias or cardiac ischemia", correct: true, critical: false, explanation: "At the CC/Paramedic level, cardiac monitoring is indicated per protocol. Anaphylaxis can cause cardiac dysrhythmias and the epinephrine can also affect cardiac rhythm.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Administer Diphenhydramine 50 mg IV or IM and Dexamethasone 10 mg IV for additional allergic reaction management", correct: true, critical: false, explanation: "At the CC/Paramedic level, diphenhydramine 50 mg IV/IM and dexamethasone 10 mg PO/IM/IV are indicated for signs of allergic reaction per protocol.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" },
          { text: "Start an epinephrine IV drip at 2 mcg per minute and titrate to maintain a systolic blood pressure above 120 mmHg", correct: false, critical: false, explanation: "An epinephrine drip is not part of the standing order NY anaphylaxis protocol. It may be considered under medical control, but is not a standing intervention.", protocol_ref: "als_anaphylaxis_and_allergic_reaction_adult_for_pediatric_see_allergic_reaction_and_" }
        ]
      },
      {
        phase: "transport",
        prompt: "En route, the patient suddenly becomes unresponsive. You note she has stopped breathing and has no palpable pulse. What is your immediate action?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Three minutes from the hospital, the patient suddenly slumps over. No respirations. No carotid pulse.",
        vitals_update: { hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 3 },
        clinical_pearl: "Anaphylactic cardiac arrest has a better prognosis than other causes if treated aggressively. Continue epinephrine per cardiac arrest protocol and provide high-quality CPR. Early airway management is critical due to the edema.",
        options: [
          { text: "Begin high-quality CPR immediately and follow the cardiac arrest protocol including defibrillation if indicated by the monitor", correct: true, critical: false, explanation: "Cardiac arrest from any cause requires immediate high-quality CPR and standard cardiac arrest management per protocol.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Administer another dose of IM epinephrine 0.3 mg and reassess in two minutes before starting chest compressions", correct: false, critical: true, explanation: "In cardiac arrest, chest compressions must begin immediately. IM epinephrine at the anaphylaxis dose is inadequate for cardiac arrest — the arrest protocol doses apply.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Focus entirely on aggressive airway management with intubation since the anaphylactic edema is the cause of the arrest", correct: false, critical: false, explanation: "While airway management is important, it cannot replace CPR. Chest compressions must begin immediately — airway interventions happen during the resuscitation.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Administer a rapid 1 liter Normal Saline bolus to restore intravascular volume since distributive shock caused the arrest", correct: false, critical: false, explanation: "While volume is important, it does not replace CPR and defibrillation. Chest compressions must come first to provide any cardiac output.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" }
        ]
      }
    ]
  },

  // ============================================================
  // 4. 6M — Pulled from Pond (Cold water submersion)
  // ============================================================
  {
    id: "enviro-submersion-10",
    title: "6M — Pulled from Pond",
    category: "Environmental",
    difficulty: "Hard",
    dispatch: "6-year-old male pulled from a pond by bystanders. Unknown down time. CPR in progress.",
    patient: { age: 6, sex: "M", cc: "Cold water submersion, unresponsive" },
    scene: "Small park with a retention pond. Early spring, water temp estimated near 45°F. Bystanders pulled the child from the water approximately 5 minutes ago. An off-duty nurse is performing CPR. The child is soaking wet, skin is pale and cold to touch.",
    vitals: { hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 3, temp: "88°F", bg: "68 mg/dL" },
    history: { pmh: "None — healthy child per mother on scene", meds: "None", allergies: "NKDA" },
    presentation: "Unresponsive 6-year-old male, soaking wet, profoundly cold to touch. No spontaneous respirations. No palpable pulses. Pupils fixed and dilated. Bystander CPR in progress for approximately 3 minutes. Water and debris in the oropharynx.",
    primary_protocol: "als_cardiac_arrest_pediatric_general_approach",
    related_protocols: [
      "als_environmental_hypothermia",
      "als_respiratory_arrest_failure_pediatric",
      "als_oxygen_administration_and_airway_management",
      "bls_cardiac_arrest_pediatric_general_approach"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find bystander CPR in progress on a cold, pulseless 6-year-old pulled from a pond. What is your FIRST action?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "In cold water submersion, hypothermia can be protective — especially in children. The saying 'they're not dead until they're warm and dead' applies. Resuscitate aggressively.",
        options: [
          { text: "Take over CPR with high-quality compressions, suction the airway, and begin BVM ventilation with supplemental oxygen", correct: true, critical: false, explanation: "Continue and optimize CPR, clear the airway, and provide oxygenation. Cold water submersion victims should receive aggressive resuscitation.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Stop CPR to perform a thorough 60-second pulse check since hypothermic patients can have very faint and slow pulses", correct: false, critical: false, explanation: "While a prolonged pulse check (up to 60 seconds) is appropriate for hypothermic patients, CPR should not be stopped if already in progress with no pulse detected. Assess during CPR transitions.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Pronounce the patient deceased on scene since fixed dilated pupils and pulselessness indicate irreversible brain death", correct: false, critical: true, explanation: "Fixed dilated pupils in hypothermia are NOT a reliable sign of death. Hypothermic children have survived prolonged submersion. Resuscitate aggressively — they are not dead until warm and dead.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Immediately focus on active rewarming by removing wet clothes and wrapping in blankets before resuming any CPR efforts", correct: false, critical: false, explanation: "While removing wet clothes and rewarming are important, CPR must continue uninterrupted. Rewarming happens simultaneously with resuscitation, not instead of it.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "assessment",
        prompt: "The AED/monitor shows a narrow-complex rhythm at a rate of 28 bpm with no palpable pulses. How do you interpret this and proceed?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "After 2 minutes of CPR, you apply the pediatric AED pads. The monitor shows what appears to be an organized rhythm at 28 bpm. You perform a 60-second pulse check — no pulses detected.",
        vitals_update: null,
        clinical_pearl: "Pulseless electrical activity (PEA) in hypothermia is common. The heart may be generating electrical activity but cannot contract effectively when severely cold. Continue CPR.",
        options: [
          { text: "Continue CPR — this is pulseless electrical activity, and compressions must continue until the patient is rewarmed and reassessed", correct: true, critical: false, explanation: "An organized rhythm without pulses is PEA. In hypothermia, the cold myocardium cannot contract effectively. Continue CPR and rewarm.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Stop CPR since there is an organized electrical rhythm present, and focus entirely on active rewarming to restore effective perfusion", correct: false, critical: true, explanation: "Organized rhythm without pulses = PEA = cardiac arrest. Stopping CPR for a pulseless patient is dangerous regardless of what the monitor shows.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Cardiovert at 0.5 joules per kilogram since the slow organized rhythm likely represents a hypothermic bradydysrhythmia", correct: false, critical: false, explanation: "Cardioversion is for tachycardias with a pulse. This patient is pulseless with a bradycardic PEA — cardioversion is not indicated.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Administer atropine 0.02 mg per kilogram IV to increase the heart rate and restore effective cardiac output in this bradycardia", correct: false, critical: false, explanation: "Atropine is generally ineffective in severe hypothermia as the cold myocardium is unresponsive to pharmacological stimulation. CPR and rewarming are the treatment.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which rewarming and resuscitation interventions are appropriate for this patient? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "CPR continues. You have removed the wet clothing. The estimated core temperature is approximately 88°F (31°C), consistent with moderate hypothermia.",
        vitals_update: null,
        clinical_pearl: "For moderate hypothermia: handle gently, maintain horizontal position, remove wet clothing in warm environment, apply heat sources to axilla/chest/back with a barrier to prevent burns.",
        options: [
          { text: "Provide active external rewarming with heat packs to axilla, chest, and back with a thin barrier between heat source and skin", correct: true, critical: false, explanation: "Per NY hypothermia protocol for moderate hypothermia: apply heat sources to axilla, chest, and back with a thin barrier to avoid thermal burns.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Continue high-quality CPR, ensure warm ambulance environment, and provide warmed humidified oxygen if available", correct: true, critical: false, explanation: "Continuing CPR, heating the ambulance, and providing warm humidified oxygen are all appropriate for hypothermic cardiac arrest resuscitation.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Limit the AED to one shock if a shockable rhythm is detected, as repeated shocks are generally ineffective in severe hypothermia", correct: true, critical: false, explanation: "Per NY protocol for severe/profound hypothermia: limit AED to one shock if indicated. The hypothermic heart is resistant to defibrillation.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Vigorously rub the extremities and perform rapid range-of-motion exercises to generate body heat through friction and movement", correct: false, critical: true, explanation: "Vigorous handling of hypothermic patients can trigger fatal ventricular fibrillation. Handle gently and minimize movement during extrication per protocol.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC/Paramedic level, what advanced interventions should be considered for this pediatric hypothermic arrest?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "IV access has been established. CPR continues with active rewarming in progress. The rhythm has not changed.",
        vitals_update: null,
        clinical_pearl: null,
        options: [
          { text: "Intubate to secure the airway, administer warmed IV Normal Saline, and continue resuscitation during rapid transport to the hospital", correct: true, critical: false, explanation: "Advanced airway management, warmed IV fluids, and aggressive resuscitation during transport to a facility capable of active core rewarming are appropriate.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Administer full-dose Epinephrine 0.01 mg per kilogram IV every 3 minutes per standard pediatric cardiac arrest protocol", correct: false, critical: false, explanation: "In severe hypothermia, medications may be withheld or intervals extended as the cold body cannot metabolize them. Standard dosing intervals may lead to drug accumulation and toxicity upon rewarming.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Perform bilateral needle thoracostomy to rule out tension pneumothorax as a contributing cause of the pulseless arrest", correct: false, critical: false, explanation: "There is no mechanism or clinical evidence suggesting pneumothorax. The submersion and hypothermia explain the arrest. Unnecessary needle thoracostomy risks complications.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Terminate resuscitation efforts after 20 minutes since pediatric submersion arrests have universally poor neurological outcomes", correct: false, critical: true, explanation: "This is false — cold water submersion in children has documented cases of full neurological recovery after prolonged resuscitation. Never terminate in the field for hypothermic arrest.", protocol_ref: "als_environmental_hypothermia" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, the rhythm changes to ventricular fibrillation. Per the hypothermia protocol, how should you manage defibrillation?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "En route to the pediatric center. The monitor now shows coarse ventricular fibrillation.",
        vitals_update: null,
        clinical_pearl: "The NY hypothermia protocol limits defibrillation attempts in severe/profound hypothermia. A single shock is recommended. If the first shock is not successful, focus on CPR and rewarming — the heart must warm before it will respond to defibrillation.",
        options: [
          { text: "Deliver one shock at 2 joules per kilogram, then continue CPR and rewarming — limit to one shock per the hypothermia protocol", correct: true, critical: false, explanation: "Per NY protocol for severe hypothermia: limit AED/defibrillation to one shock if indicated. Continue CPR and focus on rewarming. The cold heart is resistant to defibrillation.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Deliver three rapid stacked shocks at escalating doses of 2, 3, and 4 joules per kilogram for refractory ventricular fibrillation", correct: false, critical: false, explanation: "Stacked shocks are not indicated in hypothermic arrest. The protocol limits to one shock. The heart needs to warm before defibrillation will be effective.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Withhold defibrillation entirely since the hypothermic myocardium will not respond and shocks may cause asystole instead", correct: false, critical: false, explanation: "The protocol does not say to withhold all shocks — it says to limit to one shock. One attempt is warranted to see if the rhythm converts.", protocol_ref: "als_environmental_hypothermia" },
          { text: "Defibrillate using standard pediatric ACLS protocol with shocks every two minutes and continue with no modifications for hypothermia", correct: false, critical: false, explanation: "Standard repeated defibrillation is ineffective in severe hypothermia and is not per NY protocol. The hypothermia protocol specifically limits shock delivery.", protocol_ref: "als_environmental_hypothermia" }
        ]
      }
    ]
  },

  // ============================================================
  // 5. 32M — Found Unresponsive at Park (Opiate OD)
  // ============================================================
  {
    id: "medical-overdose-11",
    title: "32M — Found Unresponsive at Park",
    category: "Medical",
    difficulty: "Medium",
    dispatch: "32-year-old male found unresponsive on a park bench. Bystander states he may have been using drugs. Agonal respirations.",
    patient: { age: 32, sex: "M", cc: "Unresponsive, agonal respirations, suspected drug use" },
    scene: "City park, daytime. Patient is slumped on a bench. A bystander called 911 after noticing the patient wasn't moving. Drug paraphernalia (syringe, burnt spoon, small baggie with white residue) is on the ground nearby. No bystander has started any interventions.",
    vitals: { hr: 52, bp: "86/50", rr: 4, spo2: 72, gcs: 3, temp: "97.4°F", bg: "102 mg/dL" },
    history: { pmh: "Unknown — track marks on bilateral antecubital fossae", meds: "Unknown", allergies: "Unknown" },
    presentation: "Unresponsive male with pinpoint pupils bilaterally. Respiratory rate of 4 with agonal, shallow breaths. Cyanotic lips and fingertips. Track marks on arms. No signs of trauma. No response to sternal rub.",
    primary_protocol: "als_opioid_narcotic_overdose",
    related_protocols: [
      "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p",
      "als_oxygen_administration_and_airway_management",
      "als_respiratory_arrest_failure_adult_for_pediatric_see_respiratory_arrest_failure_pe",
      "bls_opioid_narcotic_overdose"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You find an unresponsive male with pinpoint pupils, RR of 4, and drug paraphernalia nearby. What is your FIRST priority?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "In suspected opioid OD, the immediate threat is respiratory failure leading to hypoxic cardiac arrest. Ventilation is the priority — opioid OD patients die from not breathing, not from the drug itself.",
        options: [
          { text: "Open the airway, begin BVM ventilation with high-flow oxygen, and administer intranasal naloxone per the opioid OD protocol", correct: true, critical: false, explanation: "Per NY protocol: ABCs, airway management, appropriate oxygen therapy, and naloxone intranasal for suspected opioid OD with respiratory insufficiency.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer intranasal naloxone immediately and wait two minutes for a response before initiating any airway interventions", correct: false, critical: true, explanation: "Naloxone takes time to work. With a RR of 4 and SpO2 of 72%, this patient will arrest without immediate ventilatory support. Never wait to ventilate.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Check a blood glucose level first since hypoglycemia can mimic an opioid overdose with unresponsiveness and depressed breathing", correct: false, critical: false, explanation: "While blood glucose should be checked (EMT level), it should not delay airway management and ventilation in a patient with a RR of 4 and SpO2 of 72%.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Place the patient in the recovery position and monitor for improvement since most opioid overdoses will self-resolve with time", correct: false, critical: true, explanation: "A patient with RR of 4, SpO2 72%, and GCS 3 is in respiratory arrest. Without intervention, this patient will progress to cardiac arrest and death.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "assessment",
        prompt: "After BVM ventilations and intranasal naloxone, the patient's respirations improve slightly to 8/min. Blood glucose is 102 mg/dL. Which actions are appropriate given incomplete response and polysubstance concern? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "SpO2 improving with BVM. Patient still unresponsive but now has some respiratory effort. The white residue in the baggie could be heroin mixed with fentanyl or other substances.",
        vitals_update: { hr: 58, bp: "92/56", rr: 8, spo2: 84, gcs: 4 },
        clinical_pearl: "Many street opioids are now mixed with fentanyl, xylazine, or benzodiazepines. Naloxone only reverses opioids — if the patient doesn't fully respond, consider polysubstance exposure. Xylazine does NOT respond to naloxone.",
        options: [
          { text: "Continue assisted ventilations and assess for signs of polysubstance ingestion including pupil response, muscle tone, and cardiac rhythm", correct: true, critical: false, explanation: "Given incomplete response to naloxone, polysubstance use is likely. Assessing for other toxidrome features while continuing ventilatory support is the appropriate next step.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" },
          { text: "Prepare for the possibility that a second naloxone dose may be needed per protocol if respiratory insufficiency persists at five minutes", correct: true, critical: false, explanation: "Per NY protocol, a repeat intranasal naloxone dose may be given in 5 minutes if no improvement in respiratory effort. Planning for this is appropriate.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "The blood glucose is normal and naloxone was given so the patient should be fully awake soon — stop BVM and monitor only", correct: false, critical: true, explanation: "The patient still has RR of 8, SpO2 of 84%, and GCS of 4. Stopping ventilatory support prematurely risks re-arrest, especially with polysubstance exposure.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer activated charcoal in case the patient also ingested pills, to reduce further absorption of any oral substances", correct: false, critical: false, explanation: "Activated charcoal is not in the NY prehospital protocols and is contraindicated in a patient with GCS of 4 due to aspiration risk.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the AEMT level, the patient has not improved further after the initial intranasal naloxone. What is the next naloxone intervention per NY protocol?",
        multi_select: false,
        level_filter: "AEMT-CC-P",
        narrative: "Five minutes since the first dose of intranasal naloxone. Respiratory effort remains inadequate. IV access has been established.",
        vitals_update: { hr: 62, bp: "94/58", rr: 8, spo2: 88, gcs: 5 },
        clinical_pearl: "At the AEMT level and above, naloxone can be titrated IV in ≤0.5 mg increments. The goal is to restore adequate respirations, NOT full consciousness — overly aggressive naloxone can cause acute withdrawal, vomiting, and combativeness.",
        options: [
          { text: "Titrate Naloxone IV in 0.5 mg or smaller increments, targeting respiratory improvement, up to a maximum of 2 mg per dose", correct: true, critical: false, explanation: "Per NY protocol (AEMT+): titrate naloxone to max 2 mg per dose IV/IM/IN, only if respiratory arrest or insufficiency. If IV, consider ≤0.5 mg increments.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer Naloxone 4 mg IV push as a single bolus dose to ensure complete opioid receptor blockade and full patient arousal", correct: false, critical: false, explanation: "A 4 mg IV bolus risks acute opioid withdrawal with projectile vomiting (aspiration risk), combativeness, and catecholamine surge. Titrate in small increments.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer a second intranasal naloxone dose since the IV route is not significantly faster and is less reliable in this patient", correct: false, critical: false, explanation: "IV naloxone has faster onset and allows precise titration. With IV access established, IV administration in small increments is preferred at the AEMT level.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer Flumazenil 0.2 mg IV in addition to naloxone since benzodiazepines may be contributing to the persistent unresponsiveness", correct: false, critical: false, explanation: "Flumazenil is not part of the NY prehospital opioid OD protocol and can cause seizures in benzodiazepine-dependent patients. It is generally contraindicated in undifferentiated OD.", protocol_ref: "als_poisoning_overdose_adult_undifferentiated_for_pediatric_see_poisoning_overdose_p" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After titrated IV naloxone (total 1 mg), the patient begins breathing at 14/min and opens his eyes to voice. He becomes agitated and wants to refuse transport. How should you manage this?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is now more responsive but irritable. He is pulling at the IV and trying to get off the stretcher. He says he is fine and wants to leave.",
        vitals_update: { hr: 88, bp: "118/72", rr: 14, spo2: 96, gcs: 14 },
        clinical_pearl: "Naloxone's duration (30-90 min) is shorter than most opioids (4-6 hours). Patients who refuse transport after naloxone reversal are at high risk of re-narcotization and death once the naloxone wears off.",
        options: [
          { text: "Strongly encourage transport, explain that naloxone wears off before the opioid does, and that he is at risk of re-narcotization and death", correct: true, critical: false, explanation: "Naloxone duration is shorter than most opioids. The patient should be strongly encouraged to accept transport for monitoring. Document a thorough refusal if he ultimately declines.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Immediately sedate the patient with midazolam to prevent him from leaving against medical advice and ensure safe transport", correct: false, critical: true, explanation: "Sedating a patient to prevent refusal is assault/battery and ethically/legally impermissible. Patients with capacity can refuse treatment.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Accept his refusal immediately since he is now alert and oriented and has the right to refuse medical care at any time", correct: false, critical: false, explanation: "While patients can refuse, this patient's decision-making capacity may be impaired by residual drug effects. A thorough informed refusal process is needed.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Administer additional naloxone to ensure complete opioid reversal so the patient will be more cooperative during transport", correct: false, critical: false, explanation: "Additional naloxone when the patient is breathing adequately risks precipitating severe withdrawal. The goal is adequate respiration, not full reversal.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      },
      {
        phase: "transport",
        prompt: "The patient agrees to transport. During the ride, he becomes increasingly drowsy again. His RR drops to 10 and SpO2 to 91%. What do you do?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Eight minutes into transport. The patient who was previously alert is now difficult to arouse. Respirations are becoming shallow again.",
        vitals_update: { hr: 64, bp: "96/60", rr: 10, spo2: 91, gcs: 9 },
        clinical_pearl: "Re-narcotization is a known risk when naloxone wears off. This is why opioid OD patients require ongoing monitoring and possible repeat naloxone dosing.",
        options: [
          { text: "Assist ventilations with BVM, administer additional naloxone titrated to respiratory improvement, and notify the receiving hospital", correct: true, critical: false, explanation: "Re-narcotization is occurring as the naloxone wears off. Ventilatory support and repeat naloxone dosing per protocol are indicated, along with hospital notification.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Apply a nasal cannula at 4 liters per minute and continue monitoring since the vitals are still within acceptable parameters", correct: false, critical: false, explanation: "A RR of 10 with declining SpO2 and GCS of 9 in a known opioid OD patient represents re-narcotization requiring active intervention, not just monitoring.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Perform a sternal rub and jaw thrust to stimulate breathing and only intervene further if respirations drop below 8 per minute", correct: false, critical: false, explanation: "Painful stimuli alone will not address the pharmacological cause of the respiratory depression. Naloxone and ventilatory support are needed.", protocol_ref: "als_opioid_narcotic_overdose" },
          { text: "Place the patient in the left lateral recovery position and increase transport speed since you are close to the receiving hospital", correct: false, critical: false, explanation: "Recovery position alone does not address the declining respiratory status. Active ventilatory support and naloxone are needed regardless of proximity to the hospital.", protocol_ref: "als_opioid_narcotic_overdose" }
        ]
      }
    ]
  },

  // ============================================================
  // 6. 17M — Struck by Lightning (Lightning strike cardiac arrest)
  // ============================================================
  {
    id: "enviro-lightning-12",
    title: "17M — Struck by Lightning",
    category: "Environmental",
    difficulty: "Hard",
    dispatch: "17-year-old male struck by lightning at a soccer field. Unresponsive. Thunderstorm in area.",
    patient: { age: 17, sex: "M", cc: "Lightning strike, unresponsive, not breathing" },
    scene: "Open soccer field during a thunderstorm. Lightning struck near the patient's position approximately 3 minutes ago per witnesses. Patient is supine on the wet grass. Two teammates are standing nearby in shock. Rain is falling and lightning continues in the area. No other victims apparent.",
    vitals: { hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 3, temp: "97.8°F", bg: "134 mg/dL" },
    history: { pmh: "None — healthy teenager per teammates", meds: "None", allergies: "NKDA" },
    presentation: "Unresponsive 17-year-old male lying supine on wet grass. No respirations. No palpable pulses. Lichtenberg figures (ferning pattern) visible on the left chest and arm. Linear burn along the left flank. Clothing is torn. Pupils fixed and dilated bilaterally. Tympanic membranes cannot be visualized due to field conditions.",
    primary_protocol: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric",
    related_protocols: [
      "als_burns",
      "als_trauma_general",
      "als_oxygen_administration_and_airway_management",
      "bls_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to an open soccer field during an active thunderstorm with a pulseless lightning strike victim. What is your FIRST consideration?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: null,
        vitals_update: null,
        clinical_pearl: "Lightning strike victims are safe to touch — they do not carry residual electrical charge. However, the RESCUER is at risk of being struck in an active storm. Move the patient to safety if possible, or accept the risk and begin resuscitation.",
        options: [
          { text: "Rapidly assess for ongoing lightning danger to the crew, move the patient to the ambulance or shelter if feasible, and begin CPR immediately", correct: true, critical: false, explanation: "Scene safety is always first. The patient does not carry charge, but the open field during a storm is dangerous. Move to safety and begin aggressive resuscitation.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Do not approach the patient until the thunderstorm has completely passed since the patient may still be carrying an electrical charge", correct: false, critical: true, explanation: "Lightning victims do NOT retain electrical charge — they are safe to touch. Delaying resuscitation until the storm passes will result in the patient's death.", protocol_ref: "als_burns" },
          { text: "Begin CPR immediately in place on the wet field since moving the patient wastes critical resuscitation time during cardiac arrest", correct: false, critical: false, explanation: "While rapid CPR is essential, performing resuscitation on an open field during active lightning puts the entire crew at risk. A brief move to safety is warranted.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Perform spinal immobilization first with a cervical collar and backboard since lightning can cause severe muscle contractions and spinal injury", correct: false, critical: false, explanation: "While spinal injury is possible, in cardiac arrest the priority is immediate CPR. Spinal precautions should not delay resuscitation in a pulseless patient.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You have moved the patient to the ambulance. The monitor shows asystole. Which statements about lightning strike cardiac arrest are correct? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Patient is now in the ambulance. Monitor confirms asystole in two leads. CPR is in progress.",
        vitals_update: null,
        clinical_pearl: "Lightning typically causes cardiac arrest via massive DC countershock causing asystole. The heart's automaticity may restore a rhythm spontaneously, but prolonged respiratory arrest (from brainstem stunning) causes secondary hypoxic arrest if ventilation is not provided.",
        options: [
          { text: "Lightning often causes a primary asystolic arrest, but the heart may regain automaticity — aggressive prolonged resuscitation is warranted", correct: true, critical: false, explanation: "Lightning strike arrests have better outcomes than other causes of asystole, especially in young patients. The massive DC shock causes transient asystole that may self-correct with aggressive resuscitation.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Respiratory arrest from brainstem stunning often outlasts the cardiac arrest, so ventilation is critical to prevent secondary hypoxic arrest", correct: true, critical: false, explanation: "Lightning stuns the brainstem respiratory center. Even if the heart restarts spontaneously, the patient may not breathe — leading to secondary hypoxic cardiac arrest without ventilatory support.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Lightning injuries are primarily thermal burns so the cardiac arrest is likely from hypovolemic shock due to massive fluid shifts", correct: false, critical: false, explanation: "Lightning injury is primarily electrical, not thermal. The cardiac arrest is from the electrical effect on the myocardium causing asystole, not from burns or hypovolemia.", protocol_ref: "als_burns" },
          { text: "Asystole from lightning indicates massive irreversible myocardial necrosis and resuscitation beyond ten minutes is considered futile", correct: false, critical: false, explanation: "This is incorrect. Lightning arrest differs from prolonged electrocution. Survival rates from lightning cardiac arrest are much higher with aggressive, prolonged resuscitation.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "What interventions should you perform for this lightning strike cardiac arrest? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "High-quality CPR has been in progress for 4 minutes. The rhythm remains asystole.",
        vitals_update: null,
        clinical_pearl: "Treat lightning cardiac arrest per standard cardiac arrest protocols. Also assess for and treat associated injuries: burns, tympanic membrane rupture, fractures, and spinal injury.",
        options: [
          { text: "Continue high-quality CPR, establish IV/IO access, and administer Epinephrine 1 mg IV per the cardiac arrest protocol every 3-5 minutes", correct: true, critical: false, explanation: "Standard cardiac arrest management with CPR and epinephrine is indicated per the cardiac arrest protocol. Lightning arrest is treated per standard ACLS/PALS algorithms.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" },
          { text: "Secure the airway with endotracheal intubation and provide ventilation with 100% oxygen, ensuring adequate chest rise with each breath", correct: true, critical: false, explanation: "Advanced airway management and oxygenation are indicated in cardiac arrest. Lightning can cause respiratory arrest from brainstem stunning, making ventilation critical.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Cover the visible burns with dry sterile dressings and assess for additional injuries including potential spinal and blast-type injuries", correct: true, critical: false, explanation: "Lightning causes burns and can cause blast-type injuries. Cover burns with dry sterile dressings per the burns protocol and assess for associated trauma.", protocol_ref: "als_burns" },
          { text: "Defibrillate immediately at 200 joules since all lightning strike arrests should receive early defibrillation regardless of the presenting rhythm", correct: false, critical: false, explanation: "Defibrillation is only indicated for shockable rhythms (VF/pulseless VT). Asystole is not a shockable rhythm — shocking asystole is not indicated and wastes time.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After 6 minutes of resuscitation, the monitor shows a sinus rhythm at 72 bpm. You feel a strong carotid pulse. BP is 108/68. What is your next priority?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "ROSC achieved. The patient remains unresponsive but has spontaneous respirations at 10 breaths per minute. Strong pulses palpable.",
        vitals_update: { hr: 72, bp: "108/68", rr: 10, spo2: 94, gcs: 3 },
        clinical_pearl: "Post-ROSC care in lightning strike includes aggressive airway management, monitoring for rearrest, treating burns, and assessing for cervical spine and other traumatic injuries. These patients need a trauma center.",
        options: [
          { text: "Maintain the airway with assisted ventilations, apply spinal precautions, continue monitoring for rearrest, and transport urgently to a trauma center", correct: true, critical: false, explanation: "Post-ROSC priorities include airway management, spinal precautions (mechanism supports injury), cardiac monitoring, and transport to a facility that can manage multi-system lightning injuries.", protocol_ref: "als_trauma_general" },
          { text: "Extubate the patient since he now has spontaneous respirations and place him on a non-rebreather mask at 15 liters per minute", correct: false, critical: false, explanation: "With a GCS of 3 and RR of only 10, the patient still needs airway protection and assisted ventilation. Premature extubation risks aspiration and re-arrest.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Focus primarily on burn wound care with moist sterile dressings and IV morphine for pain management since the arrest has resolved", correct: false, critical: false, explanation: "While burns need attention, post-ROSC monitoring, airway management, and assessment for life-threatening injuries take priority over burn wound care in the field.", protocol_ref: "als_burns" },
          { text: "Administer an amiodarone bolus prophylactically to prevent recurrent ventricular dysrhythmias in the post-resuscitation period", correct: false, critical: false, explanation: "Prophylactic amiodarone is not indicated when the patient converted from asystole (not VF/VT). Treat dysrhythmias if they occur, not prophylactically.", protocol_ref: "als_cardiac_arrest_adult_general_approach_for_pediatric_see_cardiac_arrest_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "During transport, you note the patient has a rigid abdomen and bruising on the left flank. His BP has dropped to 88/52 and HR is rising to 112. What do you suspect?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Ten minutes into transport. The patient's abdomen is distended and rigid. Left flank ecchymosis noted. Hemodynamics are worsening.",
        vitals_update: { hr: 112, bp: "88/52", rr: 10, spo2: 93, gcs: 3 },
        clinical_pearl: "Lightning can cause opisthotonic muscle contraction severe enough to cause fractures and internal organ injury. The massive energy discharge can also cause direct organ damage similar to blunt force trauma.",
        options: [
          { text: "Suspect internal abdominal hemorrhage from blast-type injury, administer IV fluid bolus, and expedite transport to the trauma center", correct: true, critical: false, explanation: "Rigid abdomen with flank bruising and hemodynamic deterioration after lightning strike suggests intra-abdominal hemorrhage, likely splenic or hepatic injury from blast effect. Fluid resuscitation and rapid surgical evaluation are needed.", protocol_ref: "als_trauma_general" },
          { text: "The abdominal rigidity is likely from post-arrest muscle spasm and the dropping BP is expected during the post-resuscitation period", correct: false, critical: false, explanation: "Rigid abdomen with ecchymosis and worsening vitals should not be attributed to benign muscle spasm. This presentation requires urgent evaluation for internal hemorrhage.", protocol_ref: "als_trauma_general" },
          { text: "Suspect a tension pneumothorax from the lightning blast injury and perform bilateral needle decompression immediately", correct: false, critical: false, explanation: "The clinical findings (rigid abdomen, flank ecchymosis, dropping BP) point to abdominal hemorrhage, not pneumothorax. Needle decompression is not indicated without thoracic findings.", protocol_ref: "als_chest_trauma" },
          { text: "Administer a vasopressor push-dose epinephrine to maintain blood pressure since additional fluid may worsen cerebral edema post-arrest", correct: false, critical: false, explanation: "In hemorrhagic shock, volume replacement is the priority. Vasopressors without volume are ineffective. Cerebral edema concern does not override treating hemorrhagic shock.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  }
];
