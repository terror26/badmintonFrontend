import { BrowserRouter,Routes, Route } from "react-router-dom";
import { CategoriesTable, CategoryData } from "./CategoryData";

import React, { Component } from "react";
import NoMatch from "./NoMatch";
import Player from "./PlayerCard";
import Category from "./CategoryCard";
import CategoryCard from "./CategoryCard";
import PlayerData from "./PlayerData";
import PlayerCard from "./PlayerCard";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CategoryData />} />
        <Route exact path="/category/" element={<CategoryData />} /> 
        <Route exact path="/category/:categoryV" element={<CategoryCard />} />
        <Route exact path="/category/:categoryV/players" element={<PlayerData />} />
        <Route path="/category/:categoryV/players/:playerV" element={<PlayerCard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteApp;
