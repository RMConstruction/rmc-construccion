
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
import Construccion from "./pages/Construccion";
import ProjectManager from "./pages/ProjectManager";
import Planos2D from "./pages/Planos2D";
import Renders3D from "./pages/Renders3D";
import Permisos from "./pages/Permisos";
import Contacto from "./pages/Contacto";

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
          <Route path="/servicios/construccion" element={<Construccion />} />
          <Route path="/servicios/project-manager" element={<ProjectManager />} />
          <Route path="/servicios/planos-2d" element={<Planos2D />} />
          <Route path="/servicios/renders-3d" element={<Renders3D />} />
          <Route path="/servicios/permisos" element={<Permisos />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
