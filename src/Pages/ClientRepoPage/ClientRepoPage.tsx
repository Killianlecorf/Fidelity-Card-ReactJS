import React from 'react';
import Header from '../../Components/Header';
import BackPage from '../../Components/UI-Kit/BackPage';
import InformationClientContent from '../../Components/informationClientContent';

const ClientRepoPage = () => {
    return (
        <div>
            <Header />
            <div className="clientPageDirectory">
                <BackPage urlRedirection='/home'/>
                <InformationClientContent />
            </div>
        </div>
    );
};

export default ClientRepoPage;