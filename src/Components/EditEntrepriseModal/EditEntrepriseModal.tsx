import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import fetchApi from '../../Utils/request';
import UrlRedirection from '../../Utils/UrlRedirection';

interface IEditEntrepriseModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  entrepriseId: string;
}

interface InformationEntreprise {
  name: string;
  description: string;
}

const EditEntrepriseModal: React.FC<IEditEntrepriseModal> = ({ isOpen, setIsOpen, entrepriseId }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [informationEntreprise, setInformationEntreprise] = useState<InformationEntreprise>({
    name: '',
    description: ''
  });

  const closeEditModal = () => {
    setIsOpen(!isOpen);
  };

  const handleEditEnterprise = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nameInput = event.target.name;
    const entrepriseText = event.target.value;
    setInformationEntreprise(prevState => ({
      ...prevState,
      [nameInput]: entrepriseText
    }));
  };

  const validationEditForm = async () => {
    try {
      const entreprise = {
        name: informationEntreprise.name,
        description: informationEntreprise.description
      };

      const response = await fetchApi(`/entreprise/${entrepriseId}`, 'PUT', entreprise);

      if (response.ok) {
        UrlRedirection('/entreprise');
      } else if (response.status === 404) {
        setErrorMessage("Entreprise n'existe pas");
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  const displayErrorMessage = () => {
    return errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null;
  };

  return (
    <div className='EditEntrepriseModalContent'>
      <div className="editEntrepriseModal">
        <div className="closeModal">
          <AiOutlineClose onClick={closeEditModal} />
        </div>
        <div className="titleEditModal">
          <h2>Modifie ton entreprise</h2>
        </div>
        <div className="editEntrepriseForm">
          <div className="inputNameContent">
            <div>
              <label>Nom de l'entreprise</label>
              <input name='name' onChange={handleEditEnterprise} placeholder="Modifier le nom d'entreprise" type="text" />
            </div>
          </div>
          <div className="textAreaDescContent">
            <div>
              <label>description de l'entreprise</label>
              <textarea name='description' onChange={handleEditEnterprise} placeholder="Modifier la description d'entreprise"></textarea>
            </div>
            {displayErrorMessage()}
          </div>
          <div className="editButton">
            <button onClick={validationEditForm}>Confirmer</button>
          </div>
        </div>
      </div>
      <div onClick={closeEditModal} className="editEntrepriseModalBack"></div>
    </div>
  );
};

export default EditEntrepriseModal;
