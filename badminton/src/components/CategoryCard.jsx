import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

// Show Each Category Card
const CategoryCard = (props) => {
  const [category, setCategory] = React.useState(null);
  var { categoryV } = useParams();
  const countryV = '';
  if (categoryV == null || categoryV === "") {
    categoryV = 'men_singles';
  }

  const encodedCountryValue = encodeURIComponent(countryV);
  const encodedCategoryValue = encodeURIComponent(categoryV);

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
          return <li><a href = {"/category/"+ categoryV + "/players/" + result.name}>{result.name} </a> </li>
        })
      : null;

  console.log(categoryV);
  return (
    <div>
      players of category {categoryV} is :<ul> {htmlcat}</ul>
    </div>
  );
};
export default CategoryCard;
