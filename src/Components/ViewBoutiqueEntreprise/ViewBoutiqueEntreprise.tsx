import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fecthApi from '../../Utils/request'
import FieldCard from '../UI-Kit/FieldCard';
import { BsShop } from "react-icons/bs";
import BackPage from '../UI-Kit/BackPage';

interface RouteParamsEntrepriseId extends Record<string, string | undefined>{
    entrepriseId: string;
}

interface BoutiqueItem {
    _id: string;
    name: string;
    description: string;
}

const ViewBoutiqueEntreprise = () => {

    const {entrepriseId} = useParams<RouteParamsEntrepriseId>()
    const [boutique, setBoutique] = useState<BoutiqueItem[]>([])

    const fetchBoutique = async () => {
        try {
            const response = await fecthApi(`/boutique/${entrepriseId}/boutiques`,'GET')
            const data = response.data
            setBoutique(data)
        } catch (error: any) {
            throw new Error(error);
            
        }
    }

    useEffect(()=>{
        fetchBoutique()
    },[entrepriseId])


    return (
        <div className='ViewBoutiqueEntreprise'>
            <div className="titleBoutiquePage">
                <h2>Boutique entreprise</h2>
            </div>
            <BackPage urlRedirection={`/entreprise/accueil/${entrepriseId}`}/>
            <div className="boutiqueContent">
                {
                    boutique?.map((boutiqueItem: BoutiqueItem) =>{
                        return <FieldCard key={boutiqueItem._id} icon={<BsShop/>} title={boutiqueItem.name} url='/entreprise/boutique/info'/>
                    })
                }
            </div>
        </div>
    );
};

export default ViewBoutiqueEntreprise;