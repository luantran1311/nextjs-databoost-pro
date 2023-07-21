"use client";

import React from "react";
import { categoryTrees } from "@/dummy_data/category_trees";

const CategoryTreeDetail = ({ params: { id } }: { params: { id: string } }) => {
    const categoryTree = categoryTrees.find((el) => el.id === id);
    if (!categoryTree) {
        return <p>Not found</p>;
    }
    return (
        <div className="category-tree-detail">
            <div className="heading flex justify-between">
                <h3 className="text-3xl font-bold text-red-600">
                    {categoryTree.name}
                </h3>
                {/* <button className="inline-flex items-center py-1 px-2 rounded-md hover:bg-slate-100">
            <PlusCircleIcon className="w-8 h-8 mr-1" />
            Add New
        </button> */}
            </div>
            <div className="content mt-8"></div>
        </div>
    );
};

export default CategoryTreeDetail;
