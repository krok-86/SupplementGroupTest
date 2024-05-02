import styled from 'styled-components'


const GamesListWrapperLayout = styled.div`
.games-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  &__empty {
    margin-top: 50px;
    font-size: 24px;
    font-weight: 500;
  }
}
  
`

export default GamesListWrapperLayout;

