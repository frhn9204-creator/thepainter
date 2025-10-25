import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EarlyLife from "./pages/EarlyLife";
import RiseToPower from "./pages/RiseToPower";
import Ideology from "./pages/Ideology";
import Holocaust from "./pages/Holocaust";
import Aftermath from "./pages/Aftermath";
import Epilogue from "./pages/Epilogue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/early-life" element={<EarlyLife />} />
          <Route path="/rise-to-power" element={<RiseToPower />} />
          <Route path="/ideology" element={<Ideology />} />
          <Route path="/holocaust" element={<Holocaust />} />
          <Route path="/aftermath" element={<Aftermath />} />
          <Route path="/epilogue" element={<Epilogue />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
