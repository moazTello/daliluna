import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddCurrency = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addCurrency = async (data) => {
    const success = handleInputErrors({ name: data.name, code: data.code });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("code", data.code);
      formData.append("name", data.name);
      const res = await axiosPrivateTokenized.post(
        "/dashboard/currencies",
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
      toast.success("Currencies Added Succesfuly !");
        navigate('/currencies');

    } catch (err) {
        console.log(err)
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCurrency };
};
export default useAddCurrency;
function handleInputErrors({ name, code }) {
  if (!name || !code) {
    toast.error('Please fill all the field ! ');
    return false;
  }
  return true;
}