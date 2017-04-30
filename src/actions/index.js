const CHOOSE_COUNTRY = 'CHOOSE_COUNTRY';
const CHOOSE_CURRENCY = 'CHOOSE_CURRENCY';
const CHOOSE_COUNTRY_MAP = 'CHOOSE_COUNTRY_MAP';

const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_COUNTRY_MAP = 'SET_COUNTRY_MAP';

export const chooseCountry = (country) => ({
  type: CHOOSE_COUNTRY,
  country,
});

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
})

export const chooseCurrency = (currency) => ({
  type: CHOOSE_CURRENCY,
  currency,
});

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
})

export const setCountryMap = (countryMap) => ({
  type: SET_COUNTRY_MAP,
  countryMap,
})
