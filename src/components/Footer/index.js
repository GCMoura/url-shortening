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
    
  }
  
  & .footer-item a{
    margin: 10px;
    font-size: 16px;
  }

  & .footer-icon{
    display: flex;
    flex-direction: row;
  }

  & .footer-icon a{
    margin: -100px 5px;
  }

  @media(max-width: 768px){
    height: 120vh;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & .footer-icon a{
      margin: 0px 5px;
    }

  }

`

export default Footer