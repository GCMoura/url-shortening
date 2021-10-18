import React, { useState } from 'react'
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

import Illustration from '../public/illustration-working.svg'
import Facebook from '../public/icon-facebook.svg'
import Instagram from '../public/icon-instagram.svg'
import Twitter from '../public/icon-twitter.svg'
import Pinterest from '../public/icon-pinterest.svg'
import Brand from '../public/icon-brand-recognition.svg'
import Detailed from '../public/icon-detailed-records.svg'
import Fully from '../public/icon-fully-customizable.svg'

export default function Home() {

  const [url, setUrl] = useState('')
  const [shortURL, setShortURL] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    setShortURL('')
    
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.result.full_short_link2)
        setShortURL(data.result.full_short_link2)
      })
     
    document.querySelector('#url-input').value = ''
  }

  function copyShortURL(urlShorten){
    navigator.clipboard.writeText(urlShorten);
  }

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
        <form onSubmit={handleSubmit}>
          <Input id="url-input" placeholder="Shorten a link here..." onChange={ ()=> {setUrl(event.target.value)} } required/>
          <Button> Shorten it! </Button>
        </form>
      </InputArea>
      <Article>
        {
          shortURL && 
            <div className="section"> 
              <p> {url} </p>
              <p> {shortURL} </p> 
              <Button id="copy-button" onClick={copyShortURL(shortURL)}>Copy</Button>
            </div>
        }
        <div className="article-text"> 
          <h1> Advanced Statistics</h1>
          <p> Track how your links are performing across the web width our advanced statistics dashboard</p>
        </div>
        <div className="article-card">
          <div className="card card-1">
            <div className="card-img"> 
              <Image src={Brand} alt="brand" width="50" height="50"/>
            </div>
            <h4>Brand Recognition</h4>
            <p>Lorem ipsum</p>
          </div>
          <div className="card card-2">
            <div className="card-img"> 
              <Image src={Detailed} alt="detailed" width="50" height="50"/>
            </div>      
            <h4>Detailed Records</h4>  
            <p>Lorem ipsum</p>    
          </div>
          <div className="card card-3">
            <div className="card-img"> 
              <Image src={Fully} alt="fully" width="50" height="50"/>
            </div>
            <h4>Fully Customizable</h4>
            <p>Lorem ipsum</p>
          </div>
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
          <Link href="#"><Image src={Facebook} alt="Facebook" width="40" height="40" /></Link>
          <Link href="#"><Image src={Instagram} alt="Instagran" width="40" height="40" /></Link>
          <Link href="#"><Image src={Twitter} alt="Twitter" width="40" height="40" /></Link>
          <Link href="#"><Image src={Pinterest} alt="Pinterest" width="40" height="40" /></Link>
          
        </div>
      </Footer>
    </>
  )
}
