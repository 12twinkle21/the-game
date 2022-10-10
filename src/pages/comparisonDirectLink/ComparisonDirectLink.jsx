import React from 'react';

import styles from './ComparisonDirectLink.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import MainMenu from '../../components/mainMenu/MainMenu';

import { AppContext } from '../../App';

function ComparisonDirectLink() {

   const { darkTheme, visibleMainMenu } = React.useContext(AppContext);

  return (
   
   <>
   {
      visibleMainMenu?
      <MainMenu/>
      :
      <div className={darkTheme? styles.darkComparisonDirectLink : styles.comparisonDirectLink}>
         <div className={styles.comparisonTop}>
        <Header/>
        <div className={styles.comparisonTop__btns}>
          <BackBtn text={'Назад'} link={'/'}/>
          <button>Перестать сравнивать</button>
        </div>
        <div className={styles.comparisonTop__title}>
          <h2>Сравнение</h2>
        </div>
        <div className={styles.comparisonTop__teams}>
          <div className={styles.comparisonTop__team}>
            <div className={styles.comparisonTop__teamsItem} style={{backgroundImage: 'url(http://dummyimage.com/282x282/a6a6ff&text=+)'}}>
              <p>Профиль команды</p>
              <h3>The GAME</h3>
            </div>
          </div>
          <div className={styles.comparisonTop__team}>
            <div className={styles.comparisonTop__teamsItem} style={{backgroundImage: 'url(http://dummyimage.com/282x282/99cccc&text=+)'}}>
              <p>Профиль команды</p>
              <h3>Ночные неожиданности</h3>
            </div>
          </div>
        </div>
         </div>
         <div className={styles.comparisonItems}>
          
         </div>
      </div>
   }
   </>

  )
}

export default ComparisonDirectLink;