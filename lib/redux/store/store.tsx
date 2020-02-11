import { createStore, Store } from 'redux';
import { AppReducer } from '../reducers/reducers';
import { AppActions } from '../actions';
import { AppState } from '../state/states'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const store: Store<AppState, AppActions> = createStore(AppReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())