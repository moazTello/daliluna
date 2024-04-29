import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../../DataContext/DataContext";
import useCountries from "../../../hooks/useCountries";
import useDataStore from "../../../zustand/useData";
import useElementYellowPageDepartment from "../../../hooks/useElementYellowPageDepartment";
import Select from "react-select";
const AddElement = () => {
  const { yellowPageId, YellowPageDepartment } = useParams();
  const { provinces, elements, cities, countries } = useDataStore();
  const {
    fv,
    sfv,
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
  const getCountryProvencies = async (id) => {
    console.log("provinces", id);
    await getProvinces(id);
  };
  const getprovencCities = async (id) => {
    console.log("provinces", id);
    await getCities(id);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
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
              type="text"
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Twitter"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              COUNTRIES
            </div>
            <Select
              required
              options={countries?.map((item) => ({
                value: item.id,
                label: item.name,
                key: item.id,
              }))}
              onChange={(value) => getCountryProvencies(value.value)}
            />
          </div>
          {provinces.length > 0 && (
            <div>
              <div className="w-full text-left mt-8 mb-2 text-slate-200">
                PROVICES
              </div>
              <Select
                required
                options={provinces?.map((item) => ({
                  value: item.id,
                  label: item.name,
                  key: item.id,
                }))}
                onChange={(value) => {
                  getprovencCities(value.value);
                }}
              />
            </div>
          )}
          {cities.length > 0 && (
            <div>
              <div className="w-full text-left mt-8 mb-2 text-slate-200">
                CITIES
              </div>
              <Select
                required
                options={cities?.map((item) => ({
                  value: item.id,
                  label: item.name,
                  key: item.id,
                }))}
                onChange={(value) => {
                  getprovencCities(value.value);
                  setCity(value.label);
                }}
              />
            </div>
          )}
          <div className="flex w-[140px] justify-between items-center">
            <label htmlFor="req">Required</label>
            <input
              id="req"
              type="checkbox"
              className="text-slate-200 ml-5 checkbox"
              placeholder=""
            />
          </div>
          <div className="flex w-[140px] mt-5 justify-between items-center">
            <label htmlFor="req">Searched</label>
            <input
              id="req"
              type="checkbox"
              className="text-slate-200 ml-5 checkbox"
              placeholder=""
            />
          </div>
          <div>
            <input type="file" className="w-full mt-5 h-10" />
          </div>
          <img src={""} alt="icon" />
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
