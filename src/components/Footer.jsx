import { Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 mt-20 border-t border-slate-200 bg-white/80 backdrop-blur-md flex flex-col items-center gap-5 justify-center text-main">
      {' '}
      <div className="flex items-center gap-2 capitalize">
        {' '}
        <Store />
        <h4 className="text-2xl font-bold">store</h4>
      </div>
      <p className='text-center'>
        © 2026 store simple E-commerce. Built for Frontend Technical Assessment{' '}
        <a
          href="https://www.linkedin.com/company/bostaapp/posts/?feedView=all"
          target="_blank"
          className="text-red-500 font-black"
        >
          BOSTA
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
