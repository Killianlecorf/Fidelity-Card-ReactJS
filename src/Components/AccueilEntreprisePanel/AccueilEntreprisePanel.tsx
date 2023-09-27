import React from 'react';
import BackPage from '../UI-Kit/BackPage';
import FieldCard from '../UI-Kit/FieldCard';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useParams } from 'react-router-dom';

interface RouteParamsEntrepriseId extends Record<string, string | undefined>{
    entrepriseId: string;
}

const AccueilEntreprisePanel = () => {

    const {entrepriseId} = useParams<RouteParamsEntrepriseId>()
    

    return (
        <div className='AccueilEntreprisePanel'>
            <div className="titleEntreprisePanel">
                <h2>Accueil Entreprise</h2>
            </div>
            <BackPage urlRedirection='/entreprise' />
            <div className="ChoisePanelContent">
                <FieldCard icon={<HiOutlineUserGroup/>} title='Base de donnée client' url='/enterprise/client' />
                <FieldCard icon={<BsShop/>} title='Vos Boutiques' url={`/entreprise/${entrepriseId}/boutique`}/>
                <FieldCard icon={<FiSettings/>} title="Option de l'entreprise" url='/entreprise/settings'/>
            </div>
        </div>
    ); 
};

export default AccueilEntreprisePanel;