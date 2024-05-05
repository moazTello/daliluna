import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditCountry = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editedname, setEditedName] = useState("");
  const [editedCode, setEditedCode] = useState("");
  const editCountry = async (data, countryId) => {
    const success = handleInputErrors({ name: data.name, code: data.code });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("code", data.code);

      const res = await axiosPrivateTokenized.put(
        `dashboard/countries/${countryId}`,
        formData,
        {
          headers: {
            "Content-Type":"application/json",
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
      toast.success("Classified Department Edited Succesfuly !");
      navigate('/Countries')
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const getEditCountry = async ( countryId ) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/countries/${countryId}`,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
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
      setEditedCode(data1.code);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editedname,
    setEditedName,
    editCountry,
    getEditCountry,
    editedCode, 
    setEditedCode
  };
};
export default useEditCountry;
function handleInputErrors({ name, code }) {
  if (!name || !code) {
    toast.error('Please fill all the field ! ');
    return false;
  }
  return true;
}