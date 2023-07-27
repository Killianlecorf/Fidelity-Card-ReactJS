import { useState, useEffect } from 'react';
import fetchAPI from '../Utils/request';

const useAuth = (): [boolean, boolean] => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkAuthStatus = async (): Promise<void> => {
            try {
                const response = await fetchAPI('/user/isAuth', 'GET');
                setIsAuthenticated(response.status === 200);
            } catch (error) {
                setIsAuthenticated(false);
                console.error('Erreur lors de la vérification de l\'authentification :', error);
            }
            setIsLoading(false);
        };

        checkAuthStatus();
    }, []);
    return [isAuthenticated, isLoading];
};

export default useAuth;