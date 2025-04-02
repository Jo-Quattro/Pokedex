interface PokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: PokemonProps) {
  return imgSrc ? (
    <figure>
      <img src={imgSrc} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  ) : (
    <figure>
      <p>???</p>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
