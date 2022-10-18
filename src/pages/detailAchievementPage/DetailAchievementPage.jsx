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
   }

   let [mentorEstimateArtifact, setMentorEstimateArtifact] = React.useState(false);

   let onMentorEstimateArtifact = () =>{
      setMentorEstimateArtifact(true);
      handleStepProgress(setStepProgress2, styles.completedStep)
      handleStepProgress(setStepProgress3, styles.activeStep)
      onActiveEstimateOverlay(false);
   }

   let [masterEstimateArtifact, setMasterEstimateArtifact] = React.useState(false);

   let onMasterEstimateArtifact = () =>{
      setMasterEstimateArtifact(true);
      handleStepProgress(setStepProgress3, styles.completedStep)
      handleStepProgress(setStepProgress4, styles.completedStep)
      onActiveEstimateOverlay(false);
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
            },
            ...prevPublications,
          ]);
         publications.reverse()
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
               <EstimateOverlayMenu onActiveEstimateOverlay={onActiveEstimateOverlay} onEstimateArtifact={whoConnect === 'mentor'? onMentorEstimateArtifact : onMasterEstimateArtifact}/>
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
                                 <button className={styles.sendAndEstimateBtn}>Прикрепить артефакт</button>
                                 :
                                 <button id={styles.sendedBtn}>Артефакт отправлен</button>
                              }
                              <button className={styles.messageBtn}>Написать наставнику</button>
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
                                 <button className={styles.sendAndEstimateBtn}>Оценить артефакт</button>
                                 :
                                 ''
                              }
                              <button className={styles.messageBtn}>Написать команде</button>
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
                               <button className={styles.sendAndEstimateBtn}>Оценить артефакт</button>
                               :
                               <button id={styles.completedSendAndEstimateBtn}>Артефакт оценен</button>
                               :
                               ''
                              } 
                              <button className={styles.messageBtn}>Написать команде</button>
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
                  
               </div>
            </div>
         </div>
      </div>
      <div className={styles.kekBtns}>
         <button onClick={()=> onWhoConnect('user')}>Пользователь</button>
         <button onClick={()=> onWhoConnect('mentor')}>Наставник</button>
         <button onClick={()=> onWhoConnect('master')}>Мастер</button>
         <button onClick={()=> onSelectContentBlock('historyOfAchievements')}>Перейти к истории(временно для теста на мобильной версии)</button>
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
         <div className={styles.content}>
            <h3>История достижений</h3>
            {
               unblockAchievement?
               <div className={styles.unblockedHistory}>
                  <div className={styles.steps}>
                     <div className={styles.steps__step}>
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
                     </div>
                     <div className={styles.steps__step}>
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
                     </div>
                     <div className={styles.steps__step}>
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
                     </div>
                     <div className={styles.steps__step}>
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
                           publications?.map((item, index) => <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={item.inputText} key={index}/>)
                           }
                           <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={'Этот алгоритм поможет тебе разблокировать достижение.1) Изучи полезную информацию во вкладке «Инструкция» и узнай больше о том, какое задание предстоит выполнить, чтобы создать артефакт, необходимый для достижения. 2) Загляни во вкладку «Артефакт» и уточни то, в каком формате тебе потребуется сохранить артефакт, чтобы он подошел к этому достижению.3) Отправься в реальный мир, чтобы выполнить задание и создать нужный артефакт.4) Когда все будет готово, возвращайся сюда, чтобы загрузить артефакт к достижению. Для этого нажми на кнопку «Прикрепить» во вкладке «История достижения».5) Дождись, пока наставник и мастер оценят результаты твоей работы. Если артефакт подойдет, то достижение разблокируется. Если нет, то наставник и мастер скажут, чего в нем не хватает и как его улучшить.Если что-то окажется не понятным, то обратись к наставнику прямо в этом чате. Для этого нажми кнопку «Спросить».'}/>
                           <AchievementPublication userAvatar={'./img/headerAccAvatar.png'} userName={'Евгений Говорун'} dateAndTime={'29 ноя в 16:48'} publicationText={'Привет! Меня зовут Евгений. В этот чат я буду присылать сообщения об изменении текущего статуса конкретно этого достижения.Обрати внимание, что такой чат есть у каждого достижения, чтобы тебе, наставнику и мастеру было удобно и никто не запутался в информации.Ты всегда можешь попасть в такой чат через вкладку «История достижения» на странице нужного достижения.Здесь ты можешь пообщаться с наставником или мастером, например, попросить совет о том, как лучше выполнять достижение, или задать уточняющий вопрос. Если у тебя появятся вопросы, на которые наставник или мастер не смогли ответить, то обратись в наш «Центр поддержки».Удачных достижений!'}/>
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