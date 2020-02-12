import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store } from '../redux/store/store';
import { AppState } from '../redux/state/states';
import { Dispatch } from 'redux';
import { AppActions, ActionType } from '../redux/actions';

export interface LinkStateProps {
  displayLabel: string;
}

export interface LinkDispatchProps {
  configureApp: () => void;
  initializeApp: () => void;
  loadAppData: () => void;
}

export type AppProps = LinkStateProps & LinkDispatchProps;

//map state to Props
const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    ...state,
    displayLabel: 'This is a temporary label'
  }
}

//map dispatch to Props
const mapDispatchToProps = (dispatch: Dispatch<AppActions>): LinkDispatchProps => {
  return {
    configureApp: (): void => { dispatch({type: ActionType.APP_CONFIGURE}) },
    initializeApp: (): void => { dispatch({type: ActionType.APP_INITIALIZE}) },
    loadAppData: (): void => {dispatch({type: ActionType.APP_LOAD_DATA}) }
  }
}


class App extends React.PureComponent<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.props.configureApp();
    this.props.initializeApp();
    this.props.loadAppData();
  }

  render(): ReactNode {
    return ( <>
      <h2>This is where react app will run</h2>
      <h4>{this.props.displayLabel}</h4>
    </> );
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('app'))