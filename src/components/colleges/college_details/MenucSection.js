import React from 'react';
import bookMarkIcon from '../../../images/bookmark-icon.svg';
import getInIcon from '../../../images/get-in-icon.svg';
import brochureIcon from '../../../images/brochure-icon.svg';
import { Link } from 'react-router-dom';

export default function MenucSection() {
  return (
    <section class="courses-details-section clg-info-filter-badge-section pt-2">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6 col-md-12">
            <div class="bookmark-badge-leftbox d-flex gap-3">
              <Link class="border-0 shadow-none">Approved by UGC</Link>
              <Link class="border-0 shadow-none">Private College</Link>
              <Link class="border-0 shadow-none">ESTD 1959</Link>
              <Link class="border-0 shadow-none">NIRF Ranking - 1</Link>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="padding-top d-flex justify-content-end align-items-center">
              <div class="bookmark-badge-leftbox d-flex gap-3 me-3">
                <Link>
                  <img src={bookMarkIcon} alt="" />
                  Save
                </Link>
              </div>
              <div class="bookmark-badge-rightbox d-flex gap-3 justify-content-end">
                <Link class="yellow-bg">
                  <img src={getInIcon} alt="" />
                  Will you get in?
                </Link>
                <Link class="green-bg">
                  <img src={brochureIcon} alt="" />
                  Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="course-details-filtertab d-flex flex-wrap gap-3 mt-4">
              <Link class="active">College Info</Link>
              <Link class="">News</Link>
              <Link class="">Reviews (11)</Link>
              <Link class="">Placements Admissions 2023</Link>
              <Link class="">Cutoff</Link>
              <Link class="">Gallery</Link>
              <Link class="">Faculty</Link>
              <Link class="">Awards</Link>
              <Link class="">Alumni</Link>
              <Link class="">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
