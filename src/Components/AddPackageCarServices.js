import React from "react";
import "../CSS/AddPackage.css";
import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import { addPackageCarServices } from "../Redux/Actions/carServicesAction";
import PropTypes from "prop-types";

class AddPackageCarServices extends React.Component {
  state = {
    modal: false,
    vehicleRegNo: "",
    vehicleName: "",
    vehicleType: "",
    driverContact: "",
    driverName: "",
    msg: "",
  };
  static propTypes = { isAuthenticated: PropTypes.bool };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
      vehicleRegNo: this.state.vehicleRegNo,
      driverName: this.state.driverName,
      driverContact: this.state.driverContact,
      vehicleType: this.state.vehicleType,
      vehicleName: this.state.vehicleName,
    };

    console.log(obj);
    this.props.addPackageCarServices(obj);

    if (this.props.isAuthenticated === true) {
      this.props.history.push("/carvendordashboard");
    }
  };

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
          <h3 className="special-styling-heading-tag">Add Package Form</h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div class="row-add-package">
                <div class="column-add-package">
                  <label>
                    <b>Vehicle Registration Number</b>
                  </label>

                  <Input
                    type="text"
                    name="vehicleRegNo"
                    id="vehicleRegNo"
                    className="mb-3"
                    placeholder="Vehicle Registration Number"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Driver Name</b>
                  </label>

                  <Input
                    type="text"
                    name="driverName"
                    id="driverName"
                    className="mb-3"
                    placeholder="Driver Name"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Driver Contact Number</b>
                  </label>
                  <Input
                    type="text"
                    name="driverContact"
                    id="driverContact"
                    className="mb-3"
                    placeholder="Driver Contact Number"
                    onChange={this.onChange}
                    required
                  />
                </div>

                <div class="column-add-package">
                  <label>
                    <b>Vehicle Type</b>
                  </label>

                  <Input
                    type="text"
                    name="vehicleType"
                    id="vehicleType"
                    className="mb-3"
                    placeholder="Vehicle Type"
                    onChange={this.onChange}
                    required
                  />
                </div>

                <div class="column-add-package">
                  <label>
                    <b>Vehicle Name</b>
                  </label>

                  <Input
                    type="text"
                    name="vehicleName"
                    id="vehicleName"
                    className="mb-3"
                    placeholder="Vehicle Name"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Button color="info">Add Package</Button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loadData: state.loadData,
  isAuthenticated: state.carReducer.isAuthenticated,
});
export default connect(mapStateToProps, { addPackageCarServices })(
  AddPackageCarServices
);
