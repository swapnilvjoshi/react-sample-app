import { combineReducers } from 'redux';
import { AppState } from '../state/states';
import { AppActionType, AppActions } from '../actions';

export const CoreReducer = (state: AppState, action: AppActions): AppState  => {
  switch(action.type) {
    case AppActionType.APP_INITIALIZE: return {...state};
    case AppActionType.APP_LOAD_DATA: return {...state};
    default: return {...state};
  }
}

export const AppReducer = combineReducers<AppState>({ core: CoreReducer });