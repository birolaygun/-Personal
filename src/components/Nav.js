import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../components/galeri/logo.gif";

import {
  // artılarıSilme,
} from "../actions";

const Nav = (props) => {


  return (
    <nav className="nav">

          <img
          onClick={()=>console.log(props.mydata)} src={logo} alt="logo" />


      <div className="menu">
        <Link to="/">
          <h2>Hakkımda</h2>
        </Link>
        <Link to="/yaptigim_isler">
          <h2>Yaptığım İşler</h2>
        </Link>
        <Link to="/yorumlar">
          <h2>Yorumlar</h2>
        </Link>
        <Link to="/iletisim">
          <h2 >İletişim</h2>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {
  // artılarıSilme,
})(Nav);
