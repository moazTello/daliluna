import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEditClassifiedDepartment from "../../../hooks/useEditClassifiedDepartment";
import { useParams } from "react-router-dom";
const EditClassifiedDepartment = () => {
  const { classifiedid, classifiedDepartmentId } = useParams();
  const {
    loading,
    editClassifiedDepartment,
    getEditClassifiedDepartment,
    editedname,
    setEditedName,
  } = useEditClassifiedDepartment();
  const navigate = useNavigate();
  useEffect(() => {
    const getEdit = async () => {
      await getEditClassifiedDepartment(classifiedid, classifiedDepartmentId);
    };
    getEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editClassifiedDepartment(
      { name: editedname },
      classifiedid,
      classifiedDepartmentId
    );
    navigate(`/classifieds/${classifiedid}/classifiedsdepartments`);
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          Edit Classified Department
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setEditedName(e.target.value)}
              value={editedname}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Classified Name"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center 
                    justify-center"
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
export default EditClassifiedDepartment;
