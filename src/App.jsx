import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainQuote from "./components/MainQuote";
import QuoteCollection from "./components/QuoteCollection";

const RANDOM_URL = "https://dummyjson.com/quotes/random";
const COLLECTION_URL = "https://dummyjson.com/quotes?limit=9";

function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const [quoteLoading, setQuoteLoading] = useState(true);
  const [collectionLoading, setCollectionLoading] = useState(true);

  const [quoteError, setQuoteError] = useState("");
  const [collectionError, setCollectionError] = useState("");

  
  const fetchRandomQuote = async () => {
    setQuoteLoading(true);
    setQuoteError("");

    try {
      const response = await fetch(RANDOM_URL);

      if (!response.ok) {
        throw new Error("Unable to fetch a new quote.");
      }

      const data = await response.json();

      setQuote(data);
    } catch (error) {
      setQuoteError(error.message || "Something went wrong.");
    } finally {
      setQuoteLoading(false);
    }
  };

  const fetchCollection = async () => {
    setCollectionLoading(true);
    setCollectionError("");

    try {
      const response = await fetch(COLLECTION_URL);

      if (!response.ok) {
        throw new Error("Unable to load the quote collection.");
      }

      const data = await response.json();

      setQuotes(data.quotes);
    } catch (error) {
      setCollectionError(error.message || "Something went wrong.");
    } finally {
      setCollectionLoading(false);
    }
  };

 
  useEffect(() => {
    fetchRandomQuote();
    fetchCollection();
  }, []);

 
  const handleSelectQuote = (selectedQuote) => {
    setQuote(selectedQuote);
    setQuoteError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[28px] border border-black/5 bg-[#f7f8fc] shadow-[0_20px_70px_rgba(24,24,35,0.08)]">
          <Navbar />

          <div className="px-5 pb-14 pt-14 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pt-24">
            <MainQuote
              quote={quote}
              loading={quoteLoading}
              error={quoteError}
              onNewQuote={fetchRandomQuote}
            />

            <div className="mx-auto mt-20 max-w-6xl border-t border-black/8 pt-10 sm:mt-24">
              <QuoteCollection
                quotes={quotes}
                loading={collectionLoading}
                error={collectionError}
                onSelectQuote={handleSelectQuote}
                onRetry={fetchCollection}
              />
            </div>
          </div>
        </section>

        <footer className="px-2 py-7 text-center text-xs text-slate-500">
          Built with React, Tailwind CSS & DummyJSON
        </footer>
      </div>
    </main>
  );
}

export default App;
