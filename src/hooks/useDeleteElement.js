import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useElements from "./useElements";
const useDeleteElement = () => {
  const { getElements } = useElements();
  const [loadingDeleteElement, setLoading] = useState(false);
  const deleteElement = async (
    yellowPageId,
    yellowPageDepartment,
    elementId
  ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/yellow-page-departments/${yellowPageDepartment}/elements/${elementId}`,
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
      await getElements(yellowPageDepartment);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteElement, deleteElement };
};
export default useDeleteElement;
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
