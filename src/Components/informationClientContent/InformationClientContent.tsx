import React, { useContext, useEffect, useState } from 'react';
import fetchAPI from '../../Utils/request';
import { AuthContext } from '../../Contexts/useAuthContext';
// import ClientLine from '../Clientline';
// import { NavLink } from 'react-router-dom';
import PaginationNumber from '../PaginationNumber';

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

    console.log(currentClient);
    

    return (
        <div className='InformationClientContent'>
            <div className="clientBoardContent">
            <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>E-mail</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClient.map((clientItem, index) => (
                            <tr key={index}>
                                <td>{clientItem.name}</td>
                                <td>{clientItem.lname}</td>
                                <td>{clientItem.email || ''}</td>
                                <td>{clientItem.phoneNumber || ''}</td>
                                <td>{clientItem.address || ''}</td>
                                <td>{clientItem.spendAmount || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
