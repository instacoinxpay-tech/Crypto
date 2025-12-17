import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Link, useLocation } from "wouter";
import { SiBitcoin } from "react-icons/si";
import { Navbar } from "../components/navbar";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";

type Step = "email" | "verify" | "reset" | "success";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<Step>("email");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: ["", "", "", "", "", ""],
    password: "",
    confirmPassword: "",
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("verify");
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("reset");
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...formData.verificationCode];
      newCode[index] = value;
      setFormData({ ...formData, verificationCode: newCode });
      if (value && index < 5) {
        const nextInput = document.getElementById(`reset-code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar via-sidebar to-primary/20">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        {step === "email" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/50 rounded-full" />
                <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <SiBitcoin className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-2xl font-bold">Forget Password</h1>
              <p className="text-muted-foreground text-sm mt-2">
                Please enter your Email to recover the password
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
                  data-testid="input-forgot-email"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-reset-password">
                Reset Password
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </Card>
        )}

        {step === "verify" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-400/30 to-amber-600/50 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold">Verification Code</h1>
              <p className="text-muted-foreground text-sm mt-2">
                We have sent the verification code to your email address
              </p>
            </div>

            <form onSubmit={handleVerifySubmit} className="space-y-6">
              <div className="flex justify-center gap-3">
                {formData.verificationCode.map((digit, index) => (
                  <Input
                    key={index}
                    id={`reset-code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl bg-sidebar-accent border-sidebar-border text-sidebar-foreground"
                    data-testid={`input-verify-code-${index}`}
                  />
                ))}
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-verify-code">
                Verify Code
              </Button>
            </form>
          </Card>
        )}

        {step === "reset" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-purple-600/50 rounded-full" />
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="text-4xl">🎮</div>
                </div>
              </div>
              <h1 className="text-2xl font-bold">SET A NEW PASSWORD</h1>
              <p className="text-muted-foreground text-sm mt-2">
                Create a new password. Ensure it differs from previous ones for security
              </p>
            </div>

            <form onSubmit={handleResetSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Enter Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground pr-10"
                    data-testid="input-new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-sidebar-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Enter Password</Label>
                <Input
                  type="password"
                  placeholder="Re-enter Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
                  data-testid="input-confirm-new-password"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-update-password">
                Update Password
              </Button>
            </form>
          </Card>
        )}

        {step === "success" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold">Password Reset</h1>
              <p className="text-muted-foreground text-sm mt-2">
                Your password has been successfully reset, click confirm to set a new password
              </p>
            </div>

            <Button
              onClick={() => setLocation("/login")}
              className="w-full"
              size="lg"
              data-testid="button-confirm"
            >
              Confirm
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
