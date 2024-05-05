import React, { useEffect } from "react";
import useDataStore from "../../zustand/useData";
import useYellowPages from "../../hooks/YellowPages/useYellowPages";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link } from "react-router-dom";
const YellowPages = () => {
  const { getYellowPages, loading } = useYellowPages();
  const { yellowPages } = useDataStore();
  useEffect(() => {
    const handleClassified = async () => {
      await getYellowPages();
    };
    handleClassified();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/addyellowpage"
      >
        ADD NEW YELLOW PAGE
      </Link>
      <div className="divider my-10 divider-info">YELLOW PAGES</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="true">
          {yellowPages?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="/yellowpages/yellowpagesdepartments"
              hr2="none"
              hr3="none"
              trash="none"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default YellowPages;
