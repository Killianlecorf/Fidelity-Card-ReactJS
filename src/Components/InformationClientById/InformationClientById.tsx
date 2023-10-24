import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../Utils/request';

interface IInformationClient {
  _id: string;
  name: string;
  lname: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  spendAmount?: number;
  editClientDate: string;
}

const InformationClientById: React.FC = () => {
  const { clientId } = useParams<{ clientId: string }>();

  const [informationClient, setInformationClient] = useState<IInformationClient | null>(null);

  const getClientById = async () => {
    try {
      const response = await fetchApi(`/client/informations/${clientId}`, 'GET');
      console.log(response);
      
      setInformationClient(response.data);
    } catch (error: any) {
      console.error('Une erreur s\'est produite lors de la requête :', error.message);
    }
  }

  useEffect(() => {
    getClientById();
  }, [clientId]);

  return (
    <div>
      {informationClient && (
        <div>
          <h2>{informationClient.name} {informationClient.lname}</h2>
          <p>Email: {informationClient.email}</p>
          <p>Téléphone: {informationClient.phoneNumber}</p>
          <p>Adresse: {informationClient.address}</p>
          <p>Montant dépensé: {informationClient.spendAmount}</p>
          <p>Date de modification: {informationClient.editClientDate}</p>
        </div>
      )}
    </div>
  );
};

export default InformationClientById;
