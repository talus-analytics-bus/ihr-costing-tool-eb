import mongoose from 'mongoose';

export const countrySchema = mongoose.Schema({
  name: String,
  abbreviation: String,
  complete: Boolean,
  currency: String,
  basic_info: {
    population: Number,
    level_1_areas: {
      area_name: String,
      area_count: Number,
    },
    level_2_areas: {
      area_name: String,
      area_count: Number,
    },
    level_3_areas: {
      area_name: String,
      area_count: Number,
    },
    level_4_areas: {
      area_name: String,
      area_count: Number,
    },
  },
  advanced_info: {
    staff: {
      national_epi_count: Number,
      national_chw_count: Number,
    },
    national_health_care_facilities_count: Number,
    hospitals: {
      level_1_count: Number,
      level_2_count: Number,
      level_3_count: Number,
      level_4_count: Number,
      chc_count: Number,
    },
  },
});

export const Country = mongoose.model('Country', countrySchema);
