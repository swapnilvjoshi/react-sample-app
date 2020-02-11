import { CoreReducer } from '../reducers/reducers'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CoreState {
  
}

export interface AppState {
  core: ReturnType<typeof CoreReducer>;
}