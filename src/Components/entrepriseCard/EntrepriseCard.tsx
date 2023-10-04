import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import FetchApi from '../../Utils/request';
import redirectToPage from '../../Utils/UrlRedirection';
import ConfirmationModal from '../ConfirmationModal';
import EditEntrepriseModal from '../EditEntrepriseModal';

interface EntrepriseCardProps {
  name: string;
  description: string;
  id: string;
}

const EntrepriseCard: React.FC<EntrepriseCardProps> = ({ name, description, id }) => {
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState<boolean>(false);
  const [isOpenEditForm, setIsOpenEditForm] = useState<boolean>(false);

  const deleteEntreprise = async () => {
    try {
      await FetchApi(`/entreprise/${id}`, 'DELETE');
      redirectToPage('/entreprise');
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const verificationOpenConfirmationModal = () => {
    if (isOpenConfirmationModal) {
      return (
        <ConfirmationModal
          isOpen={isOpenConfirmationModal}
          setIsOpen={setIsOpenConfirmationModal}
          onConfirm={deleteEntreprise}
          confimationtext="la suppression de l'entreprise"
        />
      );
    } else {
      return null;
    }
  };

  const openModalConfirmation = () => {
    setIsOpenConfirmationModal(!isOpenConfirmationModal);
  };

  const verificationOpenEditModal = () => {
    if (isOpenEditForm) {
      return (
        <EditEntrepriseModal
          isOpen={isOpenEditForm}
          setIsOpen={setIsOpenEditForm}
          entrepriseId={id}
        />
      );
    } else {
      return null;
    }
  };

  const openEditModal = () => {
    setIsOpenEditForm(!isOpenEditForm);
  };

  return (
    <div className="EntrepriseCard">
      <NavLink to={`/entreprise/accueil/${id}`}>
        <div className="imageContent">
          <img src="https://businesspress.net/wp-content/uploads/2020/05/son-entreprise.jpg" alt="Logo de l'entreprise" />
        </div>
        <div className="informationEntreprise">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </NavLink>
      <div className="fonctionnalityCard">
        <div onClick={openModalConfirmation} className="deleteEntreprise">
          <RiDeleteBin6Line />
          <p>Supprimer</p>
        </div>
        <div onClick={openEditModal} className="editEntreprise">
          <FiEdit />
          <p>Modifier</p>
        </div>
      </div>
      {verificationOpenConfirmationModal()}
      {verificationOpenEditModal()}
    </div>
  );
};

export default EntrepriseCard;
