import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Spinner,
  Container,
} from "reactstrap";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchPackageTour,
  DeletePackageVendorTour,
} from "../Redux/Actions/fetchPackage";
import PropTypes from "prop-types";

class DashboardCard extends React.Component {
  state = { data: "", imagePreview: "", image: "" };

  componentDidMount() {
    this.props.fetchPackageTour();

    this.setState({
      data: JSON.parse(localStorage.getItem("vendorInfo")),
      image: JSON.parse(localStorage.getItem("vendorInfo")).images,
    });

    // this.getUnique(this.props.Package.PackagesTour, "_id");

    // if (this.props.token === "") {
    //   this.props.history.push("/vendorlogin");
    // }
  }

  // componentDidUpdate() {
  //   if (this.props.token === "") {
  //     this.props.history.push("/vendorlogin");
  //   }
  // }

  static propTypes = {
    fetchPackageTour: PropTypes.func.isRequired,
    DeletePackageVendorTour: PropTypes.func.isRequired,
  };

  getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  };

  onDeleteClick = (id) => {
    this.props.DeletePackageVendorTour(id);
  };

  render() {
    console.log(this.state.data, "2131132", this.state.data["imagelink"]);
    return this.props.Package.loading ? (
      <Spinner color="dark" animation="border" />
    ) : (
      <div class="container-fluid">
        {Object.keys(this.state.image).map((k) => (
          <>
            <h2 style={{fontFamily:"Monospace"}}>Vendor Name:{this.state.data["vendorName"]}</h2>
            <img
              //width="470"
              // height="200"
              class=""
              style={{ height: "220px", width: "220px"}}
              src={
                ` http://localhost:5000/${this.state.image[k].imagelink}`
                // item.images[0] === null ||
                // item.images[0] === undefined
                //   ? "http://via.placeholder.com/300x180"
                //   : ` http://localhost:5000/${item.images[0].imagelink}`
              }
              alt="Card image cap"
            />
          </>
        ))}
        {this.props.Package.PackagesTour.map(
          (item, key) => (
            console.log(item),
            this.props.auth.vendorId === item.creator ? (
              <div class="row">
                <div class="col-12 mt-3">
                  <div class="card">
                    <div class="card-horizontal">
                      <div class="img-square-wrapper">
                        <img
                          //width="470"
                          // height="200"
                          class=""
                          style={{ height: "220px", width: "220px" }}
                          src={
                            ` http://localhost:5000/${item.images[0].imagelink}`
                            // item.images[0] === null ||
                            // item.images[0] === undefined
                            //   ? "http://via.placeholder.com/300x180"
                            //   : ` http://localhost:5000/${item.images[0].imagelink}`
                          }
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body">
                        <h4 class="card-title" key={item.id}>
                          {item.packageName}
                        </h4>
                        <h3>{item.price}</h3>
                        <p class="card-text">{item.description}</p>
                        <Link
                          to={`/descriptionpagetour/${item._id}/${item.price}/${item.description}/${item.packageName}/${item.images[0].imagelink}`}
                        >
                          <Button color="info">Details</Button>
                        </Link>

                        <Button
                          style={{ marginLeft: 15 }}
                          color="danger"
                          onClick={this.onDeleteClick.bind(this, item._id)}
                        >
                          Delete
                        </Button>

                        <Link to={`/updatepackage/${item._id}/${"tour"}`}>
                          <Button
                            style={{ marginLeft: 15 }}
                            color="primary"
                            //   onClick={this.updateClick.bind(this, item._id)}
                          >
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div class="card-footer">
                      {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Package: state.fetchPackageForPrint,
  isAuthenticated: state.logoutVendor.isAuthenticated,
  token: state.logoutVendor.token,
  auth: state.authReducerVendor,
});

export default connect(mapStateToProps, {
  fetchPackageTour,
  DeletePackageVendorTour,
})(withRouter(DashboardCard));
