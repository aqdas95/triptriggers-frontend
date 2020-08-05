import React from "react";
import "../CSS/AddPackage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPackage } from "../Redux/Actions/vendorPackageAction";
import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";
import { Redirect } from "react-router-dom";

class AddPackage extends React.Component {
  state = {
    modal: false,
    package_name: "",
    description: "",
    price: "",
    // rating: "",
    location: "",
    packageimages: "",
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      package_name,
      description,
      price,
      // rating,
      location,
      images,
    } = this.state;
    console.log(images, "213123");
    const form = new FormData();

    form.append("packageName", this.state.package_name);
    form.append("description", this.state.description);
    form.append("price", this.state.price);

    form.append("location", this.state.location);

    form.append("packageimages", this.state.packageimages);

    console.log(Array.from(form));
    this.props.addPackage(form);

    if (this.props.VendorPackage.isAuthenticated === true) {
      console.log(this.props.VendorPackage.type, "asdkaskjd871230");
      if (this.props.VendorPackage.type === "trip") {
        this.props.history.push("/addpackagetourservices");
      }
      if (this.props.VendorPackage.type === "rental") {
        this.props.history.push("/addpackagecarservices");
      }

      if (this.props.VendorPackage.type === "hotel") {
        this.props.history.push("/addpackagehotelservices");
      }
    }
  };

  componentDidUpdate() {
    console.log(this.props.VendorPackage.type, "asdkaskjd871230");
    if (this.props.VendorPackage.type === "trip") {
      this.props.history.push("/addpackagetourservices");
    }
    if (this.props.VendorPackage.type === "rental") {
      this.props.history.push("/addpackagecarservices");
    }

    if (this.props.VendorPackage.type === "hotel") {
      this.props.history.push("/addpackagehotelservices");
    }
  }

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    // const files = Array.from(event.target.files);
    this.setState({ packageimages: event.target.files[0] });
  };

  render() {
    return (
      <div>
        <div>
          <NavbarVendor />
        </div>
        <div className="add-package-heading">
          <h3 className="special-styling-heading-tag">Add Package Form</h3>
        </div>
        <div className="main-div-add-package">
          {this.state.msg ? <p style={{}}>{this.state.msg}</p> : null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div className="row-add-package">
                <div className="column-add-package">
                  <label>
                    <b>Pakcage Name</b>
                  </label>

                  <Input
                    type="text"
                    name="package_name"
                    id="package_name"
                    className="mb-3"
                    placeholder="Pakcage Name"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="column-add-package">
                  <label>
                    <b>Description</b>
                  </label>

                  <Input
                    type="text"
                    name="description"
                    id="description"
                    className="mb-3"
                    placeholder="Description"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="column-add-package">
                  <label>
                    <b>Price</b>
                  </label>

                  <Input
                    type="text"
                    name="price"
                    id="price"
                    className="mb-3"
                    placeholder="Price"
                    onChange={this.onChange}
                    required
                  />
                </div>
                {/* <div className="column-add-package">
                  <label>
                    <b>Rating</b>
                  </label>

                  <Input
                    type="text"
                    name="rating"
                    id="rating"
                    className="mb-3"
                    placeholder="Rating"
                    onChange={this.onChange}
                  />
                </div> */}
                <div className="column-add-package">
                  <label>
                    <b>Location</b>
                  </label>

                  <Input
                    type="text"
                    name="location"
                    id="location"
                    className="mb-3"
                    placeholder="Location"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="column-add-package">
                  <label>
                    <b>Images</b>
                  </label>

                  <Input
                    type="file"
                    name="packageimages"
                    id="packageimages"
                    className="mb-3"
                    placeholder="Images"
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>

              <div>
                <Button onSubmit={this.onSubmit} color="info" style={{width:"100px"}}>
                Next
                </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.items,
  // isAuthenticated: state.auth.isAuthenticated,
  VendorPackage: state.vendorPackageReducer,
});
export default connect(mapStateToProps, { addPackage })(AddPackage);
