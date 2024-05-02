import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useEditProvencies from "../../../../hooks/useEditProvencies";
const EditProvency = () => {
  const { countryId, provencyId } = useParams();
  const {
    loading,
    editProvency,
    getEditProvency,
    editedname,
    setEditedName,
  } = useEditProvencies();
  useEffect(() => {
    const getEdit = async () => {
      await getEditProvency(countryId, provencyId);
    };
    getEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProvency(countryId, provencyId);
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          EDIT PROVENCY 
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setEditedName(e.target.value)}
              value={editedname}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Provency Name"
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
export default EditProvency;
