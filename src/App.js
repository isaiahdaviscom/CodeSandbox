// Modules
import React, { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpriteUrl
} from "../api/utils";
// Styles
import "../styles/styles.css";
// Components
import Select from "../components/Select";
import Card from "../components/Card";
import Button from "../components/Button";
// Init
function App() {
  // State Changes
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = getPokemonList();
    }
    fetchData();
  });
  // Render
  return (
    <div className="app">
      <Select options={getPokemonList} />
      <Card />
      <div className="controls">
        <Button className="prev" onChange />
        <Button className="next" onChange />
      </div>
    </div>
  );
}

export default App;
