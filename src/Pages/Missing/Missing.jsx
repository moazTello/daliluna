import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='container'>
      <div className='loginbox'>
          this page is not exists
      </div>
      <Link to='/newkamal'>Go Back</Link>
    </div>

  )
}

export default Missing