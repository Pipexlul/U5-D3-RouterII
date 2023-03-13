import PokemonPreviewCard from "./PokemonPreviewCard";

const PokemonList = ({ pokemonArray }) => {
  return (
    <section className="sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center sm:px-3 md:px-5 lg:px-7 sm:gap-3 md:gap-5 lg:gap-7">
      {pokemonArray.map((pokemon, idx) => (
        <PokemonPreviewCard
          key={idx}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </section>
  );
};

export default PokemonList;
