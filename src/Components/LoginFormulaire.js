import React from 'react';
import loginSVG from '../Assets/img/login-svg.svg'

const LoginFormulaire = () => {
    return (
        <div className='login-formulaire-content'>
            <div className="login-formulaire">
                <div className="image-content">
                    <img src={loginSVG} alt="connexion" />
                </div>
                <div className="input-content">
                    <div className="title-formulaire">
                        <h1>Se Connecter</h1>
                    </div>
                    <div className="input-login">
                        <div className="input-label">
                            <label>E-mail</label>
                            <input type="email" placeholder='E-mail' />
                        </div>
                        <div className="input-label">
                            <label>Mot de passe</label>
                            <input type="Password" placeholder='Mot de passe'/>
                        </div>
                        <div className="checkbox-content">
                            <input type="checkbox" />
                            <p>cochez cette case pour verifier que vous n'êtes pas un bot </p>
                        </div>
                        <div className="submit-content">
                            <button>Se Connecter</button>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <p>En cas de perte de mot de passe ou de mail vueillez contacter ce numero : 06 57 48 12 36</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFormulaire;