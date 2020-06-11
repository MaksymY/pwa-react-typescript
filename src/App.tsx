import React from "react";
import { ListPokemons } from "./components/ListPokemons";
import { usePokemons } from "./hooks/pokemons.kook";

function App() {
  /* const [pokemons, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    Promise.all(
      Array.from({ length: 100 }, (_, index) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then((value) =>
          value.json(),
        ),
      ),
    )
      .then((values) => {
        setPokemon(values);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */
  const pokemons = usePokemons();

  return (
    <main>
      <ListPokemons pokemons={pokemons} />
    </main>
  );
}

export default App;
