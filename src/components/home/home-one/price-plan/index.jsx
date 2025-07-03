import { useState } from "react";
import Icon5 from "../../../../assets/images/v1/icon5.png";
import Icon6 from "../../../../assets/images/v1/icon6.png";
import Icon7 from "../../../../assets/images/v1/icon7.png";
import featureIcon from "../../../../assets/images/v1/icon8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "All Inclusive Program Fee",
		price: 	{ id: 1, value: "95,000" },
		img: Icon7,
		features: [
			"Initial Payment (on Agreement) - $20,000",
			"Designated Org Admission - $31,000",
			"Letter of Support Ready - $30,000",
			"PR Application Submission - $14,000",
		],
		featureIcon,
		highlighted: true,
	},
];

function PricePlan() {

	return (
    <section className="section sofax-section-padding bg-light" id="pricing">
      <div className="container">
        <div className="sofax-section-title center pb-50">
          <div className="tg-heading-subheading animation-style3">
            <h2>Pricing </h2>
          </div>
        </div>

        <div className="row" id="table-price-value">
          {pricePlanData.map((pricing, index) => (
            <FadeInStagger
              key={pricing.id}
              index={index}
              className="col-md-6"
            >
              <PricingCard pricing={pricing} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricePlan;
