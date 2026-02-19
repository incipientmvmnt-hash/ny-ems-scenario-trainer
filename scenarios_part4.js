const SCENARIOS_P4 = [
  // ============================================================
  // SCENARIO 1: 42M — Industrial Accident, Arm Caught in Machine
  // ============================================================
  {
    id: "trauma-crush-01",
    title: "42M — Industrial Accident, Arm Caught in Machine",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "42-year-old male, arm caught in industrial machine, conscious and alert, fire rescue on scene for extrication",
    patient: { age: 42, sex: "M", cc: "Right arm trapped in industrial press" },
    scene: "You arrive at a manufacturing plant. A 42-year-old male has his right arm trapped in an industrial hydraulic press from mid-forearm to above the elbow. Fire rescue estimates 20–30 minutes until extrication. The patient is alert, oriented, and in severe pain. Co-workers state the arm has been trapped for approximately 45 minutes.",
    vitals: { hr: 112, bp: "148/92", rr: 24, spo2: 97, gcs: 15, temp: "98.6°F", bg: "126 mg/dL" },
    history: { pmh: "Hypertension, controlled with medication", meds: "Amlodipine 5 mg daily", allergies: "NKDA" },
    presentation: "Patient is alert and diaphoretic. The right arm is visibly compressed by the machine from the mid-forearm to above the elbow. Distal to the entrapment, the hand is pale, cool, and pulseless. The patient rates pain at 10/10. There is no active external hemorrhage visible.",
    primary_protocol: "als_musculoskeletal_trauma",
    related_protocols: [
      "als_hyperkalemia_adult",
      "als_trauma_general",
      "als_bleeding_hemorrhage_control",
      "als_pain_management_adult_for_pediatric_see_pain_management_pediatric",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find the patient's arm trapped for approximately 45 minutes. While awaiting extrication, what are your primary clinical concerns? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Fire rescue is working to free the arm. The patient is alert and talking. The trapped limb has been compressed for nearly an hour.",
        clinical_pearl: "Crush injuries with prolonged entrapment (>1 hour, though risk begins earlier) cause rhabdomyolysis. When compression is released, potassium, myoglobin, and lactic acid flood the systemic circulation, risking fatal hyperkalemia and cardiac arrest.",
        options: [
          { text: "Crush syndrome with life-threatening hyperkalemia upon release, requiring pre-treatment with IV fluids before extrication occurs", correct: true, critical: false, explanation: "Prolonged crush injury causes cell death and accumulation of intracellular contents. Upon release, a sudden potassium surge can cause fatal cardiac dysrhythmias. Pre-treatment with IV fluids is critical.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Hemorrhage control readiness with tourniquets and dressings staged for immediate application when the limb is freed from the machine", correct: true, critical: false, explanation: "While crush syndrome is the primary systemic threat, hemorrhage upon release is also a significant concern. Having tourniquets and dressings staged is part of comprehensive extrication preparedness.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Compartment syndrome requiring immediate fasciotomy in the field before any extrication can safely begin on the trapped extremity", correct: false, critical: true, explanation: "Fasciotomy is a surgical procedure that cannot be performed in the field by EMS. While compartment syndrome is a concern, the immediate life threat is crush syndrome upon release.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Fat embolism from likely long bone fractures, which requires immediate heparin administration before the patient is extricated", correct: false, critical: false, explanation: "Fat embolism is a hospital concern with long bone fractures, not an immediate prehospital priority. Heparin is not a prehospital intervention for this scenario.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What interventions should be initiated BEFORE extrication at the CC/Paramedic level? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "Fire rescue estimates 15 more minutes until the arm is freed. The limb has now been trapped for approximately one hour.",
        clinical_pearl: "NY Hyperkalemia protocol identifies crush injury patients as at risk. Aggressive IV normal saline prior to release helps dilute the expected potassium load. Cardiac monitoring is essential to detect hyperkalemic ECG changes early.",
        options: [
          { text: "Establish vascular access and begin aggressive normal saline fluid bolus to dilute anticipated toxic metabolite release", correct: true, critical: false, explanation: "Per NY protocol, vascular access and NS bolus are indicated. Pre-hydration before release helps dilute the potassium and myoglobin surge expected with reperfusion.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Apply cardiac monitor and obtain 12-lead ECG to establish a baseline before the extrication and reperfusion event", correct: true, critical: false, explanation: "Per NY Hyperkalemia protocol, CC level initiates cardiac monitor and 12-lead ECG. Baseline rhythm is essential because hyperkalemic changes (peaked T waves, widened QRS) may develop rapidly after release.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Administer calcium chloride 1 gram IV prophylactically now to prevent hyperkalemic cardiac arrest after extrication", correct: false, critical: false, explanation: "Per NY protocol, calcium chloride is reserved for Paramedic level when there is cardiac arrest or dangerous ECG changes (QTc prolongation, QRS widening). Prophylactic administration is not a standing order.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Place a tourniquet on the upper arm proximal to the crush site and inflate it before extrication to prevent reperfusion", correct: false, critical: true, explanation: "A tourniquet proximal to the injury would not prevent systemic release of metabolites already accumulated in the tissues, and could worsen ischemia. This is not indicated per NY protocols.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The arm is freed. Within 3 minutes, the cardiac monitor shows peaked T waves and a widening QRS complex. What is the appropriate Paramedic-level intervention?",
        multi_select: false,
        level_filter: "P",
        narrative: "Immediately after extrication, the patient becomes diaphoretic and nauseated. The monitor shows peaked T waves and QRS widening to approximately 160 ms.",
        vitals_update: { hr: 52, bp: "88/54", rr: 28, spo2: 94, gcs: 14 },
        clinical_pearl: "Per NY protocol, calcium chloride 1 gram IV is indicated for QTc prolongation or QRS widening in suspected hyperkalemia. It stabilizes the cardiac membrane but does not lower potassium. It must be given through a large, proximal, easily flowing IV.",
        options: [
          { text: "Administer calcium chloride 1 gram IV through a large proximal line, followed by sodium bicarbonate 50 mEq IV", correct: true, critical: false, explanation: "Per NY Hyperkalemia protocol, Paramedic standing order includes calcium chloride 1 g IV for QRS widening, followed by sodium bicarbonate 50 mEq IV (with at least 50 mL NS flush between the two medications).", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Immediately administer amiodarone 150 mg IV over 10 minutes to treat the bradycardia and widened QRS complex", correct: false, critical: true, explanation: "The wide QRS is caused by hyperkalemia, not a primary cardiac dysrhythmia. Amiodarone does not address the underlying potassium toxicity and delays definitive treatment.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Perform synchronized cardioversion at 100 joules to convert the widened QRS rhythm back to a normal sinus rhythm", correct: false, critical: true, explanation: "Cardioversion will not correct a metabolic cause of QRS widening. The treatment is correction of hyperkalemia with calcium chloride and sodium bicarbonate.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Administer atropine 1 mg IV to address the bradycardia while continuing the normal saline infusion at maintenance rate", correct: false, critical: false, explanation: "While atropine treats bradycardia, the underlying cause is hyperkalemia. Without addressing the potassium, atropine alone will be ineffective and delays calcium chloride.", protocol_ref: "als_hyperkalemia_adult" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After calcium chloride and sodium bicarbonate, the QRS narrows and heart rate improves. What additional therapies may be considered per medical control? (Select all that apply)",
        multi_select: true,
        level_filter: "CC-P",
        narrative: "The monitor now shows a narrower QRS (~110 ms) and heart rate of 72. BP has improved to 96/64 with ongoing fluids. The arm appears severely mangled with obvious deformity.",
        vitals_update: { hr: 72, bp: "96/64", rr: 22, spo2: 96, gcs: 15 },
        options: [
          { text: "Albuterol 2.5 mg via nebulizer without ipratropium, repeated every 10 minutes as a medical control consideration", correct: true, critical: false, explanation: "Per NY Hyperkalemia protocol, nebulized albuterol (without ipratropium) is a medical control consideration to help shift potassium intracellularly.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Continue aggressive normal saline boluses to maintain adequate perfusion and promote renal clearance of myoglobin", correct: true, critical: false, explanation: "Continued fluid resuscitation is appropriate per shock and hyperkalemia protocols. Additional NS may be given per medical control to maintain perfusion and assist renal clearance.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Administer furosemide 40 mg IV to force diuresis and accelerate renal excretion of the excess potassium load", correct: false, critical: false, explanation: "Furosemide is not in the NY prehospital protocol for hyperkalemia. Forced diuresis in a hypovolemic patient could worsen hypotension and renal injury.", protocol_ref: "als_hyperkalemia_adult" },
          { text: "Administer dextrose 50% with regular insulin IV push to rapidly shift potassium into the intracellular compartment", correct: false, critical: false, explanation: "Insulin and dextrose for hyperkalemia management is not included in the NY prehospital protocols. This is a hospital-based intervention.", protocol_ref: "als_hyperkalemia_adult" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's right arm is severely deformed with an open wound near the suspected fracture site. What is the appropriate musculoskeletal management?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Now that the arm is free, you can see extensive soft tissue damage with bone visible through a laceration. The hand remains pulseless and cyanotic.",
        clinical_pearl: "Per NY protocol, any open wound near a suspected bone injury should be considered an open fracture. For open fractures with delayed arrival to definitive care, antibiotics (cefazolin 2 g IV or moxifloxacin 400 mg PO) may be given as regionally approved.",
        options: [
          { text: "Splint the extremity, cover the open wound with sterile dressings, and consider cefazolin 2 g IV as regionally approved", correct: true, critical: false, explanation: "Per NY Musculoskeletal Trauma protocol, splinting, wound coverage, and antibiotics for open fractures with delayed definitive care are indicated. Cefazolin 2 g IV (adult dose) is listed as regionally approved.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Attempt to reduce the fracture by applying strong longitudinal traction to restore distal pulses before splinting", correct: false, critical: true, explanation: "Aggressive reduction of a severely crushed limb with open fracture could worsen injury. Gentle alignment is indicated only for severely deformed long bones or cyanotic pulseless extremities, not forceful reduction.", protocol_ref: "als_musculoskeletal_trauma" },
          { text: "Apply a tourniquet to the upper arm immediately to control all potential bleeding from the open fracture site", correct: false, critical: false, explanation: "Tourniquet is indicated for uncontrollable extremity bleeding. The scenario describes no active severe hemorrhage. Direct pressure and dressings are first-line per protocol.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Irrigate the open wound extensively with sterile saline in the field to reduce infection risk before applying dressings", correct: false, critical: false, explanation: "Wound irrigation in the field is not emphasized in NY protocols for open fractures. Sterile dressing coverage and antibiotics as regionally approved are the indicated interventions.", protocol_ref: "als_musculoskeletal_trauma" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most appropriate transport decision for this patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is stabilized with IV fluids running, cardiac monitor in place, and the arm splinted. Two hospitals are available: a community hospital 10 minutes away and a Level I trauma center 25 minutes away.",
        clinical_pearl: "Per NY Trauma General protocol, unstable trauma patients should have transport initiated within 10 minutes of extrication. Trauma center destination is guided by the Trauma Patient Destination protocol.",
        options: [
          { text: "Transport to the Level I trauma center 25 minutes away, as this patient meets trauma center criteria for the mechanism and injuries", correct: true, critical: false, explanation: "Per NY protocols, trauma patients meeting criteria should go to the closest appropriate trauma center. Crush injury with open fracture, vascular compromise, and hyperkalemia warrants a trauma center.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Transport to the community hospital 10 minutes away because the patient needs the fastest possible emergency department evaluation", correct: false, critical: false, explanation: "While closer, a community hospital may lack the surgical and critical care capabilities needed for crush syndrome, potential amputation, and ongoing hyperkalemia management.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Request air medical transport to a regional burn center since the hydraulic press likely caused thermal injury to tissues", correct: false, critical: false, explanation: "There is no indication of thermal burns. A hydraulic press causes crush injury, not burn injury. Air medical adds time for a 25-minute ground transport to a trauma center.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene for further stabilization until repeat 12-lead ECG shows complete resolution of all hyperkalemic changes", correct: false, critical: false, explanation: "Per NY protocol, unstable trauma patients should have transport initiated within 10 minutes of extrication. Continued monitoring and treatment should occur during transport.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: 19M — Assault Victim, Facial Trauma
  // ============================================================
  {
    id: "trauma-facial-01",
    title: "19M — Assault Victim, Facial Trauma",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "19-year-old male, assault victim, significant facial injuries, bleeding heavily from face",
    patient: { age: 19, sex: "M", cc: "Severe facial trauma after assault" },
    scene: "You arrive at a parking lot behind a bar. A 19-year-old male is seated on the ground, leaning forward, with blood pouring from his nose and mouth. Bystanders state he was struck multiple times in the face with a metal pipe. The patient is gurgling and struggling to breathe. Police are on scene and the assailant has fled.",
    vitals: { hr: 124, bp: "102/70", rr: 28, spo2: 88, gcs: 12, temp: "98.2°F" },
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    presentation: "The patient's midface is visibly unstable and mobile on palpation. There is massive swelling of the face, bilateral periorbital ecchymosis, and CSF-tinged fluid draining from the nose. The patient is making gurgling sounds, has blood pooling in the oropharynx, and cannot maintain his own airway. Trismus is present.",
    primary_protocol: "als_trauma_general",
    related_protocols: [
      "als_oxygen_administration_and_airway_management",
      "als_bleeding_hemorrhage_control",
      "als_trauma_patient_destination"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "As you approach the patient, what is your immediate priority based on the presentation?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is seated upright, leaning forward, with blood and gurgling sounds audible from several feet away. SpO₂ reads 88%.",
        clinical_pearl: "In massive facial trauma, the airway is the immediate life threat. Blood, bone fragments, loose teeth, and tissue swelling can rapidly cause complete obstruction. Position and aggressive suctioning take priority over all other interventions.",
        options: [
          { text: "Aggressive airway management with continuous suctioning and positioning to prevent aspiration of blood and debris", correct: true, critical: false, explanation: "Per NY protocol, airway management is the first priority. Massive facial trauma with gurgling and SpO₂ 88% indicates an airway emergency requiring immediate suctioning and positioning.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Obtain a full set of vitals and complete the rapid trauma assessment before initiating any airway interventions", correct: false, critical: true, explanation: "Delaying airway management in a patient with SpO₂ 88% and audible gurgling to complete an assessment could result in complete obstruction and death.", protocol_ref: "als_trauma_general" },
          { text: "Apply direct pressure to all visible facial bleeding sites to control hemorrhage before addressing the airway", correct: false, critical: false, explanation: "While hemorrhage control is important, the immediate life threat is airway compromise. Hemorrhage control of facial bleeding is secondary to airway management.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Immediately immobilize the cervical spine with a rigid collar before any further assessment or intervention can begin", correct: false, critical: false, explanation: "While spinal precautions are considered in trauma, a rigid cervical collar on a patient with active airway compromise and massive facial swelling could worsen the airway emergency.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "assessment",
        prompt: "After suctioning, the patient remains unable to maintain his airway. You note midface instability, trismus, and massive oropharyngeal swelling. What is your assessment?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "Despite continuous suctioning, blood continues to pool in the airway. The midface moves freely when palpated. The jaw is clenched and cannot be opened. SpO₂ remains at 86% on high-flow oxygen.",
        vitals_update: { hr: 132, bp: "96/62", spo2: 86, gcs: 11 },
        clinical_pearl: "LeFort II and III fractures involve separation of the midface from the cranium. The mobile midface can collapse posteriorly, obstructing the airway. CSF rhinorrhea indicates basilar skull fracture, contraindicating nasotracheal intubation and nasal airways.",
        options: [
          { text: "LeFort fracture with predicted difficult airway — oral intubation will be extremely challenging due to trismus and bleeding", correct: true, critical: false, explanation: "The mobile midface, bilateral periorbital ecchymosis, CSF rhinorrhea, trismus, and massive bleeding are classic for LeFort II/III fractures with a critically difficult airway.", protocol_ref: "als_trauma_general" },
          { text: "Isolated nasal fracture with epistaxis that is causing the airway difficulty and can be controlled with nasal packing", correct: false, critical: true, explanation: "This presentation far exceeds an isolated nasal fracture. Midface instability and CSF rhinorrhea indicate a complex LeFort fracture. Nasal packing could be catastrophic with basilar skull fracture.", protocol_ref: "als_trauma_general" },
          { text: "Mandibular fracture with posterior tongue displacement that will be resolved by pulling the jaw forward manually", correct: false, critical: false, explanation: "While mandible fractures cause tongue displacement, this patient has midface instability indicating a LeFort fracture. Simple jaw thrust alone will not resolve the complex airway obstruction.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Traumatic brain injury is the primary concern, and the airway sounds are simply due to the patient's decreased consciousness", correct: false, critical: false, explanation: "While TBI may be present, the gurgling and SpO₂ 86% are caused by structural airway compromise from the facial fractures, not merely decreased consciousness.", protocol_ref: "als_trauma_general" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's SpO₂ drops to 82%. Oral intubation fails due to massive bleeding obscuring visualization and trismus. What is the next airway intervention?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "One attempt at oral intubation was unsuccessful — the laryngoscope view is completely obscured by blood despite suctioning. The patient is now obtunded with a GCS of 8.",
        vitals_update: { hr: 140, bp: "90/58", spo2: 82, gcs: 8 },
        clinical_pearl: "Per NY Airway protocol, patients with unmanageable airways go to the closest hospital. Surgical airway (cricothyrotomy) is a Paramedic-level intervention. Nasotracheal intubation is contraindicated when basilar skull fracture is suspected (CSF rhinorrhea).",
        options: [
          { text: "Perform a surgical cricothyrotomy since oral intubation has failed and nasal intubation is contraindicated by CSF rhinorrhea", correct: true, critical: false, explanation: "Per NY protocol, surgical airway is a Paramedic-level intervention. With failed oral intubation, contraindicated nasal intubation (basilar skull fracture), this is the definitive prehospital airway.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Attempt nasotracheal intubation since oral intubation failed and a nasal approach may bypass the oropharyngeal bleeding", correct: false, critical: true, explanation: "Nasal intubation is absolutely contraindicated with suspected basilar skull fracture (CSF rhinorrhea). The tube could enter the cranial vault, causing catastrophic brain injury.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Insert a nasopharyngeal airway to temporarily bypass the oral bleeding while continuing bag-valve-mask ventilation attempts", correct: false, critical: true, explanation: "Nasopharyngeal airways are contraindicated with basilar skull fracture signs (CSF rhinorrhea). Insertion could penetrate the cranial vault through the fracture site.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Place a supraglottic airway device as a rescue airway since it does not require visualization and can be inserted blindly", correct: false, critical: false, explanation: "While a supraglottic airway is an option, massive oropharyngeal bleeding and swelling may prevent adequate seal and ventilation. With CSF rhinorrhea and failed oral intubation, surgical airway is indicated.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After establishing a surgical airway with improving oxygenation, what additional interventions are indicated? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "Cricothyrotomy is successful. SpO₂ is rising to 94%. The patient remains tachycardic at 138 with BP 88/56. He is unresponsive with a GCS of 6T.",
        vitals_update: { hr: 138, bp: "88/56", spo2: 94, gcs: 6 },
        options: [
          { text: "Establish vascular access and administer normal saline 500 mL bolus to treat the hypotension and signs of shock", correct: true, critical: false, explanation: "Per NY Trauma General and Shock protocols, vascular access and NS 500 mL bolus are indicated for hypotension (SBP <100) with signs of hypoperfusion.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Continue ongoing hemorrhage control of facial bleeding with direct pressure and hemostatic dressings as available", correct: true, critical: false, explanation: "Per NY Bleeding/Hemorrhage Control protocol, direct pressure with consideration of hemostatic dressings is indicated for ongoing facial hemorrhage.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Administer tranexamic acid 1 gram IV to reduce ongoing hemorrhage from the extensive facial fracture complex", correct: false, critical: false, explanation: "Tranexamic acid (TXA) is not included in the current NY prehospital protocols as a standing order medication for trauma hemorrhage.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Administer fentanyl 100 mcg IV for pain management since the patient likely has severe pain from the facial injuries", correct: false, critical: false, explanation: "Per NY Pain Management protocol, altered mental status and SBP <100 mmHg are contraindications to standing order pain management. This patient has both.", protocol_ref: "als_pain_management_adult_for_pediatric_see_pain_management_pediatric" }
        ]
      },
      {
        phase: "transport",
        prompt: "With a surgical airway in place and ongoing resuscitation, what is the appropriate transport destination?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient has a surgical airway with SpO₂ 96%, two IVs running NS, and persistent facial hemorrhage. A community hospital is 5 minutes away and a Level I trauma center is 18 minutes away.",
        clinical_pearl: "Per NY Trauma General protocol, patients with unmanageable airways should go to the closest hospital. However, once the airway is secured (even surgically), trauma center destination criteria apply based on the overall injury pattern.",
        options: [
          { text: "Transport to the Level I trauma center 18 minutes away since the airway is now secured and the patient meets trauma center criteria", correct: true, critical: false, explanation: "With a secured surgical airway and vital signs responding to treatment, this patient meets trauma center criteria for the severity of injuries. The 18-minute transport is reasonable.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Transport to the community hospital 5 minutes away because the surgical airway is temporary and needs definitive conversion", correct: false, critical: false, explanation: "While a surgical airway needs conversion, the patient's injuries (LeFort fractures, possible TBI, hemorrhagic shock) require a trauma center's surgical capabilities.", protocol_ref: "als_trauma_general" },
          { text: "Remain on scene to stabilize the patient further since the blood pressure has not yet reached a systolic of 100 mmHg", correct: false, critical: true, explanation: "Per NY Trauma General protocol, unstable patients should have transport initiated within 10 minutes of extrication. Continued resuscitation occurs during transport.", protocol_ref: "als_trauma_general" },
          { text: "Request air medical evacuation to a tertiary center with oral and maxillofacial surgery regardless of ground transport times", correct: false, critical: false, explanation: "With a trauma center only 18 minutes away by ground, air medical would likely not reduce transport time and adds operational delays.", protocol_ref: "als_trauma_general" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: 5F — Pulled from House Fire
  // ============================================================
  {
    id: "trauma-pedi-burn-01",
    title: "5F — Pulled from House Fire",
    category: "Trauma",
    difficulty: "Hard",
    dispatch: "5-year-old female pulled from a house fire by firefighters, unconscious, possible burns and smoke inhalation",
    patient: { age: 5, sex: "F", cc: "Smoke inhalation and burns from house fire" },
    scene: "Firefighters carry a 5-year-old female from a fully involved house fire. She was found in a second-floor bedroom with the door closed. She is unconscious, has soot covering her face, and has partial-thickness burns to both arms and anterior chest. Firefighters estimate she was in the smoke-filled room for at least 10 minutes.",
    vitals: { hr: 148, bp: "78/50", rr: 8, spo2: 99, gcs: 7, temp: "99.8°F" },
    history: { pmh: "None, healthy child per family on scene", meds: "None", allergies: "NKDA" },
    presentation: "The child is unresponsive to voice, withdraws to pain only. Heavy soot is present in the nares and oropharynx. Stridor is audible. Partial-thickness burns cover both arms and the anterior chest (~20% BSA). The SpO₂ reads 99% but this is unreliable in the setting of carbon monoxide and cyanide exposure.",
    primary_protocol: "als_smoke_inhalation_cyanide_poisoning_symptomatic",
    related_protocols: [
      "als_burns",
      "als_carbon_monoxide_exposure_suspected",
      "als_oxygen_administration_and_airway_management",
      "als_respiratory_arrest_failure_pediatric",
      "als_shock_pediatric_sepsis_shock_hypoperfusion"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "This child was pulled unconscious from a house fire with soot in the airway and SpO₂ reading 99%. Why is the SpO₂ reading unreliable?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The pulse oximeter reads 99% but the child is unconscious, hypotensive, and breathing at only 8 breaths per minute.",
        clinical_pearl: "Standard pulse oximetry cannot distinguish carboxyhemoglobin or methemoglobin from oxyhemoglobin. In smoke inhalation, SpO₂ may read falsely normal or elevated while the patient is severely hypoxic. Always treat the patient, not the number.",
        options: [
          { text: "Carbon monoxide binds hemoglobin and is read as oxyhemoglobin by standard pulse oximetry, giving a falsely normal reading", correct: true, critical: false, explanation: "Per NY protocol, oxygen saturation readings may be falsely elevated in smoke inhalation due to carboxyhemoglobin interference with standard pulse oximetry.", protocol_ref: "als_burns" },
          { text: "The pulse oximeter is malfunctioning due to soot contamination on the sensor probe and needs to be replaced immediately", correct: false, critical: false, explanation: "While soot could affect readings, the primary reason for falsely normal SpO₂ in fire victims is carboxyhemoglobin interference, not equipment malfunction.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Children normally maintain higher SpO₂ levels even in respiratory distress, so the reading is likely accurate and reassuring", correct: false, critical: true, explanation: "This is dangerously incorrect. The SpO₂ is falsely elevated due to CO poisoning. Treating this as a reassuring finding could lead to inadequate treatment.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Burns to the extremities cause peripheral vasoconstriction that artificially elevates the pulse oximeter readings displayed", correct: false, critical: false, explanation: "Peripheral vasoconstriction typically makes SpO₂ readings unreliable or lower, not falsely elevated. The falsely normal reading is due to CO poisoning.", protocol_ref: "als_burns" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What are the critical assessment findings that suggest cyanide poisoning in addition to carbon monoxide exposure? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The child was in an enclosed space during a structure fire. She has soot in her nares and oropharynx, is profoundly altered, and is hypotensive.",
        clinical_pearl: "Per NY protocol, suspect cyanide toxicity in patients who were in enclosed spaces during a fire, have soot in nares/oropharynx, and exhibit altered mental status. Hypotension without other obvious cause in this setting increases likelihood of cyanide poisoning.",
        options: [
          { text: "Altered mental status with a GCS of 7 in a patient found in an enclosed space during a fire with soot in the airway", correct: true, critical: false, explanation: "Per NY Smoke Inhalation/Cyanide protocol, altered mental status in a patient from an enclosed-space fire with soot in the airway is a key indicator of cyanide toxicity.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Hypotension at 78/50 with signs of hypoperfusion without another obvious cause such as external hemorrhage or tension pneumothorax", correct: true, critical: false, explanation: "Per NY protocol, hypotension without other obvious cause in the setting of smoke inhalation increases the likelihood of cyanide poisoning.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Cherry-red skin coloration that is the classic and most reliable clinical sign for differentiating cyanide from carbon monoxide exposure", correct: false, critical: false, explanation: "Cherry-red skin is classically described with CO poisoning but is an unreliable and late finding. It does not distinguish cyanide exposure and is often not present in pediatric patients.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "A measured blood cyanide level obtained by the point-of-care testing device carried on the ambulance for use in the field", correct: false, critical: false, explanation: "Point-of-care cyanide testing is not available in the prehospital setting. Cyanide poisoning is diagnosed clinically based on the presentation and mechanism.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The child's respiratory rate drops to 4 breaths per minute. What are the correct airway and breathing interventions? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The child is now essentially apneic at 4 breaths/min with stridor worsening. Soot remains visible in the oropharynx despite suctioning.",
        vitals_update: { hr: 156, bp: "72/44", rr: 4, spo2: 92, gcs: 5 },
        clinical_pearl: "Per NY protocol, all smoke inhalation patients receive oxygen via non-rebreather at 15 LPM. With respiratory failure, BVM assisted ventilation is indicated. CC/Paramedic should be prepared to intubate if there are signs of airway involvement.",
        options: [
          { text: "Begin BVM ventilation at 15–25 LPM with 100% oxygen to support the child's failing respiratory effort immediately", correct: true, critical: false, explanation: "Per NY protocol, BVM assisted ventilation with high-flow oxygen is indicated for respiratory failure. This is the immediate life-saving intervention.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Prepare for endotracheal intubation at the CC/Paramedic level given stridor and signs of progressive airway burns and edema", correct: true, critical: false, explanation: "Per NY Burns protocol, CC/Paramedic should be prepared to intubate if the patient has signs of airway involvement. Stridor and soot in the airway indicate impending complete obstruction.", protocol_ref: "als_burns" },
          { text: "Apply CPAP at 5–10 cm H₂O to support the child's remaining respiratory effort and improve oxygenation without intubation", correct: false, critical: false, explanation: "Per NY Smoke Inhalation protocol, CPAP may be considered if there is NO soot in the airway. This child has soot in the oropharynx, and CPAP is not appropriate for near-apneic patients.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Perform a nasotracheal intubation to secure the airway since the oral route will be obscured by soot and edema distortion", correct: false, critical: false, explanation: "Per NY protocol, pediatric intubation should only be considered if unable to effectively ventilate with BVM and basic adjuncts. Additionally, nasal intubation in pediatrics requires Paramedic level and is not the first approach.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "treatment",
        prompt: "With the airway managed, the child remains in respiratory arrest with SBP 72 mmHg. What is the appropriate cyanide antidote intervention at the CC/Paramedic level?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The child is being ventilated via BVM with 100% O₂. She is in respiratory arrest with persistent hypotension. Cardiac monitor shows sinus tachycardia at 160.",
        vitals_update: { hr: 160, bp: "72/44", rr: 0, spo2: 88 },
        clinical_pearl: "Per NY protocol, pediatric cyanide antidote dosing is hydroxycobalamin (CyanoKit) 70 mg/kg IV over 15 minutes for pediatric patients in cardiac or respiratory arrest.",
        options: [
          { text: "Hydroxycobalamin (CyanoKit) 70 mg/kg IV over 15 minutes, as the child is in respiratory arrest from suspected cyanide poisoning", correct: true, critical: false, explanation: "Per NY Smoke Inhalation/Cyanide protocol, pediatric patients in respiratory arrest receive hydroxycobalamin 70 mg/kg IV over 15 minutes.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Hydroxycobalamin (CyanoKit) 5 grams IV over 15 minutes, using the standard adult dose regardless of the patient's pediatric age", correct: false, critical: true, explanation: "The adult dose is 5 grams. Pediatric dosing is weight-based at 70 mg/kg. For a 5-year-old (~20 kg), the dose would be approximately 1,400 mg — far less than 5 grams.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Sodium thiosulfate 400 mg/kg IV as the preferred first-line cyanide antidote in the pediatric prehospital setting per NY protocol", correct: false, critical: false, explanation: "Sodium thiosulfate is not listed in the NY prehospital protocols. Hydroxycobalamin (CyanoKit) is the specified prehospital cyanide antidote.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" },
          { text: "Withhold the antidote and transport immediately since hydroxycobalamin is only indicated for confirmed cardiac arrest in children", correct: false, critical: true, explanation: "Per NY protocol, the pediatric criteria for hydroxycobalamin is cardiac OR respiratory arrest. This child is in respiratory arrest and meets the criteria. Withholding could be fatal.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" }
        ]
      },
      {
        phase: "treatment",
        prompt: "How should the child's burns (partial-thickness, ~20% BSA) be managed in the prehospital setting?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "After initiating the cyanide antidote, you address the burns on both arms and anterior chest. The child weighs approximately 20 kg.",
        options: [
          { text: "Cover all burns with dry sterile dressings only, as burns greater than 10% BSA should not be covered with moist dressings", correct: true, critical: false, explanation: "Per NY Burns protocol, burns >10% BSA should only be dressed with dry simple sterile dressings once the burning process has stopped, as hypothermia is a significant concern.", protocol_ref: "als_burns" },
          { text: "Apply cool moist dressings to all burned areas to provide pain relief and stop the burning process in the deeper tissues", correct: false, critical: false, explanation: "Per NY protocol, moist dressings may only be used for burns ≤10% BSA. At 20% BSA, moist dressings risk hypothermia, which is especially dangerous in pediatric patients.", protocol_ref: "als_burns" },
          { text: "Apply topical silver sulfadiazine cream to the burned areas before covering with sterile dressings per the prehospital burn protocol", correct: false, critical: false, explanation: "Topical antibiotic creams are not part of the NY prehospital protocol for burns. Field management is sterile dressing coverage.", protocol_ref: "als_burns" },
          { text: "Leave the burns uncovered and exposed to air to allow for ongoing reassessment and prevent dressing adherence to the wounds", correct: false, critical: false, explanation: "Per NY protocol, burns should be covered with dry sterile dressings. Leaving burns exposed increases infection risk, heat loss, and pain.", protocol_ref: "als_burns" }
        ]
      },
      {
        phase: "transport",
        prompt: "This child has 20% BSA partial-thickness burns, smoke inhalation, suspected cyanide poisoning, and respiratory failure. What is the appropriate transport destination?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "A community hospital is 8 minutes away, a pediatric hospital is 15 minutes away, and a regional burn center with a pediatric unit is 30 minutes away.",
        clinical_pearl: "Per NY Burns protocol, burns associated with trauma, smoke inhalation, or airway burns are criteria for transport to a burn center. Pediatric burns >10% BSA also meet burn center criteria.",
        options: [
          { text: "Transport to the regional burn center with pediatric capabilities 30 minutes away, as the patient meets multiple burn center criteria", correct: true, critical: false, explanation: "Per NY Burns protocol transportation considerations, this patient meets burn center criteria: pediatric patient with >10% BSA burns, inhalation injury, and associated trauma. The burn center with pediatric capabilities is most appropriate.", protocol_ref: "als_burns" },
          { text: "Transport to the closest community hospital 8 minutes away for immediate stabilization and later transfer to the burn center", correct: false, critical: false, explanation: "While closer, diversion to a community hospital delays definitive burn and pediatric critical care. With a secured airway and antidote administered, the burn center transport is appropriate.", protocol_ref: "als_trauma_patient_destination" },
          { text: "Transport to the pediatric hospital 15 minutes away since pediatric expertise is more important than burn-specific capabilities", correct: false, critical: false, explanation: "While pediatric expertise is important, a burn center with pediatric capabilities provides both. The 20% BSA burn with inhalation injury requires specialized burn care.", protocol_ref: "als_burns" },
          { text: "Remain on scene until the full dose of hydroxycobalamin has infused completely before initiating any transport to a facility", correct: false, critical: true, explanation: "Per NY protocol, do not delay transport awaiting CyanoKit — it is available in most EDs. The infusion can continue during transport.", protocol_ref: "als_smoke_inhalation_cyanide_poisoning_symptomatic" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: 38F — 36 Weeks Pregnant, Severe Headache
  // ============================================================
  {
    id: "ob-eclampsia-01",
    title: "38F — 36 Weeks Pregnant, Severe Headache",
    category: "OB/Peds",
    difficulty: "Hard",
    dispatch: "38-year-old female, 36 weeks pregnant, severe headache and visual changes, husband called 911",
    patient: { age: 38, sex: "F", cc: "Severe headache and blurred vision at 36 weeks gestation" },
    scene: "You arrive at a home to find a 38-year-old female lying on a couch, holding her head. She is 36 weeks pregnant (G2P1) and states she has had a progressively worsening headache for the past 6 hours with blurred vision and seeing 'spots.' Her husband states her face and hands appear more swollen than usual. She denies contractions or vaginal bleeding.",
    vitals: { hr: 98, bp: "178/112", rr: 20, spo2: 98, gcs: 15, temp: "98.8°F" },
    history: { pmh: "Gestational hypertension diagnosed at 32 weeks, previous uncomplicated pregnancy", meds: "Prenatal vitamins, labetalol 200 mg BID", allergies: "NKDA" },
    presentation: "The patient is alert but in obvious distress from the headache. Facial and hand edema is notable. She has 3+ pitting edema to bilateral lower extremities. Deep tendon reflexes are hyperactive (3+) with clonus at the ankles. The abdomen is gravid and consistent with 36-week gestation.",
    primary_protocol: "als_procedural_sedation_pediatric",
    related_protocols: [
      "als_childbirth_obstetrics",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "Based on the presentation — 36 weeks pregnant, BP 178/112, severe headache, visual changes, edema, and hyperreflexia — which clinical concerns are appropriate? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is distressed, holding her head. Her husband reports the headache started this morning and has gotten much worse. She describes seeing flashing spots.",
        clinical_pearl: "Pre-eclampsia is typically described as BP >140/90 mmHg with severe headache, confusion, and/or hyperreflexia in a pregnant patient. Pre-eclampsia may progress to eclampsia (seizures) and is a true obstetric emergency.",
        options: [
          { text: "Severe pre-eclampsia with high risk of progression to eclamptic seizures, requiring urgent transport and seizure preparedness", correct: true, critical: false, explanation: "Per NY protocols, BP >140/90 with severe headache, visual changes, and hyperreflexia in a pregnant patient defines pre-eclampsia, which may progress to eclampsia (seizures).", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Prepare midazolam and magnesium sulfate for possible eclamptic seizure given the severity of the pre-eclamptic presentation", correct: true, critical: false, explanation: "Per NY Seizures protocol, eclamptic seizures are treated with midazolam first then magnesium 4 g IV over 20 min. Having these medications ready is prudent given the high risk of seizure progression.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Migraine headache exacerbated by pregnancy hormones, which is common in the third trimester and requires pain management only", correct: false, critical: true, explanation: "Dismissing this presentation as migraine is dangerous. BP 178/112 with visual changes, edema, and hyperreflexia in a pregnant patient is pre-eclampsia until proven otherwise.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Tension headache with coincidental elevated blood pressure from the anxiety of the late-term pregnancy and upcoming delivery", correct: false, critical: true, explanation: "BP 178/112 with neurological symptoms in a pregnant patient is never coincidental anxiety. This is pre-eclampsia and failing to recognize it risks eclamptic seizures and maternal death.", protocol_ref: "als_procedural_sedation_pediatric" }
        ]
      },
      {
        phase: "assessment",
        prompt: "While assessing the patient, she suddenly becomes rigid, her eyes deviate upward, and she begins generalized tonic-clonic seizure activity. What is the immediate intervention?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "Mid-assessment, the patient seizes. She is on the couch — you ease her to the floor. The seizure involves all four extremities with tonic-clonic activity.",
        vitals_update: { hr: 134, bp: "192/120", spo2: 89, gcs: 3 },
        clinical_pearl: "Per NY Seizures protocol, do not put anything in the patient's mouth during an active seizure. Protect the patient from harm, remove hazards, and avoid unnecessary restraint. Position on the side if vomiting.",
        options: [
          { text: "Protect the patient from injury, position on her left side when possible, suction the airway as needed, and prepare anticonvulsants", correct: true, critical: false, explanation: "Per NY Seizures protocol, protect the patient, position on the side if vomiting, suction as needed. Left lateral positioning is preferred in pregnant patients to improve venous return.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Immediately insert an oral airway device to prevent the patient from biting her tongue during the tonic-clonic seizure activity", correct: false, critical: true, explanation: "Per NY protocol, do NOT put anything in the patient's mouth when actively seizing. Forcing an oral airway during a seizure can cause dental trauma, aspiration, or oral injury.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Restrain all four extremities firmly to prevent injury and apply a cervical collar to protect the spine during the convulsions", correct: false, critical: false, explanation: "Per NY protocol, avoid unnecessary restraint during seizures. Restraining a seizing patient can cause musculoskeletal injury. Remove hazards instead.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Begin chest compressions immediately since the generalized seizure activity indicates the patient is likely in cardiac arrest", correct: false, critical: true, explanation: "Seizure activity is not cardiac arrest. The patient has a pulse (HR 134). Starting compressions on a seizing patient with a pulse is inappropriate and harmful.", protocol_ref: "als_procedural_sedation_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The seizure continues for over 2 minutes. What is the correct CC/Paramedic medication sequence for eclamptic seizures per NY protocol?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "The patient continues to seize. She is now on her left side with suction available. Vascular access was established prior to the seizure. The cardiac monitor shows sinus tachycardia.",
        clinical_pearl: "Per NY protocol, eclamptic seizures occur by a different mechanism than typical epileptic seizures. Administer midazolam FIRST, followed by magnesium 4 grams IV over 20 minutes. This is unique — magnesium alone is not first-line for active eclamptic seizure.",
        options: [
          { text: "Midazolam 5 mg IV first to stop the seizure, then magnesium 4 grams IV over 20 minutes for eclampsia-specific treatment", correct: true, critical: false, explanation: "Per NY Seizures protocol, administer midazolam first, followed by magnesium 4 g IV over 20 min if the patient is pregnant. The protocol explicitly states to give midazolam first for eclamptic seizures.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Magnesium sulfate 4 grams IV rapid push as the sole first-line treatment, since eclampsia is specifically a magnesium-responsive condition", correct: false, critical: false, explanation: "Per NY protocol, midazolam is given FIRST to stop the active seizure. Magnesium follows as the eclampsia-specific treatment. Magnesium alone is not the initial anticonvulsant, and it is given over 20 minutes, not rapid push.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Diazepam 10 mg IV as the preferred benzodiazepine for eclamptic seizures since it has a longer duration than midazolam", correct: false, critical: false, explanation: "Diazepam is not listed in the NY prehospital seizure protocol. Midazolam is the specified benzodiazepine (5 mg IV, 10 mg IM/intranasal).", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Phenytoin 1 gram IV loading dose as the first-line anticonvulsant followed by magnesium sulfate as an adjunct if seizures persist", correct: false, critical: false, explanation: "Phenytoin is not in the NY prehospital protocols. The correct sequence is midazolam first, then magnesium for eclamptic seizures.", protocol_ref: "als_procedural_sedation_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The seizure stops after midazolam. The patient is postictal with GCS 9. Magnesium infusion is running. What additional assessments and interventions are critical? (Select all that apply)",
        multi_select: true,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient is now postictal, responsive only to pain. She is on her left side with magnesium 4 g infusing over 20 minutes. Fetal heart tones are audible at 110 bpm (low normal).",
        vitals_update: { hr: 108, bp: "168/104", rr: 16, spo2: 94, gcs: 9 },
        options: [
          { text: "Continuous monitoring of airway and breathing since postictal patients are at risk for airway compromise and aspiration", correct: true, critical: false, explanation: "Per NY protocol, ongoing assessment of airway effectiveness is critical in postictal patients. The patient may vomit, and her decreased consciousness puts her at aspiration risk.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Maintain left lateral positioning to optimize uterine blood flow and prevent supine hypotensive syndrome in late pregnancy", correct: true, critical: false, explanation: "Left lateral positioning prevents aortocaval compression by the gravid uterus, which can reduce cardiac output by up to 30% and compromise both maternal and fetal perfusion.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Administer labetalol 20 mg IV push to rapidly lower the blood pressure before another seizure occurs from the hypertension", correct: false, critical: false, explanation: "Labetalol is not in the NY prehospital seizure or obstetric protocol as a standing order. Antihypertensive therapy in eclampsia is a hospital-based decision.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Begin immediate preparation for field delivery since eclamptic seizures always trigger premature labor requiring emergency cesarean", correct: false, critical: false, explanation: "Eclampsia does not always cause immediate labor. Assess for contractions and delivery signs, but field cesarean is not an EMS procedure and delivery is not inevitable.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the most appropriate transport decision for this eclamptic patient?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The patient remains postictal. Magnesium is infusing. A community hospital with a small L&D unit is 8 minutes away. A tertiary hospital with a high-risk OB unit and NICU is 20 minutes away.",
        clinical_pearl: "Eclampsia at 36 weeks requires both maternal critical care (ICU-level monitoring, antihypertensive therapy, possible magnesium drip) and neonatal capabilities for potential emergent delivery of a preterm infant.",
        options: [
          { text: "Transport to the tertiary hospital with high-risk OB and NICU 20 minutes away for comprehensive maternal and neonatal care", correct: true, critical: false, explanation: "This patient requires high-risk obstetric care, possible emergent cesarean delivery, maternal ICU-level monitoring, and NICU availability for a 36-week infant. The tertiary center provides all of these.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Transport to the community hospital 8 minutes away since rapid blood pressure control is the single most important intervention", correct: false, critical: false, explanation: "While speed matters, a community hospital with a small L&D may lack the high-risk OB, anesthesia, and NICU resources needed for eclampsia management and potential preterm delivery.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Remain on scene to complete the 20-minute magnesium infusion and observe for recurrent seizures before deciding on a destination", correct: false, critical: true, explanation: "Remaining on scene delays definitive care. The magnesium infusion continues during transport. Eclampsia requires hospital-level management urgently.", protocol_ref: "als_procedural_sedation_pediatric" },
          { text: "Contact medical control to request a hospital midwife be dispatched to the patient's home for continued monitoring and home birth", correct: false, critical: true, explanation: "Eclampsia is a life-threatening emergency requiring hospital admission, not home monitoring. This patient needs emergent transport to a facility with high-risk OB capabilities.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: 3M — Choking, Turning Blue
  // ============================================================
  {
    id: "pedi-fbao-01",
    title: "3M — Choking, Turning Blue",
    category: "OB/Peds",
    difficulty: "Medium",
    dispatch: "3-year-old male, choking, turning blue, mother on the phone screaming",
    patient: { age: 3, sex: "M", cc: "Complete foreign body airway obstruction" },
    scene: "You arrive at an apartment to find a frantic mother holding a 3-year-old male. The child is conscious but cannot cough, cry, or speak. His skin is cyanotic around the lips, and he is making no audible sounds. The mother states he was eating grapes when he suddenly grabbed his throat and turned blue. She attempted back blows but they were unsuccessful.",
    vitals: { hr: 160, bp: null, rr: 0, spo2: 72, gcs: 13 },
    history: { pmh: "None, healthy child", meds: "None", allergies: "NKDA" },
    presentation: "The child is conscious, wide-eyed, and panicked. He is making no sound and no air movement is detected. The skin is cyanotic. Universal choking sign (hands at throat) is present. No audible stridor or wheezing — the obstruction appears complete.",
    primary_protocol: "als_foreign_body_obstructed_airway_pediatric",
    related_protocols: [
      "bls_foreign_body_obstructed_airway_pediatric",
      "als_oxygen_administration_and_airway_management",
      "als_cardiac_arrest_pediatric_general_approach"
    ],
    level_min: "CFR",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to a conscious 3-year-old who cannot cough, cry, or speak. What is the immediate BLS intervention per NY protocol?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child is conscious but completely unable to produce any sound or air movement. He is cyanotic and deteriorating rapidly.",
        clinical_pearl: "Per NY FBAO Pediatric protocol, a conscious child (>1 year) who cannot breathe, cough, or speak requires airway maneuvers per current AHA guidelines — abdominal thrusts (Heimlich maneuver). Back blows alternating with chest thrusts are for INFANTS (<1 year).",
        options: [
          { text: "Perform abdominal thrusts (Heimlich maneuver) per AHA guidelines for a conscious child over one year with complete obstruction", correct: true, critical: false, explanation: "Per NY protocol, perform airway maneuvers per current AHA/ARC/NSSC guidelines for a conscious patient who cannot breathe, cough, or speak. For children >1 year, this means abdominal thrusts.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Perform alternating 5 back blows and 5 chest thrusts as the recommended maneuver for all pediatric choking patients", correct: false, critical: false, explanation: "Per NY protocol and AHA guidelines, back blows and chest thrusts are specifically for INFANTS (<1 year old). For a 3-year-old child, abdominal thrusts are the correct technique.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Perform a blind finger sweep of the oropharynx to locate and remove the foreign body before attempting any other maneuver", correct: false, critical: true, explanation: "Blind finger sweeps are NOT recommended and may push the foreign body deeper, worsening the obstruction. Only remove visible obstructions.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Encourage the patient to continue coughing forcefully while preparing advanced airway equipment in case interventions are needed", correct: false, critical: false, explanation: "The child CANNOT cough — this is a complete obstruction. Encouraging coughing is only appropriate for partial obstruction where the patient can still cough, breathe, or speak.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" }
        ]
      },
      {
        phase: "assessment",
        prompt: "After several abdominal thrusts, the child becomes limp and unresponsive. What is the correct next step?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child has lost consciousness during the choking event. He is limp in your arms, cyanotic, with no breathing effort.",
        vitals_update: { hr: 60, spo2: 58, gcs: 3 },
        clinical_pearl: "Per NY protocol, if the FBAO patient becomes unconscious: remove any VISIBLE airway obstruction by hand, perform level-appropriate airway maneuvers, and begin CPR per the Pediatric Cardiac Arrest protocol.",
        options: [
          { text: "Lower the child to a firm surface, look for and remove any visible obstruction, then begin CPR starting with chest compressions", correct: true, critical: false, explanation: "Per NY FBAO Pediatric protocol, for an unconscious patient: remove any visible airway obstruction by hand, perform level-appropriate airway maneuvers, and perform CPR per Cardiac Arrest protocol.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Continue abdominal thrusts on the now-unconscious child since the foreign body has not yet been expelled from the airway", correct: false, critical: true, explanation: "Abdominal thrusts are for CONSCIOUS patients only. For an unconscious FBAO patient, the protocol transitions to CPR, which generates enough thoracic pressure to potentially dislodge the object.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Immediately attempt direct laryngoscopy with Magill forceps to visualize and remove the foreign body under direct vision", correct: false, critical: false, explanation: "While Magill forceps may be used at the CC level for obstructed airway, the immediate intervention for an unconscious FBAO patient at all levels is to begin CPR per protocol.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Place the child in the recovery position and wait to see if he begins spontaneous breathing before starting any resuscitation", correct: false, critical: true, explanation: "An unconscious, apneic child with FBAO requires immediate CPR. Waiting for spontaneous breathing could be fatal.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" }
        ]
      },
      {
        phase: "treatment",
        prompt: "During CPR, you visualize a grape lodged in the hypopharynx. At the CC level, what airway tool is specifically indicated for foreign body removal under direct visualization?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "After 30 seconds of compressions, you open the airway and see the grape visible at the back of the throat. You have a full ALS airway kit available.",
        options: [
          { text: "Age-appropriate laryngoscope and Magill forceps to grasp and remove the foreign body under direct visualization as specified per protocol", correct: true, critical: false, explanation: "Per NY Airway Management protocol, CC level is authorized to use age-appropriate laryngoscope and Magill forceps in cases of obstructed airway for foreign body removal.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Suction catheter inserted blindly past the obstruction to create negative pressure and extract the grape from the hypopharynx", correct: false, critical: false, explanation: "Blind suction cannot reliably remove a solid foreign body like a grape from the hypopharynx. Magill forceps under direct visualization is the appropriate tool.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Endotracheal tube used to push the grape further down into the right mainstem bronchus to establish a single-lung airway", correct: false, critical: true, explanation: "Intentionally pushing a foreign body into a bronchus is not an accepted EMS technique and could cause complete bilateral obstruction or other complications.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Needle cricothyrotomy to bypass the obstruction entirely since surgical airway is faster than attempting foreign body extraction", correct: false, critical: false, explanation: "With a visible and accessible foreign body, direct removal with Magill forceps is preferred. Surgical airway in a 3-year-old is technically challenging and not first-line when the object is visible.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The grape is removed successfully. The child remains apneic but has a pulse of 70 bpm. What is the next intervention?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "After foreign body removal, the child has a weak pulse of 70 bpm but is not breathing. His color is still cyanotic.",
        vitals_update: { hr: 70, spo2: 64, gcs: 3 },
        clinical_pearl: "A child with a pulse but no breathing requires rescue breathing (assisted ventilation). If the heart rate is markedly bradycardic with decreased mental status, consider chest compressions as well. For a 3-year-old, HR <60 is the threshold for CPR.",
        options: [
          { text: "Begin bag-valve-mask ventilation with 100% oxygen at an age-appropriate rate since the child has a pulse but is not breathing", correct: true, critical: false, explanation: "The child has a pulse (70 bpm, above the <60 threshold for compressions) but is apneic. BVM ventilation with high-flow oxygen is the immediate priority to restore oxygenation.", protocol_ref: "als_oxygen_administration_and_airway_management" },
          { text: "Continue full CPR with chest compressions since the heart rate of 70 is significantly bradycardic for a 3-year-old child", correct: false, critical: false, explanation: "While 70 bpm is below normal for a 3-year-old, compressions are indicated when HR is <60 bpm with signs of poor perfusion despite adequate oxygenation and ventilation. Ventilation is the priority.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Administer epinephrine 0.01 mg/kg IV immediately to increase the heart rate before providing any assisted ventilations", correct: false, critical: false, explanation: "Epinephrine is indicated for pediatric bradycardia when HR remains <60 despite ventilation and compressions. The first priority is to ventilate; the bradycardia is likely hypoxia-driven.", protocol_ref: "als_cardiac_arrest_pediatric_general_approach" },
          { text: "Apply a non-rebreather mask at 15 LPM and observe for spontaneous respiratory effort before providing assisted ventilations", correct: false, critical: true, explanation: "An apneic child requires assisted ventilation immediately. A non-rebreather mask provides no ventilation to an apneic patient. Waiting for spontaneous breathing could be fatal.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      },
      {
        phase: "transport",
        prompt: "After BVM ventilation, the child begins spontaneous breathing and crying. SpO₂ rises to 95%. What is the appropriate next step?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The child is now crying, breathing spontaneously at 24 breaths per minute, and his color is improving. He is moving all extremities and responding to his mother's voice.",
        vitals_update: { hr: 128, rr: 24, spo2: 95, gcs: 14 },
        options: [
          { text: "Transport to the hospital for evaluation with supplemental oxygen, allowing the mother to hold the child to minimize agitation", correct: true, critical: false, explanation: "Per NY FBAO protocol, facilitate transportation and ongoing assessment. After a choking event with loss of consciousness, hospital evaluation is mandatory. Minimizing agitation is important per protocol.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "The child appears fully recovered and the mother may sign a refusal of transport if she does not wish to go to the hospital", correct: false, critical: true, explanation: "A child who had complete FBAO, lost consciousness, required CPR, and was apneic with bradycardia requires hospital evaluation regardless of apparent recovery. This is not an appropriate refusal scenario.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Perform a blood pressure assessment and full secondary survey on scene before considering transport to the closest facility", correct: false, critical: false, explanation: "Per NY FBAO protocol, limit interventions that may cause unnecessary agitation. A full secondary survey on a crying toddler delays transport and provides limited value at this point.", protocol_ref: "als_foreign_body_obstructed_airway_pediatric" },
          { text: "Intubate the child prophylactically for airway protection during transport since there is a risk of recurrent obstruction or edema", correct: false, critical: false, explanation: "Per NY protocol, pediatric intubation should only be considered if unable to effectively ventilate with BVM. The child is breathing spontaneously and crying — intubation is not indicated.", protocol_ref: "als_oxygen_administration_and_airway_management" }
        ]
      }
    ]
  },

  // ============================================================
  // SCENARIO 6: 30F — Postpartum Hemorrhage
  // ============================================================
  {
    id: "ob-pph-01",
    title: "30F — Postpartum Hemorrhage",
    category: "OB/Peds",
    difficulty: "Hard",
    dispatch: "30-year-old female, just delivered a baby at home, heavy vaginal bleeding, partner states 'there's blood everywhere'",
    patient: { age: 30, sex: "F", cc: "Postpartum hemorrhage after home delivery" },
    scene: "You arrive at a home where a 30-year-old female has delivered a baby approximately 20 minutes ago with the assistance of a home birth midwife. The placenta has been delivered and is intact. The baby appears healthy and is being cared for by the midwife. However, the mother is lying in a pool of blood with ongoing heavy vaginal bleeding. The midwife states 'the bleeding won't stop and the uterus feels boggy.'",
    vitals: { hr: 128, bp: "86/52", rr: 28, spo2: 96, gcs: 14, temp: "98.4°F" },
    history: { pmh: "G3P3, previous vaginal deliveries without complication, no bleeding disorders", meds: "Prenatal vitamins", allergies: "Penicillin — rash" },
    presentation: "The patient is pale, diaphoretic, and anxious. There is a large amount of blood on the bed and floor. Continuous dark red blood is flowing from the vagina. The uterus is palpable above the umbilicus and feels soft ('boggy') rather than firm. Estimated blood loss is 1,000–1,500 mL.",
    primary_protocol: "als_childbirth_obstetrics",
    related_protocols: [
      "als_bleeding_hemorrhage_control",
      "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h"
    ],
    level_min: "EMT",
    questions: [
      {
        phase: "scene",
        prompt: "You arrive to find heavy postpartum bleeding with an estimated blood loss of 1,000–1,500 mL. The midwife reports a 'boggy' uterus. What is the most likely cause of the hemorrhage?",
        multi_select: false,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The placenta has been delivered intact. The baby is healthy. The mother is pale, tachycardic, and bleeding heavily from the vagina. The uterus feels soft above the umbilicus.",
        clinical_pearl: "Uterine atony (failure of the uterus to contract after delivery) is the #1 cause of postpartum hemorrhage, accounting for ~80% of cases. A 'boggy' uterus that is palpable above the umbilicus indicates the uterus has not contracted down.",
        options: [
          { text: "Uterine atony — the most common cause of postpartum hemorrhage, indicated by the boggy, poorly contracted uterus above the umbilicus", correct: true, critical: false, explanation: "A boggy uterus above the umbilicus after delivery indicates uterine atony — failure of the myometrium to contract and compress the bleeding vessels at the placental site.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Retained placental fragments causing continued bleeding, since the placenta was likely not delivered completely intact", correct: false, critical: false, explanation: "The midwife states the placenta is intact. While retained fragments are a cause of PPH, the boggy uterus points to atony as the primary cause.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Uterine rupture from a traumatic delivery process that has caused intra-abdominal hemorrhage and external vaginal bleeding", correct: false, critical: false, explanation: "Uterine rupture is rare in an uncomplicated vaginal delivery. The boggy uterus and vaginal bleeding pattern are more consistent with atony.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Disseminated intravascular coagulation as the primary cause of the postpartum hemorrhage requiring clotting factor replacement", correct: false, critical: false, explanation: "DIC can develop secondary to massive hemorrhage but is not the primary cause here. The boggy uterus indicates atony as the initiating problem.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "assessment",
        prompt: "What are the immediate interventions for this postpartum hemorrhage from uterine atony? (Select all that apply)",
        multi_select: true,
        level_filter: "CFR-EMT-AEMT-CC-P",
        narrative: "The patient is hypotensive at 86/52 with ongoing heavy vaginal bleeding. The uterus remains boggy and non-contracted.",
        clinical_pearl: "Per NY Obstetrics protocol, after delivery of the placenta, massage the lower abdomen. Fundal massage stimulates uterine contraction, compressing the bleeding vessels at the placental implantation site. This is a critical intervention at ALL provider levels.",
        options: [
          { text: "Perform firm fundal massage of the lower abdomen to stimulate uterine contraction and control hemorrhage at the placental site", correct: true, critical: false, explanation: "Per NY Childbirth: Obstetrics protocol, after delivery of the placenta, massage the lower abdomen. Fundal massage is the first-line treatment for uterine atony and is within all provider scopes.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Administer high-flow oxygen and initiate airway management as the patient shows signs of hemorrhagic shock with hypoperfusion", correct: true, critical: false, explanation: "Per NY Shock protocol, ABCs with airway management and appropriate oxygen therapy is indicated at all provider levels for shock/hypoperfusion. The patient is hypotensive and tachycardic.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Pack the vagina tightly with sterile gauze to create a tamponade effect against the source of the ongoing uterine hemorrhage", correct: false, critical: false, explanation: "Vaginal packing for postpartum hemorrhage is not included in NY prehospital protocols. Fundal massage to stimulate uterine contraction is the indicated intervention.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Apply a pelvic binder to compress the uterus externally and reduce blood flow to the pelvis and uterine arteries bilaterally", correct: false, critical: false, explanation: "A pelvic binder is designed for pelvic fracture stabilization, not postpartum hemorrhage. Fundal massage is the correct intervention for uterine atony.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Despite fundal massage, bleeding continues. The patient is in hemorrhagic shock. What interventions should be initiated? (Select all that apply)",
        multi_select: true,
        level_filter: "AEMT-CC-P",
        narrative: "Fundal massage has been ongoing for 3 minutes but the uterus remains boggy and bleeding persists. The patient is becoming increasingly confused and pale.",
        vitals_update: { hr: 140, bp: "78/46", rr: 32, spo2: 93, gcs: 13 },
        clinical_pearl: "Per NY protocol, treat for shock and transport immediately when postpartum hemorrhage is unresponsive to fundal massage. Vascular access with fluid resuscitation is critical. Continue fundal massage during transport.",
        options: [
          { text: "Establish vascular access at two sites if possible and administer normal saline 500 mL bolus for hemorrhagic shock resuscitation", correct: true, critical: false, explanation: "Per NY Shock and Burns protocols, vascular access at 2 sites (no more than one IO) with NS 500 mL bolus is indicated for severe hemorrhage and shock.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Continue ongoing firm fundal massage while simultaneously preparing for immediate transport to the closest appropriate hospital", correct: true, critical: false, explanation: "Fundal massage should continue — it may take sustained effort to achieve uterine contraction. Per NY protocol, treat for shock and transport immediately for uterine inversion/atony complications.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Administer tranexamic acid 1 gram IV over 10 minutes as the first-line pharmacologic treatment for postpartum hemorrhage", correct: false, critical: false, explanation: "Tranexamic acid is not included in the current NY prehospital protocols. While used in hospital PPH management, it is not an available prehospital standing order.", protocol_ref: "als_bleeding_hemorrhage_control" },
          { text: "Apply a tourniquet to both thighs bilaterally to reduce arterial blood flow to the pelvis and slow the uterine hemorrhage rate", correct: false, critical: true, explanation: "Bilateral thigh tourniquets to control uterine bleeding are not an accepted intervention. This could cause limb ischemia and does not effectively control uterine hemorrhage.", protocol_ref: "als_bleeding_hemorrhage_control" }
        ]
      },
      {
        phase: "treatment",
        prompt: "At the CC/Paramedic level, the patient remains in hemorrhagic shock despite fluid resuscitation. What vasopressor should be considered per NY protocol?",
        multi_select: false,
        level_filter: "CC-P",
        narrative: "After 1 L of NS, BP is 82/50. The patient is confused, pale, and tachycardic. Bleeding has slowed slightly but continues. Fundal massage is ongoing.",
        vitals_update: { hr: 136, bp: "82/50", rr: 30, spo2: 94, gcs: 12 },
        options: [
          { text: "Norepinephrine 2 mcg/min titrated to 20 mcg/min to achieve a goal SBP greater than 100 mmHg and MAP greater than 65 mmHg", correct: true, critical: false, explanation: "Per NY Shock protocol, CC/Paramedic may consider norepinephrine 2 mcg/min titrated to 20 mcg/min with goal SBP >100 and MAP >65 after fluid resuscitation.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Dopamine 5 mcg/kg/min IV infusion as the preferred first-line vasopressor for hemorrhagic shock in the postpartum patient setting", correct: false, critical: false, explanation: "Dopamine is not listed as a vasopressor option in the NY Shock protocol. Norepinephrine is the specified vasopressor.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Epinephrine 1 mg IV push to rapidly increase blood pressure and heart rate in this critically hypotensive patient now", correct: false, critical: true, explanation: "Epinephrine 1 mg IV push is a cardiac arrest dose and is not indicated for hemorrhagic shock in a patient with a pulse. This could cause fatal dysrhythmia.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" },
          { text: "Phenylephrine 100 mcg IV bolus as a pure vasoconstrictor that will not increase heart rate in this already tachycardic patient", correct: false, critical: false, explanation: "Phenylephrine is not listed in the NY prehospital shock protocol. Norepinephrine is the specified vasopressor for refractory hypotension.", protocol_ref: "als_shock_adult_shock_hypoperfusion_for_pediatric_see_shock_pediatric_shock_sepsis_h" }
        ]
      },
      {
        phase: "transport",
        prompt: "What is the priority transport consideration for this patient with ongoing postpartum hemorrhage and hemorrhagic shock?",
        multi_select: false,
        level_filter: "EMT-AEMT-CC-P",
        narrative: "The bleeding has slowed with continuous fundal massage but the patient remains unstable. A community hospital is 6 minutes away and a tertiary center with OB and blood bank is 15 minutes away.",
        clinical_pearl: "Postpartum hemorrhage patients may need emergent surgical intervention (D&C, uterine artery embolization, or hysterectomy) and massive transfusion. Early hospital notification allows activation of massive transfusion protocol.",
        options: [
          { text: "Rapid transport to the closest appropriate hospital capable of obstetric surgery and blood transfusion with early notification en route", correct: true, critical: false, explanation: "This patient needs emergent obstetric surgical capabilities and massive transfusion. Early notification allows the hospital to activate resources. The closest appropriate OB-capable facility is the correct destination.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Transport to the community hospital 6 minutes away regardless of capabilities since hemorrhagic shock requires the shortest transport", correct: false, critical: false, explanation: "A community hospital without OB surgery or blood bank capabilities may not be able to manage this patient. The closest APPROPRIATE hospital with OB capabilities is the correct destination.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Remain on scene and continue fundal massage and IV fluids until the uterus firms up and bleeding stops before initiating transport", correct: false, critical: true, explanation: "Per NY protocol, treat for shock and transport immediately. Remaining on scene with ongoing hemorrhage and hemodynamic instability delays definitive surgical and transfusion care.", protocol_ref: "als_childbirth_obstetrics" },
          { text: "Separate the mother and newborn for transport in two different ambulances to ensure both patients receive independent focused care", correct: false, critical: false, explanation: "If the newborn is stable and being cared for by the midwife, the priority is maternal transport. Separating a stable newborn from its mother when one ambulance can manage both is unnecessary and delays departure.", protocol_ref: "als_childbirth_obstetrics" }
        ]
      }
    ]
  }
];
