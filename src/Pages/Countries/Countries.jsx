import React, { useEffect } from "react";
import useDataStore from "../../zustand/useData";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link } from "react-router-dom";
import useCountries from "../../hooks/useCountries";
const Countries = () => {
  const { loadingCountries, getContries, getCities, getProvinces } = useCountries();
  const { countries } = useDataStore();
  useEffect(() => {
    const handleClassified = async () => {
      await getContries();
    };
    handleClassified();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/Countries/addcountry"
      >
        ADD NEW COUNTRY
      </Link>
      <div className="divider my-10 divider-info">COUNTRIES</div>
      {loadingCountries ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false" field="code">
          {countries?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="SHOW PROVENCIES"
              hr2="none"
              hr3="none"
              hr4="countries"
              trash="removetrash"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Countries;
