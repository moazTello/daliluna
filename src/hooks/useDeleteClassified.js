import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useClassifieds from "./useClassifieds";
const useDeleteClassifieds = () => {
  const { getClassifieds } = useClassifieds();
  const [loading, setLoading] = useState(false);
  const deleteClassifieds = async (classifiedId) => {
    try {
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/classifieds/${classifiedId}`,
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
      toast.success("Classified Deleted Succesfuly !");
      await getClassifieds();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteClassifieds };
};
export default useDeleteClassifieds;
