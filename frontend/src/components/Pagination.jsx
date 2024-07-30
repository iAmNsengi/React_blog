const Pagination = ({ blogs, pageSize, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNum) => (
        <li key={pageNum} className={pageNum == currentPage ? "active" : ""}>
          <a href="#" onClick={() => onPageChange(pageNum)}>
            {pageNum}{" "}
          </a>
        </li>
      )
    );
  };
  return (
    <div className="py-8">
      <ul className="flex gap-4">
        <li>
          <button>Previous</button>
        </li>
        <div className="flex gap-2">{renderPaginationLinks()} </div>
        <li>Next</li>
      </ul>{" "}
    </div>
  );
};

export default Pagination;
