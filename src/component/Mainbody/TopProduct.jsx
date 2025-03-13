import React, { useRef, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Mainbody.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap styles
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../../CurrencyContext";

const productData = {
    featured: [
        { id: 1, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/3.jpg" },
        { id: 2, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/4.jpg" },
        { id: 3, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/5.jpg" },
        { id: 4, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/6.jpg" },
        { id: 5, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/7.jpg" },
        { id: 6, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/8.jpg" },
        { id: 7, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/9.jpg" },
        { id: 8, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/1.jpg" },
        { id: 9, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/2.jpg" },
        { id: 10, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/3.jpg" },
        { id: 11, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/5.jpg" },
        { id: 12, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/7.jpg" },
        { id: 13, title: "Tangail Saree", price: 86.0, image: "/assets/images/products/8.jpg" },
        { id: 14, title: "Designer Kurti", price: 45.0, image: "/assets/images/products/9.jpg" },

    ],
    latest: [
        { id: 3, title: "Leather Wallet", price: 30.0, image: "/assets/images/products/5.jpg" },
        { id: 4, title: "Smart Watch", price: 120.0, image: "/assets/images/products/6.jpg" },
    ],
    bestseller: [
        { id: 5, title: "Sports Shoes", price: 80.0, image: "/assets/images/products/7.jpg" },
        { id: 6, title: "Formal Shirt", price: 60.0, image: "/assets/images/products/8.jpg" },
    ],
};





const TopProduct = () => {
    const [activeTab, setActiveTab] = useState("featured");
    const swiperRefs = useRef({});
    const navigate = useNavigate();
    const { currency } = useCurrency();

    return (
        <div className="top-product">
            <div className="product-tab-block wow fadeInUp top-margin-all">
                <div className="container">
                    <div className="main-tab">
                        <div className="product-tabs box-content clearfix">
                            <div className="page-title toggled">
                                <h3>Top Products</h3>
                            </div>


                            <Tab.Container defaultActiveKey="featured">
                                <Nav variant="tabs" className="vipodha-tabs section">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {Object.keys(productData).map((category) => (
                                            <li className="nav-item" role="presentation" key={category}>
                                                <Nav.Link
                                                    className={`nav-link hscp-hover ${activeTab === category ? "active" : ""}`}
                                                    id={`${category}-tab`}
                                                    onClick={() => setActiveTab(category)}
                                                    role="tab"
                                                    aria-controls={category}
                                                    aria-selected={activeTab === category}
                                                    eventKey={category}
                                                >
                                                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                                </Nav.Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Nav>


                                <Tab.Content>
                                    {Object.keys(productData).map((category) => {
                                        // Splitting products into groups of 10 (5 per row, 2 rows)
                                        const chunkSize = 10;
                                        const productChunks = [];
                                        console.log(productChunks);

                                        for (let i = 0; i < productData[category].length; i += chunkSize) {
                                            productChunks.push(productData[category].slice(i, i + chunkSize));
                                        }

                                        return (
                                            <Tab.Pane key={category} eventKey={category}>
                                                <div className="block_box">
                                                    {/* ✅ Custom Scroll Buttons */}
                                                    <div className="custom-navigation">
                                                        <button
                                                            className="owl-prev"
                                                            onClick={() => swiperRefs.current[category]?.slidePrev()} // ✅ Fixed
                                                        >
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </button>
                                                        <button
                                                            className="owl-next"
                                                            onClick={() => swiperRefs.current[category]?.slideNext()} // ✅ Fixed
                                                        >
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </button>
                                                    </div>

                                                    <Swiper
                                                        modules={[Navigation, Pagination]}
                                                        pagination={{ clickable: true }}
                                                        spaceBetween={20}
                                                        slidesPerView={1}
                                                        onSwiper={(swiper) => (swiperRefs.current[category] = swiper)} // ✅ Store per category
                                                    >
                                                        {productChunks.map((chunk, index) => (
                                                            <SwiperSlide key={index}>
                                                                <div className="grid-container">
                                                                    {chunk.map((product) => (
                                                                        <div key={product.id} className="product-layout">
                                                                            <div className="product-thumb transition">
                                                                                <div className="image">
                                                                                    <a href="#" className="thumb-image" onClick={(e) => e.preventDefault()}>
                                                                                        <img
                                                                                            src={product.image}
                                                                                            alt={product.title}
                                                                                            className="img-responsive"
                                                                                        />
                                                                                    </a>
                                                                                    <div className="button-group">
                                                                                        <button className="addcart" type="button" title="Add to Cart" onclick="window.location.href = 'shopping-cart.html';"><i class="icon-bag"></i></button>
                                                                                        <button className="wishlist" type="button" title="Add to wishlist"><i class="icon-like"></i></button>
                                                                                        <button
                                                                                            className="vipodha_quickview-button"
                                                                                            type="button"
                                                                                            title="Quickview"
                                                                                            onClick={() => navigate(`/shop/SingplesareePage/${product.id}`)}
                                                                                        >
                                                                                            <i className="icon-eye"></i>
                                                                                        </button>
                                                                                        <button className="compare" type="button" title="Compare"><i class="icon-shuffle-arrows"></i></button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product-description">
                                                                                    <h4 className="product-title"><a href="#">{product.title}</a></h4>
                                                                                    <p className="price">
                                                                                        {currency.symbol} {(product.price * currency.rate).toFixed(2)}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>

                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProduct
