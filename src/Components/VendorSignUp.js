import React from "react";
import "../CSS/VendorSignUp1.css";
import Navbars from "../Components/Navbars";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { clearErrors } from "../Redux/Actions/errorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../Redux/Actions/authVendorAction";

class VendorSignUp extends React.Component {
  state = {
    modal: false,
    vendorName: "",
    email: "",
    contactNumber: "",
    password: "",
    username: "",
    city: "",
    gender: "",
    dob: "",
    cnic: "",
    officeAddress: "",
    description: "",
    businessType: "",
    // feedback: "",
    fbLink: "",
    instaLink: "",
    websiteLink: "",
    avatar: "",
    msg: null,
    imagelink: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    loggedIN: PropTypes.bool,
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
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

    const {
      vendorName,
      email,
      contactNumber,
      password,
      username,
      city,
      gender,
      dob,
      cnic,
      officeAddress,
      description,
      businessType,
      // feedback,
      fbLink,
      instaLink,
      websiteLink,
      imagelink,
    } = this.state;

    //Create user object

    const newUser = {
      vendorName,
      email,
      contactNumber,
      password,
      username,
      city: city,
      gender,
      dob,
      cnic,
      officeAddress,
      description,
      businessType,
      // feedback,
      fbLink,
      instaLink,
      websiteLink,
      imagelink,
    };

    const form = new FormData();

    form.append("vendorName", this.state.vendorName);
    form.append("email", this.state.email);
    form.append("contactNumber", this.state.contactNumber);
    form.append("password", this.state.password);
    form.append("username", this.state.username);
    form.append("city", this.state.city);
    form.append("gender", this.state.select);
    form.append("dob", this.state.dob);
    form.append("cnic", this.state.cnic);
    form.append("officeAddress", this.state.officeAddress);
    form.append("description", this.state.description);
    form.append("businessType", this.state.businessType);
    // form.append("feedback",this.state.feedback);
    form.append("fbLink", this.state.fbLink);
    form.append("instaLink", this.state.instaLink);
    form.append("websiteLink", this.state.websiteLink);
    form.append("imagelink", this.state.imagelink);

    //Attemp to register

    this.props.register(form);
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
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    // const files = Array.from(event.target.files);
    this.setState({ imagelink: event.target.files[0] });
  };
  render() {
    return (
      <div className="main-vendorSignUp">
        <Navbars />

        <div className="login-box-signup">
          <div className="left-box-signup">
            <h1 className="h1">Vendor Sign Up </h1>

            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="vendorName"
                  id="vendorName"
                  className="mb-3 "
                  placeholder="Vendor Name"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="mb-3 "
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-3 "
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  className="mb-3 "
                  placeholder="Contact Number"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="username"
                  id="username"
                  className="mb-3 "
                  placeholder="UserName"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="city"
                  id="city"
                  className="mb-3 "
                  placeholder="City"
                  onChange={this.onChange}
                  required
                />

                <Input
                  type="text"
                  name="dob"
                  id="dob"
                  className="mb-3 "
                  placeholder="Date Of Birth"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="cnic"
                  id="cnic"
                  className="mb-3 "
                  placeholder="CNIC"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="officeAddress"
                  id="officeAddress"
                  className="mb-3 "
                  placeholder="Office Address"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="description"
                  id="description"
                  className="mb-3 "
                  placeholder="Description"
                  onChange={this.onChange}
                  required
                />

                {/* <Input
                  type="text"
                  name="feedback"
                  id="feedback"
                  className="mb-3 "
                  placeholder="Feedback"
                  onChange={this.onChange}
                /> */}
                <Input
                  type="text"
                  name="fbLink"
                  id="fbLink"
                  className="mb-3 "
                  placeholder="fbLink"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="instaLink"
                  id="instaLink"
                  className="mb-3 "
                  placeholder="instaLink"
                  onChange={this.onChange}
                  required
                />
                <Input
                  type="text"
                  name="websiteLink"
                  id="websiteLink"
                  className="mb-3 "
                  placeholder="websiteLink"
                  onChange={this.onChange}
                  required
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
                  <option>Select Gender</option>
                  <option>male</option>
                  <option>female</option>
                </Input>
                <Label
                  for="exampleSelect"
                  style={{ marginLeft: 2, color: "gray" }}
                ></Label>
                <Input
                  type="select"
                  name="businessType"
                  id="businessType"
                  style={{ width: "50%" }}
                  onChange={this.onChange}
                >
                  <option>Select Business Type</option>
                  <option>trip planner</option>
                  <option>rental services</option>
                  <option>hotel provider</option>
                </Input>
                <Input
                  style={{ marginTop: "20px" }}
                  type="file"
                  name="imagelink"
                  id="imagelink"
                  className="mb-3"
                  placeholder="Images"
                  onChange={this.onChangeHandler}
                />
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
            {/* <span class="signupwith">
              Sign In with
              <br />
              Other Accounts{" "}
            </span>
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
  loggedIN: state.auth.loggedIN,
  authReducerVendor: state.authReducerVendor,
});

export default connect(mapStateToProps, { register, clearErrors })(
  VendorSignUp
);
