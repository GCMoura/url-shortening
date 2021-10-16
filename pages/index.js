import React from 'react'
import Image from 'next/image'

import Article from '../src/components/Article'
import BoostArea from '../src/components/BoostArea'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import InputArea from '../src/components/InputArea'
import Link from '../src/components/Link'
import Main from '../src/components/Main'

import Illustration from '../1A/images/illustration-working.svg'

export default function Home() {
  return (
    <>
      <Header>
        <div className="header-left"> 
          <h1>Shortly</h1>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Resources</Link>
        </div>
        <div className="header-right">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
        </div>
      </Header>
      <Main>
        <div className="main-text">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are perfoming</p>
        </div>
        <div className="main-image">
          <Image src={Illustration} alt="illustration" width="500" height="400" />
        </div>
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
