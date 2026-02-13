const CardProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 shadow-lg rounded-2xl animate-pulse">
      <div className="rounded-2xl relative">
        <div className="rounded-2xl h-75 w-full bg-slate-200" />
        <div className="absolute left-3 top-3 h-5 w-20 bg-slate-300 rounded-2xl" />
      </div>
      <div className="py-3 px-2 flex flex-col gap-3">
        <div className="h-4 bg-slate-200 rounded w-3/4" />
        <div className="h-4 bg-slate-200 rounded w-1/2" />
        <div className="my-3 grid grid-cols-2 gap-3">
          <div className="h-10 bg-slate-200 rounded-lg" />
          <div className="h-10 bg-slate-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CardProductSkeleton;
