import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./views/Home";
import Root from "./views/Root";
import PokemonBrowser from "./views/PokemonBrowser";
import PokemonDetailed from "./views/Pokemon/PokemonDetailed";
import ErrorPage from "./views/ErrorPage";

import { generationsLoader } from "./loaders/PokemonLoaders";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/pokemons",
        element: <PokemonBrowser />,
        loader: generationsLoader,
      },
      {
        path: "/pokemons/:genName/:pokeName",
        element: <PokemonDetailed />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
