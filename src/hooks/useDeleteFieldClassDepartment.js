import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useFieldClassDepartment from "./useFieldClassDepartment";
const useDeleteFieldClassDepartment = () => {
  const {getFieldsDepartments} = useFieldClassDepartment();
  const [loadingDeleteDepartmentField, setLoading] = useState(false);
  const deleteDepartmentField = async ( departmentId, fieldId ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/classified-departments/${departmentId}/classified-department-fields/${fieldId}`,
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Department Field Deleted Succesfuly !");
      await getFieldsDepartments(departmentId);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteDepartmentField, deleteDepartmentField };
};
export default useDeleteFieldClassDepartment;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this department field from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
