import { useNavigate } from "react-router-dom";

import { capitalizeString } from "../../utils/stringUtils";

import PokemonFullCardStats from "./PokemonFullCardStats";

export const PokemonFullCard = ({
  abilities,
  base_experience,
  base_stats,
  height,
  image,
  moves,
  name,
  types,
  weight,
}) => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col items-center space-y-10">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl px-16 mx-auto mb-10 flex flex-col">
          <h5 className="mb-6 text-3xl font-extrabold leading-none text-green-400 text-center">
            {capitalizeString(name)}
          </h5>
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="w-full object-center object-cover h-60 md:h-80"
          />
          <div>
            <p className="mb-2 text-orange-300 font-bold">Tipos:</p>
            <div className="mb-6 text-white flex flex-wrap justify-between">
              {types.map((type, idx) => (
                <span key={idx}>{capitalizeString(type)}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <PokemonFullCardStats
            title="Estadisticas Base"
            data={{
              type: "stats",
              payload: [
                ...base_stats,
                { stat_name: "base-experience", base_stat: base_experience },
              ],
            }}
          />
          <PokemonFullCardStats
            title="Movimientos"
            data={{ type: "moves", payload: moves }}
          />
          <PokemonFullCardStats
            title="Habilidades"
            data={{ type: "abilities", payload: abilities }}
          />
          <PokemonFullCardStats
            title="Fisiologia"
            data={{
              type: "table",
              payload: {
                headers: ["Dato", "Valor"],
                dataRows: [
                  ["Altura (decimetros)", height],
                  ["Peso (hectogramos)", weight],
                ],
              },
            }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => navigate("/pokemons")}
        className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-emerald-400 text-gray-900 hover:bg-emerald-300 w-1/2"
      >
        Volver
      </button>
    </section>
  );
};

export default PokemonFullCard;
