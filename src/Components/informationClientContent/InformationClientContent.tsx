import React, { useContext, useEffect, useState } from 'react';
import fetchAPI from '../../Utils/request';
import { AuthContext } from '../../Contexts/useAuthContext';
import PaginationNumber from '../PaginationNumber';
import ClientLine from '../Clientline';
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';

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

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    }

    const filteredClients = informationClientDirectory
        ? informationClientDirectory.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.lname.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentClient = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='InformationClientContent'>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Rechercher par nom ou prénom"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <IoIosSearch />
            </div>
            <div className="clientBoardContent">
                <div className="clientCardContent">
                    {currentClient.map((clientItem, index) => (
                        <NavLink to={clientItem._id}>
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
                        </NavLink>
                    ))}
                </div>
                <PaginationNumber 
                    totalPages={Math.ceil(filteredClients.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default InformationClientContent;
