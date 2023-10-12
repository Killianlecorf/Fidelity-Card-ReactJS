import React, { useEffect, useState } from 'react';
import NavigationSettings from '../NavigationSettings';
import { useParams } from 'react-router-dom';
import CardEditBoutique from '../UI-Kit/CardEditBoutique';
import fetchApi from '../../Utils/request';
import PaginationNumber from '../PaginationNumber';
import EditBoutiqueModal from '../EditBoutiqueModal';

interface RouteParamsEntrepriseId extends Record<string, string | undefined> {
  entrepriseId: string;
}

interface IBoutiques {
  _id: string;
  name: string;
  description: string;
}

const ManagementBoutique = () => {
  const { entrepriseId } = useParams<RouteParamsEntrepriseId>();
  const [boutiques, setBoutiques] = useState<IBoutiques[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenEditBoutiqueModal, setIsOpenEditBoutiqueModal]= useState<boolean>()
  const itemsPerPage = 2; 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBoutiques = boutiques.slice(indexOfFirstItem, indexOfLastItem);


  const getBoutique = async () => {
    try {
      const response = await fetchApi(`/boutique/${entrepriseId}/boutiques`, 'GET');
      setBoutiques(response.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBoutique();
  }, [entrepriseId]);

  const displayEditBoutiqueModal = () => {
    if (isOpenEditBoutiqueModal) {
      // return <EditBoutiqueModal setIsOpen={setIsOpenEditBoutiqueModal}/>
    }
  }

  return (
    <div className="ManagementBoutique">
      <NavigationSettings
        firstTextNavigation="Ajout de boutique"
        linkFirstNavigation={`/entreprise/settings/${entrepriseId}`}
        secondTextNavigation="Gestion des boutiques"
        linkSecondNavigation={`/entreprise/settings/edit/boutique/${entrepriseId}`}
        thirdTextNavigation="Modalités"
        linkThirdNavigation="/entreprise/settings/modality"
        isOpenFourth={false}
        isOpenFifth={false}
      />
      <div className="BoutiqueEditContent">
        <div className="BoutiqueEditCardContent">
          {currentBoutiques.map((boutique) => (
            <CardEditBoutique
              key={boutique._id}
              titleEditBoutiqueCard={boutique.name}
              descriptionEditBoutique={boutique.description}
              boutiqueId={boutique._id}
            />
          ))}
        </div>
      </div>
      <div className="paginationBoutiqueEditContent">
        <PaginationNumber 
        currentPage={currentPage}
        totalPages={Math.ceil(boutiques.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        />
      </div>
      {/* {displayEditBoutiqueModal()} */}
    </div>
  );
};

export default ManagementBoutique;
