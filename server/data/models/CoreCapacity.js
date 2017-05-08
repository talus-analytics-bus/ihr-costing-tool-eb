import mongoose from 'mongoose';

export const coreCapacitySchema = mongoose.Schema({
  name: String,
  type: String,
  description: String,
  capacities: [{
    name: String,
    type: String,
    target_description: String,
    as_measured_by: String,
    desired_impact: String,
    notes: String,
    indicators: [{
      jee_id: String,
      name: String,
      type: String,
      score_descriptions: {
        1: String,
        2: String,
        3: String,
        4: String,
        5: String,
      },
      expenses: [{
        expense_id: String,
        name: String,
        description: String,
        target_score: Number,
        sophistication_name: String,
        sophistication_level: [Number],
        category: String,
        object_class: String,
        cost_type: String,
        cost: Number,
        cost_currency: String,
        cost_currency_year: Number,
        cost_unit: String,
        cost_duration: String,
        multiplier_area: String,
        multiplier_staff: Number,
        multiplier_health_capacity: String,
        multiplier_population: Number,
        multiplier_depreciation: Number,
        sources: String,
      }],
      questions: [{
        name: String,
        footnote: String,
      }],
      documentation: [],
      contextual_questions: [{
        name: String,
        subquestions: [{
          name: String,
        }],
      }],
      additional_questions: [],
      glossary: [],
      references: [],
    }]
  }]
}, {typeKey: '$type'});

export const CoreCapacity = mongoose.model('CoreCapacity', coreCapacitySchema);
