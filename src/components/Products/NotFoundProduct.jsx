import { Undo2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundProduct = ({ id }) => {
  return (
    <div className="text-center py-20 mx-auto flex items-center justify-center flex-col space-y-5">
      <h4 className="text-xl font-semibold text-red-500 capitalize">
        not found product id is invalid {id}
      </h4>
      <Link
        to="/"
        className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 rounded-lg py-1 px-2 w-fit"
      >
        <Undo2Icon className="size-5" />
        Back to Products
      </Link>
    </div>
  );
};

export default NotFoundProduct;
