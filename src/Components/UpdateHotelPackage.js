import React from "react";
import "../CSS/AddPackage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  UdpateHotelPackageForm,
  fetchHotel,
} from "../Redux/Actions/UpdatePackageActions";

import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";

class UpdateMainPackage extends React.Component {
  state = {
    Modal: false,
    managerName: "",
    managerContact: "",
    roomType: "",
    roomQuality: "",
    msg: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    // form.append("managerName",this.state.managerName);
    // form.append("managerContact",this.state.managerContact);
    // form.append("roomQaulity",this.state.roomQaulity);
    // form.append("roomType",this.state.roomType);

    // console.log(Array.from(form));
    console.log(this.state.roomType);
    let obj = {
      managerName:
        this.state.managerName === ""
          ? this.props.update.managerName
          : this.state.managerName,
      managerContact:
        this.state.managerContact === ""
          ? this.props.update.managerContact
          : this.state.managerContact,

      roomQuality:
        this.state.roomQuality === ""
          ? this.props.update.roomQuality
          : this.state.roomQuality,
      roomType:
        this.state.roomType === ""
          ? this.props.update.roomType
          : this.state.roomType,
    };
    this.props.UdpateHotelPackageForm(obj, this.props.match.params.id);

    if (this.props.isAuthenticated === true) {
      this.props.history.push("/hotelvendordashboard");
    }
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/hotelvendordashboard");
    }
  }

  componentDidMount() {
    this.props.fetchHotel(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>
          <NavbarVendor />
        </div>
        <div className="add-package-heading">
          <h3 className="special-styling-heading-tag">
            Update Hotel Package Form
          </h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              {this.props.update.hotel.map((item) => (
                <>
                  <div className="row-add-package">
                    <div className="column-add-package">
                      <label>
                        <b>Manager Name</b>
                      </label>

                      <Input
                        type="text"
                        name="managerName"
                        id="managerName"
                        className="mb-3"
                        placeholder={item.managerName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Manager Contact</b>
                      </label>

                      <Input
                        type="text"
                        name="managerContact"
                        id="managerContact"
                        className="mb-3"
                        placeholder={item.managerContact}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Room Quality</b>
                      </label>

                      <Input
                        type="text"
                        name="roomQuality"
                        id="roomQuality"
                        className="mb-3"
                        placeholder={item.roomQuality}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Room Type</b>
                      </label>

                      <Input
                        type="text"
                        name="roomType"
                        id="roomType"
                        className="mb-3"
                        placeholder={item.roomType}
                        onChange={this.onChange}
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
  loadData: state.loadData,
  isAuthenticated: state.Update.isAuthenticatedHotel,
  update: state.Update,
});
export default connect(mapStateToProps, { UdpateHotelPackageForm, fetchHotel })(
  UpdateMainPackage
);
