import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { identificationReducer } from './identification';
import { assessmentReducer } from './assessment';
import { startReducer } from './start';

export const ihrApp = combineReducers({
  data: dataReducer,
  identification: identificationReducer,
  start: startReducer,
  assessment: assessmentReducer,
});
