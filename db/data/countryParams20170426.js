//countryParams_v3.js
//Updated 042617 by Mike Van Maele, Talus Analytics LLC
//Description: Contains default parameters for each country to be used
//in the IHR costing tool. NOTE: Only the United States and Kenya currently have
//completed data. The other countries have completed currency data (except for exchange rates
//to USD 2017) and population data. All other data fields are "null".

//NOTE: All data are notional unless otherwise indicated.
//Currently, only data for United States and Kenya are complete and non-notional.

//Change log
//5:24 PM 5/8/2017
//Removed advanced_info.hospitals
//Added advanced_info.national_health_care_facilities_count (set to null for all countries)
//Updated basic_info.level_1_areas so it is set to {"area_name":"Country", "area_count":1}
//for all countries

//5:30 PM 5/4/2017
//Merged previous version with population data from United Nations 2015 estimates,
//currency ISO codes, BLS data, and prior Georgetown work (see "Data sources" below).


//Data sources:
//Population data for all countries: United Nations 2015 estimates (https://esa.un.org/unpd/wpp/Download/Standard/ASCII/)
//Currency data for all countries: Seraph team data files ("currency" field contains 3-char code to crosswalk to currencies.json). Exchange rates in currencies.js are from the United Nations Treasury (https://treasury.un.org/operationalrates/OperationalRates.php)
//United States-specific:
//Number of epidemiologists and Community Health Workers: May 2016 Bureau of Labor Statistics (https://www.bls.gov/oes/current/oes191041.htm#nat and https://www.bls.gov/oes/current/oes211094.htm)
//Kenya-specific:
//All data from prior Georgetown team work

