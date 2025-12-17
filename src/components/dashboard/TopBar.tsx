export default function TopBar() {
  return (
    <div className="flex justify-between items-center py-4">
      <span className="text-yellow-400 text-sm font-semibold"></span>

      <div className="flex items-center gap-3">
        <button className="bg-white/20 p-2 rounded-full">🔔</button>
        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full border"
        />
      </div>
    </div>
  );
}
