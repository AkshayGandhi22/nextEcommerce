"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { tshirt } from "./tshirt"
import { MdOutlineStarPurple500 } from "react-icons/md";

function page() {

    const [tshirtData, setTshirtData] = useState<any[]>([]);

    const fetchTshirtData = async () => {
        try {
            const response = await fetch('/api/product-upload');
            const data = await response.json();
            setTshirtData(data);
        } catch (error) {
            console.error("Error fetching t-shirt data:", error);
        }
    };

    console.log("Fetched T-shirt Data:", tshirtData);

    React.useEffect(() => {
        fetchTshirtData();
    }, []);

    return (
        <div className='padt10'>
            <div className='container'>
                <div className="mainTitle">
                    <h6>Men T-shirts - <span className='normal'>263564 items</span></h6>
                </div>
                <div className="allCategoriesSection">
                    <div className="filterSideBar">
                        <h5 className='titleText'>Filter</h5>
                        <div className="filterCategories">
                            <h6>Categories</h6>
                            <div className="checkboxField">
                                <div className="checkboxInput">
                                    <input type="checkbox" name="categories" id="tshirt" />
                                    <label htmlFor="tshirt">Tshirts(262061)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="categories" id="longeTshirt" />
                                    <label htmlFor="longeTshirt">Lounge Tshirts(1530)</label>
                                </div>
                            </div>
                        </div>
                        <div className="filterCategories">
                            <h6>Brand</h6>
                            <div className="checkboxField">
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="woostro" />
                                    <label htmlFor="woostro">WOOSTRO(9437)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand2" />
                                    <label htmlFor="brand2">Moda Rapido(7190)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand3" />
                                    <label htmlFor="brand3">SZN(5809)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand4" />
                                    <label htmlFor="brand4">Seekbuylove(5067)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand5" />
                                    <label htmlFor="brand5">Roadster(4546)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand6" />
                                    <label htmlFor="brand6">HRX by Hrithik Roshan(4145)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand7" />
                                    <label htmlFor="brand7">Tommy Hilfiger(4095)</label>
                                </div>
                                <div className="checkboxInput">
                                    <input type="checkbox" name="brand" id="brand8" />
                                    <label htmlFor="brand8">Friskers(3994)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesSection">
                        {/* /men/${item.category}/${item.link} */}
                        {tshirtData.map(item => {
                            const firstImageId = item.galleryImages?.[1];
                            return (
                                <Link href="#" key={item.id} className="categoryCard">
                                    <div className="img">
                                        <Image src={`/api/uploads/${firstImageId}`} alt={item.title} width={200} height={200} />

                                        <div className="rating">
                                            <span>{item.rating} <MdOutlineStarPurple500 /> | {item.reviews}</span>
                                        </div>
                                    </div>

                                    <div className="text">
                                        <h6>{item.brand}</h6>
                                        <p>{item.title}</p>

                                        <p className="price">
                                            <b>
                                                Rs. {item.price}
                                                <span className="strike"> Rs. {item.originalPrice}</span>
                                                <span className="discount"> {item.discount}% off</span>
                                            </b>
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page