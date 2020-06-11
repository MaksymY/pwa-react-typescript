import React, { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  id: number;
}

export const ListPokemons = () => {
  const [pokemons, setPokemon] = useState<Array<Pokemon>>([]);

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

  return (
    <ul>
      {pokemons &&
        pokemons.map((value) => {
          const { name, id } = value;
          return <li key={id}>{name}</li>;
        })}
    </ul>
  );
};
