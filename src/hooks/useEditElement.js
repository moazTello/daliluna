import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../DataContext/DataContext";
const useEditElement = () => {
    const {
        setName,
        setDescription,
        setAddress,
        setTimeOpen,
        setEmail,
        setyou,
        setInsta,
        setTwitter,
        setFacebook,
        setWebsite,
        setCountry,
        setProvince,
        setCity,
        setImage,
        setVideo,
        setImage2,
        setPhones,
        setPhones2,
      } = useDataContext();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const EditYellowElement = async (
    formData,
    yallowPageId,
    yellowPageDepartmentId,
    elementId
  ) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.post(
        `/dashboard/yellow-page-departments/${yellowPageDepartmentId}/elements/2`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
            Accept: "application/json",
            "Accept-Language": "ar",
            country: "SYr",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data1 = res.data.data;
      if (data1.error) {
        throw new Error(data1.error);
      }
      toast.success("Element has Added Succesfuly !");
      navigate(
        `/yellowpages/${yallowPageId}/yellowpagesdepartments/${yellowPageDepartmentId}/elements`
      );
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getEditedElement = async (departmentId, elementId) => {
    try {
      setLoading(true);
      const res = await axiosPrivateTokenized.get(
        `dashboard/yellow-page-departments/${departmentId}/elements/${elementId}`,
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
      setElements(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, EditYellowElement, getEditedElement };
};
export default useEditElement;
