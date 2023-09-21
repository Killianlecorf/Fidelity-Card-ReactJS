import React from 'react';
import { NavLink } from 'react-router-dom';
// import {  useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import FetchApi from "../../Utils/request";
import redirectToPage from "../../Utils/UrlRedirection";

interface EntrepriseCardProps {
    name: string;
    description : string;
    id:string;
}

const EntrepriseCard: React.FC<EntrepriseCardProps> = ({ name, description, id }) => {

    // const navigate = useNavigate()

    const deleteEntreprise = async () => {
        try {
            await FetchApi(`/entreprise/${id}`,'DELETE')
            // navigate('/entreprise')
            redirectToPage('/entreprise')
        } catch (error:any) {
            throw new Error(error);
        }
        
    }  


    return (
            <div className='EntrepriseCard'>
                    <NavLink to='/entreprise/accueil'>
                        <div className="imageContent">
                            <img src="https://businesspress.net/wp-content/uploads/2020/05/son-entreprise.jpg" />
                        </div>
                        <div className="informationEntreprise">
                            <h2>{ name }</h2>
                            <p>{description}</p>
                        </div>
                    </NavLink>    
                    <div className="fonctionnalityCard">
                        <div onClick={deleteEntreprise} className="deleteEntreprise">
                            <RiDeleteBin6Line/>
                            <p>Supprimer</p>
                        </div>
                        <div className="editEntreprise">
                            <FiEdit />
                            <p>Modifier</p>
                        </div>
                    </div>
            </div>
    );
};

export default EntrepriseCard;  