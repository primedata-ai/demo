import React, {useEffect} from 'react';
import {add_to_cart, view_product_details} from "lib/track";
import {useQuery} from "react-query";
import {getProductById} from "services/ProductService";
import {PLoading} from "components/elements/PLoading";
import SocialNetwork from "components/containers/SocialNetwork";
import RelatedProducts from "components/containers/RelatedProducts";
import ProductInformation from "components/containers/ProductInformation";
import {formatNumber} from "services/utils/FormatUtils";
import {addToCart} from "services/CartService";

const ProductDetailSection = (props: any) => {
  const {data: product, isLoading} = useQuery(["getProductDetailById"], () => getProductById(props.slug));

  useEffect(() => {
    product && view_product_details(product.data)
  }, [product])

  if (isLoading) return <PLoading/>


  const addProductToCart = () => {
    addToCart(product?.data)
    add_to_cart( product?.data)
  }

  return (
    <React.Fragment>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots"/>
                  <div className="wrap-slick3-arrows flex-sb-m flex-w"/>
                  <div className="slick3 gallery-lb">
                    <div className="item-slick3" data-thumb="/images/product-detail-01.jpg">
                      <div className="wrap-pic-w pos-relative">
                        <img src="/images/product-detail-01.jpg" alt="IMG-PRODUCT"/>
                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                           href="/images/product-detail-01.jpg">
                          <i className="fa fa-expand"/>
                        </a>
                      </div>
                    </div>
                    <div className="item-slick3" data-thumb="/images/product-detail-02.jpg">
                      <div className="wrap-pic-w pos-relative">
                        <img src="/images/product-detail-02.jpg" alt="IMG-PRODUCT"/>
                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                           href="/images/product-detail-02.jpg">
                          <i className="fa fa-expand"/>
                        </a>
                      </div>
                    </div>
                    <div className="item-slick3" data-thumb="/images/product-detail-03.jpg">
                      <div className="wrap-pic-w pos-relative">
                        <img src="/images/product-detail-03.jpg" alt="IMG-PRODUCT"/>
                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                           href="/images/product-detail-03.jpg">
                          <i className="fa fa-expand"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product?.data.name}
                </h4>
                <span className="mtext-106 cl2">
                    {formatNumber(product?.data.price)} VNĐ
                  </span>
                <p className="stext-102 cl3 p-t-23">
                  {product?.data.description}
                </p>
                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">
                      Size
                    </div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div className="dropDownSelect2"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">
                      Color
                    </div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                        <div className="dropDownSelect2"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-minus"/>
                        </div>
                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product"
                               defaultValue={1}/>
                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-plus"/>
                        </div>
                      </div>
                      <button
                        onClick={addProductToCart}
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <SocialNetwork/>
              </div>
            </div>
          </div>
          <ProductInformation/>
        </div>
        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
            <span className="stext-107 cl6 p-lr-25">
              SKU: JAK-01
            </span>
          <span className="stext-107 cl6 p-lr-25">
              Categories: Jacket, Men
            </span>
        </div>
      </section>
      <RelatedProducts/>
    </React.Fragment>
  )
}

export default ProductDetailSection;