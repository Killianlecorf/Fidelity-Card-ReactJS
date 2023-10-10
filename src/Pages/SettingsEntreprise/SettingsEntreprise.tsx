import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import EntrepriseSettingsComponent from '../../Components/EntrepriseSettingsComponent';

const SettingsEntreprise = () => {
    return (
        <div>
            <Header />
            <div className="settingsEntrepriseContent">
                <NavBar />
                <EntrepriseSettingsComponent />
            </div>
        </div>
    );
};

export default SettingsEntreprise;