import { Link, NavLink } from "react-router-dom";

import ShinyNavLink from "./ShinyNavLink";

const Navbar = ({
  header,
  headerGradient,
  navLinks,
  bgLinkColor,
  textLinkColor,
}) => {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-2xl font-extrabold bg-clip-text text-transparent ${headerGradient}`}
        >
          <Link to="/home">{header}</Link>
        </h1>

        <div className="flex flex-1 items-center justify-between">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ label, path }, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to={path}>
                      {({ isActive }) => {
                        return (
                          <ShinyNavLink
                            label={label}
                            bgColor={bgLinkColor}
                            labelColor={textLinkColor}
                            isActive={isActive}
                          />
                        );
                      }}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
