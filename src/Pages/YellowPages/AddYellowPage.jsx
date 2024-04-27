import React, { useState } from 'react'
import useAddYellowPage from '../../hooks/useAddYellowPage';
// import useDataStore from '../../zustand/useData';
import { IoMdCloudUpload } from "react-icons/io";
const AddYellowPage = () => {
    const [ name, setName ] = useState('');
    const [ icon, setIcon ] = useState('');
    const [ description, setDescription ] = useState('');
    const { addYellowPage,loading } = useAddYellowPage();
    // const { classifieds } = useDataStore();
    const handleImage = (e) => {
        // e.preventDefault();
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

        await addYellowPage({name: name,icon: icon, description: description});
        console.log(name,icon,description);

    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
            {/* <img src={MiniLogo} alt=''/> */}
            <h1 className='text-base font-semibold text-start mt-5 text-gray-900'>
                Add Yellow Page
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full text-slate-200 mt-5 input input-bordered h-10' placeholder='Yellow Page Name'/>
                </div>
                <div>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' className='w-full text-slate-200 mt-5 input input-bordered h-10' placeholder='Yellow Page description'/>
                </div>
                <div>
                    <input type="file" onChange={handleImage} className='w-full mt-5 h-10'/>
                </div>
                {icon&&<img src={URL.createObjectURL(icon)} alt="icon"/>}
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

export default AddYellowPage;