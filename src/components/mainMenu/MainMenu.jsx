import React from 'react';

import styles from './MainMenu.module.scss';

import Header from '../header/Header';
import MainMenuCard from '../mainMenuItem/MainMenuCard';

import { AppContext } from '../../App';

function MainMenu() {

   const { darkTheme, toggleDarkTheme, visibleMainMenu, onVisibleMainMenu } = React.useContext(AppContext);

   let mainMenuItemsData = [
      {
         icon: "./img/mainMenuIcons/1.svg",
         title: "Профиль"
      },
      {
         icon: "./img/mainMenuIcons/2.svg",
         title: "Чаты"
      },
      {
         icon: "./img/mainMenuIcons/3.svg",
         title: "Друзья"
      },
      {
         icon: "./img/mainMenuIcons/4.svg",
         title: "Программы"
      },
      {
         icon: "./img/mainMenuIcons/5.svg",
         title: "Курсы",
         blocked: true
      },
      {
         icon: "./img/mainMenuIcons/6.svg",
         title: "Воркшопы"
      },
      {
         icon: "./img/mainMenuIcons/7.svg",
         title: "Проекты"
      },
      {
         icon: "./img/mainMenuIcons/8.svg",
         title: "Задачи",
         blocked: true
      },
      {
         icon: "./img/mainMenuIcons/9.svg",
         title: "Марафоны",
         blocked: true
      },
      {
         icon: "./img/mainMenuIcons/10.svg",
         title: "События"
      },
      {
         icon: "./img/mainMenuIcons/11.svg",
         title: "Хранилище",
         blocked: true
      },
      {
         icon: "./img/mainMenuIcons/12.svg",
         title: "Рынок"
      },
      {
         icon: "./img/mainMenuIcons/13.svg",
         title: "Рейтинги"
      },
      {
         icon: "./img/mainMenuIcons/14.svg",
         title: "Созвоны"
      },
      {
         icon: "./img/mainMenuIcons/15.svg",
         title: "Поддержка"
      },
      {
         icon: "./img/mainMenuIcons/16.svg",
         title: "Дипломы"
      },
      {
         icon: "./img/mainMenuIcons/17.svg",
         title: "Наставники"
      },
      {
         icon: "./img/mainMenuIcons/18.svg",
         title: "Прогресс"
      }
   ];

  return (
    <div className={darkTheme? styles.darkMainMenu : styles.mainMenu}>
      <Header visibleMainMenu={visibleMainMenu} onVisibleMainMenu={onVisibleMainMenu}/>
      <div className={styles.mainMenuTop}>
         <div className={styles.mainMenuTop__img}>
            <img src='./img/mainMenuAvatar.png' width={96} height={96} alt='Avatar'/>
         </div>
         <div className={styles.mainMenuTop__right}>
            <h2>Добрый день, Илья!</h2>
            <div className={styles.mainMenuSettingsAccount}>
               <span>Настройки учетной записи -{'>'}</span>
            </div>
         </div>
      </div>
      <div className={styles.mainMenuItems}>
         {
            mainMenuItemsData.map((item) => <div className={styles.mainMenuItems__item} key={item.title}><MainMenuCard icon={item.icon} title={item.title} blocked={item.blocked}/></div>)
         }
      </div>
      <button className={styles.darkThemeBtn} onClick={toggleDarkTheme}>Темная тема</button>
    </div>
  )

}

export default MainMenu;