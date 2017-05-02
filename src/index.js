import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './containers/App';
import Login from './containers/Login';
import configureStore from './store';
import './index.css';
import 'sanitize.css';
import 'flexboxgrid/css/flexboxgrid.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  userAgent: 'all',
  palette: {
    primary1Color: '#3f51b5'
  }
});

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

// This is for example. To be deleted soon.
class Test extends React.Component {
  render() {
    return (
      <div><h1>Put the Container here</h1></div>
    );
  }
}

const component = (
  <Router history={history}>
    <Route path="/" component={Login} />
    <Route path="main" component={App}>
      <Route path="test" component={Test} />
    </Route>
  </Router>
);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      {component}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
