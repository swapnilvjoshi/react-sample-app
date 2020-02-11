import { AppActionType } from './AppActionType';
import { BaseAction, AppInitializeAction, AppLoadDataAction } from './actions';

export type AppActions = BaseAction | AppInitializeAction | AppLoadDataAction;

export {
  AppActionType,
  BaseAction,
  AppInitializeAction,
  AppLoadDataAction
}