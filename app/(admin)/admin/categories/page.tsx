"use client";

import { useEffect, useState } from "react";
import { requestFormReset } from "react-dom";

export default function CategoryAdmin() {
    const [mainCategory, setMainCategory] = useState("");
    const [subCategories, setSubCategories] = useState<any[]>([]);
    const [categories, setCategories] = useState([]);

    const addSubCategory = () => {
        setSubCategories([
            ...subCategories,
            { name: "", subSubCategories: [] },
        ]);
    };

    const addSubSubCategory = (index: number) => {
        const updated = [...subCategories];
        updated[index].subSubCategories.push("");
        setSubCategories(updated);
    };

    const handleSubmit = async () => {
        const res = await fetch("/api/categories", {
            method: "POST",
            body: JSON.stringify({ mainCategory, subCategories }),
        });
        const data = await res.json();
        if (data.success) {
            setMainCategory("");
            setSubCategories([]);
        }
        fetchCategories();
    };

    const fetchCategories = async () => {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Category Admin</h1>

            {/* Main Category */}
            <input
                placeholder="Main Category (Men, Women)"
                className="border p-2 mb-3 w-full"
                onChange={(e) => setMainCategory(e.target.value)}
            />

            {/* Sub Categories */}
            {subCategories.map((sub, i) => (
                <div key={i} className="mb-4 border p-3">
                    <input
                        placeholder="Sub Category"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => {
                            const updated = [...subCategories];
                            updated[i].name = e.target.value;
                            setSubCategories(updated);
                        }}
                    />

                    {/* SubSub */}
                    {sub.subSubCategories.map((ss: string, j: number) => (
                        <input
                            key={j}
                            placeholder="SubSub Category"
                            className="border p-2 w-full mb-1"
                            onChange={(e) => {
                                const updated = [...subCategories];
                                updated[i].subSubCategories[j] = e.target.value;
                                setSubCategories(updated);
                            }}
                        />
                    ))}

                    <button
                        onClick={() => addSubSubCategory(i)}
                        className="text-blue-500 text-sm"
                    >
                        + Add SubSubCategory
                    </button>
                </div>
            ))}

            <button
                onClick={addSubCategory}
                className="bg-gray-200 px-3 py-1 mr-2"
            >
                + Add SubCategory
            </button>

            <button
                onClick={handleSubmit}
                className="bg-black text-white px-4 py-2"
            >
                Save Category
            </button>

            {/* Display */}
            <div className="mt-6">
                <h2 className="font-semibold">All Categories</h2>

                {categories.map((cat: any) => (
                    <div key={cat._id} className="border p-3 mt-2">
                        <h3 className="font-bold">{cat.mainCategory}</h3>

                        {cat.subCategories.map((sub: any, i: number) => (
                            <div key={i} className="ml-4">
                                <p>{sub.name}</p>
                                <ul className="ml-4 list-disc">
                                    {sub.subSubCategories.map((ss: string, j: number) => (
                                        <li key={j}>{ss}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}