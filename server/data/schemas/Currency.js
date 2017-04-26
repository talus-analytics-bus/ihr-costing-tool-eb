import mongoose from 'mongoose';

export const currencySchema = mongoose.Schema({
  key: String,
  name: String,
  iso: {
    code: String,
    number: String,
  },
  units: {
    major: {
      name: String,
      symbol: String,
    },
    minor: {
      name: String,
      symbol: String,
      majorValue: Number,
    },
  },
  banknotes: {
    frequent: [String],
    rare: [String],
  },
  coins: {
    frequent: [String],
    rare: [String],
  },
  exchange_rates: [{
    convert_from: String,
    date_valid: String,
    multiplier: Number,
  }],
});
