import React, { useEffect, useState } from "react";
import { getPokemonList, getPokemonDescription } from "../api/utils";
import "../styles/styles.css";
import Select from "../components/Select";
import Card from "../components/Card";
import Button from "../components/Button";

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
