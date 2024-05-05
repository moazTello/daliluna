import React from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../../../DataContext/DataContext";
import useAddFieldClassDepartment from "../../../../hooks/useAddFieldClassDepartment";
import toast from "react-hot-toast";
const AddFieldClassDepartment = () => {
  const { classifiedid, classifiedDepartmentId } = useParams();
  const {
    fn,
    sfn,
    place,
    setPlace,
    fMi,
    setFMi,
    fMa,
    setFMax,
    filedType,
    setFieldType,
    fs,
    sfs,
    fv,
    fReq,
    sFReq,
    fval,
    handleValuesChange,
    handleRemoveValueRow,
    handleAddvalueRow,
  } = useDataContext();
  const { loading, addFieldDepartment } = useAddFieldClassDepartment();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (filedType === "radio") {
        const radio = fv.length >= 2;
        if (!radio)
          return toast.error(
            "it's radio type you should add more than one value !"
          );
        const empty = fv.some((v) => v === "");
        if (empty) return toast.error("It shouldn't be empty values !");
      }
      if (filedType === "checkbox") {
        const checkbox = fv.length >= 1;
        if (!checkbox)
          return toast.error(
            "it's checkbox type you should add at least one value !"
          );
        const empty = fv.some((v) => v === "");
        if (empty) return toast.error("It shouldn't be empty values !");
      }
      await addFieldDepartment(
        {
          name: fn,
          placeholder: place,
          min: fMi,
          max: fMa,
          type: filedType,
          search: fs,
          values: fv,
          require: fReq,
        },
        classifiedid,
        classifiedDepartmentId
      );
      sfn('');
      setPlace('');
      setFMi('');
      setFMax('');
      setFieldType('');
      sfs(false);
      sFReq(false);
      sfv([]);
    } catch (err) {
      toast.err(err);
    }
    // navigate(`/classifieds/${classifiedid}/classifiedsdepartments`);
  };
  const typelist = [
    {
      id: 1,
      name: "number",
    },
    {
      id: 2,
      name: "text",
    },
    {
      id: 3,
      name: "radio",
    },
    {
      id: 4,
      name: "checkbox",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          ADD FIELD DEPARTMENT FIELD
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => sfn(e.target.value)}
              value={fn}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Field Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPlace(e.target.value)}
              value={place}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Placeholder"
            />
          </div>
          <div>
            <input
              onChange={(e) => setFMax(e.target.value)}
              value={fMa}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Max"
            />
          </div>
          <div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Min"
            />
          </div>
          <div className="flex w-[140px] my-5 justify-between items-center">
            <ul className="menu menu-vertical px-1 pb-3">
              <li>
                <details>
                  <summary>Type</summary>
                  <ul className="p-2  bg-base-100 rounded-t-none">
                    {typelist.map((item) => (
                      <li
                        key={item.id}
                        className={`btn mx-1 ${
                          item.name === filedType ? "bg-slate-600" : ""
                        }`}
                        onClick={() => {
                          setFieldType(item.name);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="flex w-[140px] justify-between items-center">
            <label htmlFor="req">Required</label>
            <input
              id="req"
              onChange={() => sFReq(fReq => !fReq)}
              type="checkbox"
              className="text-slate-200 ml-5 checkbox"
              placeholder=""
            />
          </div>
          <div className="flex w-[140px] mt-5 justify-between items-center">
            <label htmlFor="req">Searched</label>
            <input
              id="req"
              onChange={() => sfs(fs => !fs)}
              type="checkbox"
              className="text-slate-200 ml-5 checkbox"
              placeholder=""
            />
          </div>

          {(filedType === "checkbox" || filedType === "radio") && (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleAddvalueRow()}
            >
              Add Value
            </button>
          )}
          {(filedType === "checkbox" || filedType === "radio") &&
            fv.length > 0 &&
            fv?.map((row, index) => (
              <div key={index} className="">
                <div className="">
                  <input
                    value={row}
                    type="text"
                    className="w-96 text-slate-200 my-5 input input-bordered h-10 "
                    id=""
                    placeholder="value"
                    ref={fval}
                    onInput={(e) => handleValuesChange(e, index)}
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleRemoveValueRow(row, index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center"
            >
              {loading ? (
                <p className="loading loading-spinner bg-blue-600"></p>
              ) : (
                "ADD FIELD"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddFieldClassDepartment;
