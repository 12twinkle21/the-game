import React from 'react';
import styles from './PopularAmongFriendsItem.module.scss';

import GameCard from '../gameCard/GameCard';

import { AppContext } from '../../App';

// import {Avatar} from 'antd';
// import 'antd/dist/antd.min.css';


function PopularAmongFriendsItem(props) {

  const {bgImage, title, countOfPlayers} = props;

  const { darkTheme } = React.useContext(AppContext);
   
  return (

    <div className={darkTheme? styles.darkPopularAmongFriendsItem : styles.popularAmongFriendsItem}>
      <GameCard bgImage={bgImage} className={'popularGameCard'}/>
      <div className={darkTheme? styles.darkPopularAmongFriendsItem__info : styles.popularAmongFriendsItem__info}>
         <p>{title}</p>
         <span>Играет {countOfPlayers} друзей</span>
         {/* <Avatar.Group
            maxCount={3}
            maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
            }}
         >
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
         </Avatar.Group> */}
      </div>
    </div>

  )
}

export default PopularAmongFriendsItem;