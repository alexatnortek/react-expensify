import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
// import { dispatch } from "rxjs/internal/observable/range";

export const LoginPage = ({ startLogin }) => (
  <div>
    <p>This is my login page</p>
    <button onClick={startLogin}>Login</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
