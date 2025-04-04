interface pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => {
            if (pokemon.name === "pikachu") {
              alert("Pika pika !!!");
            }
            setPokemonName(pokemon.name);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
