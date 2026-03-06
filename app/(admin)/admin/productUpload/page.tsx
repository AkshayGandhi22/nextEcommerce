'use client';
import React, { SetStateAction, useState } from 'react'

function page() {
    const [form, setForm] = useState({
        brand: '',
        title: '',
        heading: '',
        category: '',
        description: '',
        price: '',
        originalPrice: '',
        discount: '',
        rating: '',
        reviews: '',
        stock: '',
        seller: '',
        productLink: '',
    });

    const [sizes, setSizes] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSizeChange = (size: string) => {
        setSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        // text fields
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // sizes
        sizes.forEach((size) => formData.append('sizes', size));

        // ✅ FIXED FILE UPLOAD
        files.forEach((file) => {
            formData.append('prdctImages', file);
        });

        try {
            const res = await fetch('/api/product-upload', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="adminPanel">
            <div className="adminPanelContainer" >

                <h2 className="formTitle">Add Product</h2>

                <form className="productForm" encType="multipart/form-data" onSubmit={handleSubmit}>

                    <div className="formSection">
                        <h3>Basic Information</h3>

                        <div className="formGroup">
                            <label>Brand</label>
                            <input name='brand' onChange={handleChange} type="text" placeholder="Enter brand name" />
                        </div>

                        <div className="formGroup">
                            <label>Title</label>
                            <input name="title" onChange={handleChange} type="text" placeholder="Enter product title" />
                        </div>

                        <div className="formGroup">
                            <label>Category</label>
                            <input name="category" onChange={handleChange} type="text" placeholder="Enter category" />
                        </div>
                    </div>


                    <div className="formSection">
                        <h3>Gallery Images</h3>

                        <div className="formGroup">
                            <input
                                type="file"
                                multiple
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setFiles(Array.from(e.target.files));
                                    }
                                }}
                            />
                        </div>
                    </div>


                    <div className="formSection">
                        <h3>Sizes</h3>

                        <div className="checkboxGroup">
                            {/* Sizes */}
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <label key={size}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSizeChange(size)}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="formSection">
                        <h3>Description</h3>

                        <div className="formGroup">
                            <textarea name="description" onChange={handleChange} placeholder="Enter description"></textarea>
                        </div>
                    </div>


                    <div className="formSection">
                        <h3>Pricing</h3>

                        <div className="formRow">
                            <div className="formGroup">
                                <label>Price</label>
                                <input name="price" onChange={handleChange} type="number" />
                            </div>

                            <div className="formGroup">
                                <label>Original Price</label>
                                <input name="originalPrice" onChange={handleChange} type="number" />
                            </div>

                            <div className="formGroup">
                                <label>Discount (%)</label>
                                <input name="discount" onChange={handleChange} type="number" />
                            </div>
                        </div>
                    </div>


                    <div className="formSection">
                        <h3>Other Details</h3>

                        <div className="formRow">
                            <div className="formGroup">
                                <label>Rating</label>
                                <input name="rating" onChange={handleChange} type="number" step="0.1" />
                            </div>

                            <div className="formGroup">
                                <label>Reviews</label>
                                <input name="reviews" onChange={handleChange} type="number" />
                            </div>

                            <div className="formGroup">
                                <label>Stock</label>
                                <input name="stock" onChange={handleChange} type="number" />
                            </div>
                        </div>

                        <div className="formGroup">
                            <label>Seller</label>
                            <input name="seller" onChange={handleChange} type="text" />
                        </div>
                    </div>


                    <div className="formSubmit">
                        <button type="submit">Save Product</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default page