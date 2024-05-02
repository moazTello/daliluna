import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useServices from "./useServices";
const useDeleteService = () => {
  const { getServices } = useServices()
  const [loadingDeleteService, setLoading] = useState(false);
  const deleteService = async ( serviceId ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/yellow-services/${serviceId}`,
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
      toast.success("Service Deleted Succesfuly !");
      await getServices();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteService, deleteService };
};
export default useDeleteService;
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
