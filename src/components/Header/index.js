import styled from 'styled-components'

const Header = styled.div`
  background-color: red;
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & .header-left{

  }

  & .header-right{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

export default Header