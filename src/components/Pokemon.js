import React, { useState, useEffect } from "react";
import "../index.css";
import funny from "../assets/grassyglide.gif";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function Pokemon({ pokemonName }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fetchData = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((response) => response.json())
      .then((response) => setPokemon(response))
      .then(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) {
    return (
      <div className="text-gray-100">
        {/* {console.log(pokemon)} */}
        <div className="text-sm font-mono subpixel-antialiased">
          <p className="font-bold text-base">
            <Link to={pokemon.name}>{capitalizeFirstLetter(pokemon.name)}</Link>
            <Routes>
              <Route to={pokemon.name} element={<PokemonCard />} />
            </Routes>
          </p>
          <div>
            <img src={pokemon.sprites.front_default} />
          </div>
          <p>
            {pokemon.types.map(function (t, idt) {
              return (
                <p className="flex-box font-semibold" key={idt}>
                  {capitalizeFirstLetter(t.type.name)}
                </p>
              );
            })}
          </p>
          <p>
            <p className="font-bold text-base">Abilities:</p>
            {pokemon.abilities.map(function (d, idx) {
              return (
                <p className="font-semibold" key={idx}>
                  {capitalizeFirstLetter(d.ability.name)}
                </p>
              );
            })}
          </p>
          <p>
            <p className="font-bold text-base">Stats:</p>
            {pokemon.stats.map(function (s, ids) {
              return (
                <li key={ids}>
                  {capitalizeFirstLetter(s.stat.name)} - {s.base_stat}
                </li>
              );
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="font-mono subpixel-antialiased text-3xl text-white">
        <p>pokemon loading...</p>
      </div>
    );
  }
}

export default Pokemon;
