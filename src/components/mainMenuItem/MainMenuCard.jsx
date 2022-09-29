import React from 'react';

import styles from './MainMenuCard.module.scss';

import { AppContext } from '../../App';

function MainMenuCard(props) {

   const {icon, title, blocked} = props;

   const { darkTheme } = React.useContext(AppContext);

  return (
    <div className={darkTheme? !blocked? styles.darkMainMenuCard : styles.darkMainMenuCardBlocked : !blocked? styles.mainMenuCard : styles.mainMenuCardBlocked}>
      <div className={darkTheme? !blocked? styles.darkMainMenuCard__info : styles.darkMainMenuCardBlocked__infoBlocked : !blocked? styles.mainMenuCard__info : styles.mainMenuCardBlocked__infoBlocked}>
        <div className={styles.icon}>
         <img src={icon} width={48} height={48} alt='Icon'/>
        </div>
        <div className={styles.title}>
         <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default MainMenuCard;