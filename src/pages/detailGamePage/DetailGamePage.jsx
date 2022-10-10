import React from 'react';

import styles from './DetailGamePage.module.scss';

import Header from '../../components/header/Header'
import BackBtn from '../../components/backBtn/BackBtn';
import DetailPublication from '../../components/detailPublication/DetailPublication';
import AchievementItem from '../../components/achievementItem/AchievementItem';
import ActiveFriendItem from '../../components/activeFriendItem/ActiveFriendItem';
import ProjectItem from '../../components/projectItem/ProjectItem';
import StatisticsCard from '../../components/statisticsCard/StatisticsCard';
import OverlayMenu from '../../components/comparisonOverlayMenu/ComparisonOverlayMenu';
import MainMenu from '../../components/mainMenu/MainMenu';

import { AppContext } from '../../App';

function DetailGamePage() {

   const { darkTheme, visibleMainMenu, onSetBackLink } = React.useContext(AppContext);

   let publicationsData = 
   [
      {
         userAvatar: "./img/headerAccAvatar.png",
         userName: "Илья Абрамов",
         dateAndTime: "29 ноя в 16:48",
         publicationText: "Братья решили покинуть монастырь и поставили в лесу, в десяти верстах от него келью. Вместе срубили церковь и освятили ее в честь Св. Троицы. Около 1335 г. Стефан не выдержал тягот и ушел в Московский Богоявленский монастырь, оставив Сергия одного. Для Сергия начался период тяжелых испытаний. Его уединение длилось около двух лет, а затем к нему стали стекаться иноки. Построили двенадцать келий, обнесли оградой. Так в 1337 г. зародился монастырь Троице-Сергиевский монастырь, а Сергий стал его игуменом.",
         likesCount: 23,
         commentsCount: 0
      },
      {
         userAvatar: "./img/headerAccAvatar.png",
         userName: "Имя Фамилия",
         dateAndTime: "29 ноя в 16:48",
         publicationText: "Текст публикации",
         likesCount: 0,
         commentsCount: 2,
         comments: 
         [
            {
               commentUserAvatar: "./img/headerAccAvatar.png",
               commentUserName: "Алиса Абрамова",
               commentText: "Братья решили покинуть монастырь и поставили в лесу, в десяти верстах от него келью. Вместе срубили церковь и освятили ее в честь Св. Троицы. Около 1335 г. Стефан не выдержал тягот и ушел в Московский Богоявленский монастырь, оставив Сергия одного.",
               commentDateAndTime: "29 ноя в 16:48",
               commentLikesCount: 10
            },
            {
               commentUserAvatar: "./img/headerAccAvatar.png",
               commentUserName: "Имя Фамилия",
               commentText: "Текст комментария",
               commentDateAndTime: "29 ноя в 16:48",
               commentLikesCount: 2
            }
         ]
      }
   ];

   let allAchievementItemsData = [
      {
        title: "Стратегия найдена",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132&text=+"
      },
      {
        title: "Проверка на вшивость",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/a6a6ff&text=+"
      },
      {
        title: "Залайкали!",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/99cccc&text=+",
        blocked: true
      },
      {
        title: "Стратегия найдена",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132&text=+"
      },
      {
        title: "Проверка на вшивость",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/a6a6ff&text=+",
        blocked: true

      },
      {
        title: "Залайкали!",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/99cccc&text=+"
      },
      {
        title: "Стратегия найдена",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132&text=+"
      },
      {
        title: "Проверка на вшивость",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/a6a6ff&text=+"
      },
      {
        title: "Залайкали!",
        gold: 710,
        bgImage: "http://dummyimage.com/132x132/99cccc&text=+",
        blocked: true
        
      },
      {
         title: "Стратегия найдена",
         gold: 710,
         bgImage: "http://dummyimage.com/132x132&text=+"
       },
       {
         title: "Проверка на вшивость",
         gold: 710,
         bgImage: "http://dummyimage.com/132x132/a6a6ff&text=+"
       },
       {
         title: "Залайкали!",
         gold: 710,
         bgImage: "http://dummyimage.com/132x132/99cccc&text=+"
       }
    ];

   let membersData = [
      {
         avatar: "http://dummyimage.com/48x48&text=+",
         isOnline : true,
         name : "Илья Абрамов",
         gold: 13255
       },
       {
         avatar: "http://dummyimage.com/48x48/a6a6ff&text=+",
         isOnline : false,
         name : "Иван Иванов",
         gold: 12
       },
       {
         avatar: "http://dummyimage.com/48x48/99cccc&text=+",
         isOnline : true,
         name : "Мария Душина",
         gold: 120
       },
       {
         avatar: "http://dummyimage.com/48x48/99cccc&text=+",
         isOnline : true,
         name : "Мария Душина",
         gold: 120
       },
       {
         avatar: "http://dummyimage.com/48x48&text=+",
         isOnline : true,
         name : "Илья Абрамов",
         gold: 13255
       },
       {
         avatar: "http://dummyimage.com/48x48&text=+",
         isOnline : true,
         name : "Илья Абрамов",
         gold: 13255
       },
       {
         avatar: "http://dummyimage.com/48x48/a6a6ff&text=+",
         isOnline : false,
         name : "Иван Иванов",
         gold: 12
       },
       {
         avatar: "http://dummyimage.com/48x48/99cccc&text=+",
         isOnline : true,
         name : "Мария Душина",
         gold: 120
       },
       {
         avatar: "http://dummyimage.com/48x48/99cccc&text=+",
         isOnline : true,
         name : "Мария Душина",
         gold: 120
       },
       {
         avatar: "http://dummyimage.com/48x48&text=+",
         isOnline : true,
         name : "Илья Абрамов",
         gold: 13255
       }
   ];
   
   let projectsData = [
      {
         projectImg: "http://dummyimage.com/198x198&text=+",
         projectTeam : "The GAME",
         projectCity: "г. Екатеринбург",
         projectTitle: "To The Moon",
         projectText: "Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс",
         projectOrganizers: [
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Илья абрамов",
               organizerOnline: true,
               organizerGold: 13255 
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Иван Иванов",
               organizerOnline: false,
               organizerGold: 12
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Мария Душина",
               organizerOnline: true,
               organizerGold: 120
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Евгений Говорун",
               organizerOnline: false,
               organizerGold: 12344
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Александр Демин",
               organizerOnline: false,
               organizerGold: 1114
            }
         ]
      },
      {
         projectImg: "http://dummyimage.com/198x198&text=+",
         projectTeam : "The GAME",
         projectCity: "г. Москва",
         projectTitle: "Лаборатория бренда",
         projectText: "Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс",
         projectOrganizers: [
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Илья абрамов",
               organizerOnline: true,
               organizerGold: 13255 
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Иван Иванов",
               organizerOnline: false,
               organizerGold: 12
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Мария Душина",
               organizerOnline: true,
               organizerGold: 120
            }
         ]
      },
      {
         projectImg: "http://dummyimage.com/198x198&text=+",
         projectTeam : "The GAME",
         projectCity: "г. Сочи",
         projectTitle: "Исследование продукта",
         projectText: "Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс",
         projectOrganizers: [
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Илья абрамов",
               organizerOnline: true,
               organizerGold: 13255 
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Иван Иванов",
               organizerOnline: false,
               organizerGold: 12
            },
            {
               organizerAvatar: "http://dummyimage.com/48x48&text=+",
               organizerName: "Мария Душина",
               organizerOnline: true,
               organizerGold: 120
            }
         ]
      }
   ];

   let statisticsCardsData = [
      {
         title: "Общий счет всех команд",
         progress: "370 575 / 2 479 620",
         big: true
      },
      {
         title: "Достижения игры",
         progress: "4 219",
      },
      {
         title: "Прогресс игры",
         progress: "14,9%",
         activeProgress: true
      },
      {
         title: "Количество сообществ в игре",
         progress: "0",
      },
      {
         title: "Количество команд в игре",
         progress: "177",
      },
      {
         title: "Количество участников в игре",
         progress: "673",
      },
      {
         title: "Завершили обучение успешно",
         progress: "55 / 14%",
      },
      {
         title: "Завершили обучение с отличием",
         progress: "92 / 24%",
      },
      {
         title: "Не завершили обучение",
         progress: "67 / 11%",
      }
   ];

   let [activeBlock, setActiveBlock] = React.useState('actionFeed')

   let onSelectContentBlock = (block) =>{
      setActiveBlock(block);
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

   let [activeOverlay, setActiveOverlay] = React.useState(false);

   let onActiveOverlay = (bool) =>{
      setActiveOverlay(bool);

      if(bool){
         document.body.style.overflow = 'hidden';
      } else{
         document.body.style.overflow = 'auto';
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


  return (

   <>
   {
      visibleMainMenu?
      <MainMenu/>
      :
    <div className={darkTheme? styles.darkDetailCard : styles.detailCard}>
      <div className={darkTheme? styles.darkDetailCard__top : styles.detailCard__top}>
         <Header/>
         <div className={styles.backBtn}>
            <BackBtn text={'Назад'} link={'/'}/>
         </div>
         <div className={styles.titleBlock}>
            <div className={styles.titleBlock__img}>
               <img src='http://dummyimage.com/230x230&text=+' width={230} height={230} alt='Title logo'/>
            </div>
            <div className={styles.titleBlock__info}>
               <span className={styles.infoTop}>The Game</span>
               <h2>Сообщество проекта</h2>
               <p>Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс...</p>
               <div className={styles.infoBottom}>
                  <div className={styles.infoBottom__goldAndRating}>
                  <div className={styles.infoBottom__gold}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21.4664 19.032L20.5242 13.2195C20.5102 13.1281 20.4305 13.0625 20.3391 13.0625H14.2078C14.1164 13.0625 14.0367 13.1281 14.0227 13.2195L13.0805 19.032C13.0781 19.0414 13.0781 19.0531 13.0781 19.0625C13.0781 19.1656 13.1625 19.25 13.2656 19.25H21.2812C21.2906 19.25 21.3023 19.25 21.3117 19.2477C21.4125 19.2313 21.4828 19.1352 21.4664 19.032ZM10.4461 13.2195C10.432 13.1281 10.3523 13.0625 10.2609 13.0625H4.12969C4.03828 13.0625 3.95859 13.1281 3.94453 13.2195L3.00234 19.032C3 19.0414 3 19.0531 3 19.0625C3 19.1656 3.08437 19.25 3.1875 19.25H11.2031C11.2125 19.25 11.2242 19.25 11.2336 19.2477C11.3367 19.2313 11.4047 19.1352 11.3883 19.032L10.4461 13.2195ZM8.25 11.1875H16.2656C16.275 11.1875 16.2867 11.1875 16.2961 11.1852C16.3992 11.1687 16.4672 11.0727 16.4508 10.9695L15.5086 5.15703C15.4945 5.06562 15.4148 5 15.3234 5H9.19219C9.10078 5 9.02109 5.06562 9.00703 5.15703L8.06484 10.9695C8.0625 10.9789 8.0625 10.9906 8.0625 11C8.0625 11.1031 8.14687 11.1875 8.25 11.1875Z" fill="#262626"/>
                  </svg>
                     <span>710/1250</span>
                  </div>
                  <div className={styles.infoBottom__rating}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21.2841 8.27462L15.3333 7.40977L12.6731 2.01681C12.6005 1.86915 12.4809 1.74962 12.3333 1.67696C11.963 1.49415 11.513 1.64649 11.3278 2.01681L8.66766 7.40977L2.71688 8.27462C2.55282 8.29806 2.40281 8.3754 2.28797 8.49259C2.14913 8.63529 2.07262 8.82728 2.07526 9.02636C2.0779 9.22544 2.15946 9.41533 2.30203 9.55431L6.6075 13.752L5.59031 19.6793C5.56646 19.8172 5.58172 19.959 5.63436 20.0886C5.687 20.2183 5.77491 20.3306 5.88813 20.4128C6.00135 20.4951 6.13535 20.5439 6.27492 20.5539C6.4145 20.5638 6.55407 20.5345 6.67781 20.4692L12.0005 17.6707L17.3231 20.4692C17.4684 20.5465 17.6372 20.5723 17.7989 20.5441C18.2067 20.4738 18.4809 20.0871 18.4106 19.6793L17.3934 13.752L21.6989 9.55431C21.8161 9.43946 21.8934 9.28946 21.9169 9.1254C21.9802 8.71524 21.6942 8.33556 21.2841 8.27462Z" fill="#262626"/>
                  </svg>
                     <span>32/57</span>
                  </div>
                  </div>
                  <button>Подробнее об игре</button>
               </div>
            </div>
         </div>
      </div>
      <div className={styles.navMenuAndContentWrapper}>
         <div className={styles.navMenuAndContent}>
         <div className={styles.navMenu}>
            <ul>
               <li onClick={()=> onSelectContentBlock('actionFeed')} className={activeBlock=== 'actionFeed'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.375 19.2211V4.77891C22.0312 4.54687 22.5 3.92109 22.5 3.1875C22.5 2.25469 21.7453 1.5 20.8125 1.5C20.0789 1.5 19.4531 1.96875 19.2211 2.625H4.77891C4.54687 1.96875 3.92109 1.5 3.1875 1.5C2.25469 1.5 1.5 2.25469 1.5 3.1875C1.5 3.92109 1.96875 4.54687 2.625 4.77891V19.2211C1.96875 19.4531 1.5 20.0789 1.5 20.8125C1.5 21.7453 2.25469 22.5 3.1875 22.5C3.92109 22.5 4.54687 22.0312 4.77891 21.375H19.2211C19.4531 22.0312 20.0789 22.5 20.8125 22.5C21.7453 22.5 22.5 21.7453 22.5 20.8125C22.5 20.0789 22.0312 19.4531 21.375 19.2211ZM20.8125 2.625C21.1242 2.625 21.375 2.87578 21.375 3.1875C21.375 3.49922 21.1242 3.75 20.8125 3.75C20.5008 3.75 20.25 3.49922 20.25 3.1875C20.25 2.87578 20.5008 2.625 20.8125 2.625ZM3.1875 21.375C2.87578 21.375 2.625 21.1242 2.625 20.8125C2.625 20.5008 2.87578 20.25 3.1875 20.25C3.49922 20.25 3.75 20.5008 3.75 20.8125C3.75 21.1242 3.49922 21.375 3.1875 21.375ZM3.1875 3.75C2.87578 3.75 2.625 3.49922 2.625 3.1875C2.625 2.87578 2.87578 2.625 3.1875 2.625C3.49922 2.625 3.75 2.87578 3.75 3.1875C3.75 3.49922 3.49922 3.75 3.1875 3.75ZM19.6875 19.6875H4.3125V4.3125H19.6875V19.6875ZM20.8125 21.375C20.5008 21.375 20.25 21.1242 20.25 20.8125C20.25 20.5008 20.5008 20.25 20.8125 20.25C21.1242 20.25 21.375 20.5008 21.375 20.8125C21.375 21.1242 21.1242 21.375 20.8125 21.375Z" fill="#262626"/>
                  <path d="M6.75 11.1094H17.25C17.4563 11.1094 17.625 10.9406 17.625 10.7344V6.60938C17.625 6.40312 17.4563 6.23438 17.25 6.23438H6.75C6.54375 6.23438 6.375 6.40312 6.375 6.60938V10.7344C6.375 10.9406 6.54375 11.1094 6.75 11.1094ZM8.0625 7.92188H15.9375V9.42188H8.0625V7.92188ZM6.75 17.7656H17.25C17.4563 17.7656 17.625 17.5969 17.625 17.3906V13.2656C17.625 13.0594 17.4563 12.8906 17.25 12.8906H6.75C6.54375 12.8906 6.375 13.0594 6.375 13.2656V17.3906C6.375 17.5969 6.54375 17.7656 6.75 17.7656ZM8.0625 14.5781H15.9375V16.0781H8.0625V14.5781Z" fill="#262626"/>
               </svg>
                  Лента действий
               </li>
               <li onClick={()=> onSelectContentBlock('achievements')} className={activeBlock=== 'achievements'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5492 10.9976C19.0942 9.97354 18.4328 9.05437 17.6063 8.29763L16.9242 7.67185C16.9011 7.65118 16.8732 7.63652 16.843 7.62914C16.8129 7.62176 16.7814 7.6219 16.7513 7.62953C16.7212 7.63717 16.6935 7.65207 16.6705 7.67294C16.6475 7.6938 16.63 7.71998 16.6195 7.74919L16.3148 8.62341C16.125 9.17185 15.7758 9.732 15.2812 10.2828C15.2484 10.3179 15.2109 10.3273 15.1852 10.3297C15.1594 10.332 15.1195 10.3273 15.0844 10.2945C15.0516 10.2664 15.0352 10.2242 15.0375 10.182C15.1242 8.77107 14.7023 7.17966 13.7789 5.44763C13.0148 4.00857 11.9531 2.88591 10.6266 2.1031L9.65859 1.53357C9.53203 1.45857 9.37031 1.557 9.37734 1.70466L9.42891 2.82966C9.46406 3.59841 9.375 4.2781 9.16406 4.84294C8.90625 5.53435 8.53594 6.17653 8.0625 6.7531C7.73302 7.15379 7.35959 7.51622 6.94922 7.83357C5.96087 8.59333 5.15722 9.56685 4.59844 10.6812C4.04103 11.8053 3.75068 13.0429 3.75 14.2976C3.75 15.4039 3.96797 16.475 4.39922 17.4851C4.81562 18.4577 5.41654 19.3404 6.16875 20.0843C6.92813 20.8343 7.80938 21.425 8.79141 21.8351C9.80859 22.2617 10.8867 22.4773 12 22.4773C13.1133 22.4773 14.1914 22.2617 15.2086 21.8375C16.1882 21.4297 17.079 20.8351 17.8312 20.0867C18.5906 19.3367 19.1859 18.4601 19.6008 17.4875C20.0314 16.4801 20.2523 15.3955 20.25 14.3C20.25 13.1562 20.0156 12.0453 19.5492 10.9976ZM16.7109 18.95C15.4523 20.1968 13.7812 20.8812 12 20.8812C10.2188 20.8812 8.54766 20.1968 7.28906 18.95C6.03516 17.7054 5.34375 16.0554 5.34375 14.3C5.34375 13.2804 5.57344 12.3031 6.02578 11.3937C6.46641 10.5054 7.12266 9.71091 7.91953 9.09919C8.42775 8.71058 8.8887 8.26379 9.29297 7.76794C9.87891 7.0531 10.3383 6.25622 10.657 5.40075C10.7878 5.04787 10.8828 4.68276 10.9406 4.31091C11.5055 4.83122 11.9789 5.45935 12.375 6.19528C13.1578 7.66247 13.5187 8.96794 13.4484 10.0789C13.4316 10.3405 13.4744 10.6026 13.5734 10.8453C13.6725 11.0881 13.8253 11.3052 14.0203 11.4804C14.1893 11.6331 14.387 11.7507 14.6019 11.8263C14.8167 11.902 15.0445 11.9342 15.2719 11.9211C15.7336 11.8976 16.1578 11.6937 16.4672 11.3492C16.7789 11 17.0484 10.6437 17.2734 10.2804C17.6016 10.7 17.8758 11.157 18.0938 11.6492C18.4664 12.4883 18.6562 13.3812 18.6562 14.3C18.6562 16.0554 17.9648 17.7078 16.7109 18.95Z" fill="#262626"/>
               </svg>
                  Достижения
               </li>
               <li onClick={()=> onSelectContentBlock('projects')} className={activeBlock=== 'projects'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.3157 13.8624C7.38836 13.9351 7.50789 13.9351 7.58054 13.8624L9.96648 11.4765L11.9845 13.4968C12.0571 13.5695 12.1766 13.5695 12.2493 13.4968L17.5532 8.1882C17.6259 8.11554 17.6259 7.99601 17.5532 7.92335L16.6907 7.06085C16.6181 6.9882 16.4985 6.9882 16.4259 7.06085L12.118 11.3734L10.1001 9.35304C10.0274 9.28039 9.90789 9.28039 9.83523 9.35304L6.4532 12.7351C6.38054 12.8077 6.38054 12.9273 6.4532 12.9999L7.3157 13.8624Z" fill="#262626"/>
                  <path d="M21.1875 3.75H12.8438V2.25C12.8438 2.14687 12.7594 2.0625 12.6562 2.0625H11.3438C11.2406 2.0625 11.1562 2.14687 11.1562 2.25V3.75H2.8125C2.39766 3.75 2.0625 4.08516 2.0625 4.5V16.6875C2.0625 17.1023 2.39766 17.4375 2.8125 17.4375H11.1656V18.1875L7.30313 20.7211C7.21641 20.7773 7.19297 20.8922 7.24922 20.9789L7.95938 22.0852V22.0875C8.01562 22.1742 8.13281 22.1977 8.21953 22.1414L12 19.6617L15.7805 22.1414C15.8672 22.1977 15.9844 22.1742 16.0406 22.0875V22.0852L16.7508 20.9789C16.807 20.8922 16.7813 20.7773 16.6969 20.7211L12.8438 18.1945V17.4375H21.1875C21.6023 17.4375 21.9375 17.1023 21.9375 16.6875V4.5C21.9375 4.08516 21.6023 3.75 21.1875 3.75ZM20.25 15.75H3.75V5.4375H20.25V15.75Z" fill="#262626"/>
               </svg>
                  Проекты
               </li>
               <li onClick={()=> onSelectContentBlock('statistics')} className={activeBlock=== 'statistics'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5625 17.625H8.4375C8.54063 17.625 8.625 17.5406 8.625 17.4375V6.5625C8.625 6.45937 8.54063 6.375 8.4375 6.375H6.5625C6.45937 6.375 6.375 6.45937 6.375 6.5625V17.4375C6.375 17.5406 6.45937 17.625 6.5625 17.625ZM11.0625 11.0625H12.9375C13.0406 11.0625 13.125 10.9781 13.125 10.875V6.5625C13.125 6.45937 13.0406 6.375 12.9375 6.375H11.0625C10.9594 6.375 10.875 6.45937 10.875 6.5625V10.875C10.875 10.9781 10.9594 11.0625 11.0625 11.0625ZM15.5625 12.75H17.4375C17.5406 12.75 17.625 12.6656 17.625 12.5625V6.5625C17.625 6.45937 17.5406 6.375 17.4375 6.375H15.5625C15.4594 6.375 15.375 6.45937 15.375 6.5625V12.5625C15.375 12.6656 15.4594 12.75 15.5625 12.75ZM20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 19.6875H4.3125V4.3125H19.6875V19.6875Z" fill="#262626"/>
               </svg>
                  Статистика
               </li>
               <li onClick={()=> onSelectContentBlock('members')} className={activeBlock=== 'members'? styles.activeNavMenuItem : ''}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1202 17.8969C19.6781 16.8496 19.0365 15.8984 18.2311 15.0961C17.4282 14.2915 16.4771 13.65 15.4303 13.207C15.421 13.2023 15.4116 13.2 15.4022 13.1953C16.8624 12.1406 17.8116 10.4227 17.8116 8.48438C17.8116 5.27344 15.21 2.67188 11.9991 2.67188C8.78815 2.67188 6.18658 5.27344 6.18658 8.48438C6.18658 10.4227 7.1358 12.1406 8.59596 13.1977C8.58658 13.2023 8.57721 13.2047 8.56783 13.2094C7.51783 13.6523 6.57564 14.2875 5.76705 15.0984C4.96246 15.9013 4.32097 16.8524 3.87799 17.8992C3.44281 18.924 3.2081 20.0228 3.18658 21.1359C3.18596 21.161 3.19034 21.1858 3.19949 21.2091C3.20863 21.2324 3.22234 21.2537 3.23981 21.2716C3.25729 21.2895 3.27817 21.3037 3.30123 21.3134C3.32429 21.3231 3.34906 21.3281 3.37408 21.3281H4.78033C4.88346 21.3281 4.96549 21.2461 4.96783 21.1453C5.01471 19.3359 5.74127 17.6414 7.02564 16.357C8.35455 15.0281 10.1194 14.2969 11.9991 14.2969C13.8788 14.2969 15.6436 15.0281 16.9725 16.357C18.2569 17.6414 18.9835 19.3359 19.0303 21.1453C19.0327 21.2484 19.1147 21.3281 19.2178 21.3281H20.6241C20.6491 21.3281 20.6739 21.3231 20.6969 21.3134C20.72 21.3037 20.7409 21.2895 20.7584 21.2716C20.7758 21.2537 20.7895 21.2324 20.7987 21.2091C20.8078 21.1858 20.8122 21.161 20.8116 21.1359C20.7881 20.0156 20.5561 18.9258 20.1202 17.8969ZM11.9991 12.5156C10.9233 12.5156 9.9108 12.0961 9.14908 11.3344C8.38736 10.5727 7.96783 9.56016 7.96783 8.48438C7.96783 7.40859 8.38736 6.39609 9.14908 5.63437C9.9108 4.87266 10.9233 4.45312 11.9991 4.45312C13.0749 4.45312 14.0874 4.87266 14.8491 5.63437C15.6108 6.39609 16.0303 7.40859 16.0303 8.48438C16.0303 9.56016 15.6108 10.5727 14.8491 11.3344C14.0874 12.0961 13.0749 12.5156 11.9991 12.5156Z" fill="#262626"/>
               </svg>
                  Участники
               </li>
            </ul>
         </div>
         {
         activeBlock === 'actionFeed'?
         <div className={styles.content}>
            <h3>Лента действий</h3>
            <div className={styles.content__inputAndBtns}>
               <input type='text' value={inputText} onChange={handleInputChange} onKeyUp={handleKeyUp} placeholder='Хотите поделиться мыслями?'/>
               <div className={styles.content__btns}>
                  <div className={styles.attachmentsBlock} onMouseEnter={()=>onVisibleAttachmentsPopup(true)} onMouseLeave={()=>onVisibleAttachmentsPopup(false)} ref={popupAttachmentsRef}>
                  <button className={styles.attachments}>
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
            <div className={styles.publicationsBlock}>
               {
                  publications.map((item, index) => <DetailPublication userAvatar={"./img/headerAccAvatar.png"} userName={"Илья Абрамов"} dateAndTime={"29 ноя в 16:48"} publicationText={item.inputText} likesCount={0} commentsCount={0} key={`${index}__${item.dateAndTime}`}/>)
               }
               {
                  publicationsData.map((item, index) => <DetailPublication userAvatar={item.userAvatar} userName={item.userName} dateAndTime={item.dateAndTime} publicationText={item.publicationText} likesCount={item.likesCount} commentsCount={item.commentsCount} comments={item.comments} key={`${index}__${item.dateAndTime}`}/>)
               }
            </div>
         </div>
         : ''
         }
         {
          activeBlock === 'achievements'?
          <div className={styles.content}>
            {
            activeOverlay? 
            <div className='overlay'>
               <OverlayMenu onActiveOverlay={onActiveOverlay}/>
            </div>
            :
            ''
            }
            <div className={styles.achievementsTop}>
               <div className={styles.achievementsTop__left}>
                  <h3>Достижения</h3>
               </div>
               <div className={styles.achievementsTop__right}>
                  <div className={styles.achievementsTop__rightFilters}>
                     <button>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8915 13.7344H16.1087L18.0985 10.2656H5.90166L7.8915 13.7344ZM20.6274 3.60938H3.37275C2.79853 3.60938 2.43994 4.23516 2.72822 4.73438L5.03916 8.76562H18.961L21.2743 4.73438C21.5602 4.23516 21.2017 3.60938 20.6274 3.60938ZM8.17978 19.6406C8.17978 20.0555 8.51259 20.3906 8.92509 20.3906H15.0751C15.4876 20.3906 15.8204 20.0555 15.8204 19.6406V15.2344H8.17978V19.6406Z" fill="#262626"/>
                     </svg>
                     </button>
                     <button>
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 15.9688C5.5 16.1986 5.54526 16.4261 5.63321 16.6384C5.72116 16.8508 5.85006 17.0437 6.01256 17.2062C6.17507 17.3687 6.36798 17.4976 6.5803 17.5855C6.79262 17.6735 7.02019 17.7188 7.25 17.7188C7.47981 17.7188 7.70738 17.6735 7.9197 17.5855C8.13202 17.4976 8.32493 17.3687 8.48744 17.2062C8.64994 17.0437 8.77884 16.8508 8.86679 16.6384C8.95473 16.4261 9 16.1986 9 15.9688C9 15.7389 8.95473 15.5114 8.86679 15.2991C8.77884 15.0867 8.64994 14.8938 8.48744 14.7313C8.32493 14.5688 8.13202 14.4399 7.9197 14.352C7.70738 14.264 7.47981 14.2188 7.25 14.2188C7.02019 14.2188 6.79262 14.264 6.5803 14.352C6.36798 14.4399 6.17507 14.5688 6.01256 14.7313C5.85006 14.8938 5.72116 15.0867 5.63321 15.2991C5.54526 15.5114 5.5 15.7389 5.5 15.9688ZM14.25 15.9688C14.25 16.4329 14.4344 16.878 14.7626 17.2062C15.0908 17.5344 15.5359 17.7188 16 17.7188C16.4641 17.7188 16.9092 17.5344 17.2374 17.2062C17.5656 16.878 17.75 16.4329 17.75 15.9688C17.75 15.5046 17.5656 15.0595 17.2374 14.7313C16.9092 14.4031 16.4641 14.2188 16 14.2188C15.5359 14.2188 15.0908 14.4031 14.7626 14.7313C14.4344 15.0595 14.25 15.5046 14.25 15.9688ZM23 15.9688C23 16.4329 23.1844 16.878 23.5126 17.2062C23.8408 17.5344 24.2859 17.7188 24.75 17.7188C25.2141 17.7188 25.6592 17.5344 25.9874 17.2062C26.3156 16.878 26.5 16.4329 26.5 15.9688C26.5 15.5046 26.3156 15.0595 25.9874 14.7313C25.6592 14.4031 25.2141 14.2188 24.75 14.2188C24.2859 14.2188 23.8408 14.4031 23.5126 14.7313C23.1844 15.0595 23 15.5046 23 15.9688Z" fill="#262626"/>
                     </svg>
                     </button>
                  </div>
                  <div className={styles.achievementsTop__rightCompare}>
                     <button onClick={() => onActiveOverlay(true)}>Сравнить</button>
                  </div>
               </div>
            </div>
            <div className={styles.achievementsItems}>
               {
                  allAchievementItemsData.map((item, index) => <div className={styles.achievementsItem} onClick={onSetBackLink('/detailGamePage')} key={`${item.title}__${index}`}><AchievementItem title={item.title} bgImage={item.bgImage} gold={item.gold} blocked={item.blocked}/></div>)
               }
            </div>
          </div>
          : ''
         }
         {
         activeBlock === 'projects'?
         <div className={styles.content}>
            <div className={styles.projectsTop}>
               <h3>Проекты</h3>
               <button>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.5781 7.62187L7.675 2.49844C7.62969 2.45937 7.57188 2.4375 7.51094 2.4375H6.12813C6.0125 2.4375 5.95937 2.58125 6.04688 2.65625L11.5188 7.40625H2.375C2.30625 7.40625 2.25 7.4625 2.25 7.53125V8.46875C2.25 8.5375 2.30625 8.59375 2.375 8.59375H11.5172L6.04531 13.3438C5.95781 13.4203 6.01094 13.5625 6.12656 13.5625H7.55625C7.58594 13.5625 7.61562 13.5516 7.6375 13.5312L13.5781 8.37813C13.6322 8.33109 13.6756 8.27299 13.7053 8.20776C13.735 8.14253 13.7504 8.07168 13.7504 8C13.7504 7.92832 13.735 7.85747 13.7053 7.79224C13.6756 7.72701 13.6322 7.66891 13.5781 7.62187Z" fill="#1890FF"/>
                  </svg>
                  Перейти к сервису
               </button>
            </div>
            <div className={styles.projectsFilters}>
               <div className={styles.projectsFilters__left}>
                  <button>
                     Действующие
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                     </svg>
                  </button>
                  <button>
                     The GAME
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                     </svg>
                  </button>
                  <button>
                     г. Москва
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                     </svg>
                  </button>
                  <button>
                     Социальный
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                     </svg>
                  </button>
               </div>
               <div className={styles.projectsFilters__right}>
                  <button>
                     По возрастанию даты
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                     </svg>
                  </button>
               </div>
            </div>
            <div className={styles.projectsItems}>
               {
                  projectsData.map((item) => <ProjectItem projectImg={item.projectImg} projectTeam={item.projectTeam} projectCity={item.projectCity} projectTitle={item.projectTitle} projectText={item.projectText} projectOrganizers={item.projectOrganizers} key={item.projectTitle}/>)
               }
            </div>
         </div>
         :
         ''
         }
         {
         activeBlock === 'statistics'?
         <div className={styles.content}>
            <div className={styles.statisticsTitle}>
               <h3>Статистика:</h3>
               <div className={styles.statisticsSelectedItem}>
                  <h3>Игры</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.3759 5.94801L18.3751 5.94916L11.9998 14.7368L5.62451 5.94916L5.62452 5.94916L5.62368 5.94801C5.48911 5.7641 5.2728 5.65 5.03887 5.65H3.28106C2.8429 5.65 2.58966 6.14648 2.84427 6.5016L2.84427 6.5016L2.8454 6.50316L11.1095 17.8961L11.1097 17.8965C11.5489 18.5003 12.4502 18.5023 12.8882 17.8957C12.8882 17.8956 12.8883 17.8955 12.8883 17.8954L21.1505 6.50509C21.1507 6.50477 21.1509 6.50444 21.1512 6.50411C21.4123 6.14768 21.156 5.65 20.7186 5.65H18.9607C18.7268 5.65 18.5105 5.7641 18.3759 5.94801Z" fill="#262626" stroke="#262626" strokeWidth="0.7"/>
                  </svg>
               </div>
            </div>
            <div className={styles.statisticsFilters}>
               <button>
                  Сезон 2
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                  </svg>
               </button>
               <button>
                  Челябинская область
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                  </svg>
               </button>
               <button>
                  Челябинск
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                  </svg>
               </button>
               <button>
                  Все условия
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                  </svg>
               </button>
               <button>
                  Прогресс &lt;40%
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3594 3H9.4805C9.42073 3 9.36448 3.0293 9.32932 3.07734L6.00003 7.66641L2.67073 3.07734C2.63557 3.0293 2.57932 3 2.51956 3H1.64065C1.56448 3 1.51995 3.08672 1.56448 3.14883L5.69651 8.84531C5.84651 9.05156 6.15354 9.05156 6.30237 8.84531L10.4344 3.14883C10.4801 3.08672 10.4356 3 10.3594 3Z" fill="#262626"/>
                  </svg>
               </button>
            </div>
            <div className={styles.statisticsItems}>
               {
                  statisticsCardsData.map((item) => <div className={item.big? styles.statisticsItemBig : styles.statisticsItem} key={item.title}><StatisticsCard title={item.title} progress={item.progress} big={item.big} activeProgress={item.activeProgress}/></div>)
               }
            </div>
         </div>
         :
         ''
         }
         {
         activeBlock === 'members'?
         <div className={styles.content}>
            <div className={styles.membersTop}>
               <h3>Все участники</h3>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3759 5.94801L18.3751 5.94916L11.9998 14.7368L5.62451 5.94916L5.62452 5.94916L5.62368 5.94801C5.48911 5.7641 5.2728 5.65 5.03887 5.65H3.28106C2.8429 5.65 2.58966 6.14648 2.84427 6.5016L2.84427 6.5016L2.8454 6.50316L11.1095 17.8961L11.1097 17.8965C11.5489 18.5003 12.4502 18.5023 12.8882 17.8957C12.8882 17.8956 12.8883 17.8955 12.8883 17.8954L21.1505 6.50509C21.1507 6.50477 21.1509 6.50444 21.1512 6.50411C21.4123 6.14768 21.156 5.65 20.7186 5.65H18.9607C18.7268 5.65 18.5105 5.7641 18.3759 5.94801Z" fill="#262626" stroke="#262626" strokeWidth="0.7"/>
               </svg>
            </div>
            <div className={styles.membersItems}>
               {
                  membersData.map((item, index) => <div className={styles.membersItem} key={`${item.name}_${index}`}><ActiveFriendItem avatar={item.avatar} isOnline={item.isOnline} name={item.name} gold={item.gold}/></div>)
               }
            </div>
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

export default DetailGamePage;