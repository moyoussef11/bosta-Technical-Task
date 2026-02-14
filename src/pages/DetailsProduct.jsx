import {
  Car,
  ChevronRight,
  CircleCheckBigIcon,
  Clock9,
  Shield,
  ShoppingBasketIcon,
  Undo2Icon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductDetailsSkeleton from '../components/Products/ProductDetailsSkeleton';
import NotFoundProduct from '../components/Products/NotFoundProduct';
import { toast } from 'react-toastify';
import useDetailsProduct from '../hooks/useDetailsProduct';

const DetailsProduct = () => {
  const { id, productDetailsData, isInCart, addToCart, loading } =
    useDetailsProduct();
  if (loading) return <ProductDetailsSkeleton />;
  if (productDetailsData == '') return <NotFoundProduct id={id} />;

  return (
    <>
      <div className="">
        <div className="head flex items-center justify-between flex-wrap gap-5">
          <ul className="breadcrumbs flex items-center gap-1">
            <li className="capitalize text-slate-400 text-sm">
              <Link to="/">products</Link>
            </li>
            <li className="text-slate-400">
              <ChevronRight className="size-3" />
            </li>
            <li className="capitalize text-slate-400 text-sm">
              {productDetailsData?.category}
            </li>
            <li className="text-slate-400">
              <ChevronRight className="size-3" />
            </li>
            <li className="capitalize text-slate-900 text-sm">
              {productDetailsData?.title}
            </li>
          </ul>
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 rounded-lg py-1 px-2 w-fit"
          >
            <Undo2Icon className="size-5" />
            Back to Products
          </Link>
        </div>
        <div className="details my-5 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full h-70 md:h-125 md:w-1/2 rounded-2xl">
            <img
              className="rounded-2xl h-full w-full object-contain"
              src={productDetailsData?.image}
              alt={productDetailsData?.title}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span className="bg-main/20 text-main px-2 py-1 rounded-2xl w-fit">
              {productDetailsData?.category}
            </span>
            <h3 className="capitalize font-semibold text-3xl">
              {productDetailsData?.title}{' '}
            </h3>
            <strong className="text-xl">${productDetailsData?.price}</strong>
            <p className="text-slate-500">{productDetailsData?.description}</p>
            <button
              disabled={isInCart}
              onClick={() => {
                addToCart(productDetailsData);
                toast.success('Added to cart successfully');
              }}
              className={`rounded-lg ${isInCart ? 'bg-gray-400 cursor-not-allowed opacity-60' : 'bg-main hover:opacity-70 cursor-pointer'} py-2 font-bold text-white transition-opacity  capitalize flex items-center justify-center gap-2 px-2 text-sm`}
            >
              {isInCart ? (
                <>
                  <CircleCheckBigIcon className="size-5" />
                  Added
                </>
              ) : (
                <>
                  <ShoppingBasketIcon className="size-5" />
                  Add to Cart
                </>
              )}
            </button>
            <ul className="flex items-center flex-wrap gap-3 mx-auto my-2">
              <li className="capitalize text-slate-400 text-sm flex items-center gap-2">
                <Car className="size-5" />
                Free Delivery
              </li>
              <li className="capitalize text-slate-400 text-sm flex items-center gap-2">
                <Shield className="size-5" />2 Year Warranty
              </li>
              <li className="capitalize text-slate-400 text-sm flex items-center gap-2">
                <Clock9 className="size-5" />
                30-Day Returns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
