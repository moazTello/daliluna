import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useDataContext } from "../DataContext/DataContext";
const useEditClassifiedDepartment = () => {
  const [loadingEditingField, setLoading] = useState(false);
  const {
    sfn,
    setPlace,
    setFMi,
    setFMax,
    setFieldType,
    sfs,
    sfv,
    sFReq,
  } = useDataContext();
  const editDepartmentField = async (
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
      toast.success("Department Field Edited Succesfuly !");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditDepartmentField = async (
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
    //   setEditedName(data1.name);
    sfn(data1.name);
    setPlace(data1.placeholder)
    setFMi(data1.min)
    setFMax(data1.max)
    setFieldType(data1.type)
    sfs(data1.search)
    sfv(data1.value[1])
    sFReq(data1.required)

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loadingEditingField,
    editDepartmentField,
    getEditDepartmentField,
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