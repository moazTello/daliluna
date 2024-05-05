import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import usePostsClassDepartment from "./usePosts";
const useChangePostStatuse = () => {
  const {getPostsClassDepartment} = usePostsClassDepartment();
  const [loadingDeleteDepartmentPostStatus, setLoading] = useState(false);
  const ChangePostStatus = async ( departmentId, postId, enable ) => {
    try {
      const conferm = confermation();
      if (!conferm) return;
      setLoading(true);
      await axiosPrivateTokenized.patch(
        `/dashboard/posts/${postId}/change-status`,{"status":enable === "disable" ? "enable" : "disable"},
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      enable && toast.success("Department Post Disabled Succesfuly !");
      !enable && toast.success("Department Post Enabled Succesfuly !");
      await getPostsClassDepartment(departmentId);
    } catch (err) {
        console.log(err)
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteDepartmentPostStatus, ChangePostStatus };
};
export default useChangePostStatuse;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to change this posts status ?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
