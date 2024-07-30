import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <>
      <Banner title={"Blog"} />;{/* All blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </>
  );
};

export default Blogs;
