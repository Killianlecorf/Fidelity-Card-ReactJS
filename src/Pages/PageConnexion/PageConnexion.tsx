import React from 'react';
import LoginFormulaire from '../../Components/LoginFormulaire/LoginFormulaire';

const PageConnexion: React.FC = () => {
    return (
        <div>
            <div className="decoration-barre"></div>
            <LoginFormulaire />
            <div className="decoration-barre"></div>
        </div>
    );
};

export default PageConnexion;