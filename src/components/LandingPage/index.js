import React from "react";
import styles from "./style.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.contentWrapper}>
        <h1>Welcome to the Star Wars API</h1>
        <p>This projet was built using create-react-app and GraphQL</p>
        <p>
          Data is fetched from the Star Wars API:{" "}
          <a href="https://swapi.co/">https://swapi.co/</a>
        </p>
        <p>Built by Alexander Elert</p>
      </div>
    </div>
  );
};

export default LandingPage;
