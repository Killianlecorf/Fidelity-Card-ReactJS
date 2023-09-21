import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

interface EntrepriseCardProps {
    name: string;
    description : string
}

const EntrepriseCard: React.FC<EntrepriseCardProps> = ({ name, description }) => {
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
                        <div className="deleteEntreprise">
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