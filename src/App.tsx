import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    name: "Mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Charmander");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={() => setPokemonName("Charmander")}>
        Charmander
      </button>
      <button type="button" onClick={() => setPokemonName("Mew")}>
        Mew
      </button>
    </div>
  );
}

export default App;
