import React, { useEffect } from "react";
import useDataStore from "../../../zustand/useData";
import Row from "../../../Components/Row";
import TableDesy from "../../../Components/TableDesy";
import { Link } from "react-router-dom";
import useCountries from "../../../hooks/useCountries";
import { useParams } from "react-router-dom";
const Provencies = () => {
  const { countryId } = useParams();
  const { loadingCountries, getProvinces } = useCountries();
  const { provinces } = useDataStore();
  useEffect(() => {
    const handleProvency = async () => {
      await getProvinces(countryId);
    };
    handleProvency();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/Countries/provencies/${countryId}/addProvency`}
      >
        ADD NEW PROVENCY
      </Link>
      <div className="divider my-10 divider-info">PROVENCIES</div>
      {loadingCountries ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false">
          {provinces?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="SHOW CITIES"
              hr2="none"
              hr3="none"
              hr4="provencies"
              fatherId={countryId}
              trash="removetrash"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Provencies;
