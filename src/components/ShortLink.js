import axios from "axios";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShortLink = ({ inputValue }) => {
  const [shortLink, setShortLink] = useState("");
  const [linkCopy, setLinkCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortLink(res.data.result.full_short_link);
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLinkCopy(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [linkCopy]);

  if (loading) {
    return <p className="font-quicksand">Please wait...</p>
  }

  if (error) {
    return <p className="font-quicksand">Something went wrong. Please try again later.</p>
  }

  console.log(shortLink);

  return (
    <>
      {shortLink && (
        <div className="font-quicksand flex items-center justify-between">
          <p className="p-2 m-4 border-2 border-amber-400">{ shortLink }</p>
          <CopyToClipboard 
            text={shortLink}
            onCopy = { () => setLinkCopy(true) }
          >
            <button type="button" className="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">COPY LINK!</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
}

export default ShortLink;