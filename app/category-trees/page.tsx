"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    PlusCircleIcon,
    TrashIcon,
    EllipsisVerticalIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { categoryTrees } from "@/dummy_data/category_trees";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ItemRow = ({ tree }: { tree: any }) => {
    const ref = useRef<any>();

    const [dropdownActive, setDropDownActive] = useState(false);

    // useOutsideClick(ref.current, () => {
    //     console.log(dropdownActive)
    //     if(dropdownActive)
    //     setDropDownActive(false);
    // });

    const showActionDropDown = () => {
        setDropDownActive(true);
    };

    const toggleActionDropDown = () => {
      if(dropdownActive) {
        setDropDownActive(false);
      }
      else {
        setDropDownActive(true);
      }

  };

    const closeAllDropDowns = () => {
        const elList = document.querySelectorAll(`[data-id-dropdown]`);
        elList.forEach((el) => el.classList.add("hidden"));
    };
    return (
        <tr className="text-gray-600">
            <td className="font-bold">
                <Link href={`/category-trees/${tree.id}`}>{tree.name}</Link>
            </td>
            <td className="text-center">{tree.created_at}</td>
            <td className="text-center">{tree.updated_at}</td>
            <td>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={toggleActionDropDown}
                            data-id={tree.id}
                            className={`rounded-md p-1 ${dropdownActive ? "bg-slate-100" : ""} hover:bg-slate-100`}
                        >
                            <EllipsisVerticalIcon className="w-6 h-6" />
                        </button>
                    </div>
                    
                     <div
                        ref={ref}
                        data-id-dropdown={tree.id}
                        className={`${dropdownActive ? "" : "hidden"} absolute right-0 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        <div className="text-sm">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="flex justify-start items-center gap-1 hover:bg-slate-100 py-2 px-6"
                            >
                                <PencilSquareIcon className="w-6 h-6" />
                                Edit
                            </a>
                            <a
                                href="#"
                                className="flex justify-start items-center gap-1 hover:bg-slate-100 py-2 px-6 text-red-700"
                            >
                                <TrashIcon className="w-6 h-6" />
                                Delete
                            </a>
                        </div>
                    </div>

                </div>
            </td>
        </tr>
    );
};

const CategoryTrees = () => {
    return (
        <div className="category-trees">
            <div className="heading flex justify-between">
                <h3 className="text-3xl font-bold text-red-600">
                    Category Trees
                </h3>
                <Link href="/category-trees/new" className="inline-flex items-center py-1 px-2 rounded-md hover:bg-slate-100">
                    <PlusCircleIcon className="w-8 h-8 mr-1" />
                    Add New
                </Link>
            </div>
            <div className="content mt-8">
                {categoryTrees.length === 0 && <p>No category trees found.</p>}
                {categoryTrees.length > 0 && (
                    <table className="table-auto w-full border shadow-lg">
                        <thead>
                            <tr>
                                <th className="text-left">Name</th>
                                <th>Date Created</th>
                                <th>Last Update</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryTrees?.map((tree: any, index: number) => {
                                return <ItemRow tree={tree} key={index} />;
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default CategoryTrees;