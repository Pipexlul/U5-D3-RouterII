import { useLoaderData } from "react-router-dom";

import PokemonGenButton from "../components/PokemonBrowser/PokemonGenButton";

const PokemonBrowser = () => {
  const { results } = useLoaderData();

  console.log(results);

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
              />
            )
        )}
      </div>
    </main>
  );
};

export default PokemonBrowser;
