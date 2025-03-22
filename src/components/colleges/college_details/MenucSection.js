import React from 'react';
import bookMarkIcon from '../../../images/bookmark-icon.svg';
import getInIcon from '../../../images/get-in-icon.svg';
import brochureIcon from '../../../images/brochure-icon.svg';
import { Link } from 'react-router-dom';

export default function MenucSection() {
  return (
    <section className="courses-details-section clg-info-filter-badge-section pt-2">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-12">
            <div className="bookmark-badge-leftbox d-flex gap-3">
              <Link className="border-0 shadow-none">Approved by UGC</Link>
              <Link className="border-0 shadow-none">Private College</Link>
              <Link className="border-0 shadow-none">ESTD 1959</Link>
              <Link className="border-0 shadow-none">NIRF Ranking - 1</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="padding-top d-flex justify-content-end align-items-center">
              <div className="bookmark-badge-leftbox d-flex gap-3 me-3">
                <Link>
                  <img src={bookMarkIcon} alt="" />
                  Save
                </Link>
              </div>
              <div className="bookmark-badge-rightbox d-flex gap-3 justify-content-end">
                <Link className="yellow-bg">
                  <img src={getInIcon} alt="" />
                  Will you get in?
                </Link>
                <Link className="green-bg">
                  <img src={brochureIcon} alt="" />
                  Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="course-details-filtertab d-flex flex-wrap gap-3 mt-4">
              <Link className="active">College Info</Link>
              <Link className="">News</Link>
              <Link className="">Reviews (11)</Link>
              <Link className="">Placements Admissions 2023</Link>
              <Link className="">Cutoff</Link>
              <Link className="">Gallery</Link>
              <Link className="">Faculty</Link>
              <Link className="">Awards</Link>
              <Link className="">Alumni</Link>
              <Link className="">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
