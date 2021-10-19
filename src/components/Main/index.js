import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--grey);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & .main-text{
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 32px;
    margin: auto;
  }

  & .main-text p{
    font-size: 18px;
    color: var(--grey);
  }

  & .main-image{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & .main-text{
    width: 100%;
  }

    & .main-text h1{
      font-size: 20px;
    }

    & .main-text p{
      font-size: 14px;
    }

    & .main-image{
      width: 60%;
    }

  }


`
export default Main
