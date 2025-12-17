export default function Support() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-2xl bg-[#1f4f9a] rounded-xl p-6 shadow-xl">
        
        {/* Title */}
        <h1 className="text-center text-white text-2xl font-bold mb-6">
          SUPPORT
        </h1>

        {/* Form Card */}
        <div className="bg-[#cfefff] rounded-xl p-6 space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full px-4 py-3 rounded-md outline-none resize-none"
            />
          </div>

          {/* File upload */}
          <div className="bg-white rounded-md px-3 py-2 flex items-center gap-3">
            <input type="file" className="text-sm" />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-sky-400 to-blue-600 text-black font-medium py-3 rounded-md text-lg hover:opacity-90 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
