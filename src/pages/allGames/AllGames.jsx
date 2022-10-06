import React from 'react';

import styles from './AllGames.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import GameCard from '../../components/gameCard/GameCard';
import MainMenu from '../../components/mainMenu/MainMenu';

import { AppContext } from '../../App';

function AllGames() {

  let AllGamesData = [
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    }
  ];

  const { visibleMainMenu, darkTheme } = React.useContext(AppContext);

  return (

    <>
    {
      visibleMainMenu?
      <MainMenu/>
      :
      <div className='maxContainer'>
      <div className={darkTheme? styles.darkAllGames : styles.allGames}>
        <Header/>
        <BackBtn text={'Назад'} link={'/'} allGames/>
        <div className={darkTheme? styles.darkAllGames__title : styles.allGames__title}>
          <h2>Все игры</h2>
          <div className={darkTheme? styles.darkAllGames__titleRight : styles.allGames__titleRight}>
            <p>Фильтр</p>
            <p>Сортировка</p>
          </div>
        </div>
        <div className={darkTheme? styles.darkAllGames__items : styles.allGames__items}>
          {
            AllGamesData.map((item, index) => <GameCard bgImage={item.bgImage} className={'allGamesCard'} key={index}/>)
          }
        </div>
      </div>
    </div>
    }
    </>

  )
}

export default AllGames;