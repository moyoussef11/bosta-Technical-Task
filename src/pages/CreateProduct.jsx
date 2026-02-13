const CreateProduct = () => {
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
      <form className="bg-white rounded-2xl p-5 md:p-10 border border-slate-300 my-5 flex flex-col gap-5">
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
              className="rounded-lg border border-slate-300 bg-white py-2 px-4  text-sm focus:border-main focus:ring-4 focus:ring-main/10"
              id="category"
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Apparel</option>
              <option value="home">Home &amp; Decor</option>
              <option value="software">Software</option>
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
              type="number"
              name="price"
              id="price"
              min="0"
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
            name="productImg"
            id="productImg"
            className="p-2 px-4 rounded-lg bg-white border border-slate-300 focus:border-main focus:ring-main focus:outline-main"
            placeholder="Enter your Link product Img"
          />
        </div>
        <button
          type="submit"
          className="capitalize w-full bg-main text-white p-2 rounded-lg mt-5 cursor-pointer hover:bg-main/50"
        >
          {' '}
          add product{' '}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
