import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useCurrencies = () => {
  const [loadingCurrencies, setLoading] = useState(false);
  const { setCurrencies } = useDataStore();
  const getCurrencies = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/currencies`,
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
      setCurrencies(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingCurrencies, getCurrencies };
};
export default useCurrencies;