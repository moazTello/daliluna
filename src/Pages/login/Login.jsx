// import React, { useState } from 'react';

// const Login = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log(name,password)
//     }
//   return (
//     <div>
//         <form onSubmit={onSubmit}>
//             <label>UserName</label>
//             <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
//             <label>Password</label>
//             <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
//             <button type="submit">send</button>
//         </form>
//     </div>
//   )
// }

// export default Login;
import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import MiniLogo from '../../assets/images/sunriseit.png';
import toast from 'react-hot-toast';
const Login = () => {
    const { loading, login } = useLogin();
    const [ userName, setUserName ] = useState('');
    const [ password,setPassword ] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.error("Password must at least more than 6 characters ");
        console.log(userName,password);
        await login(userName,password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
            <img src={MiniLogo} alt=''/>
            <h1 className='text-base font-semibold text-start mt-5 text-gray-900'>
                Hello! let s get started
                <p className='text-gray-700'> Sign in to continue.</p>    
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label className='label p-2'>
                        <span className='text-base label-text '>
                            Username
                        </span>
                    </label> */}
                    <input onChange={(e) => setUserName(e.target.value)} value={userName} type='text' className='w-full text-slate-200 mt-5 input input-bordered h-10' placeholder='Username'/>
                </div>
                <div>
                    {/* <label className='label'>
                        <span className='text-base label-text '>
                            Password
                        </span>
                    </label> */}
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full text-slate-200 input mt-5 input-bordered h-10' placeholder='Password'/>
                </div>
                <div>
                    <button onClick={handleSubmit} disabled={loading} className='btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center'>
                        {loading ? <p className='loading loading-spinner bg-blue-600'></p> : 'SIGN IN'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
