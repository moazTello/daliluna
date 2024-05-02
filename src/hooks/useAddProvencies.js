import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddProvency = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const addProvency = async (countryId) => {
    const success = handleInputErrors({
      name: name,
    });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/countries/${countryId}/provinces`,
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
      toast.success("Provency Added Succesfuly !");
      navigate(`/Countries/provencies/${countryId}`);
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    addProvency,
    setName,
    name,
  };
};
export default useAddProvency;
function handleInputErrors({ name }) {
  if (!name ) {
    toast.error("Please fill the field ! ");
    return false;
  }
  return true;
}
