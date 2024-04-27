import React from "react";
const TableDesy = ({ children, icon }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {icon !== "false" && <th>Icon</th>}
            <th>Action</th>
          </tr>
        </thead>
        {children}
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {icon !== "false" && <th>Icon</th>}
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TableDesy;
