import TopBar from "../components/dashboard/TopBar";
import BalanceCard from "../components/dashboard/BalanceCard";
import AssetList from "../components/dashboard/AssetList";
import BottomNav from "../components/dashboard/BottomNav";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#245aa6] flex justify-center">
      <div className="w-full max-w-md md:max-w-6xl px-4 pb-20">
        <TopBar />
        <BalanceCard />
        <AssetList />
      </div>

      {/* Mobile bottom nav */}
      <BottomNav />
    </div>
  );
}
