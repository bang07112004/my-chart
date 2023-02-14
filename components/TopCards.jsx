import React from "react";

function TopCards() {
  return (
    <div>
      <div className="grid gap-4 p-4 lg:grid-cols-5">
        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col justify-center py-2 ">
            <p className="text-2xl font-bold ">$7.864</p>
            <p className="text-gray-600">Daily Revenue</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+18%</span>
          </p>
        </div>
        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col justify-center py-2 ">
            <p className="text-2xl font-bold ">$1,437,764</p>
            <p className="text-gray-600">YTD Revenue</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+11%</span>
          </p>
        </div>
        <div className="flex w-full justify-between rounded-lg border bg-white p-4">
          <div className="flex w-full flex-col  justify-center py-2 ">
            <p className="text-2xl font-bold ">11,864</p>
            <p className="text-gray-600">Customers</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+17%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
