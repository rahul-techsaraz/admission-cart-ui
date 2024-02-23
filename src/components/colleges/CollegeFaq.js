import React from 'react'

export default function CollegeFaq() {
  return (
    <section className="faq-section position-relative pt-50 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="faq-heading text-center">Frequently Asked Questions</h2>
                    <div className="accordion faq-accordion-wrapper " id="faqAccordionRobots">
                        <div className="accordion-item">
                          <h2 id="regularHeadingFirst" className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="true" aria-controls="regularCollapseFirst">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                            </button>
                          </h2>
                          <div id="regularCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="regularHeadingFirst" data-bs-parent="#faqAccordionRobots">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                          </div>
                        </div>
                      
                        <div className="accordion-item">
                            <h2 id="regularHeadingSecond" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseSecond" className="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 id="regularHeadingThird" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseThird" aria-expanded="false" aria-controls="regularCollapseFirst">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseThird" className="accordion-collapse collapse" aria-labelledby="regularHeadingThird" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 id="regularHeadingFourth" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFourth" aria-expanded="false" aria-controls="regularCollapseFourth">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseFourth" className="accordion-collapse collapse" aria-labelledby="regularHeadingFourth" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <button className="theme-btn black-btn mt-5">Request for a Callback</button>
                      
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}
