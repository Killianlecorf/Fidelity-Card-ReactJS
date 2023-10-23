import React, { useState } from 'react';
import Header from '../../Components/Header';
import BackPage from '../../Components/UI-Kit/BackPage';
import InformationClientContent from '../../Components/informationClientContent';
import ModalMobile from '../../Components/ModalMobile';

const ClientRepoPage = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModal = () => {
    if (isOpenModal === true) {
      return <ModalMobile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    }
    return
  }

    return (
        <div>
            <Header isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
            <div className="clientPageDirectory">
                <BackPage urlRedirection='/home'/>
                <InformationClientContent />
            </div>
            {openModal()}
        </div>
    );
};

export default ClientRepoPage;