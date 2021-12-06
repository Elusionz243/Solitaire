import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-10 border">
              <div className="col-12 title">
                <h1 style={{ textAlign: "center", fontSize: "5rem" }}>Solitaire</h1>
              </div>
              <div className="d-flex justify-content-evenly flex-wrap">
                <div className="col-5 mb-3">
                  <Link to="/play" className="btn btn-outline-primary w-100">PLAY</Link>
                </div>
                <div className="col-5 mb-3">
                  <Link to="/settings" className="btn btn-outline-primary w-100">SETTINGS</Link>
                </div>
                <div className="col-5 mb-3">
                  <Link to="/about" className="btn btn-outline-primary w-100">ABOUT</Link>
                </div>
                <div className="col-5 mb-3">
                  <Link to="/more-games" className="btn btn-outline-primary w-100">MORE GAMES...</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
