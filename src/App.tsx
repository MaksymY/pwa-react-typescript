import React from "react";
import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook";
import { Calendar } from "./Calendar";
import { ListActivity } from "./components/ListActivity";

function App() {
  const pokemons = usePokemons();

  return (
    <main>
      <Calendar />
      <ListPokemons pokemons={pokemons} />
      <ListActivity />
    </main>
  );
}

export default App;
