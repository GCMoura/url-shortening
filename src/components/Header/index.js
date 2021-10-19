import styled from 'styled-components'

const Header = styled.div`
  background-color: var(--grey);
  
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & .header-left{
    color: var(--very-dark-blue);
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  & .header-right{
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media(max-width: 768px){
    height: 6vh;

    & .header-left{
      width: 80%;
    }

    & .header-right{
      display: none;
    }

    & a{
      display: none;
    }

  }

`

export default Header