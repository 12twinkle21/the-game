import React from 'react';
import styles from './MainBlockTitle.module.scss';

import { Link } from 'react-router-dom';

function MainBlockTitle(props) {

   const {title, link} = props;

  return (

   <div className={styles.mainBlockTitle}>
      <h3>{title}</h3>
      <Link to={link} className='clearLink'>
         <p>Показать еще</p>
      </Link>
   </div>

  )
}

export default MainBlockTitle;