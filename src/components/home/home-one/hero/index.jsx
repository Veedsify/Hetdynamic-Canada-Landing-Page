import { toast } from "sonner";
import Rattingful from "../../../../assets/images/v1/rattingful.svg";
import Rattinghalf from "../../../../assets/images/v1/rattinghalf.svg";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import { useState } from "react";
import PocketBase from "pocketbase";
const pb = new PocketBase("https://pocket.hetdynamic.com");
function HeroSection() {
  const [email, setEmail] = useState("");
  const acceptedEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "live.com",
  ];
  async function SaveEmail(email) {
    // example create data
    try {
      const data = {
        email: email,
        service: "Canada Residency Permit for Entrepreneurs",
      };

      const record = await pb.collection("Emails").create(data);

      if (record.id) {
        toast.loading("Thanks, redirecting to Calendly");
        window.location.href =
          "https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs";
      } else {
        toast.error("Email already exists");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save email. Please try again.");
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || email.trim() === "") {
      toast.error("Please enter an email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!acceptedEmailDomains.some((domain) => email.endsWith(domain))) {
      toast.error(
        `Please use a valid email domain (e.g., ${acceptedEmailDomains.join(", ")})`,
      );
      return;
    }
    // Handle the email submission logic here
    await SaveEmail(email);
    console.log("Email submitted:", email);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <div className="sofax-hero-section overflow-hidden" id="hero">
      <div className="container">
        <HeroContent />
        <div className="sofax-subscription-field blog-details-subscribe-btn">
          <input
            type="email"
            placeholder="Enter your email "
            onChange={handleEmailChange}
          />
          <button
            onClick={handleSubmit}
            id="sofax-subscription-btn"
            type="submit"
          >
            Get Started Now
          </button>
        </div>
        <div className="sofax-rating-icon">
          <ul>
            <li>
              <img src={Rattingful} alt="Rating" />
            </li>
            <li>
              <img src={Rattingful} alt="Rating" />
            </li>
            <li>
              <img src={Rattingful} alt="Rating" />
            </li>
            <li>
              <img src={Rattingful} alt="Rating" />
            </li>
            <li>
              <img src={Rattinghalf} alt="Rating" />
            </li>
            <li>4.8/5 rating trusted by users</li>
          </ul>
        </div>
        <HeroThumbs />
      </div>
    </div>
  );
}

export default HeroSection;
