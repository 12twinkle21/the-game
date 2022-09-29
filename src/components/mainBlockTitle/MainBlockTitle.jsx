import React from 'react';
import styles from './MainBlockTitle.module.scss';

import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

function MainBlockTitle(props) {

   const {title, link} = props;

   const { darkTheme } = React.useContext(AppContext);

  return (

   <div className={darkTheme? styles.darkMainBlockTitle : styles.mainBlockTitle}>
      <h3>{title}</h3>
      <Link to={link} className='clearLink'>
         <p>Показать еще</p>
      </Link>
   </div>

  )
}

export default MainBlockTitle;