import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useClassifiedsDepartments from "./useClassifiedsDepartments";
const useDeleteClassifiedDepartment = () => {
  const { getClassifiedsDepartments } = useClassifiedsDepartments();
  const [loadingDeleteDepartment, setLoading] = useState(false);
  const deleteClassifiedDepartment = async (classifiedId, departmentId) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/classifieds/${classifiedId}/classified-departments/${departmentId}`,
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
      toast.success("Classified Department Deleted Succesfuly !");
      await getClassifiedsDepartments(classifiedId);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteDepartment, deleteClassifiedDepartment };
};
export default useDeleteClassifiedDepartment;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this classified department from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
