import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-slate-100 mt-5 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back </h1>
          <p className="text-slate-400 text-sm mt-2">Login to your account</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="username" className="text-sm text-slate-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-main focus:ring-2 focus:ring-main"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-slate-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-main focus:ring-2 focus:ring-main"
            />
          </div>

          <button className="w-full bg-main text-white py-2 rounded-lg font-medium hover:bg-main/50 cursor-pointer transition">
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-slate-500">
          Don’t have an account?{' '}
          <Link to="/register" className="text-main font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
