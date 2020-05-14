import React from "react";
// import "./App.css";
import NavBar from "./components/navComponents/NavBar";
import SearchBar from "./components/navComponents/searchBar/SearchBar";
import HomePage from "./components/homepage/HomePage";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Test name={null}>go</Test> */}
    </div>
  );
}

export default App;
