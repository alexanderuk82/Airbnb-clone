'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './ImgUser';
import { useCallback, useState } from 'react';
import MenuItem from './navbar/MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          className="hidden md:block text-sm font-semibold transition py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer"
          onClick={() => {}}
        >
          Airbnb your home
        </button>
        <div
          onClick={() => {
            toggle();
          }}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition"
        >
          <AiOutlineMenu />
          <div className="cursor-pointer">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40w] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
