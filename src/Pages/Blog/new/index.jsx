import React, { useState, useEffect } from "react";
import useCountries from "../../../hooks/useCountries";
import useDataStore from "../../../zustand/useData";
import Select from "react-select";
import useAddBlog from "../../../hooks/useAddBlog";
const AddBlog = () => {
  const { getContries } = useCountries();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountryId] = useState("");
  const { addBlog, loading } = useAddBlog();
  const { countries } = useDataStore();
  useEffect(() => {
    const getEdit = async () => {
      await getContries();
    };
    getEdit();
  }, []);
  const handleImage = (e) => {
    setIcon(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlog({
      name: name,
      icon: icon,
      details: description,
      country_id: country,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter
         backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          ADD BLOG
        </h1>
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
            onChange={(value) => setCountryId(value)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="BLOG TITLE"
            />
          </div>
          <div>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="BLOG DETAILS"
            />
          </div>
          <div>
            <input
              type="file"
              onChange={handleImage}
              className="w-full mt-5 h-10"
            />
          </div>
          {icon && <img src={URL.createObjectURL(icon)} alt="icon" />}
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
export default AddBlog;
