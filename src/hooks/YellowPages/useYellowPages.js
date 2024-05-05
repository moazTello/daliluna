import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../../api/DataTransfer";
import useDataStore from "../../zustand/useData";
const useYellowPages = () => {
  const [loading, setLoading] = useState(false);
  const { setYellowPages } = useDataStore();
  const getYellowPages = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get("/dashboard/yellow-pages", {
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
      setYellowPages(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getYellowPages };
};
export default useYellowPages;
