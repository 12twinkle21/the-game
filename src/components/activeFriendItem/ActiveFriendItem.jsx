import React from 'react';
import styles from './ActiveFriendItem.module.scss';

function ActiveFriendItem(props) {

   const {avatar, isOnline, name, gold} = props;

  return (

   <div className={styles.activeFriendItem}>
      <div className={styles.activeFriendItem__avatar}>
         <img src={avatar} width={48} height={48} alt='Avatar'/>
         {
            isOnline?
               <div className={styles.activeFriendItem__online}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="4" cy="4" r="3.5" fill="#52C41A" stroke="#FAFAFA"/>
                  </svg>
               </div> 
            :
            ''
         }
      </div>
      <div className={styles.activeFriendItem__info}>
         <div className={styles.activeFriendItem__name}>
            <p>{name}</p>
         </div>
         <div className={styles.activeFriendItem__gold}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#096DD9"/>
         </svg>
            <span>{gold}</span>
         </div>
      </div>
   </div>

  )
}

export default ActiveFriendItem;