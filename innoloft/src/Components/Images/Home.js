import React from "react";
import "../../App.css";
import { ReactComponent as Logo } from "../../Components/Images/Images/companylogo.svg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <NavLink className="product-link" to="/">
          <Logo style={{ height: "20px" }} />
        </NavLink>
        <div className="nav-holder">
          <input
            placeholder="Enter interest, keyword, company name, etc..."
            className="nav-input"
          />
          <span className="language">
            <NavLink className="product-link" to="/product">
              Go to product page
            </NavLink>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Home;
