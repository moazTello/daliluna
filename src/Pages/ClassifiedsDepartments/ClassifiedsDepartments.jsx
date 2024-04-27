import React, { useEffect } from 'react'
import useClassifiedsDepartments from '../../hooks/useClassifiedsDepartments';
import useDataStore from '../../zustand/useData';
import Row from '../../Components/Row';
import TableDesy from '../../Components/TableDesy';
import { Link, useParams } from 'react-router-dom';
const ClassifiedsDepartments = () => {
  const { departmentId } = useParams();
    const { getClassifiedsDepartments, loading } = useClassifiedsDepartments();
    const { classifiedsDepartments } = useDataStore();
    useEffect(() => {
      const handleClassified = async () => {
        await getClassifiedsDepartments(departmentId);
      }
      handleClassified();
    },[]);
    // const handleClick = async() => {
    //     console.log(localStorage.getItem("token"))
    //     await getClassifiedsDepartments();
    //     console.log();
    // }
  return (
    <div className='w-full bg-base-100 pt-10'>
      {/* <Button action={handleClick} disable={loading} content={'Click'}/> */}
      {/* <div className='btn btn-primery bg-blue-500'> */}
        <Link className='btn btn-primery bg-blue-500 text-white'to={`/addclassifieddepartment/${departmentId}`}>ADD NEW DEPARTMENT</Link>
        {/* </div> */}
        <div className="divider my-10 divider-info">CLASSIFIED DEPARTMENTS</div>
        {/* <button onClick={handleClick}>
            {loading ? <p>Click</p>:'Click'}
        </button> */}
        {/* {loading ? <p className='loading loading-spinner bg-blue-600'></p> : classifiedsDepartments.map((item,index) => <p key={index}>{item.name}</p>)
        
  } */}
          {loading ? <p className='loading loading-spinner bg-blue-600'></p> : 
        <TableDesy icon="false">
          {classifiedsDepartments?.map((item,index) => (<Row key={index} content={item} hr1="addpost" hr2="addfield" hr3="none" fatherId={departmentId}/>))}
        </TableDesy>
      }
    </div>
  )
}

export default ClassifiedsDepartments