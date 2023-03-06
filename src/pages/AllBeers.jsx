import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  const api = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchBeers = async () => {
    try {
      const raw = await fetch(api);
      const res = await raw.json();
      console.log(res);
      setBeers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      AllBeers
      {beers.map((beer) => {
        return (
          <div className="allBeersImage">
            <div className="imageBeers">
              <img height={150} src={beer.image_url} alt="" />
            </div>
            <div className="allBeersInfo">
              <Link to={`/beers/` + beer._id}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <p>Created by : {beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
