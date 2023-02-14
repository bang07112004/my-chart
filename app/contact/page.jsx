import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
function page() {
  return (
    <div className="mb-10 flex flex-col ">
      <div className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text py-3 px-5 text-transparent">
        <p className="lg:6xl text-5xl font-bold">Contact</p>
      </div>
      <Image
        alt=""
        src="/avatar.jpg"
        width={500}
        height={500}
        className="mx-auto my-5 h-52 w-52 rounded-full md:h-60 md:w-60"
      />
      <div className="mx-auto flex min-h-[30vh] w-fit flex-col items-center justify-center space-y-4 rounded-xl bg-gradient-to-b from-pink-500 to-blue-500 px-5 py-10">
        <div className=" flex items-center gap-2">
          <p className="text-2xl font-bold text-white md:text-3xl">Twitter:</p>
          <SocialIcon url="https://twitter.com/12cl201" />
        </div>
        <div className=" flex items-center gap-2">
          <p className="text-2xl font-bold text-white md:text-3xl">Facebook:</p>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100083708621101" />
        </div>
        <div className=" flex items-center gap-2">
          <p className="text-2xl font-bold text-white md:text-3xl">Github:</p>
          <SocialIcon url="https://github.com/bang07112004" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <p className="flex flex-col items-center justify-center text-2xl font-bold text-white md:text-3xl">
              Phone:
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-purple-800 bg-clip-text p-3">
            <p className="text-xl font-bold text-transparent md:text-2xl">
              0932091173
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <p className="flex flex-col items-center justify-center text-2xl font-bold text-white md:text-3xl">
              Email:
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-purple-800 bg-clip-text p-3">
            <p className="text-xl font-bold text-transparent md:text-2xl">
              phong0909191145@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
