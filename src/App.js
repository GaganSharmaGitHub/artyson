import React,{ useState} from 'react';
import logo from './logo.svg';
import Media from './components/Media'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import './App.css';
import GoodAt from './components/GoodAt'
import Features from './components/Feature'
import Head from './components/Head/Head.js'
import Creative from './components/creativity/Creative'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import Gallery from './components/Gallery'
function App() {
  const [themedark, setthemedark] = useState(false)
  return (
    <div className={themedark?'dark':'light'}>
    <Navbar  fixed="top"  
    bg={themedark?'dark':'light'}
    variant={themedark?'dark':'light'}
     expand="lg">
    <Navbar.Brand href="#home">
    <img alt='logo' src='https://secureservercdn.net/160.153.137.14/mhq.97f.myftpupload.com/wp-content/uploads/2019/06/cropped-Untitled-01-1.png'></img>
    {' '}Artysan</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav activeKey='/home' className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#link">Portfolio</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Wall Solutions</NavDropdown.Item>
          <NavDropdown.Item href="#">Art Solutions</NavDropdown.Item>
          <NavDropdown.Item href="#">Workshops</NavDropdown.Item>
          <NavDropdown.Item  href="#">Digital Marketing</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav.Item>
        <BootstrapSwitchButton
    checked={false}
    onlabel='dark'
    offlabel='light'
    onChange={(checked) => {
        setthemedark(checked)
    }}
/>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Head themedark={themedark}>
  </Head>
  <Creative themedark={themedark}></Creative> 
  <Gallery></Gallery> 
  <Features></Features>
  <GoodAt themedark={themedark}></GoodAt>
  <Media themedark={themedark}></Media>
    </div>
  );
}

export default App;
