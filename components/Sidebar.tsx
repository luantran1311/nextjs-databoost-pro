"use client";

import Link from "next/link";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import AppsIcon from "@mui/icons-material/Apps";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { useAppSelector } from "@/redux/hooks";

const menuItems = [
    {
        slug: "/connections",
        name: "Connections",
        icon: <IntegrationInstructionsIcon />,
    },
    {
        slug: "/category-trees",
        name: "Category Trees",
        icon: <CategoryIcon />,
    },
    {
        slug: "/product-catalogues",
        name: "Product Catalogues",
        icon: <AppsIcon />,
    },
];

const Sidebar = () => {
    const isMenuOpened = useAppSelector((state) => state.menuReducer.isOpened);

    return (
        <div className="menu-container relative">
            <aside
                className={`z-50 bg-white py-6 px-4 transition-transform w-[300px] fixed top-[80px] left-0 h-full shadow-lg ${
                    isMenuOpened ? "" : "-translate-x-full"
                }`}
            >
                <ul>
                    {menuItems.map((item: any, index: number) => (
                        <li
                            key={index}
                            className="hover:text-red-600 text-lg font-semibold mb-2"
                        >
                            <Link
                                href={item.slug}
                                className="flex items-center gap-2 py-2 px-4"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            {isMenuOpened && (
                <div className="backdrop-blur-sm lg:backdrop-blur-none w-[100vw] h-full absolute top-0 left-0"></div>
            )}
        </div>
    );
};

export default Sidebar;
