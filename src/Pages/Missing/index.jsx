import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <div className=''>
      <div className="">this page is not exists</div>
      <Link to="/">Go Back</Link>
    </div>
  );
};
export default Missing;
