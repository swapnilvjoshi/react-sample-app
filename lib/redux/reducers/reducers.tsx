import { combineReducers } from 'redux';
import { AppState } from '../state/states';
import { ActionType, AppActions } from '../actions';

export const CoreReducer = (state: AppState, action: AppActions): AppState  => {
  switch(action.type) {
    case ActionType.APP_INITIALIZE: return {...state};
    case ActionType.APP_LOAD_DATA: return {...state};
    default: return {...state};
  }
}

export const AppReducer = combineReducers<AppState>({ core: CoreReducer });