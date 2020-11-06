import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/17249975?s=460&u=3197a6ae0fd730cb9e027c0add6d50c9128880cd&v=4" alt="avatar"/>
      <div>
        <strong> Joaquim Alves </strong>
        <span> Web Programming</span>
      </div>
    </header>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing.
      <br/> <br/>
      elit. Modi corrupti soluta praesentium, architecto 
      ab aliquid? Odio facere amet a iusto magni autem 
    </p>

      <footer>
        <p>
          Preço/hora
          <strong> R$ 80,00 </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;