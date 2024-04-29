import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useDataContext } from "../DataContext/DataContext";
import { useNavigate } from "react-router-dom";
const useEditDepartmentField = () => {
  const navigate = useNavigate();
  const [loadingEditingField, setLoading] = useState(false);
  const {
    fn,
    sfn,
    place,
    setPlace,
    fMi,
    setFMi,
    fMa,
    setFMax,
    filedType,
    setFieldType,
    fs,
    sfs,
    fv,
    sfv,
    fReq,
    sFReq,
  } = useDataContext();
  const editDepartmentField = async (
    classifiedid,
    classifiedDepartmentId,
    fieldId
  ) => {
    const success = handleInputErrors({
      name: fn,
      placeholder: place,
      max: fMa,
      min: fMi,
      type: fMa,
      required: filedType,
    });
    if (!success) return;
    try {
      setLoading(true);
      const newArray = eval(fv);
      const formData = new FormData();
    //   formData.append("name", fn);
    //   formData.append("placeholder", place);
    //   formData.append("min", fMi);
    //   formData.append("max", fMa);
    //   formData.append("type", filedType);
    //   formData.append("required", fReq === 0 ? "0" : "1");
    //   formData.append("searched", fs === 0 ? "0" : "1");
    //   formData.append(
    //     "values[1]",
    //     //   data.values
    //     newArray
    //   );
    formData.append("name", " test f name");
    formData.append("placeholder", "place");
    formData.append("min", 5);
    formData.append("max", 10);
    formData.append("type", "number");
    formData.append("required", 0 === 0 ? "0" : "1");
    formData.append("searched", 1 === 0 ? "0" : "1");
    formData.append(
      "values[1]",
      //   data.values
      newArray
    );
    
    //   console.log(fn, place, fMi, fMa, filedType, fReq, fs );
    console.log(formData.values);

      //   formData.append("_method", "PUT");
      const res = await axiosPrivateTokenized.put(
        `/dashboard/classified-departments/${classifiedDepartmentId}/classified-department-fields/${fieldId}`,
        formData,
        {
          headers: {
            "Content-Type":
              "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data1 = res.data.data;
      console.log(data1);
      if (data1.error) {
        throw new Error(data1.error);
      }
      toast.success("Department Field Edited Succesfuly !");
      navigate(
        `/classifieds/${classifiedid}/classifiedsdepartments/${classifiedDepartmentId}`
      );
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getEditDepartmentField = async (classifiedDepartmentId, fieldId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/classified-departments/${classifiedDepartmentId}/classified-department-fields/${fieldId}`,
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
      sfn(data1.name);
      setPlace(data1.placeholder);
      setFMi(data1.min);
      setFMax(data1.max);
      setFieldType(data1.type);
      sfs(data1.search);
      sfv(data1.values[1]);
      sFReq(data1.required);
    } catch (err) {
      console.log(err);
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
export default useEditDepartmentField;

function handleInputErrors({ name, placeholder, max, min, type }) {
  if (!name || !placeholder || !max || !min || !type) {
    toast.error("Please fill all the field ! ");
    return false;
  }
  return true;
}
