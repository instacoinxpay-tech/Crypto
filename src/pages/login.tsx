import { useState } from "react";
import { useLocation } from "wouter"; // ⭐
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Link } from "wouter";
import { SiBinance } from "react-icons/si";
import { Navbar } from "../components/navbar";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation(); // ⭐

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 yahan future me API call aayegi
    console.log("Login:", formData);

    // ✅ SUCCESS LOGIN → DASHBOARD
    setLocation("/dashboard"); // ⭐
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar via-sidebar to-primary/20">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>

            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full flex items-center justify-center">
              <SiBinance className="w-12 h-12 text-yellow-400" />
            </div>

            <h1 className="text-2xl font-bold">Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>Email</Label>
             <Input
  type="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="bg-white text-black placeholder:text-gray-400"
/>
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Input
  type={showPassword ? "text" : "password"}
  placeholder="Enter password"
  value={formData.password}
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  }
  className="bg-white text-black placeholder:text-gray-400 pr-10"
/>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link href="/forgot-password" className="text-primary">
              Forgot Password?
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
