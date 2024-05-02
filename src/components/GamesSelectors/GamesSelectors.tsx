import { ChangeEvent, FC, useState } from "react";
import Select, { ActionMeta, MultiValue } from "react-select";

import { platformsMock } from "../../mocks";

import { IFilters, IOption, TFiltersValues } from "../../types";

import CheckBlock from "../CheckBlock/CheckBlock";
import GamesSelectorsrLayout from "./GamesSelectors.styled";

interface IGamesSelectors {
  filters?: IFilters,
  handleFilterSet: (filters: IFilters) => void,
}

const GamesSelectors: FC<IGamesSelectors> = ({ filters,  handleFilterSet}) => {

  const [selectedFilters, setSelectedFilters] = useState<IFilters>(filters || {} as IFilters);

  const handleSelectFilters = (option: string, value: TFiltersValues ) => {
    setSelectedFilters({...selectedFilters, [option]: value});
  };

  const handleClickPlatform = (
    newSelections: MultiValue<IOption>,
    actionMeta: ActionMeta<IOption>
 ) => {
  const platformsValues = newSelections.map((platform) => platform.value);
  handleSelectFilters('platforms', newSelections as IOption[] );
  };

  const handleClickBest = () => {
    handleSelectFilters('isBest',  !selectedFilters.isBest);
  };

  const handleClickRussian = () => {
    handleSelectFilters('russianVoices',  !selectedFilters.russianVoices);
  };

  const handleClickMultiplyOnline = () => {
    handleSelectFilters('isMultiplyOnline',  !selectedFilters.isMultiplyOnline);
  };

  const handleChangeOfflinePlayers = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelectFilters('numberOfGamersOffline',  e.target.value);
  };

  const handleSubmit = () => {
    handleFilterSet(selectedFilters)
  };
 
  return (
    <GamesSelectorsrLayout>
      <div className='filter-wrapper'>
        <label className='filter-label'> 
          Платформы
          <Select
            className='filter-platforms'
            value={selectedFilters.platforms}
            onChange={handleClickPlatform}
            options={platformsMock}
            isMulti
          />
        </label>
        <label className='filter-label'> 
          Количество игроков оффлайн
          <input
            className='filter-input'
            type='number'
            name='offline_players'
            value={selectedFilters.numberOfGamersOffline}
            onChange={handleChangeOfflinePlayers}
          />
        </label>
        <label className='filter-label'> 
          Отсортировать по рейтингу
          <CheckBlock isChecked={selectedFilters.isBest} handleClick={handleClickBest}/>
        </label>
        <label className='filter-label'> 
          C русским языком
          <CheckBlock isChecked={selectedFilters.russianVoices} handleClick={handleClickRussian}/>
        </label>
        <label className='filter-label'> 
          C многопользовательским online-режимом
          <CheckBlock isChecked={selectedFilters.isMultiplyOnline} handleClick={handleClickMultiplyOnline}/>
        </label>
      </div>
      <button className='filter-button shadow' onClick={handleSubmit}>Применить фильтры</button>
  </GamesSelectorsrLayout>
  )
}

export default GamesSelectors;