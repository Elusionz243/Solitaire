import React from "react";

export default function Card({ card }) {
  const { card_img, card_name } = card;
  
  return <img src={card_img} alt={card_name} style={{ transform: "scale(50%)" }} className="border" />;
}
