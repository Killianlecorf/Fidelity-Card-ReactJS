import React, { useState } from 'react';
import Header from '../../Components/Header';
import ModalMobile from '../../Components/ModalMobile';

const HomePage: React.FC = () => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModal = () => {
    if (isOpenModal === true) {
      return <ModalMobile setIsOpenModal={setIsOpenModal}/>
    }
    return
  }

  return (
    <div>
        <Header setIsOpenModal={setIsOpenModal}/>
        <div className="separate-modal">
            {openModal()}
        </div>
    </div>
  );
};

export default HomePage;