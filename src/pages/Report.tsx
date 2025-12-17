export default function Report() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-2xl bg-[#24579e] rounded-xl p-6 shadow-xl">

        {/* Title */}
        <h1 className="text-center text-white text-2xl font-bold mb-6">
          REPORT
        </h1>

        {/* Form */}
        <div className="bg-[#cfefff] rounded-xl p-6 space-y-4">

          <div>
            <label className="block text-sm text-gray-800 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter email you want to report"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
          </div>

          <div>
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full px-4 py-3 rounded-md outline-none resize-none"
            />
          </div>

          <div className="bg-white px-3 py-2 rounded-md flex items-center gap-3">
            <input type="file" className="text-sm" />
          </div>
        </div>

        {/* Submit */}
        <button className="w-full mt-6 bg-gradient-to-r from-sky-400 to-blue-600 text-black font-medium py-3 rounded-md text-lg hover:opacity-90 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
