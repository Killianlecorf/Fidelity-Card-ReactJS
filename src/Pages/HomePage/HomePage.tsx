import React, { useState } from 'react';
import Header from '../../Components/Header';
import ModalMobile from '../../Components/ModalMobile';
import NavBar from '../../Components/NavBar';

const HomePage: React.FC = () => {

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
        </div>
        <div className="separate-modal">
            {openModal()}
        </div>
    </div>
  );
};

export default HomePage;