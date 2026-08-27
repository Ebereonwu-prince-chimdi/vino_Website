function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
    
      <a href="#" className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#5b5df0] text-sm font-bold text-white shadow-[0_8px_20px_rgba(91,93,240,0.25)]">
          Q
        </span>

        <span className="text-sm font-bold tracking-tight text-slate-950">
          Quotely
        </span>
      </a>

      <div className="hidden items-center gap-8 text-xs font-medium text-slate-600 sm:flex">
        <a href="#collection" className="transition hover:text-slate-950">
          Collection
        </a>

        <a href="#about" className="transition hover:text-slate-950">
          About
        </a>
      </div>

    
      <a
        href="#collection"
        className="rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#5b5df0]/40">
        Explore
      </a>
    </nav>
  );
}

export default Navbar;
