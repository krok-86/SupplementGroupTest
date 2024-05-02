import styled from 'styled-components'


const CheckBlockLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  cursor: pointer;

.check-block {
  &__empty {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1px solid #5890ff;
    margin-top: 2px;
  }
  &__checked {
    border-radius: 50%;
  }
}
  
`

export default CheckBlockLayout;

