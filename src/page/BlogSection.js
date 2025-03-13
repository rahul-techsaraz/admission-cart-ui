import blogImage1 from '../images/blog-img1.png';
import blogImage2 from '../images/blog-user.svg';

const BlogSection = () => {
  return (
    <>
      <section className="blog-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-col">
                <h1 className="section-heading mb-0">Latest from the Blog</h1>
                <p className="section-subheading mb-5">I write about self development and more.</p>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <img src={blogImage1} className="pe-md-2" alt="" />
                  </div>
                  <div className="col-md-6">
                    <span className="blog-badge d-inline-block mb-4">ut labore</span>
                    <p className="latest-blog-title mb-4">Lorem ipsum dolor sit amet, conse ctetur adi piscing.</p>
                    <p className="latest-blog-userdetails d-flex align-items-center justify-content-between">
                      <img src={blogImage2} className="me-3" alt="" />
                      <span className="blog-user-name me-auto">Lorem ipsum</span>{' '}
                      <span className="latest-blogpost-date">02 Oct 2023</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={blogImage1} className="pe-md-2" alt="" />
                  </div>
                  <div className="col-md-6">
                    <span className="blog-badge d-inline-block mb-4">ut labore</span>
                    <p className="latest-blog-title mb-4">Lorem ipsum dolor sit amet, conse ctetur adi piscing.</p>
                    <p className="latest-blog-userdetails d-flex align-items-center justify-content-between">
                      <img src={blogImage2} className="me-3" alt="" />
                      <span className="blog-user-name me-auto">Lorem ipsum</span>{' '}
                      <span className="latest-blogpost-date">02 Oct 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-col upcoming-blog-col">
                <h1 className="section-heading mb-0">Upcoming Events</h1>
                <p className="section-subheading mb-5">I write about self development and more.</p>
                <div className="row mb-3">
                  <div className="col-4">
                    <div className="upcoming-blog-datesec d-flex flex-column text-center">
                      <span className="upcoming-blog-date position-relative">
                        <p>
                          20<span className="d-block">Oct</span>
                        </p>
                      </span>
                      <span className="upcoming-blog-year">2023</span>
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="upcoming-blog-title mb-4">SAT Implementation Workshops November 2023</p>
                    <p className="upcoming-blog-para">
                      Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard
                      dummy text ever since the 1500s, when an unknown printer.when an unknown printer took a galley of
                      type and scrambled…
                    </p>
                    <p className="upcoming-blog-time">11:00</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4">
                    <div className="upcoming-blog-datesec d-flex flex-column text-center">
                      <span className="upcoming-blog-date position-relative">
                        <p>
                          20<span className="d-block">Oct</span>
                        </p>
                      </span>
                      <span className="upcoming-blog-year">2023</span>
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="upcoming-blog-title mb-4">SAT Implementation Workshops November 2023</p>
                    <p className="upcoming-blog-para">
                      Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard
                      dummy text ever since the 1500s, when an unknown printer.when an unknown printer took a galley of
                      type and scrambled…
                    </p>
                    <p className="upcoming-blog-time">11:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogSection;
