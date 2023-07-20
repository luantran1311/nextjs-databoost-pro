import Header from "@/components/Header";
import React from "react";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="">
      <body
        style={{ margin: 0 }}
        className={[poppins.className, "bg-black-800"].join(" ")}
      >
        <Header />
        <div id="main" className="flex">
          <Sidebar />
          <div id="content" className="w-full py-6 px-4 ml-[300px]">
            <div className="wrapper max-w-[1024px] m-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;