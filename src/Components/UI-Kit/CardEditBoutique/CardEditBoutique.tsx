import React from 'react';
import { BsShop } from "react-icons/bs";

interface ICardEditBoutique {
    titleEditBoutiqueCard: string;
    descriptionEditBoutique: string;
}

const CardEditBoutique:React.FC<ICardEditBoutique> = ({titleEditBoutiqueCard, descriptionEditBoutique}) => {
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
                <div className="deleteBoutiqueButton">
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