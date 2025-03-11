import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  useEffect(() => {
    // Ensure Bootstrap dropdown works
    const dropdownButtons = document.querySelectorAll(".dropdown-toggle");
    dropdownButtons.forEach((button) => {
      new bootstrap.Dropdown(button);
    });
  }, []);
    return (
        <div >
            <div id="top">
                <div className="container">
                    <div className="top-left">
                        <div className="contact-info">
                            <a href="tel:+1(123)8425733">
                                <i className="fa fa-phone"></i>
                                <span className="">+1 (123) 8425733</span>
                            </a>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="pull-left">
                            <form method="post" id="form-currency">
                                <div className="btn-group">
                                    <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                        <span className="symbol">$</span>
                                        <span className="drop-text">Currency</span>
                                        <span className="code">USD</span>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu currency-dropdown dropdown-menu-right top_dropdown-menu-right">
                                        <li>
                                            <button className="currency-select btn btn-link btn-block" type="button" name="EUR">€
                                                Euro</button>
                                        </li>
                                        <li>
                                            <button className="currency-select btn btn-link btn-block" type="button" name="GBP">£
                                                Pound Sterling</button>
                                        </li>
                                        <li>
                                            <button className="currency-select btn btn-link btn-block" type="button" name="USD">$ US
                                                Dollar</button>
                                        </li>
                                    </ul>
                                </div>
                                <input type="hidden" name="code" value="" />
                                    <input type="hidden" name="redirect" />
                                    </form>
                                </div>
                                <div className="pull-left">
                                    <form method="post" id="form-language">
                                        <div className="btn-group">
                                            <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">

                                                <img src="assets/images/en-gb.png" alt="English" title="English" className="language-img" />
                                                    <span className="drop-text">Language</span>
                                                    <span className="code">en-gb</span>
                                                    <i className="fa fa-angle-down"></i>
                                            </button>
                                            <ul className="dropdown-menu language-dropdown dropdown-menu-right">
                                                <li>
                                                    <button className="btn btn-link btn-block language-select" type="button" name="en-gb"><img src="assets/images/en-gb.png" alt="English" title="English" />
                                                        English</button>
                                                </li>
                                                <li>
                                                    <button className="btn btn-link btn-block language-select" type="button" name="ar"><img src="assets/images/ar.png" alt="Arabic" title="Arabic" />
                                                        Arabic</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="hidden" name="code" value="" />
                                            <input type="hidden" name="redirect" value="" />
                                            </form>
                                        </div>
                                        <div id="top-links" className="nav pull-right hidden">
                                            <ul className="list-inline">
                                                <li className="hidden">
                                                    <a href="index.html#" id="wishlist-total" title="Wish List (0)">
                                                        <i className="fa fa-heart"></i><span className="hidden-xs hidden-sm hidden-md">Wish List
                                                            (0)</span>
                                                    </a>
                                                </li>
                                                <li className="hidden">
                                                    <a href="index.html#" title="Shopping Cart">
                                                        <i className="fa fa-shopping-cart"></i><span className="hidden-xs hidden-sm hidden-md">Shopping
                                                            Cart</span>
                                                    </a>
                                                </li>
                                                <li className="hidden">
                                                    <a href="index.html#" title="Checkout">
                                                        <i className="fa fa-share"></i><span className="hidden-xs hidden-sm hidden-md">Checkout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                        </div>
                    </div>
                    <header>
                        <div className="container">
                            <div className="header-inner">
                                <div className="header-left">
                                    <div id="logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo.png" title="Your Store" alt="Your Store" className="img-responsive" />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-center">
                                    <div className="vipodha_megamenu-style-dev">
                                        <div className="responsive vipodha_default">

                                            <div className="navbar-default">
                                                <div className=" container-vipodha_megamenu   horizontal ">
                                                    <div className="navbar-header">
                                                        <button type="button" id="show-vipodha_megamenu" data-toggle="collapse" className="navbar-toggle">
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                        </button>
                                                    </div>

                                                    <div className="vipodha_megamenu-wrapper megamenu_typeheader">

                                                        <span id="remove-vipodha_megamenu" className="fa fa-times"></span>

                                                        <div className="vipodha_megamenu-pattern">
                                                            <div className="container">
                                                                <ul className="vipodha_megamenu" data-megamenuid="55" data-transition="slide" data-animationtime="500">

                                                                    <li className="home current-active active-first">
                                                                        <a href="index.html">
                                                                            <span><strong> Home </strong></span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="with-sub-menu click">
                                                                        <p className="close-menu"></p>
                                                                        <a href="https://narisareehtml.vipodhasolution.com/shop.html" className="clearfix">
                                                                            <strong>
                                                                                Shop
                                                                            </strong>
                                                                            <b className="fa fa-angle-down"></b>
                                                                        </a>
                                                                        <div className="sub-menu">
                                                                            <div className="content">
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        <div className="categories hot">
                                                                                            <div className="row">
                                                                                                <div className="col-sm-4 static-menu">
                                                                                                    <div className="menu">
                                                                                                        <ul>
                                                                                                            <li><a href="category.html" className="main-menu">Banarasi Saree</a>
                                                                                                                <ul style={{listStyle: "square"}}>
                                                                                                                    <li><a href="category.html">Net Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Kasavu Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Patola Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Paithani Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Bandhani Saree</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-4 static-menu">
                                                                                                    <div className="menu">
                                                                                                        <ul>
                                                                                                            <li><a href="category.html" className="main-menu"> Chanderi Saree</a>
                                                                                                                <ul style={{listStyle: "square"}}>
                                                                                                                    <li><a href="category.html">Gadwal Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Clove</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Phulkari Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Puttapaka Saree</a>
                                                                                                                    </li>
                                                                                                                    <li><a href="category.html">Konard Saree</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-4 static-menu">
                                                                                                    <div className="menu">
                                                                                                        <img alt="" className="img-responsive mw-100" src="assets/images/megamenu/1.png" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="with-sub-menu click">
                                                                        <p className="close-menu"></p>
                                                                        <a href="index.html#" className="clearfix">
                                                                            <strong>
                                                                                Categories
                                                                            </strong>
                                                                            <b className="fa fa-angle-down"></b>
                                                                        </a>
                                                                        <div className="sub-menu">
                                                                            <div className="content">
                                                                                <div className="row sub_sub_menu">
                                                                                    <div className="col-sm-4">
                                                                                        <div className="megamenu-product-list">
                                                                                            <span className="title-submenu">Special
                                                                                                Product</span>
                                                                                            <div className="row">
                                                                                                <div className="col-sm-12 ">
                                                                                                    <div className="menu-product-thumb">
                                                                                                        <div className="image">
                                                                                                            <a href="index.html#">
                                                                                                                <img src="assets/images/products/10.jpg" alt="Muga Silk" title="Muga Silk" className="img-responsive" />
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div className="product-description">
                                                                                                            <div className="caption">
                                                                                                                <h4><a href="product.html">Muga Silk</a></h4>
                                                                                                                <div className="rating">
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                </div>

                                                                                                                <p className="price">
                                                                                                                    <span className="price-new">$98.00</span>
                                                                                                                    <span className="price-old">$122.00</span>

                                                                                                                    <span className="price-tax">$80.00</span>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-12 ">
                                                                                                    <div className="menu-product-thumb">
                                                                                                        <div className="image">
                                                                                                            <a href="index.html#">
                                                                                                                <img src="assets/images/products/1.jpg" alt="Phulkari Saree" title="Phulkari Saree" className="img-responsive" />
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div className="product-description">
                                                                                                            <div className="caption">
                                                                                                                <h4><a href="product.html">Phulkari Saree</a></h4>
                                                                                                                <div className="rating">
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa-regular fa-star"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa-regular fa-star"></i></span>
                                                                                                                </div>

                                                                                                                <p className="price">
                                                                                                                    <span className="price-new">$110.00</span>
                                                                                                                    <span className="price-old">$122.00</span>

                                                                                                                    <span className="price-tax">$90.00</span>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-12 ">
                                                                                                    <div className="menu-product-thumb">
                                                                                                        <div className="image">
                                                                                                            <a href="index.html#">
                                                                                                                <img src="assets/images/products/1.jpg" alt="Pochampally Sarees" title="Pochampally Sarees" className="img-responsive" />
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div className="product-description">
                                                                                                            <div className="caption">
                                                                                                                <h4><a href="product.html">Pochampally Sarres</a></h4>
                                                                                                                <div className="rating">
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                                                                    <span className="fa fa-stack"><i className="fa-regular fa-star"></i></span>
                                                                                                                </div>

                                                                                                                <p className="price">
                                                                                                                    <span className="price-new">$482.00</span>
                                                                                                                    <span className="price-old">$602.00</span>

                                                                                                                    <span className="price-tax">$75.00</span>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-sm-4">
                                                                                        <ul className="subcategory ">
                                                                                            <li>
                                                                                                <a href="category.html" className="title-submenu">Sambalpuri Saree</a>
                                                                                                <div className="row sub_sub_menu">
                                                                                                    <div className="col-sm-12 hover-menu">
                                                                                                        <div className="menu">
                                                                                                            <ul>
                                                                                                                <li><a href="category.html" className="main-menu">Bandhani Saree</a>
                                                                                                                </li>
                                                                                                                <li><a href="category.html" className="main-menu">Chinkankari Saree</a>
                                                                                                                </li>
                                                                                                                <li><a href="category.html" className="main-menu">Bansari Saree</a>
                                                                                                                </li>
                                                                                                                <li><a href="category.html" className="main-menu">Bomkai Saree</a>
                                                                                                                </li>
                                                                                                                <li><a href="category.html" className="main-menu">Gota Saree<b className="fa fa-angle-right"></b></a>
                                                                                                                    <ul>
                                                                                                                        <li><a href="category.html">Kanjeevaram</a></li>
                                                                                                                        <li><a href="category.html">Nauvari Saree</a></li>
                                                                                                                    </ul>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <img src="assets/images/banners/category_banner1.png" alt="" className="img-responsive" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-sm-4">
                                                                                        <ul className="subcategory ">
                                                                                            <li>
                                                                                                <a href="category.html" className="title-submenu ">Georgette Saree</a>
                                                                                                <div className="row sub_sub_menu">
                                                                                                    <div className="col-sm-12 hover-menu">
                                                                                                        <div className="menu">
                                                                                                            <ul>
                                                                                                                <li><a href="category.html" className="main-menu">Ilkal Saree</a>
                                                                                                                </li>
                                                                                                                <li><a href="category.html" className="main-menu">Kantha Saree<b className="fa fa-angle-right"></b></a>
                                                                                                                    <ul>
                                                                                                                        <li><a href="category.html">Kerala Saree</a></li>
                                                                                                                    </ul>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <img src="assets/images/banners/category_banner1.png" alt="" className="img-responsive" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="with-sub-menu click">
                                                                        <p className="close-menu"></p>
                                                                        <a href="index.html" className="clearfix">
                                                                            <strong>
                                                                                Product
                                                                            </strong>
                                                                            <b className="fa fa-angle-down"></b>
                                                                        </a>
                                                                        <div className="sub-menu">
                                                                            <div className="content">
                                                                                <div className="">
                                                                                    <div className="row megamenu-product-grid">
                                                                                        <div className="col-sm-3 ">
                                                                                            <div className="menu-product-thumb">
                                                                                                <div className="image">
                                                                                                    <a href="index.html#">
                                                                                                        <img src="assets/images/products/8.jpg" alt="Linen Sarees" title="Linen Sarees" className="img-responsive" />
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div className="product-description">
                                                                                                    <div className="caption">
                                                                                                        <h4><a href="product.html">Linen Sarees</a>
                                                                                                        </h4>
                                                                                                        <p className="price">
                                                                                                            $122.00
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-sm-3 ">
                                                                                            <div className="menu-product-thumb">
                                                                                                <div className="image">
                                                                                                    <a href="index.html#">
                                                                                                        <img src="assets/images/products/12.jpg" alt="Kasavu Saree" title="Kasavu Saree" className="img-responsive" />
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div className="product-description">
                                                                                                    <div className="caption">
                                                                                                        <h4><a href="product.html">Kasavu Saree</a></h4>
                                                                                                        <p className="price">
                                                                                                            <span className="price-new">$122.00</span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-sm-3 ">
                                                                                            <div className="menu-product-thumb">
                                                                                                <div className="image">
                                                                                                    <a href="index.html#">
                                                                                                        <img src="assets/images/products/4.jpg" alt="Net Sarees" title="Negt Sarees" className="img-responsive" />																							</a>
                                                                                                </div>
                                                                                                <div className="product-description">
                                                                                                    <div className="caption">
                                                                                                        <h4><a href="product.html">Net Sarees</a></h4>
                                                                                                        <p className="price">
                                                                                                            $242.00
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-sm-3">
                                                                                            <div className="menu-product-thumb">
                                                                                                <div className="image">
                                                                                                    <a href="index.html#">
                                                                                                        <img src="assets/images/products/14.jpg" alt="Mysore Pure Silk" title="Mysore Pure Silk" className="img-responsive" />																							</a>
                                                                                                </div>
                                                                                                <div className="product-description">
                                                                                                    <div className="caption">
                                                                                                        <h4><a href="product.html">Mysore Pure Silk</a></h4>
                                                                                                        <p className="price">
                                                                                                            $122.00
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="with-sub-menu click">
                                                                        <p className="close-menu"></p>
                                                                        <a href="index.html#" className="clearfix">
                                                                            <strong>
                                                                                Pages
                                                                            </strong>
                                                                            <b className="fa fa-angle-down"></b>
                                                                        </a>
                                                                        <div className="sub-menu sub-menu-1-col" style={{width: "250px", display: "none"}}>
                                                                            <div className="content">
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        <ul className="route  html-link">
                                                                                            <li><a href="about.html" className="main-menu">About
                                                                                                Us</a></li>
                                                                                            <li><a href="contact.html" className="main-menu">Contact
                                                                                                Us</a>
                                                                                            </li>
                                                                                            <li><a href="site-map.html" className="main-menu">Site
                                                                                                Map</a></li>
                                                                                            <li><a href="index.html#" className="main-menu">Special</a></li>
                                                                                            <li><a href="my-account.html" className="main-menu">My
                                                                                                Account</a>
                                                                                            </li>
                                                                                            <li><a href="index.html#" className="main-menu">Order
                                                                                                History</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="">
                                                                        <p className="close-menu"></p>
                                                                        <a href="blog.html" className="clearfix">
                                                                            <strong>
                                                                                Blog
                                                                            </strong>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="header-right">
                                    <div className="search-content">
                                        <div className="search-btn-outer">
                                            <i className="icon-search"></i>
                                        </div>
                                        <div className="header-search">
                                            <div id="vipodhaSearch" className="input-group vipodha-search">
                                                <input type="text" name="search" value="" placeholder="Search..." className="form-control input-lg ui-autocomplete-input" />
                                                <span className="btn-search input-group-btn">
                                                    <button type="button" className="btn btn-default btn-lg"><i className="search-icon icon-search"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="header_ac" className="dropdown">
                                        <a href="index.html#" title="My Account" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="icon-user dropdown-icon"></i><span className="hidden">My Account</span><span className="caret hidden"></span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                                            <li><a href="my-account.html">Register</a>
                                            </li>
                                            <li><a href="my-account.html">Login</a></li>
                                        </ul>
                                    </div>
                                    <div className="cart-content">
                                        <div id="cart" className="btn-group btn-block">
                                            <button type="button" data-toggle="dropdown" data-loading-text="<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>" className="btn btn-inverse btn-block btn-lg dropdown-toggle"><i className="fa-solid fa-cart-shopping"></i> <span id="cart-total">0<span className="hidden">item(s) - $0.00</span></span></button>
                                            <ul className="dropdown-menu pull-right header-cart-toggle">
                                                <li className="cart-content-product">
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center product-cart-thumb">
                                                                    <a href="index.html#">
                                                                        <img src="assets/images/products/11.jpg" alt="veggie delight" title="veggie delight" className="img-thumbnail" />
                                                                    </a>
                                                                </td>
                                                                <td className="text-left product-cart-details">
                                                                    <a href="index.html#" className="product-item-name">Veggie Delight</a>
                                                                    <br />
                                                                        <div className="product-cart-info">
                                                                            <span className="product-cart-qty">1 x </span>
                                                                            <span className="product-cart-price">$122.00</span>
                                                                        </div>
                                                                </td>
                                                                <td className="text-center product-cart-close">
                                                                    <button type="button" title="Remove" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center product-cart-thumb">
                                                                    <a href="index.html#">
                                                                        <img src="assets/images/products/15.jpg" alt="PeppiSaree" title="PeppiSaree" className="img-thumbnail" />
                                                                    </a>
                                                                </td>
                                                                <td className="text-left product-cart-details">
                                                                    <a href="index.html#" className="product-item-name">PeppiSaree</a>
                                                                    <div className="product-cart-info">
                                                                        <span className="product-cart-qty">1 x </span>
                                                                        <span className="product-cart-price">$241.99</span>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center product-cart-close">
                                                                    <button type="button" title="Remove" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li>
                                                    <div>
                                                        <table className="table table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-left"><strong>Sub-Total</strong></td>
                                                                    <td className="text-right">$299.99</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left"><strong>Eco Tax (-2.00)</strong></td>
                                                                    <td className="text-right">$4.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left"><strong>VAT (20%)</strong></td>
                                                                    <td className="text-right">$60.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left"><strong>Total</strong></td>
                                                                    <td className="text-right">$363.99</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p className="text-right product-cart-button">
                                                            <a href="shopping-cart.html" className="btn cart-btn addtocart-btn"><i className="fa fa-shopping-cart hidden"></i>View Cart</a>
                                                            &nbsp;&nbsp;&nbsp;<a href="shopping-cart.html" className="btn cart-btn checkout-btn"><i className="fa fa-share hidden"></i>Checkout</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                );
};

                export default Header;
