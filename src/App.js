// Modules
import React, { useEffect, useState } from "react";
import { getPokemonList } from "../api/utils";
// Styles
import "../styles/styles.css";
// Components
import Select from "../components/Select";
import Card from "../components/Card";
import Button from "../components/Button";
// Init
function App() {
  // State Changes
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(null)
  // Side Effect
  useEffect(() => {
    async function fetchData() {
      const apiData1 = await getPokemonList();
      setPokemonList(apiData1);
    }
    fetchData();
  }, []);
  // Render
  return (
    <div className="app">
      {/* TODO Change State update Card component prop */}
      <Select
        options={pokemonList}
        onChange={(e) => {
          console.log(e.target);
          setPokemonIndex(e.target.value);
        }}
      />
      {pokemonIndex}
      <Card props={{id: pokemonIndex, imgURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png', title:'bulbasaur', desc:''}}/>
      <div className="controls">
        <Button className="prev" onClick={(e)=>{console.log(e)}} />
        <Button className="next" onChange />
      </div>
    </div>
  );
}

export default App;
