import { Outlet } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';

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
        {/* Transition으로 메뉴 애니메이션 */}
        <Transition
          show={isShowing}
          enter="transition-transform duration-500"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className={`min-w-32 bg-red-600 `}>메뉴</div>
        </Transition>

        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
