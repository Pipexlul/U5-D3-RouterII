import { json } from "react-router-dom";

export const generationsLoader = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/generation/");

  if (!response.ok) {
    throw new Response("No pudimos contactar el endpoint de generaciones", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const generations = await response.json();

  return generations;
};
