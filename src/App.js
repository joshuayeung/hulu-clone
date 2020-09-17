import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import Header from "./Header";
import Results from "./Results";
import requests from "./requests";

function App() {
const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
