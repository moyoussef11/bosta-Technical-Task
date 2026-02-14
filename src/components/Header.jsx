import { Menu, ShoppingCart, Store, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { useCartStore } from '../store/cart.store';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const token = useAuthStore((state) => state.token);
  const logoutUser = useAuthStore((state) => state.logoutUser);
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 flex items-center justify-between py-5 bg-white/80 backdrop-blur-md px-4 md:px-10 lg:px-14 xl:px-20">
      <Link
        to="/"
        className="text-main hover:cursor-pointer w-fit flex items-center capitalize gap-2"
      >
        <Store />
        <h4 className="text-2xl font-bold">store</h4>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5 flex-wrap">
          <li>
            <Link
              className={`capitalize ${pathname === '' ? 'font-semibold text-main' : ''} hover:text-main duration-200`}
              to="/"
            >
              products
            </Link>
          </li>
          <li>
            <Link
              className={`capitalize ${pathname === 'create-product' ? 'font-semibold text-main' : ''} hover:text-main duration-200`}
              to="/create-product"
            >
              create product
            </Link>
          </li>
          <li>
            <Link
              className={`capitalize ${pathname === 'cart' ? 'font-semibold text-main' : ''} hover:text-main duration-200 relative`}
              to="/cart"
            >
              <ShoppingCart />
              <span className="text-white bg-main rounded-full px-1 absolute -top-2 right-0 text-[10px]">
                {cart?.length}
              </span>
            </Link>
          </li>
          {token ? (
            <li>
              <button
                onClick={() => logoutUser()}
                className="bg-white rounded-lg py-2 px-4 border border-red-500 text-red-500 cursor-pointer"
              >
                logout
              </button>
            </li>
          ) : (
            <>
              {' '}
              <li>
                <Link
                  className="capitalize border border-gray-300 rounded-lg py-2 px-4 font-bold hover:bg-gray-100 duration-200"
                  to="/login"
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  className="capitalize border border-main bg-main text-white rounded-lg py-2 px-4 font-bold hover:bg-main/70 duration-200"
                  to="/register"
                >
                  signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="block md:hidden">
        {toggle ? (
          <X
            onClick={() => setToggle(false)}
            className="text-main hover:text-red-500 cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setToggle(true)}
            className="text-main cursor-pointer"
          />
        )}
      </div>
      {/* mobile responsive */}
      <nav
        className={`absolute z-50 ${toggle ? 'left-0' : '-left-200'} duration-300 w-full top-16  border-b border-slate-200 bg-white/80 backdrop-blur-md md:hidden`}
      >
        <ul className="flex flex-col items-center py-5 gap-5 space-y-2">
          <li>
            <Link
              className={`capitalize ${pathname === '' ? 'font-semibold text-main' : ''} hover:text-main duration-200`}
              to="/"
              onClick={() => setToggle(false)}
            >
              products
            </Link>
          </li>
          <li>
            <Link
              className={`capitalize ${pathname === 'create-product' ? 'font-semibold text-main' : ''} hover:text-main duration-200`}
              to="/create-product"
              onClick={() => setToggle(false)}
            >
              create product
            </Link>
          </li>
          <li>
            <Link
              className={`capitalize ${pathname === 'cart' ? 'font-semibold text-main' : ''} hover:text-main duration-200 relative`}
              to="/cart"
              onClick={() => setToggle(false)}
            >
              <ShoppingCart />
              <span className="text-white bg-main rounded-full px-1 absolute -top-2 right-0 text-[10px]">
                {cart?.length}
              </span>
            </Link>
          </li>
          {token ? (
            <li>
              <button
                onClick={() => {
                  logoutUser();
                  setToggle(false);
                }}
                className="bg-white rounded-lg py-2 px-4 border border-red-500 text-red-500 cursor-pointer"
              >
                logout
              </button>
            </li>
          ) : (
            <>
              {' '}
              <li>
                <Link
                  to="/login"
                  onClick={() => setToggle(false)}
                  className="capitalize border border-gray-300 rounded-lg py-2 px-4 font-bold hover:bg-gray-100 duration-200"
                  to="/login"
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  className="capitalize border border-main bg-main text-white rounded-lg py-2 px-4 font-bold hover:bg-main/70 duration-200"
                  to="/register"
                >
                  signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
