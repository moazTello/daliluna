import { useState } from "react";
import toast from "react-hot-toast";
import { useDataContext } from "../DataContext/DataContext";
import  {axiosPrivate, axiosPrivateTokenized}  from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useLogin =  () => {
    const navigate = useNavigate();
    const { setToken, setAuthUser } = useDataContext();
    const [ loading, setLoading ] = useState(false);
    const login = async (userName,password) => {
        const success = handleInputErrors({userName,password});
        if(!success) return;
        try{
            console.log(userName,password)
            setLoading(true);
            const res = await axiosPrivate.post("/login",JSON.stringify({email:userName,password:password}
            // ,{
            //     headers: {
            //     'Content-Type': 'application/json',
            //     'Accept':'application/json',
            //     'Accept-Language':'en',
            //     'country':'SYr',
            // }}
        )
        );
            const data = res.data.data;
            if(data.error){
                throw new Error(data.error);
            }
            console.log(data.token);
            
            console.log(data.user);
            localStorage.setItem('token',data.token);
            localStorage.setItem('user',data.user);
            setToken(data.token);
            setAuthUser(data.user);
            navigate('/classifieds');
            // await checkIfAuth();
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    // const checkIfAuth = async () => {
    //     try {
    //         const res = await axiosPrivateTokenized.get('auth/checkIfAuth');
    //         const isAuthenticated = res.data.authenticated;
    //         console.log(isAuthenticated);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    return {loading,login}
}
export default useLogin

function handleInputErrors({userName,password}){
    if( !userName || !password ){
        // toast.error('Please fill all the fields ! ');
        alert("Please fill all the fields ! ");

      return false  
    }
    if(password.length < 6){
        // toast.error("Password must at least more than 6 characters ");
        alert("Password must at least more than 6 characters ");

      return false
    }
    return true
}