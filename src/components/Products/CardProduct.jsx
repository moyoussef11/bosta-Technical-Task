import { Eye, ShoppingBasketIcon } from 'lucide-react';
import productImg from '../../assets/product-test.png';
import { Link } from 'react-router-dom';

const CardProduct = () => {
  return (
    <div className="flex flex-col gap-2 shadow-lg rounded-2xl hover:-translate-y-5 duration-200">
      <div className="rounded-2xl relative">
        <img
          src={productImg}
          alt="product-img"
          className="rounded-2xl h-75 w-full object-cover"
        />
        <small className="capitalize bg-main p-1 text-white rounded-2xl font-medium absolute left-3 top-3">
          category
        </small>
      </div>
      <div className="py-3 px-2 flex flex-col gap-2">
        <h3 className="capitalize font-semibold">
          Premium Wireless Headphones
        </h3>
        <strong className="text-xl">$299.00</strong>
        <div className="btns my-3 grid grid-cols-2 gap-3">
          <button className="rounded-lg bg-main py-2 font-bold text-white transition-opacity hover:opacity-70 cursor-pointer capitalize flex items-center justify-center gap-2 px-2 text-sm">
            <ShoppingBasketIcon className="size-5" />
            Add to Cart
          </button>
          <Link
            // to={`/product/${product.id}`}
            to={`/product/1`}
            className="flex-1 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer capitalize flex items-center justify-center gap-2 px-2"
          >
            <Eye className="size-5" />
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
