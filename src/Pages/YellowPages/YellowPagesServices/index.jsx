import React, { useEffect } from "react";
import useDataStore from "../../../zustand/useData";
import Row from "../../../Components/Row";
import TableDesy from "../../../Components/TableDesy";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
const YellowPagesServices = () => {
  const { loading, getServices } = useServices();
  const { yellowPagesServices } = useDataStore();
  useEffect(() => {
    const handleClassified = async () => {
      await getServices();
    };
    handleClassified();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/yellowpages/yellowpagesServices/addservices"
      >
        ADD NEW SERVICE
      </Link>
      <div className="divider my-10 divider-info">YELLOW PAGES SERVICES</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false" field="period_name">
          {yellowPagesServices?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="services"
              trash="none"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default YellowPagesServices;
