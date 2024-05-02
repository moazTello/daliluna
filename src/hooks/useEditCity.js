import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditCities = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editedname, setEditedName] = useState("");

  const editCity = async (countryId, provencyId, cityId) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", editedname);
      const res = await axiosPrivateTokenized.put(
        `/dashboard/provinces/${provencyId}/cities/${cityId}`,
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
      toast.success("The City Has Edited Succesfuly !");
      navigate(`/Countries/${countryId}/provencies/${provencyId}/cities`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditCity = async (provencyId,cityId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/provinces/${provencyId}/cities/${cityId}`,
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
    editCity,
    getEditCity,
    editedname,
    setEditedName,
  };
};
export default useEditCities;
