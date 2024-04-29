import React, { useEffect } from "react";
import useFieldClassDepartment from "../../../hooks/useFieldClassDepartment";
import useDataStore from "../../../zustand/useData";
import Row from "../../../Components/Row";
import TableDesy from "../../../Components/TableDesy";
import { Link, useParams } from "react-router-dom";
const FieldClassDepartment = () => {
  const { classifiedid, classifiedDepartmentId } = useParams();
  const { loading, getFieldsDepartments } = useFieldClassDepartment();
  const { field, setField } = useDataStore();
  useEffect(() => {
    const handleFields = async () => {
      await getFieldsDepartments(classifiedDepartmentId);
    };
    handleFields();
    return () => { setField(''); };
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/classifieds/${classifiedid}/classifiedsdepartments/${classifiedDepartmentId}/addfield`}
      >
        ADD DEPARTMENT FIELD
      </Link>
      <div className="divider my-10 divider-info">DEPARTMENT FIELDS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy field ='field' icon="false">
          {field.length > 0 && field?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="EDIT_FIELD"
              fatherId={classifiedDepartmentId}
              grand={classifiedid}
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default FieldClassDepartment;
