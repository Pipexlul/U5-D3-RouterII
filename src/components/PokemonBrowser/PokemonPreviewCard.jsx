import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PokemonContext } from "../../contexts/PokemonContext";

import { capitalizeString } from "../../utils/stringUtils";

const PokemonPreviewCard = ({ name, image, types }) => {
  const navigate = useNavigate();

  const { lastGen } = useContext(PokemonContext);

  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {capitalizeString(name)}
          </h2>
          <div>
            <p className="font-bold">Tipos:</p>
            <div className="bg-gray-500/20 flex flex-col sm:flex-row sm:flex-wrap gap-1 justify-between">
              {types.map((type, idx) => (
                <span key={idx}>{type}</span>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => navigate(`/pokemons/${lastGen}/${name}`)}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300"
        >
          Ver Más
        </button>
      </div>
    </div>
  );
};

export default PokemonPreviewCard;
