import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useLang = () => {
  const [loading, setLoading] = useState(false);
  const { setLang } = useDataStore();
  const getLang = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/site-languages`,
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res.data.data;
      if (data.error) {
        throw new Error(data.error);
      }
      setLang(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getLang };
};
export default useLang;