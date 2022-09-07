import React from 'react';

import styles from './StatisticsCard.module.scss';

function StatisticsCard(props) {

   const {title, progress, big} = props;

  return (

    <div className={!big? styles.statisticsCard : styles.bigStatisticsCard}>
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