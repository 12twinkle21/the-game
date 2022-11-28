import React from 'react';

import styles from './Comparison.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import ComparisonAchItem from '../../components/comparisonAchItem/ComparisonAchItem';
import StatisticsCard from '../../components/statisticsCard/StatisticsCard';
import MainMenu from '../../components/mainMenu/MainMenu';
import ComparisonAchievements from '../../components/comparisonAchievements/ComparisonAchievements';

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
          progress: "72%",
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
          progress: "50%",
          activeProgress: true
        }
      ]
    }
  ];

  let comparisonAllAchievementsData = [
    {
      title: "Первые нейроны",
      gold : 50,
      info : "Принять участие Командой в тренажере “Викиум” в течение одной недели",
      progressDate1 : "24.09.2021",
      progress1 : 60,
      progressDate2 : "24.09.2021",
      progress2 : 0
    },
    {
      title: "Проба пера",
      gold : 10,
      info : "Опубликовать 10 публикаций (текст) в сообществе Бренда",
      progressDate1 : "24.09.2021",
      progress1 : 100,
      progressDate2: "24.09.2021",
      progress2: 20
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
              <div className={styles.cancelBtn}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2582 13.4191L13.4183 12.259C13.5214 12.1558 13.6245 12.1558 13.7276 12.259L27.3394 25.8708C27.4426 25.9739 27.4426 26.077 27.3394 26.1801L26.1794 27.3402C26.0762 27.4433 25.9731 27.4433 25.87 27.3402L12.2582 13.7284C12.1551 13.6253 12.1551 13.5222 12.2582 13.4191Z" fill="#FF4D4F"/>
                  <path d="M12.5675 25.5614L25.5606 12.5683C25.6638 12.4652 25.7669 12.4652 25.87 12.5683L27.0301 13.7284C27.1332 13.8315 27.1332 13.9347 27.0301 14.0378L14.037 27.0309C13.9339 27.134 13.8308 27.134 13.7276 27.0309L12.5675 25.8708C12.4644 25.7676 12.4644 25.6645 12.5675 25.5614Z" fill="#FF4D4F"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.comparisonTop__team}>
            <div className={styles.comparisonTop__teamsItem} style={{backgroundImage: 'url(http://dummyimage.com/282x282/99cccc&text=+)'}}>
              <p>Профиль команды</p>
              <h3>Ночные неожиданности</h3>
              <div className={styles.cancelBtn}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2582 13.4191L13.4183 12.259C13.5214 12.1558 13.6245 12.1558 13.7276 12.259L27.3394 25.8708C27.4426 25.9739 27.4426 26.077 27.3394 26.1801L26.1794 27.3402C26.0762 27.4433 25.9731 27.4433 25.87 27.3402L12.2582 13.7284C12.1551 13.6253 12.1551 13.5222 12.2582 13.4191Z" fill="#FF4D4F"/>
                  <path d="M12.5675 25.5614L25.5606 12.5683C25.6638 12.4652 25.7669 12.4652 25.87 12.5683L27.0301 13.7284C27.1332 13.8315 27.1332 13.9347 27.0301 14.0378L14.037 27.0309C13.9339 27.134 13.8308 27.134 13.7276 27.0309L12.5675 25.8708C12.4644 25.7676 12.4644 25.6645 12.5675 25.5614Z" fill="#FF4D4F"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comparisonContentWrapper}>
      <div className={styles.comparisonContent}>
        <div className={styles.comparisonLists}>
          <div className={styles.comparisonLists__list}>
          <ComparisonAchItem comparisonItem={comparisonItemFirst}/>
          <div className={styles.comparisonStatistics}>
           {
            comparisonItemFirst[0].statistics.map((item) => <div className={styles.comparisonStatistics__item} key={item.title}><StatisticsCard title={item.title} progress={item.progress} activeProgress={item.activeProgress}/></div>)
           }
          </div>
          </div>
          <div className={styles.comparisonLists__list}>
          <ComparisonAchItem comparisonItem={comparisonItemSecond}/>
          <div className={styles.comparisonStatistics}>
          {
            comparisonItemSecond[0].statistics.map((item) => <div className={styles.comparisonStatistics__item} key={item.title}><StatisticsCard title={item.title} progress={item.progress} activeProgress={item.activeProgress}/></div>)
          }
          </div>
          </div>
        </div>
        <div className={styles.comparisonAllAchievements}>
          {
            comparisonAllAchievementsData.map((item) => <div className={styles.comparisonAchievements__item}><ComparisonAchievements title={item.title} gold={item.gold} info={item.info} progressDate1={item.progressDate1} progressDate2={item.progressDate2} progress1={item.progress1} progress2={item.progress2}/></div>)
          }
        </div>
      </div>
      </div>
    </div>
    }
    </>
    
  )
}

export default Comparison;