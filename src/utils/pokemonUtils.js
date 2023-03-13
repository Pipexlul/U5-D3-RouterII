export const getPokemonDataFromSpecies = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Response("No pudimos contactar el endpoint de especies", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const speciesInfo = await response.json();
  const defaultVariety = speciesInfo.varieties.find(
    (variety) => variety.is_default
  );

  if (!defaultVariety) {
    throw new Response(
      `No se pudo encontrar la variedad por defecto de la especie de pokemon: ${speciesInfo.name}`,
      {
        status: response.status,
        statusText: response.statusText,
      }
    );
  }

  const pokemonResponse = await fetch(defaultVariety.pokemon.url);
  if (!pokemonResponse.ok) {
    throw new Response(
      `No se pudo contactar el endpoint de pokemon ${defaultVariety.pokemon.name}`,
      {
        status: pokemonResponse.status,
        statusText: pokemonResponse.statusText,
      }
    );
  }

  const pokemonInfo = await pokemonResponse.json();

  const finalData = {
    name: pokemonInfo.name,
    image: pokemonInfo.sprites.front_default,
    types: pokemonInfo.types.map((typeData) => typeData.type.name),
    abilities: pokemonInfo.abilities.map(
      (abilityData) => abilityData.ability.name
    ),
    base_experience: pokemonInfo.base_experience,
    moves: pokemonInfo.moves.map((moveData) => moveData.move.name),
    base_stats: pokemonInfo.stats.map((statData) => {
      return {
        base_stat: statData.base_stat,
        stat_name: statData.stat.name,
      };
    }),
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
  };

  return finalData;
};
