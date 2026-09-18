function MovieDetailsModal({ image, name, rating, year, summary, onClose }) {
  return (
    <div
      onClick={onClose}
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[calc(100%-30px)] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-full xl:max-w-5xl max-h-[94vh] overflow-y-auto rounded-xl sm:rounded-2xl border border-gray-700 bg-[#0d0d14] shadow-2xl"
      >
        {/* Image */}
        <div className=" relative w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[400px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#0d0d14]/80 via-transparent to-black/20"></div>

          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#182235]/95 text-xl sm:text-2xl text-white shadow-lg transition duration-300 hover:bg-red-600"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
          <h2 className="text-2xlsm:text-3xl md:text-4xl font-bold leading-tight text-white">
            {name}
          </h2>

          {/* Rating + Release */}
          <div className=" mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 text-sm sm:text-base text-white">
            <p className="flex items-center gap-2">
              <span>⭐</span>
              <span className="text-gray-400">Rating:</span>
              <span className="font-semibold">{rating || "N/A"}</span>
            </p>

            <span className="hidden sm:block h-6 w-px bg-gray-600"></span>

            <p className="flex items-center gap-2">
              <span>📅</span>
              <span className="text-gray-400">Release:</span>
              <span className="font-semibold">{year || "N/A"}</span>
            </p>
          </div>

          {/* Overview */}
          <div className="mt-6 sm:mt-7">
            <h3 className="mb-3 text-lg sm:text-xl font-bold text-white">
              Overview:
            </h3>

            <div
              className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white text-justify"
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            />
          </div>

          {/* Close Button */}
          <div className="mt-6 sm:mt-7 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg border border-[#f5a623] px-5 py-2 sm:px-6 sm:py-2.5 text- sm:text-base font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;
