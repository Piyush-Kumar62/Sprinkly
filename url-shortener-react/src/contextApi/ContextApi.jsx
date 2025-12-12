import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    const getToken = localStorage.getItem("JWT_TOKEN")
        ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
        : null;

    const [token, setToken] = useState(getToken);

    const sendData = {
        token,
        setToken,
    };

    return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


// eslint-disable-next-line react-refresh/only-export-components
export const useStoreContext = () => {
    const context = useContext(ContextApi);
    return context;
}