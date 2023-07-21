"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PlusCircleIcon,
  TrashIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { categoryTrees } from "@/dummy_data/category_trees";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const CategoryTrees = () => {
  const [dropDownActive, setDropDownActive] = useState<number>(0);

  const itemsRef = useRef<HTMLDivElement[]>([]);

  const outSideClick = (index : number) => {
    useOutsideClick(itemsRef.current[index], () => {
    // do something here
  });
}

  const showActionDropDown = (treeId: string) => {
    console.log(treeId);
    const el = document.querySelector(`[data-id-dropdown="${treeId}"]`);
    el?.classList.remove("hidden");
    setDropDownActive(Number(treeId));
  };

  const closeAllDropDowns = () => {
    const elList = document.querySelectorAll(`[data-id-dropdown]`);
    elList.forEach((el) => el.classList.add("hidden"));
  };

  return (
    <div className="connections">
      <div className="heading flex justify-between">
        <h3 className="text-3xl font-bold text-red-600">Category Trees</h3>
        <button className="inline-flex items-center py-1 px-2 rounded-md hover:text-white hover:bg-black">
          <PlusCircleIcon className="w-8 h-8 mr-1" />
          Add New
        </button>
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
                outSideClick(index);
                return <tr className="text-gray-600" key={index}>
                  <td>
                    <Link href={`/category-trees/${tree.id}`}>{tree.name}</Link>
                  </td>
                  <td className="text-center">{tree.created_at}</td>
                  <td className="text-center">{tree.updated_at}</td>
                  <td>
                    {/* <div className="action-group flex justify-center gap-4">
                    <button onClick={showActionDropDown} data-id={tree.id}>
                        <EllipsisVerticalIcon className="w-5 h-5" />
                      </button>
                      <div className="dropdown">
                        This is the dropdown
                      </div>
                      <button>
                        <EyeIcon className="w-5 h-5" />
                      </button>

                      <button>
                        <TrashIcon className="w-5 h-5 text-red-500" />
                      </button>
                    </div> */}
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          onClick={() => showActionDropDown(tree.id)}
                          data-id={tree.id}
                          className="rounded-md p-1 hover:bg-slate-100"
                        >
                          <EllipsisVerticalIcon className="w-6 h-6" />
                        </button>
                      </div>
                      {/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
                      <div
                            ref={(el: HTMLDivElement) => {
                              itemsRef.current[index] = el;
                              return el;
                            }}

                        data-id-dropdown={tree.id}
                        className="hidden absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div>
                          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                          <a
                            href="#"
                            className="flex justify-start items-center gap-1 hover:bg-slate-100 py-2 px-6 text-sm"
                          >
                            <PencilSquareIcon className="w-6 h-6" />
                            Edit
                          </a>
                          <a
                            href="#"
                            className="flex justify-start items-center gap-1 hover:bg-slate-100 py-2 px-6  text-sm text-red-700"
                          >
                            <TrashIcon className="w-6 h-6" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
})}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CategoryTrees;