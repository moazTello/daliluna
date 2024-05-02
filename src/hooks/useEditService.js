import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditService = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editPeriod_val, setEditPeriod_val] = useState("");
  const [editPeriod_name, setEditPeriod_name] = useState("");
  const [editedname, setEditedName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const editService = async (serviceId) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", editedname);
      formData.append("period_name", editPeriod_name);
      formData.append("price", editPrice);
      formData.append("period_value", editPeriod_val);
      const res = await axiosPrivateTokenized.put(
        `/dashboard/yellow-services/${serviceId}`,
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
      toast.success("The Service Edited Succesfuly !");
      navigate("/yellowpages/yellowpagesServices");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditService = async (serviceId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/yellow-services/${serviceId}`,
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
      setEditPeriod_val(data1.period_value);
      setEditPeriod_name(data1.period_name);
      setEditPrice(data1.price);
    } catch (err) {
      console.log(err);

      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editService,
    getEditService,
    editedname,
    setEditedName,
    editPeriod_val,
    setEditPeriod_val,
    editPeriod_name,
    setEditPeriod_name,
    editPrice,
    setEditPrice,
  };
};
export default useEditService;
