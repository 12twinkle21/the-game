import React from 'react';
import Slider from "react-slick";

import styles from './Main.module.scss';

import TopSliderItem from '../../components/topSliderItem/TopSliderItem';

function Main() {
   
  let topSliderItemsData = [
    {
      id: 1,
      title: "Заголовок слайдера 1",
      text: "Текст слайдера 1",
      bgImage: "http://dummyimage.com/1440x768"
    },
    {
      id: 2,
      title: "Заголовок слайдера 2",
      text: "Текст слайдера 2",
      bgImage: "http://dummyimage.com/1440x768/a6a6ff"
    },
    {
      id: 3,
      title: "Заголовок слайдера 3",
      text: "Текст слайдера 3",
      bgImage: "http://dummyimage.com/1440x768/99cccc"
    }
  ]; 

  const topSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500
  };

  return (
    <Slider {...topSliderSettings}>
    {
      topSliderItemsData.map((item) => <TopSliderItem id={item.id} title={item.title} text={item.text} bgImage={item.bgImage}/>)
    }
    </Slider>
  )
}

export default Main;