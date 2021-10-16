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



`
export default Main
