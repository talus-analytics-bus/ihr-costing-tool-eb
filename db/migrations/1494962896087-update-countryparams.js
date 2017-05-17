import { countryParams as newCountryParams } from '../data/countryParams20170426';
import { countryParams as oldCountryParams } from '../data/countryParams';

import { Country } from '../../server/data/models/Country';
/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  this('Country').find().remove().exec();
  newCountryParams.forEach((country) => {
    this('Country').create(country);
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  this('Country').find().remove().exec();
  oldCountryParams.forEach((country) => {
    this('Country').create(country);
  });
}
