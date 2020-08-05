import React from "react";
import "../CSS/DescriptionPageCar.css";
import NavbarVendor from "../Components/NavbarVendor";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { feedback } from "../Redux/Actions/FeedbackActions";
import { connect } from "react-redux";
import { fetchPackage } from "../Redux/Actions/fetchPackage";
import { fetchCar } from "../Redux/Actions/UpdatePackageActions";
class DescriptionPageCar extends React.Component {
  state = {
    comment: "",
  };
  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { comment } = this.state;

    const body = {
      comment: comment,
    };
    // this.props.feedback(body);
    // if(this.props.isAuthenticated === true){
    //   this.props.history.push('/customerdashboard')
    // }
  };

  render() {
    return (
      <React.Fragment>
        <NavbarVendor />
        {this.props.update.car.map((item) => (
          <>
            <div className="heading1">
              <p className="price-heading-div">
                <h2 style={{ fontFamily: "Monospace" }}>
                  {" "}
                  {this.props.match.params.packageName}
                </h2>
              </p>
            </div>
            <div className="main-description-div">
              {/* <div className="inner-image1"></div> */}

              <img
                //width="470"
                // height="200"
                class=""
                style={{ height: "220px", width: "220px" }}
                src={
                  ` http://localhost:5000/${this.props.match.params.imageLink}`
                  // item.images[0] === null ||
                  // item.images[0] === undefined
                  //   ? "http://via.placeholder.com/300x180"
                  //   : ` http://localhost:5000/${item.images[0].imagelink}`
                }
                alt="Card image cap"
              />
            </div>

            <div className="second-div-parallel">
              <p className="price-heading-div">
                <h5>Driver Contact :</h5> {item.driverContact}
              </p>

              <p className="price-heading-div">
                <h5>Price :</h5> {this.props.match.params.price}
              </p>
            </div>

            <div className="second-div-parallel">
              <p className="price-heading-div">
                <h5>Vehicle Name :</h5> {item.vehicleName}
              </p>

              <p className="price-heading-div">
                <h5>Vehicle Registeration Number :</h5> {item.vehicleRegNo}
              </p>

              <p className="price-heading-div">
                <h5>Vehicle Type :</h5> {item.vehicleType}
              </p>
              <p style={{ marginLeft: 20 }}>
                <h5>Driver Name :</h5> {item.driverName}
              </p>
            </div>

            <div className="second-div"> </div>
            <div className="description-div1">
              <h5 className="price-heading-div">Description:</h5> <hr />
              <p className="price-heading-div">
                {this.props.match.params.description}
              </p>
            </div>
            {/* <label>
              <b>Feedback About Package</b>
            </label> */}
            <div>
              {/* {" "}
              <textarea
                class="comment"
                placeholder="Type Your Feedback Here"
                name="comment"
              >
                {" "}
              </textarea> */}
              <div>
                {/* <Button color="primary" onSubmit={this.onSubmit}>
                  Send Feedback
                </Button> */}
              </div>
            </div>
          </>
        ))}
        {/* <div className="footer-inner"><Footer /></div>   */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.feedbackOfCustomer.isAuthenticated,
  Package: state.fetchPackageForPrint,
  update: state.Update,
});
export default connect(mapStateToProps, { feedback, fetchPackage, fetchCar })(
  DescriptionPageCar
);
