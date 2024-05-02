import { FC } from "react";
import CheckBlockLayout from "./CheckBlock.styled";

interface ICheckBlock {
  isChecked: boolean,
  handleClick: () => void;
}

const CheckBlock:FC<ICheckBlock> = ({ isChecked, handleClick }) => {
  return (
    <CheckBlockLayout onClick={handleClick}>
      {isChecked ? 
        <img className='check-block__checked' src='/images/checked.svg'/> :
        <div className='check-block__empty' />
      }
    </CheckBlockLayout>
  )
}

export default CheckBlock;
