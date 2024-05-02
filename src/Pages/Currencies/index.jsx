import React, { useEffect } from "react";
import useDataStore from "../../zustand/useData";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link } from "react-router-dom";
import useCurrencies from "../../hooks/useCurrencies";
const Currencies = () => {
  const { loadingCurrencies, getCurrencies } = useCurrencies();
  const { currencies } = useDataStore();
  useEffect(() => {
    const handleCurrencies = async () => {
      await getCurrencies();
    };
    handleCurrencies();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/currencies/addcurrency"
      >
        ADD NEW CURRENCY
      </Link>
      <div className="divider my-10 divider-info">CURRENCIES</div>
      {loadingCurrencies ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false" field="code">
          {currencies?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="currencies"
              trash="none"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Currencies;
