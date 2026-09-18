import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="text-xl sm:text-2xl md:text-3xl rounded-lg flex items-center justify-center">
              🎬
            </div>

            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              Movie<span className="text-red-500"> Explorer</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/movies"
              className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-lg font-semibold transition"
            >
              Browse Movies
            </NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-200 hover:text-white"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-5 pt-3 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "text-red-500 bg-gray-900"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/movies"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "text-red-500 bg-gray-900"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/movies"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 text-center bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold transition"
              >
                Browse Movies
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
