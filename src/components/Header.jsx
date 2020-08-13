import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import profile from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import gravatar from "../utils/grabatar";
import { connect } from "react-redux";

const Header = (props) => {
  const { user } = props;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={profile} alt="" />

          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToPorps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToPorps, null)(Header);
