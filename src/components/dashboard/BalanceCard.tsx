export default function BalanceCard() {
  return (
    <div className="bg-white rounded-xl p-5 shadow mb-6">
      <p className="text-sm text-gray-500 text-center">Total Balance</p>
      <h1 className="text-2xl font-bold text-center">$43,678.70</h1>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {[
          { label: "Deposit", color: "bg-green-400" },
          { label: "Withdraw", color: "bg-red-400" },
          { label: "Buy", color: "bg-yellow-400" },
          { label: "History", color: "bg-orange-400" },
        ].map((item) => (
          <div
            key={item.label}
            className={`${item.color} text-white text-xs py-3 rounded-lg text-center`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
