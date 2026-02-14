import { CircleCheckBigIcon, Eye, ShoppingBasketIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cart.store';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store/auth.store';

const CardProduct = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const isInCart = cart.some((p) => p.id === product.id);
  const token = useAuthStore((state) => state.token);

  return (
    <div className="flex flex-col gap-2 justify-between shadow-lg rounded-2xl hover:-translate-y-5 duration-200">
      <div className="rounded-2xl relative">
        <img
          src={product?.image}
          alt={product?.title}
          className="rounded-2xl h-75 w-full object-contain"
        />
        <small className="capitalize bg-main/30 p-1 text-black text-[10px] rounded-2xl font-medium absolute left-3 top-3">
          {product?.category}{' '}
        </small>
      </div>
      <div className="py-3 px-2 flex flex-col gap-2">
        <h3 className="capitalize font-semibold">
          {product?.title.substring(0, 30)}...
        </h3>
        <strong className="text-xl">${product.price}</strong>
        <div className="btns my-3 grid grid-cols-2 md:grid-cols-1 gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-lg border border-slate-300 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer capitalize flex items-center justify-center gap-2 px-2"
          >
            <Eye className="size-5" />
            View
          </Link>
          <button
            disabled={isInCart}
            onClick={() => {
              if (!token) {
                toast.error('please log in to add product to cart');
              } else {
                addToCart(product);
                toast.success('Added to cart successfully');
              }
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
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
