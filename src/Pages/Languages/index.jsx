import React, { useEffect } from "react";
import useDataStore from "../../zustand/useData";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link } from "react-router-dom";
import useLang from "../../hooks/useLang";
const Languages = () => {
  const { loading, getLang } = useLang();
  const { lang } = useDataStore();
  useEffect(() => {
    const handleCurrencies = async () => {
      await getLang();
    };
    handleCurrencies();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/lang/addlang"
      >
        ADD NEW LANGUAGE
      </Link>
      <div className="divider my-10 divider-info">LANGUAGES</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false" field="code">
          {lang?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="lang"
              trash="none"
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Languages;
