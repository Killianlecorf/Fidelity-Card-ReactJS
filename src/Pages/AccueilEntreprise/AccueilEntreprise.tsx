import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import AccueilEntreprisePanel from '../../Components/AccueilEntreprisePanel';

const AccueilEntreprise = () => {
    return (
        <div>
            <Header/>
            <div className="displayDashboard">
                <NavBar />
                <AccueilEntreprisePanel />
            </div>
        </div>
    );
};

export default AccueilEntreprise;