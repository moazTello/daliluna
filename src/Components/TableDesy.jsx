import React from "react";
const TableDesy = ({ children, icon, field }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {icon !== "false" && <th>Icon</th>}
            {field === "field" && (
              <>
                <td>PLACE_HOLDER</td>
                <td>TYPE</td>
                <td>MAX</td>
                <td>MIN</td>
                <td>REQUIREED</td>
                <td>SEARCHED</td>
              </>
            )}
            {field === "elements" && (
              <>
                <td>ADDRESS</td>
                <td>APPROVED_ADMIN</td>
                <td>CITY_ID</td>
                <td>DESCRIPTION</td>
                <td>FACEBOOK</td>
                <td>INSTAGRAM</td>
                <td>TWITTER</td>
                <td>IMAGE</td>
                <td>LOGO</td>
                <td>NUMBER_OF_VISITORS</td>
                <td>CALLING</td>
                <td>PHONE_NUBMER</td>
                <td>TIME_OPEN</td>
                <td>WEB_SITE</td>
                <td>YOUTUBE</td>
              </>
            )}
            <th>Action</th>
          </tr>
        </thead>
        {children}
        <tfoot>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            {icon !== "false" && <th>Icon</th>}
            {field === "field" && (
              <>
                <td>PLACE_HOLDER</td>
                <td>TYPE</td>
                <td>MAX</td>
                <td>MIN</td>
                <td>REQUIREED</td>
                <td>SEARCHED</td>
              </>
            )}
            {field === "elements" && (
              <>
                <td>ADDRESS</td>
                <td>APPROVED_ADMIN</td>
                <td>CITY_ID</td>
                <td>DESCRIPTION</td>
                <td>FACEBOOK</td>
                <td>INSTAGRAM</td>
                <td>TWITTER</td>
                <td>IMAGE</td>
                <td>LOGO</td>
                <td>NUMBER_OF_VISITORS</td>
                <td>CALLING</td>
                <td>PHONE_NUBMER</td>
                <td>TIME_OPEN</td>
                <td>WEB_SITE</td>
                <td>YOUTUBE</td>
              </>
            )}
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TableDesy;
