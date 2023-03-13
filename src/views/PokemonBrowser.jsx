import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import PokemonGenButton from "../components/PokemonBrowser/PokemonGenButton";
import FetcherComponent from "../components/Meta/FetcherComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import PokemonList from "../components/PokemonBrowser/PokemonList";

import { PokemonContext } from "../contexts/PokemonContext";

const PokemonBrowser = () => {
  const { results } = useLoaderData();

  const { genInformation, isLoadingGen, firstClick } =
    useContext(PokemonContext);

  return (
    <main className="overflow-hidden bg-gray-900 flex flex-col gap-y-3 items-center">
      <h3 className="mb-0 sm:mb-5 inline-block text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-white text-center">
        Seleccione una Generación
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:place-items-center sm:w-3/4 gap-y-5">
        {results.map(
          (genData, idx) =>
            genData !== undefined && (
              <PokemonGenButton
                key={idx}
                label={`Gen ${genData.name.slice(11).toUpperCase()}`}
                fullName={genData.name}
                url={genData.url}
              />
            )
        )}
      </div>

      {firstClick && genInformation !== undefined && (
        <FetcherComponent
          isLoading={isLoadingGen}
          loadingComp={
            <LoadingSpinner
              fillColor="fill-red-400"
              width="w-20"
              height="h-20"
            />
          }
          dataComp={<PokemonList pokemonArray={genInformation} />}
        />
      )}
    </main>
  );
};

export default PokemonBrowser;
