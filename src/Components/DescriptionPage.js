import React from "react";
import "../CSS/DescriptionPage1.css";
import Navbars from "../Components/Navbars";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { feedback } from "../Redux/Actions/FeedbackActions";
import { connect } from "react-redux";
import { fetchPackage } from "../Redux/Actions/fetchPackage";
class DescriptionPage extends React.Component {
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

  render() {
    return (
      <React.Fragment>
        <Navbars />
        <div className="heading1">
          <h3>{this.props.Package.package_name}Two Days Tour Towards Murree</h3>
        </div>
        <div className="main-description-div">
          <div className="inner-image1"></div>
        </div>

        <div className="second-div-parallel">
          <h3 className="price-heading-div">
            {this.props.Package.price}RS: 15000
          </h3>{" "}
          <br />
          <p className="price-heading-div">
            Write What You Want About The Product
          </p>
        </div>

        <div className="second-div-parallel">
          <h5 className="price-heading-div">
            {this.props.Package.location}Tour Planner Organization
          </h5>{" "}
          <br />
          <p className="price-heading-div">
            Tour Offered By TourPlanner.pk
          </p>{" "}
        </div>
        <div className="second-div-parallel1">
          <Link to="/payment">
            <Button color="primary">Book Package</Button>
          </Link>{" "}
        </div>

        <div className="second-div">Image Small </div>
        <div className="description-div1">
          <h5 className="price-heading-div">Description:</h5> <hr />
          <p className="price-heading-div">
            We are going to provide you the best tour in your life <br /> Tour
            is offering for MURREE And NATHIA GALI
            {this.props.Package.description}
            <br />
            Following Services are provided by the Tour Organization
            <br />
            1) Transportation
            <br />
            2) Transportation
            <br />
            3) Transportation
            <br />
            4) Transportation
            <br />
            5) Transportation
            <br />
            6) Transportation
            <br />
          </p>
        </div>
        <label>
          <b>Feedback About Package</b>
        </label>
        <div>
          {" "}
          <textarea
            class="comment"
            placeholder="Type Your Feedback Here"
            name="comment"
          >
            {" "}
          </textarea>
          <div>
            <Button color="primary" onSubmit={this.onSubmit}>
              Send Feedback
            </Button>
          </div>
        </div>
        {/* <div className="footer-inner"><Footer /></div>   */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.feedbackOfCustomer.isAuthenticated,
  Package: state.fetchPackageForPrint,
});
export default connect(mapStateToProps, { feedback, fetchPackage })(
  DescriptionPage
);
