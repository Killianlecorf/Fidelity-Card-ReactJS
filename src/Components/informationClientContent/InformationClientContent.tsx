import React, { useContext, useEffect, useState } from 'react';
import fetchAPI from '../../Utils/request';
import { AuthContext } from '../../Contexts/useAuthContext';

interface IInformationClientDirectory {
    name: string;
    lname: string;
    email?: string;
    address?: string;
    spendAmount?: number;
    editClientDate: string;
}

const InformationClientContent = () => {

    const { informationUser } = useContext(AuthContext);

    const [informationClientDirectory, setInformationClientDirectory] = useState<IInformationClientDirectory>({
        name: '',
        lname: '',
        email: '',
        address: '',
        spendAmount: 0,
        editClientDate: '',
      });
      

      const getInformationClient = async () => {
        try {
            const response = await fetchAPI(`/client/${informationUser?._id}`, "GET");
            const responseData = response.data;
            setInformationClientDirectory(responseData);
          } catch (error: any) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
          }
      }

      useEffect(() => {
        getInformationClient()
      },[])

      console.log(informationClientDirectory);
      

    return (
        <div className='InformationClientContent'>
            
        </div>
    );
};

export default InformationClientContent;