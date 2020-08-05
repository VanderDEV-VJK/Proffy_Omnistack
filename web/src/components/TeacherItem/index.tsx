import React from 'react';

import wahtsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62653064?s=460&u=5b09c79d69639189ad8b482fa9da1674319f1c27&v=4" alt="Vanderlei Kempf"/>
                <div>
                    <strong>Vanderlei Kempf</strong>
                    <span>Química</span>
                </div>
            </header>
            <p> Entusiasta das melhores tecnologias de quimica avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através das experiências.
            </p>

            <footer>
                <p>
                preço/hora
                    <strong> R$ 80,00</strong>  
                </p>
                <button type="button">
                    <img src={wahtsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;