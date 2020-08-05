import React from "react";
import "../CSS/UpdateVendorProfile.css";
import NavbarVendor from "../Components/NavbarVendor";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { UpdateProfileVendor } from "../Redux/Actions/UpdateVendorProfileAction";

class UpdateVendorProfile extends React.Component {
  state = {
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
    // avatar: "",
    msg: null,
    data: "",
    avatar: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    UpdateProfileVendor: PropTypes.func.isRequired,
  };

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
      avatar,
    } = this.state;

    //Create user object
    const form = new FormData();

    if (this.state.vendorName) form.append("vendorName", this.state.vendorName);
    if (this.state.email) form.append("email", this.state.email);
    if (this.state.contactNumber)
      form.append("contactNumber", this.state.contactNumber);
    if (this.state.password) form.append("password", this.state.password);
    if (this.state.username) form.append("username", this.state.username);
    if (this.state.city) form.append("city", this.state.city);
    if (this.state.gender) form.append("gender", this.state.gender);
    if (this.state.dob) form.append("dob", this.state.dob);
    if (this.state.cnic) form.append("cnic", this.state.cnic);
    if (this.state.officeAddress)
      form.append("officeAddress", this.state.officeAddress);
    if (this.state.description)
      form.append("description", this.state.description);
    if (this.state.businessType)
      form.append("businessType", this.state.businessType);
    // if(this.state.feedback) form.append("feedback",this.state.feedback);
    if (this.state.fbLink) form.append("fbLink", this.state.fbLink);
    if (this.state.instaLink) form.append("instaLink", this.state.instaLink);
    if (this.state.websiteLink)
      form.append("websiteLink", this.state.websiteLink);
    if (this.state.avatar) form.append("avatar", this.state.avatar);

    const obj = {
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
      avatar,
    };

    // console.log(Array.from(obj));

    //Attemp to register

    this.props.UpdateProfileVendor(form);

    if (this.props.info.isAuthenticated === true) {
      alert("Changing route");
      this.props.history.push("/vendordashboard");
    }
  };

  componentDidUpdate() {
    console.log(this.props);
    console.log(this.state);
    if (this.props.info.isAuthenticated === true) {
      // this.props.history.push("/hotelvendordashboard");

      if (this.props.info.data.businessType === "rental services") {
        this.props.history.push("/carvendordashboard");
      }
      if (this.props.info.data.businessType === "hotel provider") {
        this.props.history.push("/hotelvendordashboard");
      }
      if (this.props.info.data.businessType === "trip planner") {
        this.props.history.push("/tourvendordashbaord");
      }
    }
  }

  componentDidMount() {
    this.setState({ data: JSON.parse(localStorage.getItem("vendorInfo")) });
  }

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    // const files = Array.from(event.target.files);
    this.setState({ avatar: event.target.files[0] });
  };
  render() {
    console.log(this.state.data, "2131132");
    return (
      <div className="main-vendorProfile">
        <NavbarVendor />

        <div className="login-box-signup">
          <div className="left-box-signup">
            <h1 className="h1">Update Profile </h1>

            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="vendorName"
                  id="vendorName"
                  className="mb-3 "
                  placeholder={this.state.data["vendorName"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="mb-3 "
                  placeholder={this.state.data["email"]}
                  onChange={this.onChange}
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-3 "
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  className="mb-3 "
                  placeholder={this.state.data["contactNumber"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="username"
                  id="username"
                  className="mb-3 "
                  placeholder={this.state.data["username"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="city"
                  id="city"
                  className="mb-3 "
                  placeholder={this.state.data["city"]}
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="dob"
                  id="dob"
                  className="mb-3 "
                  placeholder={this.state.data["dob"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="cnic"
                  id="cnic"
                  className="mb-3 "
                  placeholder={this.state.data["cnic"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="officeAddress"
                  id="officeAddress"
                  className="mb-3 "
                  placeholder={this.state.data["officeAddress"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="description"
                  id="description"
                  className="mb-3 "
                  placeholder={this.state.data["description"]}
                  onChange={this.onChange}
                />
                {/* <Input
                  type="text"
                  name="businessType"
                  id="businessType"
                  className="mb-3 "
                  placeholder="Business Type"
                  onChange={this.onChange}
                /> */}
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
                  placeholder={this.state.data["fbLink"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="instaLink"
                  id="instaLink"
                  className="mb-3 "
                  placeholder={this.state.data["instaLink"]}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="websiteLink"
                  id="websiteLink"
                  className="mb-3 "
                  placeholder={this.state.data["websiteLink"]}
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
                  placeholder={this.state.data["gender"]}
                  style={{ width: "50%" }}
                  onChange={this.onChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Input>
                <Label
                  for="exampleSelect"
                  style={{ marginLeft: 2, color: "gray" }}
                ></Label>
                <Input
                  type="select"
                  name="businessType"
                  id="businessType"
                  placeholder={this.state.data["businessType"]}
                  style={{ width: "50%" }}
                  onChange={this.onChange}
                >
                  <option>
                    {this.state.data["businessType"] === ""
                      ? "Select Business Type"
                      : this.state.data["businessType"]}
                  </option>
                  <option>trip planner</option>
                  <option>rental services</option>
                  <option>hotel provider</option>
                </Input>
                <Input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="mb-3"
                  placeholder="Images"
                  onChange={this.onChangeHandler}
                />

                <Button
                  color="dark"
                  style={{ marginTop: 10, width: " 25%" }}
                  block
                >
                  Update
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
            <button className="social-google">Log in with Google</button>
           */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.updateVendor,
});

export default connect(mapStateToProps, { UpdateProfileVendor })(
  UpdateVendorProfile
);
