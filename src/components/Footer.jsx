import FooterIconLink from "./FooterIconLink";

const Footer = () => {
  return (
    <footer className="bg-gray-700 mt-auto">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Felipe Guajardo
          </h2>
          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            Desafio Latam 2023.
          </p>
        </div>
        <div className="pt-8 mt-1 border-t border-gray-800 sm:flex sm:items-center sm:justify-between">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 text-sm lg:justify-end">
              <li>
                <a
                  href="https://desafiolatam.com/"
                  className="transition hover:opacity-75 text-gray-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sitio Desafio Latam
                </a>
              </li>
            </ul>
          </nav>

          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            <li>
              <FooterIconLink
                link="https://github.com/Pipexlul"
                size={30}
                path="github"
              />
            </li>
            <li>
              <FooterIconLink
                link="https://www.linkedin.com/in/felipe-guajardo-39233523a/"
                size={30}
                path="linkedin"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
