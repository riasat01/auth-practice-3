import { useContext } from "react";
import { UserInfo } from "../auth-provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(UserInfo);
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={`/login`}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;