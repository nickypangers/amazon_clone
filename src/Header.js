import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import axios from "axios";
import DemoBanner from "./DemoBanner";
import Subheader from "./Subheader";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [location, setLocation] = useState(null);

  const apiUrl = "https://freegeoip.app/json/";

  const fetchData = async () => {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    setLocation(response.data);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    if (location == null) {
      fetchData();
    }
  });

  return (
    <div className="nav">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          {/* Logo */}
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Subheader location={location?.country_name} />
      <DemoBanner />
    </div>
  );
}

export default Header;
