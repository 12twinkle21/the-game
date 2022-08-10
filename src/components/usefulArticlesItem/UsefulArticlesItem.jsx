import React from 'react';
import styles from './UsefulArticlesItem.module.scss';

function UsefulArticlesItem(props) {

  const {image, type, title, text} = props;

  return (
    <div className={styles.usefulArticlesItem}>
      <img src={image} width={384} height={300} alt='Article'/>
      <div className={styles.usefulArticlesItem__info}>
        <span>{type}</span>
        <h3>{title}</h3>
        <p>- -
          <br/>
          {text}
        </p>
      </div>  
    </div>
  )
}

export default UsefulArticlesItem;