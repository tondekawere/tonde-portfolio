import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] xl:pr-0  border-l-transparent border-r-transparent text-white">
      <div className="container p-12 xl:pl-20 flex justify-between">
        <span>T.K</span>
        <span className="text-slate-300">
          {new Date().getFullYear()}&copy; All Rigts Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
