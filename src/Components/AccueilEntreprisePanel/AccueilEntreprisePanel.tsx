import React from 'react';
import BackPage from '../UI-Kit/BackPage';
import FieldCard from '../UI-Kit/FieldCard';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const AccueilEntreprisePanel = () => {

    return (
        <div className='AccueilEntreprisePanel'>
            <div className="titleEntreprisePanel">
                <h2>Accueil Entreprise</h2>
            </div>
            <BackPage urlRedirection='/entreprise' />
            <div className="ChoisePanelContent">
                <FieldCard icon={<HiOutlineUserGroup/>} title='Base de donnée client' url='/enterprise/client' />
                <FieldCard icon={<BsShop/>} title='Vos Boutiques' url='/entreprise/boutique'/>
                <FieldCard icon={<FiSettings/>} title="Option de l'entreprise" url='/entreprise/settings'/>
            </div>
            
        </div>
    );
};

export default AccueilEntreprisePanel;