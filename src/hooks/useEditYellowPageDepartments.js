import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
// import { useParams } from "react-router-dom";
const useEditYellowPageDepartment =  () => {
    const [ loading, setLoading ] = useState(false);
    const [ editedname, setEditedName ] = useState('');
    // const { classifiedId, classifiedDepartmentId } = useParams();

    const editYellowPageDepartment = async (data, yellowPageId, yellowpagedepartmentId) => {
        const success = handleInputErrors({ name:data.name});
        if(!success) return;
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("image", data.image);
            formData.append("_method","PUT");
            const res = await axiosPrivateTokenized.post(`dashboard/yellow-pages/${yellowPageId}/yellow-page-departments/${yellowpagedepartmentId}`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
                    Accept: "application/json",
                    "Accept-Language": "ar",
                    country: "SYr",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data1 = res.data.data;
            if(data1.error){
                throw new Error(data1.error);
            }
            console.log(data1);
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    const getEditClassifiedDepartment = async (yellowPageId,classifiedDepartmentId) => {
        // console.log(name,icon);
        try{
            setLoading(true);
            const res = await axiosPrivateTokenized.get(`/dashboard/classifieds/${classifiedId}/classified-departments/${classifiedDepartmentId}`,{
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
            setEditedName(data1.name);
            console.log(data1);
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    return { loading, editYellowPageDepartment, getEditClassifiedDepartment ,editedname, setEditedName }
}
export default useEditYellowPageDepartment;

function handleInputErrors({name}){
    if( !name ){
        // toast.error('Please fill all the field ! ');
        alert("Please fill all of the fields ! ");
      return false  
    }
    return true
}