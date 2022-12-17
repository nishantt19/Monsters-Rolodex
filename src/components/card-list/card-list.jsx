import React from "react";

import Card from "../card/card";
import "./card-list.css";

const CardList = (props) => (
//   using map function, we will be able to show all the cards
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
