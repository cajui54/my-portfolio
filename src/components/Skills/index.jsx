import React from 'react'
import './styles.css'

const ItemsSkills = () => {

  const dataSkills = [
    { 
        icon: 'fa-brands fa-html5',
        text: 'HTML',
    },
    { 
        icon: 'fa-brands fa-css3-alt',
        text: 'CSS',
    },
    {
        icon: 'fa-brands fa-js',
        text: 'JavaScript',
    },
    {
        icon: 'fa-brands fa-react',
        text: 'React.JS',
    },
    {
        icon: 'fa-brands fa-git-alt',
        text: 'Git',
    },
    {
        icon: 'fa-brands fa-github-square',
        text: 'GitHub',
    }
]

  return (
    <section className='group-skills-cards'>
    <div className='container-skills'>
      {dataSkills.map((skill, index ) =>
         <div className='icon-group' key={index}>
          <i className={skill.icon}></i>
          <p className='subtitulo-icon'>{skill.text}</p>
       </div>
      )}
     
    </div>
    </section>
  )
}

export default ItemsSkills
