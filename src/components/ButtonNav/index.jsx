import React from 'react';
import './styles.css';

const ButtonNav = () => {
    
    let menuOpen = false;
    const animationButton = () => {
        let navMenu = document.querySelector('.nav-menu');
        let menuBtn = document.querySelector('.menu-btn');

        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
            navMenu.classList.add('openNav');
        }else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            navMenu.classList.remove('openNav');
        }
    }
  return (
    <div className='menu-btn' onClick={animationButton}>
        <div className='menu-btn__buger'></div>
    </div>
  )
}

export default ButtonNav
