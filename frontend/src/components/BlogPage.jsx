import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs/`;
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  return (
    <div>
      {/* category section */}
      <div>Category</div>
      {/* Blog cards section */}
      <BlogCard blogs={blogs} />
      {/* pagination */}
      <div></div>
    </div>
  );
};

export default BlogPage;
