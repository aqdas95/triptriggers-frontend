import React from "react";
import '../CSS/VendorDescriptionPage.css'
import { Button } from "reactstrap";
import NavbarVendor from "../Components/NavbarVendor";
//import {DeletePackageVendor} from '../Redux/Actions/DeletePackageForAll';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchHotel } from "../Redux/Actions/UpdatePackageActions";

class DescriptionPageVendor extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    detailCarServices: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchHotel(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarVendor />
        {this.props.update.hotel.map((item) => (
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
                <h5>Price :</h5> {this.props.match.params.price}
              </p>
            </div>

            <div className="second-div-parallel">
              <p style={{ marginLeft: "20px" }}>
                <h5>Manager Name :</h5> {item.managerName}
              </p>
              <p className="price-heading-div">
                <h5>Room Quality :</h5> {item.roomQuality}
                {/* <h5 className="price-heading-div">
                Manager Contact : {item.managerContact}
              </h5> */}
              </p>

              <p className="price-heading-div">
                <h5>Room Type :</h5> {item.roomType}
              </p>
              <br />
            </div>

            <div className="second-div"> </div>
            <div className="description-div1">
              <h5 className="price-heading-div">Description:</h5> <hr />
              <p className="price-heading-div">
                {this.props.match.params.description}
              </p>
              <p className="price-heading-div"></p>
            </div>
          </>
        ))}
        {/* <div className="footer-inner"><Footer /></div>   */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  car: state.carReducer,
  update: state.Update,
});
export default connect(mapStateToProps, { fetchHotel })(DescriptionPageVendor);
