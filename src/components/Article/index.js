import styled from "styled-components";

const Article = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--grayish-violet);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & .article-text{
    text-align: center;
  }

  & .article-card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

`
export default Article