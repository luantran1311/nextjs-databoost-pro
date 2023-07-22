import React from "react";

const Header = () => {
  return (
    <div className="bg-zinc-700 sticky top-0">
      <div className="wrapper flex justify-between p-6">
        <div className="left">
          <p className="text-white text-2xl font-bold">DataBoostPro</p>
        </div>
        <div className="right">
          <p className="text-white">User</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
