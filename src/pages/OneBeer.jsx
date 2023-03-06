import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneBeer = () => {
  const [beer, setBeer] = useState(null);
  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/" + params.beerId)
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log(response);
        setBeer(response);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!beer) {
    return <div className="Loading">Loading!</div>;
  }
  return (
    <div className="oneBeerPage">
      <div className="imageBeers">
        <img height={150} src={beer.image_url} alt="" />
      </div>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default OneBeer;
