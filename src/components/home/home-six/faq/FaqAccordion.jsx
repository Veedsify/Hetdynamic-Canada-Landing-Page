import Icon from "../../../../assets/images/v2/icon9.png";
function FaqAccordion() {
	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							What everybody ought to knoe about digital?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							How do you approach strategic planning?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							ake a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							Is there a guaranteed result?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							What services does Sofax provide?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion3"
					>
						<div className="accordion-body sofax-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							What services does Sofax provide?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							What is a strategic to block?
						</button>
						<div className="accordion-icon">
							<img src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
