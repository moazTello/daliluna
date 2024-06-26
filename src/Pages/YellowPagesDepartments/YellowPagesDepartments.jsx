import React, { useEffect } from "react";
import useYellowPagesDepartments from "../../hooks/useYellowPagesDepartments";
import useDataStore from "../../zustand/useData";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link, useParams } from "react-router-dom";
const YellowPagesDepartments = () => {
  const { yellowpageId } = useParams();
  const { getYellowPagesDepartments, loading } = useYellowPagesDepartments();
  const { yellowPagesDepartments } = useDataStore();
  useEffect(() => {
    const handleYellowPagesDepartments = async () => {
      await getYellowPagesDepartments(yellowpageId);
    };
    handleYellowPagesDepartments();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/addyellowpage"
      >
        ADD NEW YELLOW PAGE DEPARTMENT
      </Link>
      <div className="divider my-10 divider-info">YELLOW PAGE DEPARTMENTS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false">
          {yellowPagesDepartments?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="elements"
              hr2="none"
              hr3="none"
              trash="none"
              fatherId={yellowpageId}
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};

export default YellowPagesDepartments;
