import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../../DataContext/DataContext";
import useCountries from "../../../hooks/useCountries";
import useDataStore from "../../../zustand/useData";
import useElementYellowPageDepartment from "../../../hooks/useElementYellowPageDepartment";
import Select from "react-select";
import useAddElement from "../../../hooks/useAddElement";

const AddElement = () => {

  const { loading, addYellowElement } = useAddElement();
  const { yallowPageId, yellowPageDepartmentId } = useParams();
  const { provinces, cities, countries } = useDataStore();
  console.log(yallowPageId, yellowPageDepartmentId);
  const { loadingCountries, getContries, getCities, getProvinces } =
  useCountries();
  const {
    name,
    setName,
    description,
    setDescription,
    address,
    setAddress,
    timeOpen,
    setTimeOpen,
    email,
    setEmail,
    you,
    setyou,
    insta,
    setInsta,
    twitter,
    setTwitter,
    facebook,
    setFacebook,
    website,
    setWebsite,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    image,
    setImage,
    video,
    setVideo,
    image2,
    setImage2,
    phones,
    setPhones,
    phones2,
    setPhones2,
    phonesrefer,
    phonesrefer2,
    handleAddvalueRowElemenets,
    handleValuesChangeElements,
    handleRemoveValueRowElements,
    handleImage,
  } = useDataContext();
  useEffect(() => {
    const getCountriesUp = async () => {
      await getContries();
    };
    getCountriesUp();
  }, []);
  const getCountryProvencies = async (id) => {
    console.log("provinces", id);
    await getProvinces(id.value);
    setCountry(id.label);
  };
  const getprovencCities = async (id) => {
    console.log("provinces", id);
    await getCities(id.value);
    setProvince(id.label);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("city_id", city.id);
    formData.append("time_open", timeOpen);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("youtube", you);
    formData.append("video", video);
    phones?.map((item, index) => {
      formData.append(`phones[${index + 1}][name]`, 'call');
    });
    phones2?.map((item, index) => {
      formData.append(`phones[${index + 1}][number]`, item);
    });
    formData.forEach((e) => console.log(e));
    formData.append("phones[1][number]", phones2);
    formData.append("instagram", insta);
    formData.append("logo", image2);
    formData.append("images[1]", image);
    formData.append("website", website);
    console.log(yellowPageDepartmentId)
    await addYellowElement(formData,yallowPageId,yellowPageDepartmentId);
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          ADD YELLOW DEPARTMENT ELEMENT
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              ELEMENT NAME
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Element Name"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              DESCREPTION
            </div>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Descreption"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              ADDRESS
            </div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Address"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              TIME OPEN
            </div>
            <input
              value={timeOpen}
              onChange={(e) => setTimeOpen(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Time Open"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              EMAIL
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Email"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              YOUTUBE
            </div>
            <input
              value={you}
              onChange={(e) => setyou(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Youtube"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              FACEBOOK
            </div>
            <input
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Facebook"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              WEB SITE
            </div>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Web site"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              INSTAGRAM
            </div>
            <input
              value={insta}
              onChange={(e) => setInsta(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Instagram"
            />
          </div>
          <div>
            <div className="w-full text-left mt-8 mb-2 text-slate-200">
              TWITTER
            </div>
            <input
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              type="text"
              required
              className="w-full text-slate-200 input input-bordered h-10"
              placeholder="Twitter"
            />
          </div>

          {
            <button
              type="button"
              required
              className="btn btn-success mt-5"
              onClick={() => handleAddvalueRowElemenets()}
            >
              Add Value
            </button>
          }
          <div className="flex justify-between ">
            <div>
              {phones.length > 0 &&
                phones?.map((row, index) => (
                  <div key={index} className="">
                    <div className="">
                          <Select
                            required
                            options={[
                              { value: "call", label: "call" },
                              { value: "whatsapp", label: "whatsapp" },
                              { value: "telegram", label: "telegram" },
                            ]}
                            ref={phonesrefer}
                            onChange={(value) =>
                              handleValuesChangeElements(value.value, index,1)
                            }
                          />
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {phones2.length > 0 &&
                phones2?.map((row, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="">
                      <input
                        value={row}
                        type="text"
                        className="w-96 text-slate-200 my-5 input input-bordered h-10 "
                        id=""
                        placeholder="Phone Number"
                        ref={phonesrefer2}
                        onInput={(e) => handleValuesChangeElements(e, index, 2)}
                      />
                    </div>
                    <div className="ml-4">
                      <button
                        type="button"
                        className="btn btn-warning "
                        onClick={() => handleRemoveValueRowElements(row, index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
            </div>
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
              onChange={(value) => getCountryProvencies(value)}
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
                  getprovencCities(value);
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
                  setCity({value:value.label,id:value.value});
                }}
              />
            </div>
          )}
          <div className="mt-10">
            <label
              htmlFor="chooseImage1"
              className="w-full text-left mt-8 mb-2 cursor-pointer text-slate-200"
            >
              ADD AN IMAGE
            </label>
            <input
              id="chooseImage1"
              onChange={(e) => handleImage(e, 1)}
              type="file"
              className="w-full hidden mt-5 h-10"
            />
          </div>
          {image && (
            <img
              src={image && URL.createObjectURL(image)}
              className="my-5"
              alt="icon"
            />
          )}
          <div>
            <label
              htmlFor="chooseImage2"
              className="w-full text-left mt-8 cursor-pointer mb-2 text-slate-200"
            >
              ADD LOGO
            </label>
            <input
              id="chooseImage2"
              onChange={(e) => handleImage(e, 2)}
              type="file"
              className="w-full hidden mt-5 h-10"
            />
          </div>
          {image2 && (
            <img
              src={image2 && URL.createObjectURL(image2)}
              className="my-5"
              alt="icon"
            />
          )}
          <div>
            <label
              htmlFor="chooseImage3"
              className="w-full text-left mt-8 cursor-pointer mb-2 text-slate-200"
            >
              ADD A VIDEO
            </label>
            <input
              id="chooseImage3"
              onChange={(e) => handleImage(e, 3)}
              type="file"
              className="w-full hidden mt-5 h-10"
            />
          </div>
          {video && (
            <img
              src={video && URL.createObjectURL(video)}
              className="my-5"
              alt="icon"
            />
          )}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn min-h-[55px] mt-5 mb-5 p-5 btn-block items-center justify-center"
            >
              {loading ? (
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