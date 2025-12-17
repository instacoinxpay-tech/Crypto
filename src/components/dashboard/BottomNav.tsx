export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-2 md:hidden">
      {["Home", "Wallet", "Connect", "Rewards", "More"].map((item) => (
        <button
          key={item}
          className="text-xs bg-blue-100 px-3 py-1 rounded-full"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
