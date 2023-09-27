import React, { useState } from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import ViewBoutiqueEntreprise from '../../Components/ViewBoutiqueEntreprise';
import ModalMobile from '../../Components/ModalMobile';

const BoutiqueEntreprise = () => {

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
            <div className="flexBoutiqueEntreprise">
              <NavBar />
              <ViewBoutiqueEntreprise />
            </div>
            {openModal()}
        </div>
    );
};

export default BoutiqueEntreprise;