import React from "react";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <div className={styles.cta}>
      {/* <h2 className={styles["cta-title"]}>Want to place an order?</h2> */}
      <div>
        <button className={styles["cta-btn"]}>Order Online</button>
        <span>Or</span>
        <button className={styles["cta-btn"]}>Call 417.860.9136</button>
      </div>
    </div>
  );
}
