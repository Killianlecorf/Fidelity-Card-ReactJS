import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
// import {  useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import FetchApi from "../../Utils/request";
import redirectToPage from "../../Utils/UrlRedirection";
import ConfirmationModal from '../ConfirmationModal';

interface EntrepriseCardProps {
    name: string;
    description : string;
    id:string;
}

const EntrepriseCard: React.FC<EntrepriseCardProps> = ({ name, description, id }) => {

    const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState<boolean>(false)

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

    const verificationOpenConfirmationModal = () => {
        if (isOpenConfirmationModal) {
          return <ConfirmationModal isOpen={isOpenConfirmationModal} setIsOpen={setIsOpenConfirmationModal} onConfirm={deleteEntreprise} confimationtext="supprimer l'entreprise"/>
        } else {
          return null; 
        }
      }

    const openModalConfirmation = () => {
        setIsOpenConfirmationModal(!isOpenConfirmationModal)
    }

    return (
            <div className='EntrepriseCard'>
                    <NavLink to={`/entreprise/accueil/${id}`}>
                        <div className="imageContent">
                            <img src="https://businesspress.net/wp-content/uploads/2020/05/son-entreprise.jpg" />
                        </div>
                        <div className="informationEntreprise">
                            <h2>{ name }</h2>
                            <p>{description}</p>
                        </div>
                    </NavLink>    
                    <div className="fonctionnalityCard">
                        <div onClick={openModalConfirmation} className="deleteEntreprise">
                            <RiDeleteBin6Line/>
                            <p>Supprimer</p>
                        </div>
                        <div onClick={openModalConfirmation} className="editEntreprise">
                            <FiEdit />
                            <p>Modifier</p>
                        </div>
                    </div>
                    {verificationOpenConfirmationModal()}
            </div>
    );
};

export default EntrepriseCard;  