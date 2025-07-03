import { Link } from "react-router-dom";

function FeatureCard({ feature: { title, description, image } }) {
  return (
    <>
      <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
        <div className="sofax-features-boxv6">
          <div className="sofax-features-imgv6">
            <img src={image} alt="Thumb" />
          </div>
          <div className="sofax-features-author-data">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default FeatureCard;
