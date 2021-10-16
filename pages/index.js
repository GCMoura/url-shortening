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
import Input from '../src/components/Input'

import Illustration from '../1A/images/illustration-working.svg'
// import Illustration from '../src/assets/illustration-working.svg'
// import Facebook from '../src/assets/icon-facebook.svg'
// import Instagran from '../src/assets/icon-instagran.svg'
// import Twitter from '../src/assets/icon-twitter.svg'
// import Pinterest from '../src/assets/icon-pnterest.svg'

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
        <Input placeholder="Shorten a link here..."/>
        <Button> Shorten it! </Button>
      </InputArea>
      <Article>
        <div className="article-text"> 
          <h1> Advanced Statistics</h1>
          <p> Track how your links are performing across the web width our advanced statistics dashboard</p>
        </div>
        <div className="article-card">
          
        </div>
      </Article>
      <BoostArea>
        <h1>Boost your links today</h1>
        <Button> Get Started </Button>
      </BoostArea>
      <Footer>
        <h1>Shortly</h1>
        <div className="footer-item"> 
          <h3>Features</h3>
          <Link href="#">Link Shortening</Link>
          <Link href="#">Branded Links</Link>
          <Link href="#">Analytics</Link>
        </div>
        <div className="footer-item"> 
          <h3>Resources</h3>
          <Link href="#">Blog</Link>
          <Link href="#">Developers</Link>
          <Link href="#">Support</Link>
        </div>
        <div className="footer-item"> 
          <h3>Company</h3>
          <Link href="#">About</Link>
          <Link href="#">Our team</Link>
          <Link href="#">Carrers</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="footer-icon">
          <Image src={Facebook} alt="Facebook" width="50" height="40" />
          <Image src={Instagran} alt="Instagran" width="50" height="40" />
          <Image src={Twitter} alt="Twitter" width="50" height="40" />
          <Image src={Pinterest} alt="Pinterest" width="50" height="40" />
        </div>
      </Footer>
    </>
  )
}
