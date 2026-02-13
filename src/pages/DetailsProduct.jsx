import {
  Car,
  ChevronRight,
  Clock9,
  Shield,
  ShoppingBasketIcon,
  Undo2Icon,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import productImg from '../assets/product-test.png';
import ProductDetailsSkeleton from '../components/Products/ProductDetailsSkeleton';

const DetailsProduct = () => {
  const { id } = useParams();

  console.log(id);

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
            <li className="capitalize text-slate-400 text-sm">category</li>
            <li className="text-slate-400">
              <ChevronRight className="size-3" />
            </li>
            <li className="capitalize text-slate-900 text-sm">title product</li>
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
              className="rounded-2xl h-full w-full object-cover"
              src={productImg}
              alt="productImg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span className="bg-main/20 text-main px-2 py-1 rounded-2xl w-fit">
              category
            </span>
            <h3 className="capitalize font-semibold text-3xl">
              Premium Wireless Noise-Cancelling Headphones
            </h3>
            <strong className="text-xl">$299.00</strong>
            <p className="text-slate-500">
              Experience unparalleled sound quality with our flagship
              noise-cancelling headphones. Featuring advanced 40mm drivers and
              industry-leading active noise cancellation technology, these
              headphones create a sanctuary of sound wherever you go.
            </p>
            <button class="rounded-lg bg-main py-2 font-bold text-white transition-opacity hover:opacity-70 cursor-pointer capitalize flex items-center justify-center gap-2 px-2 text-sm">
              <ShoppingBasketIcon className="size-5" />
              Add to Cart
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
                14-Day Returns
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductDetailsSkeleton />
    </>
  );
};

export default DetailsProduct;
