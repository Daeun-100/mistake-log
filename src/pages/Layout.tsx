import { Outlet } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Layout = () => (
  <div className="flex flex-col items-center w-full h-full">
    <h1 className="font-extrabold text-4xl pt-6 pb-4 border-b-2 w-full text-center">
      Mistake - log
    </h1>
    <div className="flex w-full h-full">
      <div className="min-w-32 bg-red-600 hidden md:block ">메뉴</div>

      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  </div>
);

export default Layout;
