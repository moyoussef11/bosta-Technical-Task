
const CategoriesSkeleton = () => {
  return (
    <div className="categories flex items-center flex-wrap gap-2 animate-pulse">
      <div className="h-5 w-24 bg-slate-300 rounded-full" />
      <div className="h-5 w-28 bg-slate-200 rounded-full" />
      <div className="h-5 w-20 bg-slate-200 rounded-full" />
      <div className="h-5 w-32 bg-slate-200 rounded-full" />
    </div>
  );
};

export default CategoriesSkeleton;
