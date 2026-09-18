import { FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">
              Movie<span className="text-red-500">Explorer</span>
            </h2>

            {/* <p className="mt-1 text-sm text-gray-400">
              Discover your next favorite movie.
            </p> */}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/farez770"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white text-xl sm:text-2xl transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-500 text-xl sm:text-2xl transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="my-6 border-t border-gray-800" />

        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
