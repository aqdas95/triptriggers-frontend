import React from "react";
import "../CSS/VendorLogin1.css";
import { Link } from "react-router-dom";
import Navbars from "./Navbars";
import PropTypes from "prop-types";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { clearErrors } from "../Redux/Actions/errVendorAction";
import { login } from "../Redux/Actions/authVendorAction";
import { connect } from "react-redux";
class VendorLogin extends React.Component {
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
      console.log(this.props.authReducerVendor.type, "12312");

      if (this.props.authReducerVendor.type === "rental services") {
        console.log("asdasd");
        this.props.history.push("/carvendordashboard");
      }

      if (this.props.authReducerVendor.type === "hotel provider") {
        this.props.history.push("/hotelvendordashboard");
      }

      if (this.props.authReducerVendor.type === "trip planner") {
        this.props.history.push("/tourvendordashboard");
      }
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
    console.log("After login");
    console.log(this.props.isAuthenticated);
    if (this.props.isAuthenticated === true) {
      console.log(this.props.authReducerVendor.type, "12312");

      if (this.props.authReducerVendor.type === "rental services") {
        console.log("asdasd");
        this.props.history.push("/carvendordashboard");
      }

      if (this.props.authReducerVendor.type === "hotel provider") {
        this.props.history.push("/hotelvendordashboard");
      }

      if (this.props.authReducerVendor.type === "trip planner") {
        this.props.history.push("/tourvendordashboard");
      }
    }
  };

  render() {
    return (
      <div className="main">
        <Navbars />

        <div className="login-box-login">
          <div className="left-box-login">
            <h1 className="h1-vendorLogin">Vendor Login</h1>
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
                  required
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-3"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />

                <br />

                <Button color="dark" style={{ marginTop: "0" }} block>
                  Login
                </Button>

                <Link to="/vendorsignup">
                  <Button
                    className="login-button"
                    style={{ textDecoration: "none", marginTop: "10px" }}
                    color="link"
                  >
                    Create Account
                  </Button>
                </Link>
              </FormGroup>
            </Form>
          </div>
          <div className="right-box-login">
            {/* <h4 style={{color:"white"}}>SignIn With Other Accounts</h4>
            <button className="social-facebook">Log in with Facebook</button>
            <button className="social-google">Log in with Google</button> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducerVendor.isAuthenticated,
  error: state.error,
  authReducerVendor: state.authReducerVendor,
});
export default connect(mapStateToProps, { login, clearErrors })(VendorLogin);
