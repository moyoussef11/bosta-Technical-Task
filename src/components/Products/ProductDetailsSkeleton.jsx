const ProductDetailsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="head flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-16 bg-slate-200 rounded" />
          <div className="h-3 w-3 bg-slate-200 rounded" />
          <div className="h-3 w-20 bg-slate-200 rounded" />
          <div className="h-3 w-3 bg-slate-200 rounded" />
          <div className="h-3 w-24 bg-slate-300 rounded" />
        </div>
        <div className="h-8 w-36 bg-slate-200 rounded-lg" />
      </div>
      <div className="details my-5 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full h-70 md:h-125 md:w-1/2 rounded-2xl bg-slate-200" />
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="h-6 w-24 bg-slate-200 rounded-2xl" />
          <div className="space-y-2">
            <div className="h-5 bg-slate-300 rounded w-3/4" />
            <div className="h-5 bg-slate-200 rounded w-2/3" />
          </div>
          <div className="h-6 w-20 bg-slate-300 rounded" />
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded" />
            <div className="h-3 bg-slate-200 rounded" />
            <div className="h-3 bg-slate-200 rounded w-5/6" />
          </div>
          <div className="h-10 bg-slate-200 rounded-lg" />
          <div className="flex items-center flex-wrap gap-3 mx-auto my-2">
            <div className="h-4 w-28 bg-slate-200 rounded" />
            <div className="h-4 w-32 bg-slate-200 rounded" />
            <div className="h-4 w-24 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
