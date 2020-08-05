import React from "react";
import "../CSS/CustomerSignup1.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
 
} from "reactstrap";
import Navbars from "./Navbars";
import { clearErrors } from "../Redux/Actions/errorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../Redux/Actions/authAction";

class CustomerSignUp extends React.Component {
  state = {
    modal: false,
    first_name: "",
    email: "",
    password: "",
    contact_number: "",
    cnic: "",
    city: "",
    dob: "",
    gender: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    loggedIN: PropTypes.bool,
  };

  componentDidUpdate(prevProps) {
    const { error} = this.props;
    if (error != prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({
          msg: error.msg._message,
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

    const {
      first_name,
      email,
      password,
      contact_number,
      cnic,
      city,
      dob,
      gender,
    } = this.state;

    //Create user object

    const newUser = {
      avatar:
        "https://cdn.imgbin.com/16/2/6/imgbin-avatar-roblox-celebrity-character-vertebrate-avatar-Wjx6YVSqXkgbE18qYdbUwiKWG.jpg",
      customerName: first_name,
      email,
      contactNumber: contact_number,
      password,
      cnic: cnic,
      gender,
      dob,
      city,
    };

    //Attemp to register

    this.props.register(newUser);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/customerdashboard");
    }
  };

  render() {
    console.log("asdasd");
    return (
      <div className="main">
        <Navbars />

        <div className="login-box-signup">
          <div className="left-box-signup">
            <h1 className="h1" style={{ marginTop: -40 }}>
            Customer Sign Up{" "}
            </h1>

            {this.state.msg ? <p style={{}}>{this.state.msg}</p> : null}
            <Form onSubmit={this.onSubmit} style={{ marginTop: -5 }}>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="mb-3"
                  placeholder="Customer Name"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="mb-3 "
                  placeholder="Email"
                  onChange={this.onChange}
                />

                <Input
                  type="password"
                  name="password"
                  id="password"
                  className={this.state.password.length ? "mb-3" : "error"}
                
                  placeholder="Password"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="contact_number"
                  id="contact_number"
                  className="mb-3"
                  placeholder="Contact Number"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="cnic"
                  id="cnic"
                  className="mb-3"
                  placeholder="CNIC"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="city"
                  id="city"
                  className="mb-3"
                  placeholder="City"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="dob"
                  id="dob"
                  className="mb-3"
                  placeholder="Date of birth"
                  onChange={this.onChange}
                />

                <Label
                  for="exampleSelect"
                  style={{ marginLeft: 2, color: "gray" }}
                >
                  Select Gender
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  style={{ width: "50%" }}
                  onChange={this.onChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Input>

                <Button
                  color="dark"
                  style={{ marginTop: 10, width: " 25%" }}
                  block
                >
                  Register
                </Button>
              </FormGroup>
            </Form>

        
          </div>

          <div className="right-box-signup">
            <span class="signupwith">
              Sign In with
              <br />
              Other Accounts{" "}
            </span>
            <button className="social-facebook">Log in with Facebook</button>
            <button className="social-google">Log in with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  loggedIN: state.auth.loggedIN,
});

export default connect(mapStateToProps, { register, clearErrors })(
  CustomerSignUp
);
