import React, { createContext, FC, useState, ReactNode, useEffect } from 'react';
import fetchApi from '../Utils/request';


interface EntrepriseInfo {
  _id: string;
  name: string;
  description: string;
}


interface User {
  _id : string | null;
  name: string | null;
  email: string | null;
  theme: {
    mainColor: string | null;
    secondaryColor: string | null;
  };
  entreprise: EntrepriseInfo[];
}

interface AuthContextValues {
  tokenUser: string | null;
  informationUser: User | null;
  error: string | null; 
}

export const AuthContext = createContext<AuthContextValues>({
  tokenUser: null,
  informationUser: null,
  error: null, 
});

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tokenUser, setTokenUser] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [informationUser, setInformationUser] = useState<User | null>(null);

  const fetchTokenInfo = async () => {
    try {
      const response = await fetchApi('/user/getUser', 'GET');
      setTokenUser(response.data.userId); 
    } catch (error) {
      handleError(error);
    }
  };
  
  const fetchUserInfo = async () => {
    try {
      const response = await fetchApi(`/user/${tokenUser}`, 'GET');
      console.log(response.data);
      setInformationUser(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error: any) => {
    if (error instanceof Error) {
      const errorMessage = error.toString();
      setFetchError(errorMessage);
      console.error('Erreur de connexion', errorMessage);
    } else {
      const errorMessage = 'Une erreur inconnue s\'est produite';
      setFetchError(errorMessage);
      console.error('Erreur de connexion', errorMessage);
    }
  };

  useEffect(() => {
    fetchTokenInfo();
  }, []);

  useEffect(() => {
    if (tokenUser) {
      fetchUserInfo();
    }
  }, [tokenUser]);

  return (
    <AuthContext.Provider value={{ tokenUser, informationUser, error: fetchError }}>
      {children}
    </AuthContext.Provider>
  );
};
