import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
// import useDataStore from "../zustand/useData";
const useEditYellowPages =  () => {
    const [ loading, setLoading ] = useState(false);
    const [ editedDescription, setEditedDescription ] = useState('');
    const [ editedIcon, setEditedIcon ] = useState('');
    const [ editedname, setEditedName ] = useState('');
    const editYellowpage = async (data,yellowpageId) => {
        const success = handleInputErrors({ name:data.name, description:data.description });
        if(!success) return;
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("image", data.image);
            formData.append("_method","PUT");
            const res = await axiosPrivateTokenized.post(`/dashboard/yellow-pages/${yellowpageId}`,formData,{
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

    const getEditYellowPage = async(yellowpageId) => {
        try{
            setLoading(true);
            const res = await axiosPrivateTokenized.get(`/dashboard/yellow-pages/${yellowpageId}`,{
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
            setEditedDescription(data1.description);
            setEditedIcon(data1.image);
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
    return { loading, editYellowpage, getEditYellowPage ,editedname, setEditedName , editedDescription, setEditedDescription, editedIcon, setEditedIcon }
}
export default useEditYellowPages;

function handleInputErrors({name}){
    if( !name ){
        // toast.error('Please fill all the field ! ');
        alert("Please fill all of the fields ! ");
      return false  
    }
    return true
}