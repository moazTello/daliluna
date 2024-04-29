import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useElements = () => {
  const [loading, setLoading] = useState(false);
  const { setElements } = useDataStore();
  const getElements = async (departmentId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/yellow-page-departments/${departmentId}/elements`,
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
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setElements(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getElements };
};
export default useElements;