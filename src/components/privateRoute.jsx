import { Route, Navigate } from 'react-router-dom';  
import useGetCookie from '../Hooks/Cookie';  

const PrivateRoute = ({ element, ...rest }) => {  
    const { getCookie } = useGetCookie(); // فرض می‌کنیم که این Hook تابع getCookie را برمی‌گرداند  
    const isAuthenticated = !!getCookie('accessToken');  

    return (  
        <Route  
            {...rest}  
            element={isAuthenticated ? element : <Navigate to="/login" />}  
        />  
    );  
};  

export default PrivateRoute;