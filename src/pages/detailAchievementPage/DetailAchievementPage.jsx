import React from 'react';

import styles from './DetailAchievementPage.module.scss';

import Header from '../../components/header/Header';
import BackBtn from '../../components/backBtn/BackBtn';
import AchievementPublication from '../../components/achievementPublication/AchievementPublication';
import MainMenu from '../../components/mainMenu/MainMenu';
import EstimateOverlayMenu from '../../components/estimateOverlayMenu/EstimateOverlayMenu';
import SendArtifactOverlayMenu from '../../components/sendArtifactOverlayMenu/SendArtifactOverlayMenu';

import { AppContext } from '../../App';

function DetailAchievementPage() {

   const { darkTheme, visibleMainMenu, whoConnect, setWhoConnect, backLink } = React.useContext(AppContext);

   let onWhoConnect = (who) =>{
      setWhoConnect(who) 
   }

   let [activeBlock, setActiveBlock] = React.useState('instruction')

   let onSelectContentBlock = (block) =>{
      setActiveBlock(block);
   }

   let [unblockAchievement, setUnblockAchievement] = React.useState(false)

   let onUnblockAchievement = () =>{
      setUnblockAchievement(!unblockAchievement);
   }

   let [unblockPublicationsBlock, setUnblockPublicationsBlock] = React.useState(false)

   let onUnblockPublicationsBlock = () =>{
      setUnblockPublicationsBlock(true);
      handleStepProgress(setStepProgress, styles.activeStep)
   }

   let [sendArtifact, setSendArtifact] = React.useState(false)

   let onSendArtifact = () =>{
      setSendArtifact(true);
      handleStepProgress(setStepProgress, styles.completedStep)
      handleStepProgress(setStepProgress2, styles.activeStep)
      onActiveSendMenuOverlay(false)
      setPublications((prevNotifications) => [
         {
            userAvatar: "./img/headerAccAvatar.png",
            userName: "Евгений Говорун",
            dateAndTime: "29 ноя в 16:48",
            type: "notification",
            result: "sendedArtifact"
         },
           ...prevNotifications,
         ]);   
   }


   let [mentorEstimateArtifact, setMentorEstimateArtifact] = React.useState(false);

   let onMentorEstimateArtifact = () =>{
      setMentorEstimateArtifact(true);
      handleStepProgress(setStepProgress2, styles.completedStep)
      handleStepProgress(setStepProgress3, styles.activeStep)
      onActiveEstimateOverlay(false);
      setPublications((prevNotifications) => [
         {
            userAvatar: "./img/headerAccAvatar.png",
            userName: "Евгений Говорун",
            dateAndTime: "29 ноя в 16:48",
            type: "notification",
            result: "acceptedMentorArtifact",
            estimateTextAreaText: estimateTextAreaText
         },
           ...prevNotifications,
         ]);   
      setEstimateTextAreaText('');
   }

   let [masterEstimateArtifact, setMasterEstimateArtifact] = React.useState(false);

   let onMasterEstimateArtifact = () =>{
      setMasterEstimateArtifact(true);
      handleStepProgress(setStepProgress3, styles.completedStep)
      handleStepProgress(setStepProgress4, styles.completedStep)
      onActiveEstimateOverlay(false);
      setPublications((prevNotifications) => [
         {
            userAvatar: "./img/headerAccAvatar.png",
            userName: "Евгений Говорун",
            dateAndTime: "29 ноя в 16:48",
            type: "notification",
            result: "acceptedMasterArtifact",
            estimateTextAreaText: estimateTextAreaText
         },
           ...prevNotifications,
         ]);
      setEstimateTextAreaText('');   
   }

   let onMentorCancelledArtifact = () =>{
      handleStepProgress(setStepProgress, styles.activeStep)
      handleStepProgress(setStepProgress2, styles.blockedStep)
      handleStepProgress(setStepProgress3, styles.blockedStep)
      handleStepProgress(setStepProgress4, styles.blockedStep)
      setSendArtifact(false);
      setMasterEstimateArtifact(false);
      setMentorEstimateArtifact(false);
      onActiveEstimateOverlay(false);
      setPublications((prevNotifications) => [
         {
            userAvatar: "./img/headerAccAvatar.png",
            userName: "Евгений Говорун",
            dateAndTime: "29 ноя в 16:48",
            type: "notification",
            result: "cancelledMentorArtifact",
            estimateTextAreaText: estimateTextAreaText
         },
           ...prevNotifications,
         ]);
      setEstimateTextAreaText('');   
   }

   let onMasterCancelledArtifact = () =>{
      handleStepProgress(setStepProgress, styles.activeStep)
      handleStepProgress(setStepProgress2, styles.blockedStep)
      handleStepProgress(setStepProgress3, styles.blockedStep)
      handleStepProgress(setStepProgress4, styles.blockedStep)
      setSendArtifact(false);
      setMasterEstimateArtifact(false);
      setMentorEstimateArtifact(false);
      onActiveEstimateOverlay(false);
      setPublications((prevNotifications) => [
         {
            userAvatar: "./img/headerAccAvatar.png",
            userName: "Евгений Говорун",
            dateAndTime: "29 ноя в 16:48",
            type: "notification",
            result: "cancelledMasterArtifact",
            estimateTextAreaText: estimateTextAreaText
         },
           ...prevNotifications,
         ]);   
      setEstimateTextAreaText('');
   }

   let [visibleAttachmentsPopup, setVisibleAttachmentsPopup] = React.useState(false);

   let onVisibleAttachmentsPopup = (bool) =>{
      setVisibleAttachmentsPopup(bool);
   }

   let popupAttachmentsRef = React.useRef();

   React.useEffect(() => {
     document.body.addEventListener('click', handleOutsideClick)
  }, []);
  
   let handleOutsideClick = (e) => {
     const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
     if (!path.includes(popupAttachmentsRef.current)) { 
        setVisibleAttachmentsPopup(false);
     }
  }

   let [inputText, setInputText] = React.useState('');

   let [publications, setPublications] = React.useState([]);

   const handleInputChange = (event) => {
      const value = event.currentTarget.value;
      setInputText(value);
    };
  
    const onAddPublication = () => {
      if (inputText) {
         setPublications((prevPublications) => [
            {
              inputText,
              type: 'message'
            },
            ...prevPublications,
          ]);
         setInputText('');
      }
    };
  
    const handleKeyUp = (event) => {
      if (event.keyCode === 13) {
        onAddPublication();
      }
    };

    let [stepProgress, setStepProgress] = React.useState(styles.blockedStep);
    let [stepProgress2, setStepProgress2] = React.useState(styles.blockedStep);
    let [stepProgress3, setStepProgress3] = React.useState(styles.blockedStep); 
    let [stepProgress4, setStepProgress4] = React.useState(styles.blockedStep);

    const handleStepProgress = (onStepProgress, stepClass) => {
      onStepProgress(stepClass)
    }

    let [activeEstimateOverlay, setActiveEstimateOverlay] = React.useState(false);

      let onActiveEstimateOverlay = (bool) =>{
         setActiveEstimateOverlay(bool);

      if(bool){
         document.body.style.overflow = 'hidden';
      } else{
         document.body.style.overflow = 'auto';
      }
   }

   let [activeSendArtifactMenuOverlay, setActiveSendArtifactMenuOverlay] = React.useState(false);

      let onActiveSendMenuOverlay = (bool) =>{
         setActiveSendArtifactMenuOverlay(bool);

      if(bool){
         document.body.style.overflow = 'hidden';
      } else{
         document.body.style.overflow = 'auto';
      }
   }

   const publicationsBlockRef = React.useRef();

   const onClickAnchorBtn = () => {
      if(activeBlock!=='historyOfAchievements'){
         setActiveBlock('historyOfAchievements');

         let scrollToBlock = () =>{
            window.scrollTo({ behavior: 'smooth', top: publicationsBlockRef.current.offsetTop })
         }
         setTimeout(scrollToBlock, 100);
      } else{
         window.scrollTo({ behavior: 'smooth', top: publicationsBlockRef.current.offsetTop })
      }
   }

   let [estimateTextAreaText, setEstimateTextAreaText] = React.useState('');

   let blueProgress = 50;
   let yellowProgress = 50;

   let [activePrompt1, setActivePrompt1] = React.useState(false);
   let [activePrompt2, setActivePrompt2] = React.useState(false);
   let [activePrompt3, setActivePrompt3] = React.useState(false);
   let [activePrompt4, setActivePrompt4] = React.useState(false);
   let [activeProgressPrompt, setActiveProgressPrompt] = React.useState(false);

   let onSetActivePrompt = (setActivePrompt, bool) =>{
      setActivePrompt(bool);
   }

  return (
   
   <>
    {
      visibleMainMenu?
      <MainMenu/>
      :    
      <div className={darkTheme? styles.darkDetailAchievementPage : styles.detailAchievementPage}>
         {
            activeEstimateOverlay? 
            <div className='overlay'>
               <EstimateOverlayMenu onActiveEstimateOverlay={onActiveEstimateOverlay} onEstimateArtifact={whoConnect === 'mentor'? onMentorEstimateArtifact : onMasterEstimateArtifact} onCancelledArtifact={whoConnect === 'mentor'? onMentorCancelledArtifact : onMasterCancelledArtifact} estimateTextAreaText={estimateTextAreaText} setEstimateTextAreaText={setEstimateTextAreaText} />
            </div>
            :
            
            activeSendArtifactMenuOverlay?
            <div className='overlay'>
               <SendArtifactOverlayMenu onActiveSendMenuOverlay={onActiveSendMenuOverlay} onSendArtifact={onSendArtifact}/>
            </div>
            :
            ''
         }
      <div className={darkTheme? styles.darkDetailAchievementPage__top : styles.detailAchievementPage__top}>
         <Header/>
         <div className={styles.backBtn}>
            <BackBtn text={'Назад'} link={backLink}/>
         </div>
         <div className={styles.titleBlock}>
            <div className={styles.titleBlock__img}>
               <img src='http://dummyimage.com/230x230&text=+' width={230} height={230} alt='Title logo'/>
            </div>
            <div className={styles.titleBlock__info}>
               <div className={styles.infoTop}>
                  <p>Достижение</p>
                  <div className={styles.infoGold}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#262626"/>
                     </svg>
                     <span>50</span>
                  </div>
               </div>
               <div className={styles.infoTitle}>
                  <h2>Стратегия найдена</h2>
               </div>
               <div className={styles.infoText}>
                  <p>Создать презентацию двадцати событий для участников вашего сообщества.</p>
               </div>
               <div className={styles.infoGlobalProgress}>
                  <p>10,43% игроков разблокировали это достижение.</p>
               </div>
               {unblockAchievement?
                  <div className={styles.infoDate}>
                     <div className={styles.unblockedBtns}>
                           {
                              whoConnect === 'user'?
                              <>
                              {
                                 !sendArtifact?
                                 <button className={styles.sendAndEstimateBtn} onClick={onClickAnchorBtn}>Прикрепить артефакт</button>
                                 :
                                 <button id={styles.sendedBtn}>Артефакт отправлен</button>
                              }
                              <button className={styles.messageBtn} onClick={onClickAnchorBtn}>Написать наставнику</button>
                              </>
                              :
                              ''
                           }
                           {
                              whoConnect === 'mentor'?
                              <>
                              {
                                 sendArtifact?
                                 mentorEstimateArtifact?
                                 <button id={styles.completedSendAndEstimateBtn}>Артефакт оценен</button>
                                 :
                                 <button className={styles.sendAndEstimateBtn} onClick={onClickAnchorBtn}>Оценить артефакт</button>
                                 :
                                 ''
                              }
                              <button className={styles.messageBtn} onClick={onClickAnchorBtn}>Написать команде</button>
                              </>
                              :
                              ''
                           }
                            {
                              whoConnect === 'master'?
                              <>
                              {
                               mentorEstimateArtifact?
                               !masterEstimateArtifact?
                               <button className={styles.sendAndEstimateBtn} onClick={onClickAnchorBtn}>Оценить артефакт</button>
                               :
                               <button id={styles.completedSendAndEstimateBtn}>Артефакт оценен</button>
                               :
                               ''
                              } 
                              <button className={styles.messageBtn} onClick={onClickAnchorBtn}>Написать команде</button>
                              </>
                              :
                              ''
                           }
                        </div>
                     <p>Разблокировано 22.03.2021</p>
                  </div>
                  :
                  <div className={styles.unblockBlock}>
                     {
                        whoConnect === 'user'?
                        <button className={styles.unblockBtn} onClick={onUnblockAchievement}>Разблокировать</button>
                        :
                        ''
                     }
                     <p>Заблокировано</p>
                  </div>
            }
               <div className={styles.infoProgressBlock}>
                  <div className={styles.infoProgressBlock__left}>
                     <div className={styles.blueProgress}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13.0328 7.33143C12.7295 6.6487 12.2885 6.03592 11.7375 5.53143L11.2828 5.11424C11.2674 5.10046 11.2488 5.09069 11.2287 5.08577C11.2086 5.08085 11.1876 5.08094 11.1675 5.08603C11.1475 5.09112 11.129 5.10106 11.1137 5.11497C11.0984 5.12887 11.0867 5.14633 11.0797 5.1658L10.8766 5.74861C10.75 6.11424 10.5172 6.48768 10.1875 6.85486C10.1656 6.8783 10.1406 6.88455 10.1234 6.88611C10.1063 6.88768 10.0797 6.88455 10.0562 6.86268C10.0344 6.84393 10.0234 6.8158 10.025 6.78768C10.0828 5.84705 9.80156 4.78611 9.18594 3.63143C8.67656 2.67205 7.96875 1.92361 7.08437 1.40174L6.43906 1.02205C6.35469 0.972052 6.24688 1.03768 6.25156 1.13611L6.28594 1.88611C6.30937 2.39861 6.25 2.85174 6.10938 3.2283C5.9375 3.68924 5.69062 4.11736 5.375 4.50174C5.15535 4.76887 4.90639 5.01049 4.63281 5.22205C3.97391 5.72856 3.43815 6.37757 3.06562 7.12049C2.69402 7.86988 2.50045 8.69496 2.5 9.53143C2.5 10.2689 2.64531 10.983 2.93281 11.6564C3.21042 12.3048 3.61103 12.8933 4.1125 13.3892C4.61875 13.8892 5.20625 14.283 5.86094 14.5564C6.53906 14.8408 7.25781 14.9846 8 14.9846C8.74219 14.9846 9.46094 14.8408 10.1391 14.558C10.7921 14.2862 11.386 13.8897 11.8875 13.3908C12.3938 12.8908 12.7906 12.3064 13.0672 11.658C13.3543 10.9864 13.5015 10.2634 13.5 9.53299C13.5 8.77049 13.3438 8.02986 13.0328 7.33143Z" fill="#1890FF"/>
                        </svg>
                        <span>{blueProgress} %</span>
                        <div className={styles.fullProgressbar}>
                           <div style={{width: `${blueProgress}%`}}className={styles.activeProgressbar}></div>
                        </div>
                     </div>
                     <div className={styles.yellowProgress}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M14.1887 5.51641L10.2215 4.93985L8.4481 1.34454C8.39966 1.2461 8.31998 1.16641 8.22154 1.11797C7.97466 0.9961 7.67466 1.09766 7.55123 1.34454L5.77779 4.93985L1.8106 5.51641C1.70123 5.53204 1.60123 5.5836 1.52466 5.66172C1.4321 5.75686 1.3811 5.88485 1.38286 6.01757C1.38461 6.15029 1.43899 6.27689 1.53404 6.36954L4.40435 9.16797L3.72623 13.1195C3.71032 13.2115 3.7205 13.306 3.75559 13.3924C3.79068 13.4789 3.84929 13.5537 3.92477 13.6086C4.00025 13.6634 4.08958 13.696 4.18263 13.7026C4.27568 13.7092 4.36873 13.6897 4.45123 13.6461L7.99966 11.7805L11.5481 13.6461C11.645 13.6977 11.7575 13.7148 11.8653 13.6961C12.1372 13.6492 12.32 13.3914 12.2731 13.1195L11.595 9.16797L14.4653 6.36954C14.5434 6.29297 14.595 6.19297 14.6106 6.0836C14.6528 5.81016 14.4622 5.55704 14.1887 5.51641Z" fill="#FADB14"/>
                        </svg>
                        <span>{yellowProgress} %</span>
                        <div className={styles.fullProgressbar}>
                           <div style={{width: `${yellowProgress}%`}}className={styles.activeProgressbar}></div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.infoProgressBlock__right} onMouseEnter={()=>onSetActivePrompt(setActiveProgressPrompt, true)} onMouseLeave={()=>onSetActivePrompt(setActiveProgressPrompt, false)}>
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9375 4.38906C11.7188 3.91094 11.4078 3.48125 11.0109 3.11406C10.2047 2.36563 9.13438 1.95312 8 1.95312C6.86562 1.95312 5.79531 2.36562 4.98906 3.1125C4.59219 3.48125 4.28125 3.90937 4.0625 4.38906C3.83437 4.88906 3.71875 5.41875 3.71875 5.96562V6.3875C3.71875 6.48438 3.79687 6.5625 3.89375 6.5625H4.7375C4.83438 6.5625 4.9125 6.48438 4.9125 6.3875V5.96562C4.9125 4.41094 6.29688 3.14687 8 3.14687C9.70312 3.14687 11.0875 4.41094 11.0875 5.96562C11.0875 6.60312 10.8609 7.20312 10.4312 7.70312C10.0062 8.19844 9.40625 8.55312 8.74219 8.70312C8.3625 8.78906 8.02031 9.00312 7.77812 9.30937C7.53678 9.61458 7.40524 9.99216 7.40469 10.3813V10.8719C7.40469 10.9688 7.48281 11.0469 7.57969 11.0469H8.42344C8.52031 11.0469 8.59844 10.9688 8.59844 10.8719V10.3813C8.59844 10.1359 8.76875 9.92031 9.00469 9.86719C9.91719 9.66094 10.7453 9.16875 11.3375 8.48125C11.6359 8.13281 11.8688 7.74531 12.0297 7.325C12.1969 6.88906 12.2812 6.43125 12.2812 5.96562C12.2812 5.41875 12.1656 4.8875 11.9375 4.38906ZM8 12.2969C7.51719 12.2969 7.125 12.6891 7.125 13.1719C7.125 13.6547 7.51719 14.0469 8 14.0469C8.48281 14.0469 8.875 13.6547 8.875 13.1719C8.875 12.6891 8.48281 12.2969 8 12.2969Z" fill="white"/>
                     </svg>
                     {activeProgressPrompt?
                        <div className={styles.progressPrompt}>
                           <p>Подсказка при наведении</p>
                        </div>
                        :
                        null}
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className={styles.kekBtns} style={{maxWidth: '1440px', margin: '0 auto'}}>
         <button onClick={()=> onWhoConnect('user')}>Пользователь</button>
         <button onClick={()=> onWhoConnect('mentor')}>Наставник</button>
         <button onClick={()=> onWhoConnect('master')}>Мастер</button>
      </div>
      <div className={styles.navMenuAndContentWrapper}>
      <div className={styles.navMenuAndContent}>
         <div className={styles.navMenu}>
            <ul>
               <li onClick={()=> onSelectContentBlock('instruction')} className={activeBlock=== 'instruction'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.375 19.2211V4.77891C22.0312 4.54687 22.5 3.92109 22.5 3.1875C22.5 2.25469 21.7453 1.5 20.8125 1.5C20.0789 1.5 19.4531 1.96875 19.2211 2.625H4.77891C4.54687 1.96875 3.92109 1.5 3.1875 1.5C2.25469 1.5 1.5 2.25469 1.5 3.1875C1.5 3.92109 1.96875 4.54687 2.625 4.77891V19.2211C1.96875 19.4531 1.5 20.0789 1.5 20.8125C1.5 21.7453 2.25469 22.5 3.1875 22.5C3.92109 22.5 4.54687 22.0312 4.77891 21.375H19.2211C19.4531 22.0312 20.0789 22.5 20.8125 22.5C21.7453 22.5 22.5 21.7453 22.5 20.8125C22.5 20.0789 22.0312 19.4531 21.375 19.2211ZM20.8125 2.625C21.1242 2.625 21.375 2.87578 21.375 3.1875C21.375 3.49922 21.1242 3.75 20.8125 3.75C20.5008 3.75 20.25 3.49922 20.25 3.1875C20.25 2.87578 20.5008 2.625 20.8125 2.625ZM3.1875 21.375C2.87578 21.375 2.625 21.1242 2.625 20.8125C2.625 20.5008 2.87578 20.25 3.1875 20.25C3.49922 20.25 3.75 20.5008 3.75 20.8125C3.75 21.1242 3.49922 21.375 3.1875 21.375ZM3.1875 3.75C2.87578 3.75 2.625 3.49922 2.625 3.1875C2.625 2.87578 2.87578 2.625 3.1875 2.625C3.49922 2.625 3.75 2.87578 3.75 3.1875C3.75 3.49922 3.49922 3.75 3.1875 3.75ZM19.6875 19.6875H4.3125V4.3125H19.6875V19.6875ZM20.8125 21.375C20.5008 21.375 20.25 21.1242 20.25 20.8125C20.25 20.5008 20.5008 20.25 20.8125 20.25C21.1242 20.25 21.375 20.5008 21.375 20.8125C21.375 21.1242 21.1242 21.375 20.8125 21.375Z" fill="#262626"/>
                  <path d="M6.75 11.1094H17.25C17.4563 11.1094 17.625 10.9406 17.625 10.7344V6.60938C17.625 6.40312 17.4563 6.23438 17.25 6.23438H6.75C6.54375 6.23438 6.375 6.40312 6.375 6.60938V10.7344C6.375 10.9406 6.54375 11.1094 6.75 11.1094ZM8.0625 7.92188H15.9375V9.42188H8.0625V7.92188ZM6.75 17.7656H17.25C17.4563 17.7656 17.625 17.5969 17.625 17.3906V13.2656C17.625 13.0594 17.4563 12.8906 17.25 12.8906H6.75C6.54375 12.8906 6.375 13.0594 6.375 13.2656V17.3906C6.375 17.5969 6.54375 17.7656 6.75 17.7656ZM8.0625 14.5781H15.9375V16.0781H8.0625V14.5781Z" fill="#262626"/>
               </svg>
                  Инструкция
               </li>
               <li onClick={()=> onSelectContentBlock('artifact')} className={activeBlock=== 'artifact'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5492 10.9976C19.0942 9.97354 18.4328 9.05437 17.6063 8.29763L16.9242 7.67185C16.9011 7.65118 16.8732 7.63652 16.843 7.62914C16.8129 7.62176 16.7814 7.6219 16.7513 7.62953C16.7212 7.63717 16.6935 7.65207 16.6705 7.67294C16.6475 7.6938 16.63 7.71998 16.6195 7.74919L16.3148 8.62341C16.125 9.17185 15.7758 9.732 15.2812 10.2828C15.2484 10.3179 15.2109 10.3273 15.1852 10.3297C15.1594 10.332 15.1195 10.3273 15.0844 10.2945C15.0516 10.2664 15.0352 10.2242 15.0375 10.182C15.1242 8.77107 14.7023 7.17966 13.7789 5.44763C13.0148 4.00857 11.9531 2.88591 10.6266 2.1031L9.65859 1.53357C9.53203 1.45857 9.37031 1.557 9.37734 1.70466L9.42891 2.82966C9.46406 3.59841 9.375 4.2781 9.16406 4.84294C8.90625 5.53435 8.53594 6.17653 8.0625 6.7531C7.73302 7.15379 7.35959 7.51622 6.94922 7.83357C5.96087 8.59333 5.15722 9.56685 4.59844 10.6812C4.04103 11.8053 3.75068 13.0429 3.75 14.2976C3.75 15.4039 3.96797 16.475 4.39922 17.4851C4.81562 18.4577 5.41654 19.3404 6.16875 20.0843C6.92813 20.8343 7.80938 21.425 8.79141 21.8351C9.80859 22.2617 10.8867 22.4773 12 22.4773C13.1133 22.4773 14.1914 22.2617 15.2086 21.8375C16.1882 21.4297 17.079 20.8351 17.8312 20.0867C18.5906 19.3367 19.1859 18.4601 19.6008 17.4875C20.0314 16.4801 20.2523 15.3955 20.25 14.3C20.25 13.1562 20.0156 12.0453 19.5492 10.9976ZM16.7109 18.95C15.4523 20.1968 13.7812 20.8812 12 20.8812C10.2188 20.8812 8.54766 20.1968 7.28906 18.95C6.03516 17.7054 5.34375 16.0554 5.34375 14.3C5.34375 13.2804 5.57344 12.3031 6.02578 11.3937C6.46641 10.5054 7.12266 9.71091 7.91953 9.09919C8.42775 8.71058 8.8887 8.26379 9.29297 7.76794C9.87891 7.0531 10.3383 6.25622 10.657 5.40075C10.7878 5.04787 10.8828 4.68276 10.9406 4.31091C11.5055 4.83122 11.9789 5.45935 12.375 6.19528C13.1578 7.66247 13.5187 8.96794 13.4484 10.0789C13.4316 10.3405 13.4744 10.6026 13.5734 10.8453C13.6725 11.0881 13.8253 11.3052 14.0203 11.4804C14.1893 11.6331 14.387 11.7507 14.6019 11.8263C14.8167 11.902 15.0445 11.9342 15.2719 11.9211C15.7336 11.8976 16.1578 11.6937 16.4672 11.3492C16.7789 11 17.0484 10.6437 17.2734 10.2804C17.6016 10.7 17.8758 11.157 18.0938 11.6492C18.4664 12.4883 18.6562 13.3812 18.6562 14.3C18.6562 16.0554 17.9648 17.7078 16.7109 18.95Z" fill="#262626"/>
               </svg>
                  Артефакт
               </li>
               <li onClick={()=> onSelectContentBlock('historyOfAchievements')} className={activeBlock=== 'historyOfAchievements'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.3157 13.8624C7.38836 13.9351 7.50789 13.9351 7.58054 13.8624L9.96648 11.4765L11.9845 13.4968C12.0571 13.5695 12.1766 13.5695 12.2493 13.4968L17.5532 8.1882C17.6259 8.11554 17.6259 7.99601 17.5532 7.92335L16.6907 7.06085C16.6181 6.9882 16.4985 6.9882 16.4259 7.06085L12.118 11.3734L10.1001 9.35304C10.0274 9.28039 9.90789 9.28039 9.83523 9.35304L6.4532 12.7351C6.38054 12.8077 6.38054 12.9273 6.4532 12.9999L7.3157 13.8624Z" fill="#262626"/>
                  <path d="M21.1875 3.75H12.8438V2.25C12.8438 2.14687 12.7594 2.0625 12.6562 2.0625H11.3438C11.2406 2.0625 11.1562 2.14687 11.1562 2.25V3.75H2.8125C2.39766 3.75 2.0625 4.08516 2.0625 4.5V16.6875C2.0625 17.1023 2.39766 17.4375 2.8125 17.4375H11.1656V18.1875L7.30313 20.7211C7.21641 20.7773 7.19297 20.8922 7.24922 20.9789L7.95938 22.0852V22.0875C8.01562 22.1742 8.13281 22.1977 8.21953 22.1414L12 19.6617L15.7805 22.1414C15.8672 22.1977 15.9844 22.1742 16.0406 22.0875V22.0852L16.7508 20.9789C16.807 20.8922 16.7813 20.7773 16.6969 20.7211L12.8438 18.1945V17.4375H21.1875C21.6023 17.4375 21.9375 17.1023 21.9375 16.6875V4.5C21.9375 4.08516 21.6023 3.75 21.1875 3.75ZM20.25 15.75H3.75V5.4375H20.25V15.75Z" fill="#262626"/>
               </svg>
                  История
               </li>
            </ul>
         </div>
         {
         activeBlock === 'instruction'?
         <div className={styles.content}>
            <h3>Инструкция</h3>
            <div className={styles.instructionText}>
               <div className={styles.textWithTitleBlock}>
                  <h3>Примечание:</h3>
                  <p>Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс...</p>
               </div>
               <div className={styles.textWithTitleBlock}>
                  <h3>Ход выполнения:</h3>
                  <p>Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс...</p>
               </div>
               <ul>
                  <li>
                     <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.89831" cy="3" rx="2.89831" ry="3" fill="#3579F3"/>
                     </svg>
                     Узнайте больше о том, как древо достижений помогает организовать учебный процесс.
                  </li>
                  <li>
                     <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.89831" cy="3" rx="2.89831" ry="3" fill="#3579F3"/>
                     </svg>
                     Узнайте больше о том, как древо достижений.
                  </li>
                  <li>
                     <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.89831" cy="3" rx="2.89831" ry="3" fill="#3579F3"/>
                     </svg>
                     Узнайте больше о том, как древо достижений помогает еще организовать учебный процесс.
                  </li>
               </ul>
               <p>Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс...Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс...</p>
            </div>
         </div>
         :
         ''
         }
         {
         activeBlock === 'artifact'?
         <div className={styles.content}>
            <h3>Артефакт</h3>
            <div className={styles.artifactBlock}>
               <p>В качестве артефакта прикрепите:</p>
               <ul>
                  <li>
                     <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.89831" cy="3" rx="2.89831" ry="3" fill="#3579F3"/>
                     </svg>
                     Ссылку на видеопрезентацию в формате mp4.
                  </li>
                  <li>
                     <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.89831" cy="3" rx="2.89831" ry="3" fill="#3579F3"/>
                     </svg>
                     Презентацию в формате pptx.
                  </li>
               </ul>
            </div>
         </div>
         :
         ''
         }
         {
         activeBlock === 'historyOfAchievements'?
         <div className={styles.content} ref={publicationsBlockRef}>
            <h3>История достижений</h3>
            {
               unblockAchievement?
               <div className={styles.unblockedHistory} >
                  <div className={styles.steps}>
                     <div className={styles.steps__step} onMouseEnter={()=>onSetActivePrompt(setActivePrompt1, true)} onMouseLeave={()=>onSetActivePrompt(setActivePrompt1, false)}>
                        <span className={stepProgress}>
                           {
                              sendArtifact?
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.2493 2.96875H13.1571C13.004 2.96875 12.8587 3.03906 12.7649 3.15937L6.32271 11.3203L3.23365 7.40625C3.18692 7.34692 3.12736 7.29895 3.05943 7.26593C2.99151 7.23292 2.91699 7.21572 2.84146 7.21562H1.74928C1.64459 7.21562 1.58678 7.33594 1.65084 7.41719L5.93053 12.8391C6.13053 13.0922 6.5149 13.0922 6.71646 12.8391L14.3477 3.16875C14.4118 3.08906 14.354 2.96875 14.2493 2.96875Z" fill="#1890FF"/>
                              </svg>
                              :
                              1
                           }
                        </span>
                        <div className={styles.stepInfo}>
                           <h3>
                              Шаг 1
                              <div className={stepProgress === styles.completedStep? styles.activeStepSeparator : styles.stepSeparator}></div>
                           </h3>
                           <p>Добавление<br/>артефакта</p>
                        </div>
                        {activePrompt1?
                        <div className={styles.stepPrompt}>
                           <p>Подсказка при наведении</p>
                        </div>
                        :
                        null}
                     </div>
                     <div className={styles.steps__step} onMouseEnter={()=>onSetActivePrompt(setActivePrompt2, true)} onMouseLeave={()=>onSetActivePrompt(setActivePrompt2, false)}>
                        <span className={stepProgress2}>
                           {
                              mentorEstimateArtifact?
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.2493 2.96875H13.1571C13.004 2.96875 12.8587 3.03906 12.7649 3.15937L6.32271 11.3203L3.23365 7.40625C3.18692 7.34692 3.12736 7.29895 3.05943 7.26593C2.99151 7.23292 2.91699 7.21572 2.84146 7.21562H1.74928C1.64459 7.21562 1.58678 7.33594 1.65084 7.41719L5.93053 12.8391C6.13053 13.0922 6.5149 13.0922 6.71646 12.8391L14.3477 3.16875C14.4118 3.08906 14.354 2.96875 14.2493 2.96875Z" fill="#1890FF"/>
                              </svg>
                              :
                              2
                           }
                        </span>
                        <div className={styles.stepInfo}>
                           <h3>
                              Шаг 2
                              <div className={stepProgress2 === styles.completedStep? styles.activeStepSeparator : styles.stepSeparator}></div>
                           </h3>
                           <p>Оценка<br/>наставника</p>
                        </div>
                        {activePrompt2?
                        <div className={styles.stepPrompt}>
                           <p>Подсказка при наведении</p>
                        </div>
                        :
                        null}
                     </div>
                     <div className={styles.steps__step} onMouseEnter={()=>onSetActivePrompt(setActivePrompt3, true)} onMouseLeave={()=>onSetActivePrompt(setActivePrompt3, false)}>
                        <span className={stepProgress3}>
                           {
                              masterEstimateArtifact?
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.2493 2.96875H13.1571C13.004 2.96875 12.8587 3.03906 12.7649 3.15937L6.32271 11.3203L3.23365 7.40625C3.18692 7.34692 3.12736 7.29895 3.05943 7.26593C2.99151 7.23292 2.91699 7.21572 2.84146 7.21562H1.74928C1.64459 7.21562 1.58678 7.33594 1.65084 7.41719L5.93053 12.8391C6.13053 13.0922 6.5149 13.0922 6.71646 12.8391L14.3477 3.16875C14.4118 3.08906 14.354 2.96875 14.2493 2.96875Z" fill="#1890FF"/>
                              </svg>
                              :
                              3
                           }
                        </span>
                        <div className={styles.stepInfo}>
                           <h3>
                              Шаг 3
                              <div className={stepProgress3 === styles.completedStep? styles.activeStepSeparator : styles.stepSeparator}></div>
                           </h3>
                           <p>Оценка<br/>мастера</p>
                        </div>
                        {activePrompt3?
                        <div className={styles.stepPrompt}>
                           <p>Подсказка при наведении</p>
                        </div>
                        :
                        null}
                     </div>
                     <div className={styles.steps__step} onMouseEnter={()=>onSetActivePrompt(setActivePrompt4, true)} onMouseLeave={()=>onSetActivePrompt(setActivePrompt4, false)}>
                        <span className={stepProgress4}>
                           {
                              masterEstimateArtifact?
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.2493 2.96875H13.1571C13.004 2.96875 12.8587 3.03906 12.7649 3.15937L6.32271 11.3203L3.23365 7.40625C3.18692 7.34692 3.12736 7.29895 3.05943 7.26593C2.99151 7.23292 2.91699 7.21572 2.84146 7.21562H1.74928C1.64459 7.21562 1.58678 7.33594 1.65084 7.41719L5.93053 12.8391C6.13053 13.0922 6.5149 13.0922 6.71646 12.8391L14.3477 3.16875C14.4118 3.08906 14.354 2.96875 14.2493 2.96875Z" fill="#1890FF"/>
                              </svg>
                              :
                              3
                           }
                        </span>
                        <div className={styles.stepInfo}>
                           <p className={styles.lastStep}>Достижение<br/>получено</p>
                        </div>
                        {activePrompt4?
                        <div className={styles.stepPrompt}>
                           <p>Подсказка при наведении</p>
                        </div>
                        :
                        null}
                     </div>
                  </div>
                  <div className={styles.unblockedHistory__btn}>
                     {  
                     whoConnect === 'user'?
                        unblockPublicationsBlock?
                        !sendArtifact?
                        <button onClick={onActiveSendMenuOverlay}>Прикрепить артефакт</button>
                        :
                        <button className={styles.sendedBtn}>Артефакт отправлен</button>
                        :
                        <button onClick={onUnblockPublicationsBlock}>Разблокировать</button>
                        :
                        ''
                     }
                     {  
                     whoConnect === 'mentor' && sendArtifact?
                        unblockPublicationsBlock?
                        !mentorEstimateArtifact?
                        <button onClick={onActiveEstimateOverlay}>Оценить артефакт</button>
                        :
                        <button className={styles.sendedBtn}>Артефакт оценен</button>
                        :
                        ''
                        :
                        ''
                     }
                     {  
                     whoConnect === 'master' && mentorEstimateArtifact?
                        unblockPublicationsBlock?
                        !masterEstimateArtifact?
                        <button onClick={onActiveEstimateOverlay}>Оценить артефакт</button>
                        :
                        <button className={styles.sendedBtn}>Артефакт оценен</button>
                        :
                        ''
                        :
                        ''
                     }
                  </div>
                  {
                     !unblockPublicationsBlock?
                     ''
                     :
                     <div className={styles.unblockedPublicationsBlock}>
                        <div className={styles.unblockedPublicationsBlock__inputAndBtns}>
                           <input type='text' value={inputText} onChange={handleInputChange} onKeyUp={handleKeyUp} placeholder='Хотите поделиться мыслями?'/>
                           <div className={styles.btns}>
                              <div className={styles.attachmentsBlock} onMouseEnter={()=>onVisibleAttachmentsPopup(true)} onMouseLeave={()=>onVisibleAttachmentsPopup(false)}>
                              <button className={styles.attachments} ref={popupAttachmentsRef}>
                                 Вложение
                                 {
                                 visibleAttachmentsPopup?
                                 <div className={styles.attachments__popup}>
                                    <ul>
                                       <li onClick={()=>onVisibleAttachmentsPopup(false)}>Фото</li>
                                       <li onClick={()=>onVisibleAttachmentsPopup(false)}>Видео</li>
                                       <li onClick={()=>onVisibleAttachmentsPopup(false)}>Опрос</li>
                                       <li onClick={()=>onVisibleAttachmentsPopup(false)}>Статья</li>
                                    </ul>
                                 </div>
                                 :
                                 ''
                                 }
                              </button>
                              </div>
                              <button className={styles.publication} onClick={onAddPublication}>Публикация</button>
                           </div>
                      </div>
                        <div className={styles.unblockedPublicationsBlock__publications}>
                           {
                           publications?.map((item, index) => <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={item.inputText} type={item.type} result={item.result} key={index} estimateTextAreaText={item.estimateTextAreaText}/>)
                           }
                           <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={'Этот алгоритм поможет тебе разблокировать достижение.1) Изучи полезную информацию во вкладке «Инструкция» и узнай больше о том, какое задание предстоит выполнить, чтобы создать артефакт, необходимый для достижения. 2) Загляни во вкладку «Артефакт» и уточни то, в каком формате тебе потребуется сохранить артефакт, чтобы он подошел к этому достижению.3) Отправься в реальный мир, чтобы выполнить задание и создать нужный артефакт.4) Когда все будет готово, возвращайся сюда, чтобы загрузить артефакт к достижению. Для этого нажми на кнопку «Прикрепить» во вкладке «История достижения».5) Дождись, пока наставник и мастер оценят результаты твоей работы. Если артефакт подойдет, то достижение разблокируется. Если нет, то наставник и мастер скажут, чего в нем не хватает и как его улучшить.Если что-то окажется не понятным, то обратись к наставнику прямо в этом чате. Для этого нажми кнопку «Спросить».'}  type={'message'}/>
                           <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={'Привет! Меня зовут Евгений. В этот чат я буду присылать сообщения об изменении текущего статуса конкретно этого достижения.Обрати внимание, что такой чат есть у каждого достижения, чтобы тебе, наставнику и мастеру было удобно и никто не запутался в информации.Ты всегда можешь попасть в такой чат через вкладку «История достижения» на странице нужного достижения.Здесь ты можешь пообщаться с наставником или мастером, например, попросить совет о том, как лучше выполнять достижение, или задать уточняющий вопрос. Если у тебя появятся вопросы, на которые наставник или мастер не смогли ответить, то обратись в наш «Центр поддержки».Удачных достижений!'}  type={'message'}/>
                        </div>
                     </div>
                  }
               </div>
               :
               <div className={styles.emptyHistory}>
                  <p>Здесь будет отображаться ваша история.</p>
               </div>
            }
         </div>
         :
         ''
         }
      </div>
      </div>
    </div>     
    }
   </>

  )
}

export default DetailAchievementPage;