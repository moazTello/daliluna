import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
const useAddYellowPageDepartment=  () => {
    const [ loading, setLoading ] = useState(false);
    const addYellowPageDepartment = async (data) => {
        // console.log(name,icon);
        const success = handleInputErrors({ name:data.name, icon:data.icon });
        if(!success) return;
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("image", data.icon);

            const res = await axiosPrivateTokenized.post("/dashboard/yellow-pages/1/yellow-page-departments",formData,{
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
    return {loading,addYellowPageDepartment}
}
export default useAddYellowPageDepartment;

function handleInputErrors({name, icon }){
    if( !name ){
        // toast.error('Please fill all the field ! ');
        alert("Please fill all of the fields ! ");
      return false  
    }
    if(icon.name === 0){
        console.log(icon);
        // toast.error("Add an icon please ");
        alert("Add an icon please ");

      return false
    }
    return true
}