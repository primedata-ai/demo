import React from 'react';

const ProductInformation = () => {
  return (
    <div className="bor10 m-t-50 p-t-43 p-b-40">
      {/* Tab01 */}
      <div className="tab01">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item p-b-10">
            <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
          </li>
          <li className="nav-item p-b-10">
            <a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
          </li>
          <li className="nav-item p-b-10">
            <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content p-t-43">
          {/* - */}
          <div className="tab-pane fade show active" id="description" role="tabpanel">
            <div className="how-pos2 p-lr-15-md">
              <p className="stext-102 cl6">
                Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="tab-pane fade" id="information" role="tabpanel">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                <ul className="p-lr-28 p-lr-15-sm">
                  <li className="flex-w flex-t p-b-7">
                            <span className="stext-102 cl3 size-205">
                              Weight
                            </span>
                    <span className="stext-102 cl6 size-206">
                              0.79 kg
                            </span>
                  </li>
                  <li className="flex-w flex-t p-b-7">
                            <span className="stext-102 cl3 size-205">
                              Dimensions
                            </span>
                    <span className="stext-102 cl6 size-206">
                              110 x 33 x 100 cm
                            </span>
                  </li>
                  <li className="flex-w flex-t p-b-7">
                            <span className="stext-102 cl3 size-205">
                              Materials
                            </span>
                    <span className="stext-102 cl6 size-206">
                              60% cotton
                            </span>
                  </li>
                  <li className="flex-w flex-t p-b-7">
                            <span className="stext-102 cl3 size-205">
                              Color
                            </span>
                    <span className="stext-102 cl6 size-206">
                              Black, Blue, Grey, Green, Red, White
                            </span>
                  </li>
                  <li className="flex-w flex-t p-b-7">
                            <span className="stext-102 cl3 size-205">
                              Size
                            </span>
                    <span className="stext-102 cl6 size-206">
                              XL, L, M, S
                            </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                <div className="p-b-30 m-lr-15-sm">
                  {/* Review */}
                  <div className="flex-w flex-t p-b-68">
                    <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                      <img src="/images/avatar-01.jpg" alt="AVATAR" />
                    </div>
                    <div className="size-207">
                      <div className="flex-w flex-sb-m p-b-17">
                                <span className="mtext-107 cl2 p-r-20">
                                  Ariana Grande
                                </span>
                        <span className="fs-18 cl11">
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star-half" />
                                </span>
                      </div>
                      <p className="stext-102 cl6">
                        Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                      </p>
                    </div>
                  </div>
                  {/* Add review */}
                  <form className="w-full">
                    <h5 className="mtext-108 cl2 p-b-7">
                      Add a review
                    </h5>
                    <p className="stext-102 cl6">
                      Your email address will not be published. Required fields are marked *
                    </p>
                    <div className="flex-w flex-m p-t-50 p-b-23">
                              <span className="stext-102 cl3 m-r-16">
                                Your Rating
                              </span>
                      <span className="wrap-rating fs-18 cl11 pointer">
                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                <input className="dis-none" type="number" name="rating" />
                              </span>
                    </div>
                    <div className="row p-b-25">
                      <div className="col-12 p-b-5">
                        <label className="stext-102 cl3" htmlFor="review">Your review</label>
                        <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                      </div>
                      <div className="col-sm-6 p-b-5">
                        <label className="stext-102 cl3" htmlFor="name">Name</label>
                        <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                      </div>
                      <div className="col-sm-6 p-b-5">
                        <label className="stext-102 cl3" htmlFor="email">Email</label>
                        <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                      </div>
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductInformation;