import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Banner = (props) => {
  return (
    <div className="px-4 py-44 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-5 font-primary">
          {props.title}
        </h1>
        {props.subtitle ? (
          <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
            {props.subtitle}
          </p>
        ) : (
          ""
        )}

        {props.buttonText ? (
          <div>
            <Link
              to="/"
              className="font-medium hover:text-orange-400 bg-gray-700 py-2 px-6 rounded-lg inline-flex items-center mt-4"
            >
              {" "}
              {props.buttonText}
              <FaArrowRight className="mt-1 ml-2 " />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
};
export default Banner;
