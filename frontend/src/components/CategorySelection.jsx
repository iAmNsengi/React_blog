const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="font-bold py-5 items-center flex border-b gap-4 text-gray-900 flex-wrap mb-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`mr-2 ${activeCategory ? "" : "active"}`}
      >
        ALL
      </button>{" "}
      |
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`mr-2 space-x-16 ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default CategorySelection;
