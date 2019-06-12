import React from "react";
import styles from "./style.module.scss";

const Card = ({ children, title }) => {
  return (
    <div className={styles.card}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      {children}
    </div>
  );
};

export default Card;
