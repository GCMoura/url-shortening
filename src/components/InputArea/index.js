import styled from "styled-components";

const InputArea = styled.div`
  width: 70%;
  height: 10vh;
  border-radius: 8px;
  background-color: var(--dark-violet);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 55vh;
  left: 15%;

  & form{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  
`

export default InputArea