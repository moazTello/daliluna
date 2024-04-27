import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useClassifiedsDepartments = () => {
  const [loading, setLoading] = useState(false);
  const { setClassifiedsDepartments } = useDataStore();
  const getClassifiedsDepartments = async (departmentId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/classifieds/${departmentId}/classified-departments`,
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
      const data = res.data.data;
      if (data.error) {
        throw new Error(data.error);
      }
      setClassifiedsDepartments(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getClassifiedsDepartments };
};
export default useClassifiedsDepartments;