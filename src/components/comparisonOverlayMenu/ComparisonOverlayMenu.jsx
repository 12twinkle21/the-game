import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ComparisonOverlayMenu.module.scss';

import { AppContext } from '../../App';


function ComparisonOverlayMenu(props) {

  const {onActiveOverlay} = props;

  const { darkTheme } = React.useContext(AppContext);

  const [showSeasonPopup, setShowSeasonPopup] = React.useState(false);
  const [showTypeOfPlayerPopup, setShowTypeOfPlayerPopup] = React.useState(false);
  const [showPlayerPopup, setShowPlayerPopup] = React.useState(false);

  let onSetShowPopup = (thisPopup, setThisPopup) =>{
    setThisPopup(!thisPopup);
  }

  let seasonBtnRef = React.useRef(); 
  let typeOfPlayerBtnRef = React.useRef(); 
  let playerBtnRef = React.useRef(); 

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
 }, []);
 
  let handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
    if (!path.includes(seasonBtnRef.current)) { 
      setShowSeasonPopup(false);
    }

    if (!path.includes(typeOfPlayerBtnRef.current)) { 
      setShowTypeOfPlayerPopup(false);
    }

    if (!path.includes(playerBtnRef.current)) { 
      setShowPlayerPopup(false);
    }
 }
 
 const [activeSeasonBtn, setActiveSeasonBtn] = React.useState(null);
 const [activeTypeOfPlayerBtn, setActiveTypeOfPlayerBtn] = React.useState(null);
 const [activePlayerBtn, setActivePlayerBtn] = React.useState(null);

 let onSetActiveSeasonBtn = (evt) =>{
  setActiveSeasonBtn(evt.target.innerText);
 }

 let onSetActiveTypeOfPlayerBtn = (evt) =>{
  setActiveTypeOfPlayerBtn(evt.target.innerText);
 }

 let onSetActivePlayerBtn = (evt) =>{
  setActivePlayerBtn(evt.target.innerText);
 }

 const unblockedEnterBtn = activeSeasonBtn !== null && activeTypeOfPlayerBtn !== null && activePlayerBtn !== null;

 let seasonsData = [
  {
    title: "Сезон 1"
  }
 ];
 let typesOfPlayerData = [
  {
    title: "Команда"
  }
 ];
 let playersData = [
  {
    title: "Ночные неожиданности"
  }
 ];

  return (

    <div className={darkTheme? styles.darkOverlayMenu : styles.overlayMenu}>
      <div className={darkTheme? styles.darkOverlayMenu__closeBtn : styles.overlayMenu__closeBtn} onClick={()=> onActiveOverlay(false)}>
        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#BFBFBF"/>
          <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#BFBFBF"/>
        </svg>
      </div>
      <div className={darkTheme? styles.darkOverlayMenu__title : styles.overlayMenu__title}>
         <h3>Сравнение</h3>
      </div>
      <div className={darkTheme? styles.darkOverlayMenu__selectedBtns : styles.overlayMenu__selectedBtns}>
        <button onClick={()=> onSetShowPopup(showSeasonPopup, setShowSeasonPopup)} ref={seasonBtnRef}>
          <div className={styles.btnText}>
            {
              activeSeasonBtn?
              <span>{activeSeasonBtn}</span>
              :
              <span>Выбрать сезон курса</span>
            }
            {
            !showSeasonPopup?
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5393 4.5H14.2209C14.1313 4.5 14.0469 4.54395 13.9942 4.61602L9.00022 11.4996L4.00628 4.61602C3.95354 4.54395 3.86917 4.5 3.77952 4.5H2.46116C2.3469 4.5 2.28011 4.63008 2.3469 4.72324L8.54495 13.268C8.76995 13.5773 9.2305 13.5773 9.45374 13.268L15.6518 4.72324C15.7203 4.63008 15.6535 4.5 15.5393 4.5Z" fill="#262626"/>
            </svg>
            :
            <svg className={styles.activeSvg} width="18" height="18" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#262626"/>
              <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#262626"/>
            </svg>
            }
          </div>
          {
            showSeasonPopup?
            <div className={styles.selectedBtnPopup}>
              <ul>
                {
                  seasonsData.map((item) => <li onClick={onSetActiveSeasonBtn} key={item.title} style={activeSeasonBtn === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                }
              </ul>
            </div>
            :
            ''
          }
        </button>
        <button onClick={()=> onSetShowPopup(showTypeOfPlayerPopup, setShowTypeOfPlayerPopup)} ref={typeOfPlayerBtnRef}>
          <div className={styles.btnText}>
            {
              activeTypeOfPlayerBtn?
              <span>{activeTypeOfPlayerBtn}</span>
              :
              <span>Выбрать тип игрока</span>
            }
            {
             !showTypeOfPlayerPopup?
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5393 4.5H14.2209C14.1313 4.5 14.0469 4.54395 13.9942 4.61602L9.00022 11.4996L4.00628 4.61602C3.95354 4.54395 3.86917 4.5 3.77952 4.5H2.46116C2.3469 4.5 2.28011 4.63008 2.3469 4.72324L8.54495 13.268C8.76995 13.5773 9.2305 13.5773 9.45374 13.268L15.6518 4.72324C15.7203 4.63008 15.6535 4.5 15.5393 4.5Z" fill="#262626"/>
            </svg>
            :
            <svg className={styles.activeSvg} width="18" height="18" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#262626"/>
              <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#262626"/>
            </svg>
            }
          </div>
          {
            showTypeOfPlayerPopup?
            <div className={styles.selectedBtnPopup}>
              <ul>
                {
                  typesOfPlayerData.map((item) => <li onClick={onSetActiveTypeOfPlayerBtn} key={item.title} style={activeTypeOfPlayerBtn === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                }
              </ul>
            </div>
            :
            ''
          }
        </button>
        <button onClick={()=> onSetShowPopup(showPlayerPopup, setShowPlayerPopup)} ref={playerBtnRef}>
          <div className={styles.btnText}>
            {
              activePlayerBtn?
              <span>{activePlayerBtn}</span>
              :
              <span>Выбрать игрока</span>
            }
            {
            !showPlayerPopup?
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5393 4.5H14.2209C14.1313 4.5 14.0469 4.54395 13.9942 4.61602L9.00022 11.4996L4.00628 4.61602C3.95354 4.54395 3.86917 4.5 3.77952 4.5H2.46116C2.3469 4.5 2.28011 4.63008 2.3469 4.72324L8.54495 13.268C8.76995 13.5773 9.2305 13.5773 9.45374 13.268L15.6518 4.72324C15.7203 4.63008 15.6535 4.5 15.5393 4.5Z" fill="#262626"/>
            </svg>
            :
            <svg className={styles.activeSvg} width="18" height="18" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#262626"/>
              <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#262626"/>
            </svg>
            }
          </div>
          {
            showPlayerPopup?
            <div className={styles.selectedBtnPopup}>
              <ul>
                {
                  playersData.map((item) => <li onClick={onSetActivePlayerBtn} key={item.title} style={activePlayerBtn === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                }
              </ul>
            </div>
            :
            ''
          }
        </button>
      </div>
      <div className={darkTheme? styles.darkOverlayMenu__btns : styles.overlayMenu__btns}>
        <button onClick={()=> onActiveOverlay(false)}>
          Отменить
        </button>
        <Link to='/comparison' className='clearLink'>
        <button id={unblockedEnterBtn? '' : styles.disabledBtn} onClick={()=> onActiveOverlay(false)} disabled={unblockedEnterBtn? false : true}>
          Применить
        </button>
        </Link>
      </div>
    </div>

  )
}

export default ComparisonOverlayMenu;