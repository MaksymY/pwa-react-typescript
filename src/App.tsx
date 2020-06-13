import React from "react";
import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook";
import { Calendar } from "./Calendar";

function App() {
  const pokemons = usePokemons();

  return (
    <main>
      <Calendar />
      <ListPokemons pokemons={pokemons} />
    </main>
  );
}

export default App;
