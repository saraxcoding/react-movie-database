import React, { useState } from "react";
import axios from axios;

import Search from "./components/Search";
import Results from "./components/Results";

function App () {
    const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
    });
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=b042511f";

    const search = (e) => {
      if (e.key === "Enter") {
        axios(url + "&s=" + state.s).then(({ data }) => {
          //console.log(data);
          let result = data.Search;

          setState(prevState => {
            return { ...prevState, results: result }
          }) // stores information
        })
      }
    }

    const handleInput = (e) => {
      let s = e.target.value;

      setState(prevState => {
        return {...prevState, s: s}
      });

      //console.log(state.s);
    }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
