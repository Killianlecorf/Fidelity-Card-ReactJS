import React from 'react';
import NavigationSettings from '../NavigationSettings';
import BackPage from '../UI-Kit/BackPage';

const EntrepriseSettingsComponent = () => {
    return (
        <div className='EntrepriseSettingsComponent'>
            <div className="backPageContentEntrepriseSettings">
                <BackPage urlRedirection='/entreprise' />
            </div>
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
        </div>
    );
};

export default EntrepriseSettingsComponent;