import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">
      <Header />
      <main className="p-4 md:px-10 lg:px-14 xl:px-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
