import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* category section */}
      <CategorySelection
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
        activeCategory={activeCategory}
      />

      {/* Blog cards section */}
      <BlogCard
        blogs={blogs}
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        pageSize={pageSize}
      />
      {/* pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
