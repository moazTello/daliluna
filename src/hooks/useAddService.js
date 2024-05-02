import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddServices = () => {
  const [loading, setLoading] = useState(false);
  const [period_val, setPeriod_val] = useState("");
  const [period_name, setPeriod_name] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const addService = async () => {
    const success = handleInputErrors({
      name: name,
      period_name: period_name,
      period_val: period_val,
      price: price,
    });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("period_name", period_name);
      formData.append("period_value", period_val);
      formData.append("name", name);
      formData.append("price", price);
      const res = await axiosPrivateTokenized.post(
        "/dashboard/yellow-services",
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
      toast.success("Service Added Succesfuly !");
      navigate("/yellowpages/yellowpagesServices");
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    addService,
    setName,
    setPeriod_name,
    setPeriod_val,
    setPrice,
    name,
    price,
    period_val,
    period_name,
  };
};
export default useAddServices;
function handleInputErrors({ name, period_val, period_name, price }) {
  if (!name || !period_val || !period_name || !price ) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  return true;
}
