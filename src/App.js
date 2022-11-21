import React from "react"; 
import { Routes, Route } from 'react-router-dom';

import Main from "./pages/main/Main";
import AllGames from "./pages/allGames/AllGames";
import DetailGamePage from "./pages/detailGamePage/DetailGamePage";
import DetailAchievementPage from "./pages/detailAchievementPage/DetailAchievementPage";
import Comparison from "./pages/comparison/Comparison";
import ComparisonDirectLink from "./pages/comparisonDirectLink/ComparisonDirectLink";

export const AppContext = React.createContext({});

function App() {

const [darkTheme, setDarkTheme] = React.useState(false);

const toggleDarkTheme = () =>{
  setDarkTheme(!darkTheme);
}

document.body.style.backgroundColor = !darkTheme? '#F0F2F5' : '#0D0D0D';

const [visibleMainMenu, setVisibleMainMenu] = React.useState(false);

const onVisibleMainMenu = () =>{
  setVisibleMainMenu(!visibleMainMenu);
}

const [backLink, setBackLink] = React.useState('/');

const onSetBackLink = (link) =>{
  setBackLink(link)
}

let [activeBlock, setActiveBlock] = React.useState('actionFeed')

let onSelectContentBlock = (block) =>{
  setActiveBlock(block);
}

const [isOnline] = React.useState(true);
const [whoConnect, setWhoConnect] = React.useState('user');

  return (

    <AppContext.Provider value={{darkTheme, toggleDarkTheme, visibleMainMenu, onVisibleMainMenu, isOnline, whoConnect, setWhoConnect, backLink, onSetBackLink, onSelectContentBlock, activeBlock}}>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/allGames' element={<AllGames/>}/>
      <Route exact path='/detailGamePage' element={<DetailGamePage/>}/>
      <Route exact path='/detailAchievementPage' element={<DetailAchievementPage/>}/>
      <Route exact path='/comparison' element={<Comparison backBtnLink='/detailGamePage'/>}/>
      <Route exact path='/comparisonDirectLink' element={<ComparisonDirectLink/>}/>
    </Routes>
     </AppContext.Provider>
     
  );
}

export default App;
