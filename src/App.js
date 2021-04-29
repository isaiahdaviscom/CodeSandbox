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
    async function LogData() {
      // setState =(getPokemonList());
      bArr(getPokemonDescription(0));
      cArr(getPokemonSpriteUrl(1));
    }
    LogData();
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
