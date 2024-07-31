const Pagination = ({ blogs, pageSize, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNum) => (
        <li
          key={pageNum}
          className={pageNum == currentPage ? "active activeContainer" : ""}
        >
          <a
            href="#"
            onClick={() => onPageChange(pageNum)}
            className={"py-1 px-4 border"}
          >
            {pageNum}{" "}
          </a>
        </li>
      )
    );
  };
  return (
    <div className="py-8">
      <ul className="flex gap-4 items-center mx-auto w-max py-6">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-slate-800  text-white py-2 px-4"
          >
            Previous
          </button>
        </li>
        <div className="flex gap-2">{renderPaginationLinks()} </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageSize - 1}
          className="bg-slate-800  text-white py-2 px-4"
        >
          Next
        </button>
      </ul>{" "}
    </div>
  );
};

export default Pagination;
