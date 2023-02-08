import styles from "./Socials.module.css";
import React from "react";

const Socials: React.FC<{
  twitter?: string;
  facebook?: string;
  instagram?: string;
  title?: string;
}> = ({ facebook, twitter, instagram, title }) => {
  return (
    <article>
      <p className={styles["social-title"]}>{title}</p>
      <div className={styles["social-icons"]}>
        {facebook && (
          <a href={facebook} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        )}
      </div>
    </article>
  );
};

export default Socials;
