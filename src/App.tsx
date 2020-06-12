import React from "react";
import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook";
import { Calendar } from "./Calendar";

function App() {
  const pokemons = usePokemons();

  return (
    <main>
      <ListPokemons pokemons={pokemons} />
      <Calendar />
    </main>
  );
}

export default App;
