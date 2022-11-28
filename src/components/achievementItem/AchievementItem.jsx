import React from 'react';
import styles from './AchievementItem.module.scss';

import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

function AvailableAchievementItem(props) {

   const {title, gold, bgImage, blocked, mainPageAchievement, blueProgress, yellowProgress, emptyElement, soloBottomTreeElement, soloRightTreeElement, soloLeftTreeElement, tripleTopTreeElement, tripleBottomTreeElement, quintupleTopTreeElement, quintupleBottomTreeElement, infiniteTreeElement, forTree} = props;

   const { darkTheme } = React.useContext(AppContext);

   let treeElementStyles;

   let getTreeElementStyles = () =>{
      if(forTree && soloRightTreeElement){
         treeElementStyles = {marginBottom: '110px', transform: 'translateX(-50px)'}
      } else if(forTree && soloLeftTreeElement){
         treeElementStyles = {marginBottom: '110px', transform: 'translateX(50px)'}
      } else if(forTree){
         treeElementStyles = {marginBottom: '110px', transform: 'translateX(0)'}
      }
   }

   getTreeElementStyles();

   let treeInfiniteElementStyles;

   let getTreeInfiniteElementStyles = () =>{
      if(infiniteTreeElement === 1){
         treeInfiniteElementStyles = {height: '350px'}
      } else if(infiniteTreeElement === 2){
         treeInfiniteElementStyles = {height: '700px'}
      }
   }

   getTreeInfiniteElementStyles()

  return (

   emptyElement !==true?
   <>
    <Link to='/detailAchievementPage' className='clearLink'>
      <div className={styles.achievementBlock}>
    <div style={treeElementStyles}className={darkTheme? styles.darkAchievementItem : styles.achievementItem}>
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
       {soloBottomTreeElement?
       <div className={styles.soloBottomTreeElement} style={{height: '96px'}}> 
         <svg width="3" height="93" viewBox="0 0 3 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 93C0.671573 93 0 92.3284 0 91.5L0 46.5H3L3 91.5C3 92.3284 2.32843 93 1.5 93V93Z" fill="#BFBFBF"/>
            <path d="M0 46.5L0 1.5C0 0.671574 0.671573 0 1.5 0V0C2.32843 0 3 0.671573 3 1.5L3 46.5H0Z" fill="#BFBFBF"/>
         </svg>
       </div>
       :
       null}
       {soloLeftTreeElement? 
       <div className={styles.soloLeftTreeElement} style={{height: '3px'}}>
          <svg width="48" height="3" viewBox="0 0 48 3" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect width="48" height="3" rx="1.5" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {soloRightTreeElement? 
       <div className={styles.soloRightTreeElement} style={{height: '3px'}}>
          <svg width="48" height="3" viewBox="0 0 48 3" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect width="48" height="3" rx="1.5" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {tripleBottomTreeElement?
       <div className={styles.tripleBottomTreeElement} style={{height: '94px'}}>
          <svg width="371" height="94" viewBox="0 0 371 94" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect y="45" width="371" height="3" rx="1.5" fill="#BFBFBF"/>
             <rect y="48" width="48" height="3" rx="1.5" transform="rotate(-90 0 48)" fill="#BFBFBF"/>
             <rect x="184" y="48" width="48" height="3" rx="1.5" transform="rotate(-90 184 48)" fill="#BFBFBF"/>
             <rect x="184" y="94" width="48" height="3" rx="1.5" transform="rotate(-90 184 94)" fill="#BFBFBF"/>
             <rect x="368" y="48" width="48" height="3" rx="1.5" transform="rotate(-90 368 48)" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {quintupleBottomTreeElement?
       <div className={styles.quintupleBottomTreeElement} style={{height: '93px'}}>
          <svg width="740" height="93" viewBox="0 0 740 93" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="740" width="48" height="4" rx="2" transform="rotate(90 740 0)" fill="#BFBFBF"/>
             <rect x="554" width="48" height="3" rx="1.5" transform="rotate(90 554 0)" fill="#BFBFBF"/>
             <rect x="374" width="48" height="3" rx="1.5" transform="rotate(90 374 0)" fill="#BFBFBF"/>
             <rect x="186" width="48" height="3" rx="1.5" transform="rotate(90 186 0)" fill="#BFBFBF"/>
             <rect x="3" width="48" height="3" rx="1.5" transform="rotate(90 3 0)" fill="#BFBFBF"/>
             <rect x="740" y="48" width="740" height="3" rx="1.5" transform="rotate(-180 740 48)" fill="#BFBFBF"/>
             <rect x="371" y="93" width="48" height="3" rx="1.5" transform="rotate(-90 371 93)" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {tripleTopTreeElement?
       <div className={styles.tripleTopTreeElement} style={{height: '94px'}}>
          <svg width="371" height="94" viewBox="0 0 371 94" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="371" y="49" width="371" height="3" rx="1.5" transform="rotate(-180 371 49)" fill="#BFBFBF"/>
             <rect x="371" y="46" width="48" height="3" rx="1.5" transform="rotate(90 371 46)" fill="#BFBFBF"/>
             <rect x="187" y="46" width="48" height="3" rx="1.5" transform="rotate(90 187 46)" fill="#BFBFBF"/>
             <rect x="187" width="48" height="3" rx="1.5" transform="rotate(90 187 0)" fill="#BFBFBF"/>
             <rect x="3" y="46" width="48" height="3" rx="1.5" transform="rotate(90 3 46)" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {quintupleTopTreeElement?
       <div className={styles.quintupleTopTreeElement} style={{height: '93px'}}>
          <svg width="740" height="93" viewBox="0 0 740 93" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect y="93" width="48" height="4" rx="2" transform="rotate(-90 0 93)" fill="#BFBFBF"/>
             <rect x="186" y="93" width="48" height="3" rx="1.5" transform="rotate(-90 186 93)" fill="#BFBFBF"/>
             <rect x="366" y="93" width="48" height="3" rx="1.5" transform="rotate(-90 366 93)" fill="#BFBFBF"/>
             <rect x="554" y="93" width="48" height="3" rx="1.5" transform="rotate(-90 554 93)" fill="#BFBFBF"/>
             <rect x="737" y="93" width="48" height="3" rx="1.5" transform="rotate(-90 737 93)" fill="#BFBFBF"/>
             <rect y="45" width="740" height="3" rx="1.5" fill="#BFBFBF"/>
             <rect x="369" width="48" height="3" rx="1.5" transform="rotate(90 369 0)" fill="#BFBFBF"/>
          </svg>
       </div>
       :
       null}
       {infiniteTreeElement?
       <div className={styles.infiniteTreeElement} style={treeInfiniteElementStyles}></div>
      :
      null}
      </div>
    </Link>
    </>
   :
   <div className={darkTheme? styles.darkAchievementItem : styles.achievementItem}></div>
      
  )
}

export default AvailableAchievementItem;