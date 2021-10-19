import styled from "styled-components";

const Input = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 5px;
  font-size: 22px;
  padding: 10px;

  @media(max-width: 768px){
    height: 40px;
    font-size: 18px;
  }

`

export default Input