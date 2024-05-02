import React, { useState } from "react";
import useAddCurrency from "../../../hooks/useAddCurrency";
const AddCurrency = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const { loading, addCurrency } = useAddCurrency();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCurrency({ name: name, code: code });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          Add A Currency
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="COUNTRY NAME"
            />
          </div>
          <div>
            <input
              onChange={(e) => setCode(e.target.value)}
              value={code}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="COUNTRY CODE"
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

export default AddCurrency;
