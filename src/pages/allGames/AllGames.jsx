import React from 'react';

import styles from './AllGames.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import GameCard from '../../components/gameCard/GameCard';

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

  return (

    <div className='maxContainer'>
      <div className={styles.allGames}>
        <Header/>
        <BackBtn text={'Илья Абрамов'} link={'/'} white/>
        <div className={styles.allGames__title}>
          <h2>Все игры</h2>
          <div className={styles.allGames__titleRight}>
            <p>Фильтр</p>
            <p>Сортировка</p>
          </div>
        </div>
        <div className={styles.allGames__items}>
          {
            AllGamesData.map((item) => <GameCard bgImage={item.bgImage} className={'allGamesCard'}/>)
          }
        </div>
      </div>
    </div>

  )
}

export default AllGames;