import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
import useDataStore from "../../zustand/useData";
const useYellowPagesDepartments = () => {
  const [loading, setLoading] = useState(false);
  const { setYellowPagesDepartments } = useDataStore();
  const getYellowPagesDepartments = async (yellowpageId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `/dashboard/yellow-pages/${yellowpageId}/yellow-page-departments`,
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
      setYellowPagesDepartments(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getYellowPagesDepartments };
};
export default useYellowPagesDepartments;
