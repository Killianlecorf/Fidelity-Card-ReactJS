import React from 'react';
import NavigationSettings from '../NavigationSettings';
import AddBoutiqueForm from '../AddBoutiqueForm';

const EntrepriseSettingsComponent = () => {
    return (
        <div className='EntrepriseSettingsComponent'>
            <NavigationSettings 
                firstTextNavigation='Ajout de boutique' 
                linkFirstNavigation='/entreprise/settings/add/boutique'
                secondTextNavigation='Gestion des boutiques' 
                linkSecondNavigation='/entreprise/settings/edit/boutique'
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