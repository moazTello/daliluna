import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddCity = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const addCity = async (countryId, provencyId) => {
    const success = handleInputErrors({
      name: name,
    });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/provinces/${provencyId}/cities`,
        formData,
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
      toast.success("City Added Succesfuly !");
      navigate(`/Countries/${countryId}/provencies/${provencyId}/cities`);
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    addCity,
    setName,
    name,
  };
};
export default useAddCity;
function handleInputErrors({ name }) {
  if (!name ) {
    toast.error("Please fill the field ! ");
    return false;
  }
  return true;
}
