import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import ViewBoutiqueEntreprise from '../../Components/ViewBoutiqueEntreprise';

const BoutiqueEntreprise = () => {
    return (
        <div>
            <Header />
            <div className="flexBoutiqueEntreprise">
              <NavBar />
              <ViewBoutiqueEntreprise />
            </div>
        </div>
    );
};

export default BoutiqueEntreprise;