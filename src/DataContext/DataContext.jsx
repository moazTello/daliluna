import { createContext, useContext, useState } from "react";

// export const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
const DataContext = createContext({});

export const useDataContext = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children })=>{
    const [ textColor, setTextColor ] = useState('');
    // const [ authUser, setAuthUser ] = useState(JSON.parse(localStorage?.getItem("user")) || '');
    // const [ token, setToken ] = useState(JSON.parse(localStorage?.getItem("token")) || '');
    const [ authUser, setAuthUser ] = useState(localStorage?.getItem("user") || '');
    const [ token, setToken ] = useState(localStorage?.getItem("token") || '');
    return (
    <DataContext.Provider value={{
        token,setToken,authUser,setAuthUser
    }}>
        {children}
    </DataContext.Provider>
    )
};
// export default DataContext;