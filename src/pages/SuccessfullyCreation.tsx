import React from 'react';

import '../styles/pages/success-creation.css';

import SuccessImage from '../images/Success.svg';
import { Link } from 'react-router-dom';

export default function SuccessfullyCreation() {

    return (
        <div className="page-success">
            <main>
                <div className="success-data">
                    <h1>Ebaaa!</h1>
                    <p>
                        O cadastro deu certo e foi enviado ao administrador para ser aprovado. 
                        Agora é só esperar :)
                    </p>
                    <Link to="/app" className="success-button">
                        Voltar para o Mapa
                    </Link>
                </div>

                <img src={SuccessImage} alt="success_image" />
            </main>
        </div>
    );
}