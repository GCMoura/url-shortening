import styled from "styled-components";

const InputArea = styled.div`
  width: 70%;
  height: 10vh;
  background-color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 55vh;
  left: 15%;

  & button{
    background-color: aquamarine;
    width: 100px;
    height: 30px;
  }

  & input{
    width: 50%;
    height: 30px;
  }
  
`

export default InputArea