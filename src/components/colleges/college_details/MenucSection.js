import React from 'react'
import bookMarkIcon from '../../../images/bookmark-icon.svg';
import getInIcon from '../../../images/get-in-icon.svg';
import brochureIcon from '../../../images/brochure-icon.svg';

export default function MenucSection() {
  return (
     <section class="courses-details-section clg-info-filter-badge-section pt-2">
         <div class="container">
            <div class="row mb-5">
               <div class="col-lg-6 col-md-12">
                  <div class="bookmark-badge-leftbox d-flex gap-3">
                     <a href="#" class="border-0 shadow-none">Approved by UGC</a>
                     <a href="#" class="border-0 shadow-none">Private College</a>
                     <a href="#" class="border-0 shadow-none">ESTD 1959</a>
                     <a href="#" class="border-0 shadow-none">NIRF Ranking - 1</a>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12">
                  <div class="padding-top d-flex justify-content-end align-items-center">
                     <div class="bookmark-badge-leftbox d-flex gap-3 me-3">
                        <a href="#"><img src={bookMarkIcon} alt="" />Save</a>
                     </div>
                     <div class="bookmark-badge-rightbox d-flex gap-3 justify-content-end">
                        <a href="#" class="yellow-bg"><img src={getInIcon} alt="" />Will you get in?</a>
                        <a href="#" class="green-bg"><img src={brochureIcon} alt="" />Brochure</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <div class="course-details-filtertab d-flex flex-wrap gap-3 mt-4">
                     <a href="#" class="active">College Info</a>
                     <a href="#" class="">News</a>
                     <a href="#" class="">Reviews (11)</a>
                     <a href="#" class="">Placements Admissions 2023</a>
                     <a href="#" class="">Cutoff</a>
                     <a href="#" class="">Gallery</a>
                     <a href="#" class="">Faculty</a>
                     <a href="#" class="">Awards</a>
                     <a href="#" class="">Alumni</a>
                     <a href="#" class="">Contact</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
