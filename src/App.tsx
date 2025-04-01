import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <>
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  );
}

export default App;
