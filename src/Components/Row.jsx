import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import useDeleteClassifieds from "../hooks/Classifieds/useDeleteClassified";
import useDeleteYellowPages from "../hooks/YellowPages/useDeleteYellowPage";
import useDeleteClassifiedDepartment from "../hooks/useDeleteClassifiedDepartment";
import useDeleteYellowPageDepartment from "../hooks/YellowDepartments/useDeleteYellowPageDepartment";
import useDeleteFieldClassDepartment from "../hooks/useDeleteFieldClassDepartment";
import useChangePostStatuse from "../hooks/useChangeStatus";
import useDeleteElement from "../hooks/useDeleteElement";
import useDeletePostClassDepartment from "../hooks/useDeletePost";
import useDeleteService from "../hooks/useDeleteService";
import { TbStatusChange } from "react-icons/tb";
import useDeleteCurrencies from "../hooks/useDeleteCurrencies";
import useDeleteBlog from "../hooks/useDeleteBlog";
import { LuPhoneCall } from "react-icons/lu";
const Row = ({ content, hr1, hr2, hr3, trash, fatherId, grand, hr4 }) => {
  const { deleteClassifieds, loading } = useDeleteClassifieds();
  const { loadingDeleteBlog, deleteBlog } = useDeleteBlog();
  const { loadingDeleteCurrency, deleteCurrency } = useDeleteCurrencies();
  const { deleteClassifiedDepartment, loadingDeleteDepartment } =
    useDeleteClassifiedDepartment();
  const { loadingDeleteDepartmentField, deleteDepartmentField } =
    useDeleteFieldClassDepartment();
  const { deleteYellowpage, deleteYellowloading } = useDeleteYellowPages();
  const { loadingDeleteElement, deleteElement } = useDeleteElement();
  const { loadingDeleteYellowPageDepartment, deleteYellowPageDepartment } =
    useDeleteYellowPageDepartment();
  const { loadingDeleteDepartmentPostStatus, ChangePostStatus } =
    useChangePostStatuse();
  const { loadingDeleteDepartmentPost, deleteDepartmentPost } =
    useDeletePostClassDepartment();
  const { loadingDeleteService, deleteService } = useDeleteService();
  const navigate = useNavigate();
  const deleteclass = async () => {
    hr1 === "/classifieds/classifiedsdepartments" &&
      (await deleteClassifieds(content.id));
    hr1 === "SHOW POSTS" &&
      (await deleteClassifiedDepartment(fatherId, content.id));
    hr1 === "/yellowpages/yellowpagesdepartments" &&
      (await deleteYellowpage(content.id));
    hr1 === "ELEMENTS" &&
      (await deleteYellowPageDepartment(fatherId, content.id));
    hr3 === "EDIT_FIELD" && (await deleteDepartmentField(fatherId, content.id));
    hr1 ===
      "/yellowpages/:yallowPageId/yellowpagesdepartments/:yellowPageDepartmentId/elements" &&
      (await deleteElement(grand, fatherId, content.id));
    hr4 === "hideEdit" && (await deleteDepartmentPost(fatherId, content.id));
    hr4 === "services" && (await deleteService(content.id));
    hr4 === "currencies" && (await deleteCurrency(content.id));
    hr4 === "EDIT BLOG" && (await deleteBlog(content.id));
  };
  const navigation1 = () => {
    hr1 === "/classifieds/classifiedsdepartments"
      ? navigate(`/classifieds/${content.id}/classifiedsdepartments`)
      : hr1 === "/yellowpages/yellowpagesdepartments"
      ? navigate(`/yellowpages/${content.id}/yellowpagesdepartments`)
      : hr1 === "SHOW CITIES"
      ? navigate(`/Countries/${fatherId}/provencies/${content.id}/cities`)
      : "";
    //  hr1 === "SHOW POSTS" && hr2 === "ADD FIELDS"
    // ? navigate(
    //     `/classifieds/${fatherId}/classifiedsdepartments/${content.id}/addfield`
    //   )
    // : "";
    hr1 === "ELEMENTS"
      ? (
        navigate(
          `/yellowpages/${fatherId}/yellowpagesdepartments/${content.id}/elements`
        ))
      : "";
    hr1 === "SHOW POSTS" && hr2 === "SHOW FIELDS"
      ? navigate(
          `/classifieds/${fatherId}/classifiedsdepartments/${content.id}/posts`
        )
      : "";
    hr1 === "SHOW PROVENCIES" &&
      navigate(`/Countries/provencies/${content.id}`);
  };
  const navigation2 = async () => {
    hr1 === "/classifieds/classifiedsdepartments"
      ? navigate(`/classifieds/editclassified/${content.id}`)
      : "";
    hr1 === "SHOW POSTS"
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
      : hr3 === "EDIT_FIELD"
      ? navigate(
          `/classifieds/${grand}/classifiedsdepartments/${fatherId}/edit/${content.id}`
        )
      : "";
    hr4 === "hideEdit" &&
      (await ChangePostStatus(fatherId, content.id, content.status));
    hr4 === "services" &&
      navigate(`/yellowpages/yellowpagesServices/${content.id}`);
    // trash === "removetrash" && navigate()
    hr4 === "countries" && navigate(`/Countries/Edit/${content.id}`);
    hr4 === "provencies" &&
      navigate(`/Countries/provencies/${fatherId}/edit/${content.id}`);
    hr4 === "cities" &&
      navigate(`/Countries/${grand}/provencies/${fatherId}/edit/${content.id}`);
    hr4 === "EDIT BLOG" && navigate(`/blogs/editblog/${content.id}`);
  };
  const navigation3 = () => {
    hr1 === "SHOW POSTS" && hr2 === "SHOW FIELDS"
      ? // navigate(`/classifieds/${fatherId}/classifiedsdepartments/${content.id}/addfield`): '';
        navigate(
          `/classifieds/${fatherId}/classifiedsdepartments/${content.id}/field`
        )
      : "";
  };
  return (
    <tbody>
      <tr>
        <td>{content?.id}</td>
        <td>{content?.name || content?.title}</td>
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
        {content?.type && (
          <>
            <td>{content?.placeholder}</td>
            <td>{content?.type}</td>
            <td>{content?.max}</td>
            <td>{content?.min}</td>
            <td>{content?.required === "0" ? "X" : "T"}</td>
            <td>{content?.searched === "0" ? "X" : "T"}</td>
          </>
        )}
        {content?.facebook !== 0 && content?.twitter && (
          <>
            <td>{content?.address}</td>
            <td>{content?.approved_admin === "0" ? "T" : "X"}</td>
            <td>{content?.city_id}</td>
            <td>{content?.description}</td>
            <td>{content?.facebook}</td>
            <td>{content?.instagram}</td>
            <td>{content?.twitter}</td>
            {(content?.icon || content?.images) && (
              <td>
                <div className="flex-none">
                  <ul className="menu menu-horizontal px-1">
                    <li>
                      <details>
                        <summary>
                          <div className="flex justify-center">
                            <div className="avatar">
                              <div className="mask mask-squircle w-16 h-16">
                                <img src={content?.images[0]} alt="icon" />
                              </div>
                            </div>
                          </div>
                        </summary>
                        <ul className="menu menu-vertical p-2 bg-t-100 rounded-t-none z-10">
                          {content?.images &&
                            Object.values(content.images).map(
                              (image, index) => (
                                <li key={index}>
                                  <div className="flex justify-center">
                                    <div className="avatar">
                                      <div className="mask mask-squircle w-16 h-16">
                                        <img src={image} alt="icon" />
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              )
                            )}
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </td>
            )}
            {content?.logo && (
              <td>
                <div className="flex justify-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={content?.logo} alt="icon" />
                    </div>
                  </div>
                </div>
              </td>
            )}
            <td>{content?.number_of_visitors}</td>
            <td>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>
                        <LuPhoneCall size={18} />
                      </summary>
                      <ul className="p-2 bg-t-100 rounded-t-none">
                        {content?.phones &&
                          Object.values(content.phones).map((phone, index) => (
                            <li key={index}>
                              <p
                                className="btn mt-1 z-10"
                                style={{ borderColor: "rgb(8,178,253)" }}
                              >
                                {phone.name} || {phone.number}
                              </p>
                            </li>
                          ))}
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </td>
            <td>{content?.time_open}</td>
            <td>{content?.website}</td>
            <td>{content?.youtube}</td>
          </>
        )}
        {
          content.title && content.status && (
            <>
              <td>{content?.address}</td>
              <td>{content?.city_id}</td>
              <td>{content?.currency.name}</td>
              <td>{content?.price}</td>
              <td>{content?.email}</td>
              <td>{content?.facebook}</td>
              <td>{content?.mobiles[0]?.name}</td>
              <td>{content?.mobiles[0]?.number}</td>
              <td>{content?.number_of_visitors}</td>
              {/* <td>{content?.status}</td> */}
            </>
          )
          // currency{id: 1, name: 'American dollar', code: 'USD $'}

          // images
          // (3) ['https://daliluna.ltd/storage/post-images/YXx4fNzBDaEbjhjR8ioBUCpiLpdkD6Js12t1lMwn.png', 'https://daliluna.ltd/storage/post-images/8YtHEn0f1bc2tKdszK0wIkMXPH0ODJjKrD0byl10.png', 'https://daliluna.ltd/storage/post-images/aWuVW5AHozon20CWgeS7BMQmcxiPOupkF5B9e9Rj.png']
        }
        {content.period_name && content.period_value && (
          <>
            <td>{content?.price}</td>
            <td>{content?.period_name}</td>
            <td>{content?.period_value}</td>
          </>
        )}
        {content.code && (
          <>
            <td>{content?.code}</td>
          </>
        )}
        <th className="min-w-[150px]">
          {trash !== "removetrash" && (
            <button
              onClick={deleteclass}
              className="relative mx-1 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
            disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg
             hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {!loading &&
                  !loadingDeleteDepartment &&
                  !deleteYellowloading &&
                  !loadingDeleteYellowPageDepartment &&
                  !loadingDeleteDepartmentField &&
                  !loadingDeleteElement &&
                  !loadingDeleteDepartmentPost &&
                  !loadingDeleteService &&
                  !loadingDeleteCurrency &&
                  !loadingDeleteBlog && <FaTrashAlt size={20} />}
                {(loading ||
                  loadingDeleteDepartment ||
                  deleteYellowloading ||
                  loadingDeleteYellowPageDepartment ||
                  loadingDeleteDepartmentField ||
                  loadingDeleteElement ||
                  loadingDeleteDepartmentPost ||
                  loadingDeleteService ||
                  loadingDeleteCurrency ||
                  loadingDeleteBlog) && (
                  <p className="loading loading-spinner bg-white"></p>
                )}
              </span>
            </button>
          )}
          <button
            onClick={navigation2}
            className="relative mx-1 align-middle select-none font-sans font-medium text-center uppercase transition-all 
            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg 
            text-xs bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 
            focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            style={{
              backgroundColor: content.status === "disable" ? "gray" : "",
            }}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {hr4 !== "hideEdit" ? (
                <CiEdit size={23} />
              ) : loadingDeleteDepartmentPostStatus ? (
                <p className="loading loading-spinner bg-white"></p>
              ) : content.status === "disable" ? (
                <TbStatusChange size={23} />
              ) : (
                <TbStatusChange size={23} />
              )}
            </span>
          </button>
          {hr1 !== "none" &&
            hr1 !==
              "/yellowpages/:yallowPageId/yellowpagesdepartments/:yellowPageDepartmentId/elements" && (
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
            <button
              onClick={navigation3}
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
