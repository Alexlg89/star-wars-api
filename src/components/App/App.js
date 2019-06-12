import React from "react";
import Header from "../Header";
import styles from "./style.module.scss";

const App = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default App;
