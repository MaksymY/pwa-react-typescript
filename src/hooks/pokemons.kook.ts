import { useState, useEffect } from "react";

export const usePokemons = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);

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
  }, []);

  return pokemons;
};
