import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-44 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-5 font-primary">
          Welcome to nsenGi<span className="text-orange-400">Blog</span>!
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Start Your journey to mastering JavaScript! With our great community
          and other passionate learners currently online!
        </p>
        <div>
          <Link
            to="/"
            className="font-medium hover:text-orange-400 bg-gray-700 py-2 px-6 rounded-lg inline-flex items-center mt-4"
          >
            {" "}
            Start Learning
            <FaArrowRight className="mt-1 ml-2 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
