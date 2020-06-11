import React from "react";
import { PokemonItem } from "./PokemonItem";

type Props = {
  pokemons: Array<Pokemon>;
};

export const ListPokemons = ({ pokemons }: Props) => {
  return (
    <ul>
      {pokemons &&
        pokemons.map((pokemon) => {
          return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
        })}
    </ul>
  );
};
