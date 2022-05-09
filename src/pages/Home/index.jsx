import React from 'react';
import ItemsSkills from '../../components/Skills';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header/>
        <section className='section-skill'>
          <div className="container-title">
              <h3 className='subtitulo2'>My Skils</h3>
              <h2 className='subtitulo3'>My Experties</h2>
          </div>
          <ItemsSkills />
        </section>
      
    </>
  )
}

export default Home
