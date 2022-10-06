import React from 'react';

import { Link } from 'react-router-dom';

function GameCard(props) {

  const {bgImage, className} = props;

  const [visibleCardPopup, setVisibleCardPopup] = React.useState(false);

  const onVisibleCardPopup = () => {
    setVisibleCardPopup(!visibleCardPopup);
  }

  let popupBtnRef = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
 }, []);
 
  let handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
    if (!path.includes(popupBtnRef.current)) { 
       setVisibleCardPopup(false);
    }
 }
  
  return (
   <div className={className} style={{backgroundImage: `url(${bgImage})`}}>
    <Link to='/detailGamePage' className='clearLink'></Link>
    <div className={`${className}__btn`} onClick={onVisibleCardPopup} ref={popupBtnRef}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 15.9688C5.5 16.1986 5.54526 16.4261 5.63321 16.6384C5.72116 16.8508 5.85006 17.0437 6.01256 17.2062C6.17507 17.3687 6.36798 17.4976 6.5803 17.5855C6.79262 17.6735 7.02019 17.7188 7.25 17.7188C7.47981 17.7188 7.70738 17.6735 7.9197 17.5855C8.13202 17.4976 8.32493 17.3687 8.48744 17.2062C8.64994 17.0437 8.77884 16.8508 8.86679 16.6384C8.95473 16.4261 9 16.1986 9 15.9688C9 15.7389 8.95473 15.5114 8.86679 15.2991C8.77884 15.0867 8.64994 14.8938 8.48744 14.7313C8.32493 14.5688 8.13202 14.4399 7.9197 14.352C7.70738 14.264 7.47981 14.2188 7.25 14.2188C7.02019 14.2188 6.79262 14.264 6.5803 14.352C6.36798 14.4399 6.17507 14.5688 6.01256 14.7313C5.85006 14.8938 5.72116 15.0867 5.63321 15.2991C5.54526 15.5114 5.5 15.7389 5.5 15.9688ZM14.25 15.9688C14.25 16.4329 14.4344 16.878 14.7626 17.2062C15.0908 17.5344 15.5359 17.7188 16 17.7188C16.4641 17.7188 16.9092 17.5344 17.2374 17.2062C17.5656 16.878 17.75 16.4329 17.75 15.9688C17.75 15.5046 17.5656 15.0595 17.2374 14.7313C16.9092 14.4031 16.4641 14.2188 16 14.2188C15.5359 14.2188 15.0908 14.4031 14.7626 14.7313C14.4344 15.0595 14.25 15.5046 14.25 15.9688ZM23 15.9688C23 16.4329 23.1844 16.878 23.5126 17.2062C23.8408 17.5344 24.2859 17.7188 24.75 17.7188C25.2141 17.7188 25.6592 17.5344 25.9874 17.2062C26.3156 16.878 26.5 16.4329 26.5 15.9688C26.5 15.5046 26.3156 15.0595 25.9874 14.7313C25.6592 14.4031 25.2141 14.2188 24.75 14.2188C24.2859 14.2188 23.8408 14.4031 23.5126 14.7313C23.1844 15.0595 23 15.5046 23 15.9688Z" fill="#262626"/>
      </svg>
    </div>
    {
      visibleCardPopup?
      <div className='gameCard__popup'>
        <p>Подробнее об игре</p>
        <p>Поделиться игрой</p>
        <p>Связаться с правообладателем</p>
        <p>Сообщить об ошибке</p>
      </div>
      :
      ''
    }
   </div>
  )
}

export default GameCard;