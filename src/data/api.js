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

export class Api {

  static fetchTableOfContents() {
    return Promise.resolve(tableOfContents);
  }

}
