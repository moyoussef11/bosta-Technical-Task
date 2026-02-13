import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import CardProduct from '../components/Products/CardProduct';
import CardProductSkeleton from '../components/Products/CardProductSkeleton';
import NotFoundProducts from '../components/Products/NotFoundProducts';

const Products = () => {
  return (
    <div className="pt-16 py-5">
      <div className="filters flex items-center justify-between flex-col gap-5 md:flex-row border-b border-slate-200 pb-5">
        <div className="categories flex items-center flex-wrap gap-2">
          <button className="rounded-full capitalize bg-main px-4 py-1.5 text-sm font-medium text-white cursor-pointer">
            All Items
          </button>
          <button className="rounded-full capitalize bg-white px-4 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 hover:border-main hover:text-main transition-all cursor-pointer">
            Electronics
          </button>
          <button className="rounded-full capitalize bg-white px-4 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 hover:border-main hover:text-main transition-all cursor-pointer">
            Electronics
          </button>
        </div>
        <div className="sort-price flex items-center gap-3">
          <label className="text-sm font-medium text-slate-500" htmlFor="sort">
            Sort by
          </label>
          <select
            className="rounded-lg border border-slate-300 py-2 pl-3 pr-10 text-sm focus:border-main focus:outline-main focus:ring-main"
            id="sort"
          >
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="products-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 my-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProductSkeleton />
      </div>
      <NotFoundProducts />

      <div className="pagination mx-auto w-fit flex items-center gap-5">
        <button className="border border-slate-300 rounded-xl text-sm p-2 cursor-pointer hover:border-slate-400 duration-200">
          <ChevronsLeftIcon className="size-5" />
        </button>
        <ul className="flex items-center gap-1">
          <li>
            <button className="py-1 px-3 text-white bg-main rounded-xl cursor-pointer">
              1
            </button>
          </li>
          <li>
            <button className="py-1 px-3 text-black hover:bg-main hover:text-white duration-200 rounded-xl cursor-pointer">
              2
            </button>
          </li>
          <li>
            <button className="py-1 px-3 text-black hover:bg-main hover:text-white duration-200 rounded-xl cursor-pointer">
              3
            </button>
          </li>
        </ul>
        <button className="border border-slate-300 rounded-xl text-sm p-2 cursor-pointer hover:border-slate-400 duration-200">
          <ChevronsRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Products;
