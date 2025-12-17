import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import { Layout } from "./components/Layout";

import NotFound from "./pages/not-found";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import ConnectWallet from "./pages/ConnectWallet";
import Support from "./pages/Support";
import SendBTC from "./pages/SendBTC";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";

function Router() {
  return (
   <Switch>
  {/* Protected after login */}
  <Route path="/dashboard" component={Dashboard} />

  <Route path="/connect-wallet" component={ConnectWallet} />
  <Route path="/support" component={Support} />
  <Route path="/send" component={SendBTC} />
  <Route path="/report" component={Report} />

  <Route path="/login" component={Login} />
  <Route path="/signup" component={Signup} />
  <Route path="/forgot-password" component={ForgotPassword} />

  <Route path="/" component={Home} />
  <Route component={NotFound} />
</Switch>

  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
