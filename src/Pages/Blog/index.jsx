import React, { useEffect } from "react";
import useDataStore from "../../zustand/useData";
import useBlog from "../../hooks/useBlog";
import Row from "../../Components/Row";
import TableDesy from "../../Components/TableDesy";
import { Link } from "react-router-dom";
const Blog = () => {
  const { getBlogs, loading } = useBlog();
  const { blogs } = useDataStore();
  useEffect(() => {
    const handleBlog = async () => {
      await getBlogs();
    };
    handleBlog();
  }, []);
  return (
    <div className="w-full bg-base-100 pt-10">
      <Link
        className="btn btn-primery bg-blue-500 text-white"
        to="/blogs/addblog"
      >
        ADD NEW BLOG
      </Link>
      <div className="divider my-10 divider-info">BLOGS</div>
      {loading ? (
        <p className="loading loading-spinner bg-blue-600"></p>
      ) : (
        <TableDesy icon="true">
          {blogs?.map((item, index) => (
            <Row
              key={index}
              content={item}
              hr1="none"
              hr2="none"
              hr3="none"
              hr4="EDIT BLOG"
              trash="none"

            />
          ))}
        </TableDesy>
      )}
    </div>
  );
};
export default Blog;
