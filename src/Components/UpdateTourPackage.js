import React from "react";
import "../CSS/AddPackage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  UpdateTourPackageForm,
  fetchTour,
} from "../Redux/Actions/UpdatePackageActions";
import NavbarVendor from "../Components/NavbarVendor";
import { Input, Button, Form, FormGroup } from "reactstrap";

class UpdateMainPackage extends React.Component {
  state = {
    modal: false,
    guiderName: "",
    guiderContact: "",
    startDate: "",
    endDate: "",
    food: "",
    accomodation: "",
    travelling: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    // form.append("guiderName",this.state.guiderName);
    // form.append("guiderContact",this.state.guiderContact);
    // form.append("startDate",this.state.startDate);
    // form.append("endDate",this.state.endDate);
    // form.append("food",this.state.food);
    // form.append("accomodation",this.state.accomodation);
    // form.append("travelling",this.state.travelling);
    console.log(this.props.update.guiderName, "21312", this.state.guiderName);
    let obj = {
      guiderName:
        this.state.guiderName === ""
          ? this.props.update.guiderName
          : this.state.guiderName,
      guiderContact:
        this.state.guiderContact === ""
          ? this.props.update.guiderContact
          : this.state.guiderContact,
      startDate:
        this.state.startDate === ""
          ? this.props.update.startDate
          : this.state.startDate,
      endDate:
        this.state.endDate === ""
          ? this.props.update.endDate
          : this.state.endDate,
      food: this.state.food === "" ? this.props.update.food : this.state.food,
      accomodation:
        this.state.accomodation === ""
          ? this.props.update.accomodation
          : this.state.accomodation,
      traveling:
        this.state.travelling === ""
          ? this.props.update.traveling
          : this.state.travelling,
    };
    console.log(obj);
    this.props.UpdateTourPackageForm(obj, this.props.match.params.id);
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/tourvendordashboard");
    }
  };

  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

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
            Update Tour Package Form
          </h3>
        </div>
        <div className="main-div-add-package">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              {this.props.update.tour.map((item) => (
                <>
                  <div className="row-add-package">
                    <div className="column-add-package">
                      <label>
                        <b>Guider Name</b>
                      </label>

                      <Input
                        type="text"
                        name="guiderName"
                        id="guiderName"
                        className="mb-3"
                        placeholder={item.guiderName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Guider Contact</b>
                      </label>

                      <Input
                        type="text"
                        name="guiderContact"
                        id="guiderContact"
                        className="mb-3"
                        placeholder={item.guiderContact}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Start Date</b>
                      </label>

                      <Input
                        type="text"
                        name="startDate"
                        id="startDate"
                        className="mb-3"
                        placeholder={item.startDate}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>End Date</b>
                      </label>

                      <Input
                        type="text"
                        name="endDate"
                        id="endDate"
                        className="mb-3"
                        placeholder={item.endDate}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Food</b>
                      </label>

                      <Input
                        type="text"
                        name="food"
                        id="food"
                        className="mb-3"
                        placeholder={item.food ? "true" : "false"}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Accomodation</b>
                      </label>

                      <Input
                        type="text"
                        name="accomodation"
                        id="accomodation"
                        className="mb-3"
                        placeholder={item.accomodation ? "true" : "false"}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="column-add-package">
                      <label>
                        <b>Travelling</b>
                      </label>

                      <Input
                        type="text"
                        name="travelling"
                        id="travelling"
                        className="mb-3"
                        placeholder={item.travelling ? "true" : "false"}
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
  isAuthenticated: state.Update.isAuthenticatedTour,
  update: state.Update,
});
export default connect(mapStateToProps, { UpdateTourPackageForm, fetchTour })(
  UpdateMainPackage
);
