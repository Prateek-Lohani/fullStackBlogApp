const Header = () => {
  return (
    <header className=" border-b-3 border-cyan-900 bg-black sticky top-0 z-50">
      <div className="px-5 py-2">
        <div className="flex justify-between items-center animate-fadeInUp">
          <div className="flex-1 min-w-0">
            <h1 className="title-font text-2xl md:text-3xl font-black text-cyan-500 mb-1 sm:mb-2 leading-tight truncate">
              The Post Room
            </h1>
            <p className="text-[10px] sm:text-xs md:text-xs text-cyan-500 uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] font-bold truncate">
              Stories Live Here
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-4">
            <button
              onClick={() => {}}
              className="btn-primary bg-cyan-700 text-white px-4 py-2 hover:cursor-pointer rounded-md font-bold text-[8px] sm:text-xs md:text-xs uppercase tracking-wider flex items-center gap-1 sm:gap-3 shadow-lg "
            >
              <span className="hidden sm:inline">Create New Post</span>
              <span className="sm:hidden">Create</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
