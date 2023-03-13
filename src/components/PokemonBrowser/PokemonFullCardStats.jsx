const getDataReactElement = (data) => {
  switch (data.type) {
    case "plaintext": {
      return <p className="text-white text-md">{data.payload}</p>;
    }
    case "table": {
      return (
        <table className="w-3/4">
          <thead>
            <tr className="bg-emerald-600">
              {data.payload.headers.map((header, idx) => {
                return (
                  <th key={idx} className="text-white font-bold">
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.payload.dataRows.map((row, idx) => {
              return (
                <tr
                  key={idx}
                  className="odd:bg-emerald-700 even:bg-emerald-600"
                >
                  {row.map((cell, cellIdx) => {
                    return (
                      <td className="text-white text-md" key={cellIdx}>
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "stats": {
      return (
        <table className="w-3/4">
          <thead>
            <tr className="bg-emerald-600">
              <th className="text-white text-bold">Estadistica</th>
              <th className="text-white text-bold">Valor Base</th>
            </tr>
          </thead>
          <tbody>
            {data.payload.map((stat, idx) => (
              <tr key={idx} className="odd:bg-emerald-700 even:bg-emerald-600">
                <td className="text-white text-md">{stat.stat_name}</td>
                <td className="text-white text-md">{stat.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    case "moves":
    case "abilities": {
      return (
        <div className="flex flex-wrap text-white gap-2 overflow-y-scroll max-h-40">
          {data.payload.map((elemName, idx) => {
            return (
              <span key={idx} className="bg-emerald-900 rounded-md p-1">
                {elemName}
              </span>
            );
          })}
        </div>
      );
    }
  }
};

const PokemonFullCardStats = ({ title, data }) => {
  return (
    <div className="w-full">
      <h6 className="mb-2 font-semibold leading-5 text-emerald-300">{title}</h6>
      {getDataReactElement(data)}
    </div>
  );
};

export default PokemonFullCardStats;
