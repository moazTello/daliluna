import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
const useEditClassifiedDepartment = () => {
  const [loading, setLoading] = useState(false);
  const [editedname, setEditedName] = useState("");
  const editClassifiedDepartment = async (
    data,
    classifiedId,
    classifiedDepartmentId
  ) => {
    const success = handleInputErrors({ name: data.name });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("_method", "PUT");
      const res = await axiosPrivateTokenized.post(
        `dashboard/classifieds/${classifiedId}/classified-departments/${classifiedDepartmentId}`,
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
      toast.success("Classified Department Edited Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditClassifiedDepartment = async (
    classifiedId,
    classifiedDepartmentId
  ) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/classifieds/${classifiedId}/classified-departments/${classifiedDepartmentId}`,
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
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editClassifiedDepartment,
    getEditClassifiedDepartment,
    editedname,
    setEditedName,
  };
};
export default useEditClassifiedDepartment;
function handleInputErrors({ name }) {
  if (!name) {
    toast.error('Please fill all the field ! ');
    return false;
  }
  return true;
}