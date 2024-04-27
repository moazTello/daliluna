import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
import useClassifiedsDepartments from "./useClassifiedsDepartments";
const useDeleteClassifiedDepartment =  () => {
    const {getClassifiedsDepartments} = useClassifiedsDepartments();
    const [ loadingDeleteDepartment, setLoading ] = useState(false);
    const deleteClassifiedDepartment = async (classifiedId, departmentId) => {
        try{
            setLoading(true);
            await axiosPrivateTokenized.delete(`/dashboard/classifieds/${classifiedId}/classified-departments/${departmentId}`,{
                headers:{
                    Accept: "application/json",
                    "Accept-Language": "ar",
                    country: "SYr",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            await getClassifiedsDepartments(classifiedId);
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            
            setLoading(false);
        }
    }
    return {loadingDeleteDepartment, deleteClassifiedDepartment}
    
}
export default useDeleteClassifiedDepartment;

