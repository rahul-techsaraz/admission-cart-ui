import React, { useState } from 'react';

export default function ApplyFilter({ isSearchBar, inputField, label }) {
  const [isShowAccordian, setShowAccordian] = useState(true);
  return (
    <div>
      <div className="accordion-item border-0">
        <h2 id="durationHeadingFirst" className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#durationCollapseFirst"
            aria-expanded="true"
            aria-controls="durationCollapseFirst"
            onClick={() => setShowAccordian(!isShowAccordian)}
          >
            {label}
          </button>
        </h2>
        <div
          id="durationCollapseFirst"
          className={`accordion-collapse collapse ${isShowAccordian ? 'show' : 'hide'}`}
          aria-labelledby="durationHeadingFirst"
          data-bs-parent="#duration_accordion"
        >
          <div className="accordion-body p-0">
            <div className="duration-filter">
              {isSearchBar && (
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control stream-search-field search-field mb-4"
                    placeholder="Search"
                  />
                </div>
              )}
              {inputField.map((inputData, index) => (
                <div className="form-group" key={inputData.label + index}>
                  <input type="checkbox" id={`duration-filter${index}`} />
                  <label htmlFor={`duration-filter${index}`}>
                    {inputData.label}
                    <span>({inputData.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
