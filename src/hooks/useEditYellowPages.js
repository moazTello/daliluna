import { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivateTokenized from "../api/DataTransfer";
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
            console.log(typeof(data.image));
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("image",typeof(data.image) === 'string' ? '' : data.image );
            formData.append("_method","PUT");
            const res = await axiosPrivateTokenized.post(`/dashboard/yellow-pages/${yellowpageId}`,formData,{
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
            toast.success("Yellow Page Edited Succesfuly !");
        }
        catch(err){
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
            setEditedName(data1.name);
            setEditedDescription(data1.description);
            setEditedIcon(data1.image);
        }
        catch(err){
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
        toast.error('Please fill all the field ! ');
      return false  
    }
    return true
}