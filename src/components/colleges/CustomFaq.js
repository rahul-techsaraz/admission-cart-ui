import React, { useState } from 'react';
import constants from '../../utils/Constants/constants';

export default function CustomFaq() {
  const [tabIndex, setTabIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handleClick = (index) => {
    if (index === tabIndex) {
      setShow(!show);
    } else {
      setTabIndex(index);
      setShow(true);
    }
  };
  return (
    <section className="faq-section position-relative pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="faq-heading text-center">Frequently Asked Questions</h2>
            <div className="accordion faq-accordion-wrapper">
              {constants.faqData.map((data, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-button-mystyle" onClick={() => handleClick(index)}>
                    {data.question}
                    <span className="up-down-arrow">
                      <i
                        className={
                          index === tabIndex && show ? 'fa-solid fa-angle-up fa-lg' : 'fa-solid fa-angle-down fa-lg'
                        }
                      />
                    </span>
                  </div>

                  <div
                    className={
                      index === tabIndex && show
                        ? 'accordion-collapse collapse show'
                        : 'accordion-collapse collapse hide'
                    }
                  >
                    <div className="accordion-body">{data.answer}</div>
                  </div>
                </div>
              ))}

              <button className="theme-btn black-btn mt-5">Request for a Callback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
