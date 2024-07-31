import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 7).map((blog) => {
            return (
              <div
                key={blog.id}
                className="border my-1 p-1 rounded hover:text-orange-400 hover:cursor-pointer"
              >
                <Link
                  to="/"
                  className="font-medium hover:text-orange-400 border py-1 px-4 rounded-lg inline-flex items-center mb-2 mt-2 text-sm"
                >
                  {" "}
                  <h4>{blog.title} </h4>
                  <FaArrowRight className="mt-1 ml-2 " />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="text-2xl font-semibold px-4 py-4">Popular Blogs</h3>
      <div>
        {popularBlogs.slice(8, 13).map((blog) => {
          return (
            <div
              key={blog.id}
              className="border my-1 p-1 rounded hover:text-orange-400 hover:cursor-pointer"
            >
              <Link
                to="/"
                className="font-medium hover:text-orange-400 border py-1 px-4 rounded-lg inline-flex items-center mb-2 mt-2 text-sm"
              >
                {" "}
                <h4>{blog.title} </h4>
                <FaArrowRight className="mt-1 ml-2 " />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
