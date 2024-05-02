import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditCurrencies = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editedCode, setEditedCode] = useState("");
  const [editedName, setEditedName] = useState("");
  const editCurrency = async (currencyId) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", editedName);
      formData.append("code", editedCode);
      const res = await axiosPrivateTokenized.put(
        `/dashboard/currencies/${currencyId}`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data1 = res.data.data;
      if (data1.error) {
        throw new Error(data1.error);
      }
      toast.success("The Currency Edited Succesfuly !");
      navigate("/currencies");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditedCurrenciy = async (currencyId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/currencies/${currencyId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data1 = res.data.data;
      if (data1.error) {
        throw new Error(data1.error);
      }
      setEditedName(data1.name);
      setEditedCode(data1.price);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    getEditedCurrenciy,
    editCurrency,
    setEditedName,
    setEditedCode,
    editedName,
    editedCode,
  };
};
export default useEditCurrencies;
