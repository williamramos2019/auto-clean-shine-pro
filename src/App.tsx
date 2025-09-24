import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Maintenance from "./pages/Maintenance";
import GalleryPage from "./pages/Gallery";
import TestimonialsPage from "./pages/Testimonials";
import Contact from "./pages/Contact";
import CalculatorPage from "./pages/Calculator";
import Booking from "./pages/Booking";
import FAQPage from "./pages/FAQ";
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
          <Route path="/servicos" element={<Services />} />
          <Route path="/manutencao" element={<Maintenance />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/calculadora" element={<CalculatorPage />} />
          <Route path="/agendamento" element={<Booking />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
