const PokemonPreviewCard = ({ name, image, types }) => {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {name.slice(0, 1).toUpperCase() + name.slice(1)}
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
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300"
        >
          Ver Más
        </button>
      </div>
    </div>
  );
};

export default PokemonPreviewCard;
