import mongoose from 'mongoose';

import { countrySchema } from './data/schemas/Country';
import { countryParams } from './data/countryParams';
import { currencySchema } from './data/schemas/Currency';

export const initialData = () => {

  const Country = mongoose.model('Country', countrySchema);
  Country.insertMany(countryParams);

  const Currency = mongoose.model('Currency', currencySchema);
  const currenciesObj = require('./data/currencies.json');
  const currenciesArr = Object.keys(currenciesObj)
    .map((currencyKey) => {
      return Object.assign({}, currenciesObj[currencyKey], {
        key: currencyKey,
      });
    });
  Currency.insertMany(currenciesArr);

  return {
    Currency,
    Country,
  }

}
