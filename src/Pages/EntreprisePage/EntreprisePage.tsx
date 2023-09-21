import React, {useContext, useState, useEffect} from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import EntrepriseCard from '../../Components/entrepriseCard';
import { AuthContext } from '../../Contexts/useAuthContext';
import FetchApi from "../../Utils/request";
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import ModalMobile from '../../Components/ModalMobile';
import PaginationNumber from '../../Components/PaginationNumber';


interface EntrepriseData {
    name: string;
    description: string;
  }

  
  const EntreprisePage: React.FC = () => {

    const { informationUser } = useContext(AuthContext);
    const [informationEntreprise, setInformationEntreprise] = useState<EntrepriseData[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 2;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleEntreprises = informationEntreprise.slice(startIndex, endIndex);
  
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
  
      Promise.all(entrepriseIds.map((entrepriseId: string) => fetchEntrepriseData(entrepriseId)))
        .then((responses) => {
          const entrepriseData = responses.filter((response) => response !== null) as EntrepriseData[];
          setInformationEntreprise(entrepriseData);
        });
    }, [entrepriseIds]);


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
              <NavLink to='/newentreprise'>
                  <button className='buttonAddEntreprise'><FaPlus style={{ marginRight: '15px'}}/> Ajouter une entreprise</button>
              </NavLink>
          </div>
          <div className="informationPageEntreprise">
            {visibleEntreprises.map((entreprise, index) => (
              <EntrepriseCard key={index} name={entreprise.name}  description={entreprise.description}/>
            ))}
          </div>
          <PaginationNumber currentPage={currentPage} totalPages={Math.ceil(informationEntreprise.length / itemsPerPage)} onPageChange={setCurrentPage}/>
        </div>
      </div>
      <ModalMobile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}  
  
  export default EntreprisePage;
  
  
  
  