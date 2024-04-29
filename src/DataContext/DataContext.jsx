import { createContext, useContext, useState, useRef } from "react";
import toast from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
const DataContext = createContext({});
export const useDataContext = () => {
  return useContext(DataContext);
};
export const DataProvider = ({ children }) => {
  const [fn, sfn] = useState("");
  const [place, setPlace] = useState("");
  const [fMi, setFMi] = useState("");
  const [fMa, setFMax] = useState("");
  const [filedType, setFieldType] = useState("");
  const [fReq, sFReq] = useState(false);
  const [fs, sfs] = useState(false);
  const [fv, sfv] = useState([]);
  const fval = useRef();
  const handleAddvalueRow = () => {
    const empty = fv.every(v => v === '')
    console.log(empty);
    console.log(fv.length);
    (fv.length === 0 || !empty) ? sfv([...fv,'']) : toast.call('',"there is an empty value fill it first !");;
  };
  const handleValuesChange = (e, index) => {
    const uVs = [...fv];
    uVs[index] = e?.target?.value;
    sfv(uVs);
  };
  const handleRemoveValueRow = (val,index) => {
    const uVs = [...fv];
    const new2L = uVs.filter((item) => item !== val);
    sfv(new2L);
  };
  const [authUser, setAuthUser] = useState(localStorage?.getItem("user") || "");
  const [token, setToken] = useState(localStorage?.getItem("token") || "");
  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
        authUser,
        setAuthUser,
        fn,
        sfn,
        place,
        setPlace,
        fMi,
        setFMi,
        fMa,
        setFMax,
        filedType,
        setFieldType,
        fs,
        sfs,
        fv,
        sfv,
        fReq,
        sFReq,
        fval,
        handleValuesChange,
        handleRemoveValueRow,
        handleAddvalueRow
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
