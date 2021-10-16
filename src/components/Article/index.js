import styled from "styled-components";

const Article = styled.div`
  width: 100%;
  height: 50vh;
  background-color: blanchedalmond;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & div h2 {
    margin: 0px 40px;
  }
`
export default Article