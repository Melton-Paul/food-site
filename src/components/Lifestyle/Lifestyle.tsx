import React from "react";
import styles from "./Lifestyle.module.css";

const Lifestyle: React.FC<{
  position?: string;
  attach?: boolean;
  img: string;
  children?: React.ReactNode;
}> = ({ children, img, attach = false, position = "center" }) => {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const style = {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: windowSize > 768 && attach ? "fixed" : "scroll",
    backgroundPosition:
      windowSize > 1300 || windowSize < 768 ? "center" : position,
  };

  function setSize() {
    setWindowSize(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <section className={styles.lifestyle}>
      <div className={styles.background} style={style}></div>
      {children && (
        <article className={`${styles["lifestyle-text"]} container`}>
          {children}
        </article>
      )}
    </section>
  );
};

export default Lifestyle;
