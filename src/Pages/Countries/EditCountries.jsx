import React, { useEffect } from "react";
import useEditCountry from "../../hooks/useEditCountry";
import { useParams } from "react-router-dom";
const EditCountries = () => {
  const { countryId } = useParams();
  const {
    loading,
    editedname,
    setEditedName,
    editCountry,
    getEditCountry,
    editedCode,
    setEditedCode
  } = useEditCountry();
  useEffect(() => {
    const getEdit = async () => {
      await getEditCountry(countryId);
    };
    getEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCountry({ name: editedname, code: editedCode }, countryId);
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          Edit Country 
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setEditedName(e.target.value)}
              value={editedname}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Country Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEditedCode(e.target.value)}
              value={editedCode}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Country Code"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center"
            >
              {loading ? (
                <p className="loading loading-spinner bg-blue-600"></p>
              ) : (
                "UPDATE"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditCountries;
