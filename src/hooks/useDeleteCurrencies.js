import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useCurrencies from "./useCurrencies";
const useDeleteCurrencies = () => {
  const { getCurrencies  } = useCurrencies();
  const [loadingDeleteCurrency, setLoading] = useState(false);
  const deleteCurrency = async (currencyId) => {
    const conferm = confermation();
    if (!conferm) return;
    try {
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/currencies/${currencyId}`,
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
      toast.success("Currency Deleted Succesfuly !");
      await getCurrencies();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteCurrency, deleteCurrency };
};
export default useDeleteCurrencies;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this currency from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
