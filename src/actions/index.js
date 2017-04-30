const CHOOSE_COUNTRY = 'CHOOSE_COUNTRY';
const CHOOSE_CURRENCY = 'CHOOSE_CURRENCY';
const CHOOSE_COUNTRY_MAP = 'CHOOSE_COUNTRY_MAP';

const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_COUNTRY_MAP = 'SET_COUNTRY_MAP';

const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS';
const SET_COUNTRY_INFO_VALUE = 'SET_COUNTRY_INFO_VALUE';
const TOGGLE_EDIT = 'TOGGLE_EDIT';
const TOGGLE_SHOW_ADVANCED = 'TOGGLE_SHOW_ADVANCED';

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

export const setCountryDetails = (details) => ({
  type: SET_COUNTRY_DETAILS,
  details,
})

export const toggleEdit = (target) => ({
  type: TOGGLE_EDIT,
  target,
})

export const setCountryInfoValue = (target, value) => ({
  type: SET_COUNTRY_INFO_VALUE,
  target,
  value,
})

export const toggleShowAdvanced = () => ({
  type: TOGGLE_SHOW_ADVANCED,
})
