const CHOOSE_COUNTRY = 'CHOOSE_COUNTRY';
const CHOOSE_CURRENCY = 'CHOOSE_CURRENCY';
const CHOOSE_COUNTRY_MAP = 'CHOOSE_COUNTRY_MAP';

const SET_COUNTRIES = 'SET_COUNTRIES';

export const chooseCountry = (country) => ({
  type: CHOOSE_COUNTRY,
  country,
});

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
})
