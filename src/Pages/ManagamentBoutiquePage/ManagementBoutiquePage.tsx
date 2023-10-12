import React, { useState } from 'react';
import Header from '../../Components/Header';
import ModalMobile from '../../Components/ModalMobile';
import NavBar from '../../Components/NavBar';
import ManagementBoutique from '../../Components/ManagementBoutique';

const ManagementBoutiquePage = () => {

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
            <div className="navbar-content">
                <NavBar />
                <ManagementBoutique />
            </div>
            {openModal()}
        </div>
    );
};

export default ManagementBoutiquePage;