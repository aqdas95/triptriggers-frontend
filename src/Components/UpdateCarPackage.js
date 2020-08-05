import React from "react";
import "../CSS/AddPackage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  UpdateCarPackageForm,
  fetchCar,
} from "../Redux/Actions/UpdatePackageActions";
import NavbarVendor from "../Components/NavbarVendor";
import { Redirect } from "react-router-dom";
import { Input, Button, Form, FormGroup } from "reactstrap";

class UpdateMainPackage extends React.Component {
  state = {
    modal: false,
    vehicleRegNo: "",
    vehicleName: "",
    vehicleType: "",
    driverContact: "",
    driverName: "",
    msg: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      vehicleRegNo,
      vehicleName,
      vehicleType,
      driverContact,
      driverName,
    } = this.state;

    // const form = new FormData();
    // form.append("vehicleRegNo",this.state.vehicleRegNo)
    // form.append("driverName",this.state.driverName)
    // form.append("driverContact",this.state.driverContact)
    // form.append("vehicleType",this.state.vehicleType)
    // form.append("vehicleName",this.state.vehicleName)
    // console.log(Array.from(form));

    let obj = {
      vehicleRegNo:
        this.state.vehicleRegNo === ""
          ? this.props.update.vehicleRegNo
          : this.state.vehicleRegNo,
      driverName:
        this.state.driverName === ""
          ? this.props.update.driverName
          : this.state.driverName,
      driverContact:
        this.state.driverContact === ""
          ? this.props.update.driverContact
          : this.state.driverContact,
      vehicleType:
        this.state.vehicleType === ""
          ? this.props.update.vehicleType
          : this.state.vehicleType,
      vehicleName:
        this.state.vehicleName === ""
          ? this.props.vehicleName
          : this.state.vehicleName,
    };

    // const form = new FormData();
    // form.append("vehicleRegNo", this.state.vehicleRegNo);
    // form.append("vehicleName", this.state.vehicleName);
    // form.append("vehicleType", this.state.vehicleType);
    // form.append("driverContact", this.state.driverContact);
    // form.append("driverName", this.state.driverName);
    console.log(this.props.match.params.id, "ajdsnkjasnkdjasd");
    this.props.UpdateCarPackageForm(obj, this.props.match.params.id);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/carvendordashboard");
    }
  };

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/carvendordashboard");
    }
  }

  render() {
    return (
      <div>
        <div>
          <NavbarVendor />
        </div>
        <div className="add-package-heading">
          <h3 className="special-styling-heading-tag">
            Update Car Package Form
          </h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              {this.props.update.car.map((item) => (
                <>
                  <div className="row-add-package">
                    <div className="column-add-package">
                      <label>
                        <b>Vehicle Reg No</b>
                      </label>

                      <Input
                        type="text"
                        name="vehicleRegNo"
                        id="vehicleRegNo"
                        className="mb-3"
                        placeholder={item.vehicleRegNo}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Vehicle Name</b>
                      </label>

                      <Input
                        type="text"
                        name="vehicleName"
                        id="vehicleName"
                        className="mb-3"
                        placeholder={item.vehicleName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Vehicle Type</b>
                      </label>

                      <Input
                        type="text"
                        name="vehicleType"
                        id="vehicleType"
                        className="mb-3"
                        placeholder={item.vehicleType}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Driver Contact</b>
                      </label>

                      <Input
                        type="text"
                        name="driverContact"
                        id="driverContact"
                        className="mb-3"
                        placeholder={item.driverContact}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Driver Name</b>
                      </label>

                      <Input
                        type="text"
                        name="driverName"
                        id="driverName"
                        className="mb-3"
                        placeholder={item.driverName}
                        onChange={this.onChange}
                      />
                    </div>
                    {/* <div className="column-add-package">
                  <label>
                    <b>Images</b>
                  </label>

                  <Input
                    type="text"
                    name="images"
                    id="images"
                    className="mb-3"
                    placeholder="Images"
                    onChange={this.onChange}
                  />
                </div> */}
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
  isAuthenticated: state.Update.isAuthenticatedCar,
  update: state.Update,
});
export default connect(mapStateToProps, { UpdateCarPackageForm, fetchCar })(
  UpdateMainPackage
);
