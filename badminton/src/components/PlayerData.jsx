import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
const playerList = ['victor axelson', 'saina nehwal', 'lakshya sen', 'prannoy HS'];

const playerhtmlList = playerList.map((d) => <div>d</div>);

const PlayerData = () => {

  
    const [category, setCategory] = React.useState(null);
    const {categoryV} = useParams();
    console.log("categoryV is "  + categoryV);

  
    const encodedCategoryValue = encodeURIComponent(categoryV);
    const encodedCountryValue = encodeURIComponent('India');
  
    React.useEffect(() => {
      console.log("making api call");
      fetch(`http://localhost:8080/players?category=${encodedCategoryValue}&country=${encodedCountryValue}`)
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
            return <li><a href={"/category/"+categoryV+"/players"+result.url}>{result.name} </a></li>
          })
        : null;
  
  
    return <ul>{htmlcat}</ul>;
}
export default PlayerData;