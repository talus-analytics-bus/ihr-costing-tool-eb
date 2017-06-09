export const levels = [
  'None',
  'Limited',
  'Developed',
  'Demonstrated',
  'Sustainable',
];

export const getSelectedLevelIndex = (selected) => Number(selected || 0);

export const getTargetLevelIndex = (selected) => Math.min(getSelectedLevelIndex(selected) + 1, 4);
