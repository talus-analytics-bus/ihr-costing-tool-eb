export const getCost = ({
  cost,
  duration,
  staff,
  area,
  population,
  facility,
}) => [
  cost || 0,
  duration || 1,
  staff || 1,
  area !== null ? area : 1,
  population || 1,
  facility || 1,
].reduce((cost, multiplier) => cost * multiplier, 1);

export const getStartupCosts = getCost;

export const expenseIsRecurring = ({cost_type}) => cost_type === 'recurring';

export const expenseIsDepreciating = ({depreciation}) => depreciation !== null && depreciation !== 1.0;

export const getRecurringCost = (state) => {
  const isRecurring = expenseIsRecurring(state);
  const isDepreciating = expenseIsDepreciating(state);

  if (!isRecurring && !isDepreciating) {
    return 0.0;
  }

  const cost = getCost(state);

  if (isDepreciating) {
    return cost * state.depreciation;
  }

  return cost;
}
