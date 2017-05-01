export const jeeTree = [
  {
    name: 'Prevent',
    type: 'core_element',
    description: '',
    capacities: [
      {
        name: 'National Legislation, Policy, and Financing',
        type: 'capacity',
        target_description: 'States Parties should have an adequate legal framework to support and enable the implementation of all of their obligations and rights to comply with and implement the IHR (2005). In some States Parties, implementation of the IHR (2005) may require new or modified legislation. Even where new or revised legislation may not be specifically required under the State Party’s legal system, States may still choose to revise some legislation, regulations or other instruments in order to facilitate their implementation and maintenance in a more efficient, effective or beneficial manner. State parties should ensure provision of adequate funding for IHR implementation through national budget or other mechanism.',
        desired_impact: 'Legislation, laws, regulations, administrative requirements, policies or other government instruments and budget in place sufficiently support IHR implementation.',
        notes: 'National legislation, policy and financing: These questions should be answered by legal or legislative advisers, experts at the MoH or other relevant government office/NFP. Please ask to see the relevant documents.',
        indicators: [
          {
            jee_id: 'P.1.1',
            name: 'Legislation, laws, regulations, administrative requirements, policies or other government instruments in place are sufficient for implementation of IHR.',
            type: 'indicator',
            questions: [
              {
                name: 'Is there legislation or are there regulations or administrative requirements, or other governmental instruments governing public health surveillance and response?',
                footnote: 'Legislation: state constitutions, laws, decrees, ordinances or similar legal instruments.',
              },
              {
                name: 'Has an assessment of relevant legislation, regulations or administrative requirements, and other governmental instruments been carried out (to determine if they facilitate full implementation of the IHR)?',
                footnote: 'Relevant areas include: public health, environment, points of entry (international ports, airports, and ground crossings including quarantine),food safety, agriculture (including animal health),radiation safety, chemical safety and transportation (including dangerous goods).',
              },
              {
                name: 'Cross-border agreements, protocols or memoranda of understandings (MoUs) with neighboring countries with regard to public health emergencies',
              }
            ],
            score_descriptions: {
              1: 'Assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation not carried out',
              2: 'Assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation has been carried out',
              3: 'Recommendations following assessment of relevant legislation, regulations, administrative requirements and other government instruments are implemented',
              4: 'Policies to facilitate IHR NFP core and expanded functions and to strengthen core capacities',
              5: 'Policies to facilitate IHR NFP core and expanded functions and to strengthen core capacities incorporated within the national health sector plan (NHSP)',
            },
            expenses: [
              {
                expense_id: 'P.1.1.1',
                name: 'National legal adviser salary',
                description: 'Salary for national legal adviser (Ministry of Health or other government expert) to provide legal expert assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation. Default: 3 months\' salary',
                target_score: 2,
                sophistication_level: [1, 2],
                category: 'Human Capabilities',
                object_class: 'Personnel compensation',
                cost_type: 'startup',
                cost: 30000,
                cost_currency: 'usd',
                cost_currency_year: 2017,
                cost_unit: 'salary per year',
                cost_duration: 0.25,
                cost_duration_unit: 'year',
                multiplier_area: 1,
                multiplier_area_description: 'National level (1)',
                multiplier_staff: null,
                multiplier_health_capacity: null,
                multiplier_population: null,
                multiplier_depreciation: null,
                sources: 'Based on original IHR tool',
              },
              {
                expense_id: 'P.1.1.2',
                name: 'International legal adviser fees',
                description: 'Fees for international legal adviser (consultant) to provide legal expert assessment of relevant legislation, regulation, administrative requirements and other government instruments for IHR (2005) implementation. Default: 56 days\' fees at 1,000 $ per day.',
                target_score: 2,
                sophistication_level: [3],
                category: 'Human Capabilities',
                object_class: 'Contractual services',
                cost_type: 'startup',
                cost: 1000,
                cost_currency: 'usd',
                cost_currency_year: 2017,
                cost_unit: 'consulting fees per day',
                cost_duration: 56,
                cost_duration_unit: 'day',
                multiplier_area: 1,
                multiplier_area_description: 'National level (1)',
                multiplier_staff: null,
                multiplier_health_capacity: null,
                multiplier_population: null,
                multiplier_depreciation: null,
                sources: 'Based on original IHR tool.\n 56 days assumed based on 28 days for travel and on-site work (4 7-day trips to country over 1 year), plus 28 days of research and preparation.\n Generic estimated daily consulting fee for international expert: fully loaded rate of $125/hour x 8 hours per day = $1000/day.',
              }
            ]
          },
          {
            jee_id: 'P.1.2',
            name: 'The state can demonstrate that it has adjusted and aligned its domestic legislation, policies, and administrative arrangements to enable compliance with the IHR (2005).',
            type: 'indicator',
            questions: [

            ]
          }
        ]
      },
      {
        name: 'IHR Coordination, Communication and Advocacy',
        type: 'capacity',
        target_description: 'The effective implementation of the IHR (2005) requires multisectoral/multidisciplinary approaches through national partnerships for effective alert and response systems. Coordination of nationwide resources, including the sustainable functioning of a National IHR Focal Point (NFP), which is a national centre for IHR (2005) communications, is a key requisite for IHR (2005) implementation. The NFP should be accessible at all times to communicate with the WHO IHR Regional Contact Points and with all relevant sectors and other stakeholders in the country. States Parties should provide WHO with contact details of NFPs, continuously update and annually confirm them.',
        desired_impact: 'A mechanism for multisectoral/multidisciplinary coordination, communication and partnerships is functional to detect, assess and respond to any public health event or risk. The NFP is accessible at all times to communicate with the WHO IHR Regional Contact Points and with all relevant sectors and other stakeholders in the country',
        notes: 'National legislation, policy and financing: These questions should be answered by legal or legislative advisers, experts at the MoH or other relevant government office/NFP. Please ask to see the relevant documents.',
        indicators: [
          {
            jee_id: 'P.2.1',
            name: 'A functional mechanism is established for the coordination and integration of relevant sectors in the implementation of IHR',
            type: 'indicator',
            questions: [
              {
                name: 'Is there coordination within relevant ministries on events that may constitute a public health event or risk of national or international concern?',
              },
              {
                name: 'Are SOPs or guidelines available for coordination between NFP and other relevant sectors?',
              }
            ]
          }
        ]
      }
    ],
  },
  {
    name: 'Detect',
    type: 'core_element',
    description: '',
  },
  {
    name: 'Respond',
    type: 'core_element',
    description: '',
  }
];
