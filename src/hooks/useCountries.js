import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useCountries = () => {
  const [loadingCountries, setLoading] = useState(false);
  const { setCountries, setCities, setProvinces } = useDataStore();
  const getContries = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/countries`,
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
      setCountries(data);
      console.log(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getProvinces = async (CountryId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/countries/${CountryId}/provinces`,
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
      setProvinces(data);
      console.log(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getCities = async (provinceId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/provinces/${provinceId}/cities`,
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
      setCities(data);
      console.log(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loadingCountries, getContries, getCities, getProvinces };
};
export default useCountries;