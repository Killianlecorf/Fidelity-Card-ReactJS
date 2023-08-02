import { useEffect, useState } from 'react';
import fetchApi from "../Utils/request";

const useAuthContext = () => {
  const [userId, setUserId] = useState<string>('');

  const fetchUserId = async () => {
    try {
      const response = await fetchApi('/user/user', 'GET')
      const data = await response.json();
      const token = data.token;
      console.log(response);
      
      setUserId(token);
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  console.log("premier jwt :" + userId);
  return
};

export default useAuthContext;
