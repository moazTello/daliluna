import React, { useEffect } from "react";
import useDataStore from "../../../../zustand/useData";
import Row from "../../../../Components/Row";
import TableDesy from "../../../../Components/TableDesy";
import { Link } from "react-router-dom";
import useCountries from "../../../../hooks/useCountries";
import { useParams } from "react-router-dom";
const Cities = () => {
  const { countryId, provencyId } = useParams();
  const { loadingCountries, getCities } = useCountries();
  const { cities } = useDataStore();
  useEffect(() => {
    const handleProvency = async () => {
      await getCities(provencyId);
    };
    handleProvency();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/Countries/${countryId}/provencies/${provencyId}/addcity`}
      >
        ADD NEW CITY
      </Link>
      <div className="divider my-10 divider-info">PROVENCIES</div>
      {loadingCountries ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false">
          {cities?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="cities"
              fatherId={provencyId}
              grand={countryId}
              trash="removetrash"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Cities;
