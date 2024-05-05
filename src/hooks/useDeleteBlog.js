import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useBlog from "./useBlog";
const useDeleteBlog = () => {
  const { getBlogs } = useBlog()
  const [loadingDeleteBlog, setLoading] = useState(false);
  const deleteBlog = async (blogId) => {
    const conferm = confermation();
    if (!conferm) return;
    try {
      setLoading(true);
      await axiosPrivateTokenized.delete(
        `/dashboard/blog/${blogId}`,
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
      toast.success("Blog Deleted Succesfuly !");
      await getBlogs();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingDeleteBlog, deleteBlog };
};
export default useDeleteBlog;
const confermation = () => {
  if (
    confirm(
      "Are you sure you want to delete this blog from the database?"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
