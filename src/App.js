import React from "react"; 
import { Routes, Route } from 'react-router-dom';

import Main from "./pages/main/Main";
import AllGames from "./pages/allGames/AllGames";
import DetailCard from "./pages/detailCard/DetailCard";

function App() {
  return (

    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/allGames' element={<AllGames/>}/>
      <Route exact path='/detail' element={<DetailCard/>}/>
    </Routes>
    

  );
}

export default App;
