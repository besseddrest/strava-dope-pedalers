import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  return {
    activities: state.activities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will take state and action functions via props in our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
