import React, { useContext, useEffect, useState } from 'react';
import fetchAPI from '../../Utils/request';
import { AuthContext } from '../../Contexts/useAuthContext';
// import { NavLink } from 'react-router-dom';
import PaginationNumber from '../PaginationNumber';
import ClientLine from '../Clientline';

interface IInformationClientDirectory {
    _id: string
    name: string;
    lname: string;
    email?: string;
    phoneNumber?: number;
    address?: string;
    spendAmount?: number;
    editClientDate: string;
}

const InformationClientContent = () => {
    const { informationUser } = useContext(AuthContext);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
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
    }, [informationClientDirectory]);

    if (informationClientDirectory === null) {
        setInformationClientDirectory([])
        return <p>Chargement en cours...</p>;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentClient = informationClientDirectory ? informationClientDirectory.slice(indexOfFirstItem, indexOfLastItem) : [];
    

    return (
        <div className='InformationClientContent'>
            <div className="clientBoardContent">
                <div className="clientCardContent">
                    {currentClient.map((clientItem, index) => (
                        <ClientLine 
                            key={index} 
                            Name={clientItem.name} 
                            lName={clientItem.lname} 
                            email={clientItem.email} 
                            phoneNumber={clientItem.phoneNumber} 
                            address={clientItem.address} 
                            spendAmount={clientItem.spendAmount}
                            editClient={clientItem.editClientDate}
                        />
                    ))}
                </div>
                <PaginationNumber 
                    totalPages={Math.ceil(informationClientDirectory.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default InformationClientContent;
