import { useState } from "react";

import { games } from "../../mocks";

import { IFilters } from "../../types";

import GamesItem from "../GamesItem/GamesItem";
import GamesSelectors from "../GamesSelectors/GamesSelectors";
import GamesListWrapperLayout from "./GamesListWrapper.styled";

const GamesListWrapper = () => {

  const [gamesArr, setGamesArr] = useState(games);

  const handleFilterSet = (filters: IFilters ) => {

    const filteredGames = games.reduce((acc, item) => {
      if (filters.platforms?.length) {
        const hasSelectedPlatforms = item.platforms?.filter(platform => 
          filters.platforms?.some(option => option.value === platform)
        );
        if (!hasSelectedPlatforms.length) acc = acc.filter((el) => el.title !== item.title);
      };
      if (filters.numberOfGamersOffline) {
        const includesSelectedPlayers = item.numberOfGamersOffline > filters.numberOfGamersOffline;
        if (!includesSelectedPlayers) acc = acc.filter((el) => el.title !== item.title);
      };
      if (filters.russianVoices) {
        acc = acc.filter((el) => el.russianVoices);
      };

      if (filters.isMultiplyOnline) {
        acc = acc.filter((el) => el.isMultiplyOnline);
      }; 

      return acc;

    }, [...games]);

    if(filters.isBest) {
      filteredGames.sort((first, second) => second.rating - first.rating);
    };

    setGamesArr(filteredGames);
  };

  return (
    <GamesListWrapperLayout>
      <GamesSelectors handleFilterSet={handleFilterSet} />
      { gamesArr.length ? <div className='games-list'> 
        { gamesArr.map((game) => <GamesItem game={game} key={game.title}/>) }
      </div> :
      <div className='games-list__empty'>
        Нет игр с указанными параметрами
      </div>}
    </GamesListWrapperLayout>
  );
};

export default GamesListWrapper;