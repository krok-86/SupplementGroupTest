import styled from 'styled-components'


const GamesSelectorsrLayout = styled.div`

.filter {
  &-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  &-button {
    background-color: #5890ff;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  &-label {
    display: flex;
    flex-direction: column;
  }
  &-input {
    height: 38px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
    padding-left: 10px;
  }
  &-platforms {
    width: 300px;
  }
}
  
`

export default GamesSelectorsrLayout;

