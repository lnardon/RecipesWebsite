import React from "react";
import styles from "./styles.module.css";

function LoadingFallback() {
  return (
    <div className={styles.container}>
      <img src="/static/favicon.ico" alt="Logo" className={styles.logo} />
      <h3 className={styles.title}>Loading ...</h3>
    </div>
  );
}

export default LoadingFallback;
