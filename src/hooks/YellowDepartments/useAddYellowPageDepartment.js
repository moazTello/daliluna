import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
import { useNavigate } from "react-router-dom";

const useAddYellowPageDepartment = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const addYellowPageDepartment = async (data, yellowpageId) => {
    const success = handleInputErrors({ name: data.name, icon: data.icon });
    if (!success) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.icon);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/yellow-pages/${yellowpageId}/yellow-page-departments`,
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
      toast.success("Yellow Page Department Added Succesfuly !");
      navigation(`/yellowpages/${yellowpageId}/yellowpagesdepartments`)
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addYellowPageDepartment };
};
export default useAddYellowPageDepartment;
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
