import styled from 'styled-components'


const GamesItemLayout = styled.div`
  display: flex;
  flex-direction: row wrap;
  gap: 30px;
  box-shadow: -2px 4px 20px 0px rgba(0,0,0,0.5);
  -webkit-box-shadow: -2px 4px 20px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: -2px 4px 20px 0px rgba(0,0,0,0.5);
  border-radius: 20px;
  padding: 20px;

  .game {
    &-info {
      text-align: start;
      &-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      &-platforms {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        margin: 20px 0;
        &-item {
          background-color: #5890ff;
          border-radius: 10px;
          min-width: 100px;
          padding: 3px 5px;
          font-weight: 500;
          text-align: center;
        }
      }
      &-rus, &-online {
        margin-left: 10px;
        width: 20px;
      }
      &-users {
        display: flex;
        align-items: center;
        font-size: 20px;
        &-img {
          width: 40px;
          margin-right: 10px;
        }
      }
    }
  }

  .slider-wrapper {
    width: 375px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    .slider-wrapper {
    width: 300px;
  }
  }
  
`

export default GamesItemLayout;

