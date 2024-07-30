import Banner from "../components/Banner";

const Home = () => {
  return (
    <Banner
      title={`Welcome to nsenGiBlog!`}
      subtitle={`Start Your journey to mastering JavaScript! With our great community
            and other passionate learners currently online!`}
      buttonText={`Start Learning`}
    />
  );
};

export default Home;
