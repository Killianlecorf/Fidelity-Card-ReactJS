import React from 'react';
import NavigationSettings from '../NavigationSettings';
import AddBoutiqueForm from '../AddBoutiqueForm';
import { useParams } from 'react-router-dom';

interface RouteParamsEntrepriseId extends Record<string, string | undefined>{
    entrepriseId: string;
}

const EntrepriseSettingsComponent = () => {

    const {entrepriseId} = useParams<RouteParamsEntrepriseId>()
    

    return (
        <div className='EntrepriseSettingsComponent'>
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
            <AddBoutiqueForm />
        </div>
    );
};

export default EntrepriseSettingsComponent;