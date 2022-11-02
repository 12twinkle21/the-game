import React from 'react';

import styles from './SendArtifactOverlayMenu.module.scss';

import { AppContext } from '../../App';

function SendArtifactOverlayMenu(props) {

  const {onActiveSendMenuOverlay, onSendArtifact} = props;

  const { darkTheme } = React.useContext(AppContext);

  const [showTypesOfArtifactPopup, setShowTypesOfArtifactPopup] = React.useState(false);
  const [showAuthorsPopup, setShowAuthorsPopup] = React.useState(false);

  let onSetShowPopup = (thisPopup, setThisPopup) =>{
    setThisPopup(!thisPopup);
  }

  let typesOfArtifactBtnRef = React.useRef(); 
  let authorsBtnRef = React.useRef(); 

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
 }, []);
 
  let handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
    if (!path.includes(typesOfArtifactBtnRef.current)) { 
      setShowTypesOfArtifactPopup(false);
    }

    if (!path.includes(authorsBtnRef.current)) { 
      setShowAuthorsPopup(false);
    }
 }

 const [activeTypesOfArtifactBtn, setActiveTypesOfArtifactBtn] = React.useState(null);
 const [activeAuthorsBtn, setActiveAuthorsBtn] = React.useState(null);
 const [activeSendFile, setActiveSendFile] = React.useState(false);

 let onSetActiveSendFile = () =>{
  setActiveSendFile(true);
 }

 let onSetActiveTypesOfArtifactBtn = (evt) =>{
  setActiveTypesOfArtifactBtn(evt.target.innerText);
 }

 let onSetActiveAuthorsBtn = (evt) =>{
  setActiveAuthorsBtn(evt.target.innerText);
 }

 const [inputText, setInputText] = React.useState(null);

 const handleInputChange = (event) => {
  const value = event.currentTarget.value;
  setInputText(value);
};

  let typesOfArtifactData = [
    {
      title: "PDF file"
    }
  ];

  let authorsData = [
    {
      title: "Автор"
    }
  ];

  const unblockedEnterBtn = activeTypesOfArtifactBtn !== null && activeAuthorsBtn !== null && inputText !== null && activeSendFile;

  return (

   <div className={darkTheme? styles.darkOverlayMenu : styles.overlayMenu}>
   <div className={darkTheme? styles.darkOverlayMenu__closeBtn : styles.overlayMenu__closeBtn} onClick={()=> onActiveSendMenuOverlay(false)}>
     <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M17.512 19.1687L19.1693 17.5114C19.3166 17.3641 19.4639 17.3641 19.6112 17.5114L39.0566 36.9568C39.2039 37.1042 39.2039 37.2515 39.0566 37.3988L37.3994 39.0561C37.252 39.2034 37.1047 39.2034 36.9574 39.0561L17.512 19.6106C17.3647 19.4633 17.3647 19.316 17.512 19.1687Z" fill="#BFBFBF"/>
       <path d="M17.9539 36.5149L36.5155 17.9534C36.6628 17.806 36.8101 17.806 36.9574 17.9534L38.6147 19.6106C38.762 19.7579 38.762 19.9053 38.6147 20.0526L20.0531 38.6141C19.9058 38.7614 19.7585 38.7614 19.6112 38.6141L17.9539 36.9568C17.8066 36.8095 17.8066 36.6622 17.9539 36.5149Z" fill="#BFBFBF"/>
     </svg>
   </div>
   <div className={darkTheme? styles.darkOverlayMenu__title : styles.overlayMenu__title}>
      <h3>Прикрепить артефакт</h3>
      <p>Достижение “Стратегия найдена” 3 сезон игры “Сообщество проекта”</p>
   </div>
   <div className={darkTheme? styles.darkOverlayMenu__selectedBtns : styles.overlayMenu__selectedBtns}>
     <button onClick={()=> onSetShowPopup(showTypesOfArtifactPopup, setShowTypesOfArtifactPopup)} ref={typesOfArtifactBtnRef}>
        <div className={styles.btnText}>
            {
              activeTypesOfArtifactBtn?
              <p>{activeTypesOfArtifactBtn}</p>
              :
              <p>Выбрать тип артефакта</p>
            }
            {
              !showTypesOfArtifactPopup?
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
            showTypesOfArtifactPopup?
            <div className={styles.selectedBtnPopup}>
              <ul>
                {
                  typesOfArtifactData.map((item) => <li onClick={onSetActiveTypesOfArtifactBtn} style={activeTypesOfArtifactBtn === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                }
              </ul>
            </div>
            :
            ''
          }
     </button>
     <button onClick={()=> onSetShowPopup(showAuthorsPopup, setShowAuthorsPopup)} ref={authorsBtnRef}>
      <div className={styles.btnText}>
            {
              activeAuthorsBtn?
              <p>{activeAuthorsBtn}</p>
              :
              <p>Выбрать авторов</p>
            }
            {
            !showAuthorsPopup?
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
            showAuthorsPopup?
            <div className={styles.selectedBtnPopup}>
              <ul>
                {
                  authorsData.map((item) => <li onClick={onSetActiveAuthorsBtn} style={activeAuthorsBtn === item.title?{color: '#bfbfbf'} : null}>{item.title}</li>)
                }
              </ul>
            </div>
            :
            ''
          }
     </button>
     {
      activeTypesOfArtifactBtn?
      <>
     <div className={styles.selectedBtnInput}>
      <input type='text' placeholder='Введите текст или ссылку на артефакт' value={inputText} onChange={handleInputChange}/>
     </div>
     <div className={styles.selectedBtnSendFileBlock} onClick={onSetActiveSendFile}>
        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.9929 20.9197L41.9836 20.8822L36.7242 7.51816C36.4898 6.76348 35.7914 6.24316 34.9992 6.24316H13.6804C12.8836 6.24316 12.1757 6.77285 11.9507 7.53691L7.03355 20.765L7.01949 20.7979L7.01012 20.8354C6.94918 21.065 6.93043 21.2994 6.96324 21.5291C6.95855 21.6041 6.95387 21.6791 6.95387 21.7541V38.9057C6.95511 39.6611 7.25577 40.3853 7.78998 40.9195C8.32419 41.4538 9.04838 41.7544 9.80387 41.7557H39.2039C40.7742 41.7557 42.0539 40.476 42.0586 38.9057V21.7541C42.0586 21.6932 42.0586 21.6322 42.0539 21.5807C42.0726 21.351 42.0539 21.1307 41.9929 20.9197ZM28.1273 18.9041L28.1132 19.64C28.0757 21.7447 26.6226 23.1604 24.4992 23.1604C23.4632 23.1604 22.5726 22.8275 21.9304 22.1947C21.2882 21.5619 20.9367 20.6807 20.9179 19.64L20.9039 18.9041H11.257L14.9836 9.84316H33.6961L37.5257 18.9041H28.1273ZM10.5492 22.5041H17.9226C19.0617 25.1807 21.4851 26.7604 24.5039 26.7604C26.0836 26.7604 27.5507 26.3197 28.7367 25.4853C29.7773 24.7541 30.5882 23.7322 31.1132 22.5041H38.4492V38.1557H10.5492V22.5041Z" fill="#40A9FF"/>
        </svg>
        <p>Нажмите или перетащите файл в эту область для загрузки</p>
        <span>Поддержка одиночной или массовой загрузки.</span>
     </div>
     </>
     :
     ''
      }
   </div>
   <div className={darkTheme? styles.darkOverlayMenu__btns : styles.overlayMenu__btns}>
     <button onClick={onSendArtifact} id={unblockedEnterBtn? '' : styles.disabledBtn} disabled={unblockedEnterBtn? false : true}>
       Применить
     </button>
   </div>
 </div>

  )

}

export default SendArtifactOverlayMenu;