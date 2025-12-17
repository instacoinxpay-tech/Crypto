const assets = [
  { name: "Bitcoin", symbol: "BTC", price: "$128,966.43", balance: "$5713" },
  { name: "BNB", symbol: "BNB", price: "$8,966.43", balance: "$713" },
  { name: "USDT", symbol: "USDT", price: "$18,888.7", balance: "$8766" },
  { name: "ETH", symbol: "ETH", price: "$128,966.43", balance: "$5713" },
  { name: "SOL", symbol: "SOL", price: "$128,966.43", balance: "$5713" },
];

export default function AssetList() {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-sm font-semibold">Assets</h2>

      {assets.map((a) => (
        <div
          key={a.symbol}
          className="bg-white rounded-xl p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{a.symbol}</p>
            <p className="text-xs text-gray-500">{a.name}</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">{a.price}</p>
            <p className="text-xs text-gray-500">{a.balance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
