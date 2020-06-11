import React from "react";
import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook";

function App() {
  const pokemons = usePokemons();

  return (
    <main>
      <ListPokemons pokemons={pokemons} />
    </main>
  );
}

export default App;
