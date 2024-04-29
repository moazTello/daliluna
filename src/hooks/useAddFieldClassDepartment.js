import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddFieldClassDepartment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addFieldDepartment = async (data, classifiedId, departmentId) => {
    console.log(data);
    const success = handleInputErrors({
      name: data.name,
      placeholder: data.placeholder,
      max: data.max,
      min: data.min,
      type: data.type,
      required: data.required,
    });
    if (!success) return;
    try {
      setLoading(true);
      const newArray = eval(data.values);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("placeholder", data.placeholder);
      formData.append("min", data.min);
      formData.append("max", data.max);
      formData.append("type", data.type);
      formData.append("required", data.require === 0 ? "0" : "1");
      formData.append("searched", data.search === 0 ? "0" : "1");
      formData.append(
        "values[1]",
        //   data.values
        newArray
      );
      const res = await axiosPrivateTokenized.post(
        `/dashboard/classified-departments/${departmentId}/classified-department-fields`,
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
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addFieldDepartment };
};
export default useAddFieldClassDepartment;

function handleInputErrors({
  name,
  placeholder,
  max,
  min,
  type,
  required,
  search,
}) {
  if (!name || !placeholder || !max || !min || !type) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  return true;
}
