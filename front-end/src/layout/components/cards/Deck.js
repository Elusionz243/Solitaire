import React, { useState, useRef, useEffect } from "react";

import { getDeck } from "../../../utils/api";
import Card from "./Card";

export default function Deck() {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function getDeckFromAPI() {
      const response = await getDeck(abortController.signal);
      setDeck([...response]);
    }

    getDeckFromAPI();
    return () => abortController.abort();
  }, []);
  console.log(deck);
  return (
    <>
      {deck.map((card) => (
        <Card key={`${card.card_id}`} card={card} />  
      ))}
    </>
  );
}
