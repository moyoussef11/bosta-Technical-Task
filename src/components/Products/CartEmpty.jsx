import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <ShoppingBag />{' '}
      </div>
      <h2 className="text-xl font-bold text-slate-900">your cart is empty</h2>
      <Link
        to="/"
        className="capitalize my-2 bg-main py-2 px-4 rounded-lg text-white"
      >
        go shopping
      </Link>
    </div>
  );
};

export default CartEmpty;
