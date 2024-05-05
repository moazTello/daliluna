import React, { useEffect } from "react";
import useClassifiedsDepartments from "../../hooks/useClassifiedsDepartments";
import useDataStore from "../../zustand/useData";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link, useParams } from "react-router-dom";
const ClassifiedsDepartments = () => {
  const { departmentId } = useParams();
  const { getClassifiedsDepartments, loading } = useClassifiedsDepartments();
  const { classifiedsDepartments } = useDataStore();
  useEffect(() => {
    const handleClassified = async () => {
      await getClassifiedsDepartments(departmentId);
    };
    handleClassified();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
       <Link
        className="btn btn-primery bg-blue-500 text-white mr-5"
        to={`/classifieds`}
      >
        GO BACK
      </Link>
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/addclassifieddepartment/${departmentId}`}
      >
        ADD NEW DEPARTMENT
      </Link>
      <div className="divider my-10 divider-info">CLASSIFIED DEPARTMENTS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false">
          {classifiedsDepartments?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="SHOW POSTS"
              hr2="SHOW FIELDS"
              hr3="none"
              fatherId={departmentId}
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default ClassifiedsDepartments;
