import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useServices = () => {
  const [loading, setLoading] = useState(false);
  const { setYellowPagesServices } = useDataStore();
  const getServices = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(`/dashboard/yellow-services`,
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
      setYellowPagesServices(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getServices };
};
export default useServices;