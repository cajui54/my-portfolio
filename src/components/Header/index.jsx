import React from 'react';
import Logo from '../Logo/index';
import ButtonNav from '../ButtonNav';
import Nav from '../Nav';
import './styles.css';

const Header = () => {
  return (
    <header className='headerMain'>
        <Logo/>
        <ButtonNav/>
        <Nav/>
    </header>
  )
}

export default Header
