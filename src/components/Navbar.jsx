import React from "react";
import { Link } from "react-router-dom";

import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const Navbar = () => {
  return (
    <nav>
      <img src={allBeers} alt="all beers picture" />
      <Link to="/beers">
        <h1 className="titleNavBar">All Beers</h1>
      </Link>
      <p className="textNavBar">Discover all our beers</p>
      <img src={randomBeer} alt="random beer picture" />
      <Link to="/random-beer">
        <h1 className="titleNavBar">Random Beer</h1>
      </Link>
      <p className="textNavBar">Discover a random beer</p>

      <img src={newBeer} alt="new beer picture" />
      <Link to="/new-beer">
        <h1 className="titleNavBar">New Beer</h1>
      </Link>
      <p className="textNavBar">Add a new beer</p>
    </nav>
  );
};

export default Navbar;
