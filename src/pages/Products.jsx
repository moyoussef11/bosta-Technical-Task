import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import CardProduct from '../components/Products/CardProduct';
import CardProductSkeleton from '../components/Products/CardProductSkeleton';
import NotFoundProducts from '../components/Products/NotFoundProducts';
import CategoriesSkeleton from '../components/Products/CategoriesSkeleton';
import useProducts from '../hooks/useProducts';

const Products = () => {
  const {
    loading,
    categoriesData,
    setSelectedCategory,
    selectedCategory,
    setSortOrder,
    currentProducts,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useProducts();

  return (
    <div className="pt-16 py-5">
      <div className="filters flex items-center justify-between flex-col gap-5 md:flex-row border-b border-slate-200 pb-5">
        {loading ? (
          <CategoriesSkeleton />
        ) : categoriesData.length === 0 ? (
          'not found categories'
        ) : (
          <div className="categories flex items-center flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full capitalize ${selectedCategory === 'all' ? 'bg-main text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-main hover:text-main'}  px-4 py-1.5 text-sm font-medium  cursor-pointer`}
            >
              All Items
            </button>
            {categoriesData.map((cat, index) => (
              <button
                onClick={() => setSelectedCategory(cat)}
                key={index}
                className={`rounded-full capitalize ${selectedCategory === cat ? 'bg-main text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-main hover:text-main'}  px-4 py-1.5 text-sm font-medium   transition-all cursor-pointer`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
        <div className="sort-price flex items-center gap-3">
          <label className="text-sm font-medium text-slate-500" htmlFor="sort">
            Sort by
          </label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-lg border border-slate-300 py-2 pl-3 pr-10 text-sm focus:border-main focus:outline-main focus:ring-main"
            id="sort"
          >
            <option value="">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="products-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 my-10">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <CardProductSkeleton key={index} />
          ))
        ) : currentProducts.length === 0 ? (
          <NotFoundProducts />
        ) : (
          currentProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        )}
      </div>

      <div className="pagination mx-auto w-fit flex items-center gap-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`border border-slate-300 ${currentPage === 1 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:border-slate-400'} rounded-xl text-sm p-2  duration-200`}
        >
          <ChevronsLeftIcon className="size-5" />
        </button>
        <ul className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => setCurrentPage(i + 1)}
                className={`py-1 px-3 rounded-xl cursor-pointer duration-200 ${
                  currentPage === i + 1
                    ? 'text-white bg-main'
                    : 'text-black hover:bg-main hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`border border-slate-300 ${currentPage === totalPages ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:border-slate-400'} rounded-xl text-sm p-2  duration-200`}
        >
          <ChevronsRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Products;
