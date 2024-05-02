import React, { useEffect } from "react";
import useEditService from "../../../../hooks/useEditService";
import { useParams } from "react-router-dom";
const EditYellowPageServices = () => {
  const { serviceId } = useParams();
  const {
    loading,
    editService,
    getEditService,
    editedname,
    setEditedName,
    editPeriod_val,
    setEditPeriod_val,
    editPeriod_name,
    setEditPeriod_name,
    editPrice,
    setEditPrice,
  } = useEditService();
  useEffect(() => {
    const getEdit = async () => {
      await getEditService(serviceId);
    };
    getEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editService(serviceId);
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-900">
          Edit SERVICE
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setEditedName(e.target.value)}
              value={editedname}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Service Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEditPeriod_name(e.target.value)}
              value={editPeriod_name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Edit Period name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEditPeriod_val(e.target.value)}
              value={editPeriod_val}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Edit Period Value"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEditPrice(e.target.value)}
              value={editPrice}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Edit Price"
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
export default EditYellowPageServices;
