import React, { useContext, useEffect, useState } from 'react';
import fetchAPI from '../../Utils/request';
import { AuthContext } from '../../Contexts/useAuthContext';
import ClientLine from '../Clientline';
import { NavLink } from 'react-router-dom';
// import { AiOutlineSearch } from "react-icons/ai";

interface IInformationClientDirectory {
    _id: string
    name: string;
    lname: string;
    email?: string;
    address?: string;
    spendAmount?: number;
    editClientDate: string;
}

const InformationClientContent = () => {
    const { informationUser } = useContext(AuthContext);

    const [informationClientDirectory, setInformationClientDirectory] = useState<IInformationClientDirectory[] | null>(null);

    const getInformationClient = async () => {
        try {
            const response = await fetchAPI(`/client/${informationUser?._id}`, "GET");
            const responseData = response.data;
            setInformationClientDirectory(responseData);
        } catch (error: any) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
            setInformationClientDirectory([]);
        }
    }

    useEffect(() => {
        getInformationClient();
    }, []);

    if (informationClientDirectory === null) {
        return <p>Chargement en cours...</p>;
    }

    return (
        <div className='InformationClientContent'>
            <div className="clientBoardContent">
                <div className="infoBoardClient">
                    <div className="informationCaseClientLname">
                        Prénom
                    </div>
                    <div className="informationCaseClientName">
                        Nom
                    </div>
                    <div className="informationCaseClientEmail">
                        Email
                    </div>
                    <div className="informationCaseClientAddress">
                        Adresse
                    </div>
                    <div className="informationCaseClientSpendAmount">
                        Montant dépenser
                    </div>
                    <div className="informationCaseClientDate">
                        Dernière venu
                    </div>
                </div>
                {informationClientDirectory.map((clientItem, index) => (
                    <NavLink to={`client/directory/${clientItem._id}`}>
                        <ClientLine 
                            key={index}
                            Name={clientItem.name}
                            lName={clientItem.lname}
                            email={clientItem.email || ''}
                            address={clientItem.address}
                            spendAmount={clientItem.spendAmount || 0}
                            editDate={clientItem.editClientDate}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default InformationClientContent;
