import React from "react";
/* import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook"; */
import { Calendar } from "./Calendar";
import { ListActivity } from "./components/ListActivity";

function App() {
  /* const pokemons = usePokemons(); */

  return (
    <main>
      <ListActivity />
      <Calendar />
      {/* <ListPokemons pokemons={pokemons} /> */}
    </main>
  );
}

export default App;
