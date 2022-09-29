import React from 'react';

import styles from './AchievementPublication.module.scss';

import { AppContext } from '../../App';

function AchievementPublication(props) {

   const {userAvatar, userName, dateAndTime, publicationText} = props;

   const { darkTheme } = React.useContext(AppContext);

  return (

    <div className={darkTheme? styles.darkAchievementPublication : styles.achievementPublication}>
      <div className={darkTheme? styles.darkAchievementPublication__top : styles.achievementPublication__top}>
         <div className={styles.userInfo}>
            <img src={userAvatar} width={48} height={48} alt='Avatar'/>
            <div className={styles.userNameAndDateBlock}>
               <p>{userName}</p>
               <span>{dateAndTime}</span>
            </div>
         </div>
      </div>
      <div className={darkTheme? styles.darkAchievementPublication__text : styles.achievementPublication__text}>
         <p>{publicationText}</p>
      </div>
    </div>

  )
}

export default AchievementPublication;