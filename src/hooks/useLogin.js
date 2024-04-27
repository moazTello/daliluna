import { useState } from "react";
import toast from "react-hot-toast";
import { useDataContext } from "../DataContext/DataContext";
import { axiosPrivate } from "../api/DataTransfer";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();
  const { setToken, setAuthUser } = useDataContext();
  const [loading, setLoading] = useState(false);
  const login = async (userName, password) => {
    const success = handleInputErrors({ userName, password });
    if (!success) return;
    try {
      setLoading(true);
      const res = await axiosPrivate.post(
        "/login",
        JSON.stringify({ email: userName, password: password })
      );
      const data = res.data.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);
      setToken(data.token);
      setAuthUser(data.user);
      toast.success("Loged in Succesfuly !");
      navigate("/classifieds");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;
function handleInputErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error('Please fill all the fields ! ');
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must at least more than 6 characters ");
    return false;
  }
  return true;
}