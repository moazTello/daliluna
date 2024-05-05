import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addBlog = async (data) => {
    const success = handleInputErrors({
      name: data.name,
      icon: data.icon,
      details: data.details,
      country_id: data.country_id,
    });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", data.icon);
      formData.append("title", data.name);
      formData.append("details", data.details);
      formData.append("country_id", data.country_id.value);
      const res = await axiosPrivateTokenized.post(
        "/dashboard/blog",
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
      navigate("/blogs");
      toast.success("Blog Added Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addBlog };
};
export default useAddBlog;
function handleInputErrors({ name, icon, details, country_id }) {
  if (!name || !details || !country_id) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  if (icon.name === 0) {
    toast.error("Add an icon please ");
    return false;
  }
  return true;
}
