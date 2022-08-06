import React from "react";

function PokemonCard({ pokemon }) {
  return <div className="text-white">{pokemon.name}</div>;
}

export default PokemonCard;
