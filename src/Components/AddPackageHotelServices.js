import React from "react";
import "../CSS/AddPackage.css";
import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";
import { AddHotelPackage } from "../Redux/Actions/HotelPackageAction";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class AddPackageHotelServices extends React.Component {
  state = {
    Modal: false,
    managerName: "",
    managerContact: "",
    roomType: "",
    roomQaulity: "",
    msg: "",
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

    const { managerName, managerContact, roomType, roomQaulity } = this.state;

    //   const form = new FormData();
    // form.append("managerName",this.state.managerName)
    // form.append("managerContact",this.state.managerContact)
    // form.append("roomQaulity",this.state.roomQaulity)
    // form.append("roomType",this.state.roomType)

    let obj = {
      managerName: this.state.managerName,
      managerContact: this.state.managerContact,
      roomQuality: this.state.roomQaulity,
      roomType: this.state.roomType,
    };

    console.log(obj);
    this.props.AddHotelPackage(obj);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/hotelvendordashboard");
    }
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/hotelvendordashboard");
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
                    <b>Manager Name</b>
                  </label>

                  <Input
                    type="text"
                    name="managerName"
                    id="managerName"
                    className="mb-3"
                    placeholder="Manager Name"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Manager Contact</b>
                  </label>

                  <Input
                    type="text"
                    name="managerContact"
                    id="managerContact"
                    className="mb-3"
                    placeholder="Manager Contact"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Room Quality</b>
                  </label>
                  <Input
                    type="text"
                    name="roomQaulity"
                    id="roomQuality"
                    className="mb-3"
                    placeholder="Room Quality"
                    onChange={this.onChange}
                  />
                </div>

                <div class="column-add-package">
                  <label>
                    <b>Room Type</b>
                  </label>

                  <Input
                    type="text"
                    name="roomType"
                    id="roomType"
                    className="mb-3"
                    placeholder="Room Type"
                    onChange={this.onChange}
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
  isAuthenticated: state.hotelServices.isAuthenticated,
});
export default connect(mapStateToProps, { AddHotelPackage })(
  AddPackageHotelServices
);
