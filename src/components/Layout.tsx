import { Navbar } from "../components/navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#0f2f5f]">
      {/* Navbar full width */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 pt-16 w-full">
        {children}
      </main>

      {/* Footer full width */}
      <Footer />
    </div>
  );
}
