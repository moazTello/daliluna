import React, { useEffect } from 'react'
import useDataStore from '../../zustand/useData';
import useYellowPages from '../../hooks/useYellowPages';
import Row from '../../Components/Row';
import TableDesy from '../../Components/TableDesy';
import { Link } from 'react-router-dom';
const YellowPages = () => {
    const { getYellowPages,loading } = useYellowPages();
    const { yellowPages } = useDataStore();
    useEffect(() => {
      const handleClassified = async () => {
        await getYellowPages();
      }
      handleClassified();
    },[]);
  return (
    <div className='w-full bg-base-100 pt-10'>
      {/* <Button action={handleClick} disable={loading} content={'Click'}/> */}
      {/* <div className='btn btn-primery bg-blue-500'> */}
        <Link className='btn btn-primery bg-blue-500 text-white'to='/addyellowpage'>ADD NEW YELLOW PAGE</Link>
        {/* </div> */}
        <div className="divider my-10 divider-info">YELLOW PAGES</div>
        {/* <button onClick={handleClick}>
            {loading ? <p>Click</p>:'Click'}
        </button> */}
        {/* {loading ? <p className='loading loading-spinner bg-blue-600'></p> : yellowPages.map((item,index) => <p key={index}>{item.name}</p>)
  } */}
          {loading ? <p className='loading loading-spinner bg-blue-600'></p> : 
        <TableDesy icon="false">
          {yellowPages?.map((item,index) => (<Row key={index} content={item} hr1="/yellowpages/yellowpagesdepartments" hr2="none" hr3="none" trash="none"/>))}
        </TableDesy>
      }
    </div>
  )
}

export default YellowPages