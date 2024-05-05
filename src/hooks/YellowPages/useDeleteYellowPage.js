import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
import useYellowPages from "./useYellowPages";
const useDeleteYellowPages = () => {
  const { getYellowPages } = useYellowPages();
  const [deleteYellowloading, setLoading] = useState(false);
  const deleteYellowpage = async (yellowpageId) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/yellow-pages/${yellowpageId}`,
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
      toast.success("Yellow Page Deleted Succesfuly !");
      await getYellowPages();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { deleteYellowloading, deleteYellowpage };
};
export default useDeleteYellowPages;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this classified from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
