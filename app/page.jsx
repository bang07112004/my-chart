import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div
        className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text py-3 px-5 text-transparent
      "
      >
        <p className="lg:6xl text-5xl font-bold">Dashboard</p>
      </div>
      <TopCards />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 ">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
