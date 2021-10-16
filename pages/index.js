
import Article from '../src/components/Article'
import BoostArea from '../src/components/BoostArea'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import InputArea from '../src/components/InputArea'
import Main from '../src/components/Main'

export default function Home() {
  return (
    <>
      <Header>
        <div className="header-left"> 
          <h1>Shortly</h1>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="header-right">
        <a href="#">Login</a>
          <Button>Sign Up</Button>
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
