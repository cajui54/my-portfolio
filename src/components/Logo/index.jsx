import React from 'react';
import './styles.css'

const Logo = () => {
  const printLogo = () => '<JKS/>'
  
  return (
    <div className='containerLogo'>
       <p>{printLogo()}</p>
    </div>
  )
}

export default Logo
