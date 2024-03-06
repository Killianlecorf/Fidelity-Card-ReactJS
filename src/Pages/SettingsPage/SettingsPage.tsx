import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';

const SettingsPage = () => {
    return (
        <div>
            <Header />
            <div className="displayDashboard">
                <NavBar />
                <div className="settingsInformationAmount">
                    <h2>Choisissez vos paramètre d'entreprise</h2>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;