
import Article from '../src/components/Article'
import BoostArea from '../src/components/BoostArea'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import InputArea from '../src/components/InputArea'
import Main from '../src/components/Main'

export default function Home() {
  return (
    <>
      <Header>
        <div className="header-left"> 
          <h1>Header</h1>
        </div>
        <div className="header-right">
          <h2>Header</h2>
          <button>Click</button>
        </div>
      </Header>
      <Main>
        <h1>text</h1>
        <h1>image</h1>
      </Main>
      <InputArea>
        <input />
        <button> Click </button>
      </InputArea>
      <Article>
        <h2> Articles</h2>
        <div>
          <h2>card</h2>
          <h2>card</h2>
          <h2>card</h2>
        </div>
      </Article>
      <BoostArea>
        <h3>text</h3>
        <button> Click </button>
      </BoostArea>
      <Footer>
        <h4>footer</h4>
        <h4>footer</h4>
        <h4>footer</h4>
        <h4>footer</h4>
        <h4>footer</h4>
      </Footer>
    </>
  )
}
