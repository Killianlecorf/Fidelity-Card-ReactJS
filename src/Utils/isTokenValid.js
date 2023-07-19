import Cookies from 'js-cookie';

const isTokenValid = () => {
    const tokenCookie = Cookies.get('token');
    
    console.log(tokenCookie);

    if (tokenCookie) {
      console.log('ta un token bro');
      return true;
    } else {
      console.log('token introuvable');
      return false;
    }
  };

export default isTokenValid