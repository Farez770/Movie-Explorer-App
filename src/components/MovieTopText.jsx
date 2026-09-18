function MovieTopText() {
  return (
    <div>
      <div className=" mt-3 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-1 mb-2 ">
            {/* <h2 className="text-2xl text-blue-600 font-bold uppercase">
              Movie Listing
            </h2> */}
            <h1 className="text-xl  md:text-2xl lg:text-4xl font-extrabold ">
              Find Your Favorite <span className="text-red-500">Movies</span>
            </h1>
            <p className="text-lg text-gray-400">
              Search & Explore the Collection of movies around the world{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieTopText;
