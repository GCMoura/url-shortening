import styled from 'styled-components'

const Header = styled.div`
  background-color: var(--grey);
  
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & .header-left{
    color: var(--very-dark-blue);
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  & .header-right{
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

`

export default Header