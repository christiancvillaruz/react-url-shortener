import React from 'react';

const URLShortener = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3 h-screen">
      <div className="text-center p-4">
        <h1 className="p-2 font-anton text-center text-5xl">URL  <span className="text-amber-400">Shortener</span></h1>
        <p className="font-quicksand text-center italic">Shorten your link in just one click!</p>
      </div>
      <div className="bg-white rounded-sm p-4 w-6/12 font-quicksand text-slate-500">
        <form>
          <div class="mb-6">
            <label for="url-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="url" id="url-text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://www.example.com" required />
          </div>
          <button type="submit" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default URLShortener;