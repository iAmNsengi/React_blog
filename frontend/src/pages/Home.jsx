import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

const Home = () => {
  return (
    <>
      <Banner
        title={`Welcome to nsenGiBlog!`}
        subtitle={`Start Your journey to mastering JavaScript! With our great community
            and other passionate learners currently online!`}
        buttonText={`Start Learning`}
      />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </>
  );
};

export default Home;
