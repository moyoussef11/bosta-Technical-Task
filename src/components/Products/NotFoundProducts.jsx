import { Search } from 'lucide-react';
import { useProductsStore } from '../../store/products.store';

const NotFoundProducts = () => {
  const error = useProductsStore((state) => state.error);

  return (
    <div className="my-20 flex flex-col items-center justify-center text-center col-start-1 col-end-7">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <Search />
      </div>
      <h2 className="text-xl font-bold text-slate-900">No products found</h2>
      <p className="mt-2 max-w-xs text-slate-500">
        We couldn't find anything matching your filters.
      </p>
      {error && <span className='text-red-500 my-4'>{error}</span>}
    </div>
  );
};

export default NotFoundProducts;
