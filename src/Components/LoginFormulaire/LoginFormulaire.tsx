import React, { useState, ChangeEvent } from 'react';
import loginSVG from '../../Assets/img/login-svg.svg';
import fetchAPI from '../../Utils/request';
import UrlRedirection from "../../Utils/UrlRedirection";

interface InformationUser {
  email: string;
  password: string;
  checkbox: boolean;
}

const LoginFormulaire: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [informationUser, setInformationUser] = useState<InformationUser>({
    email: '',
    password: '',
    checkbox: false
  });


  const validationForm = async () => {
    if (!informationUser.email  && !informationUser.password || !informationUser.email  || !informationUser.password) {
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }
    
    if (!informationUser.checkbox) {
      setErrorMessage('Veuillez cocher la case de confirmation');
      return;
    }

    const user = {
      email: informationUser.email,
      password: informationUser.password
    };

    let response = await fetchAPI('/user/login', 'POST', user);
    if (response.ok) {
      UrlRedirection('/home');
    }
    if (response.status === 401) {
      setErrorMessage('Compte introuvable');
    }
  };

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const nameInput = event.target.name;
    const userText = event.target.value;
    setInformationUser(prevState => ({
      ...prevState,
      [nameInput]: nameInput === "checkbox" ? !prevState.checkbox : userText
    }));
  };

  const displayErrorMessage = () => {
    return errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null;
  };

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
              <input type="email" onChange={handleLogin} name='email' placeholder='E-mail' />
            </div>
            <div className="input-label">
              <label>Mot de passe</label>
              <input type="Password" onChange={handleLogin} name='password' placeholder='Mot de passe' />
            </div>
            <div className="checkbox-content">
              <input type="checkbox" onChange={handleLogin} name='checkbox' />
              <p>cochez cette case pour vérifier que vous n'êtes pas un robot</p>
            </div>
            <div className="error-message-login">
              {displayErrorMessage()}
            </div>
            <div className="submit-content">
              <button onClick={validationForm}>Se Connecter</button>
            </div>
          </div>
          <div className="forgot-password">
            <p>En cas de perte de mot de passe ou de mail, veuillez contacter ce numéro : 06 57 48 12 36</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormulaire;