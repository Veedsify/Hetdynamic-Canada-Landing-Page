import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/member1.png";
import Thumb2Img from "../../../../assets/images/v1/member2.png";
import Thumb3Img from "../../../../assets/images/v1/member3.png";
import TestimonialCard from "./TestimonialCard";
//

const testimonialOneData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Exceptional service and outstanding results! This platform has transformed our business operations and exceeded all expectations. Highly recommend to anyone looking for reliable solutions.",
    author: "Chukwuma Okafor",
    designation: "Co-Founder",
    img: "https://www.true.physio/wp-content/uploads/2025/05/Chijoke-Okafor.png",
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    description:
      "Professional team with excellent customer support. They delivered exactly what was promised and helped us achieve our goals efficiently. Great value for money.",
    author: "Adebayo Adeyemi",
    designation: "Private Investor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoAFm5g30-H9JZXbPoqxUkXDz4uR3X9P1wg&s",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Outstanding quality and seamless integration. The platform is user-friendly and has significantly improved our workflow. Customer service is top-notch and always responsive.",
    author: "Ngozi Okonkwo",
    designation: "Web Developer",
    img: "https://cdn.vanderbilt.edu/vu-web/owen/files/people-2551-ChiOkafur-20240716140805.png",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Game-changer for our business! The features are comprehensive and the results speak for themselves. We've seen tremendous growth since implementing this solution.",
    author: "Emeka Nwosu",
    designation: "Co-Founder",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YPOOyxwIZ2wQocBJrkjnHop-e29zl-SvtQ&s",
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    description:
      "Reliable, efficient, and cost-effective. The team was professional throughout the entire process and delivered on time. Would definitely use their services again.",
    author: "Folake Adebisi",
    designation: "Enterpreneur",
    img: "https://i1.rgstatic.net/ii/profile.image/11431281189948037-1695214523179_Q512/Folake-Owodunni.jpg",
  },
];

const testimonialTwoData = [
  {
    id: crypto.randomUUID(),
    rating: 4,
    description:
      "Impressive results from day one. The platform is intuitive and the support team is knowledgeable. Has made a significant positive impact on our business operations.",
    author: "Kemi Babatunde",
    designation: "Co-Founder",
    img: "https://cdn.pmnewsnigeria.com/wp-content/uploads/2022/03/Kemi-Afolabi-.jpg",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Best investment we've made for our company. The service quality is exceptional and the features are exactly what we needed. Highly satisfied with the results.",
    author: "Olumide Fashola",
    designation: "Project Manager",
    img: "https://societynow.ng/wp-content/uploads/2023/08/tempFileForShare_20230801-165842.jpg",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Fantastic experience from start to finish. The team understood our requirements perfectly and delivered beyond expectations. Would recommend to other businesses.",
    author: "Chioma Okechukwu",
    designation: "Business Woman",
    img: "https://amsa.com.ng/wp-content/uploads/2023/03/Olumide-Omoyele-840x840.png",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    description:
      "Professional service with excellent attention to detail. The platform has streamlined our processes and improved efficiency across all departments.",
    author: "Tunde Ajayi",
    designation: "Co-Founder",
    img: "https://www.banwo-ighodalo.com/media-files/2023/07/Olumide-Osundolire-1.jpg",
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    description:
      "Great product with solid support. Easy to implement and integrate with our existing systems. The ROI has been impressive and continues to grow.",
    author: "Amaka Eze",
    designation: "Marketer",
    img: "https://www.efdinitiative.org/sites/default/files/styles/headshot/public/headshots/Amaka%20efd.jpg?itok=pVF4vhBu",
  },
];

const swiperSettingsOne = {
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1536: {
      slidesPerView: 4,
    },
  },
};
const swiperSettingsTwo = {
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1536: {
      slidesPerView: 4,
    },
  },
};
function Testimonial() {
  return (
    <section className="sofax-section-padding2" id="testimonial">
      <div className="container">
        <div className="sofax-section-title center">
          <div className="tg-heading-subheading animation-style3">
            <h2>See what our users have to say about it</h2>
          </div>
        </div>
      </div>
      <div className="sofax-testimonial-slider">
        <Swiper {...swiperSettingsOne}>
          {testimonialOneData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sofax-testimonial-slider-2">
        <Swiper {...swiperSettingsTwo}>
          {testimonialTwoData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
