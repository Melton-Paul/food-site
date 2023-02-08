import styles from "./Card.module.css";
import React from "react";
import { useNavigate } from "react-router";

const Card: React.FC<{
  title: string;
  buttonTxt: string;
  buttonLoc: string;
  background: string;
}> = ({ title, buttonTxt, buttonLoc, background }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(buttonLoc);
  }

  const cardStyle = {
    background: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <article style={cardStyle} className={styles.card}>
      <div className={`${styles["card-opacity"]} ${styles["card-inner"]}`}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <button className={styles["card-button"]} onClick={handleClick}>
          {buttonTxt}
        </button>
      </div>
    </article>
  );
};

export default Card;
