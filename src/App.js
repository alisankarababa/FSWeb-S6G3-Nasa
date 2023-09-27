import React from "react";
import "./App.css";
import Header from "./layout/Header/Header";
import Seperator from "./layout/Seperator/Seperator";
import Main from "./layout/Main/Main";
import Gallery from "./layout/Gallery/Gallery";


const appTitle = "ASTRONOMY PICTURE OF THE DAY"

function App() {
  return (
    <div className="App">
        <Header title={appTitle}/>
        <Seperator/>
        <Main/>
        <Seperator/>
        <Gallery/>
    </div>
  );
}

export default App;
