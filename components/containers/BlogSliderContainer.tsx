import React from 'react';
const BlogSliderContainer = (props: any) => {
  return (
    <React.Fragment>

      <section className="sec-blog bg0 p-t-60 p-b-90">
        <div className="container">
          <div className="p-b-66">
            <h3 className="ltext-105 cl5 txt-center respon1">
              Our Blogs
            </h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img src="images/blog-01.jpg" alt="IMG-BLOG" />
                  </a>
                </div>
                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">
                        By
                      </span>
                      <span className="cl5">
                        Nancy Ward
                      </span>
                    </span>
                    <span>
                      <span className="cl4">
                        on
                      </span>
                      <span className="cl5">
                        July 22, 2017
                      </span>
                    </span>
                  </div>
                  <h4 className="p-b-12">
                    <a href="blog-detail.html" className="mtext-101 cl2 hov-cl1 trans-04">
                      8 Inspiring Ways to Wear Dresses in the Winter
                    </a>
                  </h4>
                  <p className="stext-108 cl6">
                    Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img src="images/blog-02.jpg" alt="IMG-BLOG" />
                  </a>
                </div>
                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">
                        By
                      </span>
                      <span className="cl5">
                        Nancy Ward
                      </span>
                    </span>
                    <span>
                      <span className="cl4">
                        on
                      </span>
                      <span className="cl5">
                        July 18, 2017
                      </span>
                    </span>
                  </div>
                  <h4 className="p-b-12">
                    <a href="blog-detail.html" className="mtext-101 cl2 hov-cl1 trans-04">
                      The Great Big List of Men’s Gifts for the Holidays
                    </a>
                  </h4>
                  <p className="stext-108 cl6">
                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img src="images/blog-03.jpg" alt="IMG-BLOG" />
                  </a>
                </div>
                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">
                        By
                      </span>
                      <span className="cl5">
                        Nancy Ward
                      </span>
                    </span>
                    <span>
                      <span className="cl4">
                        on
                      </span>
                      <span className="cl5">
                        July 2, 2017
                      </span>
                    </span>
                  </div>
                  <h4 className="p-b-12">
                    <a href="blog-detail.html" className="mtext-101 cl2 hov-cl1 trans-04">
                      5 Winter-to-Spring Fashion Trends to Try Now
                    </a>
                  </h4>
                  <p className="stext-108 cl6">
                    Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};


export default BlogSliderContainer;