const tableOfContents = [
  {
    label: 'Prevent',
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
