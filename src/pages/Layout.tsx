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
          enter="transition-all duration-500"
          enterFrom="w-0"
          enterTo="w-32"
          leave="transition-all duration-500"
          leaveFrom="w-32"
          leaveTo="w-0"
        >
          <div className={`w-32 bg-red-600`}>
            <div className="whitespace-nowrap">메ㄴㅇㄹㄹ뉴</div>
            <div className="whitespace-nowrap">
              카테고ㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄴㅇㄹㄹ리
            </div>
            <div className="whitespace-nowrap">아카이ㄴㅇㄹㄴㅇㄹ브</div>
          </div>
        </Transition>

        <div className="flex-grow h-full bg-gray-200  transition-all duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