export const countryParams = [
  {
    "complete": false,
    "name": "Aruba",
    "abbreviation": "AW",
    "currency": "AWG",
    "basic_info": {
      "population": 103889,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    }
  },
  {
    "complete": false,
    "abbreviation": "AF",
    "currency": "AFN",
    "basic_info": {
      "population": 32526562,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Afghanistan"
  },
  {
    "complete": false,
    "abbreviation": "AO",
    "currency": "AOA",
    "basic_info": {
      "population": 25021974,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Angola"
  },
  {
    "complete": false,
    "abbreviation": "AI",
    "currency": "XCD",
    "basic_info": {
      "population": 14614,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Anguilla"
  },
  {
    "complete": false,
    "abbreviation": "AL",
    "currency": "ALL",
    "basic_info": {
      "population": 2896679,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Albania"
  },
  {
    "complete": false,
    "abbreviation": "AD",
    "currency": "EUR",
    "basic_info": {
      "population": 70473,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Andorra"
  },
  {
    "complete": false,
    "abbreviation": "AE",
    "currency": "AED",
    "basic_info": {
      "population": 9156963,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "United Arab Emirates"
  },
  {
    "complete": false,
    "abbreviation": "AR",
    "currency": "ARS",
    "basic_info": {
      "population": 43416755,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Argentina"
  },
  {
    "complete": false,
    "abbreviation": "AM",
    "currency": "AMD",
    "basic_info": {
      "population": 3017712,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Armenia"
  },
  {
    "complete": false,
    "abbreviation": "AS",
    "currency": "USD",
    "basic_info": {
      "population": 55538,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "American Samoa"
  },
  {
    "complete": false,
    "abbreviation": "AG",
    "currency": "XCD",
    "basic_info": {
      "population": 91818,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Antigua and Barbuda"
  },
  {
    "complete": false,
    "abbreviation": "AU",
    "currency": "AUD",
    "basic_info": {
      "population": 23968973,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Australia"
  },
  {
    "complete": false,
    "abbreviation": "AT",
    "currency": "EUR",
    "basic_info": {
      "population": 8544586,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Austria"
  },
  {
    "complete": false,
    "abbreviation": "AZ",
    "currency": "AZN",
    "basic_info": {
      "population": 9753968,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Azerbaijan"
  },
  {
    "complete": false,
    "abbreviation": "BI",
    "currency": "BIF",
    "basic_info": {
      "population": 11178921,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Burundi"
  },
  {
    "complete": false,
    "abbreviation": "BE",
    "currency": "EUR",
    "basic_info": {
      "population": 11299192,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Belgium"
  },
  {
    "complete": false,
    "abbreviation": "BJ",
    "currency": "XOF",
    "basic_info": {
      "population": 10879829,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Benin"
  },
  {
    "complete": false,
    "abbreviation": "BF",
    "currency": "XOF",
    "basic_info": {
      "population": 18105570,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Burkina Faso"
  },
  {
    "complete": false,
    "abbreviation": "BD",
    "currency": "BDT",
    "basic_info": {
      "population": 160995642,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bangladesh"
  },
  {
    "complete": false,
    "abbreviation": "BG",
    "currency": "BGN",
    "basic_info": {
      "population": 7149787,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bulgaria"
  },
  {
    "complete": false,
    "abbreviation": "BH",
    "currency": "BHD",
    "basic_info": {
      "population": 1377237,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bahrain"
  },
  {
    "complete": false,
    "abbreviation": "BS",
    "currency": "BSD",
    "basic_info": {
      "population": 388019,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bahamas"
  },
  {
    "complete": false,
    "abbreviation": "BA",
    "currency": "BAM",
    "basic_info": {
      "population": 3810416,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bosnia and Herzegovina"
  },
  {
    "complete": false,
    "abbreviation": "BY",
    "currency": "BYN",
    "basic_info": {
      "population": 9495826,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Belarus"
  },
  {
    "complete": false,
    "abbreviation": "BZ",
    "currency": "BZD",
    "basic_info": {
      "population": 359287,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Belize"
  },
  {
    "complete": false,
    "abbreviation": "BM",
    "currency": "BMD",
    "basic_info": {
      "population": 62004,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bermuda"
  },
  {
    "complete": false,
    "abbreviation": "BO",
    "currency": "BOB",
    "basic_info": {
      "population": 10724705,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bolivia"
  },
  {
    "complete": false,
    "abbreviation": "BR",
    "currency": "BRL",
    "basic_info": {
      "population": 207847528,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Brazil"
  },
  {
    "complete": false,
    "abbreviation": "BB",
    "currency": "BBD",
    "basic_info": {
      "population": 284215,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Barbados"
  },
  {
    "complete": false,
    "abbreviation": "BN",
    "currency": "BND",
    "basic_info": {
      "population": 423188,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Brunei"
  },
  {
    "complete": false,
    "abbreviation": "BT",
    "currency": "INR",
    "basic_info": {
      "population": 774830,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Bhutan"
  },
  {
    "complete": false,
    "abbreviation": "BW",
    "currency": "BWP",
    "basic_info": {
      "population": 2262485,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Botswana"
  },
  {
    "complete": false,
    "abbreviation": "CF",
    "currency": "XAF",
    "basic_info": {
      "population": 4900274,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Central African Republic"
  },
  {
    "complete": false,
    "abbreviation": "CA",
    "currency": "CAD",
    "basic_info": {
      "population": 35939927,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Canada"
  },
  {
    "complete": false,
    "abbreviation": "CH",
    "currency": "CHF",
    "basic_info": {
      "population": 8298663,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Switzerland"
  },
  {
    "complete": false,
    "abbreviation": "CL",
    "currency": "CLP",
    "basic_info": {
      "population": 17948141,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Chile"
  },
  {
    "complete": false,
    "abbreviation": "CN",
    "currency": "CNY",
    "basic_info": {
      "population": 1376048943,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "China"
  },
  {
    "complete": false,
    "abbreviation": "CI",
    "currency": "XOF",
    "basic_info": {
      "population": 22701556,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ivory Coast"
  },
  {
    "complete": false,
    "abbreviation": "CM",
    "currency": "XAF",
    "basic_info": {
      "population": 23344179,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cameroon"
  },
  {
    "complete": false,
    "abbreviation": "CD",
    "currency": "CDF",
    "basic_info": {
      "population": 77266814,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Congo, The Democratic Republic of the"
  },
  {
    "complete": false,
    "abbreviation": "CG",
    "currency": "XAF",
    "basic_info": {
      "population": 4620330,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Congo"
  },
  {
    "complete": false,
    "abbreviation": "CK",
    "currency": "NZD",
    "basic_info": {
      "population": 20833,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cook Islands"
  },
  {
    "complete": false,
    "abbreviation": "CO",
    "currency": "COP",
    "basic_info": {
      "population": 48228704,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Colombia"
  },
  {
    "complete": false,
    "abbreviation": "KM",
    "currency": "KMF",
    "basic_info": {
      "population": 788474,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Comoros"
  },
  {
    "complete": false,
    "abbreviation": "CV",
    "currency": "CVE",
    "basic_info": {
      "population": 520502,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cape Verde"
  },
  {
    "complete": false,
    "abbreviation": "CR",
    "currency": "CRC",
    "basic_info": {
      "population": 4807850,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Costa Rica"
  },
  {
    "complete": false,
    "abbreviation": "CU",
    "currency": "CUP",
    "basic_info": {
      "population": 11389562,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cuba"
  },
  {
    "complete": false,
    "abbreviation": "KY",
    "currency": "KYD",
    "basic_info": {
      "population": 59967,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cayman Islands"
  },
  {
    "complete": false,
    "abbreviation": "CY",
    "currency": "EUR",
    "basic_info": {
      "population": 1165300,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cyprus"
  },
  {
    "complete": false,
    "abbreviation": "CZ",
    "currency": "CZK",
    "basic_info": {
      "population": 10543186,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Czech Republic"
  },
  {
    "complete": false,
    "abbreviation": "DE",
    "currency": "EUR",
    "basic_info": {
      "population": 80688545,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Germany"
  },
  {
    "complete": false,
    "abbreviation": "DJ",
    "currency": "DJF",
    "basic_info": {
      "population": 887861,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Djibouti"
  },
  {
    "complete": false,
    "abbreviation": "DM",
    "currency": "XCD",
    "basic_info": {
      "population": 72680,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Dominica"
  },
  {
    "complete": false,
    "abbreviation": "DK",
    "currency": "DKK",
    "basic_info": {
      "population": 5669081,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Denmark"
  },
  {
    "complete": false,
    "abbreviation": "DO",
    "currency": "DOP",
    "basic_info": {
      "population": 10528391,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Dominican Republic"
  },
  {
    "complete": false,
    "abbreviation": "DZ",
    "currency": "DZD",
    "basic_info": {
      "population": 39666519,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Algeria"
  },
  {
    "complete": false,
    "abbreviation": "EC",
    "currency": "USD",
    "basic_info": {
      "population": 16144363,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ecuador"
  },
  {
    "complete": false,
    "abbreviation": "EG",
    "currency": "EGP",
    "basic_info": {
      "population": 91508084,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Egypt"
  },
  {
    "complete": false,
    "abbreviation": "ER",
    "currency": "ERN",
    "basic_info": {
      "population": 5227791,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Eritrea"
  },
  {
    "complete": false,
    "abbreviation": "EH",
    "currency": "MAD",
    "basic_info": {
      "population": 572540,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Western Sahara"
  },
  {
    "complete": false,
    "abbreviation": "ES",
    "currency": "EUR",
    "basic_info": {
      "population": 46121699,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Spain"
  },
  {
    "complete": false,
    "abbreviation": "EE",
    "currency": "EUR",
    "basic_info": {
      "population": 1312558,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Estonia"
  },
  {
    "complete": false,
    "abbreviation": "ET",
    "currency": "ETB",
    "basic_info": {
      "population": 99390750,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ethiopia"
  },
  {
    "complete": false,
    "abbreviation": "FI",
    "currency": "EUR",
    "basic_info": {
      "population": 5503457,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Finland"
  },
  {
    "complete": false,
    "abbreviation": "FJ",
    "currency": "FJD",
    "basic_info": {
      "population": 892145,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Fiji Islands"
  },
  {
    "complete": false,
    "abbreviation": "FR",
    "currency": "EUR",
    "basic_info": {
      "population": 64395345,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "France"
  },
  {
    "complete": false,
    "abbreviation": "FO",
    "currency": "DKK",
    "basic_info": {
      "population": 48199,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Faroe Islands"
  },
  {
    "complete": false,
    "abbreviation": "FM",
    "currency": "USD",
    "basic_info": {
      "population": 104460,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Micronesia, Federated States of"
  },
  {
    "complete": false,
    "abbreviation": "GA",
    "currency": "XAF",
    "basic_info": {
      "population": 1725292,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Gabon"
  },
  {
    "complete": false,
    "abbreviation": "GB",
    "currency": "GBP",
    "basic_info": {
      "population": 64715810,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "United Kingdom"
  },
  {
    "complete": false,
    "abbreviation": "GE",
    "currency": "GEL",
    "basic_info": {
      "population": 3999812,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Georgia"
  },
  {
    "complete": false,
    "abbreviation": "GH",
    "currency": "GHS",
    "basic_info": {
      "population": 27409893,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ghana"
  },
  {
    "complete": false,
    "abbreviation": "GI",
    "currency": "GIP",
    "basic_info": {
      "population": 32217,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Gibraltar"
  },
  {
    "complete": false,
    "abbreviation": "GN",
    "currency": "GNF",
    "basic_info": {
      "population": 12608590,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guinea"
  },
  {
    "complete": false,
    "abbreviation": "GP",
    "currency": "EUR",
    "basic_info": {
      "population": 468450,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guadeloupe"
  },
  {
    "complete": false,
    "abbreviation": "GM",
    "currency": "GMD",
    "basic_info": {
      "population": 1990924,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Gambia"
  },
  {
    "complete": false,
    "abbreviation": "GW",
    "currency": "XOF",
    "basic_info": {
      "population": 1844325,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guinea-Bissau"
  },
  {
    "complete": false,
    "abbreviation": "GQ",
    "currency": "XAF",
    "basic_info": {
      "population": 845060,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Equatorial Guinea"
  },
  {
    "complete": false,
    "abbreviation": "GR",
    "currency": "EUR",
    "basic_info": {
      "population": 10954617,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Greece"
  },
  {
    "complete": false,
    "abbreviation": "GD",
    "currency": "XCD",
    "basic_info": {
      "population": 106825,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Grenada"
  },
  {
    "complete": false,
    "abbreviation": "GL",
    "currency": "DKK",
    "basic_info": {
      "population": 56186,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Greenland"
  },
  {
    "complete": false,
    "abbreviation": "GT",
    "currency": "GTQ",
    "basic_info": {
      "population": 16342897,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guatemala"
  },
  {
    "complete": false,
    "abbreviation": "GF",
    "currency": "EUR",
    "basic_info": {
      "population": 268606,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "French Guiana"
  },
  {
    "complete": false,
    "abbreviation": "GU",
    "currency": "USD",
    "basic_info": {
      "population": 169885,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guam"
  },
  {
    "complete": false,
    "abbreviation": "GY",
    "currency": "GYD",
    "basic_info": {
      "population": 767085,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Guyana"
  },
  {
    "complete": false,
    "abbreviation": "HK",
    "currency": "HKD",
    "basic_info": {
      "population": 7287983,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Hong Kong"
  },
  {
    "complete": false,
    "abbreviation": "HN",
    "currency": "HNL",
    "basic_info": {
      "population": 8075060,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Honduras"
  },
  {
    "complete": false,
    "abbreviation": "HR",
    "currency": "HRK",
    "basic_info": {
      "population": 4240317,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Croatia"
  },
  {
    "complete": false,
    "abbreviation": "HT",
    "currency": "USD",
    "basic_info": {
      "population": 10711067,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Haiti"
  },
  {
    "complete": false,
    "abbreviation": "HU",
    "currency": "HUF",
    "basic_info": {
      "population": 9855023,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Hungary"
  },
  {
    "complete": false,
    "abbreviation": "ID",
    "currency": "IDR",
    "basic_info": {
      "population": 257563815,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Indonesia"
  },
  {
    "complete": false,
    "abbreviation": "IN",
    "currency": "INR",
    "basic_info": {
      "population": 1311050527,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "India"
  },
  {
    "complete": false,
    "abbreviation": "IE",
    "currency": "EUR",
    "basic_info": {
      "population": 4688465,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ireland"
  },
  {
    "complete": false,
    "abbreviation": "IR",
    "currency": "IRR",
    "basic_info": {
      "population": 79109272,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Iran"
  },
  {
    "complete": false,
    "abbreviation": "IQ",
    "currency": "IQD",
    "basic_info": {
      "population": 36423395,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Iraq"
  },
  {
    "complete": false,
    "abbreviation": "IS",
    "currency": "ISK",
    "basic_info": {
      "population": 329425,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Iceland"
  },
  {
    "complete": false,
    "abbreviation": "IL",
    "currency": "ILS",
    "basic_info": {
      "population": 8064036,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Israel"
  },
  {
    "complete": false,
    "abbreviation": "IT",
    "currency": "EUR",
    "basic_info": {
      "population": 59797685,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Italy"
  },
  {
    "complete": false,
    "abbreviation": "JM",
    "currency": "JMD",
    "basic_info": {
      "population": 2793335,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Jamaica"
  },
  {
    "complete": false,
    "abbreviation": "JO",
    "currency": "JOD",
    "basic_info": {
      "population": 7594547,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Jordan"
  },
  {
    "complete": false,
    "abbreviation": "JP",
    "currency": "JPY",
    "basic_info": {
      "population": 126573481,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Japan"
  },
  {
    "complete": false,
    "abbreviation": "KZ",
    "currency": "KZT",
    "basic_info": {
      "population": 17625226,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Kazakstan"
  },
  {
    "complete": true,
    "abbreviation": "KE",
    "currency": "KES",
    "basic_info": {
      "population": 46050302,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": 135,
        "national_chw_count": 135000
      },
      "national_health_care_facilities_count": null
    },
    "name": "Kenya"
  },
  {
    "complete": false,
    "abbreviation": "KG",
    "currency": "KGS",
    "basic_info": {
      "population": 5939962,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Kyrgyzstan"
  },
  {
    "complete": false,
    "abbreviation": "KH",
    "currency": "KHR",
    "basic_info": {
      "population": 15577899,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Cambodia"
  },
  {
    "complete": false,
    "abbreviation": "KI",
    "currency": "AUD",
    "basic_info": {
      "population": 112423,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Kiribati"
  },
  {
    "complete": false,
    "abbreviation": "KN",
    "currency": "XCD",
    "basic_info": {
      "population": 55572,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Saint Kitts and Nevis"
  },
  {
    "complete": false,
    "abbreviation": "KR",
    "currency": "KRW",
    "basic_info": {
      "population": 50293439,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "South Korea"
  },
  {
    "complete": false,
    "abbreviation": "KW",
    "currency": "KWD",
    "basic_info": {
      "population": 3892115,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Kuwait"
  },
  {
    "complete": false,
    "abbreviation": "LA",
    "currency": "LAK",
    "basic_info": {
      "population": 6802023,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Laos"
  },
  {
    "complete": false,
    "abbreviation": "LB",
    "currency": "LBP",
    "basic_info": {
      "population": 5850743,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Lebanon"
  },
  {
    "complete": false,
    "abbreviation": "LR",
    "currency": "LRD",
    "basic_info": {
      "population": 4503438,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Liberia"
  },
  {
    "complete": false,
    "abbreviation": "LY",
    "currency": "LYD",
    "basic_info": {
      "population": 6278438,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Libyan Arab Jamahiriya"
  },
  {
    "complete": false,
    "abbreviation": "LC",
    "currency": "XCD",
    "basic_info": {
      "population": 184999,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Saint Lucia"
  },
  {
    "complete": false,
    "abbreviation": "LI",
    "currency": "CHF",
    "basic_info": {
      "population": 37531,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Liechtenstein"
  },
  {
    "complete": false,
    "abbreviation": "LK",
    "currency": "LKR",
    "basic_info": {
      "population": 20715010,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Sri Lanka"
  },
  {
    "complete": false,
    "abbreviation": "LS",
    "currency": "ZAR",
    "basic_info": {
      "population": 2135022,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Lesotho"
  },
  {
    "complete": false,
    "abbreviation": "LT",
    "currency": "EUR",
    "basic_info": {
      "population": 2878405,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Lithuania"
  },
  {
    "complete": false,
    "abbreviation": "LU",
    "currency": "EUR",
    "basic_info": {
      "population": 567110,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Luxembourg"
  },
  {
    "complete": false,
    "abbreviation": "LV",
    "currency": "EUR",
    "basic_info": {
      "population": 1970503,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Latvia"
  },
  {
    "complete": false,
    "abbreviation": "MO",
    "currency": "MOP",
    "basic_info": {
      "population": 587606,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Macao"
  },
  {
    "complete": false,
    "abbreviation": "MA",
    "currency": "MAD",
    "basic_info": {
      "population": 34377511,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Morocco"
  },
  {
    "complete": false,
    "abbreviation": "MC",
    "currency": "EUR",
    "basic_info": {
      "population": 37731,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Monaco"
  },
  {
    "complete": false,
    "abbreviation": "MD",
    "currency": "MDL",
    "basic_info": {
      "population": 4068897,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Moldova"
  },
  {
    "complete": false,
    "abbreviation": "MG",
    "currency": "MGA",
    "basic_info": {
      "population": 24235390,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Madagascar"
  },
  {
    "complete": false,
    "abbreviation": "MV",
    "currency": "MVR",
    "basic_info": {
      "population": 363657,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Maldives"
  },
  {
    "complete": false,
    "abbreviation": "MX",
    "currency": "MXN",
    "basic_info": {
      "population": 127017224,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mexico"
  },
  {
    "complete": false,
    "abbreviation": "MH",
    "currency": "USD",
    "basic_info": {
      "population": 52993,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Marshall Islands"
  },
  {
    "complete": false,
    "abbreviation": "MK",
    "currency": "MKD",
    "basic_info": {
      "population": 2078453,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Macedonia"
  },
  {
    "complete": false,
    "abbreviation": "ML",
    "currency": "XOF",
    "basic_info": {
      "population": 17599694,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mali"
  },
  {
    "complete": false,
    "abbreviation": "MT",
    "currency": "EUR",
    "basic_info": {
      "population": 418670,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Malta"
  },
  {
    "complete": false,
    "abbreviation": "MM",
    "currency": "MMK",
    "basic_info": {
      "population": 53897154,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Myanmar"
  },
  {
    "complete": false,
    "abbreviation": "MN",
    "currency": "MNT",
    "basic_info": {
      "population": 2959134,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mongolia"
  },
  {
    "complete": false,
    "abbreviation": "MP",
    "currency": "USD",
    "basic_info": {
      "population": 55070,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Northern Mariana Islands"
  },
  {
    "complete": false,
    "abbreviation": "MZ",
    "currency": "MZN",
    "basic_info": {
      "population": 27977863,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mozambique"
  },
  {
    "complete": false,
    "abbreviation": "MR",
    "currency": "MRO",
    "basic_info": {
      "population": 4067564,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mauritania"
  },
  {
    "complete": false,
    "abbreviation": "MS",
    "currency": "XCD",
    "basic_info": {
      "population": 5125,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Montserrat"
  },
  {
    "complete": false,
    "abbreviation": "MQ",
    "currency": "EUR",
    "basic_info": {
      "population": 396425,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Martinique"
  },
  {
    "complete": false,
    "abbreviation": "MU",
    "currency": "MUR",
    "basic_info": {
      "population": 1273212,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mauritius"
  },
  {
    "complete": false,
    "abbreviation": "MW",
    "currency": "MWK",
    "basic_info": {
      "population": 17215232,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Malawi"
  },
  {
    "complete": false,
    "abbreviation": "MY",
    "currency": "MYR",
    "basic_info": {
      "population": 30331007,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Malaysia"
  },
  {
    "complete": false,
    "abbreviation": "YT",
    "currency": "EUR",
    "basic_info": {
      "population": 240015,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Mayotte"
  },
  {
    "complete": false,
    "abbreviation": "NA",
    "currency": "ZAR",
    "basic_info": {
      "population": 2458830,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Namibia"
  },
  {
    "complete": false,
    "abbreviation": "NC",
    "currency": "XPF",
    "basic_info": {
      "population": 263118,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "New Caledonia"
  },
  {
    "complete": false,
    "abbreviation": "NE",
    "currency": "XOF",
    "basic_info": {
      "population": 19899120,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Niger"
  },
  {
    "complete": false,
    "abbreviation": "NG",
    "currency": "NGN",
    "basic_info": {
      "population": 182201962,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Nigeria"
  },
  {
    "complete": false,
    "abbreviation": "NI",
    "currency": "NIO",
    "basic_info": {
      "population": 6082032,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Nicaragua"
  },
  {
    "complete": false,
    "abbreviation": "NL",
    "currency": "EUR",
    "basic_info": {
      "population": 16924929,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Netherlands"
  },
  {
    "complete": false,
    "abbreviation": "NO",
    "currency": "NOK",
    "basic_info": {
      "population": 5210967,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Norway"
  },
  {
    "complete": false,
    "abbreviation": "NP",
    "currency": "NPR",
    "basic_info": {
      "population": 28513700,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Nepal"
  },
  {
    "complete": false,
    "abbreviation": "NR",
    "currency": "AUD",
    "basic_info": {
      "population": 10222,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Nauru"
  },
  {
    "complete": false,
    "abbreviation": "NZ",
    "currency": "NZD",
    "basic_info": {
      "population": 4528526,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "New Zealand"
  },
  {
    "complete": false,
    "abbreviation": "OM",
    "currency": "OMR",
    "basic_info": {
      "population": 4490541,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Oman"
  },
  {
    "complete": false,
    "abbreviation": "PK",
    "currency": "PKR",
    "basic_info": {
      "population": 188924874,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Pakistan"
  },
  {
    "complete": false,
    "abbreviation": "PA",
    "currency": "USD",
    "basic_info": {
      "population": 3929141,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Panama"
  },
  {
    "complete": false,
    "abbreviation": "PE",
    "currency": "PEN",
    "basic_info": {
      "population": 31376670,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Peru"
  },
  {
    "complete": false,
    "abbreviation": "PH",
    "currency": "PHP",
    "basic_info": {
      "population": 100699395,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Philippines"
  },
  {
    "complete": false,
    "abbreviation": "PW",
    "currency": "USD",
    "basic_info": {
      "population": 21291,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Palau"
  },
  {
    "complete": false,
    "abbreviation": "PG",
    "currency": "PGK",
    "basic_info": {
      "population": 7619321,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Papua New Guinea"
  },
  {
    "complete": false,
    "abbreviation": "PL",
    "currency": "PLN",
    "basic_info": {
      "population": 38611794,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Poland"
  },
  {
    "complete": false,
    "abbreviation": "PR",
    "currency": "USD",
    "basic_info": {
      "population": 3683238,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Puerto Rico"
  },
  {
    "complete": false,
    "abbreviation": "KP",
    "currency": "KPW",
    "basic_info": {
      "population": 25155317,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "North Korea"
  },
  {
    "complete": false,
    "abbreviation": "PT",
    "currency": "EUR",
    "basic_info": {
      "population": 10349803,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Portugal"
  },
  {
    "complete": false,
    "abbreviation": "PY",
    "currency": "PYG",
    "basic_info": {
      "population": 6639123,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Paraguay"
  },
  {
    "complete": false,
    "abbreviation": "PS",
    "currency": "ILS",
    "basic_info": {
      "population": 4668466,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Palestine"
  },
  {
    "complete": false,
    "abbreviation": "PF",
    "currency": "XPF",
    "basic_info": {
      "population": 282764,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "French Polynesia"
  },
  {
    "complete": false,
    "abbreviation": "QA",
    "currency": "QAR",
    "basic_info": {
      "population": 2235355,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Qatar"
  },
  {
    "complete": false,
    "abbreviation": "RE",
    "currency": "EUR",
    "basic_info": {
      "population": 861154,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Reunion"
  },
  {
    "complete": false,
    "abbreviation": "RO",
    "currency": "RON",
    "basic_info": {
      "population": 19511324,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Romania"
  },
  {
    "complete": false,
    "abbreviation": "RU",
    "currency": "RUB",
    "basic_info": {
      "population": 143456918,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Russian Federation"
  },
  {
    "complete": false,
    "abbreviation": "RW",
    "currency": "RWF",
    "basic_info": {
      "population": 11609666,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Rwanda"
  },
  {
    "complete": false,
    "abbreviation": "SA",
    "currency": "SAR",
    "basic_info": {
      "population": 31540372,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Saudi Arabia"
  },
  {
    "complete": false,
    "abbreviation": "SD",
    "currency": "SDG",
    "basic_info": {
      "population": 40234882,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Sudan"
  },
  {
    "complete": false,
    "abbreviation": "SN",
    "currency": "XOF",
    "basic_info": {
      "population": 15129273,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Senegal"
  },
  {
    "complete": false,
    "abbreviation": "SG",
    "currency": "SGD",
    "basic_info": {
      "population": 5603740,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Singapore"
  },
  {
    "complete": false,
    "abbreviation": "SB",
    "currency": "SBD",
    "basic_info": {
      "population": 583591,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Solomon Islands"
  },
  {
    "complete": false,
    "abbreviation": "SL",
    "currency": "SLL",
    "basic_info": {
      "population": 6453184,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Sierra Leone"
  },
  {
    "complete": false,
    "abbreviation": "SV",
    "currency": "USD",
    "basic_info": {
      "population": 6126583,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "El Salvador"
  },
  {
    "complete": false,
    "abbreviation": "SM",
    "currency": "EUR",
    "basic_info": {
      "population": 31781,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "San Marino"
  },
  {
    "complete": false,
    "abbreviation": "SO",
    "currency": "SOS",
    "basic_info": {
      "population": 10787104,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Somalia"
  },
  {
    "complete": false,
    "abbreviation": "PM",
    "currency": "EUR",
    "basic_info": {
      "population": 6288,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Saint Pierre and Miquelon"
  },
  {
    "complete": false,
    "abbreviation": "ST",
    "currency": "STD",
    "basic_info": {
      "population": 190344,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Sao Tome and Principe"
  },
  {
    "complete": false,
    "abbreviation": "SR",
    "currency": "SRD",
    "basic_info": {
      "population": 542975,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Suriname"
  },
  {
    "complete": false,
    "abbreviation": "SK",
    "currency": "EUR",
    "basic_info": {
      "population": 5426258,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Slovakia"
  },
  {
    "complete": false,
    "abbreviation": "SI",
    "currency": "EUR",
    "basic_info": {
      "population": 2067526,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Slovenia"
  },
  {
    "complete": false,
    "abbreviation": "SE",
    "currency": "SEK",
    "basic_info": {
      "population": 9779426,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Sweden"
  },
  {
    "complete": false,
    "abbreviation": "SZ",
    "currency": "SZL",
    "basic_info": {
      "population": 1286970,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Swaziland"
  },
  {
    "complete": false,
    "abbreviation": "SC",
    "currency": "SCR",
    "basic_info": {
      "population": 96471,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Seychelles"
  },
  {
    "complete": false,
    "abbreviation": "SY",
    "currency": "SYP",
    "basic_info": {
      "population": 18502413,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Syria"
  },
  {
    "complete": false,
    "abbreviation": "TC",
    "currency": "USD",
    "basic_info": {
      "population": 34339,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Turks and Caicos Islands"
  },
  {
    "complete": false,
    "abbreviation": "TD",
    "currency": "XAF",
    "basic_info": {
      "population": 14037472,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Chad"
  },
  {
    "complete": false,
    "abbreviation": "TG",
    "currency": "XOF",
    "basic_info": {
      "population": 7304578,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Togo"
  },
  {
    "complete": false,
    "abbreviation": "TH",
    "currency": "THB",
    "basic_info": {
      "population": 67959359,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Thailand"
  },
  {
    "complete": false,
    "abbreviation": "TJ",
    "currency": "TJS",
    "basic_info": {
      "population": 8481855,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Tajikistan"
  },
  {
    "complete": false,
    "abbreviation": "TM",
    "currency": "TMT",
    "basic_info": {
      "population": 5373502,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Turkmenistan"
  },
  {
    "complete": false,
    "abbreviation": "TL",
    "currency": "USD",
    "basic_info": {
      "population": 1184765,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "East Timor"
  },
  {
    "complete": false,
    "abbreviation": "TO",
    "currency": "TOP",
    "basic_info": {
      "population": 106170,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Tonga"
  },
  {
    "complete": false,
    "abbreviation": "TT",
    "currency": "TTD",
    "basic_info": {
      "population": 1360088,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Trinidad and Tobago"
  },
  {
    "complete": false,
    "abbreviation": "TN",
    "currency": "TND",
    "basic_info": {
      "population": 11253554,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Tunisia"
  },
  {
    "complete": false,
    "abbreviation": "TR",
    "currency": "TRY",
    "basic_info": {
      "population": 78665830,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Turkey"
  },
  {
    "complete": false,
    "abbreviation": "TV",
    "currency": "AUD",
    "basic_info": {
      "population": 9916,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Tuvalu"
  },
  {
    "complete": false,
    "abbreviation": "TW",
    "currency": "TWD",
    "basic_info": {
      "population": 23381038,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Taiwan"
  },
  {
    "complete": false,
    "abbreviation": "TZ",
    "currency": "TZS",
    "basic_info": {
      "population": 53470420,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Tanzania"
  },
  {
    "complete": false,
    "abbreviation": "UG",
    "currency": "UGX",
    "basic_info": {
      "population": 39032383,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Uganda"
  },
  {
    "complete": false,
    "abbreviation": "UA",
    "currency": "UAH",
    "basic_info": {
      "population": 44823765,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Ukraine"
  },
  {
    "complete": false,
    "abbreviation": "UY",
    "currency": "UYU",
    "basic_info": {
      "population": 3431555,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Uruguay"
  },
  {
    "name": "United States of America",
    "abbreviation": "US",
    "complete": true,
    "currency": "USD",
    "basic_info": {
      "population": 309403273,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": "State",
        "area_count": 50
      },
      "level_3_areas": {
        "area_name": "County",
        "area_count": 3069
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": 5690,
        "national_chw_count": 51900
      },
      "national_health_care_facilities_count": null
    }
  },
  {
    "complete": false,
    "abbreviation": "UZ",
    "currency": "UZS",
    "basic_info": {
      "population": 29893488,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Uzbekistan"
  },
  {
    "complete": false,
    "abbreviation": "VC",
    "currency": "XCD",
    "basic_info": {
      "population": 109462,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Saint Vincent and the Grenadines"
  },
  {
    "complete": false,
    "abbreviation": "VE",
    "currency": "VEF",
    "basic_info": {
      "population": 31108083,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Venezuela"
  },
  {
    "complete": false,
    "abbreviation": "VG",
    "currency": "USD",
    "basic_info": {
      "population": 30117,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Virgin Islands,British"
  },
  {
    "complete": false,
    "abbreviation": "VI",
    "currency": "USD",
    "basic_info": {
      "population": 106291,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Virgin Islands,U.S."
  },
  {
    "complete": false,
    "abbreviation": "VN",
    "currency": "VND",
    "basic_info": {
      "population": 93447601,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Vietnam"
  },
  {
    "complete": false,
    "abbreviation": "VU",
    "currency": "VUV",
    "basic_info": {
      "population": 264652,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Vanuatu"
  },
  {
    "complete": false,
    "abbreviation": "WF",
    "currency": "XPF",
    "basic_info": {
      "population": 13151,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Wallis and Futuna"
  },
  {
    "complete": false,
    "abbreviation": "WS",
    "currency": "WST",
    "basic_info": {
      "population": 193228,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Samoa"
  },
  {
    "complete": false,
    "abbreviation": "YE",
    "currency": "YER",
    "basic_info": {
      "population": 26832215,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Yemen"
  },
  {
    "complete": false,
    "abbreviation": "ZA",
    "currency": "ZAR",
    "basic_info": {
      "population": 54490406,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "South Africa"
  },
  {
    "complete": false,
    "abbreviation": "ZM",
    "currency": "ZMW",
    "basic_info": {
      "population": 16211767,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Zambia"
  },
  {
    "complete": false,
    "abbreviation": "ZW",
    "currency": "USD",
    "basic_info": {
      "population": 15602751,
      "level_1_areas": {
        "area_name": "Country",
        "area_count": 1
      },
      "level_2_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_3_areas": {
        "area_name": null,
        "area_count": null
      },
      "level_4_areas": {
        "area_name": null,
        "area_count": null
      }
    },
    "advanced_info": {
      "staff": {
        "national_epi_count": null,
        "national_chw_count": null
      },
      "national_health_care_facilities_count": null
    },
    "name": "Zimbabwe"
  }
];
