import React from 'react';
import styles from './PopularAmongFriendsItem.module.scss';
import { Link } from 'react-router-dom';

import GameCard from '../gameCard/GameCard';

import { AppContext } from '../../App';

function PopularAmongFriendsItem(props) {

  const {bgImage, title, countOfPlayers, friends} = props;

  const { darkTheme, onSelectContentBlock} = React.useContext(AppContext);

  let friendsIcons = [];

  let defaultTransform = 0;

  friends.forEach((item, index) =>{

    defaultTransform+=5

    friendsIcons.push(
      <div style={{transform: 'translateX(' + -(defaultTransform) + 'px)'}} className={styles.friendsIcons__icon} key={`${item.avatar}__${index}`}><img src={item.avatar} width={32} height={32} alt='Avatar'/></div>
    )
  })


   
  return (

    <div className={darkTheme? styles.darkPopularAmongFriendsItem : styles.popularAmongFriendsItem}>
      <GameCard bgImage={bgImage} className={'popularGameCard'}/>
      <div className={darkTheme? styles.darkPopularAmongFriendsItem__info : styles.popularAmongFriendsItem__info}>
         <p>{title}</p>
         <span>Играет {countOfPlayers} друзей</span>
         <Link to='/detailGamePage' className='clearLink'>
         <div className={styles.friendsIcons} onClick={()=> onSelectContentBlock('members' )}>
            {friendsIcons}
         </div>
         </Link>
      </div>
    </div>

  )
}

export default PopularAmongFriendsItem;