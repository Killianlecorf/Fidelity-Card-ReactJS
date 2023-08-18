import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import SettingsColor from '../../Components/SettingsColor';

const SettingsPage = () => {
    return (
        <div>
            <Header />
            <div className="displayDashboard">
                <NavBar />
                <div className="settings">
                    <SettingsColor />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;