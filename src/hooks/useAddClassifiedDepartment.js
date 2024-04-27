import { useState } from "react";
import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";
import axiosPrivateTokenized from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useAddClassifiedDepartment=  () => {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);
    // const { classifiedId } = useParams();
    const addClassifiedDepartment = async (data,classifiedId) => {
        // console.log(name,icon);
        const success = handleInputErrors({ name:data.name });
        if(!success) return;
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append("name", data.name);
            const res = await axiosPrivateTokenized.post(`/dashboard/classifieds/${classifiedId}/classified-departments`,formData,{
                // method:"POST",
                headers:{
                    "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
                    Accept: "application/json",
                    "Accept-Language": "ar",
                    country: "SYr",
                    // Authorization: `Bearer ${localStorage?.getItem("token")}`,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data1 = res.data.data;
            if(data1.error){
                throw new Error(data1.error);
            }
            // setClassifieds()
            console.log(data1);
            navigate(`/classifieds/${classifiedId}/classifiedsdepartments/`)
            // setClassifieds(data);
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,addClassifiedDepartment}
}
export default useAddClassifiedDepartment;

function handleInputErrors({name }){
    if( !name ){
        // toast.error('Please fill all the field ! ');
        alert("Please fill all of the fields ! ");
      return false  
    }
    return true
}