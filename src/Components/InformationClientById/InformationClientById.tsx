import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from "../../Utils/request";

interface IInformationClient {
    _id: string
    name: string;
    lname: string;
    email?: string;
    phoneNumber?: number;
    address?: string;
    spendAmount?: number;
    editClientDate: string;
}

const InformationClientById = () => {

    const {clientId} = useParams()
    const [informationClient, setInformationClient]= useState<IInformationClient>()
    
    const getClientById = async () => {
        try {
            const response = await fetchApi(`/client/${clientId}`, 'GET')
            setInformationClient(response.data)
        } catch (error:any) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
        }
    }

    useEffect(()=> {
        getClientById()
    },[])

    console.log(informationClient);
    

    return (
        <div>
        </div>
    );
};

export default InformationClientById;