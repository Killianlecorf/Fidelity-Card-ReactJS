import React, { createContext, useContext, FC, useEffect, useState, ReactNode } from 'react';
import fetchApi from '../Utils/request';

// Définir le type pour les informations de l'utilisateur
interface User {
  id: string;
  name: string;
  email: string;
}

// Définir le type pour les valeurs du contexte
interface UserContextValues {
  informationUser: User | null;
}

// Créer un contexte pour les informations de l'utilisateur
const UserContext = createContext<UserContextValues>({
  informationUser: null,
});

// Composant fournisseur (wrapper) pour le contexte d'informations utilisateur
export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [informationUser, setInformationUser] = useState<User | null>(null);

  const fetchUserInfo = async () => {
    try {
      const response = await fetchApi('/user/getUser', 'GET'); 
      setInformationUser(response.data);
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  console.log(informationUser);
  

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // Fournir le contexte et ses valeurs à tous les composants enfants
  return (
    <UserContext.Provider value={{ informationUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte des informations utilisateur
export const useAuthContext = () => {
  return useContext(UserContext);
};