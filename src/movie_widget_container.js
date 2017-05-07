import App from './movie_widget_container';
import { connect } from 'react-redux';
import * as actions from './movie_widget.actions';


const AppContainer = connect(
  state => state,

  actions
)(App);

export default AppContainer;
