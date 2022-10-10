import React from 'react';

import styles from './ComparisonAchItem.module.scss';

import { AppContext } from '../../App';

function ComparisonAchItem(props) {

   const {comparisonItem} = props;

   console.log(comparisonItem)

   const { darkTheme } = React.useContext(AppContext);

  return (

   <>
   {
      comparisonItem.map((item, index) => 
      <div className={darkTheme? styles.darkComparisonAchItem : styles.comparisonAchItem} key={index}>
      <div className={darkTheme? styles.darkComparisonAchItem__img : styles.comparisonAchItem__img}>
         <img src={item.bgImg} width={148} height={148} alt='Achievement'/>
      </div>
      <div className={darkTheme? styles.darkComparisonAchItem__info : styles.comparisonAchItem__info}>
         <h3>{item.achievementTitle}</h3>
         <div className={styles.comparisonAchItem__infoCounts}>
            <span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#262626"/>
               </svg>
               {item.goldCount}
            </span>
            <span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2841 8.27462L15.3333 7.40977L12.6731 2.01681C12.6005 1.86915 12.4809 1.74962 12.3333 1.67696C11.963 1.49415 11.513 1.64649 11.3278 2.01681L8.66766 7.40977L2.71688 8.27462C2.55282 8.29806 2.40281 8.3754 2.28797 8.49259C2.14913 8.63529 2.07262 8.82728 2.07526 9.02636C2.0779 9.22544 2.15946 9.41533 2.30203 9.55431L6.6075 13.752L5.59031 19.6793C5.56646 19.8172 5.58172 19.959 5.63436 20.0886C5.687 20.2183 5.77491 20.3306 5.88813 20.4128C6.00135 20.4951 6.13535 20.5439 6.27492 20.5539C6.4145 20.5638 6.55407 20.5345 6.67781 20.4692L12.0005 17.6707L17.3231 20.4692C17.4684 20.5465 17.6372 20.5723 17.7989 20.5441C18.2067 20.4738 18.4809 20.0871 18.4106 19.6793L17.3934 13.752L21.6989 9.55431C21.8161 9.43946 21.8934 9.28946 21.9169 9.1254C21.9802 8.71524 21.6942 8.33556 21.2841 8.27462Z" fill="#262626"/>
               </svg>
               {item.ratingCount}
            </span>
         </div>
         <p>{item.progress}%</p>
         <div className={styles.progress}>
            <div className={styles.activeProgress} style={{width: `${item.progress}%`}}></div>
         </div>
      </div>
    </div>
      )
   }
   </>
    
  )
}

export default ComparisonAchItem;