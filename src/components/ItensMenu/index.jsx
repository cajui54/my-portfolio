import React from 'react'
import './styles.css'

const ListOption = () => {
    const skills = ['Início', 'Sobre Mim', 'Habilidades', 'Projetos', 'Contatos'];
  return (
    <ul className='list-options-menu'>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  )
}

export default ListOption
