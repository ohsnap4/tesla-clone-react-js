import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="flex justify-between py-4 px-12 font-semibold text-[.9rem]">
        {/* logo  */}
        <div>
          <img
            src="/logo.svg"
            className="hover:cursor-pointer"
            alt="tesla logo"
          />
        </div>
        {/* nav links  */}
        <ul className="flex space-x-8">
          <li>
            <a href="#">Model S</a>
            {/* <div>
              <li>
                <a href="#">sa</a>
              </li>
              <li>
                <a href="#">sb</a>
              </li>
            </div> */}
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roofs</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </ul>
        {/* nav button links  */}
        <ul className="flex space-x-8">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
