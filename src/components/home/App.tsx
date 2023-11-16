import React from 'react';
import './App.css';
import SearchBoxComponent from "../inputs/search-box/search-box-component";

function App() {
  return (
    <>
      <main className="max-w-4xl mx-auto mt-4 p-4">
        <div className="text-center my-5 flex flex-col">
          <h1 className="text-2xl text-black font-bold">
            Where are you located?
          </h1>
          <h1 className="text-base text-black mb-3 font-bold mt-10">
            So we know where to drop off the stuff
          </h1>
          <h3 className="text-sm mb-10  text-gray-400">
            We won't share your address <br/> with your ex (or whoever).
          </h3>
          <SearchBoxComponent />
        </div>
      </main>
    </>
  );
}

export default App;
