export default function SendBTC() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-2xl bg-[#cfefff] rounded-xl p-6 shadow-xl">

        {/* Title */}
        <h1 className="text-center text-black text-2xl font-bold mb-6">
          SEND BTC
        </h1>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm text-gray-800 mb-1">Address</label>
          <input
            placeholder="Long press to paste"
            className="w-full px-4 py-3 rounded-md outline-none"
          />
        </div>

        {/* Network */}
        <div className="mb-4">
          <label className="block text-sm text-gray-800 mb-1">Network</label>
          <input
            value="BTC"
            disabled
            className="w-full px-4 py-3 rounded-md outline-none bg-white"
          />
        </div>

        {/* Amount */}
        <div className="mb-2">
          <label className="block text-sm text-gray-800 mb-1">
            Withdrawal Amount
          </label>
          <div className="relative">
            <input
              placeholder="0"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
            <span className="absolute right-4 top-3 text-sm font-medium">
              USD <span className="text-yellow-500 ml-1 cursor-pointer">MAX</span>
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-700 mb-4">
          Available <span className="float-right">$5713.00 in USD</span>
        </div>

        <hr className="my-3 border-gray-300" />

        <p className="text-xs text-gray-700 mb-3">
          * Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.
        </p>

        <hr className="my-3 border-gray-300" />

        <div className="flex justify-between text-sm text-gray-800 mb-4">
          <div>
            Receive Amount
            <div className="text-xs">$0.00000 in USD</div>
            <div className="text-xs">Network Fee 0 USD</div>
          </div>

          <button className="bg-sky-400 hover:bg-sky-500 transition px-6 py-2 rounded-md font-medium">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
