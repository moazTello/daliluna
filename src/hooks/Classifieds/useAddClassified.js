import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
const useAddClassified = () => {
  const [loading, setLoading] = useState(false);
  const addClassified = async (data) => {
    const success = handleInputErrors({ name: data.name, icon: data.icon });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("icon", data.icon);
      formData.append("name", data.name);
      const res = await axiosPrivateTokenized.post(
        "/dashboard/classifieds",
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
      toast.success("Classified Added Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addClassified };
};
export default useAddClassified;
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
