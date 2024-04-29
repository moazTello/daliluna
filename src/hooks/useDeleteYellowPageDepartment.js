import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useYellowPagesDepartment from "./useYellowPagesDepartments";
const useDeleteYellowPageDepartment = () => {
  const { getYellowPagesDepartments } = useYellowPagesDepartment();
  const [loadingDeleteYellowPageDepartment, setLoading] = useState(false);
  const deleteYellowPageDepartment = async (
    yellowpageId,
    yellowpagedepartmentId
  ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/yellow-pages/${yellowpageId}/yellow-page-departments/${yellowpagedepartmentId}`,
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
      toast.success("Yellow Page Department Deleted Succesfuly !");
      await getYellowPagesDepartments(yellowpageId);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteYellowPageDepartment, deleteYellowPageDepartment };
};
export default useDeleteYellowPageDepartment;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this yellow page department from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
