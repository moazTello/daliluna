import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
// import useDataStore from "../zustand/useData";
const useEditClassified =  () => {
    const [ loading, setLoading ] = useState(false);
    const [ editedIcon, setEditedIcon ] = useState('');
    const [ editedname, setEditedName ] = useState('');
    const editClassified = async (data,classifiedId) => {
        const success = handleInputErrors({ name:data.name, icon:data.icon });
        if(!success) return;
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append('icon', data.icon);
            formData.append("name", data.name);
            formData.append("_method","PUT");
            console.log(typeof(data.icon))
            const res = await axiosPrivateTokenized.post(`/dashboard/classifieds/${classifiedId}`,formData,{
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

    const getEditClassified = async (classifiedId) => {
        // console.log(name,icon);
        try{
            setLoading(true);
            const res = await axiosPrivateTokenized.get(`/dashboard/classifieds/${classifiedId}`,{
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
            setEditedIcon(data1.icon);
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
    return { loading, editClassified, getEditClassified ,editedname, setEditedName ,editedIcon, setEditedIcon }
}
export default useEditClassified;

function handleInputErrors({name, icon}){
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