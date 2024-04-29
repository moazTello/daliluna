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
            {field === 'field' && <><td>placeholder</td>
            <td>type</td>
            <td>max</td>
            <td>min</td>
            <td>required</td>
            <td>searched</td></>}
            <th>Action</th>
          </tr>
        </thead>
        {children}
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {icon !== "false" && <th>Icon</th>}
            {field === 'field' && <><td>placeholder</td>
            <td>type</td>
            <td>max</td>
            <td>min</td>
            <td>required</td>
            <td>searched</td></>}
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TableDesy;
