import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Layout = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="font-extrabold text-4xl pt-6 pb-4 border-b-2 w-full text-center">
        Mistake - log
      </h1>
      <div className="flex w-full h-full">
        {/* 메뉴 버튼: 작은 화면에서는 메뉴를 토글 */}
        <button
          onClick={() => setIsShowing((prev) => !prev)}
          className="md:hidden bg-blue-500 text-white p-2 rounded absolute top-2 left-2 z-10"
        >
          Toggle Menu
        </button>

        <div
          className={`flex flex-col bg-red-600 transition-all duration-200  bg-${
            isShowing ? 'w-32' : 'w-0'
          }`}
        >
          <Link to="/" className="whitespace-nowrap">
            메뉴
          </Link>
          <Link to="category" className="whitespace-nowrap">
            카테고리
          </Link>
          <Link to="archive" className="whitespace-nowrap">
            아카이브
          </Link>
        </div>

        <div className="flex-grow h-full bg-gray-200  transition-all duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
