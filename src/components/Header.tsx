import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      <div className="justify-center flex items-center">
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Desh Drishti"
              width={45}
              height={45}
              className="w-9 h-9 sm:w-11 sm:h-11"
            />
          </Link>

          <div>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-bold text-green-600">
              Desh Drishti
            </h2>
            <p className="text-[9px] sm:text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 ml-auto">
        <button className="btn btn-xs sm:btn-sm md:btn-md">সাইন ইন</button>
        <button className="btn bg-green-700 text-white btn-xs sm:btn-sm md:btn-md">
          সাইন আপ
        </button>
      </div>
    </div>
  );
};

export default Header;
