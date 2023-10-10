import React, { useState } from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import EntrepriseSettingsComponent from '../../Components/EntrepriseSettingsComponent';
import ModalMobile from '../../Components/ModalMobile';

const SettingsEntreprise = () => {

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
            <div className="settingsEntrepriseContent">
                <NavBar />
                <EntrepriseSettingsComponent />
            </div>
            {openModal()}
        </div>
    );
};

export default SettingsEntreprise;