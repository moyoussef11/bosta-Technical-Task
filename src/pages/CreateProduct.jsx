import useAddProduct from '../hooks/useAddProduct';

const CreateProduct = () => {
  const { submit, form, setForm, categoriesData, loading } = useAddProduct();

  return (
    <div className="bg-re-400 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl capitalize font-semibold">
          Create New Product
        </h4>
        <p className="text-slate-500 text-xl">
          Enter the core details to list your item in the marketplace.
        </p>
      </div>
      <form
        onSubmit={submit}
        className="bg-white rounded-2xl p-5 md:p-10 border border-slate-300 my-5 flex flex-col gap-5"
      >
        <div className="group-input flex flex-col gap-2">
          <label
            className="capitalize font-medium w-fit text-slate-700"
            htmlFor="title"
          >
            Product title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-2 px-4 rounded-lg bg-white border border-slate-300 focus:border-main focus:ring-main focus:outline-main"
            placeholder="Enter your product title..."
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between gap-2">
            <label
              className="text-sm font-semibold text-slate-700 "
              htmlFor="category"
            >
              Category
            </label>
            <select
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="rounded-lg border border-slate-300 bg-white py-2 px-4  text-sm focus:border-main focus:ring-4 focus:ring-main/10"
              id="category"
            >
              <option value="">Select category</option>
              {categoriesData.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="group-input flex flex-col justify-between gap-2">
            <label
              className="capitalize font-medium w-fit text-slate-700"
              htmlFor="price"
            >
              price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="py-2 px-4 rounded-lg bg-white border border-slate-300 focus:border-main focus:ring-main focus:outline-main"
              placeholder="Enter your product price..."
            />
          </div>
        </div>
        <div className="group-input flex flex-col gap-2">
          <label
            className="capitalize font-medium w-fit text-slate-700"
            htmlFor="Description"
          >
            Description{' '}
          </label>
          <textarea
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-main focus:outline-main focus:ring-4 focus:ring-main/10"
            id="description"
            placeholder="Describe the product..."
            rows="4"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>
        </div>
        <div className="group-input flex flex-col gap-2">
          <label
            className="capitalize font-medium w-fit text-slate-700"
            htmlFor="productImg"
          >
            Product Image URL{' '}
          </label>
          <input
            type="text"
            name="image"
            id="productImg"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="p-2 px-4 rounded-lg bg-white border border-slate-300 focus:border-main focus:ring-main focus:outline-main"
            placeholder="Enter your Link product Img"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className={`capitalize w-full p-2 rounded-lg mt-5 text-white
        ${
          loading
            ? 'bg-gray-500 cursor-not-allowed opacity-50'
            : 'bg-main hover:bg-main/80 cursor-pointer'
        }`}
        >
          {' '}
          {loading ? 'Loading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
