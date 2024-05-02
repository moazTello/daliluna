import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditProvencies = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editedname, setEditedName] = useState("");

  const editProvency = async (countryId, provencyId) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", editedname);
      const res = await axiosPrivateTokenized.put(
        `/dashboard/countries/${countryId}/provinces/${provencyId}`,
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
      toast.success("The Provency Has Edited Succesfuly !");
      navigate(`/Countries/provencies/${countryId}`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditProvency = async (countryId,provencyId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/countries/${countryId}/provinces/${provencyId}`,
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
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editProvency,
    getEditProvency,
    editedname,
    setEditedName,
  };
};
export default useEditProvencies;
