//All data are notional.
//Note that the examples contained in this JSON do not match the
//examples in the slide deck and images in all cases, but the data
//fields themselves are the same.
const jeeTree = [
  {
    "name": "Prevent",
    "type": "core_element",
    "description": "Capacities that... (to do).",
    "capacities": [
      {
        "name": "National Legislation, Policy, and Financing",
        "type": "capacity",
        "target_description": "States Parties should have an adequate legal framework to support and enable the implementation of all of their obligations and rights to comply with and implement the IHR (2005). In some States Parties, implementation of the IHR (2005) may require new or modified legislation. Even where new or revised legislation may not be specifically required under the State Party’s legal system, States may still choose to revise some legislation, regulations or other instruments in order to facilitate their implementation and maintenance in a more efficient, effective or beneficial manner. State parties should ensure provision of adequate funding for IHR implementation through national budget or other mechanism.",
        "as_measured_by": null,
        "desired_impact": "Legislation, laws, regulations, administrative requirements, policies or other government instruments and budget in place sufficiently support IHR implementation.",
        "notes": "National legislation, policy and financing: These questions should be answered by legal or legislative advisers, experts at the MoH or other relevant government office/NFP. Please ask to see the relevant documents.",
        "indicators": [
          {
            "jee_id": "P.1.1",
            "name": "Legislation, laws, regulations, administrative requirements, policies or other government instruments in place are sufficient for implementation of IHR.",
            "type": "indicator",
            "score_descriptions": {
              "1": "Assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation not carried out",
              "2": "Assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation has been carried out",
              "3": "Recommendations following assessment of relevant legislation, regulations, administrative requirements and other government instruments are implemented",
              "4": "Policies to facilitate IHR NFP core and expanded functions and to strengthen core capacities",
              "5": "Policies to facilitate IHR NFP core and expanded functions and to strengthen core capacities incorporated within the national health sector plan (NHSP)"
            },
            "expenses": [
              {
                "expense_id": "P.1.1.1",
                "name": "Hire national legal advisor",
                "description": "Salary for national legal adviser (Ministry of Health or other government expert) to provide legal expert assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation. Default: 3 months' salary",
                "target_score": 3,
                "sophistication_name": "Hire expensive national legal advisor",
                "sophistication_level": [
                  3
                ],
                "category": "Human Capabilities",
                "object_class": "Personnel compensation",
                "cost_type": "startup",
                "cost": 30000,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "salary per year",
                "cost_duration": 0.25,
                "cost_duration_unit": "years",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": null,
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Based on original IHR tool"
              },
              {
                "expense_id": "P.1.1.1",
                "name": "Hire national legal advisor",
                "description": "Salary for national legal adviser (Ministry of Health or other government expert) to provide legal expert assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation. Default: 3 months' salary",
                "target_score": 3,
                "sophistication_name": "Hire moderately expensive national legal advisor",
                "sophistication_level": [
                  2
                ],
                "category": "Human Capabilities",
                "object_class": "Personnel compensation",
                "cost_type": "startup",
                "cost": 20000,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "salary per year",
                "cost_duration": 0.25,
                "cost_duration_unit": "years",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": null,
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Based on original IHR tool"
              },
              {
                "expense_id": "P.1.1.1",
                "name": "Hire national legal advisor",
                "description": "Salary for national legal adviser (Ministry of Health or other government expert) to provide legal expert assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation. Default: 3 months' salary",
                "target_score": 3,
                "sophistication_name": "Hire affordable expensive national legal advisor",
                "sophistication_level": [
                  1
                ],
                "category": "Human Capabilities",
                "object_class": "Personnel compensation",
                "cost_type": "startup",
                "cost": 10000,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "salary per year",
                "cost_duration": 0.25,
                "cost_duration_unit": "years",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": null,
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Based on original IHR tool"
              },
              {
                "expense_id": "P.1.1.2",
                "name": "Print draft national legislation",
                "description": "Printing of draft national legislation pertaining to IHR and meeting notes for dissemination to participants. Default: 100 total sheets x 15 stakeholders x 4 workshops x 0.15 $ per sheet.",
                "target_score": 3,
                "sophistication_name": "Print draft national legislation",
                "sophistication_level": [
                  1,
                  2,
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 0.15,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per sheet",
                "cost_duration": 400,
                "cost_duration_unit": "sheets",
                "multiplier_area": "level_1",
                "multiplier_staff": 15,
                "multiplier_health_capacity": null,
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Based on original IHR tool."
              }
            ],
            "questions": [
              {
                "name": "Is there legislation or are there regulations or administrative requirements, or other governmental instruments governing public health surveillance and response?",
                "footnote": "Legislation: state constitutions, laws, decrees, ordinances or similar legal instruments."
              },
              {
                "name": "Has an assessment of relevant legislation, regulations or administrative requirements, and other governmental instruments been carried out (to determine if they facilitate full implementation of the IHR)?",
                "footnote": "Relevant areas include: public health, environment, points of entry (international ports, airports, and ground crossings including quarantine),food safety, agriculture (including animal health),radiation safety, chemical safety and transportation (including dangerous goods)."
              },
              {
                "name": "Cross-border agreements, protocols or memoranda of understandings (MoUs) with neighboring countries with regard to public health emergencies"
              }
            ]
          },
          {
            "jee_id": "P.1.2",
            "name": "The state can demonstrate that it has adjusted and aligned its domestic legislation, policies, and administrative arrangements to enable compliance with the IHR (2005).",
            "type": "indicator",
            "score_descriptions": {},
            "expenses": [],
            "questions": []
          }
        ]
      },
      {
        "name": "IHR Coordination, Communication and Advocacy",
        "type": "capacity",
        "target_description": "The effective implementation of the IHR (2005) requires multisectoral/multidisciplinary approaches through national partnerships for effective alert and response systems. Coordination of nationwide resources, including the sustainable functioning of a National IHR Focal Point (NFP), which is a national centre for IHR (2005) communications, is a key requisite for IHR (2005) implementation. The NFP should be accessible at all times to communicate with the WHO IHR Regional Contact Points and with all relevant sectors and other stakeholders in the country. States Parties should provide WHO with contact details of NFPs, continuously update and annually confirm them.",
        "as_measured_by": null,
        "desired_impact": "A mechanism for multisectoral/multidisciplinary coordination, communication and partnerships is functional to detect, assess and respond to any public health event or risk. The NFP is accessible at all times to communicate with the WHO IHR Regional Contact Points and with all relevant sectors and other stakeholders in the country",
        "notes": "National legislation, policy and financing: These questions should be answered by legal or legislative advisers, experts at the MoH or other relevant government office/NFP. Please ask to see the relevant documents.",
        "indicators": [
          {
            "jee_id": "P.2.1",
            "name": "A functional mechanism is established for the coordination and integration of relevant sectors in the implementation of IHR",
            "type": "indicator",
            "score_descriptions": {},
            "expenses": [],
            "questions": [
              {
                "name": "Is there coordination within relevant ministries on events that may constitute a public health event or risk of national or international concern?"
              },
              {
                "name": "Are SOPs or guidelines available for coordination between NFP and other relevant sectors?"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": 'Detect',
    "type": 'core_element',
    "description": '',
    "capacities": [
      {
        "name": 'National Laboratory System',
        "type": 'capacity',
        "target_description": 'Real-time biosurveillance with a national laboratory system and effective modern point-of-care and laboratory-based diagnostics.',
        "as_measured_by": 'A nationwide laboratory system able to reliably conduct at least five of the 10 core tests on appropriately identified and collected outbreak specimens transported safely and securely to accredited laboratories from at least 80 percent of intermediate level/districts in the country',
        "desired_impact": 'Effective use of a nationwide laboratory system capable of safely and accurately detecting and characterizing pathogens causing epidemic disease, including both known and novel threats, from all parts of the country. Expanded deployment, utilization and sustainment of modern, safe, secure, affordable and appropriate diagnostic tests or devices established.',
        "notes": [
          'The indicators refer to national laboratory capacity for the country.',
          'The national laboratory system should include the ability to conduct at least five of the ten core tests, the ability to transport specimens safely and quickly from 80% or more of intermediate levels/districts to national laboratory facilities for advanced diagnostics, and the ability to conduct higher level diagnostic testing at national laboratories or agreements with regional networks to ensure testing is available.',
          'Core tests can include local priority tests determined by country-selected indicator pathogens on the basis of major national public health concern.',
        ],
        "contextual_questions": [
          {
            "name": "Which of the ten core tests is the country capable of conducting?",
          },
          {
            "name": "Please describe structure of the laboratory system, including number of labs, at local, intermediate levels/district, and national level.",
            "subquestions": [
              {
                "name": "How many reference labs exist and for which microbes?",
              },
              {
                "name": "Do local clinicians have the custom of using the laboratory system?  Are there national guidelines for clinicians on which microbiological tests should be taken in specific syndromes like severe pneumonia, severe diarrhoea or suspected meningitis (for example)?",
              },
              {
                "name": "What systems exist for getting laboratory results back to practitioners?  How long does this take?",
              },
              {
                "name": "What percentage of the population has access to laboratory services for the ten priority diseases?",
              }
            ]
          },
          {
            "name": "Have national laboratories been accredited?",
            "subquestions": [
              {
                "name": "If yes, to what standard?",
              },
              {
                "name": "Are guidelines and protocols for quality management system enforced and in use by public and animal health laboratories?",
              },
              {
                "name": "Is there a national body that oversees Internal Quality Controls and External Quality Assessment schemes for public health laboratories at all levels?",
              },
              {
                "name": "Are all laboratories enrolled in EQA program for the tests they perform to detect any of the ten priority diseases?",
              },
            ]
          },
          {
            "name": "How is laboratory data on zoonotic diseases shared between human and animal health laboratories?  Are the two data systems interoperable?",
            "footnote": "Please see related questions for Prevent 2- Zoonotic Disease",
          },
          {
            "name": "Is Personal Protective Equipment available for laboratory staff?",
            "subquestions": [
              {
                "name": "How is availability of PPE tracked for laboratories?",
              },
              {
                "name": "Please describe training procedures for PPE use in national laboratories",
              }
            ]
          },
          {
            "name": "What biosecurity/biosafety training is provided to laboratory workers?",
            "footnote": "Please see related technical questions for Prevent - Biosafety and Biosecurity",
          }
        ],
        "documentation": [
          'National Laboratory Strategic Plan defining tiered laboratory network',
          'National Laboratory Policy',
          'Documented list of top ten priority diseases and three core syndromes for targeted improvement of prevention, detection and response',
          'Certificates of accreditation for national laboratories and/or EQA results within previous six months for core tests',
          'Documented specimen referral routes for detection/confirmation of top ten priority diseases',
          'Plan for transporting specimens safely throughout the country',
        ],
        "references": [
          'International Health Regulations: What Gets Measured Gets Done (includes listing of the 10 core tests) http://wwwnc.cdc.gov/eid/article/18/7/12-0487-t2',
          'WHO Laboratory Assessment Tool. WHO/HSE/GCR/LYO/2012.2 http://www.who.int/ihr/publications/laboratory_tool/en/',
        ],
        "glossary": [
          "10 core tests: The list of 10 core tests in each country includes six testing methods selected according to the IHR immediately notifiable list and the WHO Top Ten Causes of Death in low-income countries: polymerase chain reaction (PCR) testing for Influenza virus; virus culture for poliovirus; serology for HIV; microscopy for mycobacterium tuberculosis; rapid diagnostic testing for plasmodium spp.; and bacterial culture for Salmonella enteritidis serotype Typhi. These six methods are critical to the detection of epidemic-prone and emerging diseases, and competency in these methods is indicated by the successful testing for the specific pathogens listed. The remaining four tests should be selected by the country on the basis of major national public health concerns.",
          "Transport ‘system’: accurately collect and maintain specimen integrity and is written in SOP",
          "‘Ad hoc’ transport system: no SOP on how to transport sample",
          "Rapid: Diagnostic test performed and result obtained within 12-48 hours or otherwise timely for triggering and guiding control measures",
          "Modern: Novel molecular and cellular methods capable of prompt and accurate identification of pathogens in time-saving and cost-effective manner."
        ],
        "indicators": [
          {
            "jee_id": 'D.1.1',
            "name": 'Laboratory testing for detection of priority diseases',
            "type": 'indicator',
            "questions": [
              {
                "name": "Is there coordination within relevant ministries on events that may constitute a public health event or risk of national or international concern?"
              },
              {
                "name": "How many of the core tests for ten priority diseases are implemented effectively across the tiered laboratory network?",
                "subquestions": [
                  {
                    "name": "Of the tests that cannot be conducted, are there plans and timelines in place to gain this capacity within the next year?",
                  },
                  {
                    "name": "Are there official agreements with labs outside of the country for specialized testing not available in country?",
                  }
                ]
              }
            ]
          },
          {
            "jee_id": 'D.1.2',
            "name": 'Specimen referral and transport system',
            "type": 'indicator',
            "questions": [
              {
                "name": "Is the specimen referral network documented for each of the tests necessary to detect and confirm etiologies of ten priority diseases?"
              },
              {
                "name": "Is there proof of functioning referral system available? For example, data on the number of isolates/samples submitted to national reference lab for key disease(s) per 100,000 population.",
              },
              {
                "name": "Please describe the system for specimen transport from intermediate/district levels to reference laboratories and national laboratories.",
                "subquestions": [
                  {
                    "name": "Are standardized SOPs in place for specimen collection, packaging, and transport?"
                  },
                  {
                    "name": "Is the specimen transport, eg, courier contracts supported by MOH or partners?",
                  }
                ]
              },
              {
                "name": "Does the host country participate in a regional (international) laboratory network?",
              }
            ]
          },
          {
            "jee_id": 'D.1.3',
            "name": 'Effective modern point of care and laboratory based diagnostics',
            "type": 'indicator',
            "questions": [
              {
                "name": "Is there a plan in place to improve the availability of point of care diagnostics at clinical sites in the country?"
              },
              {
                "name": "Does the MoH/MoA have in-country production and/or procurement processes for acquiring necessary media and reagents for performance of core laboratory tests?",
              }
            ]
          },
          {
            "jee_id": 'D.1.4',
            "name": 'Laboratory Quality System',
            "type": 'indicator',
            "questions": [
              {
                "name": "Is there a national body in charge of laboratory licensing?"
              },
              {
                "name": "Is there a national body in charge of laboratory inspection?",
                "subquestions": [
                  {
                    "name": "If yes, please describe the inspection mechanism (frequency, procedures, sanctions, etc.)",
                  }
                ]
              },
              {
                "name": "Is there a national body in charge of laboratory certification (e.g. using ISO 9001)?",
                "subquestions": [
                  {
                    "name": "If yes, please provide name(s).",
                  }
                ]
              },
              {
                "name": "Is there a national body in charge of laboratory accreditation (e.g. using ISO 15189)?",
                "subquestions": [
                  {
                    "name": "If yes, please provide name(s).",
                  },
                  {
                    "name": "If no, do laboratories use services of foreign national or regional accreditation bodies?",
                  },
                  {
                    "name": "If yes, please provide name(s).",
                  }
                ]
              },
              {
                "name": "Are some laboratories accredited for disease-specific testing by WHO (e.g. polio, measles, HIV genotyping)?"
              },
              {
                "name": "Please provide number of laboratories certified or accredited and specify to which standard."
              },
              {
                "name": "Is there a specific national document which describes the registration procedure for in vitro diagnostic medical devices (IVD, i.e. kits and reagents)?"
              },
              {
                "name": "Is there a national regulatory authority responsible for in vitro diagnostic device (e.g. reagents) qualification or registration?",
                "subquestions": [
                  {
                    "name": "If yes, please provide a summary of the qualification or registration mechanisms.",
                  }
                ]
              },
              {
                "name": "Besides the inspection, certification or accreditation detailed above is any other kind of supervision organized?",
                "subquestions": [
                  {
                    "name": "If yes or partial, describe the supervision plan and procedures (e.g. through specific networks like TB control programme or surveillance programmes)",
                  }
                ]
              },
              {
                "name": "Are there standardized supervision checklists or procedures?"
              },
              {
                "name": "When supervised, do the laboratories receive a report after each supervision?"
              },
              {
                "name": "Are there indicators to measure the progress in laboratory test quality? Please list these indicators."
              },
              {
                "name": "Does your country have a national EQA programme (proficiency-testing or rechecking) in the following areas:",
                "subquestions": [
                  {
                    "name": "Bacteriology?",
                  },
                  {
                    "name": "Virology?",
                  },
                  {
                    "name": "Serology?",
                  },
                  {
                    "name": "Parasitology?",
                  },
                  {
                    "name": "Biochemistry?",
                  },
                  {
                    "name": "Haematology?",
                  },
                  {
                    "name": "Anatomical pathology?",
                  },
                  {
                    "name": "Cytogenetic?",
                  },
                  {
                    "name": "Transfusion medicine?",
                  },
                ]
              },
              {
                "name": "Please describe the national EQA programme/s organization by providing for each: name of the programme, contact person/s, one line of description.?"
              },
              {
                "name": "If applicable, is participation in national EQA programmes/s mandatory for public laboratories?"
              },
              {
                "name": "If applicable, is participation in national EQA programmes/s mandatory for private laboratories?"
              },
              {
                "name": "Percentage of public laboratories participating in the national EQA scheme (EQAS)?"
              },
              {
                "name": "Percentage of private laboratories participating in the national EQAS?"
              },
              {
                "name": "Are corrective actions organized when assessment result is poor?"
              },
            ]
          }
        ]
      }
    ],
  },
  {
    "name": 'Respond',
    "type": 'core_element',
    "description": '',
    "capacities": [
      {
        "name": 'Preparedness',
        "type": 'capacity',
        "target_description": 'Preparedness includes the development and maintenance of national, intermediate and local or primary response level public health emergency response plans for relevant biological, chemical, radiological and nuclear hazards. This covers mapping of potential hazards, identification and maintenance of available resources, including national stockpiles and the capacity to support operations at the intermediate and local or primary response levels during a public health emergency.',
        "desired_impact": 'Emergency response operation up to sub-national (local and intermediate) level during public health emergency is successfully conducted in line with the emergency response plan with adequate support of resources and capacities.',
        "notes": [],
        "contextual_questions": [],
        "documentation": [],
        "references": [
          'Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr',
          'Sendai Framework for Disaster Risk Reduction 2015-2030',
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": 'R.1.1',
            "name": 'Multi-hazard national public health emergency preparedness and response plan is developed and implemented',
            "type": 'indicator',
            "questions": [
              {
                "name": "Does the country have a national public health emergency preparedness and response plan?",
                "subquestions": [
                  {
                    "name": "Does the plan have multi-hazard whole of society approach?",
                  },
                  {
                    "name": "Does the plan cover the IHR core capacity requirements of Annex 1A Article 2",
                  }
                ]
              },
              {
                "name": "Does the plan incorporate other IHR-related hazards?"
              },
              {
                "name": "Does the plan incorporate points of entry?"
              },
              {
                "name": "Is surge capacity available to respond to public health emergencies of national and international concern?"
              },
              {
                "name": "Describe the procedures, plans to relocate or mobilize resources from national and intermediate levels to support response at local level.",
                "subquestions": [
                  {
                    "name": "What are those procedures and plans?",
                  },
                  {
                    "name": "What are the resources available and status of stockpiling?",
                  },
                  {
                    "name": "What is the mechanism to address the resource gaps?",
                  }
                ]
              },
              {
                "name": "Is the plan implemented or tested?",
                "subquestions": [
                  {
                    "name": "Has the review been done after implementation and testing?",
                  },
                  {
                    "name": "What are the key findings (SWOT analysis)?",
                  },
                  {
                    "name": "Is the plan updated accordingly?"
                  },
                  {
                    "name": "Is the plan tested after revision or update?"
                  }
                ]
              },
            ]
          },
          {
            "jee_id": 'R.1.2',
            "name": ' Priority public health risks and resources are mapped and utilized',
            "type": 'indicator',
            "questions": [
              {
                "name": "Describe public health risk and resource mapping?",
                "subquestions": [
                  {
                    "name": "When it was done and who was involved?"
                  },
                  {
                    "name": "What are the findings of the national risk assessment?",
                  }
                ]
              },
              {
                "name": "Describe the findings of the resources mapping.",
                "subquestions": [
                  {
                    "name": "Does this mapping address IHR relevant hazards and priority risks?"
                  },
                  {
                    "name": "What is the status of logistics for these mapped risks?",
                  },
                  {
                    "name": ". Do the stockpiles also ensure provisions for response to other IHR-related hazards?",
                  },
                  {
                    "name": "What is the status of experts?",
                  },
                  {
                    "name": "How the funding is ensured? ",
                  },
                ]
              },
              {
                "name": "How often are national profiles on risk and resources reviewed and updated?",
              },
              {
                "name": "How often are national risk profile and resources assessed to accommodate?",
              },
            ]
          }
        ]
      },
      {
        "name": 'Emergency Response Operations',
        "type": 'capacity',
        "target_description": 'Countries will have a public health emergency operation centre (EOC) functioning according to minimum common standards; maintaining trained, functioning, multi-sectoral rapid response teams and “real-time” biosurveillance laboratory networks and information systems; and trained EOC staff capable of activating a coordinated emergency response within 120 minutes of the identification of a public health emergency.',
        "as_measured_by": "Documentation that a public health EOC meeting the above criteria is functioning.",
        "desired_impact": 'Effective coordination and improved control of outbreaks as evidenced by shorter times from detection to response and smaller numbers of cases and deaths.',
        "notes": [],
        "contextual_questions": [],
        "documentation": [],
        "references": [
          'WHO EOC NET:  http://www.who.int/ihr/eoc_net/en/',
          'Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr',
          'Sendai Framework for Disaster Risk Reduction 2015-2030'
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": 'R.2.1',
            "name": 'Capacity to Activate Emergency Operations',
            "type": 'indicator',
            "questions": []
          },
          {
            "jee_id": 'R.2.2',
            "name": 'Emergency Operations Centre Operating Procedures and Plan',
            "type": 'indicator',
            "questions": []
          },
          {
            "jee_id": 'R.2.3',
            "name": 'Emergency Operations Program',
            "type": 'indicator',
            "questions": []
          },
          {
            "jee_id": 'R.2.4',
            "name": 'Case management procedures are implemented for IHR relevant hazards',
            "type": 'indicator',
            "questions": []
          }
        ],
      },
      {
        "name": 'Linking Public Health and Security Authorities',
        "type": 'capacity',
        "target_description": 'In the event of a biological event of suspected or confirmed deliberate origin, a country will be able to conduct a rapid, multisectoral response, including the capacity to link public health and law enforcement, and to provide and/or request effective and timely international assistance, including to investigate alleged use events.',
        "as_measured_by": "Evidence of at least one response within the previous year that effectively links public health and law enforcement, OR a formal exercise or simulation involving leadership from the country’s public health and law enforcement communities.",
        "desired_impact": 'Development and implementation of a memorandum of understanding (MOU) or other similar framework outlining roles, responsibilities, and best practices for sharing relevant information between and among appropriate human and animal health, law enforcement, and defence personnel and validation of the MOU through periodic exercises and simulations. In collaboration with FAO, International Criminal Police Organization (INTERPOL), OIE, WHO, individual Biological and Toxin Weapons Convention States Parties (and where appropriate the Implementation Support Unit), the United Nations Secretary-General’s Mechanism for Investigation of Alleged Use of Chemical and Biological Weapons (UNSGM), and other relevant regional and international organizations as appropriate, countries will develop and implement model systems to conduct and support joint criminal and epidemiological investigations to identify and respond to suspected biological incidents of deliberate origin.',
        "notes": [],
        "contextual_questions": [],
        "documentation": [
          'SOPs or emergency response plans that would include security authorities',
          'Informational reports that are regularly shared with security authorities'
        ],
        "references": [
          'WHO EOC NET:  http://www.who.int/ihr/eoc_net/en/',
          'Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr',
          'Sendai Framework for Disaster Risk Reduction 2015-2030'
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": 'R.3.1',
            "name": 'Public Health and Security Authorities, (e.g. Law Enforcement, Border Control, Customs) are linked during a suspect or confirmed biological event',
            "type": 'indicator',
            "questions": []
          }
        ],
      }

    ],
  }
];