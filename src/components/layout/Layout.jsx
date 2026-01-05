import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

