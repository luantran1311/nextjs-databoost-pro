"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Icon from "@mui/material/Icon";
import { open, close } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Header = () => {
    const isMenuOpened = useAppSelector((state) => state.menuReducer.isOpened);
    const dispatch = useAppDispatch();

    const toggleMenu = async () => {
        //if menu is opened, then close it
        if(isMenuOpened) {
            dispatch(close())
        }
        else {
            dispatch(open())
        }
    }

    return (
        <div className="bg-black sticky top-0 shadow-lg">
            <div className="wrapper flex justify-between p-6">
                <div className="left flex items-center gap-2">
                    <button
                        className="hamburger text-white text-lg border-2 rounded-lg"
                        onClick={toggleMenu}
                    >
                        <Icon component={isMenuOpened ?  CloseIcon : MenuIcon} sx={{ fontSize: "2rem" }} />

                        <span className="hidden">Hamburger</span>
                    </button>
                    <p className="text-white text-2xl font-bold">
                        DataBoostPro
                    </p>
                </div>
                <div className="right">
                    <p className="text-white">User</p>
                </div>
            </div>{" "}
        </div>
    );
};

export default Header;
