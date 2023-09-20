import React from 'react';
import BackPage from '../UI-Kit/BackPage';
import FieldCard from '../UI-Kit/FieldCard';
import { HiOutlineUserGroup } from "react-icons/hi2";

const AccueilEntreprisePanel = () => {
    return (
        <div className='AccueilEntreprisePanel'>
            <div className="titleEntreprisePanel">
                <h2>Accueil Entreprise</h2>
            </div>
            <BackPage urlRedirection='/entreprise' />
            <div className="ChoisePanelContent">
                <FieldCard icon={<HiOutlineUserGroup/>} title='Base de donnée client' />
            </div>
        </div>
    );
};

export default AccueilEntreprisePanel;