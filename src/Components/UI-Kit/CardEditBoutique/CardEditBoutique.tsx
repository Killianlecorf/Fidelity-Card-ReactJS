import React from 'react';
import { BsShop } from "react-icons/bs";
import fetchApi from "../../../Utils/request";
import redirectToPage from "../../../Utils/UrlRedirection";
import { useParams } from 'react-router-dom';

interface ICardEditBoutique {
    titleEditBoutiqueCard: string;
    descriptionEditBoutique: string;
    boutiqueId : string;
}

const CardEditBoutique:React.FC<ICardEditBoutique> = ({titleEditBoutiqueCard, descriptionEditBoutique, boutiqueId}) => {
    
    const {entrepriseId} = useParams()

    const deleteBoutique = async () => {
        try {
          await fetchApi(`/boutique/${entrepriseId}/${boutiqueId}`, 'DELETE');
          redirectToPage(`/entreprise/settings/edit/boutique/${entrepriseId}`);
        } catch (error) {
          console.error("Une erreur s'est produite lors de la suppression de la boutique : ", error);
        }
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
                <div onClick={deleteBoutique} className="deleteBoutiqueButton">
                    <p>Supprimer</p>
                </div>
                <div className="editBoutiqueButton">
                    <p>Modifier</p>
                </div>
            </div>
        </div>
    );
};

export default CardEditBoutique;