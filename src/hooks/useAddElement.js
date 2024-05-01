import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddElement = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addYellowElement = async (formData,yallowPageId,yellowPageDepartmentId) => {
    try {
      setLoading(true);
      console.log(yellowPageDepartmentId);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/yellow-page-departments/${yellowPageDepartmentId}/elements`,
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
      console.log(res);
      toast.success("Element has Added Succesfuly !");
      navigate(`/yellowpages/${yallowPageId}/yellowpagesdepartments/${yellowPageDepartmentId}/elements`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addYellowElement };
};
export default useAddElement;
