import React, { useState } from 'react';
import Header from '../../Components/Header';
import ModalMobile from '../../Components/ModalMobile';
import BackPage from '../../Components/UI-Kit/BackPage';
import InformationClientById from '../../Components/InformationClientById';

const ClientPage = () => {

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
            <div className="clientPageDirectory">
                <BackPage urlRedirection='/client/directory' />
                <InformationClientById />
            </div>
            {openModal()}
        </div>
    );
};

export default ClientPage;