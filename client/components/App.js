import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispacth) {
  return bindActionCreators(actionCreators, dispacth);
}

// Two functions that will take the state (posts and comments) and our dispact (action creators) and surface the data and functions via props in our component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
