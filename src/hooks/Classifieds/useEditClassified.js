import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";

const useEditClassified = () => {
  const [loading, setLoading] = useState(false);
  const [editedIcon, setEditedIcon] = useState("");
  const [editedname, setEditedName] = useState("");
  const editClassified = async (data, classifiedId) => {
    const success = handleInputErrors({ name: data.name, icon: data.icon });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("icon", data.icon);
      formData.append("name", data.name);
      formData.append("_method", "PUT");
      const res = await axiosPrivateTokenized.post(
        `/dashboard/classifieds/${classifiedId}`,
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
      toast.success("Classified Edited Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditClassified = async (classifiedId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/classifieds/${classifiedId}`,
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
      const data = res.data.data;
      if (data.error) {
        throw new Error(data.error);
      }
      setEditedIcon(data.icon);
      setEditedName(data.name);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editClassified,
    getEditClassified,
    editedname,
    setEditedName,
    editedIcon,
    setEditedIcon,
  };
};
export default useEditClassified;

function handleInputErrors({ name, icon }) {
  if (!name) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  if (icon.name === 0) {
    toast.error("Add an icon please ");
    return false;
  }
  return true;
}
