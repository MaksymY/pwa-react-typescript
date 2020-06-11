import React from "react";
type Props = {
  pokemon: Pokemon;
};
export const PokemonItem = ({ pokemon }: Props) => {
  return (
    <li>
      <p>{pokemon.name}</p>
    </li>
  );
};
