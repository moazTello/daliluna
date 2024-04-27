import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
const useClassifieds =  () => {
    const [ loading, setLoading ] = useState(false);
    const { classifieds, setClassifieds } = useDataStore();
    const getClassifieds = async () => {
        try{
            setLoading(true);
            const res = await axiosPrivateTokenized.get("/dashboard/classifieds",{
                headers:{
                    Accept: "application/json",
                    "Accept-Language": "ar",
                    country: "SYr",
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${localStorage?.getItem("token")}`,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data = res.data.data;
            if(data.error){
                throw new Error(data.error);
            }
            // setClassifieds()
            console.log(data);
            setClassifieds(data);
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,getClassifieds}
}
export default useClassifieds;