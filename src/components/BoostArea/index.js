import styled from "styled-components";

const BoostArea = styled.div`
  width: 100%;
  height: 25vh;
  background-color: var(--dark-violet);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 22px;

  & h1{ 
    color: var(--white);
  }

  @media(max-width: 768px){
    font-size: 14px;
    text-align: center;
  }

`
export default BoostArea