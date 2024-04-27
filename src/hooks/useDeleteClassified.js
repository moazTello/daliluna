import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useDataStore from "../zustand/useData";
import useClassifieds from "./useClassifieds";
const useDeleteClassifieds =  () => {
    const { classifieds, setClassifieds } = useDataStore();
    const {getClassifieds} = useClassifieds();
    const [ loading, setLoading ] = useState(false);
    const deleteClassifieds = async (classifiedId) => {
        try{
            setLoading(true);
            await axiosPrivateTokenized.delete(`/dashboard/classifieds/${classifiedId}`,{
                headers:{
                    Accept: "application/json",
                    "Accept-Language": "ar",
                    country: "SYr",
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${localStorage?.getItem("token")}`,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            await getClassifieds();
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            
            setLoading(false);
        }
    }
    return {loading,deleteClassifieds}
    
}
export default useDeleteClassifieds;

