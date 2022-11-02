import React from 'react';

import styles from './AchievementPublication.module.scss';

import { AppContext } from '../../App';

function AchievementPublication(props) {

   const {userAvatar, userName, dateAndTime, publicationText, type, result, estimateTextAreaText} = props;

   const { darkTheme } = React.useContext(AppContext);

   const getResult = () =>{
      if(result==='sendedArtifact'){
         return <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="32" height="32" rx="16" fill="#1890FF"/>
               <path d="M11.8438 21.0684C12.3359 21.0684 12.7324 20.665 12.7324 20.1797C12.7324 19.6875 12.3359 19.291 11.8438 19.291C11.3584 19.291 10.9551 19.6875 10.9551 20.1797C10.9551 20.665 11.3584 21.0684 11.8438 21.0684ZM16 21.0684C16.4922 21.0684 16.8887 20.665 16.8887 20.1797C16.8887 19.6875 16.4922 19.291 16 19.291C15.5146 19.291 15.1113 19.6875 15.1113 20.1797C15.1113 20.665 15.5146 21.0684 16 21.0684ZM20.1562 21.0684C20.6484 21.0684 21.0449 20.665 21.0449 20.1797C21.0449 19.6875 20.6484 19.291 20.1562 19.291C19.6709 19.291 19.2676 19.6875 19.2676 20.1797C19.2676 20.665 19.6709 21.0684 20.1562 21.0684Z" fill="white"/>
            </svg>
            <p>Артефакт отправлен наставнику</p>
         </>
      } else if(result==='acceptedMentorArtifact'){
         return <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
               <path d="M22.2493 10.9688H21.1571C21.004 10.9688 20.8587 11.0391 20.7649 11.1594L14.3227 19.3203L11.2337 15.4062C11.1869 15.3469 11.1274 15.2989 11.0594 15.2659C10.9915 15.2329 10.917 15.2157 10.8415 15.2156H9.74928C9.64459 15.2156 9.58678 15.3359 9.65084 15.4172L13.9305 20.8391C14.1305 21.0922 14.5149 21.0922 14.7165 20.8391L22.3477 11.1688C22.4118 11.0891 22.354 10.9688 22.2493 10.9688Z" fill="#1890FF"/>
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1890FF"/>
            </svg>
            <p>Артефакт утвержден наставником</p>
         </>
      } else if(result==='acceptedMasterArtifact'){
         return <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
               <path d="M22.2493 10.9688H21.1571C21.004 10.9688 20.8587 11.0391 20.7649 11.1594L14.3227 19.3203L11.2337 15.4062C11.1869 15.3469 11.1274 15.2989 11.0594 15.2659C10.9915 15.2329 10.917 15.2157 10.8415 15.2156H9.74928C9.64459 15.2156 9.58678 15.3359 9.65084 15.4172L13.9305 20.8391C14.1305 21.0922 14.5149 21.0922 14.7165 20.8391L22.3477 11.1688C22.4118 11.0891 22.354 10.9688 22.2493 10.9688Z" fill="#1890FF"/>
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1890FF"/>
            </svg>
            <p>Артефакт утвержден мастером</p>
         </>
      } else if(result==='cancelledMentorArtifact'){
         return <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
               <path d="M16.8095 16L20.9111 11.1109C20.9798 11.0297 20.922 10.9062 20.8158 10.9062H19.5689C19.4954 10.9062 19.4251 10.9391 19.3767 10.9953L15.9939 15.0281L12.6111 10.9953C12.5642 10.9391 12.4939 10.9062 12.4189 10.9062H11.172C11.0658 10.9062 11.0079 11.0297 11.0767 11.1109L15.1783 16L11.0767 20.8891C11.0613 20.9072 11.0514 20.9293 11.0482 20.9529C11.045 20.9764 11.0487 21.0004 11.0587 21.022C11.0687 21.0435 11.0848 21.0617 11.1048 21.0745C11.1249 21.0872 11.1482 21.0939 11.172 21.0938H12.4189C12.4923 21.0938 12.5626 21.0609 12.6111 21.0047L15.9939 16.9719L19.3767 21.0047C19.4236 21.0609 19.4939 21.0938 19.5689 21.0938H20.8158C20.922 21.0938 20.9798 20.9703 20.9111 20.8891L16.8095 16Z" fill="#FF4D4F"/>
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#FF4D4F"/>
            </svg>
            <p style={{color: '#FF4D4F'}}>Артефакт отклонен наставником</p>
         </>
      } else if(result==='cancelledMasterArtifact'){
         return <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
               <path d="M16.8095 16L20.9111 11.1109C20.9798 11.0297 20.922 10.9062 20.8158 10.9062H19.5689C19.4954 10.9062 19.4251 10.9391 19.3767 10.9953L15.9939 15.0281L12.6111 10.9953C12.5642 10.9391 12.4939 10.9062 12.4189 10.9062H11.172C11.0658 10.9062 11.0079 11.0297 11.0767 11.1109L15.1783 16L11.0767 20.8891C11.0613 20.9072 11.0514 20.9293 11.0482 20.9529C11.045 20.9764 11.0487 21.0004 11.0587 21.022C11.0687 21.0435 11.0848 21.0617 11.1048 21.0745C11.1249 21.0872 11.1482 21.0939 11.172 21.0938H12.4189C12.4923 21.0938 12.5626 21.0609 12.6111 21.0047L15.9939 16.9719L19.3767 21.0047C19.4236 21.0609 19.4939 21.0938 19.5689 21.0938H20.8158C20.922 21.0938 20.9798 20.9703 20.9111 20.8891L16.8095 16Z" fill="#FF4D4F"/>
               <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#FF4D4F"/>
            </svg>
            <p style={{color: '#FF4D4F'}}>Артефакт отклонен мастером</p>
         </>
      }
   }

  return (
   
   <>
   {
      type==='notification'?
      <div className={darkTheme? styles.darkSendAndEstimateAtrifactNotification : styles.sendAndEstimateAtrifactNotification}>
      <div className={styles.notificationTop}>
         <img src={userAvatar} width={48} height={48} alt='Avatar'/>
            <div className={styles.userNameAndDateBlock}>
               <p>{userName}</p>
               <span>{dateAndTime}</span>
            </div>
      </div>
      <div style={result==='cancelledMentorArtifact' || result==='cancelledMasterArtifact'? {borderColor: '#FF4D4F'} : null} className={styles.notificationBottom}>
         <div className={styles.notificationBottom__result}>
               {
                  getResult()
               }
         </div>
         <div className={styles.notificationBottom__userInfo}>
            <img src={userAvatar} width={32} height={32} alt='Avatar'/>
               <div className={styles.userNameAndDateBlock}>
                  <p>{userName}</p>
                  <span>{dateAndTime}</span>
               </div>
         </div>
      </div>
      {
      estimateTextAreaText?
         <div className={styles.notificationMessage}>
            <p>{estimateTextAreaText}</p>
         </div>
      :
      ''
      }
    </div>
    :
    ''
   }
   {
      type==='message'?
      <div className={darkTheme? styles.darkAchievementPublication : styles.achievementPublication}>
      <div className={darkTheme? styles.darkAchievementPublication__top : styles.achievementPublication__top}>
         <div className={styles.userInfo}>
            <img src={userAvatar} width={48} height={48} alt='Avatar'/>
            <div className={styles.userNameAndDateBlock}>
               <p>{userName}</p>
               <span>{dateAndTime}</span>
            </div>
         </div>
      </div>
      <div className={darkTheme? styles.darkAchievementPublication__text : styles.achievementPublication__text}>
         <p>{publicationText}</p>
      </div>
    </div>
      :
      ''
   }
   </>
  )
}

export default AchievementPublication;