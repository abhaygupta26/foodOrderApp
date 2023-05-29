import React from "react";
import classes from "./Header.module.css";
import MainImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        {/* <button style={{ color: "green" }}>Cart</button> */}
      </header>
      <div className={classes["main-image"]}>
        <img src={MainImage} />
      </div>
    </Fragment>
  );
}

export default Header;
