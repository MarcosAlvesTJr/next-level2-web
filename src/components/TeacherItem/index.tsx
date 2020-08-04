import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/39447269?s=460&u=a9e3e3cb9958dc5e10a11ec7a439d0891fb0b3ac&v=4" alt="Marcos Junior"/>
      <div>
        <strong>Marcos Alves</strong>
        <span>Algoritmo</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut repellat blanditiis repudiandae repellendus dolores doloribus excepturi, dolorum, amet voluptatem pariatur temporibus? Atque eos laudantium qui quasi, corporis nemo est.
      <br/>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, doloribus omnis. Corrupti tenetur, ducimus itaque sit dignissimos iusto facere quaerat praesentium architecto, amet maxime libero, fugit nostrum alias harum repellendus.
    </p>

    <footer>
      <p>
        Preço/hora 
        <strong>R$ 80.00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="WhatsApp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;