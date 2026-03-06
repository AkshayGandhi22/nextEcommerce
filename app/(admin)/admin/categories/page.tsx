"use client";

import { useState } from "react";
import { useGet } from "@/app/_lib/hooks/useGet";

type Category = {
    _id: string;
    mainCategory: string;
    subCategories: SubCategory[];
};

type SubCategory = {
    name: string;
    subSubCategories: string[];
};

export default function CategoryAdmin() {
    const [mainCategory, setMainCategory] = useState("");
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
    const {
        data: categories,
        refetch: fetchCategories,
        loading,
        error,
    } = useGet<Category[]>("/api/categories", []);

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
        const isEditing = Boolean(editingCategoryId);
        const res = await fetch("/api/categories", {
            method: isEditing ? "PUT" : "POST",
            body: JSON.stringify(
                isEditing
                    ? { id: editingCategoryId, mainCategory, subCategories }
                    : { mainCategory, subCategories }
            ),
        });
        const data = await res.json();
        if (data.success) {
            setMainCategory("");
            setSubCategories([]);
            setEditingCategoryId(null);
        }
        fetchCategories();
    };

    const handleEdit = (category: Category) => {
        setEditingCategoryId(category._id);
        setMainCategory(category.mainCategory);
        setSubCategories(
            category.subCategories.map((sub) => ({
                name: sub.name,
                subSubCategories: [...sub.subSubCategories],
            }))
        );
    };

    const cancelEdit = () => {
        setEditingCategoryId(null);
        setMainCategory("");
        setSubCategories([]);
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Category Admin</h1>

            {/* Main Category */}
            <input
                placeholder="Main Category (Men, Women)"
                className="border p-2 mb-3 w-full"
                value={mainCategory}
                onChange={(e) => setMainCategory(e.target.value)}
            />

            {/* Sub Categories */}
            {subCategories.map((sub, i) => (
                <div key={i} className="mb-4 border p-3">
                    <input
                        placeholder="Sub Category"
                        className="border p-2 w-full mb-2"
                        value={sub.name}
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
                            value={ss}
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
                {editingCategoryId ? "Update Category" : "Save Category"}
            </button>

            {editingCategoryId && (
                <button
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 ml-2"
                >
                    Cancel Edit
                </button>
            )}

            {/* Display */}
            <div className="mt-6">
                <h2 className="font-semibold">All Categories</h2>
                {loading && <p>Loading categories...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {categories.map((cat) => (
                    <div key={cat._id} className="border p-3 mt-2">
                        <h3 className="font-bold">{cat.mainCategory}</h3>
                        <button
                            onClick={() => handleEdit(cat)}
                            className="text-sm text-blue-600 mb-2"
                        >
                            Edit
                        </button>

                        {cat.subCategories.map((sub, i: number) => (
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
