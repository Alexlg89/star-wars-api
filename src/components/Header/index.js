import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.branding}>Star Wars API</div>
      <div className={styles.navbar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/persons"}>Persons</Link>
      </div>
    </div>
  );
};

export default Header;
