import React from 'react';
import styles from './UsefulArticlesItem.module.scss';

import { AppContext } from '../../App';

function UsefulArticlesItem(props) {

  const {image, type, title, text} = props;

  const { darkTheme } = React.useContext(AppContext);

  return (
    <div className={darkTheme? styles.darkUsefulArticlesItem : styles.usefulArticlesItem}>
      <img src={image} width={384} height={300} alt='Article'/>
      <div className={darkTheme? styles.darkUsefulArticlesItem__info : styles.usefulArticlesItem__info}>
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