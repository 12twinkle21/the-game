import React from 'react';

import styles from './DetailPublication.module.scss';

import { AppContext } from '../../App';

function DetailPublication(props) {

const {userAvatar, userName, dateAndTime, publicationText, likesCount, comments} = props;

const { darkTheme } = React.useContext(AppContext);

let [visibleComments, setVisibleComments] = React.useState(false);

let onVisibleComments = () =>{
   setVisibleComments(!visibleComments);
}

let [visibleAttachmentsPopup, setVisibleAttachmentsPopup] = React.useState(false);

let onVisibleAttachmentsPopup = (bool) =>{
   setVisibleAttachmentsPopup(bool);
}

let [visibleMoreBtnPopup, setVisibleMoreBtnPopup] = React.useState(false);

let onVisibleMoreBtnPopup = (bool) =>{
   setVisibleMoreBtnPopup(bool);
}

let popupAttachmentsRef = React.useRef();
let moreBtnRef = React.useRef();

   React.useEffect(() => {
     document.body.addEventListener('click', handleOutsideClick)
  }, []);
  
   let handleOutsideClick = (e) => {
     const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
     if (!path.includes(popupAttachmentsRef.current)) { 
        setVisibleAttachmentsPopup(false);
     } 

     if (!path.includes(moreBtnRef.current)) { 
      setVisibleMoreBtnPopup(false);
   } 
  }

  const [inputText, setInputText] = React.useState('');

  let commentInputRef = React.useRef();

  const [setActiveReplyUser] = React.useState('');

  let onReplyComment = (value) =>{
   setInputText(value)
   commentInputRef.current.focus();
   setActiveReplyUser(value);
  }

  const [allComments, setAllComments] = React.useState(comments? comments : '');

  let onSendComment = () =>{
   if(inputText){
         setAllComments((prevComments) => [
            ...prevComments,
            {
               commentDateAndTime: "29 ноя в 16:48",
               commentsLikesCount: 20,
               commentText: inputText,
               commentUserAvatar: "./img/headerAccAvatar.png",
               commentUserName: "Алиса Абрамова"
             },
          ]); 
      setInputText('');
      setActiveReplyUser('');
   }
  }

 

   const handleInputChange = (event) => {
      const value = event.currentTarget.value;
      setInputText(value);
    };

    const handleKeyUp = (event) => {
      if (event.keyCode === 13) {
        onSendComment();
      }
    };

  return (

    <div className={darkTheme? styles.darkDetailPublication : styles.detailPublication}>
      <div className={darkTheme? styles.darkDetailPublication__top : styles.detailPublication__top}>
         <div className={styles.userInfo}>
            <img src={userAvatar} width={48} height={48} alt='Avatar'/>
            <div className={styles.userNameAndDateBlock}>
               <p>{userName}</p>
               <span>{dateAndTime}</span>
            </div>
         </div>
         <div className={styles.moreBtnBlock} onMouseEnter={()=>onVisibleMoreBtnPopup(true)} onMouseLeave={()=>onVisibleMoreBtnPopup(false)}>
         <div className={styles.moreBtn} ref={moreBtnRef}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M5.5 15.9688C5.5 16.1986 5.54526 16.4261 5.63321 16.6384C5.72116 16.8508 5.85006 17.0437 6.01256 17.2062C6.17507 17.3687 6.36798 17.4976 6.5803 17.5855C6.79262 17.6735 7.02019 17.7188 7.25 17.7188C7.47981 17.7188 7.70738 17.6735 7.9197 17.5855C8.13202 17.4976 8.32493 17.3687 8.48744 17.2062C8.64994 17.0437 8.77884 16.8508 8.86679 16.6384C8.95473 16.4261 9 16.1986 9 15.9688C9 15.7389 8.95473 15.5114 8.86679 15.2991C8.77884 15.0867 8.64994 14.8938 8.48744 14.7313C8.32493 14.5688 8.13202 14.4399 7.9197 14.352C7.70738 14.264 7.47981 14.2188 7.25 14.2188C7.02019 14.2188 6.79262 14.264 6.5803 14.352C6.36798 14.4399 6.17507 14.5688 6.01256 14.7313C5.85006 14.8938 5.72116 15.0867 5.63321 15.2991C5.54526 15.5114 5.5 15.7389 5.5 15.9688ZM14.25 15.9688C14.25 16.4329 14.4344 16.878 14.7626 17.2062C15.0908 17.5344 15.5359 17.7188 16 17.7188C16.4641 17.7188 16.9092 17.5344 17.2374 17.2062C17.5656 16.878 17.75 16.4329 17.75 15.9688C17.75 15.5046 17.5656 15.0595 17.2374 14.7313C16.9092 14.4031 16.4641 14.2188 16 14.2188C15.5359 14.2188 15.0908 14.4031 14.7626 14.7313C14.4344 15.0595 14.25 15.5046 14.25 15.9688ZM23 15.9688C23 16.4329 23.1844 16.878 23.5126 17.2062C23.8408 17.5344 24.2859 17.7188 24.75 17.7188C25.2141 17.7188 25.6592 17.5344 25.9874 17.2062C26.3156 16.878 26.5 16.4329 26.5 15.9688C26.5 15.5046 26.3156 15.0595 25.9874 14.7313C25.6592 14.4031 25.2141 14.2188 24.75 14.2188C24.2859 14.2188 23.8408 14.4031 23.5126 14.7313C23.1844 15.0595 23 15.5046 23 15.9688Z" fill="#262626"/>
            </svg>
            {
               visibleMoreBtnPopup?
               <div className={styles.moreBtn__popup}>
               <ul>
                  <li onClick={()=>onVisibleMoreBtnPopup(false)}>Закрепить</li>
                  <li onClick={()=>onVisibleMoreBtnPopup(false)}>Удалить запись</li>
                  <li onClick={()=>onVisibleMoreBtnPopup(false)}>Сообщить об ошибке</li>
               </ul>
            </div>
               :
               ''
            }
         </div>
         </div>
      </div>
      <div className={darkTheme? styles.darkDetailPublication__text : styles.detailPublication__text}>
         <p>{publicationText}</p>
      </div>
      <div className={darkTheme? styles.darkDetailPublication__bottom : styles.detailPublication__bottom}>
         <div className={styles.likesAndCommentsBlock}>
            <div className={styles.likes}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6328 6.64592C21.3187 5.9185 20.8657 5.25933 20.2992 4.70529C19.7323 4.1496 19.064 3.708 18.3305 3.40451C17.5699 3.08855 16.7541 2.92683 15.9305 2.92873C14.775 2.92873 13.6477 3.24513 12.668 3.84279C12.4336 3.98576 12.2109 4.14279 12 4.31388C11.7891 4.14279 11.5664 3.98576 11.332 3.84279C10.3523 3.24513 9.225 2.92873 8.06953 2.92873C7.2375 2.92873 6.43125 3.0881 5.66953 3.40451C4.93359 3.7092 4.27031 4.14748 3.70078 4.70529C3.13359 5.2587 2.6805 5.91803 2.36719 6.64592C2.04141 7.40295 1.875 8.20685 1.875 9.0342C1.875 9.81466 2.03438 10.6279 2.35078 11.4553C2.61563 12.1467 2.99531 12.8639 3.48047 13.5881C4.24922 14.7342 5.30625 15.9295 6.61875 17.1412C8.79375 19.1498 10.9477 20.5373 11.0391 20.5936L11.5945 20.9498C11.8406 21.1069 12.157 21.1069 12.4031 20.9498L12.9586 20.5936C13.05 20.535 15.2016 19.1498 17.3789 17.1412C18.6914 15.9295 19.7484 14.7342 20.5172 13.5881C21.0023 12.8639 21.3844 12.1467 21.6469 11.4553C21.9633 10.6279 22.1227 9.81466 22.1227 9.0342C22.125 8.20685 21.9586 7.40295 21.6328 6.64592Z" fill="#BFBFBF"/>
               </svg>
               <span>{likesCount}</span>
            </div>
            <div className={styles.comments} onClick={onVisibleComments}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6645 7.93029C21.1386 6.67528 20.3736 5.53455 19.4121 4.5717C18.4535 3.60717 17.3147 2.84032 16.0606 2.31467C14.7757 1.77357 13.3953 1.49621 12.0012 1.49905H11.9543C10.5363 1.50608 9.16525 1.78733 7.87384 2.34045C6.63041 2.87149 5.50236 3.63971 4.55275 4.60217C3.60055 5.56286 2.84432 6.69959 2.32618 7.94905C1.78833 9.24833 1.5158 10.6421 1.52462 12.0483C1.53165 13.6748 1.92072 15.2897 2.64728 16.7334V20.2959C2.64728 20.8912 3.13009 21.374 3.72306 21.374H7.28087C8.73136 22.106 10.332 22.4911 11.9567 22.499H12.0059C13.4074 22.499 14.7645 22.2272 16.0442 21.6951C17.292 21.1758 18.4265 20.4178 19.384 19.4639C20.3496 18.5053 21.109 17.385 21.641 16.1358C22.1918 14.842 22.4731 13.4662 22.4801 12.0459C22.4848 10.6186 22.2082 9.23342 21.6645 7.93029ZM7.32306 13.124C6.70431 13.124 6.2004 12.6201 6.2004 11.999C6.2004 11.378 6.70431 10.874 7.32306 10.874C7.94181 10.874 8.44571 11.378 8.44571 11.999C8.44571 12.6201 7.94415 13.124 7.32306 13.124ZM12.0012 13.124C11.3824 13.124 10.8785 12.6201 10.8785 11.999C10.8785 11.378 11.3824 10.874 12.0012 10.874C12.6199 10.874 13.1238 11.378 13.1238 11.999C13.1238 12.6201 12.6199 13.124 12.0012 13.124ZM16.6793 13.124C16.0606 13.124 15.5567 12.6201 15.5567 11.999C15.5567 11.378 16.0606 10.874 16.6793 10.874C17.2981 10.874 17.802 11.378 17.802 11.999C17.802 12.6201 17.2981 13.124 16.6793 13.124Z" fill="#BFBFBF"/>
               </svg>
               <span>{allComments?.length}</span>
            </div>
         </div>
         <div className={styles.share}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.625 2.625C20.5359 2.625 20.4445 2.64141 20.3531 2.67891L6.84375 8.10703H3C2.79375 8.10703 2.625 8.28047 2.625 8.49609V15.5039C2.625 15.7195 2.79375 15.893 3 15.893H5.38125C5.29453 16.1648 5.25 16.4531 5.25 16.7461C5.25 18.2906 6.51094 19.5469 8.0625 19.5469C9.36094 19.5469 10.4555 18.6656 10.7789 17.475L20.3555 21.3234C20.4469 21.3586 20.5383 21.3773 20.6273 21.3773C21.0234 21.3773 21.3773 21.0445 21.3773 20.5992V3.40312C21.375 2.95781 21.0234 2.625 20.625 2.625ZM8.0625 17.8664C7.44141 17.8664 6.9375 17.3648 6.9375 16.7461C6.9375 16.4836 7.02891 16.2328 7.19531 16.0336L9.18516 16.8328C9.13828 17.4094 8.65312 17.8664 8.0625 17.8664Z" fill="#BFBFBF"/>
            </svg>
         </div>
      </div>
      {
      visibleComments?
      <div className={darkTheme? styles.darkDetailPublication__commentsBlock : styles.detailPublication__commentsBlock}>
         {
            allComments?.length &&
            allComments.map((item, index) => <div className={styles.comment} key={index}>
               <div className={styles.comment__userAvatar}>
                  <img src={item.commentUserAvatar} width={48} height={48} alt='Avatar'/>
               </div>
               <div className={styles.commentBlock}>
                  <p className={styles.commentBlock__name}>{item.commentUserName}</p>
                  <p className={styles.commentBlock__text}>{item.commentText}</p>
                  <div className={styles.commentBlock__bottom}>
                     <div className={styles.commentBottomLeft}>
                        <span>{item.commentDateAndTime}</span>
                        <button onClick={()=> onReplyComment(`${item.commentUserName}, `)}>Ответить</button>
                        <button>Поделиться</button>
                     </div>
                     <div className={styles.commentBottomLikes}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M21.6328 6.64592C21.3187 5.9185 20.8657 5.25933 20.2992 4.70529C19.7323 4.1496 19.064 3.708 18.3305 3.40451C17.5699 3.08855 16.7541 2.92683 15.9305 2.92873C14.775 2.92873 13.6477 3.24513 12.668 3.84279C12.4336 3.98576 12.2109 4.14279 12 4.31388C11.7891 4.14279 11.5664 3.98576 11.332 3.84279C10.3523 3.24513 9.225 2.92873 8.06953 2.92873C7.2375 2.92873 6.43125 3.0881 5.66953 3.40451C4.93359 3.7092 4.27031 4.14748 3.70078 4.70529C3.13359 5.2587 2.6805 5.91803 2.36719 6.64592C2.04141 7.40295 1.875 8.20685 1.875 9.0342C1.875 9.81466 2.03438 10.6279 2.35078 11.4553C2.61563 12.1467 2.99531 12.8639 3.48047 13.5881C4.24922 14.7342 5.30625 15.9295 6.61875 17.1412C8.79375 19.1498 10.9477 20.5373 11.0391 20.5936L11.5945 20.9498C11.8406 21.1069 12.157 21.1069 12.4031 20.9498L12.9586 20.5936C13.05 20.535 15.2016 19.1498 17.3789 17.1412C18.6914 15.9295 19.7484 14.7342 20.5172 13.5881C21.0023 12.8639 21.3844 12.1467 21.6469 11.4553C21.9633 10.6279 22.1227 9.81466 22.1227 9.0342C22.125 8.20685 21.9586 7.40295 21.6328 6.64592Z" fill="#BFBFBF"/>
                        </svg>
                        <span>{item.commentLikesCount}</span>
                     </div>
                  </div>
               </div>
            </div>)
         }
         <div className={styles.commentInputBlock}>
            <img src='./img/headerAccAvatar.png' width={48} height={48} alt='Avatar'/>
            <input type='text' placeholder='Написать комментарий...' value={inputText} onChange={handleInputChange} onKeyUp={handleKeyUp} ref={commentInputRef}/>
            <div className={styles.commentInputBlock__btns}>
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
               <button className={styles.publication} onClick={onSendComment}>Публикация</button>
            </div>
         </div>
      </div>
      :
      ''
      }
    </div>

  )
}

export default DetailPublication;