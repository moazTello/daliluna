import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEditYellowPages from "../../../hooks/YellowPages/useEditYellowPages";
import { IoMdCloudUpload } from "react-icons/io";
import { useParams } from "react-router-dom";
const EditYellowPage = () => {
  const { yellowpageId } = useParams();
  const handleImage = (e) => {
    setEditedIcon(e.target.files[0]);
  };
  const {
    loading,
    editYellowpage,
    getEditYellowPage,
    editedname,
    setEditedName,
    editedDescription,
    setEditedDescription,
    editedIcon,
    setEditedIcon,
  } = useEditYellowPages();
  const navigate = useNavigate();
  useEffect(() => {
    const getEdit = async () => {
      await getEditYellowPage(yellowpageId);
    };
    getEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editYellowpage(
      { name: editedname, description: editedDescription, image: editedIcon },
      yellowpageId
    );
    navigate("/yellowpages");
  };
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-base font-semibold text-start mt-5 text-gray-200">
          Edit Yellow Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setEditedName(e.target.value)}
              value={editedname}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Yellow Page Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEditedDescription(e.target.value)}
              value={editedDescription}
              type="text"
              className="w-full text-slate-200 mt-5 input input-bordered h-10"
              placeholder="Description"
            />
          </div>
          <div>
            <label
              htmlFor="choose"
              className="w-full bg-base-100 rounded-md flex items-center justify-start pl-5 input-bordered
               h-10 my-5 cursor-pointer"
            >
              Insert An Image
            </label>
            <input
              id="choose"
              type="file"
              onChange={handleImage}
              className="hidden"
            />
          </div>
          {editedIcon && (
            <img
              className="max-w-28 max-h-28"
              src={
                editedIcon.name ? URL.createObjectURL(editedIcon) : editedIcon
              }
              alt="icon"
            />
          )}
          {!editedIcon && <IoMdCloudUpload />}
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
export default EditYellowPage;