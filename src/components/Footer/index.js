import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 25vh;
  background-color: var(--very-dark-violet);
  color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & .footer-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  
  & .footer-item a{
    margin: 10px;
    font-size: 16px;
  }

  & .footer-icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

`

export default Footer