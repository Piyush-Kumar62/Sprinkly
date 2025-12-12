import { Navigate } from "react-router-dom";
import { useStoreContext } from "./contextApi/ContextApi";
import PropTypes from "prop-types";

export default function PrivateRoute({ children, publicPage}) {
    const { token } = useStoreContext();

    if (publicPage) {
        return token ? <Navigate to="/dashboard" /> : children;
    }

    return !token ? <Navigate to="/login" /> : children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    publicPage: PropTypes.bool,
};