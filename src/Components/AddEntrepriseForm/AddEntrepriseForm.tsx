import React, { useContext, useState } from 'react';
import fetchAPI from '../../Utils/request';
import UrlRedirection from "../../Utils/UrlRedirection";
import { AuthContext } from '../../Contexts/useAuthContext';

interface InformationEntreprise {
    name: string;
    description: string;
  }


const AddEntrepriseForm: React.FC  = () => {

    const { informationUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [informationEntreprise, setInformationEntreprise] = useState<InformationEntreprise>({
        name: '',
        description: ''
    });
    

    const validationForm = async () => {

        const entreprise = {
            name: informationEntreprise.name,
            description: informationEntreprise.description
        };
        console.log(entreprise);
        
        let response = await fetchAPI(`/entreprise/${informationUser?._id}/create`, 'POST', entreprise);
        if (response.ok) {
        UrlRedirection('/entreprise');
        }
        if (response.status === 401) {
        setErrorMessage('Entreprise déja existante');
        }
    };

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const nameInput = event.target.name;
        const entrepriseText = event.target.value;
        setInformationEntreprise(prevState => ({
          ...prevState,
          [nameInput]: entrepriseText
        }));
      };
    
    const displayErrorMessage = () => {
        return errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null;
    };

    return (
        <div className='AddEntrepriseForm'>
            <div className="entrepriseForm">
                <div className="titleFormEntreprise">
                    <h2>Création d'entreprise</h2>
                </div>
                <div className="inputNameContent">
                    <label>Nom de l'entreprise</label>
                    <input name='name' onChange={handleLogin} type="text" />
                </div>
                <div className="descriptionNameContent">
                    <label>description de l'entreprise</label>
                    <textarea name='description' onChange={handleLogin}></textarea>
                    {displayErrorMessage()}
                </div>
                <div className="submitButtonEntrepriseForm">
                    <button onClick={validationForm}>Créer l'entreprise</button>
                </div>
            </div>
        </div>
    );
};

export default AddEntrepriseForm;