import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
const useEditYellowPageDepartment = () => {
  const [loading, setLoading] = useState(false);
  const [editedname, setEditedName] = useState("");
  const [editedIcon, setEditedIcon] = useState("");
  const editYellowPageDepartment = async (
    data,
    yellowPageId,
    yellowpagedepartmentId
  ) => {
    const success = handleInputErrors({ name: data.name });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);
      formData.append("_method", "PUT");
      const res = await axiosPrivateTokenized.post(
        `dashboard/yellow-pages/${yellowPageId}/yellow-page-departments/${yellowpagedepartmentId}`,
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
      toast.success("Yellow Page Department Edited Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditYellowPageDepartment = async (
    yellowPageId,
    yellowpagedepartmentId
  ) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/yellow-pages/${yellowPageId}/yellow-page-departments/${yellowpagedepartmentId}`,
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
      setEditedIcon(data1.image);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editYellowPageDepartment,
    getEditYellowPageDepartment,
    editedname,
    setEditedName,
    setEditedIcon,
    editedIcon,
  };
};
export default useEditYellowPageDepartment;

function handleInputErrors({ name }) {
  if (!name) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  return true;
}
