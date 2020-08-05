import React from "react";
import "../CSS/AddPackage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";

import {
  fetchPackage,
  DeletePackageVendor,
} from "../Redux/Actions/fetchPackage";
import {
  UpdateCarPackageForm,
  MainPackage,
} from "../Redux/Actions/UpdatePackageActions";

class UpdateMainPackage extends React.Component {
  state = {
    modal: false,
    package_name: "",
    description: "",
    price: "",
    rating: "",
    location: "",
    packageimages: "",
    msg: "",
    data: [],
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    console.log(this.props.match.params.type, "sadasd");
    if (this.props.match.params.type == "tour") {
      const data1 = this.props.Package.PackagesTour.filter((item) => {
        return item._id === this.props.match.params.id;
      });

      this.setState({ data: data1 });
    }

    if (this.props.match.params.type == "hotel") {
      const data1 = this.props.Package.PackagesHotel.filter((item) => {
        return item._id === this.props.match.params.id;
      });

      this.setState({ data: data1 });
    }

    if (this.props.match.params.type == "car") {
      const data1 = this.props.Package.Packages.filter((item) => {
        return item._id === this.props.match.params.id;
      });

      this.setState({ data: data1 });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      package_name,
      description,
      price,
      rating,
      location,
      images,
    } = this.state;
    console.log(this.state.data[0].packageName, "213123");

    const formData = {
      packageName:
        this.state.package_name === ""
          ? this.state.data[0].packageName
          : this.state.package_name,
      description:
        this.state.description === ""
          ? this.state.data[0].description
          : this.state.description,
      price:
        this.state.price === "" ? this.state.data[0].price : this.state.price,
      location:
        this.state.location === ""
          ? this.state.data[0].location
          : this.state.location,
    };

    // const form = new FormData();

    // form.append(
    //   "packageName",
    //   this.state.package_name === ""
    //     ? this.state.data[0].packageName
    //     : this.state.package_name
    // );
    // form.append(
    //   "description",
    //   this.state.description === ""
    //     ? this.state.data[0].description
    //     : this.state.description
    // );
    // form.append(
    //   "price",
    //   this.state.price === "" ? this.state.data[0].price : this.state.price
    // );

    // form.append(
    //   "location",
    //   this.state.location === ""
    //     ? this.state.data[0].location
    //     : this.state.location
    // );

    // form.append("packageimages", this.state.packageimages);

    // console.log(Array.from(form));

    this.props.MainPackage(formData, this.props.match.params.id);
    if (this.props.update.loadData.type === "rental") {
      console.log("asdasd");
      this.props.history.push(
        `/updatecarpackage/${this.props.match.params.id}`
      );
    }

    if (this.props.update.loadData.type === "hotel") {
      this.props.history.push(
        `/updatehotelpackage/${this.props.match.params.id}`
      );
    }

    if (this.props.update.loadData.type === "trip") {
      this.props.history.push(
        `/updatetourpackage/${this.props.match.params.id}`
      );
    }
  };
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    // const files = Array.from(event.target.files);
    this.setState({ packageimages: event.target.files[0] });
  };

  // <Link to={`/updatepackage/${item._id}`}>
  componentDidUpdate() {
    console.log(this.props.update.loadData.type, "12312");

    if (this.props.update.loadData.type === "rental") {
      console.log("asdasd");
      this.props.history.push(
        `/updatecarpackage/${this.props.match.params.id}`
      );
    }

    if (this.props.update.loadData.type === "hotel") {
      this.props.history.push(
        `/updatehotelpackage/${this.props.match.params.id}`
      );
    }

    if (this.props.update.loadData.type === "trip") {
      this.props.history.push(
        `/updatetourpackage/${this.props.match.params.id}`
      );
    }
  }

  render() {
    console.log(this.state.data, "213123123");
    return (
      <div>
        <div>
          <NavbarVendor />
        </div>
        <div className="add-package-heading">
          <h3 className="special-styling-heading-tag">Update Package Form</h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              {this.state.data.map((item) => (
                <>
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
                        placeholder={item.packageName}
                        onChange={this.onChange}
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
                        placeholder={item.description}
                        onChange={this.onChange}
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
                        placeholder={item.price}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      {/* <label>
                        <b>Rating</b>
                      </label> */}

                      {/* <Input
                        type="text"
                        name="rating"
                        id="rating"
                        className="mb-3"
                        placeholder="Rating"
                        onChange={this.onChange}
                      /> */}
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Location</b>
                      </label>

                      <Input
                        type="text"
                        name="location"
                        id="location"
                        className="mb-3"
                        placeholder={item.location}
                        onChange={this.onChange}
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
                    <Button onSubmit={this.onSubmit} color="info">
                      Update Package
                    </Button>
                  </div>
                </>
              ))}
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.Update.isAuthenticated,
  Package: state.fetchPackageForPrint,
  update: state.Update,
});

export default connect(mapStateToProps, {
  MainPackage,
  fetchPackage,
  UpdateCarPackageForm,
})(UpdateMainPackage);
