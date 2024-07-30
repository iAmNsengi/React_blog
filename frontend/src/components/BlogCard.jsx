import { Link } from "react-router-dom";
import { PropType } from "prop-types";
import { FaUser } from "react-icons/fa6";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => {
      return !selectedCategory || blogs.category === selectedCategory;
    })
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {filteredBlogs.map((blog) => {
          return (
            <Link key={blog.key} to={blog.id}>
              <div>
                <img src={blog.image} alt="" className="w-full" />
                <h2 className="mt-4 mb-2 font-bold hover:text-blue-500">
                  {blog.title}
                </h2>
                <p className="mb-2 text-gray-500 text-sm">
                  <FaUser className="inline-flex items-center mr-2 text-black" />{" "}
                  {blog.author}{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Published: {blog.published_date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

BlogCard.propTypes = {};

export default BlogCard;
