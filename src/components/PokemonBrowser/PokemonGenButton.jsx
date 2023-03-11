import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { randomColor } from "../../utils/colorUtils";

const PokemonGenButton = ({ label, fullName }) => {
  const mainRef = useRef(null);
  const navigate = useNavigate();

  const bgColor = randomColor(null, 60, 20);

  useEffect(() => {
    mainRef.current.style.setProperty("--random-color", bgColor);
  }, []);

  return (
    <button
      ref={mainRef}
      onClick={() => navigate(`/pokemons/${fullName}`)}
      className="group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 before:[background-color:var(--random-color)] border-none"
    >
      <span className="relative z-0 text-black font-semibold group-hover:text-gray-200 transition ease-in-out duration-500">
        {label}
      </span>
    </button>
  );
};

export default PokemonGenButton;
