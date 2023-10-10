import React, { useState } from 'react';
import fetchAPI from "../../Utils/request";
// import UrlRedirection from "../../Utils/UrlRedirection";
import { useNavigate, useParams } from 'react-router-dom';

interface InformationEntreprise {
    name: string;
    description: string;
  }

  interface RouteParamsEntrepriseId extends Record<string, string | undefined>{
    entrepriseId: string;
}

const AddBoutiqueForm = () => {

    const {entrepriseId} = useParams<RouteParamsEntrepriseId>()
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [informationBoutique, setInformationBoutique] = useState<InformationEntreprise>({
        name: '',
        description: ''
    });

    const navigate = useNavigate()


    const validationForm = async () => {

        const boutique = {
            name: informationBoutique.name,
            description: informationBoutique.description
        };
        
        
        let response = await fetchAPI(`/boutique/${entrepriseId}/create`, 'POST', boutique);
        if (response.ok) {
            navigate('/entreprise/');
        }
        if (response.status === 401) {
            setErrorMessage('Entreprise déja existante');
        }
    };

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInformationBoutique((prevState: InformationEntreprise) => ({
            ...prevState,
            [name]: value,
        }));
      };
    
      console.log(informationBoutique);

    const displayErrorMessage = () => {
        return errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null;
    };

    return (
        <div className='AddBoutiqueFormBack'>
            <div className="AddBoutiqueForm">
                <div className="entrepriseForm">
                    <div className="titleFormBoutique">
                        <h2>Création d'entreprise</h2>
                    </div>
                    <div className="inputNameContentBoutique">
                        <label>Nom de l'entreprise</label>
                        <input name='name' onChange={handleLogin} type="text" />
                    </div>
                    <div className="descriptionNameContentBoutique">
                        <label>description de l'entreprise</label>
                        <textarea name='description' onChange={handleLogin}></textarea>
                    </div>
                    {displayErrorMessage()}
                    <div className="submitButtonEntrepriseFormBoutique">
                        <button onClick={validationForm}>Créer l'entreprise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBoutiqueForm;