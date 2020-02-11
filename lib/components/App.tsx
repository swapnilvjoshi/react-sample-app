import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store } from '../redux/store/store';
import { AppState } from '../redux/state/states';
import { Dispatch } from 'redux';
import { AppActions, AppActionType } from '../redux/actions';

export interface LinkStateProps {
  name: string;
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
    name: 'Link State to Props'
  }
}

//map dispatch to Props
const mapDispatchToProps = (dispatch: Dispatch<AppActions>): LinkDispatchProps => {
  return {
    configureApp: (): void => { dispatch({type: AppActionType.APP_CONFIGURE}) },
    initializeApp: (): void => { dispatch({type: AppActionType.APP_INITIALIZE}) },
    loadAppData: (): void => {dispatch({type: AppActionType.APP_LOAD_DATA}) }
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
    return ( <h2>This is where react app will run</h2> );
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('app'))