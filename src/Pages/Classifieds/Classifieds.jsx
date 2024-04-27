import React, { useEffect } from 'react'
import useClassifieds from '../../hooks/useClassifieds'
import useDataStore from '../../zustand/useData';
// import Button from '../../Components/Button';
import Row from '../../Components/Row';
import TableDesy from '../../Components/TableDesy';
import { Link } from 'react-router-dom';
const Classifieds = () => {
    const {getClassifieds,loading} = useClassifieds();
    const { classifieds } = useDataStore();
    useEffect(() => {
      const handleClassified = async () => {
        await getClassifieds();
      }
      handleClassified();
    },[]);
    // const handleClick = async() => {
    //     console.log(localStorage.getItem("token"))
    //     await getClassifieds();
    // }
  return (
    <div className='w-full bg-base-100 pt-10'>
      {/* <Button action={handleClick} disable={loading} content={'Click'}/> */}
      {/* <div className='btn btn-primery bg-blue-500'> */}
        <Link className='btn btn-primery bg-blue-500 text-white'to='/addclassified'>ADD NEW CLASSIFIED</Link>
        {/* </div> */}
        <div className="divider my-10 divider-info">CLASSIFIEDS</div>
      {/* <Button action={handleClick} disable={loading} content={'Click'}/> */}
        {/* <button onClick={handleClick}>
            {loading ? <p>Click</p>:'Click'}
        </button> */}
        {/* {loading ? <p className='loading loading-spinner bg-blue-600'></p> : classifieds.map((item,index) => <p key={index}>{item.name}</p>)
        
        } */}
        {loading ? <p className='loading loading-spinner bg-blue-600'></p> : 
        <TableDesy>
          {classifieds?.map((item,index) => (<Row key={index} content={item} hr1="/classifieds/classifiedsdepartments" hr2="none" hr3="none" trash="none"/>))}
        </TableDesy>
      }
    </div>
  )
}

export default Classifieds