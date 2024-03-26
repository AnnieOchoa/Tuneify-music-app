import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.localStorage.removeItem('userData');
        navigate('/auth/login');
    }, [])

  return null;
};

export default LogOut;
