import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tooltip } from "react-tooltip";

import { IGame } from "../../types";

import GamesItemLayout from "./GamesItem.styled";

interface IGameItem {
  game: IGame,
};

const GamesItem: FC<IGameItem> = ({ game }) => {
 return (
  <GamesItemLayout>
    <Carousel>
      {game.images?.map((item: string) => <div className='game-images' key={item}>
        <img src={item} />
      </div>)}
    </Carousel>
    <div className='game-info'>
      <div className='game-info-title'>
        {game.title}
        {game.russianVoices && <img className='game-info-rus' src='/images/rus.svg'/>}
        {game.isMultiplyOnline &&<img className='game-info-online' src='/images/online.svg'/>}
      </div>
      <div className='game-info-rating'>Рейтинг {game.rating}</div>
      <div className='game-info-platforms'>
        {game.platforms.map((item: string) => <div className='game-info-platforms-item'>
        {item}
        </div>)}
      </div>
      <div className='game-info-users'>
        <img className='game-info-users-img' src='/images/users.svg'/>
        {game.numberOfGamersOffline}
      </div>
      <div>{game.isMultiplyOnline}</div>
    </div>
    <Tooltip anchorSelect=".game-info-rus" place="top">
    C русским языком
    </Tooltip>
    <Tooltip anchorSelect=".game-info-online" place="top">
      C многопользовательским online-режимом
    </Tooltip>
    <Tooltip anchorSelect=".game-info-users-img" place="top">
      Количество игроков оффлайн
    </Tooltip>
  </GamesItemLayout>
 );
};

export default GamesItem;