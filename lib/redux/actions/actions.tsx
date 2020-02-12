import { ActionType } from './ActionType';
import { Action } from 'redux';

export interface BaseAction extends Action {
  type: ActionType;
}

export interface AppConfigureAction extends BaseAction {
  type: ActionType.APP_CONFIGURE;
}

export interface AppInitializeAction extends BaseAction {
  type: ActionType.APP_INITIALIZE;
}

export interface AppLoadDataAction extends BaseAction {
  type: ActionType.APP_LOAD_DATA;
}

export type AppActions = BaseAction | AppInitializeAction | AppLoadDataAction;
