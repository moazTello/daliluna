import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAddClassifiedDepartment from "../../../hooks/useAddClassifiedDepartment";
const AddClassifiedDepartment = () => {
  const { classifiedId } = useParams();
  const [name, setName] = useState("");
  const { addClassifiedDepartment, loading } = useAddClassifiedDepartment();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addClassifiedDepartment({ name: name }, classifiedId);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          Add Classified Department
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Classified Name"
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
                "ADD"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClassifiedDepartment;
