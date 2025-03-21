
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicioResidencial from "./pages/ServicioResidencial";
import ServicioComercial from "./pages/ServicioComercial";
import ProyectosResidenciales from "./pages/ProyectosResidenciales";
import ProyectosComerciales from "./pages/ProyectosComerciales";
import SobreNosotros from "./pages/SobreNosotros";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/residencial" element={<ServicioResidencial />} />
          <Route path="/servicios/comercial" element={<ServicioComercial />} />
          <Route path="/proyectos/residenciales" element={<ProyectosResidenciales />} />
          <Route path="/proyectos/comerciales" element={<ProyectosComerciales />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
