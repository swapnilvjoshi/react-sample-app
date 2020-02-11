import { AppActionType } from './AppActionType';
import { Action } from 'redux';

export interface BaseAction extends Action {
  type: AppActionType;
}

export interface AppConfigureAction extends BaseAction {
  type: AppActionType.APP_CONFIGURE;
}

export interface AppInitializeAction extends BaseAction {
  type: AppActionType.APP_INITIALIZE;
}

export interface AppLoadDataAction extends BaseAction {
  type: AppActionType.APP_LOAD_DATA;
}
