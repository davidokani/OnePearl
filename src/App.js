import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./components/Pages/landing/Landing";
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Land />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
