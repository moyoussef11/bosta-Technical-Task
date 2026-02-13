import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardProductCart from '../components/Products/CardProductCart';

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-main hover:underline capitalize rounded-lg py-1 px-2 w-fit"
        >
          <ArrowLeft className="size-5" />
          continue shopping
        </Link>
        <h4 className="capitalize text-2xl md:text-4xl font-black">
          Your Shopping Cart
        </h4>
        <span className="text-slate-400">You have 3 items in your cart</span>
      </div>
      <div className="my-5 md:my-10">
        <div className="products">
          <CardProductCart />
        </div>
        <div className="total"></div>
      </div>
    </div>
  );
};

export default Cart;
