import { connect } from "react-redux";

import { getReposByUsernameInjector } from "../actions/repos";
import Main from "../components/Main";

const mapStateToProps = state => ({
  reposState: state.repos
});

const mapDispatchToProps = dispatch => ({
  getReposByUsername: getReposByUsernameInjector(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
