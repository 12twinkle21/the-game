import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import styles from './Main.module.scss';

import TopSliderItem from '../../components/topSliderItem/TopSliderItem';
import MainBlockTitle from '../../components/mainBlockTitle/MainBlockTitle';
import GameCard from '../../components/gameCard/GameCard';
import AchievementItem from '../../components/achievementItem/AchievementItem';
import ActiveFriendItem from '../../components/activeFriendItem/ActiveFriendItem';
import PopularAmongFriendsItem from '../../components/popularAmongFriendsItem/PopularAmongFriendsItem';
import UsefulArticlesItem from '../../components/usefulArticlesItem/UsefulArticlesItem';
import MainMenu from '../../components/mainMenu/MainMenu';

import { AppContext } from '../../App';

function Main() {

  const { darkTheme, visibleMainMenu, onVisibleMainMenu, isOnline, onSetBackLink } = React.useContext(AppContext);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: darkTheme? "url(./img/darkSliderArrow.svg)" : "url(./img/sliderArrow.svg)", backgroundSize: "cover"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: darkTheme? "url(./img/darkSliderArrow.svg)" : "url(./img/sliderArrow.svg)", backgroundSize: "cover"}}
        onClick={onClick}
      />
    );
  }

  
  const topSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  const bottomSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 2.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 1.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      }
    ]
  };

  const gameCardsSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 3.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 2.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 550,
        settings:{
          slidesToShow: 1.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      }
    ]
  };

  const availableAchievementSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 4.2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 800,
        settings:{
          slidesToShow: 3.2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 2.2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 450,
        settings:{
          slidesToShow: 1.6
        }
      }
    ]
  };

  const activeFriendsSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1100,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 3.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 850,
        settings:{
          slidesToShow: 2.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      }
    ]
  };

  const popularAmongFriendsSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1023,
        settings:{
          slidesToShow: 3.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 850,
        settings:{
          slidesToShow: 2.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1.1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true
        }
      }
    ]
  };

  let topSliderItemsData = [
    {
      id: 1,
      title: "Планируй. Обновляйся. Разблокируй достижения.",
      text: "Совершай достижения, чтобы улучшить свои навыки и добиться успеха в любимом деле.",
      bgImage: "http://dummyimage.com/1440x768&text=+"
    },
    {
      id: 2,
      title: "Заголовок слайдера 2",
      text: "Текст слайдера 2",
      bgImage: "http://dummyimage.com/1440x768/a6a6ff&text=+"
    },
    {
      id: 3,
      title: "Заголовок слайдера 3",
      text: "Текст слайдера 3",
      bgImage: "http://dummyimage.com/1440x768/99cccc&text=+"
    }
  ]; 

  let gameCardsData = [
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+"
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+"
    }
  ];

  let achievementItemsData = [
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

  let activeFriendsData = [
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

  let popularAmongFriendsData = [
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+",
      title: "Геймдизайн в лагере",
      countOfPlayers: 6
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+",
      title: "Команда проекта",
      countOfPlayers: 2
    },
    {
      bgImage: "http://dummyimage.com/282x282/F08080&text=+",
      title: "Фандрайзинг",
      countOfPlayers: 4
    },
    {
      bgImage: "http://dummyimage.com/282x282/FFE4B5&text=+",
      title: "Лаборатория проектов",
      countOfPlayers: 3
    },
    {
      bgImage: "http://dummyimage.com/282x282/a6a6ff&text=+",
      title: "Геймдизайн в лагере",
      countOfPlayers: 6
    },
    {
      bgImage: "http://dummyimage.com/282x282/99cccc&text=+",
      title: "Команда проекта",
      countOfPlayers: 2
    },
    {
      bgImage: "http://dummyimage.com/282x282/F08080&text=+",
      title: "Фандрайзинг",
      countOfPlayers: 4
    },
    {
      bgImage: "http://dummyimage.com/282x282/FFE4B5&text=+",
      title: "Лаборатория проектов",
      countOfPlayers: 3
    }
  ];

  let usefulArticlesData = [
    {
      image: "http://dummyimage.com/384x300/a6a6ff&text=+",
      type: "Мини-лекция",
      title: "Что такое дерево достижений?",
      text: "Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс. Узнайте больше о том, как древо достижений помогает организовать учебный процесс."
    },
    {
      image: "http://dummyimage.com/384x300/99cccc&text=+",
      type: "Инструкция",
      title: "Как организовать обучение на основе достижений?",
      text: "Легко научитесь создавать свои деревья достижений на платформе The GAME."
    },
    {
      image: "http://dummyimage.com/384x300/F08080&text=+",
      type: "Мини-лекция",
      title: "Как оценивать достижения участников?",
      text: "Привлекайте участников к обмену опытом и поддержке в рамках учебного процесса."
    },
    {
      image: "http://dummyimage.com/384x300/FFE4B5&text=+",
      type: "Тип статьи",
      title: "Название статьи",
      text: "Описание статьи"
    },
    {
      image: "http://dummyimage.com/384x300&text=+",
      type: "Тип статьи",
      title: "Название статьи",
      text: "Описание статьи"
    }
  ];

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () =>{
    setScrollPosition(window.scrollY);
  }

  React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])
 
  const [visibleAccountPopup, setVisibleAccountPopup] = React.useState(false);

  const onVisibleAccountPopop = () =>{
    setVisibleAccountPopup(!visibleAccountPopup);
  }

  let popupBtnRef = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
 }, []);
 
  let handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
    if (!path.includes(popupBtnRef.current)) { 
       setVisibleAccountPopup(false);
    }
 }

  return (

    <>
    {
      visibleMainMenu?
      <MainMenu/>
      :
      <>
    <div className={styles.sliderWrapper}>
      <div className={scrollPosition >= 110? darkTheme? styles.darkScrollHeaderWrapper : styles.scrollHeaderWrapper : styles.headerWrapper}>
      <div className={scrollPosition >= 110? darkTheme? styles.darkMainHeaderScroll : styles.mainHeaderScroll : styles.mainHeader}>
        <div className={scrollPosition >= 110? darkTheme? styles.darkMainHeaderScroll__left : styles.mainHeaderScroll__left : styles.mainHeader__left}>
          <svg onClick={onVisibleMainMenu} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="4" fill="#329CFF"/>
            <path d="M13.333 15.083C13.333 15.5471 13.5174 15.9923 13.8456 16.3204C14.1738 16.6486 14.6189 16.833 15.083 16.833C15.5471 16.833 15.9923 16.6486 16.3204 16.3204C16.6486 15.9923 16.833 15.5471 16.833 15.083C16.833 14.6189 16.6486 14.1738 16.3204 13.8456C15.9923 13.5174 15.5471 13.333 15.083 13.333C14.6189 13.333 14.1738 13.5174 13.8456 13.8456C13.5174 14.1738 13.333 14.6189 13.333 15.083ZM13.333 23.833C13.333 24.2971 13.5174 24.7423 13.8456 25.0704C14.1738 25.3986 14.6189 25.583 15.083 25.583C15.5471 25.583 15.9923 25.3986 16.3204 25.0704C16.6486 24.7423 16.833 24.2971 16.833 23.833C16.833 23.3689 16.6486 22.9238 16.3204 22.5956C15.9923 22.2674 15.5471 22.083 15.083 22.083C14.6189 22.083 14.1738 22.2674 13.8456 22.5956C13.5174 22.9238 13.333 23.3689 13.333 23.833ZM13.333 32.583C13.333 33.0471 13.5174 33.4923 13.8456 33.8204C14.1738 34.1486 14.6189 34.333 15.083 34.333C15.5471 34.333 15.9923 34.1486 16.3204 33.8204C16.6486 33.4923 16.833 33.0471 16.833 32.583C16.833 32.1189 16.6486 31.6738 16.3204 31.3456C15.9923 31.0174 15.5471 30.833 15.083 30.833C14.6189 30.833 14.1738 31.0174 13.8456 31.3456C13.5174 31.6738 13.333 32.1189 13.333 32.583Z" fill="white"/>
            <path d="M22.666 15.083C22.666 15.5471 22.8504 15.9923 23.1786 16.3204C23.5068 16.6486 23.9519 16.833 24.416 16.833C24.8801 16.833 25.3253 16.6486 25.6535 16.3204C25.9816 15.9923 26.166 15.5471 26.166 15.083C26.166 14.6189 25.9816 14.1738 25.6535 13.8456C25.3253 13.5174 24.8801 13.333 24.416 13.333C23.9519 13.333 23.5068 13.5174 23.1786 13.8456C22.8504 14.1738 22.666 14.6189 22.666 15.083ZM22.666 23.833C22.666 24.2971 22.8504 24.7423 23.1786 25.0704C23.5068 25.3986 23.9519 25.583 24.416 25.583C24.8801 25.583 25.3253 25.3986 25.6535 25.0704C25.9816 24.7423 26.166 24.2971 26.166 23.833C26.166 23.3689 25.9816 22.9238 25.6535 22.5956C25.3253 22.2674 24.8801 22.083 24.416 22.083C23.9519 22.083 23.5068 22.2674 23.1786 22.5956C22.8504 22.9238 22.666 23.3689 22.666 23.833ZM22.666 32.583C22.666 33.0471 22.8504 33.4923 23.1786 33.8204C23.5068 34.1486 23.9519 34.333 24.416 34.333C24.8801 34.333 25.3253 34.1486 25.6535 33.8204C25.9816 33.4923 26.166 33.0471 26.166 32.583C26.166 32.1189 25.9816 31.6738 25.6535 31.3456C25.3253 31.0174 24.8801 30.833 24.416 30.833C23.9519 30.833 23.5068 31.0174 23.1786 31.3456C22.8504 31.6738 22.666 32.1189 22.666 32.583Z" fill="white"/>
            <path d="M32 15.083C32 15.5471 32.1844 15.9923 32.5126 16.3204C32.8408 16.6486 33.2859 16.833 33.75 16.833C34.2141 16.833 34.6592 16.6486 34.9874 16.3204C35.3156 15.9923 35.5 15.5471 35.5 15.083C35.5 14.6189 35.3156 14.1738 34.9874 13.8456C34.6592 13.5174 34.2141 13.333 33.75 13.333C33.2859 13.333 32.8408 13.5174 32.5126 13.8456C32.1844 14.1738 32 14.6189 32 15.083ZM32 23.833C32 24.2971 32.1844 24.7423 32.5126 25.0704C32.8408 25.3986 33.2859 25.583 33.75 25.583C34.2141 25.583 34.6592 25.3986 34.9874 25.0704C35.3156 24.7423 35.5 24.2971 35.5 23.833C35.5 23.3689 35.3156 22.9238 34.9874 22.5956C34.6592 22.2674 34.2141 22.083 33.75 22.083C33.2859 22.083 32.8408 22.2674 32.5126 22.5956C32.1844 22.9238 32 23.3689 32 23.833ZM32 32.583C32 33.0471 32.1844 33.4923 32.5126 33.8204C32.8408 34.1486 33.2859 34.333 33.75 34.333C34.2141 34.333 34.6592 34.1486 34.9874 33.8204C35.3156 33.4923 35.5 33.0471 35.5 32.583C35.5 32.1189 35.3156 31.6738 34.9874 31.3456C34.6592 31.0174 34.2141 30.833 33.75 30.833C33.2859 30.833 32.8408 31.0174 32.5126 31.3456C32.1844 31.6738 32 32.1189 32 32.583Z" fill="white"/>
          </svg>
          <Link to='/' className='clearLink'>
            {
              scrollPosition >= 110 && darkTheme?
              <img src='./img/mainHeaderLogo.svg' width={256} height={30} alt='Logo'/>
              :
              <img src='./img/headerLogo.svg' width={256} height={30} alt='Logo'/>
            }
          </Link>
        </div>
        <div className={scrollPosition >= 110? darkTheme? styles.darkMainHeaderScroll__right : styles.mainHeaderScroll__right : styles.mainHeader__right}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3438 3.75H18.1875V2.8125C18.1875 2.70937 18.1031 2.625 18 2.625H6C5.89687 2.625 5.8125 2.70937 5.8125 2.8125V3.75H3.65625C3.38275 3.75 3.12044 3.85865 2.92705 4.05205C2.73365 4.24544 2.625 4.50775 2.625 4.78125V8.25C2.625 10.1648 4.03125 11.7563 5.86406 12.0469C6.22734 14.7703 8.41406 16.9148 11.1562 17.2148V19.6805H6.5625C6.14766 19.6805 5.8125 20.0156 5.8125 20.4305V21.1875C5.8125 21.2906 5.89687 21.375 6 21.375H18C18.1031 21.375 18.1875 21.2906 18.1875 21.1875V20.4305C18.1875 20.0156 17.8523 19.6805 17.4375 19.6805H12.8438V17.2148C15.5859 16.9148 17.7727 14.7703 18.1359 12.0469C19.9688 11.7563 21.375 10.1648 21.375 8.25V4.78125C21.375 4.50775 21.2663 4.24544 21.073 4.05205C20.8796 3.85865 20.6173 3.75 20.3438 3.75ZM4.3125 8.25V5.4375H5.8125V10.3031C5.37714 10.1641 4.99723 9.89025 4.72762 9.52122C4.45801 9.15219 4.31264 8.70703 4.3125 8.25ZM16.5 11.25C16.5 12.4008 16.0523 13.4859 15.2367 14.2992C14.4211 15.1148 13.3383 15.5625 12.1875 15.5625H11.8125C10.6617 15.5625 9.57656 15.1148 8.76328 14.2992C7.94766 13.4836 7.5 12.4008 7.5 11.25V4.3125H16.5V11.25ZM19.6875 8.25C19.6875 9.21094 19.057 10.0266 18.1875 10.3031V5.4375H19.6875V8.25Z" fill="white"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4298 9.86709C12.8884 9.86709 12.4688 10.2866 12.4688 10.8046C12.4688 11.3226 12.8884 11.7421 13.4298 11.7421C13.9243 11.7421 14.3438 11.3226 14.3438 10.8046C14.3438 10.2866 13.9243 9.86709 13.4298 9.86709ZM6.86728 9.86709C6.32587 9.86709 5.90634 10.2866 5.90634 10.8046C5.90634 11.3226 6.32587 11.7421 6.86728 11.7421C7.36181 11.7421 7.78134 11.3226 7.78134 10.8046C7.78134 10.2866 7.36181 9.86709 6.86728 9.86709Z" fill="white"/>
            <path d="M20.9538 8.08503C19.8264 6.53816 18.2514 5.50456 16.5241 5.03816V5.0405C16.1233 4.59519 15.671 4.18503 15.1647 3.81941C11.328 1.03035 5.94207 1.88113 3.14129 5.71785C0.884258 8.83503 0.980351 13.028 3.28191 16.0069L3.30066 19.1147C3.30066 19.1897 3.31238 19.2647 3.33582 19.335C3.46004 19.7311 3.88191 19.9491 4.27566 19.8249L7.24285 18.8897C8.02801 19.1686 8.83895 19.328 9.6452 19.3725L9.63348 19.3819C11.7218 20.903 14.4593 21.36 16.9694 20.5303L19.9483 21.5007C20.0233 21.5241 20.1007 21.5382 20.1804 21.5382C20.5952 21.5382 20.9304 21.203 20.9304 20.7882V17.6475C22.9952 14.8444 23.0491 10.9702 20.9538 8.08503ZM7.57098 17.2257L7.28973 17.1085L4.96941 17.835L4.94598 15.3975L4.75848 15.1866C2.77566 12.7678 2.64441 9.28269 4.50066 6.72566C6.76004 3.62722 11.0913 2.94285 14.1804 5.17878C17.2788 7.43113 17.9655 11.7553 15.7272 14.835C13.8499 17.4108 10.4889 18.3624 7.57098 17.2257ZM19.4069 16.8272L19.2194 17.0616L19.2429 19.4991L16.946 18.7257L16.6647 18.8428C15.3522 19.3303 13.953 19.3702 12.6569 19.0069L12.6522 19.0046C14.3843 18.4725 15.9546 17.3944 17.0866 15.8428C18.8772 13.3749 19.1679 10.2741 18.1272 7.63035L18.1413 7.63972C18.6804 8.02644 19.1749 8.50925 19.5944 9.09285C21.296 11.4272 21.1999 14.6053 19.4069 16.8272Z" fill="white"/>
            <path d="M10.1485 9.86709C9.60712 9.86709 9.18759 10.2866 9.18759 10.8046C9.18759 11.3226 9.60712 11.7421 10.1485 11.7421C10.6431 11.7421 11.0626 11.3226 11.0626 10.8046C11.0626 10.2866 10.6431 9.86709 10.1485 9.86709Z" fill="white"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3163 16.4035C18.7296 15.8164 18.0442 15.3372 17.2913 14.9879C18.353 14.1277 19.0303 12.8152 19.0303 11.3433C19.0303 8.74645 16.8647 6.61598 14.2678 6.65582C11.7108 6.69567 9.65064 8.77926 9.65064 11.3433C9.65064 12.8152 10.3303 14.1277 11.3897 14.9879C10.6367 15.3369 9.95116 15.8161 9.36471 16.4035C8.08502 17.6855 7.35846 19.3777 7.31158 21.1824C7.31096 21.2074 7.31534 21.2323 7.32449 21.2556C7.33363 21.2789 7.34734 21.3001 7.36481 21.318C7.38229 21.3359 7.40317 21.3502 7.42623 21.3599C7.44929 21.3696 7.47406 21.3746 7.49908 21.3746H8.81158C8.91236 21.3746 8.99674 21.2949 8.99908 21.1941C9.04361 19.8347 9.5944 18.5621 10.5624 17.5964C11.0577 17.0985 11.6469 16.7037 12.2958 16.435C12.9447 16.1662 13.6405 16.0289 14.3428 16.0308C15.7702 16.0308 17.1131 16.5863 18.1233 17.5964C19.0889 18.5621 19.6397 19.8347 19.6866 21.1941C19.6889 21.2949 19.7733 21.3746 19.8741 21.3746H21.1866C21.2116 21.3746 21.2364 21.3696 21.2594 21.3599C21.2825 21.3502 21.3034 21.3359 21.3209 21.318C21.3383 21.3001 21.352 21.2789 21.3612 21.2556C21.3703 21.2323 21.3747 21.2074 21.3741 21.1824C21.3272 19.3777 20.6006 17.6855 19.3163 16.4035ZM14.3428 14.3433C13.5413 14.3433 12.7866 14.0316 12.2217 13.4644C11.9383 13.1832 11.7144 12.8477 11.5633 12.4781C11.4123 12.1084 11.3373 11.7121 11.3428 11.3129C11.3499 10.5441 11.6569 9.80114 12.1936 9.25035C12.7561 8.67379 13.5085 8.3527 14.3124 8.34332C15.1069 8.33629 15.878 8.64567 16.4452 9.20114C17.0264 9.77067 17.3452 10.5324 17.3452 11.3433C17.3452 12.1449 17.0335 12.8972 16.4663 13.4644C16.188 13.744 15.8571 13.9657 15.4926 14.1165C15.1281 14.2674 14.7373 14.3445 14.3428 14.3433ZM8.47174 11.9621C8.45064 11.7582 8.43893 11.5519 8.43893 11.3433C8.43893 10.9707 8.47408 10.6074 8.53971 10.2535C8.55611 10.1691 8.51158 10.0824 8.43424 10.0472C8.11549 9.90426 7.82252 9.70739 7.5694 9.45895C7.27113 9.16975 7.03642 8.82155 6.88025 8.43656C6.72408 8.05158 6.64987 7.63828 6.66236 7.22301C6.68346 6.47067 6.9858 5.75582 7.51314 5.21676C8.09205 4.62379 8.87018 4.30035 9.69752 4.30973C10.4452 4.31676 11.1671 4.60504 11.7131 5.11598C11.8983 5.28942 12.0577 5.4816 12.1913 5.68785C12.2381 5.76051 12.3296 5.79098 12.4092 5.76285C12.8217 5.61989 13.2577 5.5191 13.7053 5.47223C13.8366 5.45817 13.9116 5.31754 13.853 5.20035C13.0913 3.69332 11.535 2.6527 9.73502 2.62457C7.1358 2.58473 4.97018 4.7152 4.97018 7.30973C4.97018 8.7816 5.64752 10.0941 6.70924 10.9543C5.96393 11.2988 5.27721 11.7746 4.68189 12.3699C3.39752 13.6519 2.67096 15.3441 2.62408 17.1511C2.62346 17.1761 2.62784 17.201 2.63699 17.2243C2.64613 17.2476 2.65984 17.2688 2.67731 17.2868C2.69479 17.3047 2.71567 17.3189 2.73873 17.3286C2.76179 17.3383 2.78656 17.3433 2.81158 17.3433H4.12643C4.22721 17.3433 4.31158 17.2636 4.31393 17.1629C4.35846 15.8035 4.90924 14.5308 5.87721 13.5652C6.56627 12.8761 7.41002 12.398 8.33111 12.166C8.42252 12.1425 8.48346 12.0558 8.47174 11.9621Z" fill="white"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.125 18H18.5625V10.0312C18.5625 6.72422 16.118 3.99141 12.9375 3.53672V2.625C12.9375 2.10703 12.518 1.6875 12 1.6875C11.482 1.6875 11.0625 2.10703 11.0625 2.625V3.53672C7.88203 3.99141 5.4375 6.72422 5.4375 10.0312V18H4.875C4.46016 18 4.125 18.3352 4.125 18.75V19.5C4.125 19.6031 4.20937 19.6875 4.3125 19.6875H9.375C9.375 21.1359 10.5516 22.3125 12 22.3125C13.4484 22.3125 14.625 21.1359 14.625 19.6875H19.6875C19.7906 19.6875 19.875 19.6031 19.875 19.5V18.75C19.875 18.3352 19.5398 18 19.125 18ZM12 20.8125C11.3789 20.8125 10.875 20.3086 10.875 19.6875H13.125C13.125 20.3086 12.6211 20.8125 12 20.8125ZM7.125 18V10.0312C7.125 8.72813 7.63125 7.50469 8.55234 6.58359C9.47344 5.6625 10.6969 5.15625 12 5.15625C13.3031 5.15625 14.5266 5.6625 15.4477 6.58359C16.3687 7.50469 16.875 8.72813 16.875 10.0312V18H7.125Z" fill="white"/>
          </svg>
          <div className={styles.headerAccAvatar} onClick={onVisibleAccountPopop} ref={popupBtnRef}>
            <img src='./img/headerAccAvatar.png' width={48} height={48} alt='Avatar'/>
            {
            isOnline?
               <div className={styles.headerAccAvatar__online}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="4" cy="4" r="3.5" fill="#52C41A" stroke="#FAFAFA"/>
                  </svg>
               </div> 
            :
            ''
         }
            {
              visibleAccountPopup? 
              <div className={styles.headerAccAvatar__popup}>
              <p>Мой профиль</p>
              <p>Настройки</p>
              <p>Помощь</p>
              <div className={styles.popupExit}>
                <p>Выйти</p>
              </div>
            </div>
            :
            ''
            }
          </div>
        </div>
      </div>
      </div>
    <Slider {...topSliderSettings}>
    {
      topSliderItemsData.map((item) => <TopSliderItem id={item.id} title={item.title} text={item.text} bgImage={item.bgImage} key={item.text}/>)
    }
    </Slider>
    </div>
    <div className={styles.continueBlock}>
      <MainBlockTitle title={'Продолжить'} link={'/allGames'}/>
      <div className={styles.continueBlock__items}>
        <Slider {...gameCardsSliderSettings}>
        {
          gameCardsData.map((item, index) => <GameCard bgImage={item.bgImage} className={'gameCard'} key={index}/>)
        }
        </Slider>
      </div>
    </div>
    <div className={styles.achievementBlock}>
        <MainBlockTitle title={'Доступные достижения'} link={''}/>
        <div className={styles.achievementBlock__items}>
          <Slider {...availableAchievementSliderSettings}>
          {
            achievementItemsData.map((item) => <div onClick={onSetBackLink('/')}><AchievementItem title={item.title} gold={item.gold} bgImage={item.bgImage} key={item.title} blocked/></div>)
          }
          </Slider>
        </div>
      </div>
      <div className={styles.activeFriendsBlock}>
        <MainBlockTitle title={'Активные друзья'} link={''}/>
        <div className={styles.activeFriendsBlock__items}>
          <Slider {...activeFriendsSliderSettings}>
          {
            activeFriendsData.map((item, index) => <ActiveFriendItem avatar={item.avatar} isOnline={item.isOnline} name={item.name} gold={item.gold} key={`${item.name}_${index}`} forSlider/>)
          }
          </Slider>
        </div>
      </div>
      <div className={styles.popularAmongFriendsBlock}>
        <MainBlockTitle title={'Популярное среди друзей'} link={''}/>
        <div className={styles.popularAmongFriendsBlock__items}>
          <Slider {...popularAmongFriendsSliderSettings}>
          {
            popularAmongFriendsData.map((item) => <PopularAmongFriendsItem bgImage={item.bgImage} title={item.title} countOfPlayers={item.countOfPlayers} key={item.title}/>)
          }
          </Slider>
        </div>
      </div>
      <div className={styles.usefulArticlesBlock}>
        <MainBlockTitle title={'Полезные статьи'} link={''}/>
        <div className={styles.usefulArticlesBlock__items}>
        <Slider {...bottomSliderSettings}>
          {
            usefulArticlesData.map((item) => <UsefulArticlesItem image={item.image} type={item.type} title={item.title} text={item.text} key={item.text}/>)
          }
        </Slider>
        </div>
      </div>
      <div className={darkTheme? styles.darkFooter : styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTop__left}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM10 17.2656C5.98828 17.2656 2.73438 14.0117 2.73438 10C2.73438 5.98828 5.98828 2.73438 10 2.73438C14.0117 2.73438 17.2656 5.98828 17.2656 10C17.2656 14.0117 14.0117 17.2656 10 17.2656ZM10.1094 6.86133C11.1445 6.86133 11.8477 7.52148 11.9258 8.49023C11.9316 8.57227 12 8.63477 12.082 8.63477H13.1895C13.2402 8.63477 13.2812 8.59375 13.2812 8.54297C13.2812 6.84961 11.9453 5.66406 10.1035 5.66406C7.95703 5.66406 6.71875 7.11328 6.71875 9.50781V10.5293C6.71875 12.9062 7.95703 14.3359 10.1035 14.3359C11.9395 14.3359 13.2812 13.1875 13.2812 11.5742C13.2812 11.5234 13.2402 11.4824 13.1895 11.4824H12.0801C11.998 11.4824 11.9316 11.5449 11.9238 11.625C11.8418 12.5254 11.1406 13.1445 10.1074 13.1445C8.83203 13.1445 8.11328 12.209 8.11328 10.5352V9.50781C8.11523 7.80859 8.83594 6.86133 10.1094 6.86133Z" fill="#262626"/>
          </svg>
          <p>The GAME, Co. Ltd. 2017-2021 г. Все права защищены</p>
          </div>
          <div className={styles.footerTop__right}>
            <p>Карта сайта</p>
            <span>|</span>
            <p>Связаться с нами</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Политика конфиденциальности</p>
          <span>|</span>
          <p>Использование cookies</p>
          <span>|</span>
          <p>Условия использования</p>
          <span>|</span>
          <p>Продажа и возврат</p>
          <span>|</span>
          <p>Юридическая информация</p>
        </div>
      </div>
      </>
    }
    </>
    
  )
}

export default Main;