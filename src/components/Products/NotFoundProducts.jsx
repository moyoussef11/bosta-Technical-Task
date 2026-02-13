import { Search } from 'lucide-react';

const NotFoundProducts = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <Search />
      </div>
      <h2 className="text-xl font-bold text-slate-900">No products found</h2>
      <p className="mt-2 max-w-xs text-slate-500">
        We couldn't find anything matching your filters.
      </p>
    </div>
  );
};

export default NotFoundProducts;
