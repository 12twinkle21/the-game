import React from "react"; 
import { Routes, Route } from 'react-router-dom';

import Main from "./pages/main/Main";
import AllGames from "./pages/allGames/AllGames";
import DetailGamePage from "./pages/detailGamePage/DetailGamePage";
import DetailAchievementPage from "./pages/detailAchievementPage/DetailAchievementPage";

function App() {
  return (

    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/allGames' element={<AllGames/>}/>
      <Route exact path='/detailGamePage' element={<DetailGamePage/>}/>
      <Route exact path='/detailAchievementPage' element={<DetailAchievementPage/>}/>
    </Routes>
    

  );
}

export default App;
