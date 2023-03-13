import { createContext, useState, useReducer, useEffect } from "react";

import { getPokemonDataFromSpecies } from "../utils/pokemonUtils";

const PokemonContext = createContext(null);

const PokemonContextProvider = ({ children }) => {
  const [genInformation, setGenInformation] = useState(null);
  const [isLoadingGen, setIsLoadingGen] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [lastGen, setLastGen] = useState(null);

  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case "SET_POKEDATA_GEN":
        return { ...state, [action.genLabel]: action.payload };

      case "DELETE_POKEDATA_GEN": {
        const stateCopy = structuredClone(state);
        delete stateCopy[action.genLabel];

        return stateCopy;
      }

      case "SET_POKEDATA": {
        const stateCopy = structuredClone(state);

        if (stateCopy[action.genLabel] === undefined) {
          stateCopy[action.genLabel] = [];
        }

        stateCopy[action.genLabel].push(action.payload);

        return stateCopy;
      }

      case "DELETE_POKEDATA": {
        const stateCopy = structuredClone(state);

        if (stateCopy[action.genLabel] === undefined) {
          console.log(
            `Tried to delete pokemon ${action.payload} from pokemonData in generation ${action.genLabel} but generation could not be found`
          );
          return state;
        }

        stateCopy[action.genLabel] = stateCopy[action.genLabel].filter(
          (pokeData) => pokeData.name !== action.payload
        );

        return stateCopy;
      }

      default:
        return state;
    }
  };

  const [pokemonData, pokemonDataDispatch] = useReducer(pokemonReducer, {});

  useEffect(() => {
    if (lastGen) {
      setGenInformation(pokemonData[lastGen]);
      setIsLoadingGen(false);
    }
  }, [pokemonData]);

  const handleGenButtonClick = async (keyName, genUrl) => {
    try {
      if (!firstClick) {
        setFirstClick(true);
      }

      setLastGen(keyName);

      if (pokemonData[keyName] !== undefined) {
        setGenInformation(pokemonData[keyName]);
        return;
      }

      setIsLoadingGen(true);
      const response = await fetch(genUrl);
      if (!response.ok) {
        throw new Response("No pudimos contactar el endpoint de generaciones", {
          status: response.status,
          statusText: response.statusText,
        });
      }
      const genInfo = await response.json();
      const pokeSpeciesURLs = genInfo.pokemon_species.map(
        (pokemon) => pokemon.url
      );

      const pokeDataPromises = pokeSpeciesURLs.map((url) =>
        getPokemonDataFromSpecies(url)
      );
      const pokeDataResponses = await Promise.allSettled(pokeDataPromises);

      const validPokemonsData = pokeDataResponses
        .filter((response) => response.status === "fulfilled")
        .map((response) => response.value);
      const failedPokemonsData = pokeDataResponses
        .filter((response) => response.status === "rejected")
        .map((response) => response.reason);

      if (failedPokemonsData.length) {
        console.warn("Some pokemon endpoints calls failed:");
        failedPokemonsData.forEach(console.warn);
        // TODO: Add better error descriptions for failed pokemon data
      }

      if (validPokemonsData.length) {
        pokemonDataDispatch({
          type: "SET_POKEDATA_GEN",
          payload: validPokemonsData,
          genLabel: genInfo.name,
        });
      }
    } catch (error) {
      setIsLoadingGen(false);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        genInformation,
        isLoadingGen,
        handleGenButtonClick,
        firstClick,
        pokemonData,
        pokemonDataDispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
export { PokemonContext };
