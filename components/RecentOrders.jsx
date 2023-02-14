import React from "react";
import { data } from "@/data/data";
function RecentOrders() {
  return (
    <div className="order relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2 hover:bg-gray-100"
          >
            <div className="rounded-lg bg-purple-100 p-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-purple-800"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pl-4">
              <p className="font-bold text-gray-800">${order.total}</p>
              <p className="text-md text-gray-400">{order.name.first}</p>
            </div>
            <p className="text-md absolute right-6 md:hidden lg:flex">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RecentOrders;
