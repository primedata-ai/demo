import { useTranslation } from 'next-i18next';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {IHeader, IMenuItem} from "../interface/IHeader";

const Header = (props: IHeader) => {
  const {menuActive} = props;
  const {t} = useTranslation();
  const router = useRouter();
  const {pathname, query, asPath, locale} = router;
  const [menu,] = useState<IMenuItem[]>([
    {
      id: "index",
      link: "/home",
      name: "header.texts.home",
      children: [
        {
          id: "home1",
          link: "/",
          name: "header.texts.home",
        },
        {
          id: "home2",
          link: "/home",
          name: "header.texts.home",
        },
        {
          id: "home3",
          link: "/home-new",
          name: "header.texts.home",
        }
      ]
    },
    {
      id: "products",
      link: "/products",
      name: "header.texts.shop",
    },
    {
      id: "cart",
      link: "/cart",
      name: "header.texts.cart",
    },
    {
      id: "blog",
      link: "/blog",
      name: "header.texts.blog",
    },
    {
      id: "about",
      link: "/about",
      name: "header.texts.about",
    },
    {
      id: "contact",
      link: "/contact",
      name: "header.texts.contact",
    },
  ]);

  const switchLanguage = (nextLocale: string): void => {
    router.push({pathname, query}, asPath, {locale: nextLocale})
  }

  return (
    <header className={props?.className ? props.className : ""}>
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              {t("header.texts.free_shipping")}
            </div>
            <div className="right-top-bar flex-w h-full">
              <a href="./admin/public/index.html" className="flex-c-m trans-04 p-lr-25">
                {t("header.texts.admin")}
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                {t("header.texts.help_faqs")}
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                {t("header.texts.my_account")}
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25 pos-relative lang-menu">
                <span>{locale?.toUpperCase()}</span>
                <ul className="menu-hover">
                  <li className="sub-menu-hover">
                    <span onClick={() => switchLanguage("vi")}>VI</span>
                  </li>
                  <li className="sub-menu-hover" onClick={() => switchLanguage("en")}>EN</li>
                </ul>
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <a href="/" className="logo">
              <img src="/images/icons/logo-01.png" alt="IMG-LOGO"/>
            </a>

            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                {
                  menu.map((menuItem: IMenuItem) => {
                    return (
                      <li key={menuItem.id} className={menuItem.id === menuActive ? "active-menu" : ""}>
                        <a href={menuItem.link}>{t(menuItem.name)}</a>

                        {(menuItem?.children) &&
                          <ul className="sub-menu">
                            {
                              menuItem?.children?.map((child: IMenuItem) => {
                                return (
                                  <li key={child.id}><a href={child.link}>{t(child.name)}</a></li>
                                )
                              })
                            }
                          </ul>
                        }

                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search"/>
              </div>
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                   data-notify={2}>
                <i className="zmdi zmdi-shopping-cart"/>
              </div>
              <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                 data-notify={0}>
                <i className="zmdi zmdi-favorite-outline"/>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <a href="/"><img src="/images/icons/logo-01.png" alt="IMG-LOGO"/></a>
        </div>
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search"/>
          </div>
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
               data-notify={2}>
            <i className="zmdi zmdi-shopping-cart"/>
          </div>
          <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
             data-notify={0}>
            <i className="zmdi zmdi-favorite-outline"/>
          </a>
        </div>
        {/* Button show menu */}
        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"/>
            </span>
        </div>
      </div>
      {/* Menu Mobile */}
      <div className="menu-mobile">
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
          </li>
          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                Help &amp; FAQs
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                USD
              </a>
            </div>
          </li>
        </ul>
        <ul className="main-menu-m">

          {
            menu.map((menuItem: IMenuItem) => {
              return (
                <li key={menuItem.id}>
                  <a href={menuItem.link}>{t(menuItem.name)}</a>

                  {(menuItem?.children) &&
                    <ul className="sub-menu-m">
                      {
                        menuItem?.children?.map((child: IMenuItem) => {
                          return (
                            <li key={child.id}><a href={child.link}>{t(child.name)}</a></li>
                          )
                        })
                      }
                    </ul>
                  }

                  {(menuItem?.children) && (
                    <span className="arrow-main-menu-m">
                      <i className="fa fa-angle-right" aria-hidden="true"/>
                    </span>
                  )}

                </li>
              )
            })
          }
        </ul>
      </div>
      {/* Modal Search */}
      <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div className="container-search-header">
          <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
            <img src="/images/icons/icon-close2.png" alt="CLOSE"/>
          </button>
          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search"/>
            </button>
            <input className="plh3" type="text" name="search" placeholder="Search..."/>
          </form>
        </div>
      </div>

    </header>
  );
};

export default Header;