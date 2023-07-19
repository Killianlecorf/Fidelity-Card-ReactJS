import React from 'react';
import LoginFormulaire from '../Components/LoginFormulaire';
import isTokenValid from '../Utils/isTokenValid'

const PageConnexion = () => {

    isTokenValid()
    return (
        <div>
            <div className="decoration-barre"></div>
            <LoginFormulaire />
            <div className="decoration-barre"></div>
        </div>
    );
};

export default PageConnexion;