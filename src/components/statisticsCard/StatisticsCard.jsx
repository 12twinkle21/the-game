import React from 'react';

import styles from './StatisticsCard.module.scss';

import { AppContext } from '../../App';

function StatisticsCard(props) {

   const {title, progress, big, activeProgress} = props;

   const { darkTheme } = React.useContext(AppContext);

  return (

    <div className={darkTheme? !big? styles.darkStatisticsCard : styles.darkBigStatisticsCard : !big? styles.statisticsCard : styles.bigStatisticsCard}>
      <div className={styles.statisticsCardTitle}>
         <p>{title}</p>
      </div>
      <div className={styles.statisticsCardProgress}>
         <span>
          {progress}
          </span>
      </div>
      {activeProgress?
          <div className={styles.activeProgressFill} style={progress==='100%'?{borderRadius: '12px', height: progress} : {height: progress}}>
             {activeProgress?
          <span className={styles.activeProgressText}>{progress}</span>
          :
          null}
          </div>
          :
          null
          }
    </div>

  )
}

export default StatisticsCard;