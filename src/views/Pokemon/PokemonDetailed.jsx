import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PokemonContext } from "../../contexts/PokemonContext";

import PokemonFullCard from "../../components/PokemonBrowser/PokemonFullCard";

import { capitalizeString } from "../../utils/stringUtils";

const PokemonDetailed = () => {
  const { pokemonData } = useContext(PokemonContext);

  const { genName, pokeName } = useParams();

  const [pokeData, setPokeData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const hasGenData = pokemonData[genName] !== undefined;

    if (!hasGenData) {
      setErrorMessage(
        "Primero seleccione la generación a la que corresponde su pokemon desde la vista Pokemons para cargar la data de los pokemones correspondientes"
      );

      return;
    }

    const pokemonDataInDB = pokemonData[genName].find(
      (pokemon) => pokemon.name === pokeName
    );
    if (!pokemonDataInDB) {
      setErrorMessage(
        `No se encontró el pokemon ${pokeName} en la generación ${capitalizeString(
          genName
        )}. ¿Seguro que escribiste el nombre bien?`
      );

      return;
    }

    setPokeData(pokemonDataInDB);
  }, [genName, pokeName]);

  return (
    <main className="overflow-hidden bg-gray-900 flex flex-col items-center space-y-5">
      {errorMessage ? (
        <>
          <h2 className="text-orange-400 text-4xl">¡Error!</h2>
          <p className="text-white text-3xl px-6 sm:px-10 md:px-20 lg:px-40">
            {errorMessage}
          </p>
        </>
      ) : (
        pokeData && <PokemonFullCard {...pokeData} />
      )}
    </main>
  );
};

export default PokemonDetailed;
