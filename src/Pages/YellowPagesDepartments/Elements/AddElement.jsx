import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../../DataContext/DataContext";
import useCountries from "../../../hooks/useCountries";
import useDataStore from "../../../zustand/useData";
import useElementYellowPageDepartment from "../../../hooks/useElementYellowPageDepartment";
const AddElement = () => {
  const { yellowPageId, YellowPageDepartment } = useParams();
  const { provinces, elements, cities, countries } = useDataStore();
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
  const { loadingCountries, getContries, getCities, getProvinces } =
    useCountries();
  const {} = useElementYellowPageDepartment();
  useEffect(() => {
    const getCountriesUp = async () => {
      await getContries();
    };
    getCountriesUp();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddElement(
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
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              ELEMENT NAME
            </div>
            <input
              onChange={(e) => sfn(e.target.value)}
              value={fn}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Element Name"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              DESCREPTION
            </div>
            <input
              onChange={(e) => setPlace(e.target.value)}
              value={place}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Descreption"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              ADDRESS
            </div>
            <input
              onChange={(e) => setFMax(e.target.value)}
              value={fMa}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Address"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              TIME OPEN
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Time Open"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              EMAIL
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Email"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              YOUTUBE
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Youtube"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              FACEBOOK
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Facebook"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              WEB SITE
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Web site"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              INSTAGRAM
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Instagram"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              TWITTER
            </div>
            <input
              onChange={(e) => setFMi(e.target.value)}
              value={fMi}
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Twitter"
            />
          </div>
          <div>
          <div className="w-full text-left mt-8 mb-2 text-slate-200">
              COUNTRIES
            </div>
            <select onChange={{}} className="w-full text-slate-200 input input-bordered h-10">
                <option>Select a Country ...</option>
              {cities.length > 0 &&
                countries.map((country) => <option>{country.name}</option>)}
            </select>
          </div>
          <div>
          <div className="w-full text-left mt-8 mb-2 text-slate-200">
              PROVICES
            </div>
            <select onChange={{}} className="w-full text-slate-200 input input-bordered h-10">
                <option>Select a Provinces ...</option>
              {provinces.length > 0 &&
                provinces.map((province) => <option>{province.name}</option>)}
            </select>
          </div>
          <div>
          <div className="w-full text-left mt-8 mb-2 text-slate-200">
              CITIES
            </div>
            <select onChange={{}} className="w-full text-slate-200 input input-bordered h-10">
                <option>Select a City ...</option>
              {cities.length > 0 &&
                cities.map((city) => <option>{city.name}</option>)}
            </select>
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
                        className="btn mx-1"
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
              onChange={() => sFReq(!fReq)}
              type="checkbox"
              className="text-slate-200 ml-5 checkbox"
              placeholder=""
            />
          </div>
          <div className="flex w-[140px] mt-5 justify-between items-center">
            <label htmlFor="req">Searched</label>
            <input
              id="req"
              onChange={() => sfs(!fs)}
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
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          <div>
            <button
              type="submit"
              disabled={loadingCountries}
              className="btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center"
            >
              {loadingCountries ? (
                <p className="loading loading-spinner bg-blue-600"></p>
              ) : (
                "ADD ELEMENT"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddElement;
