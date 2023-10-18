import React, { useState } from 'react';
import { BsShop } from "react-icons/bs";
import fetchApi from "../../../Utils/request";
import redirectToPage from "../../../Utils/UrlRedirection";
import { useParams } from 'react-router-dom';
import ConfirmationModal from '../../ConfirmationModal';
import EditBoutiqueModal from '../../EditBoutiqueModal';

interface ICardEditBoutique {
    titleEditBoutiqueCard: string;
    descriptionEditBoutique: string;
    boutiqueId : string;
    boutiqueName?: string;
    boutiqueDescription?: string;
}

const CardEditBoutique:React.FC<ICardEditBoutique> = ({titleEditBoutiqueCard, descriptionEditBoutique, boutiqueId, boutiqueName, boutiqueDescription }) => {
    
    const {entrepriseId} = useParams()
    const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState<boolean>(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)


    const deleteBoutique = async () => {
        try {
          await fetchApi(`/boutique/${entrepriseId}/${boutiqueId}`, 'DELETE');
          redirectToPage(`/entreprise/settings/edit/boutique/${entrepriseId}`);
        } catch (error) {
          console.error("Une erreur s'est produite lors de la suppression de la boutique : ", error);
        }
      }

    const displayConfirmationModal = () => {
        if (isOpenConfirmationModal) {
            return <ConfirmationModal isOpen={isOpenConfirmationModal} setIsOpen={setIsOpenConfirmationModal} onConfirm={deleteBoutique} confimationtext='la suppression de la boutique'/>
        }
        return null
    }

    const changeStatModal = () => {
        setIsOpenConfirmationModal(!isOpenConfirmationModal)
    }

    const changeStatEditModal = () => {
        setIsOpenEditModal(!isOpenEditModal)
    }
    
    const displayEditModal = () => {
        if (isOpenEditModal) {
            return <EditBoutiqueModal isOpen={isOpenEditModal} setIsOpen={setIsOpenEditModal} boutiqueId={boutiqueId} boutiqueName={boutiqueName} boutiqueDescription={boutiqueDescription} />;
        }
        return null;
    }

    return (
        <div className='CardEditBoutique'>
            <div className="titleEditContent">
                <h2>{titleEditBoutiqueCard}</h2>
            </div>
            <div className="iconEditBoutique">
                <BsShop/>
            </div>
            <div className="descriptionEditBoutiqueContent">
                <div>
                    <p>{descriptionEditBoutique}</p>
                </div>
            </div>
            <div className="EditBoutiqueManager">
                <div onClick={changeStatModal} className="deleteBoutiqueButton">
                    <p>Supprimer</p>
                </div>
                <div onClick={changeStatEditModal} className="editBoutiqueButton">
                    <p>Modifier</p>
                </div>
            </div>
            {displayConfirmationModal()}
            {displayEditModal()}
        </div>
    );
};

export default CardEditBoutique;