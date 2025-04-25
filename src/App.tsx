// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ServicioResidencial from "./pages/ServicioResidencial";
// import ServicioComercial from "./pages/ServicioComercial";
// import ProyectosResidenciales from "./pages/ProyectosResidenciales";
// import ProyectosComerciales from "./pages/ProyectosComerciales";
// import SobreNosotros from "./pages/AboutUs/AboutUs";
// import Construccion from "./pages/Construction/Construccion";
// import ProjectManager from "./pages/ProjectManager/ProjectManager";
// import Planos2D from "./pages/Planos2D";
// import Permisos from "./pages/Permissions/Permisos";
// import Contacto from "./pages/Contacto";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/servicios/residencial" element={<ServicioResidencial />} />
//           <Route path="/servicios/comercial" element={<ServicioComercial />} />
//           <Route path="/proyectos/residenciales" element={<ProyectosResidenciales />} />
//           <Route path="/proyectos/comerciales" element={<ProyectosComerciales />} />
//           <Route path="/sobre-nosotros" element={<SobreNosotros />} />
//           <Route path="/servicios/construccion" element={<Construccion />} />
//           <Route path="/servicios/project-manager" element={<ProjectManager />} />
//           <Route path="/servicios/planos-2d" element={<Planos2D />} />
//           <Route path="/servicios/permisos" element={<Permisos />} />
//           <Route path="/contacto" element={<Contacto />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;












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
import SobreNosotros from "./pages/AboutUs/AboutUs";
import Construccion from "./pages/Construction/Construccion";
import ProjectManager from "./pages/ProjectManager/ProjectManager";
import Planos2D from "./pages/Planos2D";
import Permisos from "./pages/Permissions/Permisos";
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
          <Route path="/services/residential" element={<ServicioResidencial />} />
          <Route path="/services/commercial" element={<ServicioComercial />} />
          <Route path="/projects/residential" element={<ProyectosResidenciales />} />
          <Route path="/projects/commercial" element={<ProyectosComerciales />} />
          <Route path="/about-us" element={<SobreNosotros />} />
          <Route path="/services/construction-zone" element={<Construccion />} />
          <Route path="/services/project-management" element={<ProjectManager />} />
          <Route path="/services/design-studio" element={<Planos2D />} />
          <Route path="/services/building-permits" element={<Permisos />} />
          <Route path="/contact" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
