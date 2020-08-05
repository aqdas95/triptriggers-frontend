import React from "react";
import "../CSS/DescriptionPageTour.css";
import NavbarVendor from "../Components/NavbarVendor";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { feedback } from "../Redux/Actions/FeedbackActions";
import { connect } from "react-redux";
import { fetchPackage } from "../Redux/Actions/fetchPackage";
import { fetchTour } from "../Redux/Actions/UpdatePackageActions";
import PropTypes from "prop-types";
class DescriptionPageTour extends React.Component {
  state = {
    comment: "",
  };

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

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    fetchTour: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarVendor />

        {this.props.update.tour.map((item) => (
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

              <div class="img-square-wrapper">
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
            </div>

            <div className="second-div-parallel">
              <p className="price-heading-div" style={{ marginLeft: "20" }}>
                <h5>Price :</h5> {this.props.match.params.price}
              </p>
              <br />
            </div>

            <div className="second-div-parallel">
              <p className="price-heading-div">
                <h5>Guider Name:</h5> {item.guiderName}
                <h5>Start Date :</h5> {item.startDate}
              </p>

              <p className="price-heading-div">
                <h5>End Date :</h5> {item.endDate}
              </p>

              <p className="price-heading-div">
                <h5>Food :</h5> {item.food ? "true" : "false"}
              </p>

              <p className="price-heading-div">
                <h5>Accomodation :</h5> {item.accomodation ? "true" : "false"}
              </p>

              <p className="price-heading-div">
                <h5>Traveling :</h5> {item.traveling ? "true" : "false"}
              </p>
              <br />
            </div>
            <div className="second-div-parallel1">
              {/* <Link to="/payment">
                <Button color="primary">Book Package</Button>
              </Link> */}
            </div>

            <div className="second-div"> </div>
            <div className="description-div1">
              <h5 className="price-heading-div">Description:</h5> <hr />
              <p className="price-heading-div">
                {this.props.match.params.description}
              </p>
              {/* {this.props.Package.description} */}
            </div>
            {/* <label>
              <b>Feedback About Package</b>
            </label> */}
            <div>
              {/* <textarea
                class="comment"
                placeholder="Type Your Feedback Here"
                name="comment"
              ></textarea> */}
              {/* <div>
                <Button color="primary" onSubmit={this.onSubmit}>
                  Send Feedback
                </Button>
              </div> */}
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
export default connect(mapStateToProps, { feedback, fetchPackage, fetchTour })(
  DescriptionPageTour
);
