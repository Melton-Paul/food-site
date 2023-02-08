import Card from "../Card/Card";
import Socials from "../Socials/Socials";
import styles from "./Display.module.css";
const test = require("../../images/pizza.jpg");

const Display = () => {
  const cardInfo = [
    {
      title: "book the food truck",
      buttonTxt: "Book the food truck",
      buttonLoc: "/catering",
      background: test,
    },
    {
      title: "menu",
      buttonTxt: "menu",
      buttonLoc: "/catering",
      background: test,
    },
    {
      title: "where's the food truck",
      buttonTxt: "Get Started",
      buttonLoc: "/location",
      background: test,
    },
    {
      title: "Facebook",
      buttonTxt: "Find Us",
      buttonLoc: "/location",
      background: test,
    },
  ];

  return (
    <section className={styles.display}>
      <h2 className={styles["display-title"]}>
        Authentic gourmet pies from Italy, Old world thin crust, Handmade to
        order. Everyday is a pizza party.
      </h2>
      <Socials
        title="Follow us"
        instagram="https://www.facebook.com/fattonyspizzakitchen"
        facebook="https://www.facebook.com/fattonyspizzakitchen"
      />
      <div className={styles["display-cards"]}>
        {cardInfo.map((card) => (
          <Card
            title={card.title}
            buttonTxt={card.buttonTxt}
            buttonLoc={card.buttonLoc}
            background={card.background}
          />
        ))}
      </div>
      <div className={styles["display-body"]}>
        <h2 className={styles["display-body-title"]}>
          INCLUDE FAT TONY'S FOOD TRUCK IN YOUR ADVENTURE
        </h2>
        <p>
          Beau Jo’s Pizza food truck can be found at your favorite breweries
          around Colorado or booked for your community party. We can even do
          weddings and other events. Make everyone happy with our local favorite
          pizza. The Beau Jo’s pizza food truck is always on the move and can be
          found on the Where’s The Food Truck app, or on our facebook or
          instagram page.
        </p>
        <p>
          The pizza food truck is equipped to have a freshly prepared pizza
          ready nearly anywhere on the front range. From trivia nights to pool
          parties we are ready for your event. Book the food truck for your next
          gathering today!
        </p>
      </div>
    </section>
  );
};

export default Display;
