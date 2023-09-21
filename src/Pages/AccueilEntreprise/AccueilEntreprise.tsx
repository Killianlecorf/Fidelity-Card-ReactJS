import React, { useState } from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import AccueilEntreprisePanel from '../../Components/AccueilEntreprisePanel';
import ModalMobile from '../../Components/ModalMobile';

const AccueilEntreprise = () => {

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
            <div className="displayDashboard">
                <NavBar />
                <AccueilEntreprisePanel />
            </div>
            {openModal()}
        </div>
    );
};

export default AccueilEntreprise;