import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardProductCart from '../components/Products/CardProductCart';
import CartEmpty from '../components/Products/CartEmpty';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  return (
    <>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="relative">
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
            <span className="text-slate-400">
              You have {cart?.length} items in your cart
            </span>
          </div>
          <div className="my-5 md:my-10 flex gap-5 flex-col md:flex-row">
            <div className="products flex flex-col gap-5 flex-1">
              {cart?.map((item) => (
                <CardProductCart key={item.id} cart={item} />
              ))}
            </div>
            <div className="total sticky top-20 h-fit flex flex-col justify-between border border-slate-300 rounded-2xl bg-white p-5">
              <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="text-3xl capitalize font-medium">Order Total</h4>
                <strong className="text-2xl text-main font-black">
                  ${Math.ceil(total)}
                </strong>
              </div>
              <button className="bg-main mt-5 flex items-center gap-2 justify-center w-full text-white text-center capitalize p-2 rounded-lg font-semibold cursor-pointer hover:bg-main/50">
                proceed to checkout
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
          <button
            onClick={() => clearCart()}
            className="bg-red-500 text-white py-2 px-4 rounded-lg mx-auto capitalize cursor-pointer hover:bg-red-500/50 block"
          >
            remove all products
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
