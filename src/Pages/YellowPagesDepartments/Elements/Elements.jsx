import React, { useEffect } from "react";
import useElement from "../../../hooks/useElements";
import useDataStore from "../../../zustand/useData";
import Row from "../../../Components/Row";
import TableDesy from "../../../Components/TableDesy";
import { Link, useParams } from "react-router-dom";
const Elements = () => {
  const { yallowPageId, yellowPageDepartmentId } = useParams();
  console.log(yallowPageId, yellowPageDepartmentId);
  const { loading, getElements } = useElement();

  const { elements } = useDataStore();
  useEffect(() => {
    const handleFields = async () => {
      await getElements(yellowPageDepartmentId);
    };
    handleFields();
    console.log(elements);
  }, []);
  console.log(elements);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/yellowpages/${yallowPageId}/yellowpagesdepartments/${yellowPageDepartmentId}/addelement`}
      >
        ADD DEPARTMENT ELEMENT
      </Link>
      <div className="divider my-10 divider-info">DEPARTMENT ELEMENTS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy field="elements" icon="false">
          {elements.length &&
            elements?.map((item, index) => (
              <Row
                key={index}
                content={item}
                hr1="/yellowpages/:yallowPageId/yellowpagesdepartments/:yellowPageDepartmentId/elements"
                hr2="none"
                hr3="EDIT_Elements"
                fatherId={yellowPageDepartmentId}
                grand={yallowPageId}
              />
            ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Elements;
