import React from 'react';

import styles from './FilterComponent.module.scss';

import { AppContext } from '../../App';

function FilterComponent(props) {

   const {statisticsFiltersData} = props;

   const { darkTheme } = React.useContext(AppContext);

   const [activeStatisticsFilter, setActiveStatisticsFilter] = React.useState(statisticsFiltersData[0].title);

   let onActiveStatisticsFilter = (value, setValue) =>{
     setValue(value);
   }

   const [showFilterPopup, setShowFilterPopup] = React.useState(false);

   let onShowFilterPopup= () =>{
      setShowFilterPopup(!showFilterPopup);
   }

   let popupRef = React.useRef();

   React.useEffect(() => {
     document.body.addEventListener('click', handleOutsideClick)
  }, []);
  
   let handleOutsideClick = (e) => {
     const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
     if (!path.includes(popupRef.current)) { 
        setShowFilterPopup(false);
     }
  }


  return (

    <button className={darkTheme? styles.darkFilterComponent : styles.filterComponent} onClick={onShowFilterPopup} ref={popupRef}>
      <div className={styles.btnText}>
         <span>{activeStatisticsFilter}</span>
         {
            !showFilterPopup?
         <svg width="20" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
         </svg>
         :
         <svg width="20" height="20" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#262626"/>
            <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#262626"/>
         </svg>
         }
        
         
      </div>
         {
            showFilterPopup?
            <div className={styles.filterPopup}>
               <ul>
                  {
                     statisticsFiltersData.map((item) => <li onClick={() => onActiveStatisticsFilter(item.title, setActiveStatisticsFilter)} style={activeStatisticsFilter === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                  }
               </ul>
               </div>
            :
            ''
         }          
    </button>

  )
}

export default FilterComponent;