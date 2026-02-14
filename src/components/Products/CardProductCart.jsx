import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cart.store';

const CardProductCart = ({ cart }) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="rounded-2xl border border-slate-300 p-3 md:p-5 flex flex-col sm:flex-row gap-10">
      <div className="h-37.5 w-37.5 rounded-2xl mx-auto">
        <img
          className="w-full h-full object-contain rounded-2xl"
          src={cart?.image}
          alt={cart?.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex items-center justify-between flex-wrap">
          <h4 className="text-3xl font-semibold capitalize">{cart?.title} </h4>
          <strong className="text-xl">${cart?.price}</strong>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center w-fit p-1">
            <Plus
              onClick={() => increaseQuantity(cart?.id)}
              className="bg-slate-200 size-5 p-1 rounded cursor-pointer hover:bg-slate-200/50"
            />
            <span className="font-semibold mx-2">{cart?.quantity}</span>
            <Minus
              onClick={() => decreaseQuantity(cart?.id)}
              className="bg-slate-200 size-5 p-1 rounded cursor-pointer hover:bg-slate-200/50"
            />
          </div>
          <button
            onClick={() => removeFromCart(cart?.id)}
            className="cursor-pointer text-red-500 capitalize flex items-center gap-2"
          >
            <Trash2 className="size-4" />
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProductCart;
