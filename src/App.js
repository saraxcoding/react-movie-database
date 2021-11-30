import React from "react";

import Search from "./components/Search";

function App () {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=b042511f";
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
