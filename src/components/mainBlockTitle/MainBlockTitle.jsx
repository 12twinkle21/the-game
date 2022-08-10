import React from 'react';
import styles from './MainBlockTitle.module.scss';

function MainBlockTitle(props) {

   const {title} = props;

  return (

   <div className={styles.mainBlockTitle}>
      <h3>{title}</h3>
      <p>Показать еще</p>
   </div>

  )
}

export default MainBlockTitle;