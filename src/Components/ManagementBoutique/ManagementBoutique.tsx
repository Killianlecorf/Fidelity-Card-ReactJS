import React from 'react';
import NavigationSettings from '../NavigationSettings';
import { useParams } from 'react-router-dom';
import CardEditBoutique from '../UI-Kit/CardEditBoutique';

interface RouteParamsEntrepriseId extends Record<string, string | undefined>{
    entrepriseId: string;
}

const ManagementBoutique = () => {

    const {entrepriseId} = useParams<RouteParamsEntrepriseId>()

    return (
        <div className='ManagementBoutique'>
            <NavigationSettings 
                firstTextNavigation='Ajout de boutique' 
                linkFirstNavigation={`/entreprise/settings/${entrepriseId}`}
                secondTextNavigation='Gestion des boutiques' 
                linkSecondNavigation={`/entreprise/settings/edit/boutique/${entrepriseId}`}
                thirdTextNavigation='Modalités' 
                linkThirdNavigation='/entreprise/settings/modality'
                isOpenFourth={false} 
                isOpenFifth={false}
            />
            <div className="BoutiqueEditContent">
                <div className="BoutiqueEditCardContent">
                    <CardEditBoutique titleEditBoutiqueCard='Boutique' descriptionEditBoutique="description d'une boutique" />
                </div>
            </div>
            <div className="paginationBoutiqueEditContent">

            </div>
        </div>
    );
};

export default ManagementBoutique;