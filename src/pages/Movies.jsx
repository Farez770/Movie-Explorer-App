import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import MoviesCards from "../components/MoviesCards";
import MovieTopText from "../components/MovieTopText";
import { BsSearch } from "react-icons/bs";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   const fetchMoviesData = async () => {
  //     try {
  //       const res = await fetch("https://api.tvmaze.com/shows");

  //       if (!res.ok) {
  //         throw new Error(res.message || "Somethig went wrong");
  //       }

  //       const data = await res.json();
  //       setMovies(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchMoviesData();
  // }, []);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        // setIsLoading(true);
        setError("");

        let url = "https://api.tvmaze.com/shows";

        if (searchText.trim()) {
          url = `https://api.tvmaze.com/search/shows?q=${searchText}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();

        if (searchText.trim()) {
          setMovies(data.map((item) => item.show));
        } else {
          setMovies(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, [searchText]);

  if (isLoading) {
    return (
      <p className="text-lg text-green-400 text-center mt-4">
        Data is Loading....
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }
  // console.log(movies);

  return (
    <div className="w-full ">
      <MovieTopText />
      {/* card sections with search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-2">
          <div className="w-2xl flex items-center gap-2 border border-gray-300 px-4 rounded-xl ">
            <label
              htmlFor="search"
              className="w-10 h-10 hover:bg-gray-200 flex justify-center items-center rounded-full transition-all"
            >
              <LuSearch className="text-lg cursor-pointer" />
            </label>
            <input
              id="search"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full py-2.5 rounded-xl text-lg text-gray-500 border-none outline-none cursor-pointer"
              placeholder="Search for a Movie title....."
            />
          </div>
          {/* <button className="bg-red-600 hover:bg-red-700 px-9 py-3 rounded-lg font-semibold transition text-white cursor-pointer">
            Search
          </button> */}
        </div>
        {/* =================================================================================== */}
        {/* The Below is the Card section-- */}
        {/* we use map method or apply map method in the data */}
        <div className="">
          <p className="text-lg text-gray-600 my-2 font-bold">
            {movies.length} Shows
          </p>

          {movies.length === 0 ? (
            <div>
              <div className="flex flex-col justify-center items-center h-40">
                <BsSearch className="text-3xl" />
                <p className="text-2xl font-bold text-red-500">
                  No movie found
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movies.map((movie) => (
                <MoviesCards
                  key={movie.id}
                  image={movie.image?.medium}
                  image2={movie.image?.original}
                  name={movie.name}
                  rating={movie.rating?.average}
                  year={movie.premiered}
                  summary={movie.summary}
                />
              ))}
            </div>
          )}
          {/* <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MoviesCards
                key={movie.id}
                image={movie.image?.medium}
                image2={movie.image?.original}
                name={movie.name}
                rating={movie.rating?.average}
                year={movie.premiered}
                summary={movie.summary}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Movies;
