import ServiceCard from "./ServiceCard";
const servicesData = [
  {
    id: 1,
    title: "Day 1: Profile Analysis",
    description:
      "Conducting a comprehensive analysis of your business profile to identify strengths, weaknesses, and opportunities for growth in the Canadian market.",
  },
  {
    id: 2,
    title: "Week 1: Business Idea Confirmation",
    description:
      "Validating your business idea through market research and feasibility studies to ensure it aligns with Canadian market needs and has strong potential for success.",
  },
  {
    id: 3,
    title: "Week 3: Immigration Application Submission",
    description:
      "Preparing and submitting your complete immigration application with all required documentation, ensuring compliance with Canadian immigration requirements and maximizing approval chances.",
  },
  {
    id: 4,
    title: "Month 3: Letter of Support",
    description:
      "Securing official letters of support from designated organizations and business incubators to strengthen your immigration application and demonstrate local backing for your venture.",
  },
  {
    id: 5,
    title: "Business Development & Support",
    description:
      "Providing ongoing business development assistance including mentorship, networking opportunities, operational guidance, and strategic planning to ensure your business thrives in Canada.",
  },
  {
    id: 6,
    title: "PR Approval in 24 Months",
    description:
      "Successfully obtaining your Permanent Residence status within 1-2 years through our proven process, giving you full rights to live, work, and build your business permanently in Canada.",
  },
];
function Services() {
  return (
    <section className="section sofax-section-padding2 bg-light" id="service">
      <div className="container">
        <div className="sofax-section-title center max-width-large">
          <div className="tg-heading-subheading animation-style3">
            <h2>Here’s How It Works</h2>
          </div>
        </div>

        <div className="sofax-service-table-wrap">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
