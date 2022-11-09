import React from "react";
import { useNavigate } from "react-router";
import styles from "./Hero.module.css";

export default function Hero() {
  const calllines = [
    {
      title: "Fat Tony's Pizza Kitchen",
      cta: "Call ahead for takeout",
      ctaBtn: "417.860.9136",
      ctaAct: "tel:417.860.9136",
      ctaLoc: "",
    },
    {
      title: "Where is the truck today?",
      cta: "",
      ctaBtn: "Check Schedule",
      ctaAct: "",
      ctaLoc: "/location",
    },
    {
      title: `Hand Made, Always Fresh.`,
      cta: "Our Guarantee.",
      ctaBtn: "View Menu",
      ctaAct: "",
      ctaLoc: "/menu",
    },
  ];
  const [counter, setCounter] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    setInterval(() => {
      setCounter((prev) => {
        if (prev === calllines.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 9000);
  }, [calllines.length]);

  function buttonClick() {
    if (calllines[counter].ctaLoc) {
      navigate(calllines[counter].ctaLoc);
    } else if (calllines[counter].ctaAct) {
      window.open(calllines[counter].ctaAct);
    }
  }

  function changeSlide(dir: string) {
    setCounter((prev) => {
      if (dir === "forward") {
        if (prev === calllines.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      } else {
        if (prev === 0) {
          return calllines.length - 1;
        } else {
          return prev - 1;
        }
      }
    });
  }

  return (
    <section className={styles.hero}>
      <div className={styles["hero-overlay"]}>
        <div className={styles["hero-overlay__center"]}>
          <h1 className={styles["hero-title"]}>{calllines[counter].title}</h1>
          <p className={styles.cta}>{calllines[counter].cta}</p>
          <button onClick={buttonClick} className={styles["cta-button"]}>
            {calllines[counter].ctaBtn}
          </button>
          <i
            className={`${styles.forward} ${styles.arrow} fa-solid fa-arrow-right`}
            onClick={() => changeSlide("forward")}
          ></i>
          <i
            className={`${styles.back} ${styles.arrow} fa-solid fa-arrow-left`}
            onClick={() => changeSlide("back")}
          ></i>
        </div>
      </div>
    </section>
  );
}
