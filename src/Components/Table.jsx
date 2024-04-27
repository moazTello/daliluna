import React from "react";
import useDataStore from "../zustand/useData";
const Table = () => {
  const { classifieds } = useDataStore();
  return (
    <div className="flex flex-col justify-start items-center">
      {classifieds.length !== 0 &&
        classifieds.map((item, index) => (
          <>
            <div
              key={index}
              className="flex justify-between w-full p-5 items-center border-slate-400 border-solid border-2"
            >
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item?.description}</p>
              <p>
                <img
                  className="w-16 h-16 m-5 rounded-full"
                  src={item.icon}
                  alt="icon"
                />
              </p>
            </div>
          </>
        ))}
    </div>
  );
};
export default Table;
