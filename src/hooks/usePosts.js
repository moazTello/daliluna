import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const usePostsClassDepartment = () => {
  const [loading, setLoading] = useState(false);
  const { setPosts } = useDataStore();
  const getPostsClassDepartment = async (departmentId) => {
    console.log(departmentId);
    // const {departmentId} = useParams();
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/classified-departments/${departmentId}/posts`,
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "ABW",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res.data.data;
      console.log(res);
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setPosts(data);

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getPostsClassDepartment };
};
export default usePostsClassDepartment;