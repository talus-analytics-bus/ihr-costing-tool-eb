import { CountryTopo } from '../../server/data/models/CountryTopo';
/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  const countries = require('../data/countries.topo.json');

  this('CountryTopo').create(countries);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  this('CountryTopo').remove();
}
