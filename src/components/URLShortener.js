import React, { useState } from 'react';

const URLShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="w-3/6">
      <div className="text-center p-4">
        <h1 className="p-2 font-anton text-center text-5xl">URL  <span className="text-amber-400">Shortener</span></h1>
        <p className="font-quicksand text-center italic">Shorten your link in just one click!</p>
      </div>
      <div className="bg-white rounded-sm p-6 h-44 font-quicksand text-slate-500">
        <form>
          <div class="mb-6">
            <label for="url-text" className="block mb-2 text-sm font-medium text-gray-900">Your link</label>
            <input type="url" id="url-text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://www.example.com"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
             />
          </div>
          <button type="button" className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={ handleClick }>Shorten!</button>
        </form>
      </div>
    </div>
  );
}

export default URLShortener;