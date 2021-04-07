import React, { useEffect } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getProduct,
  getTrl,
  getAppConfiguration,
  setActiveTab,
} from "../../state/actions/productAction.js";
import location from "../Images/pin.png";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaCalendar } from "@react-icons/all-files/fa/FaCalendar";
import { FaNewspaper } from "@react-icons/all-files/fa/FaNewspaper";
import { FaWrench } from "@react-icons/all-files/fa/FaWrench";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaBox } from "@react-icons/all-files/fa/FaBox";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import { FaVolumeUp } from "@react-icons/all-files/fa/FaVolumeUp";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { ReactComponent as Logo } from "../../Components/Images/Images/companylogo.svg";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { NavLink } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const productDetails = state.product.productDetails;
  const trlDetails = state.product.trl;
  const appConfiguration = state.product.appConfiguration;
  const latitude = parseFloat(productDetails?.company?.address?.latitude);
  const longitude = parseFloat(productDetails?.company?.address?.longitude);
  const activeTab = state.product.activeTab;

  console.log(`CONFIG`, appConfiguration);

  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: latitude,
          lng: longitude,
        }}
      />
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getTrl());
    dispatch(getAppConfiguration());
  }, [dispatch]);
  return (
    <React.Fragment>
      <nav className="navbar">
        <NavLink className="product-link" to="/">
          <Logo style={{ height: "20px" }} className="logo" />
        </NavLink>
        <div className="nav-holder">
          <input
            placeholder="Enter interest, keyword, company name, etc..."
            className="nav-input"
          />
          <span className="language">
            EN{" "}
            <span style={{ marginLeft: "7px", marginTop: "15px" }}>
              <FaChevronDown />
            </span>
            <span>
              {" "}
              <FaBell style={{ marginLeft: "13px" }} />
            </span>
            <span>
              {" "}
              <FaUser style={{ marginLeft: "25px" }} />
            </span>
            <span style={{ marginLeft: "7px", marginTop: "15px" }}>
              <FaChevronDown />
            </span>
          </span>
        </div>
      </nav>
      <section className="dash-section">
        <div className="first-div">
          <div className="sidebar">
            <div className="sidebar-profile">
              {" "}
              <img
                src={productDetails?.user?.profilePicture}
                alt="profile-pics"
                className="avatar1"
              />{" "}
              <div className="name-info">
                {" "}
                <span className="company-address">
                  {productDetails?.user?.firstName}{" "}
                  {productDetails?.user?.lastName}
                </span>
                <h3 className="company-address">
                  {productDetails?.user?.position}
                </h3>
              </div>
            </div>
            <ul className="side-list">
              <li>
                <FaHome /> <span className="list-item"> Home</span>
              </li>
              <li>
                {" "}
                <FaUser />
                <span className="list-item">Members</span>
              </li>
              <li>
                {" "}
                <FaEnvelope />
                <span className="list-item">Offers</span>
              </li>
              <li>
                {" "}
                <FaVolumeUp />
                <span className="list-item">Requests</span>
              </li>
              <li>
                {" "}
                <FaCircle />
                <span className="list-item">Organizations</span>
              </li>
              <li>
                <FaCalendar />
                <span className="list-item">Events</span>
              </li>
              <li>
                {" "}
                <FaNewspaper />
                <span className="list-item"> News</span>
              </li>
              <li>
                {" "}
                <FaBox />
                <span className="list-item">Projects</span>
              </li>
              <li>
                {" "}
                <FaWrench />
                <span className="list-item">Tools</span>
              </li>
              <li>
                {" "}
                <FaCalendarAlt />
                <span className="list-item">Personal Calendar</span>
              </li>
            </ul>
          </div>
          <div className="bottom-bar">
            <div className="lower-sidebar">
              <span className="bottom-desc">Contact</span>
              <span className="bottom-desc">Data Privacy</span>
              <span className="bottom-desc">Imprint</span>
            </div>
            <div className="lower-sidebar1">
              <span className="bottom-desc">Terms of use</span>
              <span className="bottom-desc">Blog</span>
            </div>
            <div className="lower-sidebar1">
              <span className="bottom-description">&copy; Innoloft GmbH</span>
            </div>
            <div className="social-footer">
              <FaFacebook />
              <span className="list-item">
                <FaTwitter />
              </span>
              <span className="list-item">
                <FaLinkedin />
              </span>
              <span className="list-item">
                {" "}
                <FaGlobe />
              </span>
            </div>
          </div>
        </div>
        <div className="second-div">
          <div className="explanation">
            <h3 className="feed-title">Your customized feed</h3>
            <span className="feed-span">
              News, products, requests and partners that you might find
              interesting
            </span>
          </div>

          <div className="details-div">
            {" "}
            <img
              src={productDetails?.picture}
              alt="product-img"
              className="product-img"
            />
            <div className="address-div">
              {" "}
              <img src={location} alt="location" className="location" />
              <span className="company-address">
                {productDetails?.company?.address?.city.name},{" "}
                {productDetails?.company?.address?.country?.name}
              </span>
            </div>
            <div className="title-div">
              <span className="product-title">
                {productDetails?.company?.name},
              </span>{" "}
              <span className="product-title">
                {productDetails?.type?.name}
              </span>
            </div>
            <div className="tab-holder">
              <div
                className={`${
                  activeTab === "description"
                    ? "product-tabs-active"
                    : "product-tabs"
                }`}
                onClick={() => dispatch(setActiveTab("description"))}>
                Description
              </div>
              <div
                className={`${
                  activeTab === "attributes"
                    ? "product-tabs-active"
                    : "product-tabs"
                }`}
                onClick={() => dispatch(setActiveTab("attributes"))}>
                Attributes
              </div>
            </div>
            <div className="description-div">
              {activeTab === "description" ? (
                <span className="product-description">
                  {productDetails?.description}
                </span>
              ) : (
                <span className="product-description">
                  {trlDetails?.map((detail) => detail.name)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="third-div">
          {appConfiguration.hasUserSection === true ? (
            <div className="user-info">
              <img
                src={productDetails?.user?.profilePicture}
                alt="profile-pics"
                className="avatar"
              />
              <div style={{ textAlign: "center", marginTop: "12px" }}>
                <span className="company-address">
                  {productDetails?.user?.firstName}{" "}
                  {productDetails?.user?.lastName}
                </span>
                <h5 className="company-address">
                  {" "}
                  {productDetails?.user?.email}
                </h5>
              </div>
            </div>
          ) : (
            <span>No User Section</span>
          )}

          <div className="map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_APP_KEY}`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Product;
