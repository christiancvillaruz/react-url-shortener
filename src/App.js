import { Helmet } from 'react-helmet';
import URLShortener from './components/URLShortener';
import './App.css';
import { useState } from 'react';
import ShortLink from './components/ShortLink';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <Helmet>
        <title>URL Shortener</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <URLShortener setInputValue={ setInputValue } />
          <div className="p-10">
            <ShortLink inputValue={ inputValue } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
