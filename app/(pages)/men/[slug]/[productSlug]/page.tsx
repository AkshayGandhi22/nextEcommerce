"use client";
import Image from 'next/image';
import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md';
import Slider from "react-slick";

function page() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='pad100 productPageSection'>
            <div className="container">
                <div className="detailspageSection">
                    <div className="sliderSection">
                        <Slider {...settings}>
                            <div>
                                <div className="sliderImg">
                                    <Image src="/images/tshirt/tshirt1.webp" alt='tshirt' width={500} height={500} />
                                </div>
                            </div>
                            <div>
                                <div className="sliderImg">
                                    <Image src="/images/tshirt/tshirt2.webp" alt='tshirt' width={500} height={500} />
                                </div>
                            </div>
                            <div>
                                <div className="sliderImg">
                                    <Image src="/images/tshirt/tshirt3.webp" alt='tshirt' width={500} height={500} />
                                </div>
                            </div>
                            <div>
                                <div className="sliderImg">
                                    <Image src="/images/tshirt/tshirt4.webp" alt='tshirt' width={500} height={500} />
                                </div>
                            </div>
                            <div>
                                <div className="sliderImg">
                                    <Image src="/images/tshirt/tshirt5.webp" alt='tshirt' width={500} height={500} />
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="pageDetails">
                        <div className="productDetailsPage">
                            <div className="productInfo">

                                <h2 className="brand">U.S. Polo Assn.</h2>
                                <p className="title">Men Pure Cotton Comfort Fit Lounge T-Shirt</p>

                                <div className="ratingBox">
                                    <span>4.4 ★</span>
                                    <span className="divider"></span>
                                    <span className="ratings">198 Ratings</span>
                                </div>

                                <hr />

                                <div className="priceBox">
                                    <span className="price">₹806</span>
                                    <span className="mrp">₹849</span>
                                    <span className="discount">(5% OFF)</span>
                                </div>

                                <p className="tax">inclusive of all taxes</p>

                                <h4 className="sectionTitle">MORE COLORS</h4>
                                <div className="colors">
                                    <img src="/images/tshirt/tshirt1.webp" />
                                    <img src="/images/tshirt/tshirt2.webp" />
                                    <img src="/images/tshirt/tshirt3.webp" />
                                </div>

                                <div className="sizeHeader">
                                    <h5>SELECT SIZE</h5>
                                    <span className="sizeChart">SIZE CHART </span>
                                </div>

                                <div className="sizes">
                                    <button>S<br /><span>Rs. 806</span></button>
                                    <button className="active">M<br /><span>Rs. 806</span></button>
                                    <button>L<br /><span>Rs. 806</span></button>
                                    <button>XL<br /><span>Rs. 806</span></button>
                                    <button>XXL<br /><span>Rs. 807</span></button>
                                </div>

                                <div className="actions">
                                    <button className="addToBag">ADD TO BAG</button>
                                    <button className="wishlist">♡ WISHLIST</button>
                                </div>

                                <hr />

                                <div className="seller">
                                    <p>₹ 806 <span className="strike">₹ 849</span> <span className="discount">(5% OFF)</span></p>
                                    <p>Seller: <span className="sellerName">Supercom Net</span></p>
                                    <p className="moreSeller">1 more seller available</p>
                                </div>

                                <div className="delivery">
                                    <h4>DELIVERY OPTIONS</h4>
                                    <div className="pincodeBox">
                                        <input type="text" placeholder="Enter pincode" />
                                        <button>Check</button>
                                    </div>
                                    <p className="note">
                                        Please enter PIN code to check delivery time & Pay on Delivery Availability
                                    </p>
                                </div>

                            </div>
                            <hr />
                            <div className="productDetailsSection">
                                <div className="productDetailsContainer">

                                    <h3 className="heading">
                                        PRODUCT DETAILS <span className="icon">📋</span>
                                    </h3>

                                    <p className="description">
                                        Teal-green solid lounge t-shirt, has a round neck and short sleeves with slip-on closure
                                    </p>

                                    <div className="block">
                                        <h4>Size & Fit</h4>
                                        <p>The model (height 6') is wearing a size M</p>
                                    </div>

                                    <div className="block">
                                        <h4>Material & Care</h4>
                                        <p>100% Cotton</p>
                                        <p>Machine wash</p>
                                    </div>

                                    <div className="block">
                                        <h4>Specifications</h4>

                                        <div className="specGrid">

                                            <div className="specItem">
                                                <span>Fabric</span>
                                                <p>Cotton</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Neck</span>
                                                <p>Round Neck</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Net Quantity</span>
                                                <p>1</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Net Quantity Unit</span>
                                                <p>Piece</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Pattern</span>
                                                <p>Solid</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Sleeve Length</span>
                                                <p>Short Sleeves</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Sustainable</span>
                                                <p>Regular</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Type</span>
                                                <p>Regular</p>
                                            </div>

                                            <div className="specItem">
                                                <span>Wash Care</span>
                                                <p>Machine Wash</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default page