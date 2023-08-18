import React, { createContext, FC, useState, ReactNode, useContext } from 'react';
import fetchApi from '../Utils/request';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextValues {
  informationUser: User | null;
  error: string | null;
}

export const AuthContext = createContext<UserContextValues>({
  informationUser: null,
  error: null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [informationUser, setInformationUser] = useState<User | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchUserInfo = async () => {
    try {
      const response = await fetchApi('/user/getUser', 'GET');
      console.log(response.data);
      setInformationUser(response.data);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.toString();
        setFetchError(errorMessage);
        console.error('Erreur de connexion', errorMessage);
      } else {
        const errorMessage = 'Une erreur inconnue s\'est produite';
        setFetchError(errorMessage);
        console.error('Erreur de connexion', errorMessage);
      }
    }
  };

  fetchUserInfo();

  return (
    <AuthContext.Provider value={{ informationUser, error: fetchError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};