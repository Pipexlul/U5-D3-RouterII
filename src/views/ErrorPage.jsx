import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="grid h-screen px-4 place-content-center bg-gray-900">
      <div className="text-center">
        <div className="font-black text-xl md:text-3xl lg:text-9xl text-gray-700">
          {isRouteErrorResponse(error) ? (
            <>
              <h3>{"Ocurrió un error :("}</h3>
              <p>{`Status: ${error.status}`}</p>
              <p>{`Status Text: ${error.statusText}`}</p>
              {error.data?.message && <p>{error.data.message}</p>}
            </>
          ) : (
            <h3>{"Lo lamentamos, ocurrio un error"}</h3>
          )}
        </div>
        <Link
          to={"/home"}
          className="inline-block px-5 py-3 mt-20 text-sm font-medium text-white bg-emerald-600 rounded hover:bg-emerald-700 focus:outline-none focus:ring transition"
        >
          Ir a página principal
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
