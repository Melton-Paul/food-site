import React from "react";
import Cta from "../components/CTA/Cta";
import Display from "../components/Display/Display";
import Hero from "../components/Hero/Hero";
import Lifestyle from "../components/Lifestyle/Lifestyle";

export default function MainPage() {
  return (
    <main>
      <Hero />
      <Cta />
      <Display />
      <Lifestyle
        attach={true}
        img="https://scontent-fml2-1.xx.fbcdn.net/v/t1.6435-9/104437592_2666593350251892_2330067072738917347_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MtFeHvbSB3IAX--QZFL&_nc_ht=scontent-fml2-1.xx&oh=00_AfAkceF6QUSsm0OblptqqRJhvNAP7XnTzK77nIEn69XLtQ&oe=640BAF2F"
      />
      <Lifestyle img="https://www.beaujos.com/wp-content/uploads/2021/03/bottom-cta-2.jpg">
        <h2>Contact Fat Tony's Pizza Kitchen Today</h2>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: ".8rem",
            background: "green",
            border: "none",
            color: "white",
            fontWeight: 900,
          }}
        >
          Contact Us
        </button>
      </Lifestyle>
    </main>
  );
}
