import React from 'react';

import styles from './ComparisonAchievements.module.scss';

function ComparisonAchievements(props) {

   const {title, gold, info, progressDate1, progress1, progressDate2, progress2} = props;



  return (

    <div className={styles.comparisonAchievements}>
      <div className={styles.comparisonAchievements__top}>
         <h3>{title}</h3>
         <div className={styles.gold}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#262626"/>
            </svg>
            <span>{gold}</span>
         </div>
      </div>
      <p>{info}</p>
      <div className={styles.comparisonAchievements__progresses}>
         <div className={styles.progressBlock}>
            <div className={styles.progressBlock__top}>
               <span>{progress1 === 0? 'Заблокировано' : progressDate1}</span>
               <span>{progress1} %</span>
            </div>
            <div className={styles.progressBlock__progressLineBlock}>
               <div className={styles.progressLine}>
                  <div className={styles.activeProgressLine} style={{width:`${progress1}%`}}></div>
               </div>
               {
               progress1 === 100?
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_892_4659)">
                  <path d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM8.26758 4.28555L5.79961 7.70742C5.76512 7.75557 5.71964 7.7948 5.66696 7.82186C5.61428 7.84892 5.55591 7.86304 5.49668 7.86304C5.43745 7.86304 5.37908 7.84892 5.3264 7.82186C5.27372 7.7948 5.22824 7.75557 5.19375 7.70742L3.73242 5.68242C3.68789 5.62031 3.73242 5.53359 3.80859 5.53359H4.3582C4.47773 5.53359 4.59141 5.59102 4.66172 5.68945L5.49609 6.84727L7.33828 4.29258C7.40859 4.19531 7.52109 4.13672 7.6418 4.13672H8.19141C8.26758 4.13672 8.31211 4.22344 8.26758 4.28555Z" fill="#1890FF"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_892_4659">
                  <rect width="12" height="12" fill="white"/>
                  </clipPath>
                  </defs>
               </svg>
               :
               ''
               }
            </div>
         </div>
         <div className={styles.progressBlock}>
            <div className={styles.progressBlock__top}>
               <span>{progress2 === 0? 'Заблокировано' : progressDate2}</span>
               <span>{progress2} %</span>
            </div>
            <div className={styles.progressBlock__progressLineBlock}>
               <div className={styles.progressLine}>
                  <div className={styles.activeProgressLine} style={{width:`${progress2}%`}}></div>
               </div>
               {
               progress2 === 100?
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_892_4659)">
                  <path d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM8.26758 4.28555L5.79961 7.70742C5.76512 7.75557 5.71964 7.7948 5.66696 7.82186C5.61428 7.84892 5.55591 7.86304 5.49668 7.86304C5.43745 7.86304 5.37908 7.84892 5.3264 7.82186C5.27372 7.7948 5.22824 7.75557 5.19375 7.70742L3.73242 5.68242C3.68789 5.62031 3.73242 5.53359 3.80859 5.53359H4.3582C4.47773 5.53359 4.59141 5.59102 4.66172 5.68945L5.49609 6.84727L7.33828 4.29258C7.40859 4.19531 7.52109 4.13672 7.6418 4.13672H8.19141C8.26758 4.13672 8.31211 4.22344 8.26758 4.28555Z" fill="#1890FF"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_892_4659">
                  <rect width="12" height="12" fill="white"/>
                  </clipPath>
                  </defs>
               </svg>
               :
               ''
               }
            </div>
         </div>
      </div>
    </div>

  )
}

export default ComparisonAchievements;