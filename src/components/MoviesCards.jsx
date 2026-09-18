import { useState } from "react";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import MovieDetailsModal from "./MovieDetailsModal";

function MoviesCards({ image, image2, name, rating, year, summary }) {
  const [isClick, setIsCLick] = useState(false);

  const handleCloseModal = () => {
    setIsCLick(false);
  };

  return (
    <div>
      <div className="w-full max-w-[288px] overflow-hidden rounded-xl  bg-[#0d0d14] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl">
        <div className="relative h-107.5 w-full overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />

          <div className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-md bg-[#101315]/90 px-3 py-1.5 text-sm font-medium text-[#f5a623]">
            <FaStar className="text-sm" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="px-5 py-5">
          <h2 className="truncate font-serif text-xl font-medium text-white">
            {name}
          </h2>

          <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <FaStar className="text-[#f5a623]" />
              <span>{rating}</span>
            </div>

            <span className="h-4 w-px bg-gray-700"></span>

            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-gray-400" />
              <span>{year}</span>
            </div>
          </div>

          <button
            onClick={() => setIsCLick(true)}
            className="mt-5 w-full rounded-md border border-[#a66b16] bg-transparent px-4 py-3 text-base font-medium text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
          >
            See Details
          </button>
        </div>
      </div>

      {/* ============================================== */}
      {isClick && (
        <MovieDetailsModal
          image={image2}
          name={name}
          rating={rating}
          year={year}
          summary={summary}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default MoviesCards;
