

import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

const PlayerCard = (props) => { 

  const { playerV } = useParams();
  console.log(playerV);

  const [category, setCategory] = React.useState(null);
  const countryV = '';

  const encodedPlayerValue = encodeURIComponent(playerV);
  const encodedCountryValue = encodeURIComponent('denmark');

  React.useEffect(() => {
    console.log("making api call");
    fetch(`http://localhost:8080/players?category=${encodedPlayerValue}&country=${encodedCountryValue}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data === category);
        return setCategory(data);
      });
  }, []); // useEffect will triggerred only once like componentDidMount.

  const htmlcat =
    category !== null
      ? category.players.map((result) => {
          console.log(result.id);
          console.log(result.name);
          return <li>{result.name} </li>
        })
      : null;

  
    return <div>Choosen player is : {playerV}</div>;
 } 
export default PlayerCard;