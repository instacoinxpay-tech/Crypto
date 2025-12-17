import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Link, useLocation } from "wouter";
import { SiEthereum } from "react-icons/si";
import { Navbar } from "../components/navbar";
import { Eye, EyeOff } from "lucide-react";

type Step = "country" | "account" | "verification";

export default function Signup() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<Step>("country");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    referralCode: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    verificationCode: ["", "", "", "", "", ""],
  });

  const handleCountrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("account");
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("verification");
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/");
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...formData.verificationCode];
      newCode[index] = value;
      setFormData({ ...formData, verificationCode: newCode });
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar via-sidebar to-primary/20">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        {step === "country" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <h1 className="text-2xl font-bold">LET'S GET STARTED</h1>
            </div>

            <form onSubmit={handleCountrySubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sidebar-foreground">country of residence</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground" data-testid="select-country">
                    <SelectValue placeholder="select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sidebar-foreground">
                  Have a referral code?<span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  placeholder="Enter code"
                  value={formData.referralCode}
                  onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
                  data-testid="input-referral-code"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-continue">
                Continue
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </Card>
        )}

        {step === "account" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full flex items-center justify-center">
                <SiEthereum className="w-12 h-12 text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold">CREATE ACCOUNT</h1>
            </div>

            <form onSubmit={handleAccountSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Full Name</Label>
                <Input
                  placeholder="Enter Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
                  data-testid="input-full-name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Email</Label>
                <Input
                  type="email"
                  placeholder="@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
                  data-testid="input-signup-email"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sidebar-foreground">Enter Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground pr-10"
                    data-testid="input-signup-password"
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
                  data-testid="input-confirm-password"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-create-account">
                Continue
              </Button>
            </form>
          </Card>
        )}

        {step === "verification" && (
          <Card className="w-full max-w-md bg-sidebar border-sidebar-border p-8 text-sidebar-foreground">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-muted-foreground mb-4">DEMO</div>
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/50 rounded-full" />
                <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">B</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold">Verification Code</h1>
              <p className="text-muted-foreground text-sm mt-2">
                We have sent the verification code to your email address
              </p>
            </div>

            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <div className="flex justify-center gap-3">
                {formData.verificationCode.map((digit, index) => (
                  <Input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl bg-sidebar-accent border-sidebar-border text-sidebar-foreground"
                    data-testid={`input-code-${index}`}
                  />
                ))}
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-code">
                Submit
              </Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
