import React from "react";
import WishList from "../common/wishList";
import { AccountIcon } from "../common/AccountIcon";
import { CartIcon } from "../common/CartIcon";

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-8 justify-between gap-34">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl text-black font-bold">AdalSHOP</h2>
      </div>
      <div className="flex flex-wrap items-center gap-10 flex-1">
        <ul className="flex gap-10 text-gray-600">
          <li className=" hover:text-black">
            <a href="/">Tienda</a>
          </li>
          <li className=" hover:text-black">
            <a href="/mens">Hombre</a>
          </li>
          <li className=" hover:text-black">
            <a href="/womens">Mujer</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="border rounded flex overflow-hidden border-gray-300">
            <div className="flex items-center justify-center px-4 ">
              <span className="material-symbols-outlined text-gray-600">
                search
              </span>
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Buscar..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center">
        <ul className="flex gap-4">
          <li>
            <button>
              <WishList />
            </button>
          </li>
          <li>
            <button>
              <AccountIcon />
            </button>
          </li>
          <li>
            <button>
              <CartIcon />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
