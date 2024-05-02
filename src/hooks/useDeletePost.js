import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import usePostsClassDepartment from "./usePosts";
const useDeletePostClassDepartment = () => {
  const { getPostsClassDepartment } = usePostsClassDepartment()
  const [loadingDeleteDepartmentPost, setLoading] = useState(false);
  const deleteDepartmentPost = async ( departmentId, postId ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/classified-departments/${departmentId}/posts/${postId}`,
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
      toast.success("Department Post Deleted Succesfuly !");
      await getPostsClassDepartment(departmentId);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteDepartmentPost, deleteDepartmentPost };
};
export default useDeletePostClassDepartment;
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
