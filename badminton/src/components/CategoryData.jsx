import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

// Players data related to this category
export const CategoryData = () => {
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    console.log("making api call");
    fetch(`http://localhost:8080/categories`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        return setCategory(data);
      });
  }, []); // useEffect will triggerred only once like componentDidMount.

  const htmlcat = 
    category !== null
      ? category.data.map((result) => {
          console.log(result.id);
          console.log(result.name);
          return (
            <li>
              <a href={"/category/" + result.name + ""}>{result.name} </a>{" "}
            </li>
          );
        })
      : null;

  return (
    <div>
      value is : <ul> {htmlcat}</ul>
    </div>
  );
};
