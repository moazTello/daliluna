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
        `dashboard/yellow-page-departments/${departmentId}/elements?page=1`,
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
      if (data.error) {
        throw new Error(data.error);
      }
      setElements(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getElements };
};
export default useElements;
