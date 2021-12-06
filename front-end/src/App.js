import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import MainMenu from "./layout/MainMenu";
import Deck from "./layout/components/cards/Deck";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route path="/play" element={<Deck />} />
      </Routes>
    </>
 );
}
