import { createContext, useContext, useState, useRef } from "react";
import toast from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
const DataContext = createContext({});
export const useDataContext = () => {
  return useContext(DataContext);
};
export const DataProvider = ({ children }) => {
  // ======================================================== field
  const [fn, sfn] = useState("");
  const [place, setPlace] = useState("");
  const [fMi, setFMi] = useState("");
  const [fMa, setFMax] = useState("");
  const [filedType, setFieldType] = useState("");
  const [fReq, sFReq] = useState(false);
  const [fs, sfs] = useState(false);
  const [fv, sfv] = useState([]);
  const fval = useRef();

  // =========================================================== emelent

  const phonesrefer = useRef();
  const phonesrefer2 = useRef();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [email, setEmail] = useState("");
  const [you, setyou] = useState("");
  const [insta, setInsta] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [image2, setImage2] = useState("");
  const [phones, setPhones] = useState([]);
  const [phones2, setPhones2] = useState([]);

  const handleAddvalueRowElemenets = () => {
    const empty = phones.every((v) => v === "");
    const empty2 = phones2.every((v) => v === "");
    console.log(empty, empty2);
    phones.length === 0 || !empty || !empty2 || phones2.length === 0
      ? (setPhones([...phones, ""]), setPhones2([...phones2, ""]))
      : toast.call("", "there is an empty value fill it first !");
  };
  const handleValuesChangeElements = (e, index, loc) => {
    if (loc === 1) {
      const uVs = phones;
      uVs[index] = e;
      setPhones(uVs);
    } else {
      const uVs = [...phones2];
      uVs[index] = e?.target?.value;
      setPhones2(uVs);
    }
  };
  const handleRemoveValueRowElements = (val, index) => {
    const uVs = [...phones];
    const uVs2 = [...phones2];
    console.log(index);
    const new2L = uVs.filter((item, index1) => index1 !== index);
    const new2L2 = uVs2.filter((item, index1) => index1 !== index);
    setPhones(new2L);
    setPhones2(new2L2);
  };


  const handleImage = (e, id) => {
    id === 1 && setImage(e.target.files[0]);
    id === 2 && setImage2(e.target.files[0]);
    id === 3 && setVideo(e.target.files[0]);
  };

  // ===============================================================
  const handleAddvalueRow = () => {
    const empty = fv.every((v) => v === "");
    console.log(empty);
    console.log(fv.length);
    fv.length === 0 || !empty
      ? sfv([...fv, ""])
      : toast.call("", "there is an empty value fill it first !");
  };
  const handleValuesChange = (e, index) => {
    const uVs = [...fv];
    uVs[index] = e?.target?.value;
    sfv(uVs);
  };
  const handleRemoveValueRow = (val, index) => {
    const uVs = [...fv];
    const new2L = uVs.filter((item) => item !== val);
    sfv(new2L);
  };
  const [editedElement, setEditeElement] = useState({});
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
        handleAddvalueRow,
        editedElement,
        setEditeElement,
        name,
        setName,
        description,
        setDescription,
        address,
        setAddress,
        timeOpen,
        setTimeOpen,
        email,
        setEmail,
        you,
        setyou,
        insta,
        setInsta,
        twitter,
        setTwitter,
        facebook,
        setFacebook,
        website,
        setWebsite,
        country,
        setCountry,
        province,
        setProvince,
        city,
        setCity,
        image,
        setImage,
        video,
        setVideo,
        image2,
        setImage2,
        phones,
        setPhones,
        phones2,
        setPhones2,
        phonesrefer, 
        phonesrefer2,
        handleAddvalueRowElemenets,
        handleValuesChangeElements,
        handleRemoveValueRowElements,
        handleImage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
