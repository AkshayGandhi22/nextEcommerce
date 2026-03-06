import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="cartPage pad100">
            <div className="container">
                <div className="cartContainer">

                    <div className="cartLeft">

                        <div className="addressBox">
                            <div>
                                <p><b>Deliver to:</b> Akshay Gandhi, 390019</p>
                                <span>A-401 Tulsi Height, Near Vaikunth Char Rasta...</span>
                            </div>
                            <button>CHANGE ADDRESS</button>
                        </div>

                        <div className="offerBox">
                            <p className="title">Available Offers</p>
                            <p>10% Instant Discount On Canara Bank Credit Card...</p>
                            <span className="showMore">Show More</span>
                        </div>

                        <div className="cartItem">
                            <input type="checkbox" checked />

                            <Image src="/images/tshirt/tshirt1.webp" alt="product" width={100} height={100} />

                            <div className="itemDetails">
                                <h4>Voyage</h4>
                                <p>Unisex Wayfarer Sunglasses with Polarised...</p>

                                <div className="meta">
                                    <span>Size: L</span>
                                    <span>Qty: 1</span>
                                </div>

                                <div className="price">
                                    ₹988 <span className="strike">₹3,000</span> <span className="off">₹2,012 OFF</span>
                                </div>

                                <p className="delivery">Delivery by 18 Feb 2026</p>
                            </div>

                            <span className="remove">✕</span>
                        </div>

                        <div className="wishlistBox">
                            Add More From Wishlist
                        </div>

                    </div>

                    <div className="cartRight">

                        <div className="couponBox">
                            <p>Apply Coupons</p>
                            <button>APPLY</button>
                        </div>

                        <div className="donationBox">
                            <p>Donate and make a difference</p>
                            <div className="donationBtns">
                                <button>₹10</button>
                                <button>₹20</button>
                                <button>₹50</button>
                                <button>₹100</button>
                            </div>
                        </div>

                        <div className="priceDetails">
                            <h4>PRICE DETAILS</h4>

                            <div className="row">
                                <span>Total MRP</span>
                                <span>₹3,000</span>
                            </div>

                            <div className="row discount">
                                <span>Discount</span>
                                <span>- ₹2,012</span>
                            </div>

                            <div className="row">
                                <span>Platform Fee</span>
                                <span>₹23</span>
                            </div>

                            <hr />

                            <div className="row total">
                                <span>Total Amount</span>
                                <span>₹1,011</span>
                            </div>

                            <button className="placeOrder">PLACE ORDER</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default page