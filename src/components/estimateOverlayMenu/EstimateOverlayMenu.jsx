import React from 'react';

import styles from './EstimateOverlayMenu.module.scss';

import Star from './star/Star';
import Fire from './fire/Fire';

import { AppContext } from '../../App';

 function OverlayMenu(props, { numTotalStars = 10, numTotalFires = 10, initialStarsRating = 0, initialFiresRating = 0 }) {

  const [numSelectedStars, setNumSelectedStars] = React.useState(initialStarsRating);
  const [numHoveringStars, setNumHoveringStars] = React.useState(null);

  const [numSelectedFires, setNumSelectedFires] = React.useState(initialFiresRating);
  const [numHoveringFires, setNumHoveringFires] = React.useState(null);

  const [isUserStarsHovering, setIsUserStarsHovering] = React.useState(false);
  const [isUserFiresHovering, setIsUserFiresHovering] = React.useState(false);

  function getStarColor(isUserStarsHovering, i, numSelectedStars, numHoveringStars) {
    const threshold = isUserStarsHovering ? numHoveringStars : numSelectedStars;
    return i < threshold ? "#FADB14" : "#D9D9D9";
  }

  function getFireColor(isUserFiresHovering, i, numSelectedFires, numHoveringFires) {
   const threshold = isUserFiresHovering ? numHoveringFires : numSelectedFires;
   return i < threshold ? "#1890FF" : "#D9D9D9";
 }

  const { onActiveEstimateOverlay, onEstimateArtifact, onCancelledArtifact, estimateTextAreaText, setEstimateTextAreaText} = props;

  const { darkTheme } = React.useContext(AppContext);

  let totalStarsRating;
  let totalFiresRating;

  if(numSelectedStars>=5 && numSelectedStars<=7){
   totalStarsRating = 'Весьма удовлетворительно';
  } else if(numSelectedStars<5){
   totalStarsRating = 'Плохо';
  } else if(numSelectedStars>7){
   totalStarsRating = 'Отлично';
  }

  if(numSelectedFires>=5 && numSelectedFires<=7){
   totalFiresRating = 'Весьма удовлетворительно';
  } else if(numSelectedFires<5){
   totalFiresRating = 'Плохо';
  } else if(numSelectedFires>7){
   totalFiresRating = 'Отлично';
  }

  const unblockedEnterBtn = numSelectedStars>0 && numSelectedFires>0;

   const handleTextAreaChange = (event) => {
      const value = event.currentTarget.value;
      setEstimateTextAreaText(value);
    };

  return (

   <div className={darkTheme? styles.darkOverlayMenu : styles.overlayMenu}>
   <div className={darkTheme? styles.darkOverlayMenu__closeBtn : styles.overlayMenu__closeBtn} onClick={()=> onActiveEstimateOverlay(false)}>
     <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#BFBFBF"/>
       <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#BFBFBF"/>
     </svg>
   </div>
   <div className={darkTheme? styles.darkOverlayMenu__title : styles.overlayMenu__title}>
      <h3>Сравнение</h3>
   </div>
   <div className={darkTheme? styles.darkOverlayMenu__ratings : styles.overlayMenu__ratings}>
      <div className={styles.ratingBlock}>
      <h3>Оцените полноту исполнения</h3>
      <div className={styles.ratingItems} onMouseEnter={() => setIsUserStarsHovering(true)} onMouseLeave={() => setIsUserStarsHovering(false)}>
  {Array.from({ length: numTotalStars }).map((e, i) => (
    <Star
      key={i}
      color={getStarColor(
        isUserStarsHovering,
        i,
        numSelectedStars,
        numHoveringStars
      )}
      handleSelect={() => setNumSelectedStars(i + 1)}
      handleHover={() => setNumHoveringStars(i + 1)}
    />
  ))}
      </div>
      <div className={styles.totalRating}>*{numSelectedStars}/10 - {totalStarsRating}
         </div>
      </div>
      <div className={styles.ratingBlock}>
         <h3>Оцените качество исполнения</h3>
      <div className={styles.ratingItems} onMouseEnter={() => setIsUserFiresHovering(true)} onMouseLeave={() => setIsUserFiresHovering(false)}>
  {Array.from({ length: numTotalFires }).map((e, i) => (
    <Fire
      key={i}
      color={getFireColor(
        isUserFiresHovering,
        i,
        numSelectedFires,
        numHoveringFires
      )}
      handleSelect={() => setNumSelectedFires(i + 1)}
      handleHover={() => setNumHoveringFires(i + 1)}
    />
  ))}
      </div>
      <div className={styles.totalRating}>*{numSelectedFires}/10 - {totalFiresRating}
         </div>
      </div>
   </div>
   <textarea value={estimateTextAreaText} onChange={handleTextAreaChange} placeholder='Обратите внимание на советы других людей о работе автора, и постарайтесь дать полезную рекомендацию автору.'/> 
   <div className={darkTheme? styles.darkOverlayMenu__btns : styles.overlayMenu__btns}>
     <button onClick={onCancelledArtifact}>
       Отклонить
     </button>
     <button onClick={onEstimateArtifact} id={unblockedEnterBtn? '' : styles.disabledBtn} disabled={unblockedEnterBtn? false : true}>
       Утвердить
     </button>
   </div>
 </div>
    
  )
}

export default OverlayMenu;