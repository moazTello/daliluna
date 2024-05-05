import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useEditBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedIcon, setEditedIcon] = useState("");
  const [editedname, setEditedName] = useState("");
  const [editedCountryId, setEditedCountryId] = useState(0);
  const editBlog = async (blogId) => {
    const success = handleInputErrors({
      name: editedname,
      description: editedDescription,
      icon: editedIcon,
      CountryId: editedCountryId,
    });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", editedname);
      formData.append("details", editedDescription);
      formData.append(
        "image",
        typeof editedIcon === "string" ? "" : editedIcon
      );
      formData.append("_method", "PUT");
      const res = await axiosPrivateTokenized.post(
        `/dashboard/blog/${blogId}`,
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
      toast.success("Blog Edited Succesfuly !");
      navigate("/blogs");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditBlog = async (blogId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(`/dashboard/blog/${blogId}`, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
          Accept: "application/json",
          "Accept-Language": "ar",
          country: "SYr",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data1 = res.data.data;
      if (data1.error) {
        throw new Error(data1.error);
      }
      setEditedName(data1.title);
      setEditedDescription(data1.details);
      setEditedIcon(data1.image);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    editBlog,
    getEditBlog,
    editedname,
    setEditedName,
    editedDescription,
    setEditedDescription,
    editedIcon,
    setEditedIcon,
    editedCountryId,
    setEditedCountryId,
  };
};
export default useEditBlog;
function handleInputErrors({ name, icon, description }) {
  if (!name || !description ) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  if (icon.name === 0) {
    toast.error("Add an icon please ");
    return false;
  }
  return true;
}
