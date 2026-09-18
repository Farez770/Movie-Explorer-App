import { NavLink } from "react-router";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-br from-red-950 via-gray-950 to-purple-950" />

      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-red-600/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-[calc(100vh-64px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <p className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-[0.3em] uppercase text-red-500">
            🎬 Discover Movies
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Explore the World of <span className="text-red-500">Movies</span>
          </h1>

          <p className="mt-5 sm:mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            Explore and discover your favorite movies from around the world.
            Find exciting stories, amazing characters, and unforgettable
            cinematic experiences.
          </p>

          <div className="mt-8 sm:mt-10">
            <NavLink
              to="/movies"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:bg-red-700 hover:scale-105"
            >
              Explore Now
              <span className="ml-2">→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
