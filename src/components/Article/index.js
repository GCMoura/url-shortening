import styled from "styled-components";

const Article = styled.div`
  width: 100%;
  height: 60vh;
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

  & .card{
    width: 300px;
    height: 200px;
    background-color: var(--white);
    margin: 0px 60px;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  }

  & .card-img{
    background-color: var(--very-dark-violet);
    border-radius: 50px;
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-top: -20px;
    margin-left: 10px;
  }

  & .card-1{
    margin-top: -50px;
  }

  & .card-3{
    margin-top: 50px;
  }

`
export default Article