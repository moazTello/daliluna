import React, { useState } from 'react'
import useAddClassified from '../../hooks/useAddClassified';
import Button from '../../Components/Button';
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const AddClassified = () => {
    const [ name, setName ] = useState('');
    const [ icon, setIcon ] = useState('');
    const navigate = useNavigate();
    const { addClassified,loading } = useAddClassified();
    const handleImage = (e) => {
        setIcon(e.target.files[0]);

        // setIcon(URL.createObjectURL(e.target.files[0]));
        // const file = e.target.files[0];
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //     setIcon(reader.result);
        //     };
        //     reader.readAsDataURL(file);
        // }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await addClassified({name:name,icon:icon});
        console.log(success);
        if(success){
            navigate('/classifieds');
        }
        navigate('/classifieds');

        console.log(name,icon);

    }
  return (
    <div className='flex flex-col items-center justify-center w-11/12 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
            {/* <img src={MiniLogo} alt=''/> */}
            <h1 className='text-base font-semibold text-start mt-5 text-gray-900'>
                Add Classified
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full text-slate-200 mt-5 input input-bordered h-10' placeholder='Classified Name'/>
                </div>
                <div>
                    <label htmlFor='choose' className='w-full bg-base-100 rounded-md flex items-center justify-start pl-5 input-bordered h-10 my-5 cursor-pointer'>
                        Insert An Image
                    </label>
                        <input id="choose" type="file" onChange={handleImage} className='hidden'/>
                </div>
                {icon&&<img className='max-w-28 max-h-28' src={URL.createObjectURL(icon)} alt="icon"/>}
                {!icon&&<IoMdCloudUpload/>}
                <div>
                    <button 
                    // onClick={handleSubmit} 
                    type='submit'
                    disabled={loading} className='btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center'>
                        {loading ? <p className='loading loading-spinner bg-blue-600'></p> : 'ADD'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddClassified;