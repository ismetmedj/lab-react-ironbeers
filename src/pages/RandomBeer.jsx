import React, { useEffect, useState } from "react";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  const api = "https://ih-beers-api2.herokuapp.com/beers/random";

  const fetchRandomBeer = async () => {
    try {
      const raw = await fetch(api);
      const res = await raw.json();
      console.log(res);
      setRandomBeer(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  //if i don't have an if here in case of there's no response, i can't have null in the useState
  // and so everytime we refresh the page we'll see quickly the previous beer before the new one
  if (!randomBeer) {
    return <div className="Loading">Loading!</div>;
  }

  return (
    <div className="oneBeerPage">
      <div className="imageBeers">
        <img height={150} src={randomBeer.image_url} alt="" />
      </div>
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
