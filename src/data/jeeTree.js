//All data are notional.
//Note that the examples contained in this JSON do not match the
//examples in the slide deck and images in all cases, but the data
//fields themselves are the same.
export const jeeTree = [
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
              },
              {
                "expense_id": "P.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "P.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
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
            "score_descriptions": {
              "1": "Legislation, regulation, administrative requirements and other government instruments are not in place for the implementation of the IHR (2005)",
              "2": "Assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation has been carried out and adjustment needs have been identified",
              "3": "The country can demonstrate the existence and use of relevant laws and policies in the various sectors involved in the implementation of the IHR",
              "4": "The country has legislation references and/or administrative requirements for specific areas (e.g. current legislation specifically address IHR NFP designation and operations)",
              "5": "The country ensures coordination of the legal and regulatory frameworks between sectors"
            },
            "expenses": [
              {
                "expense_id": "P.1.2.1",
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
                "expense_id": "P.1.2.1",
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
                "expense_id": "P.1.2.1",
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
                "expense_id": "P.1.2.2",
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
              },
              {
                "expense_id": "P.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "P.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": []
          }
        ],
        "documentation": [],
        "contextual_questions": [],
        "additional_questions": [],
        "glossary": [],
        "references": []
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
            "expenses": [
              {
                "expense_id": "P.2.1.1",
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
                "expense_id": "P.2.1.1",
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
                "expense_id": "P.2.1.1",
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
                "expense_id": "P.2.1.2",
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
              },
              {
                "expense_id": "P.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "P.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Is there coordination within relevant ministries on events that may constitute a public health event or risk of national or international concern?"
              },
              {
                "name": "Are SOPs or guidelines available for coordination between NFP and other relevant sectors?"
              }
            ]
          }
        ],
        "documentation": [],
        "contextual_questions": [],
        "additional_questions": [],
        "glossary": [],
        "references": []
      }
    ]
  },
  {
    "name": "Detect",
    "type": "core_element",
    "description": "Capacities that... (to do).",
    "capacities": [
      {
        "name": "National Laboratory System",
        "type": "capacity",
        "target_description": "Real-time biosurveillance with a national laboratory system and effective modern point-of-care and laboratory-based diagnostics.",
        "as_measured_by": "A nationwide laboratory system able to reliably conduct at least five of the 10 core tests on appropriately identified and collected outbreak specimens transported safely and securely to accredited laboratories from at least 80 percent of intermediate level/districts in the country",
        "desired_impact": "Effective use of a nationwide laboratory system capable of safely and accurately detecting and characterizing pathogens causing epidemic disease, including both known and novel threats, from all parts of the country. Expanded deployment, utilization and sustainment of modern, safe, secure, affordable and appropriate diagnostic tests or devices established.",
        "notes": [
          "The indicators refer to national laboratory capacity for the country.",
          "The national laboratory system should include the ability to conduct at least five of the ten core tests, the ability to transport specimens safely and quickly from 80% or more of intermediate levels/districts to national laboratory facilities for advanced diagnostics, and the ability to conduct higher level diagnostic testing at national laboratories or agreements with regional networks to ensure testing is available.",
          "Core tests can include local priority tests determined by country-selected indicator pathogens on the basis of major national public health concern."
        ],
        "contextual_questions": [
          {
            "name": "Which of the ten core tests is the country capable of conducting?"
          },
          {
            "name": "Please describe structure of the laboratory system, including number of labs, at local, intermediate levels/district, and national level.",
            "subquestions": [
              {
                "name": "How many reference labs exist and for which microbes?"
              },
              {
                "name": "Do local clinicians have the custom of using the laboratory system?  Are there national guidelines for clinicians on which microbiological tests should be taken in specific syndromes like severe pneumonia, severe diarrhoea or suspected meningitis (for example)?"
              },
              {
                "name": "What systems exist for getting laboratory results back to practitioners?  How long does this take?"
              },
              {
                "name": "What percentage of the population has access to laboratory services for the ten priority diseases?"
              }
            ]
          },
          {
            "name": "Have national laboratories been accredited?",
            "subquestions": [
              {
                "name": "If yes, to what standard?"
              },
              {
                "name": "Are guidelines and protocols for quality management system enforced and in use by public and animal health laboratories?"
              },
              {
                "name": "Is there a national body that oversees Internal Quality Controls and External Quality Assessment schemes for public health laboratories at all levels?"
              },
              {
                "name": "Are all laboratories enrolled in EQA program for the tests they perform to detect any of the ten priority diseases?"
              }
            ]
          },
          {
            "name": "How is laboratory data on zoonotic diseases shared between human and animal health laboratories?  Are the two data systems interoperable?",
            "footnote": "Please see related questions for Prevent 2- Zoonotic Disease"
          },
          {
            "name": "Is Personal Protective Equipment available for laboratory staff?",
            "subquestions": [
              {
                "name": "How is availability of PPE tracked for laboratories?"
              },
              {
                "name": "Please describe training procedures for PPE use in national laboratories"
              }
            ]
          },
          {
            "name": "What biosecurity/biosafety training is provided to laboratory workers?",
            "footnote": "Please see related technical questions for Prevent - Biosafety and Biosecurity"
          }
        ],
        "documentation": [
          "National Laboratory Strategic Plan defining tiered laboratory network",
          "National Laboratory Policy",
          "Documented list of top ten priority diseases and three core syndromes for targeted improvement of prevention, detection and response",
          "Certificates of accreditation for national laboratories and/or EQA results within previous six months for core tests",
          "Documented specimen referral routes for detection/confirmation of top ten priority diseases",
          "Plan for transporting specimens safely throughout the country"
        ],
        "references": [
          "International Health Regulations: What Gets Measured Gets Done (includes listing of the 10 core tests) http://wwwnc.cdc.gov/eid/article/18/7/12-0487-t2",
          "WHO Laboratory Assessment Tool. WHO/HSE/GCR/LYO/2012.2 http://www.who.int/ihr/publications/laboratory_tool/en/"
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
            "jee_id": "D.1.1",
            "name": "Laboratory testing for detection of priority diseases",
            "type": "indicator",
            "score_descriptions": {
              "1": "National laboratory system is not capable of conducting any core tests.",
              "2": "National laboratory system is capable of conducting 1-2 core tests",
              "3": "National laboratory system is capable of conducting 3-4 core tests",
              "4": "National laboratory system is capable of conducting five or more of the ten core tests",
              "5": "In addition to achieving 'demonstrated capacity', country has national system for procurement and quality assurance"
            },
            "expenses": [
              {
                "expense_id": "D.1.1.1",
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
                "expense_id": "D.1.1.1",
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
                "expense_id": "D.1.1.1",
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
                "expense_id": "D.1.1.2",
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
              },
              {
                "expense_id": "D.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Is there coordination within relevant ministries on events that may constitute a public health event or risk of national or international concern?"
              },
              {
                "name": "How many of the core tests for ten priority diseases are implemented effectively across the tiered laboratory network?",
                "subquestions": [
                  {
                    "name": "Of the tests that cannot be conducted, are there plans and timelines in place to gain this capacity within the next year?"
                  },
                  {
                    "name": "Are there official agreements with labs outside of the country for specialized testing not available in country?"
                  }
                ]
              }
            ]
          },
          {
            "jee_id": "D.1.2",
            "name": "Specimen referral and transport system",
            "type": "indicator",
            "score_descriptions": {
              "1": "No system is in place for transporting specimens from intermediate level/districts to national laboratories, only ad hoc transporting.",
              "2": "System is in place to transport specimens to national laboratories from less than 50% of intermediate level/districts in country for advanced diagnostics",
              "3": "System is in place to transport specimens to national laboratories from 50-80% of intermediate level/districts within the country for advanced diagnostics",
              "4": "System is in place to transport specimens to national laboratories from at least 80% of intermediate level/districts within the country for advanced diagnostics",
              "5": "Demonstrated capability plus, transport specimens to/from other labs in the region; specimen transport is funded from host country budget"
            },
            "expenses": [
              {
                "expense_id": "D.1.2.1",
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
                "expense_id": "D.1.2.1",
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
                "expense_id": "D.1.2.1",
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
                "expense_id": "D.1.2.2",
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
              },
              {
                "expense_id": "D.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Is the specimen referral network documented for each of the tests necessary to detect and confirm etiologies of ten priority diseases?"
              },
              {
                "name": "Is there proof of functioning referral system available? For example, data on the number of isolates/samples submitted to national reference lab for key disease(s) per 100,000 population."
              },
              {
                "name": "Please describe the system for specimen transport from intermediate/district levels to reference laboratories and national laboratories.",
                "subquestions": [
                  {
                    "name": "Are standardized SOPs in place for specimen collection, packaging, and transport?"
                  },
                  {
                    "name": "Is the specimen transport, eg, courier contracts supported by MOH or partners?"
                  }
                ]
              },
              {
                "name": "Does the host country participate in a regional (international) laboratory network?"
              }
            ]
          },
          {
            "jee_id": "D.1.3",
            "name": "Effective modern point of care and laboratory based diagnostics",
            "type": "indicator",
            "score_descriptions": {
              "1": "No evidence of use of rapid and accurate point of care and laboratory based diagnostics. No tier specific diagnostic testing strategies are documented.",
              "2": "Minimal, laboratory diagnostic capability exists within the country, but no tier specific diagnostic testing strategies are documented. point of care diagnostics being used for country priority diseases",
              "3": "Tier specific diagnostic testing strategies are documented, but not fully implemented. Country is proficient in classical diagnostic techniques including bacteriology, serology and PCR in select labs but has limited referral and confirmatory processes. Country is using point of care diagnostics for country priority diseases, and at least one other priority disease.",
              "4": "Country has tier specific diagnostic testing strategies documented and fully implemented, a national system of sample referral and confirmatory diagnostics culminating in performance of modern molecular or serological techniques at national and/or regional laboratories. Country is using point of care diagnostics according to tier specific diagnostic testing strategies for diagnosis of country priority diseases",
              "5": "Country has sustainable capability for performing modern molecular and serological techniques as part of a national system of sample referral and confirmatory diagnostics. Country is using rapid and accurate point of care diagnostics as defined by tier specific diagnostic testing strategies. Country is also engaging formally other reference laboratories for testing capacity not available in country where needed to supplement the national diagnostic testing strategies for seven or more of ten lab tests required for priority diseases Country is able to sustain this capability on its own (no more than 20% dependence on donor funding)."
            },
            "expenses": [
              {
                "expense_id": "D.1.3.1",
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
                "expense_id": "D.1.3.1",
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
                "expense_id": "D.1.3.1",
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
                "expense_id": "D.1.3.2",
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
              },
              {
                "expense_id": "D.1.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.1.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Is there a plan in place to improve the availability of point of care diagnostics at clinical sites in the country?"
              },
              {
                "name": "Does the MoH/MoA have in-country production and/or procurement processes for acquiring necessary media and reagents for performance of core laboratory tests?"
              }
            ]
          },
          {
            "jee_id": "D.1.4",
            "name": "Laboratory Quality System",
            "type": "indicator",
            "score_descriptions": {
              "1": "There are no national laboratory quality standards.",
              "2": "National quality standards have been developed but there is no system for verifying their implementation",
              "3": "A system of licensing of health laboratories that includes conformity to a national quality standard exists but it is voluntary or is not a requirement for all laboratories.",
              "4": "Mandatory licensing of all health laboratories is in place and conformity to a national quality standard is required.",
              "5": "Mandatory licensing of all health laboratories is in place and conformity to an international quality standard is required."
            },
            "expenses": [
              {
                "expense_id": "D.1.4.1",
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
                "expense_id": "D.1.4.1",
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
                "expense_id": "D.1.4.1",
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
                "expense_id": "D.1.4.2",
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
              },
              {
                "expense_id": "D.1.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.1.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Is there a national body in charge of laboratory licensing?"
              },
              {
                "name": "Is there a national body in charge of laboratory inspection?",
                "subquestions": [
                  {
                    "name": "If yes, please describe the inspection mechanism (frequency, procedures, sanctions, etc.)"
                  }
                ]
              },
              {
                "name": "Is there a national body in charge of laboratory certification (e.g. using ISO 9001)?",
                "subquestions": [
                  {
                    "name": "If yes, please provide name(s)."
                  }
                ]
              },
              {
                "name": "Is there a national body in charge of laboratory accreditation (e.g. using ISO 15189)?",
                "subquestions": [
                  {
                    "name": "If yes, please provide name(s)."
                  },
                  {
                    "name": "If no, do laboratories use services of foreign national or regional accreditation bodies?"
                  },
                  {
                    "name": "If yes, please provide name(s)."
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
                    "name": "If yes, please provide a summary of the qualification or registration mechanisms."
                  }
                ]
              },
              {
                "name": "Besides the inspection, certification or accreditation detailed above is any other kind of supervision organized?",
                "subquestions": [
                  {
                    "name": "If yes or partial, describe the supervision plan and procedures (e.g. through specific networks like TB control programme or surveillance programmes)"
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
                    "name": "Bacteriology?"
                  },
                  {
                    "name": "Virology?"
                  },
                  {
                    "name": "Serology?"
                  },
                  {
                    "name": "Parasitology?"
                  },
                  {
                    "name": "Biochemistry?"
                  },
                  {
                    "name": "Haematology?"
                  },
                  {
                    "name": "Anatomical pathology?"
                  },
                  {
                    "name": "Cytogenetic?"
                  },
                  {
                    "name": "Transfusion medicine?"
                  }
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
              }
            ]
          }
        ],
        "additional_questions": []
      },
      {
        "name": "Real Time Surveillance",
        "type": "capacity",
        "target_description": "Strengthened foundational indicator- and event-based surveillance systems that are able to detect events of significance for public health, animal health and health security; improved communication and collaboration across sectors and between sub-national (local and intermediate), national and international levels of authority regarding surveillance of events of public health significance; improved country and intermediate level/regional capacity to analyse and link data from and between strengthened, real-time surveillance systems, including interoperable, interconnected electronic reporting systems. This can include epidemiologic, clinical, laboratory, environmental testing, product safety and quality, and bioinformatics data; and advancement in fulfilling the core capacity requirements for surveillance in accordance with the IHR and the OIE standards.",
        "as_measured_by": "Surveillance for at least three core syndromes indicative of potential public health emergencies conducted according to international standards.",
        "desired_impact": "A functioning public health surveillance system capable of identifying potential events of concern for public health and health security, and country and intermediate level/regional capacity to analyse and link data from and between strengthened real-time surveillance systems, including interoperable, interconnected electronic reporting systems. Countries will support the use of interoperable, interconnected systems capable of linking and integrating multi-sectoral surveillance data and using resulting information to enhance the capacity to quickly detect and respond to developing biological threats. Foundational capacity is necessary for both indicator based (including syndromic) surveillance and event-based surveillance, in order to support prevention and control activities and intervention targeting for both established infectious diseases and new and emerging public health threats. Strong surveillance will support the timely recognition of the emergence of relatively rare or previously undescribed pathogens in specific countries.",
        "notes": [
          "The indicator refers to surveillance capacity for the country.",
          "The real-time surveillance system should include the ability to conduct surveillance for at least three core syndromes indicative of a public health emergency, the ability to provide reports and data to high level public health decision makers in country, and feedback to lower levels implementing control programs, and the linkages to laboratory and other information systems to provide a complete surveillance picture",
          "Event-based surveillance is the organized and rapid capture of information about events that are a potential risk to public health. This information can be rumours and other ad-hoc reports transmitted through formal channels (i.e. established routine reporting systems) and informal channels (i.e. media, health workers and nongovernmental organizations reports) and can supplement traditional syndromic surveillance."
        ],
        "contextual_questions": [
          {
            "name": "Does the country have a list of notifiable diseases?"
          }
        ],
        "additional_questions": [
          {
            "name": "Describe indicator-based surveillance system(s) and mechanisms of collecting data.",
            "subquestions": [
              {
                "name": "List of priority disease, conditions and case definitions."
              },
              {
                "name": "Completeness and timeliness of reporting from at least 80% of all reporting units."
              }
            ]
          },
          {
            "name": "Describe data validation and quality assurance systems/efforts."
          }
        ],
        "documentation": [
          "Samples of surveillance reports used by public health decision-makers in country",
          "Listing of core syndromes indicative of public health emergency",
          "Plans for enhancing syndromic surveillance",
          "Plans for developing or enhancing event-based surveillance",
          "OIE Reports (World Animal Health Information System - WAHIS)"
        ],
        "references": [
          "WHO Guide to Establishing Event Based Surveillance http://apps.who.int/iris/bitstream/10665/112667/1/WHO_HSE_GCR_LYO_2014.4_eng.pdf?ua=1",
          "International Health Regulations (2005) Includes lists of disease that have “…demonstrated ability to cause serious public health impact “ http://whqlibdoc.who.int/publications/2008/9789241580410_eng.pdf",
          "OIE Terrestrial Animal Health Code - Section 1",
          "OIE Manual of Diagnostic Tests and Vaccines for Terrestrial Animals: http://www.oie.int/en/international-standard-setting/terrestrial-manual/access-online/"
        ],
        "glossary": [
          "Real-time surveillance: Daily or max weekly collection, consolidation and evaluation of public health and/or veterinary data.",
          "Three Core Syndromes: Internationally recognized standards for syndromic surveillance are available for the following five syndromes: severe acute respiratory syndrome, acute flaccid paralysis, acute haemorrhagic fever, acute watery diarrhoea with dehydration, and jaundice with fever. The three syndromes will be chosen depending on national disease control priorities. These surveillance systems should include early warning surveillance data and laboratory findings, which should be analysed by trained epidemiologists",
          "Interoperable: Describes the extent to which systems and devices can exchange data, and interpret that shared data. For two systems to be interoperable, they must be able to exchange data and subsequently present that data such that it can be understood by a user (definition by Healthcare Information and Management Systems Society)."
        ],
        "indicators": [
          {
            "jee_id": "D.2.1",
            "name": "Indicator and event based surveillance systems",
            "type": "indicator",
            "score_descriptions": {
              "1": "No indicator or event-based surveillance systems exist.",
              "2": "Indicator and event-based surveillance system(s) planned to begin within a year",
              "3": "Indicator OR event-based surveillance system(s) in place to detect public health threats",
              "4": "Indicator and event-based surveillance system(s) in place to detect public health threats",
              "5": "In addition to surveillance systems in country, using expertise to support other countries in developing surveillance systems and provide well-standardized data to WHO and OIE for the past five years without significant external support"
            },
            "expenses": [
              {
                "expense_id": "D.2.1.1",
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
                "expense_id": "D.2.1.1",
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
                "expense_id": "D.2.1.1",
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
                "expense_id": "D.2.1.2",
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
              },
              {
                "expense_id": "D.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Describe event-based surveillance in-country",
                "subquestions": [
                  {
                    "name": "Describe sources utilized by event based surveillance systems and mechanisms of collecting data (paper, fax, electronic, phone?)."
                  },
                  {
                    "name": "Does event based surveillance exist at any subnational (intermediate and local) levels?"
                  },
                  {
                    "name": "Describe indicator based surveillance system(s) and mechanisms of collecting data."
                  }
                ]
              },
              {
                "name": "Describe data validation and quality assurance systems/efforts."
              }
            ]
          },
          {
            "jee_id": "D.2.2",
            "name": "Interoperable, interconnected, electronic real-time reporting system",
            "type": "indicator",
            "score_descriptions": {
              "1": "No interoperable, interconnected, electronic real-time reporting system exists",
              "2": "Country is developing an interoperable, interconnected, electronic real-time reporting system, for either public health or veterinary surveillance systems",
              "3": "Country has in place an inter-operable, interconnected, electronic reporting system, for either public health or veterinary surveillance systems. The system is not yet able to share data in real-time.",
              "4": "Country has in place and interoperable, interconnected, electronic real-time reporting system, for public health and/or veterinary surveillance systems. The system is not yet fully sustained by the host government.",
              "5": "Country has in place an inter-operable, interconnected, electronic real-time reporting system, including both the public health and veterinary surveillance systems which is sustained by the government and capable of sharing data with relevant stake-holders according to country policies and international obligations."
            },
            "expenses": [
              {
                "expense_id": "D.2.2.1",
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
                "expense_id": "D.2.2.1",
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
                "expense_id": "D.2.2.1",
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
                "expense_id": "D.2.2.2",
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
              },
              {
                "expense_id": "D.2.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.2.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "How is public health staff trained on disease surveillance systems?"
              },
              {
                "name": "How is clinical staff trained to report on notifiable diseases?"
              },
              {
                "name": "Does the public health staff on intermediate levels/regional and/or national levels have the skills to analyse the surveillance data to create information triggering/supporting action?"
              },
              {
                "name": "How does the country utilize electronic reporting systems for notifiable diseases for human health and animal health?"
              },
              {
                "name": "Are these systems shared between sectors, or independent?"
              },
              {
                "name": "If no electronic reporting systems exist in the country, are there plans to implement electronic reporting in the future?"
              },
              {
                "name": "Describe the reporting feedback to intermediate levels/regional and local levels."
              },
              {
                "name": "Describe reporting to national and intermediate levels/regional stakeholders."
              },
              {
                "name": "Describe public reporting."
              }
            ]
          },
          {
            "jee_id": "D.2.3",
            "name": "Integration and analysis of surveillance data",
            "type": "indicator",
            "score_descriptions": {
              "1": "No reports related to data collection",
              "2": "Sporadic reports related to data collection with delay",
              "3": "Regular reporting of data with some delay; ad-hoc teams put in place to analyse data",
              "4": "Annually or monthly reporting; attributed functions to experts for analysing, assessing and reporting data",
              "5": "Systematic reporting; dedicated team in place for data analysis, risk assessment and reporting"
            },
            "expenses": [
              {
                "expense_id": "D.2.3.1",
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
                "expense_id": "D.2.3.1",
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
                "expense_id": "D.2.3.1",
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
                "expense_id": "D.2.3.2",
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
              },
              {
                "expense_id": "D.2.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.2.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Describe how laboratory data feeds into the surveillance systems.",
                "subquestions": [
                  {
                    "name": "Does the surveillance system collect ongoing/real time laboratory data that is connected to MoH systems?"
                  },
                  {
                    "name": "Are standardized forms (electronic or otherwise) available to collect this data?"
                  },
                  {
                    "name": "Does the MoH share laboratory data with other ministries/agencies?"
                  },
                  {
                    "name": "Is there a centrally located mechanism for integrating data from clinical case reporting and data from clinical or reference microbiological laboratories?"
                  }
                ]
              }
            ]
          },
          {
            "jee_id": "D.2.4",
            "name": "Syndromic surveillance systems",
            "type": "indicator",
            "score_descriptions": {
              "1": "No syndromic surveillance systems exist",
              "2": "Syndromic surveillance system(s) planned to begin within the next year; policy/legislation is in place to allow for syndromic surveillance",
              "3": "Syndromic surveillance system(s) in place to detect 1-2 core syndromes indicative of public health emergencies",
              "4": "Syndromic surveillance system(s) in place to detect three or more core syndromes indicative of public health emergencies",
              "5": "In addition to surveillance systems in country, using expertise to support other countries in developing surveillance systems"
            },
            "expenses": [
              {
                "expense_id": "D.2.4.1",
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
                "expense_id": "D.2.4.1",
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
                "expense_id": "D.2.4.1",
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
                "expense_id": "D.2.4.2",
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
              },
              {
                "expense_id": "D.2.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.2.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Describe syndromic surveillance systems that are in place within the country:",
                "subquestions": [
                  {
                    "name": "Describe various syndromes and pathogens that are detected and reported."
                  },
                  {
                    "name": "Describe how many sites participate in each surveillance system."
                  },
                  {
                    "name": "Describe how data is validated."
                  },
                  {
                    "name": "Describe any syndromic surveillance systems that utilize electronic reporting."
                  },
                  {
                    "name": "Describe reports that are produced by each surveillance system and how they are used by public health decision makers. Are these reports shared with any other Ministries within the country?"
                  },
                  {
                    "name": "Please describe any linkages that exist between systems at a national level."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Reporting",
        "type": "capacity",
        "target_description": "Timely and accurate disease reporting according to WHO requirements and consistent coordination with FAO and OIE.",
        "as_measured_by": "Number of countries trained for reporting of potential public health events of international concern to WHO and to other official reporting systems such as OIE-WAHIS. (and/or) Number of National IHR Focal Points connected to the learning package on reporting to WHO.",
        "desired_impact": "Countries and their National IHR Focal Points, OIE Delegates, and WAHIS National Focal Points will have access to a toolkit of best practices, model procedures, reporting templates, and training materials to facilitate rapid (within 24 hours) notification of events that may constitute a PHEIC to WHO / listed diseases to OIE and will be able to rapidly (within 24/48 hours) respond to communications from these organizations.",
        "notes": [
          "Not all countries will have reported a potential PHEIC to the WHO or reported to the OIE for relevant zoonotic disease",
          "NOTE: all questions should be answered to reflect human and zoonotic animal diseases"
        ],
        "contextual_questions": [],
        "documentation": [
          "OIE Reports (World Animal Health Information System - WAHIS)",
          "IHR reports to the World Health Assembly",
          "Legislation, protocols or other policies related to reporting to WHO, OIE or FAO",
          "World Animal Health Information Systems (WAHIS)"
        ],
        "references": [
          "WHO IHR Annex 2",
          "OIE Terrestrial Animals and Health Code – Section 1",
          "European Union Decision 1082/EU/2013, Early Warning and Response System"
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": "D.3.1",
            "name": "System for efficient reporting to WHO, FAO and OIE",
            "type": "indicator",
            "score_descriptions": {
              "1": "No national IHR focal point, OIE Delegate and/or WAHIS National Focal Point has been identified and / or identified focal point/delegate does not have access to learning package and best practices as provided by WHO, OIE and FAO.",
              "2": "Country has identified National IHR Focal Point, OIE delegates and WAHIS National Focal Points; focal point is linked to learning package and best practices as provided by WHO, OIE and FAO",
              "3": "Country has demonstrated ability to identify a potential PHEIC and file a report to WHO based on an exercise or real event, and similarly to the OIE for relevant zoonotic disease",
              "4": "Country has demonstrated ability to identify a potential PHEIC and file a report to WHO within 24 hours and similarly to the OIE for relevant zoonotic disease, based on an exercise or real event ",
              "5": "Country has demonstrated ability to identify a potential PHEIC and file a report within 24 hours, and similarly to the OIE for relevant zoonotic disease, and has a multisectoral process in place for assessing potential events for reporting"
            },
            "expenses": [
              {
                "expense_id": "D.3.1.1",
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
                "expense_id": "D.3.1.1",
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
                "expense_id": "D.3.1.1",
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
                "expense_id": "D.3.1.2",
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
              },
              {
                "expense_id": "D.3.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.3.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Which ministry or office within the country has been identified and notified to the WHO as the IHR NFP?",
                "subquestions": [
                  {
                    "name": "Is the IHR national focal point currently operational?"
                  },
                  {
                    "name": "Is there an operational OIE contact point?"
                  },
                  {
                    "name": "Are food safety issues due to microbiological origin reported through the IHR NFP and to the OIE?"
                  },
                  {
                    "name": "Is there a mechanism to ensure that the IHR NFP and OIE contact points exchange information when needed (e.g. for zoonotic diseases)?"
                  },
                  {
                    "name": "Please describe the training that the IHR NFP/OIE contact point responsible person(s) have undergone for this specific role"
                  },
                  {
                    "name": "Please list the ministries that these focal points represents towards the WHO/OIE and who report through the NFP (e.g. ministry of health, ministry of agriculture)."
                  }
                ]
              },
              {
                "name": "What are the mechanisms for public health, animal health and security authorities to make decisions on reporting?"
              },
              {
                "name": "Please describe if the country has multilateral regional (international) or bilateral neighbouring country reporting requirements. If yes, specify."
              },
              {
                "name": "Is there anything which limits the performance of the IHR NFP? (may include quality and timeliness of information received, obstacles caused by coordination with other levels and sectors)",
                "subquestions": [
                  {
                    "name": "Does the IHR NFP use the informal consultation mechanisms with WHO under Article 8 of the IHR?"
                  },
                  {
                    "name": "Does the IHR NFP use the bilateral exchange mechanisms with other IHR NFPs?"
                  }
                ]
              }
            ]
          },
          {
            "jee_id": "D.3.2",
            "name": "Reporting network and protocols in country",
            "type": "indicator",
            "score_descriptions": {
              "1": "Country does not have protocols or processes for reporting to WHO, OIE or FAO; does not have plans to establish within the next year plans and protocols for reporting",
              "2": "Country is in the process of developing and establishing protocols, processes, regulations, and/or legislation governing reporting to start implementation within a year.",
              "3": "Country has established protocols, processes, regulations, and/or legislation governing reporting and processes for multisectoral coordination in response to a potential PHEIC to WHO and to the OIE for relevant zoonotic disease.",
              "4": "Country demonstrates timely reporting of a potential PHEIC to WHO and to the OIE for relevant zoonotic disease in alignment with national and international standards in selected intermediate levels (districts or regions), based on an exercise or real event.",
              "5": "Country demonstrates timely reporting of a potential PHEIC to the WHO from district to national and international level and to the OIE for relevant zoonotic disease (based on an exercise or real event); country has a sustainable process for maintaining and improving reporting and communication capabilities and communication mechanisms are backed by established documentation (e.g. protocols, regulations, legislation.)"
            },
            "expenses": [
              {
                "expense_id": "D.3.2.1",
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
                "expense_id": "D.3.2.1",
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
                "expense_id": "D.3.2.1",
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
                "expense_id": "D.3.2.2",
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
              },
              {
                "expense_id": "D.3.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "D.3.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "questions": [
              {
                "name": "Please describe most recent exercise (or event) that tested the country’s systems to identify and report on a potential public health emergency of international concern (PHEIC).",
                "subquestions": [
                  {
                    "name": "How was the health event identified? What surveillance systems were linked?"
                  },
                  {
                    "name": "How were public health decision-makers and other leadership consulted in the decision-making process?"
                  },
                  {
                    "name": "Which ministries were engaged in the exercise or event? (ministry of health? defense? agriculture?)"
                  },
                  {
                    "name": "If the country has not yet exercised PHEIC reporting, please identify if there are any plans to do so within the next year"
                  }
                ]
              },
              {
                "name": "Has the country passed legislation or other policies related to procedures and/or approvals for reporting on a potential PHEIC to the WHO? If so, please describe the parties involved in approvals as well as the major steps in approvals. If possible, please provide a copy of relevant legislation or policies"
              },
              {
                "name": "Does the country have standard operating procedures in place for approving and reporting on a potential PHEIC to WHO?"
              }
            ]
          }
        ],
        "additional_questions": []
      }
    ]
  },
  {
    "name": "Respond",
    "type": "core_element",
    "description": "Capacities that... (to do).",
    "capacities": [
      {
        "name": "Preparedness",
        "type": "capacity",
        "target_description": "Preparedness includes the development and maintenance of national, intermediate and local or primary response level public health emergency response plans for relevant biological, chemical, radiological and nuclear hazards. This covers mapping of potential hazards, identification and maintenance of available resources, including national stockpiles and the capacity to support operations at the intermediate and local or primary response levels during a public health emergency.",
        "as_measured_by": null,
        "desired_impact": "Emergency response operation up to sub-national (local and intermediate) level during public health emergency is successfully conducted in line with the emergency response plan with adequate support of resources and capacities.",
        "notes": [],
        "contextual_questions": [],
        "documentation": [],
        "references": [
          "Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr",
          "Sendai Framework for Disaster Risk Reduction 2015-2030"
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": "R.1.1",
            "name": "Multi-hazard national public health emergency preparedness and response plan is developed and implemented",
            "type": "indicator",
            "questions": [
              {
                "name": "Does the country have a national public health emergency preparedness and response plan?",
                "subquestions": [
                  {
                    "name": "Does the plan have multi-hazard whole of society approach?"
                  },
                  {
                    "name": "Does the plan cover the IHR core capacity requirements of Annex 1A Article 2"
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
                    "name": "What are those procedures and plans?"
                  },
                  {
                    "name": "What are the resources available and status of stockpiling?"
                  },
                  {
                    "name": "What is the mechanism to address the resource gaps?"
                  }
                ]
              },
              {
                "name": "Is the plan implemented or tested?",
                "subquestions": [
                  {
                    "name": "Has the review been done after implementation and testing?"
                  },
                  {
                    "name": "What are the key findings (SWOT analysis)?"
                  },
                  {
                    "name": "Is the plan updated accordingly?"
                  },
                  {
                    "name": "Is the plan tested after revision or update?"
                  }
                ]
              }
            ],
            "expenses": [
              {
                "expense_id": "R.1.1.1",
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
                "expense_id": "R.1.1.1",
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
                "expense_id": "R.1.1.1",
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
                "expense_id": "R.1.1.2",
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
              },
              {
                "expense_id": "R.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.1.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          },
          {
            "jee_id": "R.1.2",
            "name": " Priority public health risks and resources are mapped and utilized",
            "type": "indicator",
            "questions": [
              {
                "name": "Describe public health risk and resource mapping?",
                "subquestions": [
                  {
                    "name": "When it was done and who was involved?"
                  },
                  {
                    "name": "What are the findings of the national risk assessment?"
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
                    "name": "What is the status of logistics for these mapped risks?"
                  },
                  {
                    "name": ". Do the stockpiles also ensure provisions for response to other IHR-related hazards?"
                  },
                  {
                    "name": "What is the status of experts?"
                  },
                  {
                    "name": "How the funding is ensured? "
                  }
                ]
              },
              {
                "name": "How often are national profiles on risk and resources reviewed and updated?"
              },
              {
                "name": "How often are national risk profile and resources assessed to accommodate?"
              }
            ],
            "expenses": [
              {
                "expense_id": "R.1.2.1",
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
                "expense_id": "R.1.2.1",
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
                "expense_id": "R.1.2.1",
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
                "expense_id": "R.1.2.2",
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
              },
              {
                "expense_id": "R.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.1.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          }
        ],
        "additional_questions": []
      },
      {
        "name": "Emergency Response Operations",
        "type": "capacity",
        "target_description": "Countries will have a public health emergency operation centre (EOC) functioning according to minimum common standards; maintaining trained, functioning, multi-sectoral rapid response teams and “real-time” biosurveillance laboratory networks and information systems; and trained EOC staff capable of activating a coordinated emergency response within 120 minutes of the identification of a public health emergency.",
        "as_measured_by": "Documentation that a public health EOC meeting the above criteria is functioning.",
        "desired_impact": "Effective coordination and improved control of outbreaks as evidenced by shorter times from detection to response and smaller numbers of cases and deaths.",
        "notes": [],
        "contextual_questions": [],
        "documentation": [],
        "references": [
          "WHO EOC NET:  http://www.who.int/ihr/eoc_net/en/",
          "Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr",
          "Sendai Framework for Disaster Risk Reduction 2015-2030"
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": "R.2.1",
            "name": "Capacity to Activate Emergency Operations",
            "type": "indicator",
            "questions": [],
            "expenses": [
              {
                "expense_id": "R.2.1.1",
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
                "expense_id": "R.2.1.1",
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
                "expense_id": "R.2.1.1",
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
                "expense_id": "R.2.1.2",
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
              },
              {
                "expense_id": "R.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.2.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          },
          {
            "jee_id": "R.2.2",
            "name": "Emergency Operations Centre Operating Procedures and Plan",
            "type": "indicator",
            "questions": [],
            "expenses": [
              {
                "expense_id": "R.2.2.1",
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
                "expense_id": "R.2.2.1",
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
                "expense_id": "R.2.2.1",
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
                "expense_id": "R.2.2.2",
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
              },
              {
                "expense_id": "R.2.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.2.2.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          },
          {
            "jee_id": "R.2.3",
            "name": "Emergency Operations Program",
            "type": "indicator",
            "questions": [],
            "expenses": [
              {
                "expense_id": "R.2.3.1",
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
                "expense_id": "R.2.3.1",
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
                "expense_id": "R.2.3.1",
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
                "expense_id": "R.2.3.2",
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
              },
              {
                "expense_id": "R.2.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.2.3.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          },
          {
            "jee_id": "R.2.4",
            "name": "Case management procedures are implemented for IHR relevant hazards",
            "type": "indicator",
            "questions": [],
            "expenses": [
              {
                "expense_id": "R.2.4.1",
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
                "expense_id": "R.2.4.1",
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
                "expense_id": "R.2.4.1",
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
                "expense_id": "R.2.4.2",
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
              },
              {
                "expense_id": "R.2.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.2.4.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          }
        ],
        "additional_questions": []
      },
      {
        "name": "Linking Public Health and Security Authorities",
        "type": "capacity",
        "target_description": "In the event of a biological event of suspected or confirmed deliberate origin, a country will be able to conduct a rapid, multisectoral response, including the capacity to link public health and law enforcement, and to provide and/or request effective and timely international assistance, including to investigate alleged use events.",
        "as_measured_by": "Evidence of at least one response within the previous year that effectively links public health and law enforcement, OR a formal exercise or simulation involving leadership from the country’s public health and law enforcement communities.",
        "desired_impact": "Development and implementation of a memorandum of understanding (MOU) or other similar framework outlining roles, responsibilities, and best practices for sharing relevant information between and among appropriate human and animal health, law enforcement, and defence personnel and validation of the MOU through periodic exercises and simulations. In collaboration with FAO, International Criminal Police Organization (INTERPOL), OIE, WHO, individual Biological and Toxin Weapons Convention States Parties (and where appropriate the Implementation Support Unit), the United Nations Secretary-General’s Mechanism for Investigation of Alleged Use of Chemical and Biological Weapons (UNSGM), and other relevant regional and international organizations as appropriate, countries will develop and implement model systems to conduct and support joint criminal and epidemiological investigations to identify and respond to suspected biological incidents of deliberate origin.",
        "notes": [],
        "contextual_questions": [],
        "documentation": [
          "SOPs or emergency response plans that would include security authorities",
          "Informational reports that are regularly shared with security authorities"
        ],
        "references": [
          "WHO EOC NET:  http://www.who.int/ihr/eoc_net/en/",
          "Monitoring and Evaluation for Disaster Risk Reduction - http://www.un-spider.org/risks-and-disasters/sendai-framework-drr",
          "Sendai Framework for Disaster Risk Reduction 2015-2030"
        ],
        "glossary": [],
        "indicators": [
          {
            "jee_id": "R.3.1",
            "name": "Public Health and Security Authorities, (e.g. Law Enforcement, Border Control, Customs) are linked during a suspect or confirmed biological event",
            "type": "indicator",
            "questions": [],
            "expenses": [
              {
                "expense_id": "R.3.1.1",
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
                "expense_id": "R.3.1.1",
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
                "expense_id": "R.3.1.1",
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
                "expense_id": "R.3.1.2",
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
              },
              {
                "expense_id": "R.3.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of expensive version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Expensive version of additional expense (to do)",
                "sophistication_level": [
                  3
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 100,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              },
              {
                "expense_id": "R.3.1.3",
                "name": "Additional notional expense (to do)",
                "description": "Description of typical version of additional expense (to do).",
                "target_score": 3,
                "sophistication_name": "Typical version of additional expense (to do)",
                "sophistication_level": [
                  1,
                  2
                ],
                "category": "Tools and processes",
                "object_class": "Printing/Reproduction",
                "cost_type": "startup",
                "cost": 50,
                "cost_currency": "usd",
                "cost_currency_year": 2017,
                "cost_unit": "per object",
                "cost_duration": 2,
                "cost_duration_unit": "objects",
                "multiplier_area": "level_1",
                "multiplier_staff": null,
                "multiplier_health_capacity": "national_epi_count",
                "multiplier_population": null,
                "multiplier_depreciation": null,
                "sources": "Notional (will be replaced)."
              }
            ],
            "score_descriptions": {
              "1": "To do.",
              "2": "To do.",
              "3": "To do.",
              "4": "To do.",
              "5": "To do."
            }
          }
        ],
        "additional_questions": []
      }
    ]
  }
]
