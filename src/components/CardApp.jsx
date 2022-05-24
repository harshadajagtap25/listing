import React from "react";
import Card from "./Card";

function CardApp() {
  return (
    <div >
      <Card
        date={"28/10/2020"}
        text1={"Amazon Gift Pay"}
        val1={"Desktop"}
        val2={"Mobile"}
        style={{ backgroundColor: "#efac35" }}
      />
      <Card
        date={"27 Sep 2020"}
        text1={"Apple Gift Pay"}
        val1={"MacOS"}
        val2={"Mobile"}
        style={{ backgroundColor: "#f6f6f6" }}
      />
    </div>
  );
}

export default CardApp;
