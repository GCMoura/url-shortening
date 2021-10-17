import styled from "styled-components";

const Button = styled.button`
  background-color: var(--cyan);
  border: 1px solid var(--cyan);
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  color: var(--white);
  
  :hover{
    transform: scale(1.1);
    transition-duration: 1s;
    background-color: var(--red);
    border: 1px solid var(--red);
  }
`

export default Button