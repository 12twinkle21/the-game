import React from 'react';
import styles from './AchievementItem.module.scss';

import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

function AvailableAchievementItem(props) {

   const {title, gold, bgImage, blocked, mainPageAchievement, blueProgress, yellowProgress, emptyElement, bottomTreeElement, bottomRightTreeElement, bottomLeftTreeElement, rightTreeElement, leftTreeElement,  topRightTreeElement, topLeftTreeElement} = props;

   const { darkTheme } = React.useContext(AppContext);

   let heightOfBottomTreeElement = 100;

   for(let i =1; i<bottomTreeElement; i++){
      heightOfBottomTreeElement+= 384
   }

   let widthOfHorizontalTreeElement = 20;

   for(let i =1; i<rightTreeElement || i<leftTreeElement; i++){
      widthOfHorizontalTreeElement+= 190
   }

   let widthOfHorizontalLongTreeElement = 90;

   for(let i =1; i<bottomRightTreeElement || i<bottomLeftTreeElement; i++){
      widthOfHorizontalLongTreeElement+= 190
   }

  return (

   emptyElement !==true?
   <>
    <Link to='/detailAchievementPage' className='clearLink'>
      <div className={styles.achievementBlock}>
    <div className={darkTheme? styles.darkAchievementItem : styles.achievementItem}>
      {
         blocked?
         <div className={styles.availableAchievementItem__img}>
            <img style={!mainPageAchievement?{width: '100%', height: '100%', padding: '15px'} : null} src={bgImage} width={132} height={132} alt='Achievement'/>
         </div>
         :
         <div className={styles.unlockedAchievementItem__img}>
            <CircularProgressbarWithChildren
               value={yellowProgress}
               strokeWidth={3}
               styles={buildStyles({
               pathColor: "#FADB14",
               trailColor: "transparent",
               })}
            >
            {/*
               Width here needs to be (100 - 2 * strokeWidth)% 
               in order to fit exactly inside the outer progressbar.
            */}
            <div style={{ width: "90%" }}>
               <CircularProgressbarWithChildren
                  value={blueProgress}
                  strokeWidth={3}
                  styles={buildStyles({
                  pathColor: "#1890FF",
                  trailColor: "transparent",
                  })}   
               >
                  <img style={{width: '100%', height: '100%', borderRadius: '50%', padding: '10px'}}
                     src={bgImage}
                     alt="Logo"
                   />
               </CircularProgressbarWithChildren>
            </div>
            </CircularProgressbarWithChildren>
         </div>
      }
    
      <div className={darkTheme? styles.darkAchievementItem__title : styles.achievementItem__title}>
         <p style={mainPageAchievement?{marginTop:'7px'} : null}>{title}</p>
      </div>      
      <div className={darkTheme? styles.darkAchievementItem__gold : styles.achievementItem__gold}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#262626"/>
         </svg>
         <span>{gold}</span>
      </div>
    </div> 
      {
        bottomTreeElement && bottomRightTreeElement?
        <>
        <div style={{height: heightOfBottomTreeElement+80}} className={styles.bottomTreeElement}></div>
        <div style={{top: heightOfBottomTreeElement+358}} className={styles.bottomMiniTreeElement}></div>
        <div style={{top: heightOfBottomTreeElement+403, width: widthOfHorizontalLongTreeElement}} className={styles.longBottomRightTreeElement}></div>
        </>
        : null  
      }
      {
        bottomTreeElement && bottomLeftTreeElement?
        <>
        <div style={{height: heightOfBottomTreeElement+80}} className={styles.bottomTreeElement}></div>
        <div style={{top: heightOfBottomTreeElement+358}} className={styles.bottomMiniTreeElement}></div>
        <div style={{top: heightOfBottomTreeElement+403, width: widthOfHorizontalLongTreeElement}} className={styles.longBottomLeftTreeElement}></div>
        </>
        : null  
      }
      {
         (bottomTreeElement && !bottomRightTreeElement) || (bottomTreeElement && !bottomLeftTreeElement)?
         <div style={{height: heightOfBottomTreeElement}} className={styles.bottomTreeElement}></div>
         : null
      }
      {
         bottomRightTreeElement && !bottomTreeElement?
         <>
         <div className={styles.bottomMiniTreeElement}></div>
         <div className={styles.longBottomRightTreeElement}></div>
         </>
         : null
      }
      {
         bottomLeftTreeElement  && !bottomTreeElement?
         <>
         <div className={styles.bottomMiniTreeElement}></div>
         <div className={styles.longBottomLeftTreeElement}></div>
         </>
         : null
      }
      {
         rightTreeElement?
         <div style={{width: widthOfHorizontalTreeElement}} className={styles.rightTreeElement}></div>
         : null
      }
      {
         leftTreeElement?
         <div style={{width: widthOfHorizontalTreeElement}} className={styles.leftTreeElement}></div>
         : null
      }
      {
         topRightTreeElement?
         <>
         <div className={styles.topMiniTreeElement}></div>
         <div className={styles.longTopRightTreeElement}></div>
         </>
         : null
      }
      {
        topLeftTreeElement?
         <>
         <div className={styles.topMiniTreeElement}></div>
         <div className={styles.longTopLeftTreeElement}></div>
         </>
         : null
      }
      </div>
    </Link>
    </>
   :
   <div style={{transform: 'translateX(0)'}} className={darkTheme? styles.darkAchievementItem : styles.achievementItem}></div>
  )
}

export default AvailableAchievementItem;