export function PageCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="fade-in bg-[#1f4f99] p-6 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
      <h2 className="text-white text-xl font-semibold mb-4 text-center">
        {title}
      </h2>

      <div className="bg-sky-100 rounded-xl p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}
