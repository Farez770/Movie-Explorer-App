function MovieDetailsModal({ image, name, rating, year, summary, onClose }) {
  return (
    // <div
    //   className="z-10 fixed inset-0 flex justify-center  bg-gray-950/60"
    //   onClick={(e) => e.stopPropagation()}
    // >
    // </div>
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-gray-700 bg-[#0d0d14] shadow-2xl"
      >
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[300px] md:h-[350px]">
          <img src={image} alt={name} className="h-full w-full object-fit" />

          {/* Dark overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/70 via-transparent to-black/20"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#182235]/95 text-2xl text-white shadow-lg transition duration-300 hover:bg-red-600"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-7">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{name}</h2>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-base text-white">
            <p className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <span className="text-gray-300">Rating:</span>
              <span className="font-semibold text-white">{rating}</span>
            </p>

            <span className="hidden h-6 w-px bg-gray-600 sm:block"></span>

            <p className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span className="text-gray-300">Release:</span>
              <span className="font-semibold text-white">{year}</span>
            </p>
          </div>

          <div className="mt-7">
            <h3 className="mb-3 text-xl font-bold text-white">Overview:</h3>

            <div
              className="text-base leading-6 text-white sm:text-lg sm:leading-6 text-justify"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>

          {/* Close Button */}
          <div className="mt-7 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg border border-[#f5a623] px-6 py-2.5 font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
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
