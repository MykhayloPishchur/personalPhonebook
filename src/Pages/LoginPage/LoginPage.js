// import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../Redux/auth";
import { compose } from "redux";
import withAuthRedirect from "../../Common/hoc/withAuthRedirect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginpage.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="loginConntainer">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="Enter email"
                autoComplete="off"
              ></input>
              <label>Email address</label>
            </div>
            <div className="user-box">
              <input
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
              ></input>
              <label>Password</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(LoginPage);
