import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddClassifiedDepartment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addClassifiedDepartment = async (data, classifiedId) => {
    const success = handleInputErrors({ name: data.name });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/classifieds/${classifiedId}/classified-departments`,
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
      toast.success("Classified Department Added Succesfuly !");
      navigate(`/classifieds/${classifiedId}/classifiedsdepartments/`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addClassifiedDepartment };
};
export default useAddClassifiedDepartment;

function handleInputErrors({ name }) {
  if (!name) {
    toast.error('Please fill all the field ! ');
    return false;
  }
  return true;
}
