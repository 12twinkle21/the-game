import React from 'react';

import styles from './ComparisonDirectLink.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import ComparisonAchItem from '../../components/comparisonAchItem/ComparisonAchItem';
import StatisticsCard from '../../components/statisticsCard/StatisticsCard';
import MainMenu from '../../components/mainMenu/MainMenu';

import { AppContext } from '../../App';

function Comparison() {

  const { darkTheme, visibleMainMenu } = React.useContext(AppContext);

  let comparisonItemFirst = [
    { 
      bgImg : "http://dummyimage.com/148x148/99cccc&text=+",
      achievementTitle: "Сообщество проекта",
      goldCount: "710/1250",
      ratingCount: "32/57",
      progress: 72,
      statistics: [
        {
          title: "Общий счет команды",
          progress: "100 / 5 610"
        },
        {
          title: "Время в игре",
          progress: "15 дней 12 часов"
        },
        {
          title: "Количество достижений",
          progress: "50"
        },
        {
          title: "Прогресс",
          progress: "72",
          activeProgress: true
        }
      ]
    }
  ];

  let comparisonItemSecond = [
    {
      bgImg : "http://dummyimage.com/148x148/99cccc&text=+",
      achievementTitle: "Сообщество проекта",
      goldCount: "250/1250",
      ratingCount: "12/57",
      progress: 25,
      statistics: [
        {
          title: "Общий счет команды",
          progress: "12 / 5 610"
        },
        {
          title: "Время в игре",
          progress: "1 месяц 10 дней 23 часа"
        },
        {
          title: "Количество достижений",
          progress: "0"
        },
        {
          title: "Прогресс",
          progress: "50",
          activeProgress: true
        }
      ]
    }
  ];

  return (

    <>
    {
      visibleMainMenu?
      <MainMenu/>
      :
      <div className={darkTheme? styles.darkComparison : styles.comparison}>
      <div className={styles.comparisonTop}>
        <Header/>
        <div className={styles.comparisonTop__btns}>
          <BackBtn text={'Назад'} link={'/detailGamePage'}/>
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
      <div className={styles.comparisonContentWrapper}>
      <div className={styles.comparisonContent}>
        <div className={styles.comparisonLists}>
          <div className={styles.comparisonLists__list}>
            <ComparisonAchItem comparisonItem={comparisonItemFirst}/>
          </div>
          <div className={styles.comparisonLists__list}>
            <ComparisonAchItem comparisonItem={comparisonItemSecond}/>
          </div>
        </div>
      </div>
      </div>
    </div>
    }
    </>
    
  )
}

export default Comparison;