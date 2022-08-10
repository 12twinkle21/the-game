import React from 'react';
import styles from './TopSliderItem.module.scss';

function TopSliderItem(props) {

  const {title, text, bgImage} = props;

  return (

    <div className={styles.topSliderItem} style={{backgroundImage: `url(${bgImage})`}}>
      <div className={styles.topSliderItem__content}>
        <h2>{title}</h2>
        <p>{text}</p>
         <button>The GAME</button>
      </div>
    </div>
    
  )
}

export default TopSliderItem;