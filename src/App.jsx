import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./views/Home";
import Root from "./views/Root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: null, // TODO: Add Error Page
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
