import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import fetchAPI from '../../Utils/request';
import urlRedirection from '../../Utils/UrlRedirection';

interface IEditBoutiqueModal {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  boutiqueId?: string;
  boutiqueName?: string;
  boutiqueDescription?: string;
}

interface InformationBoutique {
  name: string;
  description: string;
}

interface RouteParamsEntrepriseId extends Record<string, string | undefined> {
  entrepriseId: string;
}

const EditBoutiqueModal: React.FC<IEditBoutiqueModal> = ({ setIsOpen, isOpen, boutiqueId, boutiqueName, boutiqueDescription}) => {
  const { entrepriseId } = useParams<RouteParamsEntrepriseId>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [informationBoutique, setInformationBoutique] = useState<InformationBoutique>({
    name: boutiqueName || '',
    description: boutiqueDescription || '',
  });

  const validationForm = async () => {
    const boutique = {
      name: informationBoutique.name,
      description: informationBoutique.description,
    };

    try {
      const response = await fetchAPI(`/boutique/${entrepriseId}/${boutiqueId}`, 'PUT', boutique);
      if (response.ok) {
        urlRedirection(`/entreprise/settings/edit/boutique/${entrepriseId}`);
      } else if (response.status === 401) {
        setErrorMessage('Boutique déjà existante');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditBoutique = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInformationBoutique((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const closeModalEditModal = () => {
    setIsOpen(!isOpen);
  }; 

  return (
    <div className="EditBoutiqueModalBack">
      <div className="editBoutiqueModalContent">
        <div className="closeModal">
          <AiOutlineClose onClick={closeModalEditModal} />
        </div>
        <div className="EditBoutiqueForm">
          <div className="titleFormEditBoutique">
            <h2>Édition de boutique</h2>
          </div>
          <div className="inputNameContentEditBoutique">
            <label>Nom de la boutique</label>
            <input name="name" onChange={handleEditBoutique} type="text" value={informationBoutique.name}/>
          </div>
          <div className="descriptionNameContentEditBoutique">
            <label>Description de la boutique</label>
            <textarea name="description" onChange={handleEditBoutique} value={informationBoutique.description}></textarea>
          </div>
          <div className="errorMessageEditBoutique">{errorMessage}</div>
          <div className="submitButtonEditBoutique">
            <button onClick={validationForm}>Enregistrer la boutique</button>
          </div>
        </div>
      </div>
      <div onClick={closeModalEditModal} className="EditBoutiqueModalBackColor"></div>
    </div>
  );
};

export default EditBoutiqueModal;
