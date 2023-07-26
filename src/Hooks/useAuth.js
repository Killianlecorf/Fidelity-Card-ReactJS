import { useState, useEffect } from 'react';
import fetchAPI from '../Utils/request'

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetchAPI('/user/isAuth', 'GET');
                setIsAuthenticated(response.status === 200);
            } catch (error) {
                setIsAuthenticated(false)
                console.error('Erreur lors de la vérification de l\'authentification :', error);
            }
            setIsLoading(false)
        };

        checkAuthStatus();
    }, []);
    console.log(isLoading);
    return [isAuthenticated, isLoading];
};

export default useAuth;