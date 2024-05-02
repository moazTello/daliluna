import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const { setBlogs } = useDataStore();
  const getBlogs = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get("/dashboard/blog", {
        headers: {
          Accept: "application/json",
          "Accept-Language": "ar",
          country: "SYr",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = res.data.data;
      if (data.error) {
        throw new Error(data.error);
      }
      setBlogs(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getBlogs };
};
export default useBlog;