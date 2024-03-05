import React, {useContext, useState, useEffect} from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import EntrepriseCard from '../../Components/entrepriseCard';
import { AuthContext } from '../../Contexts/useAuthContext';
import FetchApi from "../../Utils/request";
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import ModalMobile from '../../Components/ModalMobile';


interface EntrepriseData {
    name: string;
    description: string;
    _id: string;
  }

  
  const EntreprisePage: React.FC = () => {

    const { informationUser } = useContext(AuthContext);
    const [informationEntreprise, setInformationEntreprise] = useState<EntrepriseData[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  
    const entrepriseIds = informationUser?.entreprise || [];
     
  
    useEffect(() => {
      const fetchEntrepriseData = async (entrepriseId: string) => {
        try {
          const response = await FetchApi(`/entreprise/${entrepriseId}`, 'GET');
          return response.data;
        } catch (error) {
          console.error(`Erreur lors de la récupération des données de l'entreprise ${entrepriseId}: ${error}`);
          return null;
        }
      };
    
      // Utilisez map pour extraire les _id de chaque entreprise
      const entrepriseIdsToFetch = entrepriseIds.map((entreprise) => entreprise._id);
    
      Promise.all(entrepriseIdsToFetch.map((entrepriseId: string) => fetchEntrepriseData(entrepriseId)))
        .then((responses) => {
          const entrepriseData = responses.filter((response) => response !== null) as EntrepriseData[];
          setInformationEntreprise(entrepriseData);
        });
        
    }, [entrepriseIds]);

    const displayButtonAddEntreprise = () => {
        let lengthEntreprise = informationUser?.entreprise.length || 0
        if (lengthEntreprise < 3) {
            return (
            <NavLink to='/newentreprise'>
                <button className='buttonAddEntreprise'><FaPlus style={{ marginRight: '15px'}}/> Ajouter une entreprise</button>
            </NavLink>)
        }else{
            return ""
        }
    }

  return (
    <div>
      <Header isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <div className="displayDashboard">
        <NavBar />
        <div className="page">
          <div className="titlePageEntreprise">
            <h2>Vos Entreprises</h2>
          </div>
          <div className="buttonAddEntreprise">
              {displayButtonAddEntreprise()}
          </div>
          <div className="informationPageEntreprise">
            {informationEntreprise.map((entreprise, index) => (
              <EntrepriseCard key={index} name={entreprise.name}  description={entreprise.description} id={entreprise._id} />
            ))}
          </div>
        </div>
      </div>
      <ModalMobile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}  
  
  export default EntreprisePage;
  
  
  
  