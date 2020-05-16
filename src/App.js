import React, { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Results from './Components/Results';
import Search from './Components/Search';
import Popup from './Components/Popup';

function App() {
  const apiUrl = "http://www.omdbapi.com/?apikey=190a1e19";
  const [state, setState] = useState({
    searchText: '',
    results: [],
    selected: {}
  });
  // const [selected, setSelected] = useState({});

  const inputChangeHandler = (evt) => {
    let searchText = evt.target.value;
    setState(prevState => {
      return { ...prevState, searchText: searchText }
    });
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
      axios(apiUrl + "&s=" + state.searchText)
        .then(({ data }) => {
          let results = data.Search;
          console.log(results)
          setState(prevState => {
            return { ...prevState, results: results }
          });
        })
    }
  };
  const openPopup = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
      console.log(state.selected, state.selected.Title);
    });
  };
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search change={inputChangeHandler}
          search={search} />
        <Results results={state.results}
          openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;