import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import { navData } from "../data/navlinks.json";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar
        header="Poke Data"
        headerGradient="bg-gradient-to-r from-red-600 to-white"
        bgLinkColor="bg-fuchsia-600"
        textLinkColor="text-fuchsia-400"
        navLinks={navData}
      />
      <Outlet />
    </div>
  );
};

export default Root;
