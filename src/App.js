// Modules
// import React, { useEffect, useState } from "react";
// import { getPokemonList, getPokemonDescription } from "../api/utils";
// Styles
import "../styles/styles.css";
// Components
import Select from "../components/Select";
import Card from "../components/Card";
import Button from "../components/Button";
// State Changes

// Init
function App() {
  return (
    <div className="app">
      <Select />
      <Card />
      <Button className="prev" />
      <Button className="next" />
    </div>
  );
}

export default App;
