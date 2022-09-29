import React from 'react';

import styles from './StatisticsCard.module.scss';

import { AppContext } from '../../App';

function StatisticsCard(props) {

   const {title, progress, big} = props;

   const { darkTheme } = React.useContext(AppContext);

  return (

    <div className={darkTheme? !big? styles.darkStatisticsCard : styles.darkBigStatisticsCard : !big? styles.statisticsCard : styles.bigStatisticsCard}>
      <div className={styles.statisticsCardTitle}>
         <p>{title}</p>
      </div>
      <div className={styles.statisticsCardProgress}>
         <span>{progress}</span>
      </div>
    </div>

  )
}

export default StatisticsCard;