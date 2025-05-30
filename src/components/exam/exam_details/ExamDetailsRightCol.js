import React from 'react';
import { Link } from 'react-router-dom';

export default function ExamDetailsRightCol({ examDetails }) {
  return (
    <div className="col-md-3">
      <aside id="exam_details_rightcol" className="exam-details-rightcol">
        <div className="accordion" id="quicklink_accordion">
          <div className="accordion-item border-0">
            <h2 id="quicklinkHeadingFirst" className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quicklinkCollapseFirst"
                aria-expanded="true"
                aria-controls="quicklinkCollapseFirst"
              >
                {' '}
                Quick Links{' '}
              </button>
            </h2>
            <div
              id="quicklinkCollapseFirst"
              className="accordion-collapse collapse show"
              aria-labelledby="quicklinkHeadingFirst"
              data-bs-parent="#quicklink_accordion"
            >
              <div className="accordion-body p-0">
                <div className="quicklink-filter">
                  <ul className="quicklink-list">
                    <li>
                      <Link>
                        <span></span> Lorem ipsum dolor sit{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Amet consectetur adipiscing{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Elit sed do eiusmod tempor{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Veniam quis nostrud exercitation{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Incididunt ut labore et dolore{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Commodo consequatuis auteirure{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Magna aliquat enim ad minim{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Velit esse cillum dolore eu fugiat{' '}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span></span> Ullamco laboris nisiut aliquip exea{' '}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
