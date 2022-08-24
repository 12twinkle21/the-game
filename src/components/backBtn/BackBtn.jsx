import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BackBtn.module.scss';

function BackBtn(props) {

  const {text, link, white} = props;
   
  return (

   <Link to={link} className='clearLink'>
      <div className={styles.backBtn}>
         <div className={styles.backBtn__btn} style={ white?{backgroundColor: '#ffffff'} : null}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.9688 5.11581V3.30409C16.9688 3.14706 16.7883 3.06034 16.6664 3.15643L6.10081 11.4088C6.01105 11.4786 5.93841 11.568 5.88844 11.6701C5.83847 11.7723 5.8125 11.8845 5.8125 11.9982C5.8125 12.112 5.83847 12.2242 5.88844 12.3263C5.93841 12.4285 6.01105 12.5179 6.10081 12.5877L16.6664 20.84C16.7907 20.9361 16.9688 20.8494 16.9688 20.6924V18.8807C16.9688 18.7658 16.9149 18.6557 16.8258 18.5853L8.38832 11.9994L16.8258 5.41112C16.9149 5.34081 16.9688 5.23065 16.9688 5.11581Z" fill="#096DD9"/>
            </svg>
         </div>
         <p>{text}</p>
   </div>
   </Link>
   
  )
}

export default BackBtn;