import React from "react";
import "../CSS/CustomerLogin1.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
 
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbars from "./Navbars";
import Footer from "../Components/Footer";
import { clearErrors } from "../Redux/Actions/errorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../Redux/Actions/authAction";
class CustomerLogin extends React.Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: "Invalid Email or Password",
        });
      } else {
        this.setState({ msg: null });
      }
    }

    if (this.props.isAuthenticated === true) {
      this.props.history.push("/customerdashboard");
    }

  
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    //attempt to login
    this.props.login(user);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/customerdashboard");
    }
  };

  render() {
    return (
      <div className="main">
        <Navbars />

        <div id="login-box">
          <div className="left-box">
    <h1 className="h1">Customer Login</h1>

            {this.state.msg ? <p style={{}}>{this.state.msg}</p> : null}

            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="mb-3"
                  placeholder="Email"
                  onChange={this.onChange}
                />

                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-3"
                  placeholder="Password"
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>

            {/* <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <button className="login-button-login-form">
              <Link to="/dashboard">Login</Link>
            </button> */}

            <Link to="/customersignup">
              <ul className="signup-button">Create Account</ul>
            </Link>
          </div>
          <div className="right-box">
            <span class="signinwith">
              Sign In with
              <br />
              Other Accounts{" "}
            </span>
            <button className="social facebook">Log in with Facebook</button>
            <button className="social google">Log in with Google</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(CustomerLogin);
