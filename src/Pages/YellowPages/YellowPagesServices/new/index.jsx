import React from "react";
import useAddServices from "../../../../hooks/useAddService";
const AddServices = () => {
  const { 
    loading,
    addService,
    setName,
    setPeriod_name,
    setPeriod_val,
    setPrice,
    name,
    price,
    period_val,
    period_name,
  } = useAddServices()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addService();
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter
         backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-900">
          Add A SERVICE
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Service Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPeriod_name(e.target.value)}
              value={period_name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Period Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPeriod_val(e.target.value)}
              value={period_val}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Period Value"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Price"
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
export default AddServices;