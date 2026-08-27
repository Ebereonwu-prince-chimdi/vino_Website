function QuoteCard({ quote, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex min-h-48 flex-col rounded-2xl border border-black/6 bg-white p-5 text-left shadow-[0_8px_30px_rgba(24,24,35,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#5b5df0]/20 hover:shadow-[0_16px_35px_rgba(24,24,35,0.08)] focus:outline-none focus:ring-2 focus:ring-[#5b5df0]/40 focus:ring-offset-2">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#5b5df0]">
          {String(quote.id).padStart(2, "0")}
        </span>

        <span className="text-lg text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5b5df0]">
          ↗
        </span>
      </div>

    
      <p className="mt-7 flex-1 text-sm font-medium leading-6 tracking-[-0.01em] text-slate-800">
        “{quote.quote}”
      </p>

     
      <p className="mt-5 text-xs font-semibold text-slate-400">
        {quote.author}
      </p>
    </button>
  );
}

export default QuoteCard;
