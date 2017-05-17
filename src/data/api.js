import axios from 'axios';
import { jeeTree } from './jeeTree';

const baseUrl = 'http://54.244.158.40:9500';

const tableOfContents = [
  {
    label: 'Prevent',
    style: {
      background: 'rgba(215, 231, 246, 1)',
    },
    items: [
      {
        label: 'National Library System',
      },
      {
        label: 'Real Time Surveillance',
      },
      {
        label: 'Real Time Surveillance',
      },
    ],
  },
  {
    label: 'Detect',
    style: {
      background: 'rgba(251, 223, 195, 1)',
    },
    items: [
      {
        label: 'National Library System',
      },
      {
        label: 'Real Time Surveillance',
      },
      {
        label: 'Real Time Surveillance',
      },
    ],
  },
  {
    label: 'Respond',
    style: {
      background: 'rgba(237, 234, 245, 1)',
    },
    items: [
      {
        label: 'National Library System',
      },
      {
        label: 'Real Time Surveillance',
      },
      {
        label: 'Real Time Surveillance',
      },
    ],
  }
];
const capacityTable = {
  columns: [
    'Laboratory testing for detection of diseases',
    'Specimen referral and transport system'
  ],
  data: [
    {
      label: 'No Capacity - 1',
      columns: [
        'National laboratory system is not capable of conducting any core tests.',
        'National laboratory system is not capable of conducting any core tests.',
      ],
    },
    {
      label: 'Limited Capacity - 2',
      columns: [
        'National laboratory system is not capable of conducting any core tests.',
        'National laboratory system is not capable of conducting any core tests.',
      ],
    },
    {
      label: 'Developed Capacity - 3',
      columns: [
        'National laboratory system is not capable of conducting any core tests.',
        'National laboratory system is not capable of conducting any core tests.',
      ],
    },
    {
      label: 'Demonstrated Capacity - 4',
      columns: [
        'National laboratory system is not capable of conducting any core tests.',
        'National laboratory system is not capable of conducting any core tests.',
      ],
    },
    {
      label: 'Sustainable Capacity - 5',
      columns: [
        'National laboratory system is not capable of conducting any core tests.',
        'National laboratory system is not capable of conducting any core tests.',
      ],
    },
  ],
};
const countryMap = require('./json/countries.topo.json');

export class Api {

  static fetchTableOfContents() {
    return Promise.resolve(tableOfContents);
  }

  static fetchCapacityTable() {
    return Promise.resolve(capacityTable);
  }

  static fetchCountries() {
    return axios.get(`${baseUrl}/countries`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchMap() {
    return axios.get(`${baseUrl}/countries-map`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchCurrencies() {
    return axios.get(`${baseUrl}/currencies`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchJeeTree() {
    return axios.get(`${baseUrl}/jeetree`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

}
