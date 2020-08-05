import React from "react";
import "../CSS/AddPackage.css";
import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { tourplannerservices } from "../Redux/Actions/TourPlannerAction";

class AddPackageTourPlanner extends React.Component {
  state = {
    guiderName: "",
    guiderContact: "",
    startDate: "",
    endDate: "",
    food: "",
    accomodation: "",
    travelling: "",
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
      guiderName,
      guiderContact,
      startDate,
      endDate,
      food,
      accomodation,
      travelling,
    } = this.state;

    // let form = new FormData();
    // form.append("guiderName",this.state.guiderName)
    // form.append("guiderContact",this.state.guiderContact)
    // form.append("startDate",this.state.startDate)
    // form.append("endDate",this.state.endDate)
    // form.append("food",this.state.food)
    // form.append("accomodation",this.state.accomodation)
    // form.append("travelling",this.state.travelling)

    let obj = {
      guiderName: this.state.guiderName,
      guiderContact: this.state.guiderContact,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      food: this.state.food,
      accomodation: this.state.accomodation,
      traveling: this.state.travelling,
    };

    this.props.tourplannerservices(obj);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/tourvendordashboard");
    }
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/tourvendordashboard");
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
            Add Tour Services Form
          </h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div class="row-add-package">
                <div class="column-add-package">
                  <label>
                    <b>Guider Name</b>
                  </label>

                  <Input
                    type="text"
                    name="guiderName"
                    id="guiderName"
                    className="mb-3"
                    placeholder="Guider Name"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Guider Contact Number </b>
                  </label>

                  <Input
                    type="text"
                    name="guiderContact"
                    id="guiderContact"
                    className="mb-3"
                    placeholder="Guider Contact Number"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Start Date</b>
                  </label>
                  <Input
                    type="text"
                    name="startDate"
                    id="startDate"
                    className="mb-3"
                    placeholder="Start Date"
                    onChange={this.onChange}
                  />
                </div>

                <div class="column-add-package">
                  <label>
                    <b>End Date</b>
                  </label>

                  <Input
                    type="text"
                    name="endDate"
                    id="endDate"
                    className="mb-3"
                    placeholder="End Date"
                    onChange={this.onChange}
                  />
                </div>

                <div class="column-add-package">
                  <label>
                    <b>Food</b>
                  </label>

                  <Input
                    type="text"
                    name="food"
                    id="food"
                    className="mb-3"
                    placeholder="Food"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Accomodation</b>
                  </label>
                  <Input
                    type="text"
                    name="accomodation"
                    id="accomodation"
                    className="mb-3"
                    placeholder="Accomodation"
                    onChange={this.onChange}
                  />
                </div>
                <div class="column-add-package">
                  <label>
                    <b>Travelling</b>
                  </label>
                  <Input
                    type="text"
                    name="travelling"
                    id="travelling"
                    className="mb-3"
                    placeholder="Travelling"
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
  isAuthenticated: state.tourplannerReducer.isAuthenticated,
  loadData: state.loadData,
});
export default connect(mapStateToProps, { tourplannerservices })(
  AddPackageTourPlanner
);
