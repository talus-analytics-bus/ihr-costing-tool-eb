import { countryParams } from '../data/countryParams';

import { Country } from '../../server/data/models/Country';
import { Currency } from '../../server/data/models/Currency';

/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  countryParams.forEach((country) => {
    this('Country').create(country);
  })

  const currenciesObj = require('../data/currencies.json');
  const currenciesArr = Object.keys(currenciesObj)
    .map((currencyKey) => {
      return Object.assign({}, currenciesObj[currencyKey], {
        key: currencyKey,
      });
    });
  currenciesArr.forEach((currency) => {
    this('Currency').create(currency);
  })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  this('Country').remove();
  this('Currency').remove();
}
