import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import useDeleteClassifieds from "../hooks/useDeleteClassified";
import useDeleteYellowPages from "../hooks/useDeleteYellowPage";
import useDeleteClassifiedDepartment from "../hooks/useDeleteClassifiedDepartment";
import useDeleteYellowPageDepartment from "../hooks/useDeleteYellowPageDepartment";
const Row = ({ content, hr1, hr2, hr3, trash, fatherId }) => {
  const { deleteClassifieds, loading } = useDeleteClassifieds();
  const { deleteClassifiedDepartment, loadingDeleteDepartment } =
    useDeleteClassifiedDepartment();
  const { deleteYellowpage, deleteYellowloading } = useDeleteYellowPages();
  const { loadingDeleteYellowPageDepartment, deleteYellowPageDepartment } = useDeleteYellowPageDepartment();
  const navigate = useNavigate();
  const deleteclass = async () => {
    hr1 === "/classifieds/classifiedsdepartments" &&
      (await deleteClassifieds(content.id));
    hr1 === "ADD POST" &&
      (await deleteClassifiedDepartment(fatherId, content.id));
    hr1 === "/yellowpages/yellowpagesdepartments" &&
      (await deleteYellowpage(content.id));
    hr1 === "ELEMENTS" && (await deleteYellowPageDepartment(fatherId,content.id));
  };
  const navigation1 = () => {
    hr1 === "/classifieds/classifiedsdepartments"
      ? navigate(`/classifieds/${content.id}/classifiedsdepartments`)
      : hr1 === "/yellowpages/yellowpagesdepartments"
      ? navigate(`/yellowpages/${content.id}/yellowpagesdepartments`)
      : (hr1 === "ADD POST" && hr2 === "ADD FIELD") ?  
      navigate(`/classifieds/${fatherId}/classifiedsdepartments/${content.id}/addfield`): '';
  };
  const navigation2 = () => {
    hr1 === "/classifieds/classifiedsdepartments"
      ? navigate(`/classifieds/editclassified/${content.id}`)
      : "";
    hr1 === "ADD POST"
      ? navigate(
          `/classifieds/${fatherId}/classifiedsdepartments/${content.id}`
        )
      : "";
    hr1 === "/yellowpages/yellowpagesdepartments"
      ? navigate(`/yellowpages/edityellowpage/${content.id}`)
      : "";
    hr1 === "ELEMENTS"
      ? navigate(
          `/yellowpages/${fatherId}/yellowpagesdepartments/${content.id}`
        )
      : '';
  };
  const navigation3 = () => {
    (hr1 === "ADD POST" && hr2 === "SHOW FIELDS") ?  
    // navigate(`/classifieds/${fatherId}/classifiedsdepartments/${content.id}/addfield`): '';
    navigate(`/classifieds/${fatherId}/classifiedsdepartments/${content.id}/field`): '';
  };
  return (
    <tbody>
      <tr>
        <td>{content?.id}</td>
        <td>{content?.name}</td>
        {(content?.icon || content?.image) && (
          <td>
            <div className="flex justify-center">
              <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                  <img src={content?.icon || content?.image} alt="icon" />
                </div>
              </div>
            </div>
          </td>
        )}
        <th>
          <button
            onClick={deleteclass}
            className="relative mx-1 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
            disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg
             hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {!loading && !loadingDeleteDepartment && !deleteYellowloading && !loadingDeleteYellowPageDepartment && (
                <FaTrashAlt size={20} />
              )}
              {(loading || loadingDeleteDepartment || deleteYellowloading || loadingDeleteYellowPageDepartment) && (
                <p className="loading loading-spinner bg-white"></p>
              )}
            </span>
          </button>

          <button
            onClick={navigation2}
            className="relative mx-1 align-middle select-none font-sans font-medium text-center uppercase transition-all 
            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg 
            text-xs bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 
            focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <CiEdit size={23} />
            </span>
          </button>
          {hr1 !== "none" && (
            <button
              onClick={navigation1}
              className="relative m-1  align-middle select-none font-sans font-medium text-center uppercase transition-all
             disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[120px] max-w-[120px] 
             h-10 max-h-[40px] rounded-lg text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg
              hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <span className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xs">
                {hr1 === "/classifieds/classifiedsdepartments" ||
                hr1 === "/yellowpages/yellowpagesdepartments"
                  ? "departments"
                  : hr1}
              </span>
            </button>
          )}
          {hr2 !== "none" && (
            <button onClick={navigation3}
              className="relative m-1  align-middle select-none font-sans font-medium text-center uppercase transition-all
             disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-[120px] max-w-[120px] 
             h-10 max-h-[40px] rounded-lg text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg 
             hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <span className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {hr2 === "classifiedsdepartments" ? "departments" : hr2}
              </span>
            </button>
          )}
        </th>
      </tr>
    </tbody>
  );
};
export default Row;
