import React, { useEffect } from "react";
import usePostsClassDepartment from "../../../hooks/usePosts";
import Row from "../../../Components/Row";
import TableDesy from "../../../Components/TableDesy";
import useDataStore from "../../../zustand/useData";
import { Link, useParams } from "react-router-dom";
const Posts = () => {
  const { classifiedid, classifiedDepartmentId } = useParams();
  const { loading, getPostsClassDepartment  } = usePostsClassDepartment();
  const { posts } = useDataStore();
  useEffect(() => {
    const handleClassified = async () => {
      await getPostsClassDepartment(classifiedDepartmentId);
    };
    handleClassified();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to={`/classifieds/${classifiedid}/classifiedsdepartments`}
      >
        GO BACK
      </Link>
      <div className="divider my-10 divider-info">CLASSIFIED DEPARTMENT POSTS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="false" field="posts">
          {posts?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="hideEdit"
              fatherId={classifiedDepartmentId}
            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Posts;
