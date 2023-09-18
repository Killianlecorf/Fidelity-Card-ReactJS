import React, { useState } from 'react';
import Header from '../../Components/Header';
import AddEntrepriseForm from '../../Components/AddEntrepriseForm';
import ModalMobile from '../../Components/ModalMobile';

const AddEntreprisePage = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModal = () => {
    if (isOpenModal === true) {
      return <ModalMobile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    }
    return
  }

    return (
        <div>
            <Header isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
            <AddEntrepriseForm />
            {openModal()}
        </div>
    );
};

export default AddEntreprisePage;